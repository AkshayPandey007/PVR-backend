import Express from "express";
import connectDB from "./database/db.js";
import movieSlotRouter from "./routes/movie-slot.routes.js";
import userRouter from "./routes/user.routes.js";
import cors from "cors";

const app = Express();
app.use(Express.json());
app.use(cors());
app.use("/api/auth", userRouter);
app.use("/api/movie", movieSlotRouter);

app.get("/" , (req,res)=>{
  res.send("Welcome to home Page")
})

app.listen(8080, () => {
  console.log("Server listening on port 8080");
  connectDB();
});
