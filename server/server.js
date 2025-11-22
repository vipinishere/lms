import express from "express";
import cors from "cors";
import { configDotenv } from "dotenv";
configDotenv();
import connectDB from "./config/db.js";
import { clerkWebhooks } from "./controllers/webhooks.js";
// Port
const PORT = process.env.PORT || 5000;

// Initialize Express
const app = express();

// Middlewares
app.use(cors());

// Routes
app.get("/", (req, res) => {
  res.send("api working..!");
});

app.post("/clerk", express.json(), clerkWebhooks);

connectDB()
  .then(() => {
    console.log("database connected Successfully..!");
    app.listen(PORT, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log(`server is running on port no. ${PORT}`);
      }
    });
  })
  .catch((err) => {
    if (err) {
      console.log(err);
      process.exit(1);
    }
  });
