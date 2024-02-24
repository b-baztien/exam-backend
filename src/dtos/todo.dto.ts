import { Todo } from "@prisma/client";
import { IsBoolean, IsNumber, IsOptional, IsString } from "class-validator";

export class TodoDto implements Todo {
  @IsOptional()
  @IsNumber()
  id: number;

  @IsOptional()
  @IsString()
  task: string;

  @IsBoolean()
  completed: boolean;
}
