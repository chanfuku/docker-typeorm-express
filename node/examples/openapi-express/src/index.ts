import "reflect-metadata";
import {createConnection} from "typeorm";
import * as express from "express";
import * as bodyParser from "body-parser";
import { initialize } from 'express-openapi';
import { petService } from './services/petService';
import {Request, Response} from "express";

createConnection().then(async connection => {

  // create express app
  const app = express();
  app.use(bodyParser.json());

  // register express routes from defined application routes
  initialize({
    app,
    apiDoc: 'src/v1/api-doc.yml',
    paths: 'src/paths',
    dependencies: {
      petService,
    },
    routesGlob: '**/*.{ts,js}',
    routesIndexFileRegExp: /(?:index)?\.[tj]s$/,
    errorMiddleware: function(err, req, res, next) { // only handles errors for /v3/*
        res.status(err.status).json(err)
        next()
    }
  });

  // start express server
  app.listen(3000);
  console.log('Express server has started on port 3000. please check http://localhost:3000/v1/pets');

}).catch(error => console.log(error));
