import express, { Express } from "express";
import { userController } from "../controllers/user.controller";
import authController from "../controllers/auth.controller"

const userRouter = (app: Express) => {
    const router = express.Router();

    router.post("/create", userController.create);

    router.get("/getAll", userController.findAll)

    router.get("/:uid", userController.findByPk)

    router.delete("/:uid", userController.delete)

    router.put("/:uid", userController.update)

    // router.post("/login", authController.login);
    // router.post("/signin", authController.signin);

    app.use("/api/users", router);
}

export { userRouter };