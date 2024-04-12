import Product from "./Product"


export default async function Products() {
    const res = await fetch(
        'http://localhost:3000/api/products?' + new URLSearchParams({page: 1, page_size: 10}),
        {cache: 'no-store'}
    );
    const data = await res.json();



  return (
    <>
        <section className="products">
            {
                data.items.map((item) =>(
                    <Product key={item.id} product_info={item}/>
                ))
            }
        </section>
    </>
  )
}
