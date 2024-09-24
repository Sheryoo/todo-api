import { Model, DataTypes, ENUM } from "sequelize";
import sequelize from "./database";

class Task extends Model {}

Task.init(
  {
    task: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    state: {
      type: ENUM("TODO", "DOING", "DONE"),
      defaultValue: "TODO",
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "user",
        key: "id",
      },
    },
    deadline: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "task",
  },
);

export default Task;
