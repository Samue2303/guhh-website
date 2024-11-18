// Menampilkan teks dengan animasi masuk
const textButton = document.getElementById("textButton");
const textContent = document.getElementById("textContent");
const text = `Hai! Chamomile, eh Caca, eh Caca itu nama panggilan dari mama, maksudku sayang, ehh kok sayang, Chamomile? Begitu kah? Atau panggil Cha aja? Apa cipluk? Hehehe maaff, maaaf yaa aku buat ini pake ai soalnya aku gada basic untuk coding hehehe maaf yaa. Maaf juga slalu buat masalah dan slalu buat kamu ga mood, aku minta maaf yaa, okeii? Ohh iya apa kamuu bisa balik kayak duluu?? kalau bisa Alhamdulillah tapi kalau gabisa sih...🤔. Gapapa kok itu hak mu dan oh iyaa, tauu ga?? 🗣️ : gatau lah kocak
ehh iya ya kan aku belum kasih tau😔 hehehe maaaf kalau garing hehehe.. mau tau ga kalauu aku syaang sama kamuu sampai kapanpun, ehh iya kalau kita jadi baikan dan kamu kayak dulu lagi sayangg maaf ya belum bisa ketemu kamu, nantii mas usahakan buat ketemu kamuu hehehe, ntah bagaimana pun itu caranya tetap mass akan usahakan, nantii mass nabung duluu tapi hehehe😅, biar bisa jajanin kamuuu masa ajak anak orangg tidaa di jajanin 😭, Dann maaf yaa belum bisa beliin ini itu karena ekonomi ku juga masihh di buaaawaahhh bangett 📉, jadii maaff belum bisa meratukan kamuu, TAPIII!!! tapii nantii kalau mass sudaaa kerjaa dannnnn.... kita baikan dan kayak dulu lagii mass janji akan meratukan kamuuu, dannn lamarrr kamuu 💍 tapii tunggu sebulan yaaahhh okeii???dan kalau sudah melamar dan masss kerjaaa dulu sampaii bisa melunasi hutang hutang keluarga masss dan mass sudaa siap dalam segala hal dari modal untuk nantii habis nikah,ekonomi, mental, dan sudahh bisa bertanggung jawab buat kamuu masss akan langsung menikah.. okeii?? heheehee maafff ya prosesss nyaa mass lamaa bangett heheheh, tapi kalau kamu mau nyari yang lain gapapa, itu hak mu kokk🙆🏻‍♂️ mass cuman hanya mencobaaaa meratukan sajaaa, dann kenapaa mass sayang sama kamuu?? karenaa tempat mass bercerita,menangis,manja cumann sama kamuu, yaaa... mas tau mas ada mama,papa,bunda tapi kan tidakk mungkin, mamaa sibuk kerja di sana buat menafkahi mamaa sendirii, papaa sibukk menafkahi kami yang di jawaa, bunda? hehee mass gabisa kalau nangiss ke bunda, sebenarnya papa dan mama juga mass gamungkin menangiss karena masss harusss kuat, masa hanya segini mass menangis? kan ga mungkin, jadii mass sayangg sama kamuu ya begituu, mass akan tunggu besokk yaaa sayangg, jawaban dari kamuu hehehe, love you ciplukku 💞💞💞.`;

textButton.addEventListener("click", () => {
  textContent.innerText = text; // Set isi teks
  textContent.classList.remove("hidden"); // Tampilkan teks
  textContent.classList.add("visible"); // Tambahkan animasi masuk

  // Setelah 8 detik, sembunyikan teks
  setTimeout(() => {
    textContent.classList.remove("visible");
    textContent.classList.add("hidden");
    textContent.innerText = ""; // Bersihkan isi teks
  }, 8000);
});

// Menampilkan foto dengan animasi masuk
const photoButton = document.getElementById("photoButton");
const photoContent = document.getElementById("photoContent");

photoButton.addEventListener("click", () => {
  photoContent.classList.remove("hidden");
  photoContent.classList.add("visible"); // Tambahkan animasi masuk

  // Sembunyikan foto setelah 5 detik
  setTimeout(() => {
    photoContent.classList.remove("visible");
    photoContent.classList.add("hidden");
  }, 5000);
});