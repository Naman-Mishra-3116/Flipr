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

router.route("/admin/getAllClient").get(getAllClientData);
router.route("/admin/getAllProject").get(getAllProjectData);
router.route("/admin/addClient").post(validateClientData, addClientController);
router.route("/admin/deleteItem").post(deleteItem)
router
  .route("/admin/addProject")
  .post(validateProjectData, addProjectController);

export { router as AdminRouter };
