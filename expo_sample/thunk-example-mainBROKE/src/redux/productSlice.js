// src/redux/productSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchProductByID } from "../service/apiService";
// Define an initial state
const initialState = {
  productData: {},
  loading: false,
  error: null,
};

// Create an asynchronous thunk action
export const loadProductData = createAsyncThunk(
  "loadProduct",
  async (productId, thunkAPI) => {
    if (!productId)
      return thunkAPI.rejectWithValue("Product Id can't be empty.");
    const product = thunkAPI.getState().product?.productData[productId];
    console.log("--- Product data from state: ", product);
    if (product){
      console.log("Product already loaded: ", product);
      return { id: productId, data: product };
    } 
    try {
      console.log("Fetching product data for: ", productId);
      const ret = await fetchProductByID(productId);
      console.log("Product data fetched: ", ret);
      return ret;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadProductData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loadProductData.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        console.log("ACTION: ", action);
        console.log("PAYLOAD: ", action.payload);
        // state.productData = action.payload;
        console.log("The id is here", action.meta.arg);
        const id = action.meta.arg;
        const data = action.payload;
        console.log("Product ID: ", id, "Data: ", data);
        if (!state.productData[id]) {
          state.productData[id] = data;
        }
      })
      .addCase(loadProductData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        // state.productData = {};
      });
  },
});
export const selectProduct = (state) => state.product;
export default productSlice.reducer;
