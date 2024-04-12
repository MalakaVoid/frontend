import Products from "@/components/Products";
import Reviews from "@/components/Reviews";
import ShopCart from "@/components/ShopCart";

export default function Home() {



  return (
    <>
        
        <div className="title">
            <h1 className="title__text">
                Тестовое задание
            </h1>
        </div>

        <Reviews />

        <ShopCart />

        <Products />

    </>
  )
}
