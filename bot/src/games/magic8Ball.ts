"use strict";

import ThetaApi from './theta.api';

export default class Games {

static play8Ball(msg, usr, channel) {
  let channelConfig = BabbleLib.channels[channel];
    let m8ChannelConfig = BabbleLib.play8Ball[channel];
    if (!m8ChannelConfig.play8Ball) {
        //console.log(ngChannelConfig);
        m8ChannelConfig.play8Ball = true;
      let responses = [
          'It is certain',
          'It is decidedly so',
          'Without a doubt',
          'Yes definitely',
          'You may rely on it',
          'As I see it, yes',
          'Most likely',
          'Outlook good',
          'Yes',
          'Signs point to yes',
          'You best believe it',
          'Hell to the Yeah',
          'Definitely worth GGs in chat',
          'Depends, did you follow this streamer',
          'Reply hazy try again',
          'Ask again later',
          'Better not tell you now',
          'Cannot predict now',
          'Concentrate and ask again',
          'Do not count on it',
          'My reply is no',
          'My sources say no',
          'Outlook not so good',
          'Very doubtful',
          'Seriously, you dont want to know',
          'Dafuq, EPIC RIP',
      ];
      let choice = responses[Math.floor(Math.random() * responses.length)];
      ThetaApi.sendMsg("@" + usr.username + " " + choice);
      ThetaApi.sendMsg(msg, channel);
    }
}
