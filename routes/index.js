import { Router } from "express";
import userRoute from './userRoute.js'

const router = Router()



router.use("/api/user", userRoute )

export default router