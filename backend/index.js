require("dotenv").config();
const cors = require("cors");
const { connection } = require("./config/db");
const { userRouer } = require("./routes/user_routes");
const cookieParser = require("cookie-parser");
const express = require("express");

const app = express();
app.use(cors());
app.use(cors({
  origin: '*'
}))

app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use("/user", userRouer);

app.get("/", (req, res) => {
  try{
    res.send({ msg: `welcome to locally sourced backend` });
  }catch(err){
    logger.error(err)
  }
});
  
app.listen(process.env.PORT, async () => {
    try {
        await connection;
        console.log(`listening on port ${process.env.PORT}`);
    } catch (err) {
        console.log(err);
    }
});