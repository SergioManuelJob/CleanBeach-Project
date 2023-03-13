import express, { Express } from "express";
import { reviewController } from "../controllers/review.controller";
import { verifyAdmin, verifyAdminOrSelf } from "../utils/auth";
import { ReviewData } from "../types/review";

const reviewRouter = (app: Express) => {
    const router = express.Router();
    
    const adminRouter = express.Router();
    adminRouter.use(verifyAdmin);
    
    const adminOrSelfRouter = express.Router();
    adminOrSelfRouter.use(verifyAdminOrSelf);

    // Routes
    router.post("/create", reviewController.create);
    router.get("/getAll", reviewController.findAll)

    adminRouter.get("/:rid", reviewController.findByPk)

    adminOrSelfRouter.delete("/:rid", reviewController.delete)
    adminOrSelfRouter.put("/:rid", reviewController.update)


    // Link with app
    app.use("/api/users", router);
    app.use("/api/users", adminRouter);
    app.use("/api/users", adminOrSelfRouter);
}

export { reviewRouter };