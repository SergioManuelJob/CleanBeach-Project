import express, { Express } from "express";
import { beachController } from "../controllers/beach.controller";
var upload = require('../utils/multer');


const beachRouter = (app: Express) => {
    const router = express.Router();

    // Create a new User
    router.post("/create", upload.single("file"), beachController.create);

    router.get("/getAll", beachController.findAll);

    router.get("/:bid", beachController.findByPk)

    router.delete("/:bid", beachController.delete)

    router.put("/:bid", upload.single("file"), beachController.update)

    app.use("/api/beaches", router);
}

export { beachRouter };