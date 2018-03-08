export interface IProduct {
    getProducts(): any[];
    deleteProduct(productId: string): void;
}