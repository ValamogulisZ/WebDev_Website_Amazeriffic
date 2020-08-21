var express = require("express"),
  http = require("http"),
  app = express(),
  toDos = {
  // set up todo list here by copying
  // the content from todos.OLD.json
  };
app.use(express.static(__dirname + "/client"));
http.createServer(app).listen(3000);
// This route takes the place of our
// todos.json file in our example from
// Chapter 5
app.get("todos.json", function (req, res) {
  res.json(toDos);
});
app.post("/todos", function (req, res) {
 console.log("data has been posted to the server!");
 // send back a simple object
 res.json({"message":"You posted to the server!"});
});
