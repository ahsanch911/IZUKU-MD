const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || '447366274434'
global.mongodb = process.env.MONGODB_URI || "mongodb://u67wtnui9m87lq4yhmvv:tpelVygzO9NWafGwF0D@bmrkwjjqyq2xfesqxn7z-mongodb.services.clever-cloud.com:2052/bmrkwjjqyq2xfesqxn7z"
global.port= process.env.PORT || 5000
global.email = 'sam@secktor.live'
global.location = 'Lahore PK'
global.sudo = process.env.SUDO || '447366274434'
global.devs = '447366274434';
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://raw.githubusercontent.com/SecktorBot/Brandimages/main/logos/SocialLogo%201.png'
module.exports = {
  
  sessionName:  process.env.SESSION_ID ||  "IZUKU;;; eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia05FLytFWG5kTVBkZ0NRam9obVZIS1l5VFpFNWpOUE91NWFZZUhxbzcydz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiM0d1V3pxcFM3RjcxMjZ0SHA0QjFURDlpSSs4dEkrVlNTUUZ4eWhZblRFWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPRmhnVlpDTXBkbllOWUtxd3RQb2txQTRUUW9jQzR2bVlwaDhqL3V6V0dFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJoQ3h3Wit0N21SbWtHZi9jcDgxdDRxZENZbnE2U2k5MHFmaVh4YUlOcVF3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtMT3hlWWtsL0M2MzA5MTdLQkVPRXpsUHpEOWhZWnVTMVFRREZuaHFpMVE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkF4MFl2TCt4a0pwQURDc1VHcjkwOWJUQlpPWTJUcjVRMU13VE5scTRnUms9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia1BJME1jak84M3A2TkZRYWZ2Mnp1UWN1YWZ2NU9mV28rcnpnbE8vQ1ZsMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUxPNHFVWEFoYW0relBXR1RmOSsycGkzeGVVUDFndVRsdmxpc3Z0TUhrUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlV1SjNGRHkramgyb3N1ZG1jU3Y4N21KWjRONDVsc0o1clg1UjNOd0I4a0tZR3NiV0dzNCtsdDlGZDRkdkJ2NXhDa0hHbnhLMExzdUpQY1V1M3AwV2d3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjEsImFkdlNlY3JldEtleSI6IkUwMW1kcXh5VlBmekErdVdoUkw3dkJnZ0lYbWxPTkZkLy9obW9KZnZMT2c9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlVhT1E3elItVE55SlZ5NWVrWWJDa1EiLCJwaG9uZUlkIjoiMzU2N2QwNGYtZmRhMC00NWE4LTk4YjgtODZlNzU1YWMyYTVkIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InJWalRTczdwV2tRZ05OS2tHQ2ppVGw0bjZrUT0ifSwicmVnaXN0ZXJlZCI6ZmFsc2UsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieXR6ZVg3ZUl6YzdtdmNmVFZzMThCYzFNN3pnPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTXJzNXVRRkVJT001N3dHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoidC9kcUlhU2Z2cnBMdFBkR29rU3h3WTNrTzh3YjNYODhXbDlZcEpyRjZHUT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiUitnMjhyTFhqWFlVOVJ5YjBnVktZVUx1eE9IblJXaTJBQ21Qd0JtYlluTXF5WlpIbzVlYmtwU2VMZFZzOXh6NTRzKzVMQXZ3RGFqaTJ6WkVXaXpyQ0E9PSIsImRldmljZVNpZ25hdHVyZSI6Ijl1WldkVHF1QkJRMzF2RE5BOEd2U1dJMzI3Y3lJaW9PYURzWWZiSUYxMzV4TVRmUXhqazZROGg2RTUwalpZL3ZNQTVpK0JkRDFpbmdRd3dLT3FnTmlBPT0ifSwibWUiOnsiaWQiOiI0NDczNjYyNzQ0MzQ6MTJAcy53aGF0c2FwcC5uZXQifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiNDQ3MzY2Mjc0NDM0OjEyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmJmM2FpR2tuNzY2UzdUM1JxSkVzY0dONUR2TUc5MS9QRnBmV0tTYXhlaGsifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzgxMzA5NTAsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQk1iIn0=",
  botname:   process.env.BOT_NAME === undefined ? 'Chaudhry' : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'AhSaN' : process.env.OWNER_NAME,
  author:  process.env.PACK_INFO === undefined ? 'excel' : process.env.PACK_INFO.split(";")[0],
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  packname:  process.env.PACK_INFO === undefined ? 'IZUKU-Md' : process.env.PACK_INFO.split(";")[1],
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? true : process.env.ALWAYS_ONLINE,
  typingprensence:  process.env.TYPING === undefined ? false : process.env.TYPING,
  autosendstatus:  process.env.STATUS_SENDER === undefined ? false : process.env.STATUS_SENDER,
anticall:  process.env.ANTI_CALL === undefined ? false : process.env.ANTI_CALL,
recordingpresence:  process.env.RECORDING === undefined ? false : process.env.RECORDING,	
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '/' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  afk:  process.env.AFK ||true,
  autobio:  process.env.AUTO_BIO === undefined ? '' : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? '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' : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'IZUKU',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'private' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
