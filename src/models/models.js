import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
    },
    price: {
        type: Number,
        required: true
    },
    created_date: {
        type: Date,
        default: Date.now
    }

})



export default ProductSchema;