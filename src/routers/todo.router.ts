import { Router } from "express";
import TodoController from "../controllers/todo.controller";
import { TodoDto } from "../dtos/todo.dto";
import { validateDto } from "../middlewares/validator.middleware";

class TodoRouter extends TodoController {
  private _router = Router();
  private _path = "/todo";

  constructor() {
    super();
    this.initialRoutes();
  }

  public get router() {
    return this._router;
  }

  private initialRoutes() {
    this._router.get(this._path, this.getAll);
    this._router.get(`${this._path}/:id`, this.getOne);
    this._router.post(this._path, validateDto(TodoDto), this.create);
    this._router.put(`${this._path}/:id`, validateDto(TodoDto), this.update);
    this._router.delete(`${this._path}/:id`, this.delete);
  }
}

export default new TodoRouter().router;
