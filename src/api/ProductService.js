import { apiClient } from "./index";

async function getProducts(filters) {
  const { sort, category } = filters;
  try {
    const path = `products${category ? `/category/${category}` : ""}?sort=${sort}`
    const response = await apiClient.get(path);
    return response.data;
  } catch (err) {
    console.error("Failed to fetch products:", err);
    throw err;
  }
}


async function getProduct(id) {
  try {
    const response = await apiClient.get(`products/${id}`);
    return response.data;
  } catch (err) {
    console.error("Failed to fetch product:", err);
    throw err;
  }
}

async function getAllCategories() {
  try {
    const response = await apiClient.get(`products/categories`);
    return response.data;
  } catch (err) {
    console.error("Failed to fetch categories:", err);
    throw err;
  }
}


export const ProductService = {
  getProducts,
  getProduct,
  getAllCategories
};
