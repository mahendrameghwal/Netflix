const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());
const bcrypt = require('bcrypt');
const { Navigate } = require("react-router-dom");

mongoose.connect(
  "mongodb+srv://solankirakesh895:AHouuIH0Z2IOmc4X@cluster0.oiu5xv8.mongodb.net/users?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("DB connected");
  }
);

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = new mongoose.model("Users", userSchema);

app.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;
  const userExist = await User.findOne({ email: email });
  if (userExist) {
    res.send({ message: "User already registerd" });
  } else {
    const user = new User({
      name,
      email,
      password,
    });
    const result = await user.save();
    console.log(result);
  }
});

app.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email, password });
    if (!user) {
      return res.send({ message: "Invalid  user" });
    } 
    
    else if (user && email &&  password === !User.password) {
      return res.send({ message: "Invalid  password" });
    } else {
      res.send({ message: "log in successfully" });
      
    }
  } catch (error) {
    return res.send({ message: error });

  }
});

app.listen(8800, () => {
  console.log("BE started at port 8800");
});
