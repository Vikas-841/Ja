// modules/broadcast.js

const { MongoClient } = require('mongodb');

// Your broadcast command logic goes here
async function broadcastCommand(bot, message) {
  const chatId = message.chat.id;
  const userId = message.from.id;

  // Check if the user is the bot owner
  const isOwner = await isBotOwner(userId);

  if (isOwner) {
    // Broadcast to all chat members
    const chatMembers = await bot.getChatMembersCount(chatId);
    const messageText = message.text.split('/broadcast ')[1]; // Extract the broadcast message

    bot.sendMessage(chatId, `Broadcasting to ${chatMembers} members:\n\n${messageText}`);
  } else {
    bot.sendMessage(chatId, "Sorry, you don't have permission to use this command.");
  }
}

async function isBotOwner(userId) {
  // Replace 'YOUR_MONGODB_CONNECTION_STRING' and 'YOUR_DATABASE_NAME' with your MongoDB connection details
  const mongoClient = new MongoClient('mongodb+srv://Mrdaxx123:Mrdaxx123@cluster0.q1da65h.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await mongoClient.connect();
    const database = mongoClient.db('cluster0');
    const ownersCollection = database.collection('owners');

    // Replace 'YOUR_BOT_OWNER_ID' with your actual bot owner's user ID
    const botOwner = await ownersCollection.findOne({ userId: '5932230962' });

    return botOwner && botOwner.userId === userId;
  } finally {
    await mongoClient.close();
  }
}

module.exports = {
  broadcastCommand,
};
