import { useEffect } from "react";
import axiosInstance from "./axiosInstance";

const AxiosInstanceDemo = () => {
  useEffect(() => {
    const fetchData = async () => {
      const users = await axiosInstance.get("/users");
      console.log("Users (instance):", users.data.length);

      const posts = await axiosInstance.get("/posts");
      console.log("Posts (instance):", posts.data.length);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h3>Axios Instance</h3>
      <p>Mở console để xem kết quả</p>
    </div>
  );
};

export default AxiosInstanceDemo;
