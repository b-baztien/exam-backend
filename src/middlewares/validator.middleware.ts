import { plainToInstance } from "class-transformer";
import { validate } from "class-validator";
import { RequestHandler } from "express";
import { HttpStatus } from "../enums/http-status.enum";

export function validateDto(validateType: any): RequestHandler {
  return (req, res, next) => {
    const dto = plainToInstance(validateType, req.body ?? {});

    validate(dto).then((errors) => {
      if (errors.length > 0) {
        res.status(HttpStatus.BAD_REQUEST).json({
          message: "Validation failed",
          errors: errors.map(({ property, constraints }) => ({
            [property]: constraints && Object.values(constraints),
          })),
        });
      } else {
        next();
      }
    });
  };
}
