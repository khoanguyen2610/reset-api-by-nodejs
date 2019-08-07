import express from "express"

import UsersController from "../controllers/UsersController"

const router = express.Router()

router.get("/", UsersController.index)
router.get("/:id", UsersController.detail)


export default router