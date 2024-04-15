import product from "../models/products";

export const getAllProd = async (req, res) =>{
    try{
        const posts = await product.findAll();
        return res.status(200).json(allPosts);
    }catch (error){
        console.log(error)
        return res.status(400).json(error);
    }
}

export const getProdById = async (req, res) =>{
    const {product_id} = req.params;
    try{
        const post = await product.find(product_id);
        return res.status(200).json(post);
    }catch (error){
        console.log(error)
        return res.status(400).json(error);
    }
}

export const createProd = async (req, res) =>{
    const {name, price, description, image, stock} = req.body;
    try{
        const prod = new product({
            name,
            price,
            description,
            image,
            stock
        })
        const prodCreated = await prod.save();
        return res.status(200).json(prodCreated);
    }catch (error){
        console.log(error)
        return res.status(400).json(error);
    }
}

export const deleteProd = async (req, res) =>{
    const {product_id} = req.params;
    try{
        const delprod = await product.findByIdAndDelete(product_id);
        return res.status(200).json(delprod);
    }catch(error){
        console.log(error);
        return res.status(400).json(error);
    }
}