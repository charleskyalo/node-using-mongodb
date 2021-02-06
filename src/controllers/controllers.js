import mongoose from "mongoose";
import ProductSchema from '../models/models';


const Product = mongoose.model('Product', ProductSchema)


export const addNewProduct = () => {

    if (!req.body) return

    const newProduct = new Product(req.body);

    newProduct.save(err, res.json(Product));
}