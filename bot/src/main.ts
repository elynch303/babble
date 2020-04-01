"use strict";

import PubNub = require('pubnub');
import * as appConfig from './config.json';
import ThetaApi from './theta.api';
import BabbleApi from './babble.api';
import Games from './games';
import BinanceApi from './binanceApi'

export var subscribers: BabbleLib.Subscribers;
export var channels: BabbleLib.Channels;

class Babble{
    pubnub: any = new PubNub({ subscribeKey: appConfig.subscribeKey });
    listener: any = {
        message: function (m) {
            // handle messages
            console.log(m);
            let channelName = m.channel; // The channel for which the message belongs
            let channelGroup = m.subscription; // The channel group or wildcard subscription match (if exists)
            let pubTT = m.timetoken; // Publish timetoken
            let msg = m.message; // The Payload
            let publisher = m.publisher; //The Publisher
            channelName = channelName.replace('chat.', '');
            this.messageHandler(msg, channelName);
        },
        presence: function (p) {
            // handle presence
            var action = p.action; // Can be join, leave, state-change or timeout
            var channelName = p.channel; // The channel for which the message belongs
            var occupancy = p.occupancy; // No. of users connected with the channel
            var state = p.state; // User State
            var channelGroup = p.subscription; //  The channel group or wildcard subscription match (if exists)
            var publishTime = p.timestamp; // Publish timetoken
            var timetoken = p.timetoken; // Current timetoken
            var uuid = p.uuid; // UUIDs of users who are connected with the channel
            if (action != "interval" || action != "leave") {
                //console.log("presence",p);
            }
        },
        signal: function (s) {
            // handle signal
            console.log("signal", s);
            var channelName = s.channel; // The channel for which the signal belongs
            var channelGroup = s.subscription; // The channel group or wildcard subscription match (if exists)
            var pubTT = s.timetoken; // Publish timetoken
            var msg = s.message; // The Payload
            var publisher = s.publisher; //The Publisher
        },
        user: function (userEvent) {
            console.log("userEvent", userEvent);
            // for Objects, this will trigger when:
            // . user updated
            // . user deleted
        },
        space: function (spaceEvent) {
            console.log("space", spaceEvent);
            // for Objects, this will trigger when:
            // . space updated
            // . space deleted
        },
        membership: function (membershipEvent) {
            console.log("membership", membershipEvent);
            // for Objects, this will trigger when:
            // . user added to a space
            // . user removed from a space
            // . membership updated on a space
        },
        messageAction: function (ma) {
            console.log("messageAction", ma);
            // handle message action
            var channelName = ma.channel; // The channel for which the message belongs
            var publisher = ma.publisher; //The Publisher
            var event = ma.message.event; // message action added or removed
            var type = ma.message.data.type; // message action type
            var value = ma.message.data.value; // message action value
            var messageTimetoken = ma.message.data.messageTimetoken; // The timetoken of the original message
            var actionTimetoken = ma.message.data.actionTimetoken; //The timetoken of the message action
        },
        status: function (s) {
            //console.log("status",s);
            var affectedChannelGroups = s.affectedChannelGroups; // The channel groups affected in the operation, of type array.
            var affectedChannels = s.affectedChannels; // The channels affected in the operation, of type array.
            var category = s.category; //Returns PNConnectedCategory
            var operation = s.operation; //Returns PNSubscribeOperation
            var lastTimetoken = s.lastTimetoken; //The last timetoken used in the subscribe request, of type long.
            var currentTimetoken = s.currentTimetoken; //The current timetoken fetched in the subscribe response, which is going to be used in the next request, of type long.
            var subscribedChannels = s.subscribedChannels; //All the current subscribed channels, of type array.
        }
    };

    constructor() {
        setInterval(this.init, 10000);
    }

    async init() {
        let data = await ThetaApi.getInstalls();
        //subscribers.clear();
        // if(!subscribers){
        //     BabbleLib.subscribers.splice(0, BabbleLib.subscribers.length);
        // }
        data.forEach(function (item) {
            let channel: Channel = {
                clientId: item.client_id ,
                userId: item.user_id,
                accessToken: item.access_token,
                prefix: BabbleAip.getStreamerPrefix()
            };
            channels[item.user_id] = channel;
        });
        for (let channel in channels) {
            subscribers.push("chat." + channel);
        }

        console.log("subscribers",subscribers);
        console.log("channels",channels)
        this.startPubNub();
    }

    startPubNub() {
        this.pubnub.removeListener(this.listener);
        this.pubnub.unsubscribe({ channels: BabbleLib.subscribers });
        this.pubnub.subscribe({
            channels: BabbleLib.subscribers,
            withPresence: true
        });
        this.pubnub.addListener(this.listener);
    }
