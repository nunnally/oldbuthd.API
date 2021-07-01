import { Router } from "express";
import UserController from "../controllers/UserController.js";


const router = Router();


router.get("/", UserController.getAll);
router.get("/:id", UserController.specificUser);
router.post("/", UserController.insert);
router.put("/:id",UserController.update)


export default router;