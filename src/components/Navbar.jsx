import { Link } from "react-router"

function Navbar() {
  return (
    <>
        <Link to='/'>Homepage</Link>
        <Link to='/products'>All Products</Link>
        <Link to='/products/create'>New Product</Link>
    </>
  )
}

export default Navbar