import { Contact } from "../Models/ContactModel.js";

export const contactSubmissionController = async function (req, res) {
  try {
    const { email, fullName, city, mobileNumber } = req.body;
    const contact = new Contact({
      email,
      fullName,
      city,
      mobileNumber,
    });
    await contact.save();
    res.status(200).json({
      message: "Form Submitted Successfully",
      success: true,
      error: false,
    });
  } catch (error) {
    res.status(400).json({
      messsage: error.message,
      error: true,
      success: false,
    });
  }
};

export const getAllContactDetails = async function (_, res) {
  try {
    const allData = await Contact.find();
    res.status(200).json({
      message: "Data deliverd",
      success: true,
      error: false,
      data: allData,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
      success: false,
      error: true,
    });
  }
};
