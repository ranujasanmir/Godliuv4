/**
* @project_name Queen Amdi [WA Multi-device]
* @author BlackAmda <https://github.com/BlackAmda>
* @description A WhatsApp based 3ʳᵈ party application that provide many services with a real-time automated conversational experience
* @link <https://github.com/BlackAmda/QueenAmdi>
* @version 4.0.5
* @file  _onTEXT.js - QueenAmdi on text commands

© 2022 Black Amda, ANTECH. All rights reserved.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.*/

const { AMDI, amdiChat, Language } = require('queen_amdi_core/dist/scripts')
const { semiAIchat } = amdiChat
const Lang = Language.getString('botCTRL');

AMDI({ onText: "Liu", desc: Lang.AI_USAGE, example: Lang.AI_EXAMPLE, type: "primary", react: "🤖" }, (async (amdiWA) => {
    let { input, reply } = amdiWA.msgLayout

    if (!input) return await reply(`${Lang.AI_USAGE}\n\nExample: ${Lang.AI_EXAMPLE}`);
    await semiAIchat( amdiWA );
}));

AMDI({ onText: ["hi", "Hi"], type: "primary", react: "🧚‍♂️" }, (async (amdiWA) => {
    let { reply } = amdiWA.msgLayout;
    return await reply("*Hi There! Welcome to the RS45 Official Whatsapp Account!*\nMy name is Liu Shen. I am a Whatsapp bot connect you to my admins! How may I help you?");
}));

AMDI({ onText: ["gm", "Gm"], type: "primary", react: "☀️" }, (async (amdiWA) => {
    let { reply } = amdiWA.msgLayout;
    return await reply("*Good Morning😇*");
}));

AMDI({ onText: ["gn", "Gn"], type: "primary", react: "🌙" }, (async (amdiWA) => {
    let { reply } = amdiWA.msgLayout;
    return await reply("*Good Night😇*");
}));

AMDI({ onText: ["mk", "Mk"], type: "primary", react: "👊" }, (async (amdiWA) => {
    let { reply } = amdiWA.msgLayout;
    return await reply("*I'm busy on these days. What's going on?*");
}));

AMDI({ onText: "ලියූ", desc: "AI Chat bot", type: "primary", react: "🤖", cmdHideInMenu: true }, (async (amdiWA) => {
    let { input, reply } = amdiWA.msgLayout

    if (!input) return await reply(`${Lang.AI_USAGE}\n\nExample: ${Lang.AI_EXAMPLE}`);
    await semiAIchat( amdiWA );
}));