import { Router } from "express"
import {
    getAllTodo,
    postTodo,
    updateTodo,
    deleteTodo,
} from "../services/todo.js";

const router = Router();

router.get("/", getAllTodo);
router.post("/", postTodo);
router.put("/", updateTodo);
router.delete("/:id", deleteTodo,);


export default router