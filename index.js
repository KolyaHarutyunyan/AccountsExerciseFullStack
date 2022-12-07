import express from "express";
import fs from "fs";
import path from "path";

const app = express();

app.get("/accounts", (req, res) => {
  fs.promises
    .readFile(path.resolve("accountsData.json"), "utf8")
    .then((accounts) => res.send(accounts))
    .catch((err) => res.send(err.message));
});

app.get("/accounts/:id", (req, res) => {
  const accountId = req.params.id;
  fs.promises
    .readFile(path.resolve("accountsData.json"), "utf8")
    .then((accounts) =>
      res.send(
        JSON.stringify(
          JSON.parse(accounts).find((account) => account.id === accountId)
        )
      )
    )
    .catch((err) => res.send(err.message));
});

app.listen(process.env.PORT || 6000);
