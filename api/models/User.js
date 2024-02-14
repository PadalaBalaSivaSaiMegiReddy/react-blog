const mongoose = require("mongoose")

const UserSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique:true,
    },
    email: {
      type: String,
      required: true,
      unique:true,
    },
    password: {
      type: String,
      required: true,
    },
    profilepicture: {
        type:String,
        default:"",

    },
},
{timestamp:true}
);

export const Book = mongoose.model('User', UserSchema);