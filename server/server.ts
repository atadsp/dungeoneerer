import * as dotenv from "dotenv";
import Router from "./routes/router.class";

dotenv.config();

const PORT = process.env.PORT;

if (PORT) {
  const app = Router.build();
  app.listen(PORT, () => {
    console.log("It's working! It's working! " + PORT);
  });
} else {
  console.log("ENV's are not set, please set them in the .env");
}
