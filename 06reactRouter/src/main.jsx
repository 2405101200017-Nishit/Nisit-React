import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import Home from './components/Home/Home'
import AboutUs from './components/About Us/AboutUs'
import Contact from './components/Contact Us/Contact'
import User from './components/User/User'
import Github from './components/Github/Github'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path: '',
//         element: <Home />

//       },
//       {
//         path:'about',
//         element: <AboutUs />
//       },
//       {
//         path: 'contact',
//         element:<Contact />
//       }
//     ]
//   }
// ])
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />} >
    <Route path='' element={<Home />} />
    <Route path='about' element={<AboutUs />} />
    <Route path='contact' element={<Contact />} />
    <Route path='user/:userid' element={<User />} />
    <Route path='github' element={<Github />} />
    </Route>
      )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)


