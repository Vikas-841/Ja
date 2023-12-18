const TelegramBot = require('node-telegram-bot-api');
const { promoteCommand } = require('./modules/promote');
const { adminsCommand } = require('./modules/admins');
const { broadcastCommand } = require('./modules/broadcast');



// Example usage



const token = '6500063430:AAGpMFgSMEUcH8wZ0BiRF9oCChuDHqsUO7g';
const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/promote/, (msg) => {
  promoteCommand(bot, msg);
});
bot.onText(/\/admins/, (msg) => {
  adminsCommand(bot, msg);
});
bot.onText(/\/broadcast/, (msg) => {
  broadcastCommand(bot, msg);
});
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    let editedMessage;

    // Send the first message with a delay
    bot.sendMessage(chatId, '♥️').then((startMessage) => {
        // Delay and edit the message to display the next text
        setTimeout(() => {
            bot.editMessageText('⚡', { chat_id: chatId, message_id: startMessage.message_id });
        }, 1000); // Delay of 1 second

        // Delay and edit the message to display the final text
        setTimeout(() => {
            bot.editMessageText('🚀 Starting.', { chat_id: chatId, message_id: startMessage.message_id });
        }, 1500); // Delay of 2 seconds
      setTimeout(() => {
            bot.editMessageText('🚀 Starting..', { chat_id: chatId, message_id: startMessage.message_id });
        }, 2000); // Delay of 2 
      setTimeout(() => {
            bot.editMessageText('🚀 Starting...', { chat_id: chatId, message_id: startMessage.message_id });
        }, 2200);
      setTimeout(() => {
      const stickerId = 'CAACAgUAAx0Cb8705wADwGVbd_sb372HLS8ZNWULasTANcLlAAJXCQACbbJRVxr4Y_kportcMwQ'; // Replace with the actual sticker file ID
      bot.editMessageMedia({
        media: { type: 'sticker', media: stickerId },
        chat_id: chatId,
        message_id: startMessage.message_id,
      });
    }, 2400); //delay of 2.4 second 
  });
    

    const username = msg.from.username;

    // Previous code...

// Send a welcome message with an image and an inline keyboard
// Previous code...

// Send a welcome message with an image and an inline keyboard
setTimeout(() => {
    bot.sendPhoto(
        chatId,
        'https://telegra.ph/file/ada266eef2e7465a3b09d.jpg', // Replace with the URL of your image
        {
            caption: `ʜᴇʏ KIRA </>, 🫧

𝙸'ᴍ 𝙶ᴏᴊᴏ ᴏꜰ ꜱɪx ᴇʏᴇꜱ!

⌥ ᴀɴ ᴀᴅᴠᴀɴᴄᴇ & ꜰᴀꜱᴛ ɢʀᴏᴜᴘ ᴍᴀɴᴀɢᴇᴍᴇɴᴛ ʙᴏᴛ ᴡɪᴛʜ ᴀɴɪᴍᴇ ꜰᴜɴᴄᴛɪᴏɴᴀʟɪᴛʏ ᴡɪᴛʜ sᴏᴍᴇ ᴄᴏᴏʟ ғᴇᴀᴛᴜʀᴇs ʟɪᴋᴇ:
➖➖➖➖➖➖➖➖➖➖➖➖➖➖
・ᴍᴜꜱɪᴄ ᴘʟᴀʏᴇʀ.
・ɪᴍᴘᴏꜱᴛᴇʀ ᴅᴇᴛᴇᴄᴛᴏʀ.
・ꜱᴘᴀᴍ ᴘʀᴏᴛᴇᴄᴛɪᴏɴ.
・ᴘʜ-ʟᴏɢᴏ ᴍᴀᴋᴇʀ.
・ʙᴇᴛᴛɪɴɢ ᴅᴏʟʟᴀʀ ɢᴀᴍᴇꜱ.
➖➖➖➖➖➖➖➖➖➖➖➖➖➖
▸ ᴛᴀᴘ ᴏɴ ʜᴇʟᴘ ᴍᴇɴᴜ ᴀɴᴅ ᴍᴜꜱɪᴄ ʙᴜᴛᴛᴏɴ ᴛᴏ ʟᴇᴀʀɴ ᴍᴏʀᴇ ᴀʙᴏᴜᴛ ɢᴏᴊᴏ ꜱᴀᴛᴏʀᴜ.`,
          
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: '⛩️ ꜱᴜᴍᴍᴏɴ ᴍᴇ ⛩️', url: 'https://t.me/GOJO_SATORU_X_ROBOT?startgroup=true' }],
                  [
                        { text: '🍁ᴄᴏᴍᴍᴀɴᴅꜱ🍁', callback_data: 'help' },
                    { text: '🎧ᴍᴜꜱɪᴄ ʜᴇʟᴘ🎧', callback_data: 'music'
                      
                    }
                  ],
                  [
                    { text: 'ꜱᴜᴘᴘᴏʀᴛ', url: 'https://t.me/deathshot_group'
                      
                    } ,
                    { text: 'ᴀʙᴏᴜᴛ',
                    callback_data:'my'}
                    ]
                ]
            }
        }
    );
}, 4000);
  const Mainmenu = {
    inline_keyboard: 
        [
            
        [
            { text: 'home', callback_data: 'main' },
            { text: '🎧 Music Help 🎧', callback_data: 'music' }
        ],
       
    ]
};
}); 
bot.on('callback_query', (callbackQuery) => {
    const chatId = callbackQuery.message.chat.id;
    const messageId = 
      callbackQuery.message.message_id;
    const data = callbackQuery.data;

    if (data === 'add_to_group') {
        bot.sendMessage(chatId, 'https://telegram.dog/Itachi_x_robot?startgroup=true');
    } else if (data === 'home') {
    // Edit the caption of the photo message to display the new inline keyboard
    
bot.editMessageCaption(
    `ʜᴇʏ KIRA </>, 🫧

𝙸'ᴍ 𝙶ᴏᴊᴏ ᴏꜰ ꜱɪx ᴇʏᴇꜱ!

⌥ ᴀɴ ᴀᴅᴠᴀɴᴄᴇ & ꜰᴀꜱᴛ ɢʀᴏᴜᴘ ᴍᴀɴᴀɢᴇᴍᴇɴᴛ ʙᴏᴛ ᴡɪᴛʜ ᴀɴɪᴍᴇ ꜰᴜɴᴄᴛɪᴏɴᴀʟɪᴛʏ ᴡɪᴛʜ sᴏᴍᴇ ᴄᴏᴏʟ ғᴇᴀᴛᴜʀᴇs ʟɪᴋᴇ:
➖➖➖➖➖➖➖➖➖➖➖➖➖➖
・ᴍᴜꜱɪᴄ ᴘʟᴀʏᴇʀ.
・ɪᴍᴘᴏꜱᴛᴇʀ ᴅᴇᴛᴇᴄᴛᴏʀ.
・ꜱᴘᴀᴍ ᴘʀᴏᴛᴇᴄᴛɪᴏɴ.
・ᴘʜ-ʟᴏɢᴏ ᴍᴀᴋᴇʀ.
・ʙᴇᴛᴛɪɴɢ ᴅᴏʟʟᴀʀ ɢᴀᴍᴇꜱ.
➖➖➖➖➖➖➖➖➖➖➖➖➖➖
▸ ᴛᴀᴘ ᴏɴ ʜᴇʟᴘ ᴍᴇɴᴜ ᴀɴᴅ ᴍᴜꜱɪᴄ ʙᴜᴛᴛᴏɴ ᴛᴏ ʟᴇᴀʀɴ ᴍᴏʀᴇ ᴀʙᴏᴜᴛ ɢᴏᴊᴏ ꜱᴀᴛᴏʀᴜ.`,
    {
        chat_id: chatId,
        message_id: messageId,
        reply_markup: {
            inline_keyboard: [
                        [
                            { text: '⛩️ ꜱᴜᴍᴍᴏɴ ᴍᴇ ⛩️', url: 'https://t.me/GOJO_SATORU_X_ROBOT?startgroup=true' }
                        ],
                        [
                            { text: '🍁ᴄᴏᴍᴍᴀɴᴅꜱ🍁', callback_data: 'help' },
                            { text: '🎧ᴍᴜꜱɪᴄ ʜᴇʟᴘ🎧', callback_data: 'music' }
                        ],
                        [
                            { text: 'ꜱᴜᴘᴘᴏʀᴛ', url: 'https://t.me/deathshot_group' },
                            { text: 'ᴀʙᴏᴜᴛ', callback_data: 'ᴀʙᴏᴜᴛ' }
                        ]
                    ]
                }
            }
        
    );
      { parse_mode: 'Markdown' }
                      }
                          else if (data === 'help') {
        // Edit the caption of the photo message to display the new inline keyboard
      bot.editMessageCaption(
    'ɢᴏᴊᴏ ꜱᴀᴛᴏʀᴜ\n\n' +
    'ᴄʟɪᴄᴋ ᴏɴ ᴛʜᴇ ʙᴜᴛᴛᴏɴ ʙᴇʟʟᴏᴡ ᴛᴏ ɢᴇᴛ ᴅᴇsᴄʀɪᴘᴛɪᴏɴ ᴀʙᴏᴜᴛ sᴘᴇᴄɪғɪᴄ ᴄᴏᴍᴍᴀɴᴅs.',
    {
        chat_id: chatId,
        message_id: messageId,
        reply_markup: {
            inline_keyboard: [
                
                 [
    { text: 'Aɴᴛɪ-ꜰʟᴏᴏᴅ', callback_data: 'Aɴᴛɪ-ꜰʟᴏᴏᴅ' },
    { text: 'Aᴅᴍɪɴs', callback_data: 'Aᴅᴍɪɴs' },
    { text: 'Aᴅᴠᴀɴᴄᴇ', callback_data: 'Aᴅᴠᴀɴᴄᴇ' }
],
[
    { text: 'AFK', callback_data: 'AFK' },
    { text: 'Aɴᴛɪ-ꜰʟᴏᴏᴅ', callback_data: 'Aɴᴛɪ-ꜰʟᴏᴏᴅ' },
    { text: 'Bʟ-Sᴛɪᴄᴋᴇʀ', callback_data: 'Bʟ-Sᴛɪᴄᴋᴇʀ' }
],
[
    { text: 'Bʟᴀᴄᴋʟɪsᴛ', callback_data: 'Bʟᴀᴄᴋʟɪsᴛ' },
    { text: 'Bʟᴜᴇᴛᴇxᴛ', callback_data: 'Bʟᴜᴇᴛᴇxᴛ' },
    { text: 'Bᴀɴꜱ', callback_data: 'Bᴀɴꜱ' }
],
[
    { text: 'Bᴀᴄᴋᴜᴘ', callback_data: 'Bᴀᴄᴋᴜᴘ' },
    { text: 'Bᴜɢꜱ', callback_data: 'Bᴜɢꜱ' },
    { text: 'ᴄʜᴀᴛʙᴏᴛ', callback_data: 'ᴄʜᴀᴛʙᴏᴛ' }
],
[
    { text: 'Cᴀʀʙᴏɴ', callback_data: 'Cᴀʀʙᴏɴ' },
    { text: 'Cᴏɴɴᴇᴄᴛ', callback_data: 'Cᴏɴɴᴇᴄᴛ' },
    { text: 'Cᴏᴜɴᴛʀʏ', callback_data: 'Cᴏᴜɴᴛʀʏ' }
],
               [
  { text: 'Dɪsᴀʙʟᴇ', callback_data: 'Dɪsᴀʙʟᴇ' },
  { text: 'Dᴇᴠꜱ', callback_data: 'Dᴇᴠꜱ' },
  { text: 'Exᴛʀᴀs', callback_data: 'Exᴛʀᴀs' }
],
[
  { text: 'Eɴɢʟɪsʜ', callback_data: 'Eɴɢʟɪsʜ' },
  { text: 'Fɪʟᴛᴇʀs', callback_data: 'Fɪʟᴛᴇʀs' },
  { text: 'Fᴏɴᴛ Eᴅɪᴛᴏʀ', callback_data: 'Fᴏɴᴛ Eᴅɪᴛᴏʀ' }
],
[
  { text: 'Gɪᴛʜᴜʙ', callback_data: 'Gɪᴛʜᴜʙ' },
  { text: 'Gʀᴏᴜᴘ', callback_data: 'Gʀᴏᴜᴘ' },
  { text: 'Gʀᴏᴜᴘ-ʟᴏᴄᴋs', callback_data: 'Gʀᴏᴜᴘ-ʟᴏᴄᴋs' }
],
              [{ text: 'Gᴇᴛ-ᴛɪᴍᴇ', callback_data: 'get_time' },
    { text: 'Gᴏᴏɢʟᴇ', callback_data: 'google' },
    { text: 'Hᴏʀɴʏ-ɢᴀᴍᴇꜱ', callback_data: 'horny_games' }],
    [{ text: 'Lᴏɢs-ɪɴꜰᴏ', callback_data: 'logs_info' },
{ text: 'Mᴇᴍɪꜰʏ', callback_data: 'memify' },
    { text: 'Mᴜᴛᴇ', callback_data: 'mute' }],
    [{ text: 'Nɪɢʜᴛ-ᴍᴏᴅᴇ', callback_data: 'night_mode' },
    { text: 'Nᴏᴛᴇs', callback_data: 'notes' },
    { text: 'Lᴏɢᴏ', callback_data: 'logo' }],
              [
                { text: '⇚', callback_data: 'left'},
                {
                  text: 'HOME🔙',
                  callback_data: 'home'
                },
                {
                  text: '⇛', callback_data: 'right'
                }
                
              ]
              ]
        },
    },
    { parse_mode: 'Markdown' }
);

} else if (data === 'right') {
        // Edit the caption of the photo message to display the new inline keyboard
      bot.editMessageCaption(
    'ɢᴏᴊᴏ ꜱᴀᴛᴏʀᴜ\n\n' +
    'ᴄʟɪᴄᴋ ᴏɴ ᴛʜᴇ ʙᴜᴛᴛᴏɴ ʙᴇʟʟᴏᴡ ᴛᴏ ɢᴇᴛ ᴅᴇsᴄʀɪᴘᴛɪᴏɴ ᴀʙᴏᴜᴛ sᴘᴇᴄɪғɪᴄ ᴄᴏᴍᴍᴀɴᴅs.',
    {
        chat_id: chatId,
        message_id: messageId,
        reply_markup: {
            inline_keyboard: [
                [
            { text: 'Pᴀsᴛᴇ', callback_data: 'paste' },
            { text: 'Pᴜʀɢᴇ', callback_data: 'purge' },
            { text: 'Rᴇᴘᴏʀᴛs', callback_data: 'reports' }
        ],
        [
            { text: 'SᴘᴇᴇᴅTᴇsᴛ', callback_data: 'speedtest' },
            { text: 'Sᴛɪᴄᴋᴇʀꜱ', callback_data: 'stickers' },
            { text: 'Tɢʀᴀᴘʜ', callback_data: 'graph' }
        ],
        [
            { text: 'Tɪɴʏ', callback_data: 'tiny' },
            { text: 'Tʀᴀɴsʟᴀᴛᴏʀ', callback_data: 'translator' },
            { text: 'Tʀᴜᴛʜ-Dᴀʀᴇ', callback_data: 'truthdare' }
        ],
        [
            { text: 'Tᴀɢɢᴇʀ', callback_data: 'tagger' },
            { text: 'Tᴏᴏʟs', callback_data: 'tools' },
            { text: 'Tᴛꜱ-ꜱᴛᴛ', callback_data: 'ttsstt' }
        ],
        [
            { text: 'U-ᴅɪᴄᴛɪᴏɴᴀʀʏ', callback_data: 'udictionary' },
            { text: 'Uꜱᴇʀꜱ-ɪɴꜰᴏ', callback_data: 'usersinfo' },
            { text: 'Wɪᴋɪᴘᴇᴅɪᴀ', callback_data: 'wikipedia' }
        ],
        [
            { text: 'Wʀɪᴛᴇ-ᴛᴏᴏʟ', callback_data: 'writetool' },
            { text: 'Wᴀʀɴs', callback_data: 'warns' },
            { text: 'Wᴇʙsʜᴏᴛꜱ', callback_data: 'webshots' }
        ],
        [
            { text: 'Wᴇᴀᴛʜᴇʀ', callback_data: 'weather' },
            { text: 'Zɪᴘᴘɪɴɢ', callback_data: 'zipping' },
            { text: 'Zᴏᴍʙɪᴇ', callback_data: 'zombie' }
        ],
        [
            { text: '𝚂ᴇᴛ-ʀᴜʟᴇs', callback_data: 'setrules' },
            { text: 'ᴄʜᴀᴛ ɢᴘᴛ', callback_data: 'chatgpt' }
        ],
              [
                { text: '⇚', callback_data: 'left'},
                {
                  text: 'HOME🔙',
                  callback_data: 'home'
                },
                {
                  text: '⇛', callback_data: 'right'
                }
                
              ]

        ]
              },
    },
    { parse_mode: 'Markdown' }
);

    }
              
              else if (data === 'left') {
        // Edit the caption of the photo message to display the new inline keyboard
      bot.editMessageCaption(
    'ɢᴏᴊᴏ ꜱᴀᴛᴏʀᴜ\n\n' +
    'ᴄʟɪᴄᴋ ᴏɴ ᴛʜᴇ ʙᴜᴛᴛᴏɴ ʙᴇʟʟᴏᴡ ᴛᴏ ɢᴇᴛ ᴅᴇsᴄʀɪᴘᴛɪᴏɴ ᴀʙᴏᴜᴛ sᴘᴇᴄɪғɪᴄ ᴄᴏᴍᴍᴀɴᴅs.',
    {
        chat_id: chatId,
        message_id: messageId,
        reply_markup: {
            inline_keyboard: [
                
                 [
    { text: 'Aɴᴛɪ-ꜰʟᴏᴏᴅ', callback_data: 'Aɴᴛɪ-ꜰʟᴏᴏᴅ' },
    { text: 'Aᴅᴍɪɴs', callback_data: 'Aᴅᴍɪɴs' },
    { text: 'Aᴅᴠᴀɴᴄᴇ', callback_data: 'Aᴅᴠᴀɴᴄᴇ' }
],
[
    { text: 'AFK', callback_data: 'AFK' },
    { text: 'Aɴᴛɪ-ꜰʟᴏᴏᴅ', callback_data: 'Aɴᴛɪ-ꜰʟᴏᴏᴅ' },
    { text: 'Bʟ-Sᴛɪᴄᴋᴇʀ', callback_data: 'Bʟ-Sᴛɪᴄᴋᴇʀ' }
],
[
    { text: 'Bʟᴀᴄᴋʟɪsᴛ', callback_data: 'Bʟᴀᴄᴋʟɪsᴛ' },
    { text: 'Bʟᴜᴇᴛᴇxᴛ', callback_data: 'Bʟᴜᴇᴛᴇxᴛ' },
    { text: 'Bᴀɴꜱ', callback_data: 'Bᴀɴꜱ' }
],
[
    { text: 'Bᴀᴄᴋᴜᴘ', callback_data: 'Bᴀᴄᴋᴜᴘ' },
    { text: 'Bᴜɢꜱ', callback_data: 'Bᴜɢꜱ' },
    { text: 'ᴄʜᴀᴛʙᴏᴛ', callback_data: 'ᴄʜᴀᴛʙᴏᴛ' }
],
[
    { text: 'Cᴀʀʙᴏɴ', callback_data: 'Cᴀʀʙᴏɴ' },
    { text: 'Cᴏɴɴᴇᴄᴛ', callback_data: 'Cᴏɴɴᴇᴄᴛ' },
    { text: 'Cᴏᴜɴᴛʀʏ', callback_data: 'Cᴏᴜɴᴛʀʏ' }
],
               [
  { text: 'Dɪsᴀʙʟᴇ', callback_data: 'Dɪsᴀʙʟᴇ' },
  { text: 'Dᴇᴠꜱ', callback_data: 'Dᴇᴠꜱ' },
  { text: 'Exᴛʀᴀs', callback_data: 'Exᴛʀᴀs' }
],
[
  { text: 'Eɴɢʟɪsʜ', callback_data: 'Eɴɢʟɪsʜ' },
  { text: 'Fɪʟᴛᴇʀs', callback_data: 'Fɪʟᴛᴇʀs' },
  { text: 'Fᴏɴᴛ Eᴅɪᴛᴏʀ', callback_data: 'Fᴏɴᴛ Eᴅɪᴛᴏʀ' }
],
[
  { text: 'Gɪᴛʜᴜʙ', callback_data: 'Gɪᴛʜᴜʙ' },
  { text: 'Gʀᴏᴜᴘ', callback_data: 'Gʀᴏᴜᴘ' },
  { text: 'Gʀᴏᴜᴘ-ʟᴏᴄᴋs', callback_data: 'Gʀᴏᴜᴘ-ʟᴏᴄᴋs' }
],
              [{ text: 'Gᴇᴛ-ᴛɪᴍᴇ', callback_data: 'get_time' },
    { text: 'Gᴏᴏɢʟᴇ', callback_data: 'google' },
    { text: 'Hᴏʀɴʏ-ɢᴀᴍᴇꜱ', callback_data: 'horny_games' }],
    [{ text: 'Lᴏɢs-ɪɴꜰᴏ', callback_data: 'logs_info' },
{ text: 'Mᴇᴍɪꜰʏ', callback_data: 'memify' },
    { text: 'Mᴜᴛᴇ', callback_data: 'mute' }],
[{ text: 'Nɪɢʜᴛ-ᴍᴏᴅᴇ', callback_data: 'night_mode' },
    { text: 'Nᴏᴛᴇs', callback_data: 'notes' },
    { text: 'Lᴏɢᴏ', callback_data: 'logo' }],
              [
                { text: '⇚', callback_data: 'left'},
                {
                  text: 'HOME🔙',
                  callback_data: 'home'
                },
                {
                  text: '⇛', callback_data: 'right'
                }
                
              ]
 ]
        },
    },
    { parse_mode: 'Markdown' }
);
    }
      
    else if (data === 'Aᴅᴍɪɴs') {
        // Edit the caption for the ADMIN inline keyboard
        bot.editMessageCaption(
            `▸ 𝙰ᴠᴀɪʟᴀʙʟᴇ 𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂 𝙵𝙾𝚁 Aᴅᴍɪɴs :

User Commands:
» /admins: list of admins in the chat
» /pinned: to get the current pinned message.

The Following Commands are Admins only: 
» /pin: silently pins the message replied to - add 'loud' or 'notify' to give notifs to users
» /unpin: unpins the currently pinned message
» /invitelink: gets invitelink
» /promote: promotes the user replied to
» /lowpromote: promotes the user replied to with half rights
» /fullpromote: promotes the user replied to with full rights
» /demote: demotes the user replied to
» /title <title here>: sets a custom title for an admin that the bot promoted
» /admincache: force refresh the admins list
» /del: deletes the message you replied to
» /purge: deletes all messages between this and the replied to message.
» /purge <integer X>: deletes the replied message, and X messages following it if replied to a message.
» /setgtitle <text>: set group title
» /setgpic: reply to an image to set as group photo
» /setdesc: Set group description
» /setsticker: Set group sticker`,
            {
                chat_id: chatId,
                message_id: messageId,
                reply_markup: {
                    inline_keyboard: [
                        [
                            { text: '◀️', callback_data: 'help' },
                            ]
                    ],
                },
            },
            { parse_mode: 'Markdown' }
        );

    }  else if (data === 'my') {
    bot.editMessageCaption(
        'Konichiwa, 👤  This is Gojo Satoru\n\n◸ An advanced management & music robot with anime functionality which has a lost of features and games!\n\n▸ Gojo Satoru has advance features like detect imposters, ph-logo maker, betting games, etc.\n\n▸ Gojo Satoru has welcome template which greets users.\n\n▸ Gojo Satoru has lots of fun features like Batman, Sigma, Psycho, etc.\n\n▸ Satoru freaking Gojo can play songs on voice chat and manage your chat with the power of six eyes.',
        {
            chat_id: chatId,
            message_id: messageId,
            reply_markup: {
                inline_keyboard: Mainmenu.inline_keyboard,
            },
        },
        { parse_mode: 'Markdown' }
    );
    } else // ... Previous code

if (data === 'approve') {
    // Edit the text for the ADMIN inline keyboard
    bot.editMessageText(
        '▸ 𝙰ᴠᴀɪʟᴀʙʟᴇ 𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂 𝙵ᙀᚲ Aᴘᴘʀᴏᴠᴇ-ᴜꜱᴇʀꜱ :\n\n'
        + 'Sometimes, you might trust a user not to send unwanted content.\n'
        + 'Maybe not enough to make them admin, but you might be ok with locks, blacklists, and antiflood not applying to them.\n\n'
        + 'That\'s what approvals are for - approve of trustworthy users to allow them to send\n\n'
        + 'Admin commands:\n'
        + '❍ /approval: Check a user\'s approval status in this chat.\n'
        + '❍ /approve: Approve of a user. Locks, blacklists, and antiflood won\'t apply to them anymore.\n'
        + '❍ /unapprove: Unapprove of a user. They will now be subject to locks, blacklists, and antiflood again.\n'
        + '❍ /approved: List all approved users.\n'
        + '❍ /unapproveall: Unapprove ALL users in a chat. This cannot be undone.',
        {
            chat_id: chatId,
            message_id: messageId,
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: '◀️', callback_data: 'help' },
                    ]
                ],
            },
        }
    );
}

          else     if (data === 'Aᴅᴠᴀɴᴄᴇ') {
        // Edit the caption for the ADMIN inline keyboard
       bot.editMessageCaption(
    ` ▸ 𝙰ᴠᴀɪʟᴀʙʟᴇ 𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂 𝙵𝙾𝚁 Aᴅᴠᴀɴᴄᴇ :

☬ /unbanall : ᴜɴʙᴀɴ ᴀʟʟ ᴍᴀᴍʙᴇʀ

☬ /unmuteall : ᴜɴᴍᴜᴛᴇ ᴀʟʟ ᴍᴀᴍʙᴇʀ

☬ /users : ɢᴇᴛ ɢʀᴏᴜᴘ ᴜsᴇʀs ʟɪsᴛ`,
    {
        chat_id: chatId,
        message_id: messageId,
        reply_markup: {
            inline_keyboard: [
                [
                    { text: '◀️', callback_data: 'help' },
                ]
            ],
        },
    }
         );
          }
          else if (data === 'Aɴᴛɪ-ꜰʟᴏᴏᴅ')           {
            bot.editMessageCaption(
      `▸ 𝙰ᴠᴀɪʟᴀʙʟᴇ 𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂 𝙵𝙾𝚁 Aɴᴛɪ-ꜰʟᴏᴏᴅ :

Antiflood allows you to take action on users that send more than x messages in a row. Exceeding the set flood will result in restricting that user.
 This will mute users if they send more than 10 messages in a row, bots are ignored.

 ❍ /flood: Get the current flood control setting
• Admins only:
 ❍ /setflood <int/'no'/'off'>: enables or disables flood control
 Example: /setflood 10
 ❍ /setfloodmode <ban/kick/mute/tban/tmute> <value>: Action to perform when user have exceeded flood limit. ban/kick/mute/tmute/tban
• Note:
 • Value must be filled for tban and tmute!!
 It can be:
 5m = 5 minutes
 6h = 6 hours
 3d = 3 days
 1w = 1 week`  ,  
              {
        chat_id: chatId,
        message_id: messageId,
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'BACK', callback_data: 'help' },
                ]
            ],
        },
    }
);
          } else if (data === 'Bʟ-Sᴛɪᴄᴋᴇʀ') {
            bot.editMessageCaption(
              `▸ 𝙰ᴠᴀɪʟᴀʙʟᴇ 𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂 𝙵𝙾𝚁 Bʟ-Sᴛɪᴄᴋᴇʀ :

Blacklist sticker is used to stop certain stickers. Whenever a sticker is sent, the message will be deleted immediately.
NOTE: Blacklist stickers do not affect the group admin
 ❍ /blsticker: See current blacklisted sticker
Only admin:
 ❍ /addblsticker <sticker link>: Add the sticker trigger to the black list. Can be added via reply sticker
 ❍ /unblsticker <sticker link>: Remove triggers from blacklist. The same newline logic applies here, so you can delete multiple triggers at once
 ❍ /rmblsticker <sticker link>: Same as above
 ❍ /blstickermode <ban/tban/mute/tmute>: sets up a default action on what to do if users use blacklisted stickers
Note:
 ❍ <sticker link> can be https://t.me/addstickers/<sticker> or just <sticker> or reply to the sticker message`,  
              {
        chat_id: chatId,
        message_id: messageId,
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'BACK', callback_data: 'help' },
                ]
            ],
        },
    }
);
            
              } 
  


       else     if (data === 'Bʟᴀᴄᴋʟɪsᴛ') {
            bot.editMessageCaption(
              `▸ 𝙰ᴠᴀɪʟᴀʙʟᴇ 𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂 𝙵𝙾𝚁 Bʟᴀᴄᴋʟɪsᴛ :


Blacklists are used to stop certain triggers from being said in a group. Any time the trigger is mentioned, the message will immediately be deleted. A good combo is sometimes to pair this up with warn filters!

NOTE: Blacklists do not affect group admins.

 ❍ /blacklist: View the current blacklisted words.

Admin only:
 ❍ /addblacklist <triggers>: Add a trigger to the blacklist. Each line is considered one trigger, so using different lines will allow you to add multiple triggers.
 ❍ /unblacklist <triggers>: Remove triggers from the blacklist. Same newline logic applies here, so you can remove multiple triggers at once.
 ❍ /blacklistmode <off/del/warn/ban/kick/mute/tban/tmute>: Action to perform when someone sends blacklisted words.`,  
              {
        chat_id: chatId,
        message_id: messageId,
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'BACK', callback_data: 'help' },
                ]
            ],
        },
    }
);
            
              } else     if (data === 'Bʟᴜᴇᴛᴇxᴛ') {
            bot.editMessageCaption(
              `▸ 𝙰ᴠᴀɪʟᴀʙʟᴇ 𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂 𝙵𝙾𝚁 Bʟᴜᴇᴛᴇxᴛ :

ʙʟᴜᴇ ᴛᴇxᴛ ᴄʟᴇᴀɴᴇʀ ʀᴇᴍᴏᴠᴇᴅ ᴀɴʏ ᴍᴀᴅᴇ ᴜᴘ ᴄᴏᴍᴍᴀɴᴅs ᴛʜᴀᴛ ᴘᴇᴏᴘʟᴇ sᴇɴᴅ ɪɴ ʏᴏᴜʀ ᴄʜᴀᴛ
.
 ❍ /cleanblue <on/off/yes/no>: clean commands after sending
 ❍ /ignoreblue <word>: prevent auto cleaning of the command
 ❍ /unignoreblue <word>: remove prevent auto cleaning of the command
 ❍ /listblue: list currently whitelisted commands`,  
              {
        chat_id: chatId,
        message_id: messageId,
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'BACK', callback_data: 'help' },
                ]
            ],
        },
    }
);
            
       } else     if (data === 'Bᴀɴꜱ') {
            bot.editMessageCaption(
              `▸ 𝙰ᴠᴀɪʟᴀʙʟᴇ 𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂 𝙵𝙾𝚁 Bᴀɴꜱ :

 ✪︎ /punchme: punches the user who issued the command.
 ✪︎ /kickme: kicks the user who issued the command.

ban a user commands:
 ✪︎ /ban <userhandle>: bans a user. (via handle, or reply)
 ✪︎ /sban <userhandle>: Silently ban a user. Deletes command, Replied message and doesn't reply. (via handle, or reply)
 ✪︎ /tban <userhandle> x(m/h/d): bans a user for x time. (via handle, or reply). m = minutes, h = hours, d = days.
 ✪︎ /unban <userhandle>: unbans a user. (via handle, or reply)
 ✪︎ /kick <userhandle>: Kicks a user out of the group, (via handle, or reply)
 ✪︎ /punch <userhandle>: Punches a user out of the group, (via handle, or reply)

 ban channel commands:
  ✪︎ /cban or /channelban ban a channel. 
  ✪︎ /uncban or /channelunbanunban channel.`,  
              {
        chat_id: chatId,
        message_id: messageId,
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'BACK', callback_data: 'help' },
                ]
            ],
        },
    }
);
            
            }
  else     if (data === 'Bᴀᴄᴋᴜᴘ') {
            bot.editMessageCaption(
              `▸ 𝙰ᴠᴀɪʟᴀʙʟᴇ 𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂 𝙵𝙾𝚁 Bᴀᴄᴋᴜᴘ :

Only for group owner:

 ❍ /import: Reply to the backup file for the butler / emilia group to import as much as possible, making transfers very easy!  Note that files / photos cannot be imported due to telegram restrictions.

 ❍ /export: Export group data, which will be exported are: rules, notes (documents, images, music, video, audio, voice, text, text buttons)`,  
              {
        chat_id: chatId,
        message_id: messageId,
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'BACK', callback_data: 'help' },
                ]
            ],
        },
    }
);
            
              } else     if (data === 'Bᴜɢꜱ') {
            bot.editMessageCaption(
              `▸ 𝙰ᴠᴀɪʟᴀʙʟᴇ 𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂 𝙵𝙾𝚁 Bᴜɢꜱ :

𝙵ᴏʀ ʀᴇᴩᴏʀᴛɪɴɢ ᴀ ʙᴜɢ 
 ❍ /bug : 𝚃ᴏ ʀᴇᴩᴏʀᴛ ᴀ ʙᴜɢ ᴀᴛ sᴜᴩᴩᴏʀᴛ ᴄʜᴀᴛ.`,  
              {
        chat_id: chatId,
        message_id: messageId,
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'BACK', callback_data: 'help' },
                ]
            ],
        },
    }
);
            
  } else     if (data === 'ᴄʜᴀᴛʙᴏᴛ') {
            bot.editMessageCaption(
              ``,  
              {
        chat_id: chatId,
        message_id: messageId,
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'BACK', callback_data: 'help' },
                ]
            ],
        },
    }
);
            
  } else     if (data === 'Cᴀʀʙᴏɴ') {
            bot.editMessageCaption(
              `▸ 𝙰ᴠᴀɪʟᴀʙʟᴇ 𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂 𝙵𝙾𝚁 Cᴀʀʙᴏɴ :

ᴍᴀᴋᴇs ᴀ ᴄᴀʀʙᴏɴ ᴏғ ᴛʜᴇ ɢɪᴠᴇɴ ᴛᴇxᴛ ᴀɴᴅ sᴇɴᴅ ɪᴛ ᴛᴏ ʏᴏᴜ.

❍ /carbon : ᴍᴀᴋᴇs ᴄᴀʀʙᴏɴ ᴏғ ᴛʜᴇ ɢɪᴠᴇɴ ᴛᴇxᴛ.`,  
              {
        chat_id: chatId,
        message_id: messageId,
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'BACK', callback_data: 'help' },
                ]
            ],
        },
    }
);
            
  } else     if (data === 'Cᴏɴɴᴇᴄᴛ') {
            bot.editMessageCaption(
              `▸ 𝙰ᴠᴀɪʟᴀʙʟᴇ 𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂 𝙵𝙾𝚁 Cᴏɴɴᴇᴄᴛ :

Sometimes, you just want to add some notes and filters to a group chat, but you don't want everyone to see; This is where connections come in...
This allows you to connect to a chat's database, and add things to it without the commands appearing in chat! For obvious reasons, you need to be an admin to add things; but any member in the group can view your data.

 ❍ /connect: Connects to chat (Can be done in a group by /connect or /connect <chat id> in PM)
 ❍ /connection: List connected chats
 ❍ /disconnect: Disconnect from a chat
 ❍ /helpconnect: List available commands that can be used remotely

Admin only:
 ❍ /allowconnect <yes/no>: allow a user to connect to a chat`,  
              {
        chat_id: chatId,
        message_id: messageId,
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'BACK', callback_data: 'help' },
                ]
            ],
        },
    }
);
            
                } else     if (data === 'Cᴏᴜɴᴛʀʏ') {
            bot.editMessageCaption(
              `▸ 𝙰ᴠᴀɪʟᴀʙʟᴇ 𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂 𝙵𝙾𝚁 Cᴏᴜɴᴛʀʏ :

I will give information about a country

 ❍ /country <country name>: Gathering info about given country`,  
              {
        chat_id: chatId,
        message_id: messageId,
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'BACK', callback_data: 'help' },
                ]
            ],
        },
    }
);
            
              } else     if (data === 'Dɪsᴀʙʟᴇ') {
            bot.editMessageCaption(
              `▸ 𝙰ᴠᴀɪʟᴀʙʟᴇ 𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂 𝙵𝙾𝚁 Dɪsᴀʙʟᴇ :

    ❍ /cmds: check the current status of disabled commands

    Admins only:
    ❍ /enable <cmd name>: enable that command
    ❍ /disable <cmd name>: disable that command
    ❍ /enablemodule <module name>: enable all commands in that module
    ❍ /disablemodule <module name>: disable all commands in that module
    ❍ /listcmds: list all possible toggleable commands`,  
              {
        chat_id: chatId,
        message_id: messageId,
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'BACK', callback_data: 'help' },
                ]
            ],
        },
    }
);
            
} else     if (data === 'Dᴇᴠꜱ') {
            bot.editMessageCaption(
              ``,  
              {
        chat_id: chatId,
        message_id: messageId,
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'BACK', callback_data: 'help' },
                ]
            ],
        },
    }
);
            
              } else     if (data === 'Exᴛʀᴀs') {
            bot.editMessageCaption(
              `▸ 𝙰ᴠᴀɪʟᴀʙʟᴇ 𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂 𝙵𝙾𝚁 Exᴛʀᴀs :

Available commands:
Markdown:
 ❍ /markdownhelp: quick summary of how markdown works in telegram - can only be called in private chats
React:
 ❍ /react: Reacts with a random reaction 
Urban Dictonary:
 ❍ /ud <word>: Type the word or expression you want to search use
Wikipedia:
 ❍ /wiki <query>: wikipedia your query`,  
              {
        chat_id: chatId,
        message_id: messageId,
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'BACK', callback_data: 'help' },
                ]
            ],
        },
    }
);
            
                }
  else     if (data === 'Eɴɢʟɪsʜ') {
            bot.editMessageCaption(
              `▸ 𝙰ᴠᴀɪʟᴀʙʟᴇ 𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂 𝙵𝙾𝚁 Eɴɢʟɪsʜ :

 ❍ /define <text>: Type the word or expression you want to search
For example /define kill
 ❍ /spell: while replying to a message, will reply with a grammar corrected version
 ❍ /synonyms <word>: Find the synonyms of a word
 ❍ /antonyms <word>: Find the antonyms of a word`,  
              {
        chat_id: chatId,
        message_id: messageId,
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'BACK', callback_data: 'help' },
                ]
            ],
        },
    }
);
            
      } else     if (data === 'Fɪʟᴛᴇʀs') {
            bot.editMessageCaption(
              `▸ 𝙰ᴠᴀɪʟᴀʙʟᴇ 𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂 𝙵𝙾𝚁 Fɪʟᴛᴇʀs :


 ❍ /filters: List all active filters saved in the chat.

Admin only:
 ❍ /filter <keyword> <reply message>: Add a filter to this chat. The bot will now reply that message whenever 'keyword'is mentioned. If you reply to a sticker with a keyword, the bot will reply with that sticker. NOTE: all filter keywords are in lowercase. If you want your keyword to be a sentence, use quotes. eg: /filter "hey there" How you doin?
 Separate diff replies by %%% to get random replies
 Example: 
 /filter "filtername"
 Reply 1
 %%%
 Reply 2
 %%%
 Reply 3
 ❍ /stop <filter keyword>: Stop that filter.

Chat creator only:
 ❍ /removeallfilters: Remove all chat filters at once.

Note: Filters also support markdown formatters like: {first}, {last} etc.. and buttons.
Check ❍ /markdownhelp to know more!`,  
              {
        chat_id: chatId,
        message_id: messageId,
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'BACK', callback_data: 'help' },
                ]
            ],
        },
    }
);
            
                      }
else     if (data === 'Fᴏɴᴛ Eᴅɪᴛᴏʀ') {
            bot.editMessageCaption(
              `▸ 𝙰ᴠᴀɪʟᴀʙʟᴇ 𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂 𝙵𝙾𝚁 Fᴏɴᴛ Eᴅɪᴛᴏʀ :

 ❍ /font <text> : ᴄᴏɴᴠᴇʀᴛs sɪᴍᴩʟᴇ ᴛᴇxᴛ ᴛᴏ ʙᴇᴀᴜᴛɪғᴜʟ ᴛᴇxᴛ ʙʏ ᴄʜᴀɴɢɪɴɢ ɪᴛ's ғᴏɴᴛ.`,  
              {
        chat_id: chatId,
        message_id: messageId,
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'BACK', callback_data: 'help' },
                ]
            ],
        },
    }
);
            
              }   else     if (data === 'Gɪᴛʜᴜʙ') {
            bot.editMessageCaption(
              `▸ 𝙰ᴠᴀɪʟᴀʙʟᴇ 𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂 𝙵𝙾𝚁 Gɪᴛʜᴜʙ :

Provides you information about a github profile

 ❍ /github <username> : Get information about a GitHub user.`,  
              {
        chat_id: chatId,
        message_id: messageId,
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'BACK', callback_data: 'help' },
                ]
            ],
        },
    }
);
            
              }  else     if (data === 'Gʀᴏᴜᴘ') {
            bot.editMessageCaption(
              `▸ 𝙰ᴠᴀɪʟᴀʙʟᴇ 𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂 𝙵𝙾𝚁 Gʀᴏᴜᴘ :

 ❍ /setgtitle <newtitle>: Sets new chat title in your group.
 ❍ /setgpic: As a reply to file or photo to set group profile pic!
 ❍ /delgpic: Same as above but to remove group profile pic.
 ❍ /setsticker: As a reply to some sticker to set it as group sticker set!
 ❍ /setdescription <description>: Sets new chat description in group.`,  
              {
        chat_id: chatId,
        message_id: messageId,
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'BACK', callback_data: 'help' },
                ]
            ],
        },
    }
);
            
              } 
  else     if (data === 'Gʀᴏᴜᴘ-ʟᴏᴄᴋs') {
            bot.editMessageCaption(
              `▸ 𝙰ᴠᴀɪʟᴀʙʟᴇ 𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂 𝙵𝙾𝚁 Gʀᴏᴜᴘ-ʟᴏᴄᴋs :

Do stickers annoy you? or want to avoid people sharing links? or pictures? You're in the right place!
The locks module allows you to lock away some common items in the telegram world; the bot will automatically delete them!

 ❍ /locktypes: Lists all possible locktypes
 
Admins only:
 ❍ /lock <type>: Lock items of a certain type (not available in private)
 ❍ /unlock <type>: Unlock items of a certain type (not available in private)
 ❍ /locks: The current list of locks in this chat.
 
Locks can be used to restrict a group's users.
eg:
Locking urls will auto-delete all messages with urls, locking stickers will restrict all non-admin users from sending stickers, etc.
Locking bots will stop non-admins from adding bots to the chat.

Note:
 • Unlocking permission info will allow members (non-admins) to change the group information, such as the description or the group name
 • Unlocking permission pin will allow members (non-admins) to pin a message in a group`,  
              {
        chat_id: chatId,
        message_id: messageId,
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'BACK', callback_data: 'help' },
                ]
            ],
        },
    }
);
            
                      }
  else     if (data === 'get_time') {
            bot.editMessageCaption(
              `▸ 𝙰ᴠᴀɪʟᴀʙʟᴇ 𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂 𝙵𝙾𝚁 Gᴇᴛ-ᴛɪᴍᴇ :

 ❍ /time <query>: Gives information about a timezone.
Available queries: Country Code/Country Name/Timezone Name

 ❍ ⏰ ᴛɪᴍᴇᴢᴏɴᴇs ʟɪsᴛ

💡 Ex:- /time IN : It will shows Indian current time and date..`,  
              {
        chat_id: chatId,
        message_id: messageId,
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'BACK', callback_data: 'help' },
                ]
            ],
        },
    }
);
            
          }
  else     if (data === 'google') {
            bot.editMessageCaption(
              `▸ 𝙰ᴠᴀɪʟᴀʙʟᴇ 𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂 𝙵𝙾𝚁 Gᴏᴏɢʟᴇ :

 ❍ /google <text>: Perform a google search
 ❍ /img <text>: Search Google for images and returns them
For greater no. of results specify lim, For eg: /img hello lim=10
 ❍ /app <appname>: Searches for an app in Play Store and returns its details.
 ❍ /reverse |pp |grs: Does a reverse image search of the media which it was replied to.`,  
              {
        chat_id: chatId,
        message_id: messageId,
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'BACK', callback_data: 'help' },
                ]
            ],
        },
    }
);
            
                      }
  else     if (data === 'horny_games') {
            bot.editMessageCaption(
              `▸ 𝙰ᴠᴀɪʟᴀʙʟᴇ 𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂 𝙵𝙾𝚁 Hᴏʀɴʏ-ɢᴀᴍᴇꜱ :

➱ /horny - ᴄʜᴇᴄᴋ ʏᴏᴜʀ ᴄᴜʀʀᴇɴᴛ ʜᴏʀɴʏᴇꜱꜱ

➱/wish - ɢᴇᴛ ꜱᴏᴍᴇ ᴡɪɪꜱʜᴇꜱ ᴀɴᴅ ꜱᴇᴇ ʜᴏᴡ ᴍᴀɴʏ ᴘᴏꜱꜱɪʙɪʟᴛʏ ᴏꜰ ʏᴏᴜʀ ᴡɪꜱʜ  ᴀʀᴇ ᴛᴜʀᴇ

➱ /gay - ᴄʜᴇᴄᴋ ʏᴏᴜʀ ᴄᴜʀʀᴇɴᴛ ɢᴜʏɴᴇꜱꜱ

➱ /lezbian - ᴄʜᴇᴄᴋ ᴜʀ ᴄᴜʀʀᴇɴᴛ ʟᴀᴢʙɪᴀɴ

➱ /boob - ᴄʜᴇᴄᴋ ʏᴏᴜʀ ᴄᴜʀʀᴇɴᴛ ʙᴏᴏʙꜱ ꜱɪᴢᴇ

➱ /cute - ᴄʜᴇᴄᴋ ʏᴏᴜʀ ᴄᴜʀʀᴇɴᴛ ᴄᴜᴛᴇɴᴇꜱꜱ

➱ /sigma - ᴄʜᴇᴄᴋ ʏᴏᴜʀ ᴄᴜʀʀᴇɴᴛ ꜱɪɢᴍᴀɴᴇꜱ

➱ /batman - ᴄʜᴇᴄᴋ ʜᴏᴡ ᴍᴜᴄʜ ɢᴏᴛʜᴀᴍ ɴᴇᴇᴅꜱ ʏᴏᴜ

➱ /chad - ᴄʜᴇᴄᴋ ʜᴏᴡ ᴍᴜᴄʜ ɢɪɢᴀ ᴄʜᴀᴅ ʏᴏᴜ'ʀᴇ

➱ /chad - ᴄʜᴇᴄᴋ ʜᴏᴡ ᴍᴜᴄʜ ᴘꜱʏᴄʜᴏ ʏᴏᴜ'ʀᴇ`,  
              {
        chat_id: chatId,
        message_id: messageId,
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'BACK', callback_data: 'help' },
                ]
            ],
        },
    }
);
            
                  }
  else     if (data === 'logs_info') {
            bot.editMessageCaption(
              `▸ 𝙰ᴠᴀɪʟᴀʙʟᴇ 𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂 𝙵𝙾𝚁 Lᴏɢs-ɪɴꜰᴏ :

Admins only:
 ❍ /logchannel: get log channel info
 ❍ /setlog: set the log channel.
 ❍ /unsetlog: unset the log channel.

Setting the log channel is done by:
❍ adding the bot to the desired channel (as an admin!)
❍ sending /setlog in the channel
❍ forwarding the /setlog to the group`,  
              {
        chat_id: chatId,
        message_id: messageId,
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'BACK', callback_data: 'help' },
                ]
            ],
        },
    }
);
            
}
  else     if (data === 'memify') {
            bot.editMessageCaption(
              `▸ 𝙰ᴠᴀɪʟᴀʙʟᴇ 𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂 𝙵𝙾𝚁 Mᴇᴍɪꜰʏ :
 
⫸ /mmf <ᴛᴇxᴛ> ◉ ᴛᴏ ᴍᴇᴍɪғʏ`,  
              {
        chat_id: chatId,
        message_id: messageId,
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'BACK', callback_data: 'help' },
                ]
            ],
        },
    }
);
            
              }
  else     if (data === 'mute') {
            bot.editMessageCaption(
              `▸ 𝙰ᴠᴀɪʟᴀʙʟᴇ 𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂 𝙵𝙾𝚁 Mᴜᴛᴇ :

ᴀᴅᴍɪɴs ᴏɴʟʏ:

 ❍ /mute <userhandle>: silences a user. Can also be used as a reply, muting the replied to user.
 ❍ /tmute <userhandle> x(m/h/d): mutes a user for x time. (via handle, or reply). m = minutes, h = hours, d = days.
 ❍ /unmute <userhandle>: unmutes a user. Can also be used as a reply, muting the replied to user.`,  
              {
        chat_id: chatId,
        message_id: messageId,
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'BACK', callback_data: 'help' },
                ]
            ],
        },
    }
);
            
  }else     if (data === 'night_mode') {
            bot.editMessageCaption(
              `▸ 𝙰ᴠᴀɪʟᴀʙʟᴇ 𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂 𝙵𝙾𝚁 Nɪɢʜᴛ-ᴍᴏᴅᴇ :

Admins Only

❍ /nightmode: Adds Group to NightMode Chats
 ❍ /rmnight: Removes Group From NightMode Chats

Note: Night Mode chats get Automatically closed at 12 am(IST) and Automatically openned at 6 am(IST) to Prevent Night Spams.`,  
              {
        chat_id: chatId,
        message_id: messageId,
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'BACK', callback_data: 'help' },
                ]
            ],
        },
    }
);
            
              }else     if (data === 'notes') {
            bot.editMessageCaption(
              `▸ 𝙰ᴠᴀɪʟᴀʙʟᴇ 𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂 𝙵𝙾𝚁 Nᴏᴛᴇs :


 ❍ /get <notename>: get the note with this notename
 ❍ #<notename>: same as /get
 ❍ /notes or /saved: list all saved notes in this chat
 ❍ /number : Will pull the note of that number in the list. 
If you would like to retrieve the contents of a note without any formatting, use /get <notename> noformat. This can be useful when updating a current note.

Admins only:
 ❍ /save <notename> <notedata>: saves notedata as a note with name notename
A button can be added to a note by using standard markdown link syntax - the link should just be prepended with a buttonurl: section, as such: [somelink](buttonurl:example.com). Check /markdownhelp for more info.
 ❍ /save <notename>: save the replied message as a note with name notename
 ❍ /clear <notename>: clear note with this name
 ❍ /removeallnotes: removes all notes from the group
 Note: Note names are case-insensitive, and they are automatically converted to lowercase before getting saved.`,  
              {
        chat_id: chatId,
        message_id: messageId,
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'BACK', callback_data: 'help' },
                ]
            ],
        },
    }
);
            
          }else     if (data === 'logo') {
            bot.editMessageCaption(
              `▸ 𝙰ᴠᴀɪʟᴀʙʟᴇ 𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂 𝙵𝙾𝚁 𝙻ᴏɢᴏ :
 Lᴏɢᴏ
ᴜsᴀɢᴇ:
➛ /logo <word1> <word2> | Tᴏ ɢᴇɴᴇʀᴀᴛᴇ ʟᴏɢᴏ ᴀs ɪᴍᴀɢᴇ
➛ /st <word1> <word2> | Tᴏ ɢᴇɴᴇʀᴀᴛᴇ ʟᴏɢᴏ ᴀs sᴛɪᴄᴋᴇʀ`,  
              {
        chat_id: chatId,
        message_id: messageId,
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'BACK', callback_data: 'help' },
                ]
            ],
        },
    }
);
            
              }
  else     if (data === 'paste') {
            bot.editMessageCaption(
              `▸ 𝙰ᴠᴀɪʟᴀʙʟᴇ 𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂 𝙵𝙾𝚁 Pᴀsᴛᴇ :

Pastes the given file and shows you the result

 ❍ /paste : Reply to a text file`,  
              {
        chat_id: chatId,
        message_id: messageId,
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'BACK', callback_data: 'help' },
                ]
            ],
        },
    }
);
            
              }
  else     if (data === 'purge') {
            bot.editMessageCaption(
              `▸ 𝙰ᴠᴀɪʟᴀʙʟᴇ 𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂 𝙵𝙾𝚁 Pᴜʀɢᴇ :

 ❍ /del: deletes the message you replied to
 ❍ /purge: deletes all messages between this and the replied to message.`,  
              {
        chat_id: chatId,
        message_id: messageId,
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'BACK', callback_data: 'help' },
                ]
            ],
        },
    }
);
            
                }else     if (data === 'reports') {
            bot.editMessageCaption(
              `▸ 𝙰ᴠᴀɪʟᴀʙʟᴇ 𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂 𝙵𝙾𝚁 Rᴇᴘᴏʀᴛs :

 ❍ /report <reason>: reply to a message to report it to admins.
 ❍ @admin: reply to a message to report it to admins.
 
Note : Neither of these will get triggered if used by admins.

Admins only:
 ❍ /reports <on/off>: change report setting, or view current status.
   • If done in pm, toggles your status.
   • If in group, toggles that groups's status.`,  
              {
        chat_id: chatId,
        message_id: messageId,
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'BACK', callback_data: 'help' },
                ]
            ],
        },
    }
);
            
          }else     if (data === 'speedtest') {
            bot.editMessageCaption(
              `▸ 𝙰ᴠᴀɪʟᴀʙʟᴇ 𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂 𝙵𝙾𝚁 SᴘᴇᴇᴅTᴇsᴛ :

» /speedtest : Runs a speedtest and check the server speed.`,  
              {
        chat_id: chatId,
        message_id: messageId,
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'BACK', callback_data: 'help' },
                ]
            ],
        },
    }
);
            
              }
  else     if (data === 'stickers') {
            bot.editMessageCaption(
              `▸ 𝙰ᴠᴀɪʟᴀʙʟᴇ 𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂 𝙵𝙾𝚁 Sᴛɪᴄᴋᴇʀꜱ :

•  /stickerid: reply to a sticker to me to tell you its file ID.
•  /getsticker: reply to a sticker to me to upload its raw PNG file.
•  /getvidsticker : reply to a video sticker to me to upload it's mp4 file.
•  /kang: reply to a sticker/video sticker/animated sticker to add it to your pack.
•  /delsticker: Reply to your anime exist sticker to your pack to delete it.
•  /stickers: Find stickers for given term on combot sticker catalogue 
•  /getvideo: reply to a gif to get video easily !
Please Use 512/512 size Sticker to kang else it will cause internal problem.
And sometimes video sticker might not kang because of more Size than 512/512.`,  
              {
        chat_id: chatId,
        message_id: messageId,
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'BACK', callback_data: 'help' },
                ]
            ],
        },
    }
);
            
              }else     if (data === 'graph') {
            bot.editMessageCaption(
              `▸ 𝙰ᴠᴀɪʟᴀʙʟᴇ 𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂 𝙵𝙾𝚁 Tɢʀᴀᴘʜ :

 ❍ /tgm :Get Telegraph Link Of Replied Media
 ❍ /tgt :Get Telegraph Link of Replied Text
 ❍ /tgt custom name: Get telegraph link of replied text with custom name.`,  
              {
        chat_id: chatId,
        message_id: messageId,
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'BACK', callback_data: 'help' },
                ]
            ],
        },
    }
);
            
                      }else     if (data === 'tiny') {
            bot.editMessageCaption(
              `▸ 𝙰ᴠᴀɪʟᴀʙʟᴇ 𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂 𝙵𝙾𝚁 Tɪɴʏ :

❍ /tiny: reply a sticker and see magic`,  
              {
        chat_id: chatId,
        message_id: messageId,
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'BACK', callback_data: 'help' },
                ]
            ],
        },
    }
);
            
                }else     if (data === 'translator') {
            bot.editMessageCaption(
              `▸ 𝙰ᴠᴀɪʟᴀʙʟᴇ 𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂 𝙵𝙾𝚁 Tʀᴀɴsʟᴀᴛᴏʀ :

 ❍ /tr or /tl (language code) as reply to a long message
Example: 
 ❍ /tr en: translates something to english
 ❍ /tr hi-en: translates hindi to english

ʟᴀɴɢᴜᴀɢᴇ ᴄᴏᴅᴇs`,  
              {
        chat_id: chatId,
        message_id: messageId,
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'BACK', callback_data: 'help' },
                ]
            ],
        },
    }
);
            
              }else     if (data === 'truthdare') {
            bot.editMessageCaption(
              `▸ 𝙰ᴠᴀɪʟᴀʙʟᴇ 𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂 𝙵𝙾𝚁 Tʀᴜᴛʜ-Dᴀʀᴇ :

Truth & Dare

 ❍ /truth : Sends a random truth string.
 ❍ /dare : Sends a random dare string.`,  
              {
        chat_id: chatId,
        message_id: messageId,
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'BACK', callback_data: 'help' },
                ]
            ],
        },
    }
);
            
          }
  else     if (data === 'tagger') {
            bot.editMessageCaption(
              `▸ 𝙰ᴠᴀɪʟᴀʙʟᴇ 𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂 𝙵𝙾𝚁 Tᴀɢɢᴇʀ :

Only for admins

❍ /tagall or @all '(reply to message or add another message) To mention all members in your group, without exception.'`,  
              {
        chat_id: chatId,
        message_id: messageId,
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'BACK', callback_data: 'help' },
                ]
            ],
        },
    }
);
            
              }
  else     if (data === 'tools') {
            bot.editMessageCaption(
              `▸ 𝙰ᴠᴀɪʟᴀʙʟᴇ 𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂 𝙵𝙾𝚁 Tᴏᴏʟs :


ᴄᴏɴᴠᴇʀᴛs
 ❍ /encrypt: ᴇɴᴄʀʏᴘᴛs ᴛʜᴇ ɢɪᴠᴇɴ ᴛᴇxᴛ
 ❍ /decrypt: ᴅᴇᴄʀʏᴘᴛs ᴘʀᴇᴠɪᴏᴜsʟʏ ᴇᴄʀʏᴘᴛᴇᴅ ᴛᴇxᴛ`,  
              {
        chat_id: chatId,
        message_id: messageId,
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'BACK', callback_data: 'help' },
                ]
            ],
        },
    }
);
            
                }else     if (data === 'ttsstt') {
            bot.editMessageCaption(
              `▸ 𝙰ᴠᴀɪʟᴀʙʟᴇ 𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂 𝙵𝙾𝚁 Tᴛꜱ-ꜱᴛᴛ :

 ‣ /tts: Convert Text in Bot Audio 
 Usage: reply to text or write message with command. Example /tts hello
 ‣ /slpcheck: Check the right spelling of text`,  
              {
        chat_id: chatId,
        message_id: messageId,
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'BACK', callback_data: 'help' },
                ]
            ],
        },
    }
);
            
}else     if (data === 'udictionary') {
            bot.editMessageCaption(
              `▸ 𝙰ᴠᴀɪʟᴀʙʟᴇ 𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂 𝙵𝙾𝚁 U-ᴅɪᴄᴛɪᴏɴᴀʀʏ :

» /ud (text) : Searchs the given text on Urban Dictionary and sends you the information.`,  
              {
        chat_id: chatId,
        message_id: messageId,
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'BACK', callback_data: 'help' },
                ]
            ],
        },
    }
);
            
              }else     if (data === 'usersinfo') {
            bot.editMessageCaption(
              `▸ 𝙰ᴠᴀɪʟᴀʙʟᴇ 𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂 𝙵𝙾𝚁 Uꜱᴇʀꜱ-ɪɴꜰᴏ :

ID:
 ❍ /id: get the current group id. If used by replying to a message, gets that user's id.
 ❍ /gifid: reply to a gif to me to tell you its file ID.

Self added information: 
 ❍ /setme <text>: will set your info
 ❍ /me: will get your or another user's info.
Examples: 💡
 ➩ /setme I am a wolf.
 ➩ /me @username(defaults to yours if no user specified)

Information others add on you: 
 ❍ /bio: will get your or another user's bio. This cannot be set by yourself.
 ❍ /setbio <text>: while replying, will save another user's bio 
Examples: 💡
 ➩ /bio @username(defaults to yours if not specified).
 ➩ /setbio This user is a wolf (reply to the user)

Overall Information about you:
 ❍ /info: get information about a user. 
 ❍ /myinfo: Shows info about the user who sent this command.`,  
              {
        chat_id: chatId,
        message_id: messageId,
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'BACK', callback_data: 'help' },
                ]
            ],
        },
    }
);
            
                  }else     if (data === 'wikipedia') {
            bot.editMessageCaption(
              `▸ 𝙰ᴠᴀɪʟᴀʙʟᴇ 𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂 𝙵𝙾𝚁 Wɪᴋɪᴘᴇᴅɪᴀ :

» /wiki (text) : Searchs about the given text on wikipedia.`,  
              {
        chat_id: chatId,
        message_id: messageId,
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'BACK', callback_data: 'help' },
                ]
            ],
        },
    }
);
            
                 }else     if (data === 'writetool') {
            bot.editMessageCaption(
              `▸ 𝙰ᴠᴀɪʟᴀʙʟᴇ 𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂 𝙵𝙾𝚁 Wʀɪᴛᴇ-ᴛᴏᴏʟ :

 Writes the given text on white page with a pen 🖊

❍ /write <text> :Writes the given text.`,  
              {
        chat_id: chatId,
        message_id: messageId,
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'BACK', callback_data: 'help' },
                ]
            ],
        },
    }
);
            
                }else     if (data === 'warns') {
            bot.editMessageCaption(
              `▸ 𝙰ᴠᴀɪʟᴀʙʟᴇ 𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂 𝙵𝙾𝚁 Wᴀʀɴs :

 ❍ /warns <userhandle>: get a user's number, and reason, of warns.
 ❍ /warnlist: list of all current warning filters

Admins only:
 ❍ /warn <userhandle>: warn a user. After 3 warns, the user will be banned from the group. Can also be used as a reply.
 ❍ /dwarn <userhandle>: warn a user and delete the message. After 3 warns, the user will be banned from the group. Can also be used as a reply.
 ❍ /resetwarn <userhandle>: reset the warns for a user. Can also be used as a reply.
 ❍ /addwarn <keyword> <reply message>: set a warning filter on a certain keyword. If you want your keyword to be a sentence, encompass it with quotes, as such: /addwarn "very angry" This is an angry user.
 ❍ /nowarn <keyword>: stop a warning filter
 ❍ /warnlimit <num>: set the warning limit
 ❍ /strongwarn <on/yes/off/no>: If set to on, exceeding the warn limit will result in a ban. Else, will just punch.`,  
              {
        chat_id: chatId,
        message_id: messageId,
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'BACK', callback_data: 'help' },
                ]
            ],
        },
    }
);
            
                }else     if (data === 'webshots') {
            bot.editMessageCaption(
              `▸ 𝙰ᴠᴀɪʟᴀʙʟᴇ 𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂 𝙵𝙾𝚁 Wᴇʙsʜᴏᴛꜱ :

» /webss : Sends the screenshot of the given url.`,  
              {
        chat_id: chatId,
        message_id: messageId,
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'BACK', callback_data: 'help' },
                ]
            ],
        },
    }
);
            
              }else     if (data === 'weather') {
            bot.editMessageCaption(
              `▸ 𝙰ᴠᴀɪʟᴀʙʟᴇ 𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂 𝙵𝙾𝚁 Wᴇᴀᴛʜᴇʀ :

I can find weather of all cities

❍ /weather <city>: Advanced weather module, usage same as /weather
 ❍ /weather moon: Get the current status of moon`,  
              {
        chat_id: chatId,
        message_id: messageId,
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'BACK', callback_data: 'help' },
                ]
            ],
        },
    }
);
            
                }else     if (data === 'zipping') {
            bot.editMessageCaption(
              `▸ 𝙰ᴠᴀɪʟᴀʙʟᴇ 𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂 𝙵𝙾𝚁 Zɪᴘᴘɪɴɢ :

Hey I can convert files here.

 ❍ /zip: reply to a telegram file to compress it in .zip format
 ❍ /unzip: reply to a telegram file to decompress it from the .zip format`,  
              {
        chat_id: chatId,
        message_id: messageId,
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'BACK', callback_data: 'help' },
                ]
            ],
        },
    }
);
            
    }else     if (data === 'zombie') {
            bot.editMessageCaption(
              `▸ 𝙰ᴠᴀɪʟᴀʙʟᴇ 𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂 𝙵𝙾𝚁 Zᴏᴍʙɪᴇ :

Remove Deleted Accounts

 ❍ /zombies : Starts searching for deleted accounts in the group.
 ❍ /zombies clean : Removes the deleted accounts from the group.`,  
              {
        chat_id: chatId,
        message_id: messageId,
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'BACK', callback_data: 'help' },
                ]
            ],
        },
    }
);
            
                      }
});
bot.onText(/\/promote/, async (msg) => {
  const chatId = msg.chat.id;
  const promoterId = msg.from.id;

  // Check if the bot is an admin in the group
  const botMember = await bot.getChatMember(chatId, bot.options.username);
  if (!botMember.can_promote_members) {
    bot.sendMessage(chatId, 'I can\'t promote/demote people here! Make sure I\'m admin and can appoint new admins.');
    return;
  }

  // Check if the user replied to a message
  if (!msg.reply_to_message) {
    bot.sendMessage(chatId, '» I don\'t know who\'s that user, never seen him in any of the chats where I am present!');
    return;
  }

  // Check if the user is already an admin
  const chatMember = await bot.getChatMember(chatId, msg.reply_to_message.from.id);
  if (chatMember.status === 'administrator' || chatMember.status === 'creator') {
    bot.sendMessage(chatId, '» According to me, that user is already an admin here!');
    return;
  }

  // Promote the user
  await bot.promoteChatMember(chatId, msg.reply_to_message.from.id, {
    can_change_info: true,
    can_post_messages: true,
    can_edit_messages: true,
    can_delete_messages: true,
    can_invite_users: true,
    can_restrict_members: false,
    can_pin_messages: true,
    can_promote_members: false,
    can_manage_voice_chats: true, // Adjust as needed
  });

  // Get the promoted and promoter user names
  const promotedName = msg.reply_to_message.from.first_name + (msg.reply_to_message.from.last_name ? ' ' + msg.reply_to_message.from.last_name : '');
  const promoterName = msg.from.first_name + (msg.from.last_name ? ' ' + msg.from.last_name : '');

  // Send the promotion message
  bot.sendMessage(chatId, `» Promoting a user in ${msg.chat.title}\n\nPromoted: [${promotedName}](tg://user?id=${msg.reply_to_message.from.id})\nPromoter: [${promoterName}](tg://user?id=${promoterId})`, { parse_mode: 'Markdown' });
});
