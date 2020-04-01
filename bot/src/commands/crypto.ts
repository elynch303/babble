//reference to build this api is located via GitHub
//https://github.com/binance-exchange/binance-official-api-docs/blob/master/rest-api.md#general-api-information

//Need following commands to call public api:
//!tfuel
//!theta
//!brave
//!bitcoin
//!eth

//sample api access *https://api.binance.com/api/v3/ticker/price?symbol=TFUELUSDT we have to make all commands minus the !bitcoin pair with TFUELUSDT
//sample respsonse *{"symbol":"TFUELUSDT","price":"0.00166400"}

//update ./config.json file to include this api which is public 

"use strict";

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
  case msg[0] == "tfuel":
      ThetaApi.sendMsg(":tfuel: is currently worth:" + msg, usr, channel);
      break;
  case msg[0] == "theta":
      ThetaApi.sendMsg("Theta is currently worth:" + msg, usr, channel);
      break;
  case msg[0] == "bat":
      ThetaApi.sendMsg("BAT [Basic Attention Token | Brave] is currently worth:" + msg, usr, channel);
      break;
  case msg[0] == "bitcoin":
      ThetaApi.sendMsg("Bitcoin is currently worth:" + msg, usr, channel);
      break;
  case msg[0] == "ethereum":
      ThetaApi.sendMsg("Ethereum is currently worth:" + msg, usr, channel);
      break;

    }
}
