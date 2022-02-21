
bot.cmd('ping', ctx => ctx.replyIt('Puongg'));

bot.hears(['Hai', 'Hi', 'woi', 'hai', 'Hello', 'hello'], ctx => ctx.replyIt('Hai Juga'));

bot.cmd("help", ctx => ctx.replyIt("penggunaan:\n<code>/sholat lokasi(kab/kota)</code>\n\ncontoh:\n<code>/sholat Dumai</code>", { parse_mode: "HTML" }));

bot.hears(/[!/.]sholat (.*)/i, (ctx) => ctx.replyIt(cariInfoSholat(ctx.match[1]), { parse_mode: "HTML" }));
