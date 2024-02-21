import User from "@/models/User";
import connectToDB  from "@/libs/mongodb";
import bcrypt from "bcrypt";

export async function POST(req) {
  const body = await req.json();
  await connectToDB();

  const pass = body.password;
  if (pass.length < 6) {
    new Error('password must be at least 6 characters');
  }

  const notHashedPassword = pass;
  const salt = bcrypt.genSaltSync(10);
  body.password = bcrypt.hashSync(notHashedPassword, salt);

  const createdUser = await User.create(body);
  return Response.json(createdUser);
}
