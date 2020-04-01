"use strict";

import ThetaApi from './theta.api';
import BinanceApi from './binanceApi';


case msgType == "chat_message":
    if (user.id == channel) {
        if (msgText.startsWith(config.prefix)) {
            runCmd(msgText, channel);
            //runCmd(msgText, user, channel);
        }
    } else {
        checkViewHooks(msgText, user, channel);
    }
    break;
}
}

function runCmd(msg, channel) {
// let channelConfig = config.channels[channel];
// if (isNormalInteger(msg) && channelConfig.numberGame) {
//     numGameManager(msg, usr, channel);
// }
msg = msg.toLowerCase().substr(1).split(" ");
switch (true) {
case msg[0] == "hello" || msg[0] == "hi":
    ThetaApi.sendMsg("hello", channel);
    break;
case msg[0] == "num" || msg[0] == "number" || msg[0] == "ng":
    startNumberGame(msg, channel);
    break;
case msg[0] == "support":
    ThetaApi.sendMsg("Babble Support Discord: https://www.discord.gg/73gusq7", channel);
    break;
case msg[0] == "magic8" || msg[0] == "m8":
    play8Ball(msg, usr, channel);
    break;

    checkViewHooks(msg, usr, channel) {
        msg = msg.toLowerCase().substr(1).split(" ");
        let channelConfig = BabbleLib.channels[channel];
        msg.toLowerCase();
        switch (true) {
            case this.isNormalInteger(msg) && channelConfig.numberGame:
                games.numGameManager(msg, usr, channel);
                break;

            case this.isNormalInteger(msg) && channelConfig.play8Ball:
                games.play8Ball(msg, usr, channel);
                break;
          }
    }
