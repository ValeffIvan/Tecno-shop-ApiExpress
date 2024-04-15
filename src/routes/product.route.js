import { Router } from "express";
import {
    getAllProd,
    getProdById,
    createProd,
    deleteProd,
} from '../controllers/product.controller.js';

const routes = Router();

routes.get("/getallproducts", getAllProd);
routes.get("/getproductbyid", getProdById);
routes.post("/createproduct", createProd);
routes.delete("/deleteproduct", deleteProd);

export default routes