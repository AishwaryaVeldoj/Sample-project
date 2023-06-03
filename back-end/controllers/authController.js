import userModel from "../models/userModel";

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
  } catch (error) {}
};
