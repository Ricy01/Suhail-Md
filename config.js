const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_14_07_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDksXG4gICAgICAgIDkwLFxuICAgICAgICA0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMCxcbiAgICAgICAgMjksXG4gICAgICAgIDE0NixcbiAgICAgICAgMzEsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTAsXG4gICAgICAgIDgxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgOTQsXG4gICAgICAgIDUxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTQwLFxuICAgICAgICA3NCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjQxLFxuICAgICAgICA5OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDksXG4gICAgICAgIDE1LFxuICAgICAgICAyMixcbiAgICAgICAgMTg3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDg1LFxuICAgICAgICA4NixcbiAgICAgICAgMTQwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgODksXG4gICAgICAgIDEzNixcbiAgICAgICAgMTE5LFxuICAgICAgICA4MyxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMjksXG4gICAgICAgIDEzMixcbiAgICAgICAgMTg1LFxuICAgICAgICA0MCxcbiAgICAgICAgMjQwLFxuICAgICAgICA5MCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDc3LFxuICAgICAgICAyMzksXG4gICAgICAgIDIyNixcbiAgICAgICAgMSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDI4LFxuICAgICAgICA4LFxuICAgICAgICA0NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDY3LFxuICAgICAgICA0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTg1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDExNixcbiAgICAgICAgMTI0LFxuICAgICAgICA2NSxcbiAgICAgICAgNDQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgODcsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTg4LFxuICAgICAgICA0NSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxOSxcbiAgICAgICAgMTQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDM0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNDUsXG4gICAgICAgIDY0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMSxcbiAgICAgICAgNzYsXG4gICAgICAgIDU3LFxuICAgICAgICA0MCxcbiAgICAgICAgMTMsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTM3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTczLFxuICAgICAgICAxNTMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgOTEsXG4gICAgICAgIDY2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNjIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDk5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDI1LFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgMjE1LFxuICAgICAgICA0NSxcbiAgICAgICAgMzUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTEyLFxuICAgICAgICAzOCxcbiAgICAgICAgMjIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjE5LFxuICAgICAgICA1NyxcbiAgICAgICAgMTksXG4gICAgICAgIDEzMixcbiAgICAgICAgMjQzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMjksXG4gICAgICAgIDIzMixcbiAgICAgICAgNTgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTU3LFxuICAgICAgICA5NixcbiAgICAgICAgMjMsXG4gICAgICAgIDYyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDg0LFxuICAgICAgICAxODUsXG4gICAgICAgIDEyMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MSxcbiAgICAgICAgMjYsXG4gICAgICAgIDIyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTQsXG4gICAgICAgIDk3LFxuICAgICAgICAxODgsXG4gICAgICAgIDE3MixcbiAgICAgICAgMzYsXG4gICAgICAgIDUwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMzEsXG4gICAgICAgIDExNixcbiAgICAgICAgMTkxLFxuICAgICAgICAyOCxcbiAgICAgICAgNDksXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMzksXG4gICAgICAgIDEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNTcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgODAsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMzMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNjJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDcwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgNTJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDUxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDM5LFxuICAgICAgICA4MCxcbiAgICAgICAgMjIsXG4gICAgICAgIDkwLFxuICAgICAgICA5NSxcbiAgICAgICAgMSxcbiAgICAgICAgNjYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjIzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDY1LFxuICAgICAgICA2OSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMDksXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTQzLFxuICAgICAgICA0NixcbiAgICAgICAgMjA4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgOTksXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTgwLFxuICAgICAgICA4MyxcbiAgICAgICAgNTksXG4gICAgICAgIDEyOCxcbiAgICAgICAgODAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgOTAsXG4gICAgICAgIDk4LFxuICAgICAgICAzMixcbiAgICAgICAgMjIwLFxuICAgICAgICA2NSxcbiAgICAgICAgMTIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMCxcbiAgICAgICAgMzEsXG4gICAgICAgIDEyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgOTgsXG4gICAgICAgIDM5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDM5LFxuICAgICAgICAzNSxcbiAgICAgICAgNTIsXG4gICAgICAgIDY4LFxuICAgICAgICA2NixcbiAgICAgICAgMTcxLFxuICAgICAgICA0MSxcbiAgICAgICAgMjYsXG4gICAgICAgIDk2LFxuICAgICAgICA1NyxcbiAgICAgICAgMTEzLFxuICAgICAgICA2MCxcbiAgICAgICAgMTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE3MixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ2SW9YUlMrUmtEeGQyQWxWRTNESnNvT01VcDdwYnNHRFVqclFqVFo5b0gwPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJYMk1Tc0FzdlJENkI0SmxweWFUMXdBXCIsXG4gIFwicGhvbmVJZFwiOiBcImEyYTViZDgyLTRiMTMtNDY5Yy04YjU4LWE5YTJlYjdmMDc0NFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5MCxcbiAgICAgIDMxLFxuICAgICAgODAsXG4gICAgICAyNDgsXG4gICAgICAxNDUsXG4gICAgICAxMjgsXG4gICAgICA1MCxcbiAgICAgIDE5NCxcbiAgICAgIDIzMCxcbiAgICAgIDkwLFxuICAgICAgNzMsXG4gICAgICAyNDQsXG4gICAgICAyMDcsXG4gICAgICAyMSxcbiAgICAgIDQwLFxuICAgICAgMTIsXG4gICAgICAxODcsXG4gICAgICAyMTcsXG4gICAgICA0NyxcbiAgICAgIDNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODIsXG4gICAgICAxMTgsXG4gICAgICA4OCxcbiAgICAgIDM2LFxuICAgICAgODEsXG4gICAgICAxMzgsXG4gICAgICAyMDgsXG4gICAgICA4OSxcbiAgICAgIDEwNSxcbiAgICAgIDEyNixcbiAgICAgIDIxNixcbiAgICAgIDIzOSxcbiAgICAgIDMwLFxuICAgICAgMjM4LFxuICAgICAgMjE5LFxuICAgICAgNDcsXG4gICAgICAxMTQsXG4gICAgICAyMzQsXG4gICAgICAxNjIsXG4gICAgICA1MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIyMUMzWkNESFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU1NjIxMjY2Mjc5OjIwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiUmljeTAxXCIsXG4gICAgXCJsaWRcIjogXCI0NTI3MzMxNzY2MzM2OjIwQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0lHUG11b0JFSkc4OWJRR0dBZ2dBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiUkRIUmQ0ODMyam1NVkRTT3d2UmQ2YXhUWTB1NFhKOGNHODliUkRJVFFWYz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI5UUZVaFI4d25GaUhxSjk5UVo3VktlTWZlb1B2c1FBelNCcGtLSDd3Z2JGMnFTSURvT3kvdGpVemtMOXBaajNQam5tVDhoUURRRDBCOElzQVFyR2FBQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJiUHlFT05ZZVZ0czc3ZzJNc1plc3NNemFrR3hIOVZILzB0d2N3bjRqeW1TcW5PTUxWRGtEcVR1ZmthL21yTUM3MDlQRU9yanFleGkvV3dzV0J4NjBBZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTU2MjEyNjYyNzk6MjBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgODdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTU4OTI2OSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUt6a1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBS3prLmpzb24iOiAie1wia2V5RGF0YVwiOlwiRXpTdTJYaENFWTRjbGgvb3hDbjdEb1JVK04zWWFKbGl6aFdQVWRBcmhjUT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo0OTExNjE0NzIsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
