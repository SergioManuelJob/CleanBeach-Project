import express, { Express } from "express";
import { eventController } from "../controllers/event.controller";

const eventRouter = (app: Express) => {
    const router = express.Router();

    router.post("/create", eventController.create);

    router.get("/getAll", eventController.findAll)

    router.get("/:eid", eventController.findByPk)

    router.delete("/:eid", eventController.delete)

    router.put("/:eid", eventController.update)

    app.use("/api/events", router);
}

export { eventRouter };