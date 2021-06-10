let gtts = require('node-gtts')
let fs = require('fs')
let path = require('path')
let { spawn } = require('child_process')
let handler = async (m, { conn, args, usedPrefix, command }) => {
  if (!args[0]) return m.reply(`*Contoh Format Yang Benar :*\n\n*${usedPrefix + command} id saya dari indonesia*`)

  let lang = 'id'
  let text = args.slice(1).join(' ')
  if (args[0].length === 2) lang = args[0]
  else text = args.join(' ')
  if (!text) text = lang
  let res
  try { res = await tts(text, lang) }
  catch (e) {
    // m.reply(e + '')
    res = await tts(text)
  } finally {
    conn.sendFile(m.chat, res, 'tts.opus', null, m, true)
  }
}
handler.help = ['tts _lang text_','tts _text_']
handler.tags = ['tools']
handler.command = /^tts$/i
module.exports = handler

function tts(text, lang = 'id') {
  console.log(lang, text)
  return new Promise((resolve, reject) => {
    try {
      let tts = gtts(lang)
      let filePath = path.join(__dirname, '../tmp', (1 * new Date) + '.wav')
      tts.save(filePath, text, () => {
          resolve(fs.readFileSync(filePath))
          fs.unlinkSync(filePath)
      })
    } catch (e) { reject(e) }
  })
}