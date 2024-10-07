const TelegramBot = require("node-telegram-bot-api");
require("dotenv").config();

// Создай экземпляр бота с токеном
const bot = new TelegramBot(process.env.TELEGRAM_TOKEN, { polling: true });

// Обработка команды /start
bot.onText(/\/start/, (msg) => {
     const chatId = msg.chat.id;

     // Кнопка с ссылкой на сайт
     const options = {
          reply_markup: {
               inline_keyboard: [
                    [
                         {
                              text: "Перейти на сайт",
                              url: "https://icrm-school-client.vercel.app/",
                         },
                    ],
               ],
          },
     };

     // Отправка сообщения с кнопкой
     bot.sendMessage(chatId, "Привет! Нажми на кнопку, чтобы перейти на сайт:", options);
});

// В случае ошибки
bot.on("polling_error", (error) => {
     console.log(error);
});
