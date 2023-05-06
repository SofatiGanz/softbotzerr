import fs from 'fs'
import fetch from 'node-fetch'
 let handler = async(m, { conn }) => { 

         let pp = fs.readFileSync('./thumbnail.jpg')
         let gc1 = 'https://chat.whatsapp.com/HZSFalBq8R1FFK3qX02WJj'
         let caption = `*Mʏ Gᴄ Oғғɪᴄɪᴀʟ*`
         await conn.sendButtonDoc(m.chat, caption, wm, 'Owner', '.owner', m, { contextInfo: { 
             externalAdReply: {
               sourceUrl: `${gc1}`,
               title: 'My Group Official', 
               body: 'Ziro Md',
               thumbnail: pp
             } 
         }})
         }

handler.tags = ['info']
handler.command = /^gcbul$/i
 export default handler