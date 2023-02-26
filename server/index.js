const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

const bcrypt = require("bcrypt");
const saltRounds = 10;

// bcrypt
//   .genSalt(saltRounds)
//   .then(salt => {
//     console.log('Salt: ', salt)
//     return bcrypt.hash(77878787878, salt)
//   })
//   .then(hash => {
//     console.log('Hash: ', hash)
//   })
//   .catch(err=>{
//     console.log(err.message);
//   })

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
  email: String,
  password: String,
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
    const preUser = await User.findOne({ email: email });

    if (preUser) {
      if (preUser.password === password) {
        res.send({ message: "login successful", LoggedInUser: preUser });
      } else {
        res.send({ message: "Please check your Email and  password " });
      }
    } else {
      res.send({ message: "user not found" });
    }
  } catch (error) {
    res.send({ message: `${error.message}` });
  }
});


app.listen(8800, () => {
  console.log("BE started at port 8800");
});
