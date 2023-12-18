// modules/promote.js

// Your promote command logic goes here
async function promoteCommand(ctx) {
  const chatId = ctx.message.chat.id;
  const promoterId = ctx.message.from.id;

  // Check if the bot is an admin in the group
  const botMember = await ctx.telegram.getChatMember(chatId, ctx.botInfo.id);
  if (!botMember.can_promote_members) {
    ctx.reply("I can't promote/demote people here! Make sure I'm an admin and can appoint new admins.");
    return;
  }

  // Check if the user replied to a message
  if (!ctx.message.reply_to_message) {
    ctx.reply("I don't know who's that user, never seen him in any of the chats where I am present!");
    return;
  }

  // Check if the user is already an admin
  const chatMember = await ctx.telegram.getChatMember(chatId, ctx.message.reply_to_message.from.id);
  if (chatMember.status === 'administrator' || chatMember.status === 'creator') {
    ctx.reply('According to me, that user is already an admin here!');
    return;
  }

  // Promote the user
  await ctx.telegram.promoteChatMember(chatId, ctx.message.reply_to_message.from.id, {
    can_change_info: true,
    can_post_messages: true,
    can_edit_messages: true,
    can_delete_messages: true,
    can_invite_users: true,
    can_restrict_members: false,
    can_pin_messages: true,
    can_promote_members: false,
    can_manage_voice_chats: true,  // Adjust as needed
  });

  // Get the promoted and promoter user names
  const promotedName = ctx.message.reply_to_message.from.first_name + (ctx.message.reply_to_message.from.last_name ? ' ' + ctx.message.reply_to_message.from.last_name : '');
  const promoterName = ctx.message.from.first_name + (ctx.message.from.last_name ? ' ' + ctx.message.from.last_name : '');

  // Send the promotion message
  ctx.replyWithMarkdown(`Promoting a user in ${ctx.message.chat.title}\n\nPromoted: [${promotedName}](tg://user?id=${ctx.message.reply_to_message.from.id})\nPromoter: [${promoterName}](tg://user?id=${promoterId})`);
}

module.exports = {
  promoteCommand,
};
