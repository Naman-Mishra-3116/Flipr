import joi from "joi";

export const validateClientData = (req, res, next) => {
  try {
    const { image, name, description, designation } = req.body;
    const schema = joi.object({
      image: joi.string().required(),
      name: joi.string().min(5).max(25).required(),
      description: joi.string().min(10).max(200).required(),
      designation: joi.string().required(),
    });
    const { error } = schema.validate({
      image,
      name,
      description,
      designation,
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
