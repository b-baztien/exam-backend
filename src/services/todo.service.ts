import { Todo } from "@prisma/client";
import { todoRepository } from "../utils/prisma";

class TodoService {
  async create(data: Todo) {
    return todoRepository.create({ data });
  }

  async findAll(): Promise<Todo[]> {
    return todoRepository.findMany();
  }

  async findOne(id: number): Promise<Todo | null> {
    return todoRepository.findUnique({ where: { id } });
  }

  async update(id: number, data: Todo): Promise<Todo> {
    return todoRepository.update({ where: { id }, data });
  }

  async delete(id: number): Promise<Todo> {
    return todoRepository.delete({ where: { id } });
  }
}

export const todoService = new TodoService();
