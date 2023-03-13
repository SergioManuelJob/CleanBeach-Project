import express, { Express } from "express";
import { userController } from "../controllers/user.controller";
import authController from "../controllers/auth.controller"
import { verifyAdmin, verifyAdminOrSelf } from "../utils/auth";

const userRouter = (app: Express) => {
    // Router inits
    const router = express.Router();
    
    const adminRouter = express.Router();
    adminRouter.use(verifyAdmin);
    
    const adminOrSelfRouter = express.Router();
    adminOrSelfRouter.use(verifyAdminOrSelf);


    // Routes
    adminRouter.post("/create", userController.create);
    
    router.get("/getAll", userController.findAll);
    router.get("/:uid", userController.findByPk)
    
    adminOrSelfRouter.delete("/:uid", userController.delete)
    adminOrSelfRouter.put("/:uid", userController.update)

    router.post("/login", authController.login);
    router.post("/signin", authController.signin);

    // Link with app
    app.use("/api/users", router);
    app.use("/api/users", adminRouter);
    app.use("/api/users", adminOrSelfRouter);
}

export { userRouter };