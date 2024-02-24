import { KhachHang } from "@/types";
import axios from "axios";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/api/v1/khach-hang`;

export const getCustomer = async () => {
  try {
    const res = await axios.get(URL);
    console.log(res);
    return res.data;
  } catch (error) {
    return error;
  }
};

export const getCustomerId = async (id: any) => {
  try {
    const res = await axios.get(`URL/${id}`);
    console.log(res);
    return res.data;
  } catch (error) {
    return error;
  }
};
