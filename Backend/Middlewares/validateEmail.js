import Joi from "joi";

export const validateSubscriberEmail = (req, res, next) => {
  try {
    const email = req.body.email;
    const schema = Joi.object({
      email: Joi.string().email().required(),
    });
    const { error } = schema.validate({
      email,
    });
    if (error) {
      throw new Error(error.message);
    }

    next();
  } catch (error) {
    res.status(400).json({
      message: error.message,
      success: false,
      error: true,
    });
  }
};
