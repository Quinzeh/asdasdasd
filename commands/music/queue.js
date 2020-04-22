const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');

module.exports = class QueueCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'kuyruk',
      aliases: ['song-list', 'next-songs'],
      group: 'music',
      memberName: 'queue',
      guildOnly: true,
      description: 'Müzik kuyruğunu gösterir'
    });
  }

  run(message) {
    if (message.guild.triviaData.isTriviaRunning)
      return message.say('Try again after the trivia has ended');
    if (message.guild.musicData.queue.length == 0)
      return message.say('Sırada şarkı yok');
    const titleArray = [];
    /* eslint-disable */
    message.guild.musicData.queue.map(obj => {
      titleArray.push(obj.title);
    });
    /* eslint-enable */
    var queueEmbed = new MessageEmbed()
      .setColor('#ff7373')
      .setTitle('Müzik Sırası');
    for (let i = 0; i < titleArray.length; i++) {
      queueEmbed.addField(`${i + 1}:`, `${titleArray[i]}`);
    }
    return message.say(queueEmbed);
  }
};
