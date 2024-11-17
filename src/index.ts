import * as express from "express"

const application = express();
const port = 4242;

application.use(express.static("public"));

application.get("/", (req, res) => {
    res.sendFile("index.html");
});

application.listen(port, () => {
    console.log("server started, listening to port: " + port);
});