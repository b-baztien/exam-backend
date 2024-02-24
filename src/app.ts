import bodyParser from "body-parser";
import express, { Application, Router } from "express";
import fs from "fs";

class App {
  public app: Application;

  constructor() {
    this.app = express();

    this.app.use(bodyParser.json());
    this.app.use(
      bodyParser.urlencoded({
        extended: true,
      })
    );

    this.initialRouters();
  }

  private readRouterFiles() {
    const files = fs.readdirSync(`${__dirname}/routers`);
    return files.filter((file) => file.endsWith(".router.ts"));
  }

  private initialRouters() {
    const routerFiles = this.readRouterFiles();

    routerFiles.forEach((file) => {
      const router = require(`./routers/${file}`).default as Router;

      this.app.use(router);
    });
  }

  public listen() {
    this.app.listen(process.env.PORT, () => {
      console.log(`App listening on the port ${process.env.PORT}`);
    });
  }
}

export default App;
