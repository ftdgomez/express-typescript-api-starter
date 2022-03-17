export default {}
// import { NextFunction, Request, Response } from "express";
// import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";
// import Store, { IStore } from "../users/store.model";

// async function matchPasswords(enteredPassword: string, storedPassword: string) {
//   return await bcrypt.compare(enteredPassword, storedPassword);
// }

// const generateToken = (id: string) => {
//   return jwt.sign({ id }, process.env.JWT_SECRET || "", {
//     expiresIn: "30d",
//   });
// };
// const auth = async (req: Request, res: Response, next: NextFunction) => {
//   try {
//     const { email, password } = req.body;
//     if (!email || !password) throw new Error("Email and password are required");
//     const user = await Store.findOne({ email }) as unknown as IStore;
//     if (!user) throw new Error("User not found");
//     console.log(user)
//     if (!(await matchPasswords(password, user.password)))
//       throw new Error("Invalid password");
//     // select out password and apikey from the user
//     //@ts-ignore
//     const { password: _, apikey: __, ...u } = user.toObject();
//     res.json({
//       token: generateToken(user._id as string),
//       ...u,
//     });
//   } catch (error:any) {
//     next(error);
//   }
// }

// export default auth;
