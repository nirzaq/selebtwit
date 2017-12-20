import React, { Component } from "react";
import "./App.css";

class Faq extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="App-title is-size-2 has-text-black has-text-centered">
          <span class="icon">
            <img
              src="twitter_circle_logo.svg"
              alt="Selebtwit Statistic Analysis"
            />
          </span>{" "}
          F.A.Q
        </h1>

        <ul className="leaderboard">
          <li className="box is-marginless">
          <div className="content">
            <h1 className="is-size-5 has-text-weight-semibold">
              Ini Web apaan?!?
            </h1>
            <p>
              Web ini cuma <i>side project</i> dalam rangka belajar memanfaatkan
              data dari{" "}
              <a href="https://developer.twitter.com/en/docs">Twitter API</a>.
              Web ini akan mengambil 200 twit terbaru dari akun tertentu dan
              menghitung skornya.
            </p>
            </div>
          </li>
          <li className="box is-marginless">
            <div className="content">
              <h1 className="is-size-5 has-text-weight-semibold">
                Bagaimana cara hitung Score?
              </h1>
              <p>Sederhana, Ambil contoh dari akun @handokotjung</p>
              <ol>
                <li>Ambil 200 twit terbaru.</li>
                <li>Sisihkan twit yang merupakan reply dan RT.</li>
                <li>Didapatkan 22 twit yang bukan RT dan reply.</li>
                <li>
                  Dari 22 twit hitung total RT dan total likesnya, didapatkan
                  sekitar 9.7k RT dan 3.7k likes.
                </li>
                <li>
                  Score = (Total RT + Total Likes) / Jumlah Twit setelah
                  dipilah.
                </li>
                <li>Score = (9.7k + 3.7k) / 22 = 607 (dibulatkan).</li>
              </ol>
            </div>
          </li>
          <li className="box is-marginless">
            <div className="content">
              <h1 className="is-size-5 has-text-weight-semibold">
                Definisi Selebtwit?
              </h1>
              <p>
                Tidak ada definisi yang pasti tentang Selebtwit, bahkan ada yang
                sampai marah disebut Selebtwit seperti yang ditulis oleh Kak
                MerryMP{" "}
                <a href="https://merrymp.wordpress.com/2017/08/25/kenapa-marah-disebut-selebtwit/">
                  disini
                </a>
              </p>
              <p>Menurut hemat saya, Selebtwit adalah :</p>
              <blockquote>
                Akun Twitter yang memiliki pengaruh di Timeline
              </blockquote>
              <p>
                Apakah akun dengan follower banyak bisa disebut Selebtwit? Bisa
                iya, bisa tidak, karena tidak ada definisi yang pasti untuk
                Selebtwit.<br />Oleh karena itulah saya iseng bikin web ini untuk
                menghitung seberapa berpengaruh sih sebuah akun Twitter di TL
                berdasarkan Score yang didapat di atas tadi. <br /><br />
                PS : Web ini belum bisa menentukan apakah RT atau likes yang didapatkan akun tertentu itu organik atau didapat dari BOT
              </p>
            </div>
          </li>
          <li className="box is-marginless">
            <div className="content">
            <h1 className="is-size-5 has-text-weight-semibold">
              Saya tidak sudi akun saya ada di sini! Hapus!!
            </h1>
            <p>Maafkan saya yang telah lancang memasukkan akun anda ke web ini, silakan kontak saya via <a href="https://twitter.com/nirzaq">Twitter</a> untuk menghapus akun anda dari sini. :)</p>
            </div>
          </li>
          <li className="box is-marginless">
            <div className="content">
            <h1 className="is-size-5 has-text-weight-semibold">
              Saya ini Selebtwit, centang biru lagi! Kok tidak ada nama saya disini?!
            </h1>
            <p>Wah, sekali lagi saya minta maaf :D Mungkin saya jalannya kurang jauh di Twitterland :/ sehingga gak tau akun anda.. silakan kontak saya via <a href="https://twitter.com/nirzaq">Twitter</a> biar akun anda masuk disini. Tapi pastikan akun anda publik, alias tidak digembok.</p>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default Faq;
