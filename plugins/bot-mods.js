let { Presence } = require('@adiwajshing/baileys')
let handler  = async (m, { conn }) => {
	await conn.updatePresence(m.chat, Presence.composing) 
	let name = 'Loli Cantik'
	let number = '6281257735703'
	conn.sendVcard(m.chat, name, number, m)
}
handler.help = ['mods']
handler.tags = ['info']
handler.command = /^(mods|mod)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.fail = null
handler.exp = 0
module.exports = handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}