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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_01_43_06_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDExLFxuICAgICAgICA0NyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDYzLFxuICAgICAgICA0OCxcbiAgICAgICAgOTgsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDQsXG4gICAgICAgIDY3LFxuICAgICAgICAyMCxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDk3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDcxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyNCxcbiAgICAgICAgMjgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjYsXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5MixcbiAgICAgICAgMTAxLFxuICAgICAgICAzOCxcbiAgICAgICAgNDMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDExLFxuICAgICAgICAxODAsXG4gICAgICAgIDQzLFxuICAgICAgICAzMixcbiAgICAgICAgMjE5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDk1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNTAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjExLFxuICAgICAgICAxNzEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTIxLFxuICAgICAgICA1NixcbiAgICAgICAgNzIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDkxLFxuICAgICAgICA2NCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyNSxcbiAgICAgICAgMTA2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjAsXG4gICAgICAgIDM0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDY0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNjUsXG4gICAgICAgIDI4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDk1LFxuICAgICAgICA0OSxcbiAgICAgICAgMzEsXG4gICAgICAgIDc0LFxuICAgICAgICA5MixcbiAgICAgICAgNixcbiAgICAgICAgMjEwLFxuICAgICAgICA5OSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMzMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjEsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjE2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDcsXG4gICAgICAgIDI5LFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTYzLFxuICAgICAgICA1NCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTQzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDQyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxODQsXG4gICAgICAgIDI0LFxuICAgICAgICAxODQsXG4gICAgICAgIDEzMixcbiAgICAgICAgNzcsXG4gICAgICAgIDExOCxcbiAgICAgICAgOTEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTUsXG4gICAgICAgIDEzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgODIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjMyLFxuICAgICAgICAxODUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTI5LFxuICAgICAgICA1OSxcbiAgICAgICAgMzEsXG4gICAgICAgIDY3LFxuICAgICAgICA1OCxcbiAgICAgICAgMTkwLFxuICAgICAgICA5NyxcbiAgICAgICAgMTgyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNzgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNjYsXG4gICAgICAgIDg5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTA3LFxuICAgICAgICAxMjFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTIsXG4gICAgICAgIDIzLFxuICAgICAgICA4NyxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNzksXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjI4LFxuICAgICAgICA2OCxcbiAgICAgICAgMTY4LFxuICAgICAgICA3NCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDkwLFxuICAgICAgICAyLFxuICAgICAgICA4OCxcbiAgICAgICAgMTMwLFxuICAgICAgICA3MSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMyxcbiAgICAgICAgMjgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTczLFxuICAgICAgICAyMTQsXG4gICAgICAgIDYsXG4gICAgICAgIDg2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMDksXG4gICAgICAgIDc0LFxuICAgICAgICAxNjksXG4gICAgICAgIDE5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzMixcbiAgICAgICAgICA3MixcbiAgICAgICAgICA1NixcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTA4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQzLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgMjQ2LFxuICAgICAgICA0OCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMixcbiAgICAgICAgNTYsXG4gICAgICAgIDExOCxcbiAgICAgICAgNDQsXG4gICAgICAgIDIzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTgyLFxuICAgICAgICA0NixcbiAgICAgICAgMTY4LFxuICAgICAgICA3NixcbiAgICAgICAgNDksXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNjYsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjE1LFxuICAgICAgICAxNCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDExNSxcbiAgICAgICAgODYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDk1LFxuICAgICAgICA2NSxcbiAgICAgICAgMjU0LFxuICAgICAgICA2MSxcbiAgICAgICAgODUsXG4gICAgICAgIDI2LFxuICAgICAgICA3MyxcbiAgICAgICAgNzYsXG4gICAgICAgIDk5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDUxLFxuICAgICAgICA3NCxcbiAgICAgICAgMTcsXG4gICAgICAgIDExMyxcbiAgICAgICAgNzMsXG4gICAgICAgIDgyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDg2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDc0LFxuICAgICAgICA1NyxcbiAgICAgICAgMjM3LFxuICAgICAgICA2NixcbiAgICAgICAgMjQwLFxuICAgICAgICA3NixcbiAgICAgICAgMTAsXG4gICAgICAgIDc2LFxuICAgICAgICA0MCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE5MixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJhUy9zbzFQNVFBRHFma1d5bW9BTmtYWmVlL0x5K3BXTHI3cEoxWlhKT2pFPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJPMWUxRk5LRFRIaThZQlp6a01IaTFRXCIsXG4gIFwicGhvbmVJZFwiOiBcImNkMzY5YmRkLTIwMDMtNDRjOS04YjgyLTA5YWI2YWRlZTQyNlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOCxcbiAgICAgIDc5LFxuICAgICAgNzcsXG4gICAgICA4NyxcbiAgICAgIDE0NSxcbiAgICAgIDE0MyxcbiAgICAgIDE0MixcbiAgICAgIDQyLFxuICAgICAgNixcbiAgICAgIDE0MSxcbiAgICAgIDQyLFxuICAgICAgMjA2LFxuICAgICAgMTMsXG4gICAgICAyMTEsXG4gICAgICAxOTQsXG4gICAgICAxNDgsXG4gICAgICAxNjQsXG4gICAgICAxMjAsXG4gICAgICAxNzAsXG4gICAgICA3NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0NCxcbiAgICAgIDE3MCxcbiAgICAgIDIyNixcbiAgICAgIDEzOSxcbiAgICAgIDc3LFxuICAgICAgMTQ5LFxuICAgICAgNzUsXG4gICAgICAxOCxcbiAgICAgIDE4NixcbiAgICAgIDE3MixcbiAgICAgIDE0NixcbiAgICAgIDIyMyxcbiAgICAgIDE2OCxcbiAgICAgIDE3NyxcbiAgICAgIDExLFxuICAgICAgMzksXG4gICAgICAxMDAsXG4gICAgICAzOSxcbiAgICAgIDIxOCxcbiAgICAgIDU5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIko0REU3SkRRXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjM0MDQ4MTIwOTc6MjBAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjkxNjU1MDg4Njg5MTk2OjIwQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BTeDA1b0VFTENwdnJNR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiZjBkM2hQUG1ZaE4zcHEyTW5iUURKa05JYTVPZWp4VEd2S1l4ZCtMZUF3dz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIxQkp3NGVhb0RwbzBJZWpXZC9EZzRDQjhUU0VlaGVia1BlREpTWm40NUUvbEg1NDJ3Ry8xSE5XY3NURjh1WUxGVkpsbkFKTW4wM0M3cGJJRWx4L0dCdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJoSk9pMTR1bllmbUJqQ2RMVjVFR211Wjljd3hmOGxKVzNaeUhpOUN3N2hBMDNCcHJmMGtyU2hEc2JGZnhMeEpTelhBYTJHZUduMzFHem5MZUEzM2NoUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjM0MDQ4MTIwOTc6MjBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxODU4ODU5NSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU1NOFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTU04Lmpzb24iOiAie1wia2V5RGF0YVwiOlwibUFkYmtwWmJUTjhxR2hCWWxQWXBQeGU1MGV4OEV4eStLWnFkSWd6MXgrYz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMTI5NjM0MDM2LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTg1ODg2MDE1NDdcIn0iCn0=" ;


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
 
