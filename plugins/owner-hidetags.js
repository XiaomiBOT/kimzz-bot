let { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn, text }) => {
  let users = (await conn.groupMetadata(m.chat)).participants.map(u => u.jid)
  conn.sendMessage(m.chat, text, MessageType.extendedText, { contextInfo: { mentionedJid: users } })
}
handler.help = ['otag']
handler.tags = ['owner']
handler.command = /^(|otag)$/i
handler.owner = true
handler.group = true
handler.fail = null

module.exports = handler
