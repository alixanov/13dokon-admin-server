const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
require("dotenv").config();
const itemRoutes = require("./router/router");
const PORT = process.env.PORT || 3005;

// Подключаем бота
require("./bot");

// Подключаем базу данных
connectDB();
const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.use("/api", itemRoutes);

app.listen(PORT, () => console.log(`Сервер запущен на порту ${PORT}`));
