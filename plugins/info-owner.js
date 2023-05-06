// Hilih
let handler = async (m, { conn, args }) => {

const anu =`
Hai Kak ${conn.getName(m.sender)} 👋, ${ucapan}
Apakah Kaka Mempunya Keluhan Atas Bot Ini?
Jika Kaka Ingin Melaporkan Atau Request Fitur, Silahkan Ketik .request < Pesan Kaka > 
Jangan Spam Ya Kak 😁

`

const sections = [
{
	title: `–––––『 όώήέŕ 』–––––`,
	rows: [
	{ title: "✎ Creator", rowId: ".creator"},
	{ title: "✎ Nomor Owner", rowId: ".leon"},
	{ title: "✎ Nomor Owner V2", rowId: ".leon2"},
	{ title: "✎ Biodata Owner", rowId: ".ownerbio"},
	{ title: "✎ Script", rowId: ".sc"}
]},
{
	title: `–––––『 𝚂𝚞𝚙𝚙𝚘𝚛𝚝 𝙼𝚎 』–––––`,
	rows: [
	{ title: "✔ Donasi", rowId: ".donasi"},
	{ title: "✔ Sewa", rowId: ".sewa"},
	{ title: "✔ Info Bot", rowId: ".infobot"}
]}
]

const listMessage = {
 text: `Hai Kak ${conn.getName(m.sender)} 👋\nSilahkan Click Dibawah kak ! o(〃＾▽＾〃)o`,
 footer: null,
 title: null,
 buttonText: "Click Here",
 sections
}

await conn.sendMessage(m.chat, listMessage, {quoted: m})
}
 
handler.help = ['owner']
handler.tags = ['main', 'info']
handler.command = /^(owner)/i

export default handler