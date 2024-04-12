import Product from "./Product"


export default function Products() {
    const data = [
        {
            id: 1,
            name: 'Product 1',
            price: 1000,
            image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
            desc: 'Product 1 image is available in the following formats and will be displayed'
        },
        {
            id: 1,
            name: 'Product 1',
            price: 1000,
            image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
            desc: 'Product 1 image is available in the following formats and will be displayed'
        },
        {
            id: 1,
            name: 'Product 1',
            price: 1000,
            image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
            desc: 'Product 1 imag asd asdas asd asd asd asd asda sda sdadsade is available in the following formats and will be displayed'
        },
        {
            id: 1,
            name: 'Product 1',
            price: 1000,
            image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
            desc: 'Product 1 image is availabled will be displayed'
        },
        {
            id: 1,
            name: 'Product 1',
            price: 1000,
            image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
            desc: ' will be displayed'
        }

    ]
  return (
    <>
        <section className="products">
            {
                data.map(item =>(
                    <Product product_info={item}/>
                ))
            }
        </section>
    </>
  )
}
