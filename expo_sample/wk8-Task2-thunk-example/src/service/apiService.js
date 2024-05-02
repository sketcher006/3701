// apiService.js
const baseUrl = "https://fakestoreapi.com/";

export const fetchProductList = async (categoryName) => {
  try {
    const url = baseUrl + `products/category/${categoryName}`;
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (e) {
    throw new Error("Can't find product list.");
  }
};

export const fetchCats = async () => {
  try {
    const url = baseUrl + `products/categories`;
    const res = await fetch(url);
    const data = await res.json();
    console.log("CATS DATA: ", data);
    return data;
  } catch (e) {
    throw new Error("Can't find categories.");
  }
};
