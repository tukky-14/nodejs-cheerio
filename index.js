const axios = require("axios");
const cheerio = require("cheerio");

const fetchData = async () => {
  const URL = "https://tukkytech.com/";
  const result = await axios(URL);
  const htmlParser = result.data;
  const $ = cheerio.load(htmlParser);

  // id="articles"の中のliタグを取得し、その中のh5タグとaタグのテキストを取得して出力する処理を繰り返す
  $("#articles")
    .find("li")
    .each(function (i) {
      const title = $(this).find("h5").text();
      const url = $(this).find("a").attr("href");

      console.log(`${title}\nhttps://tukkytech/${url}\n`);
    });
};

fetchData();
