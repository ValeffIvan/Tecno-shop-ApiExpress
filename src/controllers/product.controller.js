import product from "../models/products";

export const getAll = async (req, res) =>{
    try{
        const allPosts = await product.findAll();
        return res.status(200).json(allPosts);
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
    
}