import { type Request, type Response } from "express";
import {HomeView} from "./views/home";
import pkg from "../../package.json";
import {CreditsView} from "./views/credits";
import {OptionsView} from "./views/options";

class HomeController {
    static homeController = new HomeController();

    public home(req: Request, res: Response) {
        const view = HomeView({version: pkg.version});
        res.send(view);
    }

    public credits(req: Request, res: Response) {
        const credits = CreditsView();
        res.send(credits);
    }

    public options(req: Request, res: Response) {
        const options = OptionsView();
        res.send(options);
    }
}

export const homeController = HomeController.homeController;