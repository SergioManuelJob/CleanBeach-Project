import express, { Express } from "express";
import { beachController } from "../controllers/beach.controller";

const beachRouter = (app: Express) => {
    const router = express.Router();

    // Create a new User
    router.post("/create", beachController.create);

    router.get("/getAll", beachController.findAll);

    router.get("/:bid", beachController.findByPk)

    router.delete("/:bid", beachController.delete)

    app.use("/api/beaches", router);
}

export { beachRouter };