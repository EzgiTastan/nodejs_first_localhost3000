const express = require("express")

const app = express()

app.get("/", (req, res) => {
    res.send("<h2>Hi there</h2>")
})
//if anyone sends a get request to this path,
// we will send such a simple response.

const port = process.env.PORT || 3000;
//if the environment variable called "port" has been set,
// we will set this into this value.
//if it is not set, it will be set 3000 AS DEFAULT!!

app.listen(port, () => console.log(`listening on port ${port}`));
//yeap, placeholder




