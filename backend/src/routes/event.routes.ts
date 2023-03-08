import express, { Express } from "express";
import { eventController } from "../controllers/event.controller";

const eventRouter = (app: Express) => {
    const router = express.Router();

    // Create a new User
    router.post("/create", eventController.create);

    router.get("/getAll", eventController.findAll)

    router.get(":eid", eventController.findByPk)

    app.use("/api/events", router);
}

export { eventRouter };