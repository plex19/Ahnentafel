import {GetUsers} from "./database.js";
const path = require("path");

window.addEventListener("load", () => {
  const btnGetUsers = document.getElementById("GETUsers");
  btnGetUsers.addEventListener("click", btnGetClick);
});

const btnGetClick = (event) => {
  console.log("GETUsers");
  GetUsers();
};
