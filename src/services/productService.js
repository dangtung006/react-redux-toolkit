import myRequest from "../helper/myRequest";

export const getProducts = async () => {
    try {
        const response = await myRequest.get('/products');
        return response.data;
    } catch (error) {
        console.error("Error fetching products:", error);
        throw error;
    }
}

export const addProduct = async (product) => {
    try {
        const response = await myRequest.post('/products', product);
        return response.data;
    } catch (error) {
        console.error("Error adding product:", error);
        throw error;
    }
}

export const updateProduct = async (productId, product) => {
    try {
        const response = await myRequest.put(`/products/${productId}`, product);
        return response.data;
    } catch (error) {
        console.error("Error updating product:", error);
        throw error;
    }
}

export const deleteProduct = async (productId) => {
    try {
        const response = await myRequest.delete(`/products/${productId}`);
        return response.data;
    } catch (error) {
        console.error("Error deleting product:", error);
        throw error;
    }
}