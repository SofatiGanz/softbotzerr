let handler = async(m, { conn }) => {
let pc = Object.entries(await conn.chats)
let niorg = pc.filter(([jid]) => jid.endsWith('@s.whatsapp.net'))
let thumbListpc = `https://telegra.ph/file/2b72f96bf420c79e23d52.jpg`
let txt = ''
    for (let [jid] of niorg)
txt += `${htjava} ${await conn.getName(jid)}\n${dmenub} ${'@' + jid.replace(/@.+/, '')}\n${cmenua}\n\n`
return conn.sendButton(m.chat, htki + ' *CHAT PRIVATE* ' + htka + '\n' + bottime, '*Total:* ' + niorg.length + '\n\n' + txt.trim(), intro, [['Sewa Bot', '.sewa'],['Groups List', '.groups']], m, { mentions: conn.parseMention(txt) })
}
handler.help = ['listpc']
handler.tags = ['owner']
handler.command = /^listpc|pclist|daftarpc|pc$/i
handler.owner = true

export default handler
