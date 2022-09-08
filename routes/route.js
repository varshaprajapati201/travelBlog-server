import express from "express";
import { addArticle,editArticle,deleteArticle,getArticle,getArticleToEdit } from "../controller/controller.js"

const router = express.Router();

router.post("/add",addArticle);
router.get("/all",getArticle);
router.get("/:id",getArticleToEdit);
router.post("/:id",editArticle);
router.delete("/:id",deleteArticle);

export default router;