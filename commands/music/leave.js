const { Command } = require('discord.js-commando');

module.exports = class LeaveCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'ayrıl',
      aliases: ['end'],
      group: 'music',
      memberName: 'leave',
      guildOnly: true,
      description: 'Bulunduğu Kanaldan Ayrılırım'
    });
  }

  run(message) {
    var voiceChannel = message.member.voice.channel;
    if (!voiceChannel) return message.reply('Bir Ses Kanalına Bağlan');

    if (
      typeof message.guild.musicData.songDispatcher == 'undefined' ||
      message.guild.musicData.songDispatcher == null
    ) {
      return message.reply('Şu an zaten bişi çalmıyo amk');
    }
    if (!message.guild.musicData.queue)
      return message.say('Sırada çalacak bi şarkı yok zaten amk');
    message.guild.musicData.songDispatcher.end();
    message.guild.musicData.queue.length = 0;
    return;
  }
};
