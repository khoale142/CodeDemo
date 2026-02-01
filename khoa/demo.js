import axios from "axios";

/* 1️⃣ Tạo Axios Instance */
const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 5000,
});

/* 2️⃣ Demo gọi API thành công */
async function demoSuccess() {
  const users = await axiosInstance.get("/users");
  console.log("Users:", users.data);

  const posts = await axiosInstance.get("/posts");
  console.log("Posts:", posts.data);
}

/* 3️⃣ Demo lỗi */
async function demoError() {
  try {
    await axiosInstance.get("/not-found");
  } catch (err) {
    console.log("Error status:", err.response.status);
  }
}

/* 4️⃣ Chạy demo */
async function run() {
  console.log("=== DEMO SUCCESS ===");
  await demoSuccess();

  console.log("=== DEMO ERROR ===");
  await demoError();
}

run();
