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

import fetch from 'node-fetch';
import * as appConfig from './config.json';
export default class BinanceApi{
    constructor(){}

    static getInstalls(): any {
        let url = 'https://api.binance.com';
        fetch(url).then(res => res.text()).then(async function(body){
             return await body;

             static ThetaApi.sendMsg(msg, channel) {
                 let body = {
                     "type": "chat_message",
                     "message": msg
                 };
                 let channelConfig = BabbleLib.channels[channel];
                 let url = "https://api.binance.com/api/v3/ticker/price?symbol=";
                 fetch(url, {
                     method: "GET",
                     body: JSON.stringify(body),
