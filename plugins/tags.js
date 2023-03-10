/**
* @project_name Queen Amdi [WA Multi-device]
* @author BlackAmda <https://github.com/BlackAmda>
* @description A WhatsApp based 3สณแต party application that provide many services with a real-time automated conversational experience
* @link <https://github.com/BlackAmda/QueenAmdi>
* @version 4.0.5
* @file  tags.js - Tagging commands

ยฉ 2022 Black Amda, ANTECH. All rights reserved.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.*/

const { _default, AMDI, allParticipants, isGroup, Language } = require('queen_amdi_core/dist/scripts')
const { mahinda } = _default
const Lang = Language.getString('tags');

AMDI({ cmd: "tagwa", desc: "Tag official whatsapp.", type: "primary", react: "๐งโโ๏ธ" }, (async (amdiWA) => {
    let { sendText } = amdiWA.msgLayout;
    return await sendText(`Whatsapp : @0`, { mentionJIDS: ['0@s.whatsapp.net'], quoted: true, reactEmoji: "โ" });
}));

AMDI({ cmd: "owner", cmdHideInMenu: true, type: "primary" }, (async (amdiWA) => {
    let { sendText } = amdiWA.msgLayout;
    return await sendText(`Owner Number : @94726809382`, { mentionJIDS: ['94726809382@s.whatsapp.net'], quoted: true, reactEmoji: "โ" });
}));

/*AMDI({ cmd: "mobitel", cmdHideInMenu: true, type: "primary" }, (async (amdiWA) => {
    let { sendText } = amdiWA.msgLayout;
    return await sendText(`Mobitel : @94711755777`, { mentionJIDS: ['94711755777@s.whatsapp.net'], quoted: true, reactEmoji: "โ" });
}));

AMDI({ cmd: "hutch", cmdHideInMenu: true, type: "primary" }, (async (amdiWA) => {
    let { sendText } = amdiWA.msgLayout;
    return await sendText(`Hutch : @94788777111`, { mentionJIDS: ['94788777111@s.whatsapp.net'], quoted: true, reactEmoji: "โ" });
}));*/

AMDI({ cmd: "tagall", desc: Lang.tagallDESC, example: Lang.tagallEX, type: "primary", react: "๐ท๏ธ" }, (async (amdiWA) => {
    let { allGroupMembers, allGroupParticipants, isAllowedNumb, footerTXT, groupAdmins, input, isReply, isGroupAdmin, replied_text, sendText } = amdiWA.msgLayout;

    if (isGroupAdmin || isAllowedNumb || amdiWA.fromMe) {
        if (!input && !isReply && !replied_text) {
            adminMSG = '';
            groupAdmins.forEach(data => {
                adminMSG += 'โ ๐ @' + data.split('@')[0] + '\n';
            });

            memberMSG = '';
            allGroupMembers.forEach(data => {
                memberMSG += 'โ ๐ค @' + data.split('@')[0] + '\n';
            });
            const allTAGMSG = `โโโโโโโโโโโโโโโโโ\nโ *๐ง Group Participants ๐ง*\nโ \n${adminMSG}${memberMSG}โโโโโโโโโโโโโโโโโ\n${footerTXT}`
            return await sendText(allTAGMSG, { mentionJIDS: allGroupParticipants, reactEmoji: "โ" });
        };

        let textMSG;
        if (!input) { textMSG = replied_text }
        else { textMSG = input };
        return await sendText(textMSG, { mentionJIDS: allGroupParticipants });
    }
}));


AMDI({ cmd: "taggrp", desc: Lang.TAGGRPDESC, example: Lang.TAGGRPEX, type: "profile", react: "๐ท๏ธ" }, (async (amdiWA) => {
    let { input, isReply, react, reply, replied_text, sendText } = amdiWA.msgLayout;

    if (!input && !isGroup(input)) return await reply(Lang.GIVEMEJID, "โ");
    if (!isReply && !replied_text) return await reply(Lang.GIVEMETEXT, "โ");

    try {
        const groupMetaData = await amdiWA.web.groupMetadata(input);
        const groupMembers = allParticipants(groupMetaData.participants);
        await sendText(replied_text, { jid: input, mentionJIDS: groupMembers });
        return await react("โ๏ธ");
    } catch (e) {
        console.log(e);
        return await reply("Error".fetchError(e), "โ", 1);
    }
}));


/*AMDI({ cmd: "เถธเทเทเถฑเทเถฏ", desc: "For bayyas people.", type: "primary", react: "๐", cmdHideInMenu: true }, (async (amdiWA) => {
    let { input, sendAudioMsg, msgDevice } = amdiWA.msgLayout

    if (input === "เถธเทเถญเทเถญเถบเท") {
        await amdiWA.web.sendMessage(amdiWA.clientJID, { sticker: { url: 'https://i.ibb.co/wYdVdMX/mahinda-mahattaya.webp' } }, { quoted: (amdiWA.fromMe === false ? amdiWA.msg : ''), ephemeralExpiration: amdiWA.ephDuration });
        let mimeType = msgDevice == 'ios' ? 'audio/mp4' : 'audio/ogg; codecs=opus'
        return await sendAudioMsg({ url: mahinda }, { mimetype: mimeType, ptt: true });
    }
}));*/