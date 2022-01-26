import * as express from "express";
import * as bodyParser from "body-parser";
import { initialize } from "express-openapi";
import v1WorldsService from '../api-v1/services/worldsService';

const app = express();

app.use(bodyParser.json());

initialize({
    apiDoc: './api-v1/api-doc.yml',
    app,
    paths: './api-v1/paths',
    dependencies: {
      worldsService: v1WorldsService
    },
    routesGlob: '**/*.{ts,js}',
    routesIndexFileRegExp: /(?:index)?\.[tj]s$/
});

app.use(((err, req, res, next) => {
    res.status(err.status).json(err);
}) as express.ErrorRequestHandler);

app.listen(3001);

console.log('server starts on port 3001. http://localhost:3001/v1/worlds')
