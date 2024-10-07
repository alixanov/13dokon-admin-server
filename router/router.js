const { Router } = require("express");
const router = Router();
const { addProduct, getAllProduct, deleteProduct, updateProduct, getOneProduct } = require("../controllers/crud.control");

// Маршруты для CRUD операций
router.post("/add", addProduct);
router.get("/getall", getAllProduct);
router.delete("/delete/:id", deleteProduct); // Маршрут для удаления продукта
router.put("/update/:id", updateProduct); // Маршрут для обновления продукта
router.get("/getone/:id", getOneProduct);



module.exports = router;
