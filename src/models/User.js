
 import mongoose, {Schema} from "mongoose";
 import bcrypt from "bcrypt";

const UserSchema = new Schema({
  name: {type: String},
  email: {type: String, required: true, unique: true},
  password: {
    type: String,
    required: true,
    validate: pass => {
      if(!pass?.length || pass.length < 6) {
        new Error('Password must be at least 5 characters');
      }
    },
  },
  image: {type: String}
} , {timestamps: true});

/*UserSchema.post('validate', function (user) {
  const notHashedPassword = user.password;
  const salt = bcrypt.genSaltSync(10);
  user.password = bcrypt.hashSync(notHashedPassword, salt);
})*/

const User =  mongoose.models?.User || mongoose.model('User', UserSchema);
export default User;