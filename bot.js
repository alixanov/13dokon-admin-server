const TelegramBot = require("node-telegram-bot-api");

// Создаем экземпляр бота с токеном
const bot = new TelegramBot(process.env.TELEGRAM_TOKEN, { polling: true });

bot.onText(/\/start/, (msg) => {
     const chatId = msg.chat.id;
     const options = {
          reply_markup: {
               inline_keyboard: [
                    [
                         {
                              text: "🎶 Перейти в музыкальный магазин 🎶",
                              web_app: {
                                   url: "https://icrm-school-client.vercel.app/",
                              },
                         },
                    ],
               ],
          },
     };
     bot.sendMessage(chatId, "Добро пожаловать в наш музыкальный магазин!", options);
});



