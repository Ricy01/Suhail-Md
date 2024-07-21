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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_02_07_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDc5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDU0LFxuICAgICAgICA0MixcbiAgICAgICAgNzIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjI0LFxuICAgICAgICA5NSxcbiAgICAgICAgMjUyLFxuICAgICAgICA1NSxcbiAgICAgICAgMjAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgODMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgODYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMzQsXG4gICAgICAgIDYyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDkwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDI3LFxuICAgICAgICA4MCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgODAsXG4gICAgICAgIDM3LFxuICAgICAgICA4NixcbiAgICAgICAgMTAxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjE4LFxuICAgICAgICA3NCxcbiAgICAgICAgODMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNyxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgOTUsXG4gICAgICAgIDcyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDY3LFxuICAgICAgICA3MyxcbiAgICAgICAgMzUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA2MixcbiAgICAgICAgMjI3LFxuICAgICAgICA0MSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDk4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDMyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDExNixcbiAgICAgICAgMjEzLFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgODEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTUzLFxuICAgICAgICA1MyxcbiAgICAgICAgMTM3LFxuICAgICAgICA2MSxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMSxcbiAgICAgICAgMTk1LFxuICAgICAgICA5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDgyLFxuICAgICAgICA0NCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDY4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMzcsXG4gICAgICAgIDc5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIzMixcbiAgICAgICAgNzYsXG4gICAgICAgIDYwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTcwLFxuICAgICAgICA5NSxcbiAgICAgICAgNTQsXG4gICAgICAgIDIyMixcbiAgICAgICAgMzgsXG4gICAgICAgIDIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgOTMsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTI5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgODIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNTcsXG4gICAgICAgIDEzLFxuICAgICAgICA2OSxcbiAgICAgICAgMTYsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjAxLFxuICAgICAgICA2NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxODUsXG4gICAgICAgIDc5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDQ0LFxuICAgICAgICAzNCxcbiAgICAgICAgNyxcbiAgICAgICAgNSxcbiAgICAgICAgMjAyLFxuICAgICAgICA5MSxcbiAgICAgICAgODMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTc2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxODAsXG4gICAgICAgIDI4LFxuICAgICAgICA3NixcbiAgICAgICAgMCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMjksXG4gICAgICAgIDk1LFxuICAgICAgICA5MyxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNjEsXG4gICAgICAgIDkzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgzLFxuICAgICAgICAxNDksXG4gICAgICAgIDU2LFxuICAgICAgICA5NCxcbiAgICAgICAgNTAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTYsXG4gICAgICAgIDEyMixcbiAgICAgICAgODgsXG4gICAgICAgIDIzMixcbiAgICAgICAgODQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTAyLFxuICAgICAgICA4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDQxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTg2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgOTksXG4gICAgICAgIDUzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNTYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDk0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTA5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDQyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTEyLFxuICAgICAgICA3NixcbiAgICAgICAgMTg3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDMyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNTYsXG4gICAgICAgIDk0LFxuICAgICAgICAzMyxcbiAgICAgICAgOCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDkxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTk1LFxuICAgICAgICA1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNDksXG4gICAgICAgIDE2OCxcbiAgICAgICAgNTksXG4gICAgICAgIDgyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNDgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDQyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTQyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDc4LFxuICAgICAgICAxOCxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxOSxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxODMsXG4gICAgICAgIDQxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTM5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA2LFxuICBcImFkdlNlY3JldEtleVwiOiBcInNiTUpOVFZkTnFCcnNmdjJPbzhXdHNWWmFqeWtSYkVrRFdZanY0WG0xN0E9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjdodm85NmJPU0hXNTU4MTV6eXBvQndcIixcbiAgXCJwaG9uZUlkXCI6IFwiZjBlNTQ3MWYtYjAzZi00MDMxLWE4MTUtZmYxM2QyYmVhMDNiXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI0LFxuICAgICAgMTU2LFxuICAgICAgMjQ0LFxuICAgICAgMTM5LFxuICAgICAgMjksXG4gICAgICA3NSxcbiAgICAgIDIyMSxcbiAgICAgIDE0MCxcbiAgICAgIDkyLFxuICAgICAgODYsXG4gICAgICAxMzIsXG4gICAgICA0OCxcbiAgICAgIDIwMyxcbiAgICAgIDEyMyxcbiAgICAgIDYwLFxuICAgICAgMTEyLFxuICAgICAgMTI2LFxuICAgICAgMTk2LFxuICAgICAgMTYzLFxuICAgICAgMzZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTIsXG4gICAgICAxNzAsXG4gICAgICAxNjIsXG4gICAgICA2LFxuICAgICAgMTIsXG4gICAgICA4MyxcbiAgICAgIDIxMCxcbiAgICAgIDYxLFxuICAgICAgNzQsXG4gICAgICAxMzcsXG4gICAgICAxMzAsXG4gICAgICAxNSxcbiAgICAgIDIxNCxcbiAgICAgIDI0MixcbiAgICAgIDE3NyxcbiAgICAgIDEwNixcbiAgICAgIDIyMixcbiAgICAgIDc1LFxuICAgICAgMjAzLFxuICAgICAgMjM1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlIxOEhBUzVRXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTU2MjEyNjYyNzk6MTlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJSaWN5MDFcIixcbiAgICBcImxpZFwiOiBcIjQ1MjczMzE3NjYzMzY6MTlAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSUdQbXVvQkVLZis5TFFHR0FjZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJSREhSZDQ4MzJqbU1WRFNPd3ZSZDZheFRZMHU0WEo4Y0c4OWJSRElUUVZjPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjBNUmlibTNiQnNhR0FRN3RRR20yZDFWZkViM0VCc3VkNnNTdDJMN0J3ajVVajZiV2duTnk3dFNiK1lSVVFCY1ZLQUg1Nk9JVEZoNHJuR3lMSGFFM0FRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlVOS2V1Rmg5V1RrWkdNL0hxL0RyWml1SURnWVV3alFHQWU4S0doN2IvbG83Wk1FaTVkdnF3Z29DQnpOTmpiQ3NacnE4cGpuM1Bkc3lYcDFERFV1SmpRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NTYyMTI2NjI3OToxOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA4N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxNTgxMzU1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBS3prXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFLemsuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJFelN1MlhoQ0VZNGNsaC9veENuN0RvUlUrTjNZYUpsaXpoV1BVZEFyaGNRPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjQ5MTE2MTQ3MixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


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
