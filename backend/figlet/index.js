var figlet = require("figlet");

figlet("Kishore Chandra Lenka", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});