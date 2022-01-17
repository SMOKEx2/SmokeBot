const Discord = require('@n-h-n/discord.js-12.5.3')
const { MessageSelectMenu, Client } = require('discord.js')
const bot = new Discord.Client()
const config = require('./config.json')


bot.on('ready',()=>{
    console.log('online')
})

bot.on('message',msg=>{

    if (msg.content === "!help") {
        const embed1 = new Discord.MessageEmbed()
          .setTitle('**𝐒𝐌𝐎𝐊𝐄 𝐂𝐋𝐔𝐁**')
          .setDescription("```\n 🧸 วิธีใช้งานคำสั่ง 🧸\n !botmusic [คำสั่ง Bot Music] 🔉\n !botstar [คำสั่ง Bot Ster] ⭐\n !botbank [คำสั่ง Bot Bank] 🏧\n !botroleplay [คำสั่ง Bot Roleplay] 💪🏻\n !botgambling [คำสั่ง Bot Gambling] 🎰```")
          .setColor("RANDOM")
          .setFooter('', 'https://cdn.discordapp.com/avatars/270112831360204812/1139c6b055aeed0fb7eb4d2ebd55d623.webp?size=1280')
          .setThumbnail('https://cdn.discordapp.com/attachments/894890422030176306/932637602912272384/standard_4.gif') 
          .setTimestamp()
          .setFooter('SMOKE CLUB', 'https://cdn.discordapp.com/attachments/894890422030176306/932637602912272384/standard_4.gif');
        msg.reply(embed1);
      }

    if (msg.content === "!botmusic") {
        const embed1 = new Discord.MessageEmbed()
          .setTitle('**𝐒𝐌𝐎𝐊𝐄 𝐂𝐋𝐔𝐁**')
          .setDescription("```\n 🎶 วิธีใช้งานคำสั่ง Bot Music 🎶\n 1.Bot Music [1] : ใช้คำสั้ง [+play] 🔉\n 2.Bot Music [2] : ใช้คำสั้ง [/play] 🔉\n 3.Bot Music [3] : ใช้คำสั้ง [m!play] 🔉\n 4.Bot Music [4] : ใช้คำสั้ง [s!play] 🔉```")
          .setColor("RANDOM")
          .setFooter('', 'https://cdn.discordapp.com/avatars/270112831360204812/1139c6b055aeed0fb7eb4d2ebd55d623.webp?size=1280')
          .setThumbnail('https://cdn.discordapp.com/attachments/894890422030176306/932637602912272384/standard_4.gif') 
          .setTimestamp()
          .setFooter('SMOKE CLUB', 'https://cdn.discordapp.com/attachments/894890422030176306/932637602912272384/standard_4.gif');
        msg.reply(embed1);
      }

    if (msg.content === "!botstar") {
        const embed1 = new Discord.MessageEmbed()
          .setTitle('**𝐒𝐌𝐎𝐊𝐄 𝐂𝐋𝐔𝐁**')
          .setDescription("```\n ⭐ วิธีใช้งานคำสั่ง Bot Star ⭐\n 1.เช็คความหล่อสวย : ใช้คำสั้ง [+handsome] ⭐\n 2.Meme : ใช้คำสั้ง [+meme] ⭐```")
          .setColor("RANDOM")
          .setFooter('', 'https://cdn.discordapp.com/avatars/270112831360204812/1139c6b055aeed0fb7eb4d2ebd55d623.webp?size=1280')
          .setThumbnail('https://cdn.discordapp.com/attachments/894890422030176306/932637602912272384/standard_4.gif') 
          .setTimestamp()
          .setFooter('SMOKE CLUB', 'https://cdn.discordapp.com/attachments/894890422030176306/932637602912272384/standard_4.gif');
        msg.reply(embed1);
      }

    if (msg.content === "!botbank") {
        const embed1 = new Discord.MessageEmbed()
          .setTitle('**𝐒𝐌𝐎𝐊𝐄 𝐂𝐋𝐔𝐁**')
          .setDescription("```\n 🏧 วิธีใช้งานคำสั่ง Bot Bank 🏧\n 1.อันดับ : ใช้คำสั้ง [+leaderboard] 🏧\n 2.ดูเงินในธนาคาร : ใช้คำสั้ง [+bal] 🏧\n 3.ฝากเงิน : ใช้คำสั้ง [+dep จำนวนเงิน] 🏧\n 4.ถอนเงิน : ใช้คำสั้ง [+with จำนวนเงิน] 🏧\n 5.โอนเงิน : ใช้คำสั้ง [+pay @ชื่อคนที่จะโอน] 🏧```")
          .setColor("RANDOM")
          .setFooter('', 'https://cdn.discordapp.com/avatars/270112831360204812/1139c6b055aeed0fb7eb4d2ebd55d623.webp?size=1280')
          .setThumbnail('https://cdn.discordapp.com/attachments/894890422030176306/932637602912272384/standard_4.gif') 
          .setTimestamp()
          .setFooter('SMOKE CLUB', 'https://cdn.discordapp.com/attachments/894890422030176306/932637602912272384/standard_4.gif');
        msg.reply(embed1);
      }      

    if (msg.content === "!botroleplay") {
        const embed1 = new Discord.MessageEmbed()
          .setTitle('**𝐒𝐌𝐎𝐊𝐄 𝐂𝐋𝐔𝐁**')
          .setDescription("```\n 💪🏻 วิธีใช้งานคำสั่ง Bot Roleplay 💪🏻\n 1.Work [ทำงานสุจริต] : ใช้คำสั้ง [+work] 💰\n 2.Mine [ทำงานขุดแร่] : ใช้คำสั้ง [+mine] ⛏️\n 3.Fish [ทำงานตกปลา] : ใช้คำสั้ง [+fish] 🎣\n 4.Inv [ดูของในกระเป๋า] : ใช้คำสั้ง [+inv] 🎒\n 5.Sell [ขายของทั้งหมด] : ใช้คำสั้ง [+sell] 💵```")
          .setColor("RANDOM")
          .setFooter('', 'https://cdn.discordapp.com/avatars/270112831360204812/1139c6b055aeed0fb7eb4d2ebd55d623.webp?size=1280')
          .setThumbnail('https://cdn.discordapp.com/attachments/894890422030176306/932637602912272384/standard_4.gif') 
          .setTimestamp()
          .setFooter('SMOKE CLUB', 'https://cdn.discordapp.com/attachments/894890422030176306/932637602912272384/standard_4.gif');
        msg.reply(embed1);
      }
    if (msg.content === "!botgambling") {
        const embed1 = new Discord.MessageEmbed()
          .setTitle('**𝐒𝐌𝐎𝐊𝐄 𝐂𝐋𝐔𝐁**')
          .setDescription("```\n 🎰 วิธีใช้งานคำสั่ง Bot Gambling 🎰\n 1.ปล้นผู้เล่น : ใช้คำสั้ง [+rob @ชื่อคนที่จะปล้น] 💰\n 2.เกมพนันเป่ายิ้งฉุบ : ใช้คำสั้ง [+rps จำนวนเงิน] ✌🏻\n 3.เกมพนันรูเลท : ใช้คำสั้ง [+roulette r,g,b จำนวนเงิน]\n 4.เกมพนันตู้สล็อต : ใช้คำสั้ง [+slot จำนวนเงิน] 🎰\n```")
          .setColor("RANDOM")
          .setFooter('', 'https://cdn.discordapp.com/avatars/270112831360204812/1139c6b055aeed0fb7eb4d2ebd55d623.webp?size=1280')
          .setThumbnail('https://cdn.discordapp.com/attachments/894890422030176306/932637602912272384/standard_4.gif') 
          .setTimestamp()
          .setFooter('SMOKE CLUB', 'https://cdn.discordapp.com/attachments/894890422030176306/932637602912272384/standard_4.gif');
        msg.reply(embed1);
      }      
})

bot.login(config.token)