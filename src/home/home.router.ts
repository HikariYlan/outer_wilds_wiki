import express from "express";
import { homeController } from "./home.controller";

export const home_router = express.Router();

home_router.get('/', homeController.home);
home_router.get('/credits', homeController.credits);
home_router.get('/options', homeController.options);