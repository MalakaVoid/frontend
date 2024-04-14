export const dynamic = 'force-dynamic'
import Loader from "@/components/Loader";
import Products from "@/components/Products";
import Reviews from "@/components/Reviews";
import ShopCart from "@/components/ShopCart";
import { Suspense } from "react";
import styles from '@/styles/Home.module.scss';

export default async function Home() {

	const pageSize = 5;

	const res = await fetch(
		'http://127.0.0.1:3000/api/products?' + new URLSearchParams({ page: 1, page_size: pageSize }),
		{ cache: 'no-store' }
	);
	const data = await res.json();

	return (
		<>

			<div className={styles.title}>
				<h1 className={styles.title__text}>
					Тестовое задание
				</h1>
			</div>
			<Suspense fallback={<Loader />}>
				<Reviews />
			</Suspense>

			<Products firstPage={data} pageSize={pageSize} />

		</>
	)
}
