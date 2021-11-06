const { Telegraf } = require('telegraf'); // importing telegraf.js
var bot = new Telegraf('1788149046:AAGMPYFK29UwcXxbu69cn5GPIdwdrZo97z0') // We saved our bot token to the bot variable 

bot.start(ctx => ctx.reply(`
Hi, I'm The Swift bot { /help for the Commands} 
`))
// Hello User Im Swift Bot, my use is to show you when the exams will start and a bit of fun things :)

bot.help(ctx => ctx.reply(`
   Commands: /Exams, /start, Lesson,
`))

bot.command('Exams', ctx => {
    console.log(ctx.from)
    bot.telegram.sendMessage(ctx.chat.id, 'Exams --> English: Sunday --> Math: Sunday --> Science: none --> Arabic: Monday.', {
    })
})


bot.command('Who made you', ctx => {
    console.log(ctx.from)
    bot.telegram.sendMessage(ctx.chat.id, 'Xapper al happer or Saif K :)', {
    })
})

bot.action('luck', ctx => {
    bot.telegram.sendPhoto(ctx.chat.id, {
        source: "res/GoodLuck.png"
    })

})

bot.hears('Lesson', ctx => {
    console.log(ctx.from)
    let animalMessage = `choose one`;
    ctx.deleteMessage();
    bot.telegram.sendMessage(ctx.chat.id, animalMessage, {
        reply_markup: {
            inline_keyboard: [
                [{
                        text: "Lesson plans",
                        callback_data: 'Plan'
                    },
                    {
                        text: "Cute Cats",
                        callback_data: 'cat'
                    },
                    {
                        text: "Good Luck",
                        callback_data: 'Luck'
                    }
                ],

            ]
        }
    })
})

//method that returns image of a dog

bot.action('Plan', ctx => {
    bot.telegram.sendPhoto(ctx.chat.id, {
        source: "res/Plan.jpg"
    })

})

//method that returns image of a cat 

bot.action('cat', ctx => {
    bot.telegram.sendPhoto(ctx.chat.id, {
        source: "res/cat.jpeg"
    })

})

bot.action('Luck', ctx => {
    bot.telegram.sendPhoto(ctx.chat.id, {
        source: "res/GoodLuck.png"
    })

})

bot.launch();

// 1788149046:AAGMPYFK29UwcXxbu69cn5GPIdwdrZo97z0