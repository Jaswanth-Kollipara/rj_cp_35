const SimilarProductItem = props => {
  const {productData} = props
  const {imageUrl, title, price, brand, rating} = productData
  return (
    <div>
      <img src={imageUrl} alt={`similar product ${title}`} />
      <h1>{title}</h1>
      <p>by {brand}</p>
      <div>
        <p>Rs {price}/-</p>
        <div>
          {rating}
          <img
            src="https://assets.ccbp.in/frontend/react-js/star-img.png"
            alt="star"
          />
        </div>
      </div>
    </div>
  )
}

export default SimilarProductItem
