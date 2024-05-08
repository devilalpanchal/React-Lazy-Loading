
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Landing from './pages/Landing'
import { Suspense, lazy } from 'react'
import Loading from './component/Loading'
const Login =lazy(()=>import('./pages/Login'))
const Signup=lazy(()=>import('./pages/Signup'))
const Dashboard=lazy(()=>import('./pages/Dashboard'))



function App() {


  return (
<BrowserRouter>

<Routes>
<Route path='/' element={<Landing/>}/>
<Route path='/login' element={<Suspense fallback={<Loading/>}><Login/></Suspense>}/>
<Route path='/signup' element={<Suspense fallback={<Loading/>}><Signup/></Suspense>}/>
<Route path='/dashboard' element={<Suspense fallback={<Loading/>}><Dashboard/></Suspense>}/>
</Routes>

</BrowserRouter>
  )
}

export default App

