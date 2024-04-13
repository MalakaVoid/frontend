
export async function POST(request, {params}) {

    let body = await request.json();
    if (body.cart.length === 0){
        return new Response(JSON.stringify({
            "success": 0,
            "error": "отсутствуют товары"
        }));
    }

    return new Response(JSON.stringify({
        "success": 1,
    }));
}