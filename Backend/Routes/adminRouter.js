import { Router } from "express";
import { validateClientData } from "../Middlewares/clientValidation.js";
import { validateProjectData } from "../Middlewares/projectValidation.js";
import {
  addProjectController,
  getAllClientData,
  getAllProjectData,
  deleteItem
} from "../Controllers/adminController.js";
import { addClientController } from "../Controllers/adminController.js";

const router = Router();

router.route("/getAllClient").get(getAllClientData);
router.route("/getAllProject").get(getAllProjectData);
router.route("/addClient").post(validateClientData, addClientController);
router.route("/deleteItem").post(deleteItem)
router
  .route("/addProject")
  .post(validateProjectData, addProjectController);

export { router as AdminRouter };
