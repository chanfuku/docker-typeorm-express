import {NextFunction, Request, Response} from "express";

export class UserController {

    async all(request: Request, response: Response, next: NextFunction) {
        response.json(true);
    }

    async one(request: Request, response: Response, next: NextFunction) {
    }

    async save(request: Request, response: Response, next: NextFunction) {
    }

    async remove(request: Request, response: Response, next: NextFunction) {
    }

}
