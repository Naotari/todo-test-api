import {DataTypes} from "sequelize"

const Todo = (sequelize) => sequelize.define("Todo", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    title: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    dueDate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    status: {
        type: DataTypes.ENUM,
        values: ['todo', 'inprogress', "done" ],
        allowNull: false,
    }
},
{
    timestamps: true
});

export default Todo