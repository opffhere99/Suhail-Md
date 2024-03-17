const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""  // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"


global.DATABASE_URI = process.env.DATABASE_URL || "postgres://koyeb-adm:1cswIdu2lmRU@ep-odd-cell-a25zn1tc.eu-central-1.pg.koyeb.app/koyebdb"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  = process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website= process.env.GURL|| "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "true"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "true", // disable bot in pm when public mode
global.disablegroup = process.env.DISABLE_GROUPS || "true", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "true", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text", // set IMAGE/VIDEO links here
global.waPresence= process.env.WAPRESENCE ||  "recording" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923024806614,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923024806614,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_01_03_17_ewogICJjcmVkcy5qc29uIjogIntcIm5vaXNlS2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiWUVxdmowaDQyajVhdlMzVTZZSGxJTEtuVnZzSGljUVVjY29VNDRFZjQyYz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIkVIUHdSMndqZ3UzU0MvN0pYaUlJa3ZWVkxtYUtFUjVBUmR1bEpreDNaVk09XCJ9fSxcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiUVA2Qzh6R3lNVWhxQklqSTdGaUFmSER5TEFsbkR3bGwrV1ltak4zY0Jraz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcImJKYloyWGwwU1Fta2hiNmZPV1VGS2d0N0JNOFZwaUE1aDROTW5tTC90WFE9XCJ9fSxcInNpZ25lZElkZW50aXR5S2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiQUJ6aVFJWU5LSk9qVWRPTXpXUzBkY1RnN1ZaWjBRc2NnYnpob1NUVkdWQT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIlhwUWo4TFNNeWxleDcxSE1QM3hZWTloKzhFaDYveDZsWmtSVkRoanhHV0U9XCJ9fSxcInNpZ25lZFByZUtleVwiOntcImtleVBhaXJcIjp7XCJwcml2YXRlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJXQnpKdTN2N2xITVJHMHJoaGo2QThHNzhyU3RNbjVzODQyenR1VEluakdZPVwifSxcInB1YmxpY1wiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwic3VzbktqamJvbk1DT01VUWFGbG9ZUDNHci9vRFhybFBDeUMwNjBXcnR5cz1cIn19LFwic2lnbmF0dXJlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJuaXpCUmdDaVZTV3JjVlBCWGhpOGpsanBFTG10Wi9JY0pRUGI4TWtEVUg1WnozRUZIQWJ3Z0c3OGtFNlRNelFPRkhNRUNHY05rZE5uUHdNS1RUdFBnUT09XCJ9LFwia2V5SWRcIjoxfSxcInJlZ2lzdHJhdGlvbklkXCI6MTQ0LFwiYWR2U2VjcmV0S2V5XCI6XCJDek1SMGVOa2RWYU1jdGF6NE1wbmplRE5mNHQvZFkxc2tyR2tha1NjbDc4PVwiLFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6W10sXCJuZXh0UHJlS2V5SWRcIjozMSxcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6MzEsXCJhY2NvdW50U3luY0NvdW50ZXJcIjowLFwiYWNjb3VudFNldHRpbmdzXCI6e1widW5hcmNoaXZlQ2hhdHNcIjpmYWxzZX0sXCJkZXZpY2VJZFwiOlwiSmQtc3k1QzBSZVNETHdvV3czWjJ1d1wiLFwicGhvbmVJZFwiOlwiOWY4ZDQwMTgtOWI0MS00Yjg5LWI3OGMtNDBhYzU0OGMyMzFiXCIsXCJpZGVudGl0eUlkXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJKM1dtYnZKTVlxRFY3ZDE5eEVud05ZNWxCd1k9XCJ9LFwicmVnaXN0ZXJlZFwiOmZhbHNlLFwiYmFja3VwVG9rZW5cIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIlh5OTY0ZDdBODFicklGU1MyWWE4V3pwaWg2ND1cIn0sXCJyZWdpc3RyYXRpb25cIjp7fSxcImFjY291bnRcIjp7XCJkZXRhaWxzXCI6XCJDSm5DNFpjRUVQbjczSzhHR0E0Z0FDZ0FcIixcImFjY291bnRTaWduYXR1cmVLZXlcIjpcIjhaNHFBaXVBRDEzazJza3NhcVU5bWxXVnc2MytBcDZXb3R0Wm1rNldiamM9XCIsXCJhY2NvdW50U2lnbmF0dXJlXCI6XCIwVEsrVkZEYmszK3FtZGJONElVallpcno2bEdBRXJVOUhOMUQzOEhlYk9zVDU3ZU5LeDJGZVdsVjVzaE5QY0s3TTJaK3Q1SHExVmg2YmdCcnE1Vm9Cdz09XCIsXCJkZXZpY2VTaWduYXR1cmVcIjpcIlhRZWptTDRydjM1VzlEWi8yeW5udmp6ODBRUzhiVEkzeEUrMU8xK29RUUdXNDNwaHA3UmhXR2JVYzk4R1FZdUFDZ2tVZHBodVA5dWh1L0VtWmd2eWhnPT1cIn0sXCJtZVwiOntcImlkXCI6XCI5MjMwMjQ4MDY2MTQ6NDlAcy53aGF0c2FwcC5uZXRcIixcImxpZFwiOlwiODM1NzE4NTk1NTQ1MjI6NDlAbGlkXCIsXCJuYW1lXCI6XCJBaGFk8J+YmE1laG1vb2Twn5icXCJ9LFwic2lnbmFsSWRlbnRpdGllc1wiOlt7XCJpZGVudGlmaWVyXCI6e1wibmFtZVwiOlwiOTIzMDI0ODA2NjE0OjQ5QHMud2hhdHNhcHAubmV0XCIsXCJkZXZpY2VJZFwiOjB9LFwiaWRlbnRpZmllcktleVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiQmZHZUtnSXJnQTlkNU5ySkxHcWxQWnBWbGNPdC9nS2VscUxiV1pwT2xtNDNcIn19XSxcInBsYXRmb3JtXCI6XCJhbmRyb2lkXCIsXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjoxNzEwNzAyMDc3fSIKfQ==" ;


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.0",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "_OP_",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "Ahad",
  ownername:process.env.OWNER_NAME|| "Ahad_Mehmood",


  errorChat : process.env.ERROR_CHAT || "postgres://koyeb-adm:1cswIdu2lmRU@ep-odd-cell-a25zn1tc.eu-central-1.pg.koyeb.app/koyebdb",
  KOYEB_API : process.env.KOYEB_API  || "true",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "public",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "Ahad",



};

























global.rank = "updated"
global.isMongodb = true; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "true",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "true",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "true", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "true", 
  //alwaysonline:process.env.WAPRESENCE|| "online", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "true",
  //save_status: process.env.AUTO_SAVE_STATUS || "true",
 
