// MERN-Fullstack/backend/models/UserModel.js

// import mongoose from "mongoose";

// const userSchema = new mongoose.Schema(
//   {
//     name: {
//       type: String,
//       required: true,
//     },
//     alamat: {
//       type: String,
//       required: true,
//     },
//     telpon: {
//       type: String,
//       required: true,
//     },
//     email: {
//       type: String,
//       required: true,
//       unique: true,
//     },
//     gender: {
//       type: String,
//       required: true,
//     },
//   },
//   { timestamps: true }
// );

// const User = mongoose.model("User", userSchema);
// export default User;

import mongoose from "mongoose";

// Define the user schema with the required fields
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    alamat: {
      type: String,
      required: true,
    },
    telpon: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    gender: {
      type: String,
      required: true,
    },
  },
  { timestamps: true } // Adds createdAt and updatedAt timestamps
);

// Create the User model using the user schema
const User = mongoose.model("User", userSchema);

// Export the User model
export default User;
