let handler = async (m, { conn, command, text }) => {
let love = `
*༒︎..👑┇❯ مـرحــبـا یــا ${taguser}*
*✥━─━⌬ 𝒎𝒆𝒈𝒐_𝒃𝒐𝒕 ⌬━─━✥*
*༒︎..≼🏰≽ قـسـم المجموعات╿↶*
*⋄━───═◞⬪⋇⬪◟═───━⋄*
༒︎..🔕╎❯ .جروبي⌉
༒︎..🔕╎❯ .معلوم_الجروب⌉
༒︎..🔕╎❯ .منشن⌉
༒︎..🔕╎❯ .مخفي⌉
༒︎..🔕╎❯ .طرد⌉
༒︎..🔕╎❯ .اضافه⌉
༒︎..🔕╎❯ .ترقيه⌉
༒︎..🔕╎❯ .خفض⌉
༒︎..🔕╎❯ .حذف⌉
༒︎..🔕╎❯ .جروب⌉
༒︎..🔕╎❯ .تغير_المغادره⌉
༒︎..🔕╎❯ .تغير_الدخول⌉
༒︎..🔕╎❯ .تغييرالصورة⌉
༒︎..🔕╎❯ .تغيير_الوصف⌉
༒︎..🔕╎❯ .تغيير_الاسم⌉
༒︎..🔕╎❯ .لينك⌉
༒︎..🔕╎❯ .رستر⌉
༒︎..🔕╎❯ .المشرفين⌉
༒︎..🔕╎❯ .انذار⌉
༒︎..🔕╎❯ .الغاء_الانذار ⌉
༒︎..🔕╎❯ .الانذارات⌉
*✥━─━⌬ 𝒎𝒆𝒈𝒐_𝒃𝒐𝒕 ⌬━─━✥*
 `.trim()
m.reply(love, null, { mentions: conn.parseMention(love) })}
handler.help = ['love']
handler.tags = ['fun']
handler.command = /^(الجروب)$/i
export default handler
