// credit : BangHasan & Aghisna & Bagus Setiawan

const button = lumpia.button;
const markup = lumpia.markup;
const helper = lumpia.helper;

// perintah start
bot.start(ctx => {

  let nama = ctx.from.first_name;
  if (ctx.from.last_name) nama += ' ' + ctx.from.last_name;

  // cleansing nama biar tidak error karakter khusus HTML
  nama = helper.clearHTML(nama);

  let pesan = `Assalamu\'alaykum <b>${nama}</b>,\n\nPerkenalkan Saya Bot Yang dibuat Oleh\s<b>Opu</b>!\n\nDi Versi Awal ini saya hanya dimasukkan fitur pencarian Jadwal Sholat di Daerah Mu`;

  // menu keyboard inline
  let keyboard = [];

  // baris pertama
  // diawali dengan index 0
  keyboard[0] = [
    button.url('📚 Lumpia Framework', 'https://lumpia.js.org'),
    button.url('🕋 @Imsyakiyah Dumai', 'https://t.me/imsyakiyahdumai')
  ];

  // baris kedua
  keyboard[1] = [
    button.text('🕋Jadwal Sholat', 'me_sholat'),
    button.text('😄 Assalamu\'alaikum', 'me_halo'),
    button.text('👍🏻 Apa kabar?', 'me_kabar')
  ];

  ctx.replyWithHTML(pesan, {
    reply_markup: markup.inlineKeyboard(keyboard)
  });

})

bot.action('me_sholat', ctx => ctx.replyWithHTML('Cara Menggunakan:\n<code>/sholat lokasi(kab/kota)</code>\n\ncontoh:\n<code>/sholat Dumai</code>\n\nAtau\n\n<code>/Sholat bengkalis</code>'))
bot.action('me_halo', ctx => ctx.answerCallbackQuery('Wa\'alaykumsalam Warahmatullahi Wabarokatuh!'))
bot.action('me_kabar', ctx => ctx.answerCallbackQuery('💪🏻💪🏻 Tetap semangat Kawan!'));

