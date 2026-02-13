import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const PRODUCTS_API_URL = "https://693bf570b762a4f15c3eec43.mockapi.io/products";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await axios.get(PRODUCTS_API_URL);
    return response.data;
  },
);
