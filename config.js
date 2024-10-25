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

  sessionName:process.env.SESSION_ID || "SUHAIL_16_03_10_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICA5MSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxOTksXG4gICAgICAgIDE0OSxcbiAgICAgICAgNjEsXG4gICAgICAgIDYxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNzUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgOTIsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjQ4LFxuICAgICAgICA2OSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE1LFxuICAgICAgICA4NCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDczLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNTAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDgwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg0LFxuICAgICAgICA3OCxcbiAgICAgICAgODksXG4gICAgICAgIDYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNTUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgODUsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTE2LFxuICAgICAgICAxNixcbiAgICAgICAgNDcsXG4gICAgICAgIDUxLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDI2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNDUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMixcbiAgICAgICAgMTI3LFxuICAgICAgICA1LFxuICAgICAgICAxMixcbiAgICAgICAgMTU3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAxODYsXG4gICAgICAgIDIxNixcbiAgICAgICAgODYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNDksXG4gICAgICAgIDI0NSxcbiAgICAgICAgNTIsXG4gICAgICAgIDc0LFxuICAgICAgICA0MSxcbiAgICAgICAgMjMzLFxuICAgICAgICA0MSxcbiAgICAgICAgMjU1LFxuICAgICAgICAyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDExMSxcbiAgICAgICAgNzAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNTcsXG4gICAgICAgIDYsXG4gICAgICAgIDc4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDY0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDk4LFxuICAgICAgICA3MixcbiAgICAgICAgNzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMCxcbiAgICAgICAgNjgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTk1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgOTEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjA0LFxuICAgICAgICA2MixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxOSxcbiAgICAgICAgOTAsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTQ2LFxuICAgICAgICA0NyxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMTksXG4gICAgICAgIDc1LFxuICAgICAgICA0OCxcbiAgICAgICAgMTg0LFxuICAgICAgICA1NCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDY3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDU3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjI0LFxuICAgICAgICAxODcsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTg3LFxuICAgICAgICA4NyxcbiAgICAgICAgMjMxLFxuICAgICAgICA5MSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxLFxuICAgICAgICAyMixcbiAgICAgICAgMTgxLFxuICAgICAgICAxODksXG4gICAgICAgIDEwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTMyLFxuICAgICAgICA3NixcbiAgICAgICAgMTE5LFxuICAgICAgICAxNixcbiAgICAgICAgMTczLFxuICAgICAgICAzMCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDYyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDY4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTgsXG4gICAgICAgIDM5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIwLFxuICAgICAgICA2MCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE1MixcbiAgICAgICAgNixcbiAgICAgICAgMjI0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMzcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNjQsXG4gICAgICAgIDE2LFxuICAgICAgICAyNyxcbiAgICAgICAgMzQsXG4gICAgICAgIDY4LFxuICAgICAgICA2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDM2LFxuICAgICAgICAyMyxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgOTFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTEwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAxNCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDgyLFxuICAgICAgICA1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDcwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjIxLFxuICAgICAgICA4OSxcbiAgICAgICAgMTY2LFxuICAgICAgICA1MCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE2MixcbiAgICAgICAgMixcbiAgICAgICAgODgsXG4gICAgICAgIDM0LFxuICAgICAgICA3OCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDI3LFxuICAgICAgICAyMzksXG4gICAgICAgIDIzNixcbiAgICAgICAgMTAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNDIsXG4gICAgICAgIDQ2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDgxLFxuICAgICAgICA4OCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgODQsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDQzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxLFxuICAgICAgICAzOSxcbiAgICAgICAgMjcsXG4gICAgICAgIDEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMixcbiAgICAgICAgNDYsXG4gICAgICAgIDE0MixcbiAgICAgICAgNDgsXG4gICAgICAgIDAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDU3LFxuICBcImFkdlNlY3JldEtleVwiOiBcInprUE83OE5BeGpQaS8ybysxa0QzTW01QTFwNEI2UG5DNEZERWR3YzdCMmM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlk5QXpaQnBaU1RTbzZCZVhZN0p1N2dcIixcbiAgXCJwaG9uZUlkXCI6IFwiYWY1YjI0MjktMzU2ZS00ZDBhLWI0ZWQtZjlmNjMwMTIwZTI1XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzNCxcbiAgICAgIDkyLFxuICAgICAgMTgsXG4gICAgICAxMCxcbiAgICAgIDE4NyxcbiAgICAgIDMwLFxuICAgICAgMTMsXG4gICAgICAxMyxcbiAgICAgIDE3NixcbiAgICAgIDIyMyxcbiAgICAgIDEwOCxcbiAgICAgIDE5NCxcbiAgICAgIDE3NyxcbiAgICAgIDQ1LFxuICAgICAgMjI5LFxuICAgICAgMTQwLFxuICAgICAgMTk5LFxuICAgICAgMTY3LFxuICAgICAgMTM1LFxuICAgICAgMTc2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0NSxcbiAgICAgIDg4LFxuICAgICAgMTI1LFxuICAgICAgMjIsXG4gICAgICA4MyxcbiAgICAgIDE5OCxcbiAgICAgIDE5LFxuICAgICAgMTUyLFxuICAgICAgMTczLFxuICAgICAgMTQ3LFxuICAgICAgMjE5LFxuICAgICAgMTMwLFxuICAgICAgODQsXG4gICAgICA5NCxcbiAgICAgIDEzOCxcbiAgICAgIDE3MyxcbiAgICAgIDQyLFxuICAgICAgODAsXG4gICAgICAxMTMsXG4gICAgICAxODVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNTExR1RZODlcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzE5MzU1MTU2MDoxN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIuGAr+Gqs8aszaLwnZqRyZnNjl/Nm+G0i+C5gOC4oMmg4oG14oG24oGw4YC+4aqzXCIsXG4gICAgXCJsaWRcIjogXCI4MTI5NTYyNzUyMjEzMToxN0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQL0V5UllRem9MdnVBWVlBU0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImhrbGdGZXlWS0hHRnhUdjBON0FmMi85a2ErOGVqWUtUUytPMllCbXV2UzQ9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiRkJvMElYZWRjVENlb2dvU1hpd2pFaUpaTGpyWmN2a2xwV21ZUzhWVmZ3QXg5Umc2eDlCUVZqamRGa2pkNTNqcDR0SmR3azRSdG51ZjE4Yi9ZWHBFQ2c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiWDlMaDc0eUhkdVlJZnlpRzBDOXV3VnRhbkxJdTFPKzRWejlua3E0UGVNNG8xckJURE5MWGhiN2ZaWjIrdW4zQi9vNVhzT1lKUmhreFZiQ1lNRzlKREE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMTkzNTUxNTYwOjE3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA0NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI5ODcyMjA5LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSnE5XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFKcTkuanNvbiI6IHt9Cn0=",  // PUT SESSION ID HERE 
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
 
