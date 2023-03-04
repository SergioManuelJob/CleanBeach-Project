import express, { Express } from "express";
import { participantsListController  } from "../controllers/participantsList.controller";

const participantsListRouter = (app: Express) => {
    const router = express.Router();

    // Create a new User
    router.post("/create", participantsListController.create);

    app.use("/api/participantsLists", router);
}

export { participantsListRouter };