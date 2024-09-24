import { Model, DataTypes, ENUM } from "sequelize";
import sequelize from "./database";

class SharedTodo extends Model {}

SharedTodo.init(
  {
    taskId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "task",
        key: "id",
      },
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "user",
        key: "id",
      },
    },
    userRole: {
      type: ENUM("WATCHER", "MODERATOR", "FULL_PERMISSION"),
      allowNull: false,
      defaultValue: "WATCHER",
    },
  },
  {
    sequelize,
    modelName: "sharedTodo",
  },
);

export default SharedTodo;
