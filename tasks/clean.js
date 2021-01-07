const del = require("del");
const fs = require("fs");

// Delete js and typing files from project root
// (and explcitly preserve our configuration files)
function clean() {
    const files = fs.readdirSync("src");
    console.log("Cleaning files, if present: " + files);

    return del(files);
};

module.exports.clean = clean;
