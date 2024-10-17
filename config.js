const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",

  sessionName:process.env.SESSION_ID || AdikaΩ, [10/17/2024 4:25 PM]
SUHAIL_14_59_10_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTYwLFxuICAgICAgICAzMyxcbiAgICAgICAgODMsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTUyLFxuICAgICAgICAxMzksXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNzcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTgyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDExLFxuICAgICAgICAyMjksXG4gICAgICAgIDI2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDMzLFxuICAgICAgICA5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxOTksXG4gICAgICAgIDAsXG4gICAgICAgIDEsXG4gICAgICAgIDcyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY3LFxuICAgICAgICAzMixcbiAgICAgICAgMTY2LFxuICAgICAgICA3OCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMzksXG4gICAgICAgIDEzMSxcbiAgICAgICAgNzMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTI2LFxuICAgICAgICAzNyxcbiAgICAgICAgMTg5LFxuICAgICAgICA1NixcbiAgICAgICAgMjQxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNzMsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDgzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgMTkxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNyxcbiAgICAgICAgMjYsXG4gICAgICAgIDg5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDc0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNjMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjM0LFxuICAgICAgICA1MSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTA0LFxuICAgICAgICAzNCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTAzLFxuICAgICAgICAyOCxcbiAgICAgICAgMTI2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNjQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjgsXG4gICAgICAgIDU5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDExMCxcbiAgICAgICAgNTgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNCxcbiAgICAgICAgMjA1LFxuICAgICAgICAyNDksXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjI1LFxuICAgICAgICA1MyxcbiAgICAgICAgMTY2LFxuICAgICAgICA3MyxcbiAgICAgICAgOTgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMTksXG4gICAgICAgIDE4NixcbiAgICAgICAgMTEsXG4gICAgICAgIDU4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDY1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMyxcbiAgICAgICAgMzAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjUxLFxuICAgICAgICA4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDksXG4gICAgICAgIDE5MixcbiAgICAgICAgMjUwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTEyLFxuICAgICAgICA0NyxcbiAgICAgICAgMTgwLFxuICAgICAgICA0MSxcbiAgICAgICAgNDUsXG4gICAgICAgIDQzLFxuICAgICAgICAzMyxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDMyLFxuICAgICAgICA5NSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNixcbiAgICAgICAgMTM1LFxuICAgICAgICAyMCxcbiAgICAgICAgOTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMyxcbiAgICAgICAgMjE5LFxuICAgICAgICA1NSxcbiAgICAgICAgMTgsXG4gICAgICAgIDIsXG4gICAgICAgIDY3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDU2LFxuICAgICAgICA3NixcbiAgICAgICAgNzAsXG4gICAgICAgIDk2LFxuICAgICAgICA2NyxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNzksXG4gICAgICAgIDQzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDEyLFxuICAgICAgICAzMCxcbiAgICAgICAgMjIsXG4gICAgICAgIDE4O

AdikaΩ, [10/17/2024 4:25 PM]
CxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTEsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjI2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNzIsXG4gICAgICAgIDdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgNzJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTE0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzEsXG4gICAgICAgIDQ3LFxuICAgICAgICAxODIsXG4gICAgICAgIDE0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNDcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNjgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTkzLFxuICAgICAgICAzNyxcbiAgICAgICAgNTIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjgsXG4gICAgICAgIDExNyxcbiAgICAgICAgNDQsXG4gICAgICAgIDI1MixcbiAgICAgICAgNjMsXG4gICAgICAgIDk2LFxuICAgICAgICAzLFxuICAgICAgICA2MyxcbiAgICAgICAgMTQ5LFxuICAgICAgICA1MSxcbiAgICAgICAgOTMsXG4gICAgICAgIDczLFxuICAgICAgICA4MCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjAzLFxuICAgICAgICA2MixcbiAgICAgICAgMTYzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDYwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDMzLFxuICAgICAgICA3OCxcbiAgICAgICAgMTY3LFxuICAgICAgICA3MyxcbiAgICAgICAgMTQ4LFxuICAgICAgICA1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMSxcbiAgICAgICAgMTk2LFxuICAgICAgICA2NyxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTg1LFxuICAgICAgICA3NixcbiAgICAgICAgMjMyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDQzLFxuICBcImFkdlNlY3JldEtleVwiOiBcImQ0WCtOMmZGMGFvMXNXVEhtOHE2THphdVhRVXlaem5sMG9jaUZMbStSUzQ9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImV2TVVxcVZTVEs2NFA3TWFQdTF1U2dcIixcbiAgXCJwaG9uZUlkXCI6IFwiNWJmNjRkMzYtMmQ4My00NWMxLWExMTYtNGEzOGJkNGNkMzVmXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQ2LFxuICAgICAgMTc5LFxuICAgICAgMjE0LFxuICAgICAgMjAwLFxuICAgICAgNzEsXG4gICAgICAxOTQsXG4gICAgICAyNTMsXG4gICAgICAyMjksXG4gICAgICAzOSxcbiAgICAgIDE2LFxuICAgICAgMTI1LFxuICAgICAgMjIxLFxuICAgICAgMTc4LFxuICAgICAgMjI2LFxuICAgICAgODIsXG4gICAgICAyMTIsXG4gICAgICAyNyxcbiAgICAgIDE5NixcbiAgICAgIDcsXG4gICAgICAxNzlcbiAgICBdXG4gIH0sXG4gI

AdikaΩ, [10/17/2024 4:25 PM]
FwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4NixcbiAgICAgIDI4LFxuICAgICAgMTczLFxuICAgICAgNSxcbiAgICAgIDI1MixcbiAgICAgIDE4MSxcbiAgICAgIDEyMSxcbiAgICAgIDIxOCxcbiAgICAgIDE0MyxcbiAgICAgIDEyNSxcbiAgICAgIDExOCxcbiAgICAgIDY4LFxuICAgICAgMjEwLFxuICAgICAgMTcsXG4gICAgICAxMDUsXG4gICAgICA0NyxcbiAgICAgIDQ0LFxuICAgICAgMjE3LFxuICAgICAgMTY1LFxuICAgICAgMjQ0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTnFuMGk0UXg4ekV1QVlZQkNBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJWREc4elhFNkFzWkpndDc1dzh4R0tDNVJFWkxkbmx4ZmEwTFZGS0VWNmdvPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIm1ucXpvcEkvK1ZJbTBCenoraUJYd25RN3hJeEdMSXcrZm4ySnlPL1UxeHFTblNXMlZ0SVV3SmdJQlJ3V2drOHpjUEhRRGFLbXVLVHdEWFNFU2FRd0FRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIndaZS9YOHB5MUZhSXplQlJoMWdWbnNZYkFxeFhpQ1BiZ3BwTy8wY3ZMN2cxYUwxTjROMFhpY2ExOGtWRVdobldlRVh3YXllQVQ4SCswWVhsUWhCVENRPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0NzAxNjUxMDcxOTo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMzc1Njc1NDI4NDk1ODI6NUBsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDcwMTY1MTA3MTk6NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDEwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJpcGhvbmVcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyOTE3NzE2MyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU40TFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTjRMLmpzb24iOiAie1wia2V5RGF0YVwiOlwiQVh0OW1oV296dld4S2M4R2lsRkdwS0liT2hFUVh2Z2ZBMys5RmdFK1BtWT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo5NzgxNzU2MixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzI5MTYwMzI1NTczXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTjROLmpzb24iOiAie1wia2V5RGF0YVwiOlwiUWJKSDc4NkR5V3g4dmtZYzYvMTFpNThodTZJRnNPb09vMEpjZkR2aEhqdz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo5NzgxNzU2MixcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzIsMF19LFwidGltZXN0YW1wXCI6XCIxNzI5MTY1Mjg0NTk2XCJ9Igp9"",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























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
 
