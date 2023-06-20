import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { Home,Signup,Login,PayForm } from '../component';
function Navigate() {
  return (
        <Routes >
          <Route path='/' element={<Home/>}></Route>
          <Route path='/signup' element={<Signup/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/PaymentForm' element={<PayForm/>}></Route>
        </Routes>
  )
}
export default Navigate;