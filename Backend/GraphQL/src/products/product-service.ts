import prisma from '../db.js'
import ProductDTO from '../types/product';

export async function getAllProducts(): Promise<ProductDTO[] | []> {
    const products = await prisma.product.findMany()
    const productDTOs: ProductDTO[] = products.map((product) => ({name: product.name, description: product.description, price: product.price}));
    return productDTOs;
}