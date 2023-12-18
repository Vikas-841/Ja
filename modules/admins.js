// modules/admins.js

// Your /admins command logic goes here
async function adminsCommand(bot, message) {
  const chatId = message.chat.id;

  // Fetch the administrators and creator of the chat
  const admins = await bot.getChatAdministrators(chatId);
  const creator = admins.find(admin => admin.status === 'creator');

  // Generate the formatted list
  let replyMessage = 'Emperors Of LOG CHANNEL:\n';

  // Creator
  if (creator) {
    replyMessage += `👑 ᴄʀᴇᴀᴛᴏʀ:\n • ${creator.user.first_name} •${creator.custom_title ? ` ${creator.custom_title}` : ''}\n\n`;
  }

  // Admins
  const otherAdmins = admins.filter(admin => admin.status === 'administrator' && admin.user.id !== creator.user.id);
  if (otherAdmins.length > 0) {
    replyMessage += '👤 ᴀᴅᴍɪɴꜱ:\n';
    otherAdmins.forEach(admin => {
      replyMessage += ` • ${admin.user.first_name}${admin.custom_title ? ` ${admin.custom_title}` : ''}\n`;
    });
    replyMessage += '\n';
  }

  // Bots
  const bots = admins.filter(admin => admin.user.is_bot);
  if (bots.length > 0) {
    replyMessage += '🤖 ʙᴏᴛꜱ:\n';
    bots.forEach(bot => {
      replyMessage += ` • ${bot.user.first_name}${bot.custom_title ? ` ${bot.custom_title}` : ''}\n`;
    });
  }

  // Send the formatted list
  bot.sendMessage(chatId, replyMessage, { parse_mode: 'Markdown' });
}

module.exports = {
  adminsCommand,
};
