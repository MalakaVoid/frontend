
export default async function Review() {

  const res = await fetch(
    'http://localhost:3000/api/reviews',
    {cache: 'no-store'}
  );
  const data = await res.json();
  const xssPrevent = function(text){
    return text
          .replace("<script>", "&lt;script&gt;")
          .replace("</script>", "&lt;&#47;script&gt;");
  }
  return (
    <>
        <div className="reviews">
          {
            data.map(review => {
              return(
                <div className="review" key={review.id}>
                  <h3 className="review__title">
                    Отзыв {review.id}
                  </h3>
                  <div 
                    className="review__content" 
                    dangerouslySetInnerHTML={{__html: xssPrevent(review.text)}}>
                  </div>
                </div>
              )
            })
          }
        </div>
    </>
  )
}
