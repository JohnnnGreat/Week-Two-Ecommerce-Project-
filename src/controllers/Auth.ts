import { NextFunction, Request, Response } from "express";
import Auth, { AuthType } from "../Schema/Auth";

export const Register = async (req: Request, res: Response, next: NextFunction): Promise<Response | any> => {
   try {
      const { email } = req.body;
      const user = await Auth.findOne({ email: req.body.email });

      if (user) {
         return res.status(400).json({ message: "User Already Registered" });
      }

      // TODO: Encrypt the password with bcrypt, but i am going to skip this step for now
      const newUser = new Auth<AuthType>(req.body);

      await newUser.save();

      const { password, ...returnedUser } = newUser.toObject();

      res.status(201).json({ message: "User Registered", user: returnedUser });
   } catch (error) {
      next(error);
   }
};

export const Login = async (req: Request, res: Response, next: NextFunction): Promise<Response | any> => {
   try {
      const { email } = req.body;

      const user = await Auth.findOne<AuthType>({ email });

      if (!user) {
         return res.status(404).json({ message: "User not found" });
      }

      if (user.password !== req.body.password) {
         return res.status(404).json({ message: "Password is incorrect" });
      }

      const { password, ...userInformation } = (user as any).toObject();

      return res.status(200).json({ message: "Login Successfully", user: userInformation });
   } catch (error) {
      next(error);
   }
};
