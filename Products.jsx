import products from '../data'
import ProductCard from '../components/ProductCard'

function Products() {
  return (
    <section className="products">
      <h2>Products</h2>

      <div className="products-grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}

export default Products