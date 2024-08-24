import { Router } from "express";
import { validateSubscriberEmail } from "../Middlewares/validateEmail.js";
import {
  addSubscriber,
  getAllAvailableSubscriber,
} from "../Controllers/subscriberController.js";

const router = Router();

router
  .route("/subscriber/createSubscriber")
  .post(validateSubscriberEmail, addSubscriber);

router.route("/subscriber/getAllSubscriber").get(getAllAvailableSubscriber);

export { router as SubscriberRouter };
