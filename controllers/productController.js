const productModel = require("../models/productModel");

const addProduct =  async (req , res) =>{
    try{
        const {title, price ,image,category,description} = req.body;
        if(!title || !price || !image || !category ){
            return res.status(400).json({ error: "Title , price ,image and category are required" });
    }

    const product = await productModel.create({title, price,image,category,description})
    res.status(201).json({ message: "Product created successfully" });
}
    catch(error){
        res.status(500).json({ error: "Failed to create product" });
    }

}
const getProduct =  async (req , res) =>{
    try {
        const users = await productModel.findAll();
        res.status(200).json(users);
      } catch (error) {
        res.status(500).json({ error: "Failed to fetch products" });
      }
}
const updateProduct =  async (req , res) =>{
    try {
            const { id } = req.params;
            const params = req.params;
            const { title, price ,image,category,description } = req.body;
            if (!id) {
              return res.status(400).json({ error: "User ID is required" });
            }
            const product = await productModel.findOne({ where: { id } });
            if (!product) {
              return res.status(404).json({ error: "Product Not Found" });
            }
        
            await product.update({
                title: title || product.title,
                price: price || product.price,
                image : image || product.image,
                category: category || product.category,
                description : description || product.description
            });
            res.status(200).json({ message: "User updated successfully", product });
          } catch (error) {
            res.status(500).json({ error: "Failed to fetch product" });
          }
}
const deleteProduct =  async (req , res) =>{
    try{
        const { id} = req.params;
        const params = req.params;
        if (!id) {
            return res.status(400).json({ error: "User ID is required" });
          }
          const product = await productModel.findOne({ where: { id } });
    if (!product) {
      return res.status(400).json({ error: "Product not found" });
    }
    await product.destroy();
    res.status(200).json({ message: "Product deleted successfully", product });
    }
    catch (error) {
        res.status(500).json({ error: "Failed to delete product" });
      }
}

module.exports={
    addProduct,
    getProduct,
    updateProduct,
    deleteProduct
}