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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_50_07_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDIzMixcbiAgICAgICAgNjIsXG4gICAgICAgIDg0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNDksXG4gICAgICAgIDIyOCxcbiAgICAgICAgNDMsXG4gICAgICAgIDIxLFxuICAgICAgICAyMjksXG4gICAgICAgIDE0MyxcbiAgICAgICAgNjAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNTksXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMzksXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTczLFxuICAgICAgICA1NSxcbiAgICAgICAgMixcbiAgICAgICAgMjA1LFxuICAgICAgICAyMCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTU0LFxuICAgICAgICA3LFxuICAgICAgICA2NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDczLFxuICAgICAgICA4MCxcbiAgICAgICAgNTcsXG4gICAgICAgIDMwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgODQsXG4gICAgICAgIDg1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMzMsXG4gICAgICAgIDI4LFxuICAgICAgICAxNzksXG4gICAgICAgIDE0MCxcbiAgICAgICAgOTEsXG4gICAgICAgIDIwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjA4LFxuICAgICAgICA4MyxcbiAgICAgICAgODcsXG4gICAgICAgIDYsXG4gICAgICAgIDE5NixcbiAgICAgICAgNTUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk2LFxuICAgICAgICA3NixcbiAgICAgICAgNzYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNzQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNDEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNjksXG4gICAgICAgIDIyNixcbiAgICAgICAgNDQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDIyMixcbiAgICAgICAgNTMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTE1LFxuICAgICAgICA4MCxcbiAgICAgICAgMTU0LFxuICAgICAgICA2OCxcbiAgICAgICAgMTM2LFxuICAgICAgICA3NyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDYzLFxuICAgICAgICAxMCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDg4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDExNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMDksXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNTEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNSxcbiAgICAgICAgMjcsXG4gICAgICAgIDUwLFxuICAgICAgICAyNixcbiAgICAgICAgMjAzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDEsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDU0LFxuICAgICAgICA2NCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDYwLFxuICAgICAgICAyNDksXG4gICAgICAgIDg5LFxuICAgICAgICAxODIsXG4gICAgICAgIDMxLFxuICAgICAgICAzNSxcbiAgICAgICAgODMsXG4gICAgICAgIDMyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgNTQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgOTEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTMsXG4gICAgICAgIDI0LFxuICAgICAgICAzMixcbiAgICAgICAgMTA4LFxuICAgICAgICA3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDUxLFxuICAgICAgICAyMzksXG4gICAgICAgIDY5LFxuICAgICAgICA1NyxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDksXG4gICAgICAgIDIwNixcbiAgICAgICAgMjgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTM0LFxuICAgICAgICA2NyxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMCxcbiAgICAgICAgNjMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTEsXG4gICAgICAgIDkyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyNSxcbiAgICAgICAgNzgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDM2LFxuICAgICAgICA4OSxcbiAgICAgICAgMTA5LFxuICAgICAgICA2NixcbiAgICAgICAgMjA1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDY3LFxuICAgICAgICAzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA1MSxcbiAgICAgICAgMixcbiAgICAgICAgODMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTYsXG4gICAgICAgIDIxLFxuICAgICAgICA0MyxcbiAgICAgICAgMTEwLFxuICAgICAgICA2LFxuICAgICAgICA3MyxcbiAgICAgICAgMTcsXG4gICAgICAgIDc0LFxuICAgICAgICAyNSxcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDcyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDI4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjgsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTEwLFxuICAgICAgICA5OCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxODEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMzksXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDYxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDk3LFxuICAgICAgICA2NyxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNjQsXG4gICAgICAgIDM0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDc0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDExNSxcbiAgICAgICAgMixcbiAgICAgICAgMzUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNDcsXG4gICAgICAgIDQxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDk3LFxuICAgICAgICA3MCxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTczLFxuICAgICAgICA3MCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMDksXG4gICAgICAgIDEyLFxuICAgICAgICA1MixcbiAgICAgICAgMTI1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNjAsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjAzLFxuICAgICAgICA5LFxuICAgICAgICAzNyxcbiAgICAgICAgMTcsXG4gICAgICAgIDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDY4LFxuICBcImFkdlNlY3JldEtleVwiOiBcIk40LzliR3dRckdBQ3lxbVpxUmI5ZlBjRWJObGVOVkJISXVOUkxCb1BnM0E9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInhPZ2EtNUlCUTZTUXNpX0kzSDQwNFFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZjRjZGQ2MGMtZWViOC00MDllLTg2OGUtZTUxNjA4MDYzYWJiXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyNyxcbiAgICAgIDMxLFxuICAgICAgMTkxLFxuICAgICAgNjcsXG4gICAgICA3OCxcbiAgICAgIDg5LFxuICAgICAgMTEwLFxuICAgICAgMTIsXG4gICAgICAyNTUsXG4gICAgICAxMTksXG4gICAgICAxNjcsXG4gICAgICAxMDksXG4gICAgICAxNzUsXG4gICAgICAyMjUsXG4gICAgICAxOTAsXG4gICAgICAxOTIsXG4gICAgICAyMzcsXG4gICAgICA1OCxcbiAgICAgIDE3NCxcbiAgICAgIDE5OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzNCxcbiAgICAgIDUyLFxuICAgICAgMTg5LFxuICAgICAgMjE3LFxuICAgICAgMTU5LFxuICAgICAgODIsXG4gICAgICAxOTUsXG4gICAgICAxMCxcbiAgICAgIDE0MyxcbiAgICAgIDIsXG4gICAgICA0NixcbiAgICAgIDExNyxcbiAgICAgIDE4MixcbiAgICAgIDg2LFxuICAgICAgMTgwLFxuICAgICAgODEsXG4gICAgICA3MixcbiAgICAgIDIxMCxcbiAgICAgIDExMCxcbiAgICAgIDE0NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJDMVAzUlY5R1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMTg2NjY1NjE4OjgxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIzNTEyNDI0MjYwNDE2Nzo4MUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOcmJ5NlVERVAzT3ViUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjVQbHo5aVhKZzIwcGRna1ZJdmQrbzdJZGluUnh3aDR1K3czd3lmaWRJM0U9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwidWFXZ2pFQ3MrT3Vya0xOMnNoSlR4QmN3NjYraE83YmkxRTF6M3dhUjFSSHA3SjByRThIRTVtbmlZVUpIcWhlbmtjMlFudXh6NTNhNFgvMXdjcGtGRFE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwicHppc2VPZGFldnM0U2ZCMGdNTjZVOFVRUHB4eDNnZnFpbStjdWpnbUdmVTFKbU8rWG95M3hDakNOT1dzOG96dkdkbzlPU1FLTHNDYllLVWZmQld1QkE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMTg2NjY1NjE4OjgxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxMTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDYwODY0MCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUdiWFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBR2JYLmpzb24iOiAie1wia2V5RGF0YVwiOlwiZFFaS3A4Sk9Qd21BTG56SEhmTVo1bnZXMVZYVlBCdXZYdmNSYmhrWm9Mdz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo4ODQxNDE1MjksXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


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
