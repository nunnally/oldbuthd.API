import { Router } from "express";
import CategoriesController from "../controllers/CategoriesController.js";


const router = Router();


router.get("/", CategoriesController.getAll);
router.post("/", CategoriesController.insert);
router.get("/:id", CategoriesController.specificCategory);


export default router;