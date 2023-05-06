let handler = async (m, { conn, args }) => {
   if (!args[0]) return m.reply('Masukan Item Yang Mau Di Cheat !')
    let user = global.db.data.users[m.sender]
        conn.reply(m.chat, `*Succes !*`, m)
        let anu = args[0]
        global.db.data.users[m.sender].anu = 10000000000
}
handler.help = ['cheat']
handler.tags = ['owner']
handler.command = /^(cheat)$/i

handler.mods = true

export default handler