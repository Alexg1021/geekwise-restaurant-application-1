var path = require("path");
var models_path = path.join(__dirname, "./../models");

var fs = require("fs");
fs.readdirSync(models_path).forEach((file) => {
    if (file.indexOf(".js") >= 0)
        require(models_path + "/" + file);
});