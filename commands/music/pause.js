const { Command } = require('discord.js-commando');

module.exports = class PauseCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'durdur',
      aliases: ['pause-song', 'hold', 'stop'],
      memberName: 'pause',
      group: 'music',
      description: 'Çalan Şarkıyı Dururur',
      guildOnly: true
    });
  }

  run(message) {
    var voiceChannel = message.member.voice.channel;
    if (!voiceChannel) return message.reply('Bir Ses Kanalına Bağlan');

    if (
      typeof message.guild.musicData.songDispatcher == 'undefined' ||
      message.guild.musicData.songDispatcher == null
    ) {
      return message.say('Şu anda birşey çalmıyor');
    }

    message.say('Şarkı Durduruldu :pause_button:');

    message.guild.musicData.songDispatcher.pause();
  }
};
