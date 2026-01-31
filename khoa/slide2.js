import axios from "axios";

function getUsers() {
  return axios.get("https://jsonplaceholder.typicode.com/users");
}

function getPosts() {
  return axios.get("https://jsonplaceholder.typicode.com/posts");
}

getUsers().then(res => console.log("Users:", res.data.length));
getPosts().then(res => console.log("Posts:", res.data.length));
