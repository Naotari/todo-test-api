import { Sequelize } from "sequelize"
import Todo from "./models/todo.js";

//new instance
const sequelize = new Sequelize(`postgres://postgres:admin@localhost:5432/tododb`)

//create the models
Todo(sequelize)

//sync de models
const syncModels = async () => {
    await sequelize.sync(true); //cambiar a false para no borrar la base de datos
    console.log("All models were synchronized successfully.");
}
syncModels();
export { sequelize }