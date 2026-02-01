import { useEffect } from "react";
import axios from "axios";

/* Tạo axios instance */
const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 5000,
});

const AxiosQuiz = () => {
  useEffect(() => {
    console.log("1️⃣ Component mounted");

    const fetchData = async () => {
      console.log("2️⃣ Bắt đầu gọi API");

      try {
        const response = await axiosInstance.get("/users");

        console.log("3️⃣ Gọi API thành công");
        console.log("4️⃣ URL request:", response.config.url);
        console.log("5️⃣ Base URL:", response.config.baseURL);
        console.log("6️⃣ Số lượng user:", response.data.length);
      } catch (error: any) {
        console.log("❌ Có lỗi xảy ra");
        console.log("Mã lỗi:", error.response?.status);
      }

      console.log("7️⃣ Kết thúc hàm fetchData");
    };

    fetchData();

    console.log("8️⃣ useEffect kết thúc");
  }, []);

  return (
    <div>
      <h3>Axios Quiz Demo</h3>
      <p>Mở console để xem kết quả</p>
    </div>
  );
};

export default AxiosQuiz;
