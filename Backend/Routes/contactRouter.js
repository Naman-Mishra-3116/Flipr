import { Router } from "express";
import { validateContactForm } from "../Middlewares/validateContactForm.js";
import {
  contactSubmissionController,
  getAllContactDetails,
} from "../Controllers/contactFormController.js";

const router = Router();

router
  .route("/contact/createContact")
  .post(validateContactForm, contactSubmissionController);

router.route("/contacts/getAllContact").get(getAllContactDetails);

export { router as ContactRouter };
