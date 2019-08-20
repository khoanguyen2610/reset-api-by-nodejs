import express from "express"

import UserRoutes from "./UserRoutes"

const router = express.Router()


router.use("/api/v1/users", UserRoutes)
router.use("/api/v1/account", UserRoutes)
router.use("/api/v1/member", UserRoutes)
router.use("/api/v1/formula", UserRoutes)
router.use("/api/v1/formula-group", UserRoutes)


export default router