let handler = async (m, { conn, text }) => {
	if(isNaN(text) && !text.match(/@/g)){
		return conn.reply(m.chat, `*Penggunaan yang benar*\n\n.promote @user\n.promote -> reply chat`, m)
	}else if(isNaN(text)) {
		var number = text.split`@`[1]
	}else if(!isNaN(text)) {
		var number = text
	}
	
	if(!text && !m.quoted) return conn.reply(m.chat, `*Penggunaan yang benar*\n\n.promote @user\n.promote -> reply chat`, m)
	if(number.length > 15 || (number.length < 9 && number.length > 0)) return conn.reply(m.chat, `*Masukin nomor yg bener gblk !*`, m)
	
try {
	if(text) {
		var user = number + '@s.whatsapp.net'
	} else if(m.quoted.sender) {
		var user = m.quoted.sender
	} else if(m.mentionedJid) {
		var user = number + '@s.whatsapp.net'
	} 
} catch (e) {
		} finally {
			conn.groupMakeAdmin(m.chat, [user]).catch(console.log)
			conn.reply(m.chat, `*Berhasil menjadikan @${user.split('@')[0]} sebagai admin*`, m, {contextInfo: {
        mentionedJid: [user]
      }})
	}	
}
handler.help = ['admin']
handler.tags = ['group admin']
handler.command = /^(admin)$/i
handler.group = true
handler.admin = true
handler.botAdmin = true
handler.limit = true
handler.fail = null
module.exports = handler