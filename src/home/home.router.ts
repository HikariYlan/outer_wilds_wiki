import express from "express";
import { homeController } from "./home.controller";

export const home_router = express.Router();

home_router.get('/', homeController.home);