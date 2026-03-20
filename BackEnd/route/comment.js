import express from "express"

import {
getComments,
addComment,
deleteComment,
editComment
} from "../controller/commentController.js"

const router = express.Router()

router.get("/:videoId",getComments)

router.post("/",addComment)

router.delete("/:id",deleteComment)

router.put("/:id",editComment)

export default router