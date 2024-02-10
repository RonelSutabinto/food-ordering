
// import { connectToDB } from "@/libs/mongodb";
// import User from '@/models/User';

// export async function POST(req) {
//   const body = await req.json();
//   //mongoose.connect(process.env.MONGODB_URL)
//   // mongoose.connect(MONGODB_URI)
//   await connectToDB();

//   const createdUser = await User.create(body)
//   return Response.json(createdUser);
// }

import {User} from "@/models/User";
//import bcrypt from "bcrypt";
// import mongoose from "mongoose";
import { connectToDB } from "@/libs/mongodb";

export async function POST(req) {
  const body = await req.json();
  // mongoose.connect(process.env.MONGO_URL);
  await connectToDB();

  const pass = body.password;
  if (!pass?.length || pass.length < 5) {
    new Error('password must be at least 5 characters');
  }

  // const notHashedPassword = pass;
  // const salt = bcrypt.genSaltSync(10);
  // body.password = bcrypt.hashSync(notHashedPassword, salt);

  const createdUser = await User.create(body);
  return Response.json(createdUser);
}