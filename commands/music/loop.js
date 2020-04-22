const { Command } = require('discord.js-commando');

module.exports = class LoopCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'tekrarla',
      group: 'music',
      memberName: 'loop',
      guildOnly: true,
      description: 'Çalmakta olan şarkıyı tekrarlar'
    });
  }

  run(message) {
    if (!message.guild.musicData.isPlaying) {
      return message.say('Şu an zaten bişi çalmıyo amk');
    } else if (
      message.guild.musicData.isPlaying &&
      message.guild.triviaData.isTriviaRunning
    ) {
      return message.say('olmz xd');
    }

    message.channel.send(
      `${message.guild.musicData.nowPlaying.title} Sıraya Eklendi`
    );
    message.guild.musicData.queue.unshift(message.guild.musicData.nowPlaying);
    return;
  }
};
