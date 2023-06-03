import userModel from "../models/userModel";
import { hashPassword } from "../helpers/authHelper";
export const registerController = async (req, res) => {
  try {
    const { name, email, password, address, phone } = req.body;

    //checkUser

    const exisitingUser = userModel.find({ email });

    if (exisitingUser) {
      return res.send({
        success: false,
        message: "user already registered!",
      });
    }
    const hashedPassword = await hashPassword(password);
    const user = await new userModel({
      name,
      email,
      password: hashedPassword,
      address,
      phone,
    });
    user.save();

    return res.send({
      success: true,
      message: "registered successfuly!",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Errro in Registeration",
      error,
    });
  }
};
