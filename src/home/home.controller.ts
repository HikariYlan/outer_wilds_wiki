import { type Request, type Response } from "express";
import {HomeView} from "./views/home";

class HomeController {
    static homeController = new HomeController();

    public home(req: Request, res: Response) {
        const view = HomeView();
        res.send(view);
    }
}

export const homeController = HomeController.homeController;