import * as axios from "axios";
import * as bcrypt from "bcrypt";
import * as bodyParser from "body-parser";
import * as compression from "compression";
import * as cors from "cors";
import * as exporessValidator from "express-validator";
import * as helmet from "helmet";
import * as jsonWebToken from "jsonwebtoken";
import * as jwtDecode from "jwt-decode";
import * as moment from "moment";
import * as mongodb from "mongodb";
import * as swaggerAutogen from "swagger-autogen";
import * as swaggerUiExpress from "swagger-ui-express";
import * as winston from "winston";
import * as winstonMongodb from "winston-mongodb";

export { axios, bcrypt, bodyParser, compression, cors, exporessValidator, helmet, jsonWebToken, jwtDecode, moment, mongodb, swaggerAutogen, swaggerUiExpress, winston, winstonMongodb }