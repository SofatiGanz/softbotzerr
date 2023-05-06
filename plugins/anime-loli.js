// Hilih
"use strict"
import fetch from 'node-fetch'
let handler = async (m, { conn, command: _q, usedPrefix: _p }) => {
await m.reply(md)
let res = await fetch('https://raw.githubusercontent.com/Xmell91/loli/master/loli.json')
if (!res.ok) throw await `${res.status} ${res.statusText}`
let json = await res.json()
let url = json[Math.floor(Math.random() * json.length)]
await conn.sendButton(m.chat, `${bottime}\n\nDone @${m.sender.split`@`[0]}\n\nCommand: ${_q}\n\nUrl: ${url}`, wm, await (await fetch(url)).buffer(), [['𝐍 𝐄 𝐗 𝐓', `${_p + _q}`], ['𝐌 𝐄 𝐍 𝐔', '.menu'], ['𝐃 𝐎 𝐍 𝐀 𝐒 𝐈', '.donasi']], m)
}
handler.help = ['animewaifu', 'waifu']
handler.tags = ['anime']
handler.command = /^(animeloli|loli)$/i
handler.limit = 15

export default handler
