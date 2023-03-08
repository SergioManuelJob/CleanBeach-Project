import express, { Express } from "express";
import { userController } from "../controllers/user.controller";

const userRouter = (app: Express) => {
    const router = express.Router();

    // Create a new User
    router.post("/create", userController.create);

    router.get("/getAll", userController.findAll)

    router.get(":uid", userController.findByPk)

    app.use("/api/users", router);
}

export { userRouter };