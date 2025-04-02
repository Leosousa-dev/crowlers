import axios from "axios"
import * as cheerio from "cheerio"




async function crawler(url: string) {
    try {
        console.log(`initialize crowler in :${url}`)

        // 1 make request to url
        const response = await axios.get(url);

        // 2 loading html
        const $ = cheerio.load(response.data)

        // 3 extrate data 
        const paragraph: string[] = []

        $('p').each((index, element) => {
            const href = $(element).attr('herf')
            if(href){
                paragraph.push(href)
            }
        })

        // 4 show to result
        console.log(`Encontrados: ${paragraph.length} paragraph na pagina:`)
        console.log(paragraph.slice(0,10));
    }
    catch(err){
        console.log("Erro durante a execucao", err)
    }
}

console.log("test")

crawler("https://www.producthunt.com/");