import express from "express";
import cors from "cors";
import { configDotenv } from "dotenv";
configDotenv();
import connectDB from "./config/db.js";
import { clerkWebhooks, stripeWebhooks } from "./controllers/webhooks.js";
import educatorRouter from "./routes/educator.route.js";
import { clerkMiddleware } from "@clerk/express";
import connectCloudinary from "./config/cloudinary.js";
import courseRouter from "./routes/course.route.js";
import userRouter from "./routes/user.route.js";
// Port
const PORT = process.env.PORT || 5000;

// Initialize Express
const app = express();

// Middlewares
app.use(cors());
app.use(clerkMiddleware());

await connectCloudinary();

// Routes
app.get("/", (req, res) => {
  res.send("api working..!");
});

app.post("/clerk", express.json(), clerkWebhooks);

app.use("/api/educator", express.json(), educatorRouter);
app.use("/api/course", express.json(), courseRouter);
app.use("/api/user", express.json(), userRouter);
app.post("/stripe", express.raw({ type: "application/json" }), stripeWebhooks);

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
