import express, { Express } from "express";
import { reviewController } from "../controllers/review.controller";
import { verifyAdmin, verifyAdminOrSelfUserId } from "../utils/auth";
import { ReviewData } from "../types/review";

const reviewRouter = (app: Express) => {
    const router = express.Router();
    
    const adminRouter = express.Router();
    adminRouter.use(verifyAdmin);
    
    // Routes
    router.post("/create", reviewController.create);
    router.get("/getAll", reviewController.findAll)

    adminRouter.get("/:rid", reviewController.findByPk)

    router.delete("/:rid", verifyAdminOrSelfUserId, reviewController.delete)
    router.put("/:rid", verifyAdminOrSelfUserId, reviewController.update)


    // Link with app
    app.use("/api/users", router);
    app.use("/api/users", adminRouter);
}

export { reviewRouter };