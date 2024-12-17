function Cards() {
    return (
        <>
            {productsList.map(product =>
                loading ?
                    (< div key={product.id} className="products-cards" >
                        Загрузка...
                    </div >) :
                    < div key={product.id} className="products-cards" >
                        <Link to={"/single-page"} className="products-cards1_a">
                            <img className="push_image" src={product.image} alt={product.id} />
                            <h2 className="products-cards-text-h2">{product.name}</h2>
                            <p className="price">${product.price}</p>
                        </Link>
                        <div className="add-to-cart">
                            <button className="add" onClick={() => dispatch(addToCart(product))}>
                                <img src="img/Vector.svg" alt="cart" className="cart" />
                                <p className="add-txt">Add to Cart</p>
                            </button>
                        </div>
                    </div >
            )}
        </>
    );
}

export default Cards;
