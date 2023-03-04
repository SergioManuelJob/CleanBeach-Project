import express, { Express } from "express";
import { reviewController } from "../controllers/review.controller";

const reviewRouter = (app: Express) => {
    const router = express.Router();

    // Create a new User
    router.post("/create", reviewController.create);

    app.use("/api/reviews", router);
}

export { reviewRouter };