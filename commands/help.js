const discord = require('discord.js');
const {prefix} = require('../settiings/config.json');

module.exports.run = async (bot, message, args) => {

    let embed = new discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(bot.user.avatarURL)
        .setTitle(`Prefix - 'zm!'. All Commands:`)
        .addField(`${prefix}play <music/url>`, 'Plays musics!')
        .addField(`${prefix}search <music>`, 'Search for top 10 results of musics on youtube')
        .addField(`${prefix}skip`, 'Skip the music to the next in the queue (3 votes needed if you have no permissions)')
        .addField(`${prefix}volume [volume]`, 'Shows the current volume of if entered arguments, changes volume')
        .addField(`${prefix}pause`, 'Pauses the music playback')
        .addField(`${prefix}resume`,'Resumes the music playback')
        .addField(`${prefix}stop`, 'Stops the music playback, and bot leaves the voice channel')
        .addField(`${prefix}reload <command>`, 'Reloads a specified command')
        .addField(`Invite Link`, 'https://discordapp.com/api/oauth2/authorize?client_id=580982504593293341&permissions=8&scope=bot')
        .addField(`Support Server`, 'https://discord.gg/8jdDWzk');

    message.channel.send(embed);

};

module.exports.help = {
    name: 'help',
    aliases: []
};