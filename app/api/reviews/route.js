export async function GET(req, res) {
    const reviews = [
        {
            id: 1,
            text: "<h1>Something</h1><p>asdlkasld askldas asdkas</p>"
        },
        {
            id: 2,
            text: "<h1>Something</h1><p>asdlkasld askldas asdkas</p><p>AAAA</p>"
        },
        {
            id: 2,
            text: "<h1>Something</h1><p>asdlkasld askldas asdkas</p><p>AAAA</p> <script>alert();</script>"
        }
    ];

    return new Response(JSON.stringify(reviews));
}