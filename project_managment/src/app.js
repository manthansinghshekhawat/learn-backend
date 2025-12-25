import cors from "cors";
import express from "express";
const app = express();
app.use(express.json({ limit: "10mb" })); // limiting the data
app.use(express.urlencoded({ extended: true, limit: "10mb" })); // to parse URL-encoded data
app.use(express.static("public")); // serving static files from 'public' directory

//CORS configuration
const corsOptions = {
  origin: "*", // Allow all origins
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"],
};
app.use(cors(corsOptions));

// Sample route

app.get("/", (req, res) => {
  res.send("Welcome to the Project Management Tool!");
});

export default app;
