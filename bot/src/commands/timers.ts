"use strict";
import ThetaApi from './theta.api';
import DfltCmds from './dfltcmds';
import CustomCmds from './customcmds';

//setInterval(function, milliseconds) = 10000ms = 1sec

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
"setInterval(chatTimers, 600000)" //sets a 10 minute timer

function chatTimers() {
  msg = msg.toLowerCase().substr(1).split(" ");
  switch (true) {
  case msg[0] == "hello" || msg[0] == "hi":
      ThetaApi.sendMsg(IDK WTF Goes Here, channel);
      break;
}
