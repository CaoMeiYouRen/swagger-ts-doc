import * as express from "express";
import { requestMapping } from "../../src";
import { ApiModelCache } from "../../src/cache";
import { Student } from "../model/student";

export class StudentApi {
    public getRoute(): express.Router {
        const route = express.Router();

        route.post("/", (req, res, next) => {
            const props = ApiModelCache.getInstance().getModelInfos("Student");
            this.addStudent(null);
            res.json(props);
        });

        return route;
    }

    @requestMapping("/student")
    public addStudent(newOne: Student): void {
        //
    }
}
