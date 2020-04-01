"use strict";

import ThetaApi from './theta.api';

export default class Games {
    /**
     * Number Game Init
     */
    static startNumberGame(msg, channel) {
        let channelConfig = BabbleLib.channels[channel];
        let ngChannelConfig = BabbleLib.activeNumberGames[channel];
        let maxInt = Math.floor(Math.random() * 100) + 1; //Default of 100
        if (msg[1] == "kill") {
            channelConfig.numberGame = false;
            ngChannelConfig = {number: 0, players: {}};
            ThetaApi.sendMsg("The Number Game has been cancelled :burnttoast:", channel);
        } else {
            if (msg[1]) {
                maxInt = msg[1];
            }
            if (maxInt < 25) {
                maxInt = 25;
            }
            if (!channelConfig.numberGame) {
                channelConfig.numberGame = true;
                ngChannelConfig.number = Math.floor(Math.random() * maxInt) + 1;
                ThetaApi.sendMsg("Number Game Started :toastgrin: pick a number between 1 and " + maxInt, channel);
            }
        }

    }

    /**
     * Number Game Manager
     *
     */
    static numGameManager(msg, usr, channel) {
        let guess = parseInt(msg);
        let channelConfig = BabbleLib.channels[channel];
        let ngChannelConfig = BabbleLib.activeNumberGames[channel];
        let ngPlayer = ngChannelConfig[usr.id];

        if(!ngPlayer.lastGuess){
            ngPlayer.lastGuess = guess;
        }

        if(guess == ngPlayer.lastGuess + 1 || guess == ngPlayer.lastGuess - 1){
            ThetaApi.sendMsg("@" + usr.username + " Sorry but you guess's can not be consecutive ie. 1 2 3 or 3 2 1", channel);
        }else{
            ngPlayer.lastGuess = guess;
        }

        if (guess == ngChannelConfig.number) {
            ThetaApi.sendMsg("Congrats!! @" + usr.username + " Your the winner :flex:", channel);
            ngChannelConfig.number = 0;
            channelConfig.numberGame = false;
            //TODO: auto send gift able item ?
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
