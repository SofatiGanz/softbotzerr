import fetch from 'node-fetch'

let handler = async(m, { conn, groupMetadata, usedPrefix, text, args, command }) => {
  let pp = hwaifu.getRandom()
  let cap = `*❏ INFO PREMIUM*
  
Dengan mendaftar menjadi user premium anda akan mendapatkan keuntungan sebagai berikut :

1. Bisa menggunakan semua fitur
2. mendapatkan unlimited limit
3. bisa memainkan di pesan pribadi

Silahkan hubungi owner ( *.owner* ) untuk melakukan upgrade premium hanya dengan Rp. 10.000 per bulan

Invite bot ke GROUP kalian ? Click Button Di Bawah !
  `
await conn.sendButtonDoc(m.chat, cap, botdate, 'SewaBot', '.sewa', fkontak, {
			contextInfo: {
				forwardingScore: fsizedoc,
				externalAdReply: {
                    body: '© Yuushiro',
    containsAutoReply: true,
    mediaType: 1,
    mediaUrl: hwaifu.getRandom(), 
    renderLargerThumbnail: true,
    showAdAttribution: true,
    sourceId: '© QueensBotz',
    sourceType: 'PDF',
    previewType: 'PDF',
    sourceUrl: sgc,
    thumbnail: fp,
    thumbnailUrl: sgc,
    title: 'Sintax Group'  
				}
			}
})
}
handler.help = ['infopremium']
handler.tags = ['info']
handler.command = /^(infopremium)$/i

export default handler