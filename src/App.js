// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import './App.css';
// import Home from './usersend/Home';
// import Product from './usersend/Product';
// import Login from "./usersend/Login";
// import Register from "./usersend/Register";
// import Cart from "./usersend/Cart";
// import Carrt from "./merchant/Cart";
// import SwiperComponent from "./usersend/Swiper";
// import Productpage from "./usersend/Productpage";
// import Multicaro from "./usersend/Multicaro";
// import Merchant from "./merchant/Merchant";
// import ShopProvider from "./contex/Context";
// import Merchantregister from "./merchant/Merchantregister";
// import Dashboard from "./merchant/Dashboard";
// import Users from "./merchant/Users";
// import Manageproduct from "./merchant/Manageproduct";
// import Createproduct from "./merchant/Createproduct";
// import Editmerchant from "./merchant/Editmerchant";
// import Forgotpassword from "./merchant/Forgotmerchantpasword";
// import Updateuserpassword from "./usersend/UpdateUserpassword";
// import EditmerchantForm from "./merchant/Editmerchant";
// import Edituser from "./usersend/Edituser";
// import Createcategory from "./merchant/Createcategory";
// import Merchantprofile from "./merchant/Merchantprofile";
// import Checkout from "./usersend/checkout";
// import YourComponent from "./usersend/temprary";
// function App() {
//   return (
//     <div>
//       <ShopProvider>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path='/login' element={<Login />} />
//           <Route path='/register' element={<Register />} />
//           <Route path='/product' element={<Product />} />
//           <Route path='/productpage/:id' element={<Productpage />} />
//           <Route path='/cart' element={<Cart />} />
//           <Route path='/swiper' element={<SwiperComponent />} />
//           <Route path='/merchantlogin' element={<Merchant />} />
//           <Route path='/merchantregister' element={<Merchantregister />} />
//           <Route path='/multi' element={<Multicaro />} />
//           <Route path='/Create-product' element={<Createproduct />} />
//           <Route path='/Manage-product' element={<Manageproduct />} />
//           <Route path='/Users' element={<Users />} />
//           <Route path='/Dashboard' element={<Dashboard />} />
//           <Route path='/newcart' element={<Carrt />} />
//           <Route path='/editmerchant' element={<Editmerchant />} />
//           <Route path='/update-password' element={<Forgotpassword />} />
//           <Route path='/updateuserpassword' element={<Updateuserpassword />} />
//           <Route path='/Editmerchant' element={<EditmerchantForm />} />
//           <Route path='/updateuser' element={<Edituser />} />
//           <Route path='/Createcategory' element={<Createcategory />} />
//           <Route path='/merchantprofile' element={<Merchantprofile />} />
//           <Route path='/Checkout' element={<Checkout />} />
//           <Route path='/tempory' element={<YourComponent />} />
//         </Routes>
//       </BrowserRouter>
//       </ShopProvider>
//     </div>
//   );
// }

// export default App;


// App.js
// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import "./App.css"
// import Sidebar from "./Merchantdocx/Sidebar";
// import Login from "./Merchantdocx/Login";
// import Signup from "./Merchantdocx/Signup";
// import CreateProduct from "./Merchantdocx/AddProduct";
// import CategoryManagement from "./Merchantdocx/AddCategory";
// import BannerManagement from "./Merchantdocx/AddBanner";
// import TestComponent from './Merchantdocx/Test';
// import Dashboard from "./Merchantdocx/Dashboard";

// function App() {
//   return (
//     <Router>
//       <div className="flex w-full h-screen  bg-gray-100">
//         <Sidebar />
//         <main className="flex-grow p-6 overflow-y-auto w-3/4">
//           <Routes>
//             <Route path="/" element={<Login />} />
//             <Route path="/signup" element={<Signup />} />
//             <Route path="/create-product" element={<CreateProduct />} />
//             <Route path="/categories" element={<CategoryManagement />} />
//             <Route path="/banners" element={<BannerManagement />} />
//             <Route path="/dashboard" element={<Dashboard />} />
//           </Routes>
//         </main>
//       </div>
//     </Router>
//   );
// }

// export default App;


import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Sidebar from "./Merchantdocx/Sidebar";
import Login from "./Merchantdocx/Login";
import Signup from "./Merchantdocx/Signup";
import CreateProduct from "./Merchantdocx/AddProduct";
import CategoryManagement from "./Merchantdocx/AddCategory";
import BannerManagement from "./Merchantdocx/AddBanner";
import Dashboard from "./Merchantdocx/Dashboard";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <Router>
      <div className="flex w-screen h-screen bg-gray-100">
        {/* Sidebar */}
        
          <div
            className={`fixed inset-y-0 left-0 transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
              } md:relative md:translate-x-0 w-64 bg-gray-800 text-white transition-transform duration-300 ease-in-out`}
          >
            <Sidebar />
          </div>

  

        {/* Main Content */}
        <div className="flex-grow p-6 overflow-y-auto">
          {/* Toggle Button for Mobile */}
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="md:hidden fixed top-4 left-4 bg-gray-800 text-white p-2 rounded"
          >
            {isSidebarOpen ? "Close" : "Menu"}
          </button>

          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/create-product" element={<CreateProduct />} />
            <Route path="/categories" element={<CategoryManagement />} />
            <Route path="/banners" element={<BannerManagement />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
