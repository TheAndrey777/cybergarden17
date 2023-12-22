import "reflect-metadata";
import app from "./app";
import { dataSource } from "../data/data.source";

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => { console.log(`Listening on port ${PORT}`) });
dataSource.initialize()
  .then(() => {
      console.log("Successfully connected to the database");
  }).catch((err) => { console.log(err)} );