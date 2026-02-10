import './App.css'
// import { ProductsPage } from './Task4/page'
// import User from './Task1/pages/Users'
// import  UserManagement  from "./Task2/pages/UserManagement"
// import { Home } from './Task3/pages/Home'
// import Counter from './Task1/component/Counter'
import { BrowserRouter, Routes } from "react-router-dom"
import ProductsPage from './Task5/features/products/ProductsPage'
// import { AddEditProductPage } from './Task4/AddEditProductPage'

function App() {


  return (
    <>
      <BrowserRouter>
       {/* <Counter/> */}
          {/* <User/> */}
          {/* <UserManagement/> */}
          {/* <Home/> */}
          <ProductsPage/>
        <Routes>
          {/* <Route path="/" element={<ProductsPage />} />
          <Route path="/products/add" element={<AddEditProductPage />} />
          <Route path="/products/edit" element={<AddEditProductPage />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App
