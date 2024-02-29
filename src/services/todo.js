import { sequelize } from "../db.js";

const Todo = sequelize.models.Todo

const getAllTodo = async(req, res) => {
    try {
        const ResponseDB = await Todo.findAll({
            order: [['createdAt', 'DESC']]
        });
        res.status(200).send({state: "ok", content: ResponseDB});
    } catch (error) {
        res.status(500).send({
            error: "There was an error with getAllTodo",
            message: error.message,
            errorDetails: error
        })
    }
}

const postTodo = async(req, res) => {

    const {title, description, dueDate} = req.body
    try {
        const ResponseDB = await Todo.create({
            title,
            description,
            dueDate,
            status: "todo"
        });
        res.status(201).send({state: "ok", content: "The todo was created"});
    } catch (error) {
        res.status(500).send({
            error: "There was an error with postTodo",
            message: error.message,
            errorDetails: error
        })
    }
}

const updateTodo = async(req, res) => {

    const {id, title, description, dueDate, status} = req.body
    try {
        const ResponseDB = await Todo.update({
            title,
            description,
            dueDate,
            status,
        },
        {
            where: {id}
        });
        res.status(201).send({state: "ok", content: ResponseDB});
    } catch (error) {
        res.status(500).send({
            error: "There was an error with updateTodo",
            message: error.message,
            errorDetails: error
        })
    }
}

const deleteTodo = async(req, res) => {

    
    const id = req.params.id
    console.log(id);
    try {
        const ResponseDB = await Todo.destroy( {
            where: {id}
        });
        if (ResponseDB === 0) {
            res.status(400).send({state: "error", content: "was not deleted"});
            return;
        }
        res.status(200).send({state: "ok", content: "Deleted"});
    } catch (error) {
        res.status(500).send({
            error: "There was an error with deleteTodo",
            message: error.message,
            errorDetails: error
        })
    }
}



export {
    getAllTodo,
    postTodo,
    updateTodo,
    deleteTodo,
}