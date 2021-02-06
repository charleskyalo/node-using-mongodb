import { addNewProduct } from '../controllers/controllers';

export const routes = (app) => {
    app.route('/products').post(addNewProduct)

}