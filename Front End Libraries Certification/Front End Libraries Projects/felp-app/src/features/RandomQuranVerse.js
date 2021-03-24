import React, { useEffect, useState } from "react";
import styles from "./RandomQuranVerse.module.css";

export const RandomQuranVerse = () => {
  // const [verse, setVerse] = useState(0);
  // const [surah, setSurah] = useState("");
  const [chapters, setChapters] = useState([]);

  const ranNum = Math.floor(Math.random(9) * 10);

  const url = `http://api.quran.com/api/v3/chapters`;
  const proxyurl = "https://cors-anywhere.herokuapp.com/";

  async function randomQuote(url) {
    const res = await fetch(proxyurl + url);
    const data = await res.json();
    const { chapters } = data;
    console.log(chapters);
    setChapters(chapters);
  }

  useEffect(() => {
    // fetch(proxyurl + url)
    //   .then((response) => response.json())
    //   .then(({ verse }) => {
    //     setVerse(verse.id);
    //     setSurah(verse.text_madani);
    //   })
    //   .catch((error) => console.log(error.message));
    randomQuote(url);
  }, [url]);

  return (
    <div className={styles.container}>
      <h1>Senarai Surah Serta Maklumat Terperinci Alquran</h1>
      <span>☪☪☪</span>
      <br />
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>Surah</th>
            <th className={styles.arabic}>السورة</th>
            <th>Bilangan Ayat</th>
            <th>Mula Helaian</th>
            <th>Akhir Helaian</th>
          </tr>
        </thead>
        <tbody>
          {chapters.map((chapter) => (
            <tr key={chapter.id + ranNum}>
              <td>{chapter.id}</td>
              <td>{chapter.name_simple}</td>
              <td className={styles.arabic}>{chapter.name_arabic}</td>
              <td>{chapter.verses_count}</td>
              <td>{chapter.pages[0]}</td>
              <td>{chapter.pages[1]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
