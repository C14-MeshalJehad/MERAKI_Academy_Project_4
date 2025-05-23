require("dotenv").config();
const express = require("express");
const cors = require("cors");
const db = require("./models/db")

const app = express();
const PORT = process.env.PORT || 5000

app.use(cors());
app.use(express.json());

//  import Router
const usersRouter = require("../backend/routes/users")
const reoleRouter = require("../backend/routes/roles")
const postRouter = require("../backend/routes/posts")
const commentRouter = require("./routes/comments")
const likeRouter = require("./routes/likes")
const followerRouter = require("./routes/followers")
const categoryRouter = require("./routes/Category")


app.use("/Users", usersRouter)
app.use("/Roles", reoleRouter)
app.use("/Post", postRouter)
app.use("/Comment", commentRouter)
app.use("/Like", likeRouter)
app.use("/Follow", followerRouter)
app.use("/Category", categoryRouter)

// Handles any other endpoints [unassigned - endpoints]
app.use("*", (req, res) => res.status(404).json("NO content at this path"));

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
