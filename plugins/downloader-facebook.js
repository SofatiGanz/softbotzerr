import { facebookdl, facebookdlv2 } from '@bochilteam/scraper'
import fetch from 'node-fetch'
import fs from 'fs'
let handler = async (m, { conn, usedPrefix, args, command, text }) => {

if (!args[0]) throw `Linknya?\Contoh: ${usedPrefix}fb https://www.facebook.com/watch?/`

await m.reply(md)

// let res = await fetch(`https://api.botcahx.biz.id/api/dowloader/fbdown?url=${args[0]}&apikey=${botcahx}`)
let res = await fetch(`https://api.zahwazein.xyz/downloader/facebook?apikey=60475cf54e5c&url=${args[0]}`)
let x = await res.json()
let json = await x.result

let cap = `    ⏤͟͟͞͞★𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝𝐞𝐫 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 ꗄ➺

Done @${m.sender.split`@`[0]}

${wm}

${botdate}
`

await conn.sendFile(m.chat, json.url, 'fb.mp4', cap, m)
}
handler.help = ['facebook'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^f(acebook(d(own(load(er)?)?|l))?|b(d(own(load(er)?)?|l))?)$/i

handler.limit = true

export default handler