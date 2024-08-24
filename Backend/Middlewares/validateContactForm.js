import joi from "joi";

export const validateContactForm = (req, res, next) => {
  try {
    const { fullName, email, mobileNumber, city } = req.body;
    const schema = joi.object({
      fullName: joi.string().min(6).max(20).required(),
      email: joi.string().email().required(),
      mobileNumber: joi.string().length(10).required(),
      city: joi.string().min(3).required(),
    });

    const { error } = schema.validate({ fullName, email, mobileNumber, city });
    if (error) {
      throw new Error(error.message);
    }
    next();
  } catch (error) {
    return res.status(400).json({
      message: error.message,
      success: false,
      error: true,
    });
  }
};
