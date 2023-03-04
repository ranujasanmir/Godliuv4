/**
* @project_name Queen Amdi [WA Multi-device]
* @author BlackAmda <https://github.com/BlackAmda>
* @description A WhatsApp based 3ʳᵈ party application that provide many services with a real-time automated conversational experience
* @link <https://github.com/BlackAmda/QueenAmdi>
* @version 4.0.0
* @file  search.js - QueenAmdi search engine features

© 2022 Black Amda, ANTECH. All rights reserved.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.*/

const { AMDI, Language } = require('queen_amdi_core/dist/scripts')
const gplay = require('google-play-scraper');
const yts = require( 'yt-search' )
const Lang = Language.getString('search');

const searchTITLE = '🔎 *Queen Amdi Search Engine*'


AMDI({ cmd: ["yt", "yts", "ytsearch"], desc: Lang.YTSDESC, type: "primary", react: "🔎" }, (async (amdiWA) => {
    let { footerTXT, input, react, reply } = amdiWA.msgLayout;

    if (!input) return await reply(Lang.needTXT);

    try {
        var ytsLIST = await yts(input);
    } catch {
        return await reply(Lang.NOT_FOUND.format("YouTube"), "☹️", 1);
    }
    var ytgot = '';
    ytsLIST.all.map((video) => {
        ytgot += '▶️ *' + video.title + '* - ' + video.url + '\n\n'
    });
    await reply(`${searchTITLE}\n${Lang.YTS}\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​\n${ytgot}\n\n${footerTXT}`);
    return await react("✔️", amdiWA.msg);
}));


AMDI({ cmd: ["ps", "playstore"], desc: Lang.PSDESC, type: "primary", react: "🔎" }, (async (amdiWA) => {
    let { footerTXT, input, react, reply } = amdiWA.msgLayout;

    if (!input) return await reply(Lang.needTXT);

    try {
        const play = await gplay.search({term: input, num: 10})
        ini_txt = ""
            for (var x of play) {
                let price = x.free ? 'Free' : `${x.price} ${x.currency}`
                ini_txt += `📚 *Name* : ${x.title}\n`
                ini_txt += `👨🏻‍💻 *Developer* : ${x.developer}\n`
                ini_txt += `💵 *Price* : ${price}\n`
                ini_txt += `⭐ *Ratings* : ${x.scoreText}\n`
                ini_txt += `⚙️ *Playstore Link* : ${x.url}\n`
                ini_txt += `📁 *Package name* : ${x.appId}\n\n────────────────\n\n`
            }
        await reply(`${searchTITLE}\n${Lang.PSTORE}\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​\n${ini_txt}\n\n${footerTXT}`);
        return await react("✔️", amdiWA.msg);
    } catch (e) {
        console.log(e);
        await reply(Lang.NOT_FOUND.format("Playstore"), "☹️");
        return await react("❌", amdiWA.msg);
    }
}));