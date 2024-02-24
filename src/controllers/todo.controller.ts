import { Request, Response } from "express";
import { TodoDto } from "../dtos/todo.dto";
import { todoService } from "../services/todo.service";

export default class TodoController {
  protected getAll = async (req: Request, res: Response) => {
    const todos = await todoService.findAll();

    res.json(todos);
  };

  protected getOne = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id, 10);
    const todo = await todoService.findOne(id);

    res.json(todo);
  };

  protected create = async (req: Request, res: Response) => {
    const todo = await todoService.create(req.body as TodoDto);

    res.json(todo);
  };

  protected update = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id, 10);
    const todo = await todoService.update(id, req.body);

    res.json(todo);
  };

  protected delete = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id, 10);
    const todo = await todoService.delete(id);

    res.json(todo);
  };
}
