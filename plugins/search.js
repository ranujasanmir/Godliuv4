/**
* @project_name Queen Amdi [WA Multi-device]
* @author BlackAmda <https://github.com/BlackAmda>
* @description A WhatsApp based 3สณแต party application that provide many services with a real-time automated conversational experience
* @link <https://github.com/BlackAmda/QueenAmdi>
* @version 4.0.5
* @file  search.js - QueenAmdi search engine features

ยฉ 2022 Black Amda, ANTECH. All rights reserved.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.*/

const { AMDI, apkDL_List, blackamda_API, Language, Packages } = require('queen_amdi_core/dist/scripts')
const { axios } = Packages;
const yts = require( 'yt-search' )
const Lang = Language.getString('search');

const searchTITLE = '๐ *God Liui Search Engine*'

AMDI({ cmd: ["yt", "yts", "ytsearch"], desc: Lang.YTSDESC, type: "primary", react: "๐" }, (async (amdiWA) => {
    let { footerTXT, input, react, reply } = amdiWA.msgLayout;

    if (!input) return await reply(Lang.needTXT);

    try {
        var ytsLIST = await yts(input);
    } catch {
        return await reply(Lang.NOT_FOUND.format("YouTube"), "โน๏ธ", 1);
    }
    var ytgot = '';
    ytsLIST.all.map((video) => {
        ytgot += 'โถ๏ธ *' + video.title + '* - ' + video.url + '\n\n'
    });
    await reply(`${searchTITLE}\n${Lang.YTS}\nโฌโฌโฌโฌโฌโฌโฌโฌโฌโฌโฌโฌโฌโฌโฌ\nโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ\n${ytgot}\n\n${footerTXT}`);
    return await react("โ๏ธ", amdiWA.msg);
}));


AMDI({ cmd: ["ps", "playstore"], desc: Lang.PSDESC, type: "primary", react: "๐" }, (async (amdiWA) => {
    let { footerTXT, input, isPlaystore, prefix, react, reply, sendImage, sendListMsg } = amdiWA.msgLayout;

    if (!input) return await reply(Lang.needTXT);

    try {
        if (input && isPlaystore(input)) {
            const psAPI = await blackamda_API("playstore", `package=${input}`, amdiWA.botNumberJid);
            const response = await axios.get(psAPI);
            const json = response.data

            if (json.status.error) return await reply("Error".fetchError([{ message: json.status.message }]), "โ", 1);

        const text = `
    ๐ *Name* : ${json.app_name}
    ๐งฐ *Version* : ${json.version}
    ๐จ๐ปโ๐ป *Developer* : ${json.developer}
    ๐ฒ *Installs* : ${json.installs}
    ๐ *Package name* : ${json.package}
`
            await sendImage({url: json.icon}, {caption: `${searchTITLE}\n${Lang.PSTORE}\nโฌโฌโฌโฌโฌโฌโฌโฌโฌโฌโฌโฌโฌโฌโฌ\nโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ${text}\n\n${footerTXT}`, quoted: true});
            return await react("โ๏ธ", amdiWA.msg);
        } else if (input) {
            const psAPI = await blackamda_API("search", `platform=playstore&name=${input}`, amdiWA.botNumberJid);
            const response = await axios.get(psAPI);
            const json = response.data
            
            if (json.status.error) return await reply("Error".fetchError({ message: json.status.message }), "โ", 1);
    
            var listInfo = {}
            listInfo.title = searchTITLE
            listInfo.text = `\n${Lang.PSTORE}\n`
            listInfo.buttonTXT = 'Select app'
    
            const sections = apkDL_List(prefix, json.data, true);
    
            await sendListMsg(listInfo, sections)
            return await react("โ๏ธ", amdiWA.msg);
        } 
    } catch (e) {
        console.log(e);
        await reply(Lang.NOT_FOUND.format("Playstore"), "โน๏ธ");
        return await react("โ", amdiWA.msg);
    }
}));