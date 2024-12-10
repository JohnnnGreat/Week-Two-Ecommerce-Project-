import mongoose, { Document, Schema } from "mongoose";

export type AuthType = {
   name?: string;
   password: string;
   email: string;
};

interface AuthDocument extends Document, AuthType {}

const AuthSchema: Schema = new mongoose.Schema<AuthDocument>(
   {
      name: {
         type: String,
         required: true,
      },

      email: {
         type: String,
         required: true,
      },

      password: {
         type: String,
         required: true,
      },
   },
   {
      timestamps: true,
   },
);

const Auth = mongoose.model<AuthDocument>("Auth", AuthSchema);

export default Auth;
