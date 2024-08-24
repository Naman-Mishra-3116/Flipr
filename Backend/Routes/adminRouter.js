import { Router } from "express";
import { validateClientData } from "../Middlewares/clientValidation.js";
import { validateProjectData } from "../Middlewares/ProjectValidation.js";
import {
  addProjectController,
  getAllClientData,
  getAllProjectData,
} from "../Controllers/adminController.js";
import { addClientController } from "../Controllers/adminController.js";

const router = Router();

router.rotue("/admin/getAllClient").get(getAllClientData);
router.route("/admin/getAllProject").get(getAllProjectData);
router.route("/admin/addClient").post(validateClientData, addClientController);
router
  .route("/admin/addProject")
  .post(validateProjectData, addProjectController);

export { router as AdminRouter };
