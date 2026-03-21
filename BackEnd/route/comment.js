import express from "express"
import {
getComments,
addComment,
deleteComment,
editComment
} from "../controller/commentController.js"

import isAuth from "../middleware/isAuth.js"

const router = express.Router()

router.get("/:videoId", getComments)
router.post("/", isAuth, addComment)
router.delete("/:id", isAuth, deleteComment)
router.put("/:id", isAuth, editComment)

export default router