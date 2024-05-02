// src/redux/productSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchProductByID, fetchProductList } from "../service/apiService";
// Define an initial state
const initialState = {
  productData: {},
  loading: false,
  error: null,
};

// Create an asynchronous thunk action
export const loadProductList = createAsyncThunk(
  "loadProductList",
  async (category, thunkAPI) => {
    if (!category)
      return thunkAPI.rejectWithValue("We wont ever get here");
    const categoryContent = thunkAPI.getState().product?.productData[category];
    console.log("--- Product data from state: ", categoryContent);
    if (categoryContent){
      console.log("Product already loaded: ", categoryContent);
      return { id: category, data: product };
    } 
    try {
      console.log("Fetching product list for category: ", category);
      const ret = await fetchProductList(category);
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
      .addCase(loadProductList.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loadProductList.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        console.log("ACTION: ", action);
        console.log("PAYLOAD: ", action.payload);
        // state.productData = action.payload;
        console.log("The category is: ", action.meta.arg);
        const cats = action.meta.arg;
        const data = action.payload;
        console.log("Category: ", cats, "Data: ", data);
        if (!state.productData[cats]) {
          state.productData[cats] = data;
        }
      })
      .addCase(loadProductList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        // state.productData = {};
      });
  },
});

export const selectProduct = (state) => state.product;
export default productSlice.reducer;
