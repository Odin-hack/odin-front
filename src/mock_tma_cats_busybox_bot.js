const telegramBot = require('node-telegram-bot-api')

const main = async () => {
  const bot = new telegramBot(process.env.BOT_API_KEY, {polling: true})
  bot.on('message', msg => {
    const inlineKeyboard = [
      [
        {
          text: 'Open prod',
          web_app: {url: 'https://tma-cats.vercel.app'},
        },
      ],
      [
        {
          text: 'Open stage-1',
          web_app: {url: 'https://tma-cats--stage-1.vercel.app'},
        },
      ],
      [
        {
          text: 'Open stage-2',
          web_app: {url: 'https://tma-cats--stage-2.vercel.app'},
        },
      ],
    ]
    const chatId = msg.chat.id
    console.info('reply', {chatId})
    bot.sendMessage(chatId, 'Debug actions:', {
      reply_markup: {inline_keyboard: inlineKeyboard},
    })
  })
}

if (require.main === module) {
  main()
}
