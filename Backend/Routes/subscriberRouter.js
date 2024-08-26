import { Router } from "express";
import { validateSubscriberEmail } from "../Middlewares/validateEmail.js";
import {
  addSubscriber,
  getAllAvailableSubscriber,
} from "../Controllers/subscriberController.js";

const router = Router();


router
  .route("/createSubscriber")
  .post(validateSubscriberEmail, addSubscriber);

router.route("/getAllSubscriber").get(getAllAvailableSubscriber);

export { router as SubscriberRouter };
