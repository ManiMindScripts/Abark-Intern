import './App.css'
import { ProductsPage } from './Task4/page'
// import User from './Task1/pages/Users'
// import  UserManagement  from "./Task2/pages/UserManagement"
// import { Home } from './Task3/pages/Home'
// import Counter from './Task1/component/Counter'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { AddEditProductPage } from './Task4/AddEditProductPage'

function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
    {/* <Counter/> */}
      {/* <User/> */}
      {/* <UserManagement/> */}
      {/* <Home/> */}
      <Route path="/" element={<ProductsPage />} />
        <Route path="/products/add" element={<AddEditProductPage />} />
        <Route path="/products/edit" element={<AddEditProductPage />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}
export default App
