import fetch from "node-fetch"
let handler = async (m, { conn, command }) => {

  let data = await (await fetch('https://raw.githubusercontent.com/KazukoGans/database/main/anime/ppcouple.json')).json()
  let cita = data[Math.floor(Math.random() * data.length)]
  
  let cowi = await(await fetch(cita.cowo)).buffer()
  await conn.sendButton(m.chat, '𝙱𝚘𝚢𝚜', wm, cowi,[['🔄 Next 🔄', `/${command}`]], m)
  let ciwi = await(await fetch(cita.cewe)).buffer()
  await conn.sendButton(m.chat, '𝙶𝚒𝚛𝚕𝚜', wm, ciwi,[['🔄 Next 🔄', `/${command}`]], m)
  
}
handler.help = ['ppcouple', 'ppcp']
handler.tags = ['anime']
handler.command = /^(pp(cp|couple|ppcp))$/i
handler.limit = true

export default handler