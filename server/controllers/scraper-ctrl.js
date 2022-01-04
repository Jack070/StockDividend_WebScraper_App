const Axios = require("axios");
const Cheerio = require("cheerio");

async function WScrape(){
    const result = [];
    const url = "https://www.moneycontrol.com/stocks/marketinfo/dividends_declared/index.php"

    // Get HTMl of the website
    const response = await Axios.get(url)
    const html = response.data

    // Load HTML to cheerio
    const $ = Cheerio.load(html)

    // Loop through the table element
    const tableData = $(".dvdtbl");
    tableData.find("tr").map((_, element) => {
        const productElement = $(element)
        const col = productElement.find("td").text();
        if(!col.startsWith("COMPANY") && !col.startsWith("Type%")){
            const td_array = [];
            productElement.find("td").map((_, tdelement) => {
                const td_element = $(tdelement)
                td_array.push(td_element.text())
            })
            result.push(td_array)
        }
    });
    return result;
};

getDividend = async (req, res) => {
    const resultArray = await WScrape()
    return res.status(200).json({ success: true, data: resultArray })
}

module.exports = {getDividend}