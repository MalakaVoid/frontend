import styles from '@/styles/Reviews.module.scss';
export default async function Review() {

	const res = await fetch(
		'http://127.0.0.1:3000/api/reviews',
		{ cache: 'no-store' }
	);
	const data = await res.json();

	const xssPrevent = function (text) {
		return text
			.replace("<script>", "&lt;script&gt;")
			.replace("</script>", "&lt;&#47;script&gt;");
	}

	return (
		<>
			<div className={styles.reviews}>
				{
					data.map(review => {
						return (
							<div className={styles.review} key={review.id}>
								<h3 className={styles.review__title}>
									Отзыв {review.id}
								</h3>
								<div
									className={styles.review__content}
									dangerouslySetInnerHTML={{ __html: xssPrevent(review.text) }}>
								</div>
							</div>
						)
					})
				}
			</div>
		</>
	)
}
