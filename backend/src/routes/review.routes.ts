import express, { Express } from "express";
import { reviewController } from "../controllers/review.controller";

const reviewRouter = (app: Express) => {
    const router = express.Router();

    // Create a new User
    router.post("/create", reviewController.create);

    router.get("/getAll", reviewController.findAll)

    router.get("/:rid", reviewController.findByPk)

    router.delete("/:rid", reviewController.delete)

    app.use("/api/reviews", router);
}

export { reviewRouter };