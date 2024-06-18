const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""  // put your app url here,
global.email ="opffhere99@gmail.com"
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL 37 17 ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjEzLFxuICAgICAgICA2MSxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgODksXG4gICAgICAgIDkzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDg4LFxuICAgICAgICA5NyxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgODcsXG4gICAgICAgIDYsXG4gICAgICAgIDYzLFxuICAgICAgICAyNixcbiAgICAgICAgMTMwLFxuICAgICAgICA0MyxcbiAgICAgICAgOTcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDg1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQxLFxuICAgICAgICA2NyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDk5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNzYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDQ5LFxuICAgICAgICA1OCxcbiAgICAgICAgMjQwLFxuICAgICAgICA3OCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNzksXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjAzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDc5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDcwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDQsXG4gICAgICAgIDUyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDUxLFxuICAgICAgICA0NyxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTIsXG4gICAgICAgIDI5LFxuICAgICAgICAxMjksXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjIsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTk2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDk4LFxuICAgICAgICA1OSxcbiAgICAgICAgMzYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgODIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMzMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDYyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDU5LFxuICAgICAgICA5NCxcbiAgICAgICAgMjEsXG4gICAgICAgIDg1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDY1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcxLFxuICAgICAgICAxMjksXG4gICAgICAgIDM3LFxuICAgICAgICAxMixcbiAgICAgICAgMixcbiAgICAgICAgMjAxLFxuICAgICAgICA3MSxcbiAgICAgICAgMTEwLFxuICAgICAgICA3MixcbiAgICAgICAgNzgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjE2LFxuICAgICAgICA4MixcbiAgICAgICAgMTU4LFxuICAgICAgICA5NSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTM3LFxuICAgICAgICA0OSxcbiAgICAgICAgODUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTU3LFxuICAgICAgICAzMixcbiAgICAgICAgMjUsXG4gICAgICAgIDg4LFxuICAgICAgICAxNjksXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTIzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDUxLFxuICAgICAgICA2MSxcbiAgICAgICAgNzAsXG4gICAgICAgIDczLFxuICAgICAgICAxNTYsXG4gICAgICAgIDM3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMzIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA0MyxcbiAgICAgICAgMTg5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMDksXG4gICAgICAgIDU3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNTAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNzUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNTcsXG4gICAgICAgIDg0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDI0MixcbiAgICAgICAgNDcsXG4gICAgICAgIDEwM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDYyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMzUsXG4gICAgICAgIDYsXG4gICAgICAgIDYxLFxuICAgICAgICAwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDU5LFxuICAgICAgICAyMTksXG4gICAgICAgIDkyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE0LFxuICAgICAgICAxMTksXG4gICAgICAgIDQ1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDU5LFxuICAgICAgICA5NCxcbiAgICAgICAgMjgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTEsXG4gICAgICAgIDc4LFxuICAgICAgICAxNCxcbiAgICAgICAgOTQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjEwLFxuICAgICAgICA4MSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxMTdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgNixcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDI4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTQsXG4gICAgICAgIDkxLFxuICAgICAgICA4MCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDM4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDUyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDg2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMzcsXG4gICAgICAgIDc0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE1NixcbiAgICAgICAgMzEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxOTksXG4gICAgICAgIDE3NixcbiAgICAgICAgOCxcbiAgICAgICAgMTUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTY0LFxuICAgICAgICA1OSxcbiAgICAgICAgMzcsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTksXG4gICAgICAgIDksXG4gICAgICAgIDYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNDAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjMwLFxuICAgICAgICA3MyxcbiAgICAgICAgNDQsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjgsXG4gICAgICAgIDExLFxuICAgICAgICAxMDksXG4gICAgICAgIDE1LFxuICAgICAgICA2OCxcbiAgICAgICAgMTEsXG4gICAgICAgIDU4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjUzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDYyLFxuICAgICAgICAyNDksXG4gICAgICAgIDE5OSxcbiAgICAgICAgODgsXG4gICAgICAgIDEyMixcbiAgICAgICAgNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjMzLFxuICBcImFkdlNlY3JldEtleVwiOiBcIkJ4MVdkYzFQNkNHUGVFNVIzM2xvdTdKamk4UGhhcXlTajdWMlFWZTZkQzA9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjBhNXJNV0tnUnUyZEFiTDlva0RRc2dcIixcbiAgXCJwaG9uZUlkXCI6IFwiYTFlM2E3ZTUtOTIwMC00MTdmLThjOTUtMGM3MzU2MzU3YmY1XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0MyxcbiAgICAgIDIwNixcbiAgICAgIDE1NCxcbiAgICAgIDI0NCxcbiAgICAgIDE2MCxcbiAgICAgIDc3LFxuICAgICAgMjQ2LFxuICAgICAgMzEsXG4gICAgICA1MyxcbiAgICAgIDY2LFxuICAgICAgMjMyLFxuICAgICAgMTM4LFxuICAgICAgOTEsXG4gICAgICAyMjgsXG4gICAgICAxNTgsXG4gICAgICAxMzAsXG4gICAgICA1NSxcbiAgICAgIDI1MSxcbiAgICAgIDE1MixcbiAgICAgIDIwNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzQsXG4gICAgICA0LFxuICAgICAgNixcbiAgICAgIDk2LFxuICAgICAgMTY1LFxuICAgICAgMTA5LFxuICAgICAgNTMsXG4gICAgICAxOTMsXG4gICAgICA1MSxcbiAgICAgIDE4MixcbiAgICAgIDE5MixcbiAgICAgIDEwOCxcbiAgICAgIDE2NixcbiAgICAgIDE5MixcbiAgICAgIDk1LFxuICAgICAgMjQsXG4gICAgICAxNCxcbiAgICAgIDI1MSxcbiAgICAgIDEwOSxcbiAgICAgIDQwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUFN4MDVvRUVJVGN3TE1HR0FZZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJmMGQzaFBQbVloTjNwcTJNbmJRREprTklhNU9lanhUR3ZLWXhkK0xlQXd3PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjJURGEzUjl5WkVpSUt3eGE2Tm9kOGJZSXEyNHFHN1Z1OHJBSkVmMkRqV1VVMG5tU2lLaUhHRVV2OVZvRWZ6UnBJRkdBbmpUbm9keTlEUWRuUnA0REFRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkVGSWJsYVhzVk9wVm80cDd6ZTJtL2xpODJuSlZYSit2VzJXSi9sanBMdDVSbVA2cU9JZXlEUlFWd2QwdEtFa0lkSjM5cjlJd002QnpKekRRcUk2QkJ3PT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzNDA0ODEyMDk3OjI1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI5MTY1NTA4ODY4OTE5NjoyNUBsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzQwNDgxMjA5NzoyNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE4NjI3ODQ5XG59Igp9
" ;


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.0",
  caption : process.env.CAPTION || "©ahad²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
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
 
