import Loader from "@/components/Loader";
import Products from "@/components/Products";
import Reviews from "@/components/Reviews";
import ShopCart from "@/components/ShopCart";
import { Suspense } from "react";

export default async function Home() {

	const pageSize = 5;

	const res = await fetch(
		'http://localhost:3000/api/products?' + new URLSearchParams({ page: 1, page_size: pageSize }),
		{ cache: 'no-store' }
	);
	const data = await res.json();

	return (
		<>

			<div className="title">
				<h1 className="title__text">
					Тестовое задание
				</h1>
			</div>
			<Suspense fallback={<Loader />}>
				<Reviews />
			</Suspense>

			<Products first_page={data} pageSize={pageSize} />

		</>
	)
}
