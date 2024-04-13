import { promises as fs } from 'fs';

export async function GET(request, {params}) {

    let page = parseInt(request.nextUrl.searchParams.get("page"));
    let page_size = parseInt(request.nextUrl.searchParams.get("page_size"));

    if (page === null || page_size === null) {
        return new Response(JSON.stringify(result), {status: 404});
    }

    const file = await fs.readFile(process.cwd() + '/app/data.json', 'utf8');
    const data = JSON.parse(file);

    let result_products = data.slice((page-1)*page_size, page_size*page);
    let result = {
        page: page,
        amount: result_products.length,
        total: data.length,
        items: result_products
    }
    
    return new Response(JSON.stringify(result));
}


// function getRandomInt(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// function createData (){
//     let data = [];
//     for (let i =0; i < 30; i++) {
//         let image_url = `http://localhost:3000/${getRandomInt(1, 3)}.png`;
//         data.push({
//             id: i,
//             image_url: image_url,
//             title: `PRODUCT ${i}`,
//             description: "some text ".repeat(getRandomInt(1, 20)),
//             price: getRandomInt(1000, 20000)
//         })

//     }
//     return data;
// }

// function createData (){
//     let data = [];
//     let page;
//     for (let i =0; i < 30; i++) {
    
//         if (i%6 == 0){
//             page = i/6;
//             data.push({
//                 page: page,
//                 amount: 6,
//                 total: 30,
//                 items: []
//             });
//         }

//         for (let j = 0; j < 6; j++) {
//             data[page].items.push({
//                 id: i,
//                 image_url: '/monke.png',
//                 title: `PRODUCT ${i}`,
//                 description: "some text ".repeat(getRandomInt(1, 20)),
//                 price: getRandomInt(1000, 20000)
//             })
//         }
//     }

//     return data;
// }