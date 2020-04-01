"use strict";

import ThetaApi from './theta.api';


messageHandler(msg, channel) {
        let msgText = msg.data.text;
        let msgType = msg.type;
        let user = msg.data.user;
        let channelConfig = BabbleLib.channels[channel];

        switch (true) {
            case msgType == "hello_message":
                ThetaApi.sendMsg("Hello @" + user.username + " thanks for coming by, if you like this channel please follow!", channel);
                break;
            case msgType == "donation":
                ThetaApi.sendMsg("Thank you for the " + msg.data.tfuel + " :tfuel: !! @" + msg.data.sender.username, channel);
                break;
            case msgType == "follow":
                ThetaApi.sendMsg("Thanks for the Follow !! Welcome @" + user.username, channel);
                break;
            case msgType == "gift_item":
                ThetaApi.sendMsg("Enjoy your Gift!! @" + msg.data.recipient.username, channel);
                break;
            case msgType == "subscribe":
                ThetaApi.sendMsg("Thanks for the Sub and Support! @" + user.username, channel);
                break;
            case msgType == "gift_subscribe":
                ThetaApi.sendMsg("Thank you @" + msg.data.sender.username + "for gifting @" + msg.data.recipient.username + msg.data.subscribe, channel);
                break;
            case msgType == "chann_xp":
                ThetaApi.sendMsg("Lets GO @" + user.username + "you just reached level" + msg.data.channel_xp + "GG's in chat everyone", channel);
                break;
            case msgType == "raid":
                ThetaApi.sendMsg("RAID HYPE!! :nominal: :nominal: @" + user.username + "went crazy :crazy: and raided with" + msg.data.viewers + "Spam Raid in chat everyone", channel);
                break;
            case msgType == "chat_message_" + channel:
                if (msgText.startsWith(channelConfig.prefix)) {
                    this.runCmd(msgText, channel);
                }
                break;
            case msgType == "chat_message":
                if (user.id == channel) {
                    if (msgText.startsWith(channelConfig.prefix)) {
                        this.runCmd(msgText, channel);
                    }
                } else {
                    this.checkViewHooks(msgText, user, channel);
                }
                break;
        }
    }

    checkViewHooks(msg, usr, channel) {
        msg = msg.toLowerCase().substr(1).split(" ");
        let channelConfig = BabbleLib.channels[channel];
        msg.toLowerCase();
        switch (true) {
            case this.isNormalInteger(msg) && channelConfig.numberGame:
                Games.numGameManager(msg, usr, channel);
                break;
                  }
    }

    isNormalInteger(str) {
        str = str.trim();
        if (!str) {
            return false;
        }
        str = str.replace(/^0+/, "") || "0";
        var n = Math.floor(Number(str));
        return n !== Infinity && String(n) === str && n >= 0;
    }

}

export default new Babble();
