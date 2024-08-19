import {Router} from "express";
import { createProduct, getProducts } from "../controllers/productController";

const router = Router();

//For getting the list of the products
router.get("/", getProducts);

//For creating the product
router.post("/", createProduct);

export default router;