import { Navbar } from "../component/layout/Navbar";
import { ProductGrid } from "../component/ProductGrid";
import { CartDrawer } from "../component/cart/CartDrawer";


export function Home() {
  return (
    <>
      <Navbar />
      <main className="p-6">
        <ProductGrid/>
      </main>
      <CartDrawer />
    </>
  )
}