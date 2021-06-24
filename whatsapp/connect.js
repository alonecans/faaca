/*
Sc By FxSx
Recode By Nuy X Fajri X FdlXploit
*/
const { WAConnection, MessageType } = require("@adiwajshing/baileys")
const qrcode = require("qrcode-terminal")
const figlet = require('figlet')
const fs = require('fs')
const { color } = require('../lib/color')

const nuy = new WAConnection()
exports.nuy = nuy

exports.connect = async() => {
    let authofile = './pinky.json'
    	nuy.version = [2, 2119, 6]
	nuy.logger.level = 'warn'
	console.log(color(figlet.textSync('Manca', {
		font: 'Standard',
		horizontalLayout: 'default',
		vertivalLayout: 'default',
		width: 80,
		whitespaceBreak: false
	}), 'cyan'))
	console.log(color('[ SC BY FXSX ]'))
	nuy.on('qr', qr => {
        qrcode.generate(qr, { small: true })
        console.log(color('[MC]', 'yellow'), color('Scan Qr'))
    })
    /*
	nuy.on('credentials-updated', () => {
		fs.writeFileSync(authofile, JSON.stringify(nuy.base64EncodedAuthInfo(), null, '\t'))
		console.log(color('Wait....'))
	})
    */
	fs.existsSync(authofile) && nuy.loadAuthInfo(authofile)
	nuy.on('connecting', () => {
		console.log(color('[MC]', 'yellow'), color('Connecting...'))
	})
	nuy.on('open', () => {
		console.log(color('[MC]', 'yellow'), color('Connect'))
	})
	await nuy.connect({timeoutMs: 30*1000})
    fs.writeFileSync(authofile, JSON.stringify(nuy.base64EncodedAuthInfo(), null, '\t'))
    console.log(color(' ===================================================='))
	console.log(color('│ + Github : https://github.com/pinkyca  │'))
	console.log(color('│ + Follow : https://instagram.com/thenay_xploit_    │'))
	console.log(color(' ===================================================='))
	return nuy
}
