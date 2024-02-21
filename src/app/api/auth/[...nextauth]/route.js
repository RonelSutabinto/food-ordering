import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import connectToDB  from "@/libs/mongodb";
import clientPromise from "@/libs/mongoConnect";
import User from '@/models/User';
import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import bcrypt from "bcrypt";
// import mongoose from "mongoose";

const handler = NextAuth({
  secret: process.env.SECRET,
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: 'Credentials',
      id: 'credentials',
      credentials: {
        username: { label: "Email", type: "email", placeholder: "test@example.com" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        const {email, password} = credentials; 
  
        // mongoose.connect(process.env.MONGO_URI);
        await connectToDB();
        const user = await User.findOne({email});
        const passwordOk = user && bcrypt.compareSync(password, user.password);

        console.log({passwordOk});

        if (passwordOk) {
          return user;
        }

        return null
      }
    })
  ]
})

export { handler as GET, handler as POST }