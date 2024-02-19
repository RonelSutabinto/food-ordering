import User from "@/models/User";
import connectToDB  from "@/libs/mongodb";

export async function POST(req) {
  const body = await req.json();
  await connectToDB();

  const createdUser = await User.create(body);
  return Response.json(createdUser);
}
