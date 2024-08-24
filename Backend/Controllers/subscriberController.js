import { Subscriber } from "../Models/SubscriberModel.js";

export const addSubscriber = async function (req, res) {
  try {
    const { email } = req.body;
    const isExisting = await Subscriber.findOne({ email });
    if (isExisting) {
      return res.status(409).json({
        message: "You have already subscribed to our newsletter",
        error: true,
        success: false,
      });
    }

    const sub = new Subscriber({
      email,
    });
    await sub.save();
    res.status(201).json({
      message: "Thankyou for subscribing us!!",
      success: true,
      error: false,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
      success: false,
      error: true,
    });
  }
};

export const getAllAvailableSubscriber = async function (req, res) {
  try {
    const data = await Subscriber.find();
    return res.status(200).json({
      message: "Data Deliverd successfully!",
      error: false,
      success: true,
      data,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
      success: false,
      error: true,
    });
  }
};
