module.exports.config = {
 name: "antiout",
 eventType: ["log:unsubscribe"],
 version: "0.0.1",
 credits: "Nazrul",
 description: "Listen events Notify bot or group member with random gif/photo/video"
};

module.exports.run = async({ event, api, Threads, Users }) => {
 let data = (await Threads.getData(event.threadID)).data || {};
 if (data.antiout == false) return;
 if (event.logMessageData.leftParticipantFbId == api.getCurrentUserID()) return;
 const name = global.data.userName.get(event.logMessageData.leftParticipantFbId) || await Users.getNameUser(event.logMessageData.leftParticipantFbId);
 const type = (event.author == event.logMessageData.leftParticipantFbId) ? "self-separation" : "being kicked by the administrator";
 if (type == "self-separation") {
  api.addUserToGroup(event.logMessageData.leftParticipantFbId, event.threadID, (error, info) => {
   if (error) {
    api.sendMessage(`সরি বস 😞😞\n${name}\nBlock করছে অথবা তার I'd তে ম্যানেজার অপশন On তাই Add করতে পারলাম না❌\n⋆✦⎯⎯⎯⎯⎯⎯⎯⎯✦⋆\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 ➢ 𝗝𝗢𝗪𝗘𝗟 𝗫𝗛𝗢𝗪𝗗𝗨𝗥𝗬`, event.threadID)
   } else api.sendMessage(`লিফ্ট নেওয়া  ${name}  গরু চোর কে পুনরায় Add করা হইছে✅\n⋆✦⎯⎯⎯⎯⎯⎯⎯⎯✦⋆\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 ➢ 𝗝𝗢𝗪𝗘𝗟 𝗫𝗛𝗢𝗪𝗗𝗨𝗥𝗬`,

 event.threadID);
  })
 }
}
