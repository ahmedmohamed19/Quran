import './App.css'
import HeroSection from './Components/HeroSection/HeroSection'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Achievements from './Components/Achievements/Achievements'


let route = createBrowserRouter([
  {
    path: '/', element: <Layout />, children: [
      { index: true, element: <HeroSection /> },
      { path: '/عن الموقع', element: <About /> },
      { path: '/اتصل بنا', element: <Contact /> },
      { path: '/انجازات', element: <Achievements /> },
    ]
  },
])
function App() {

  return (
    <>
      <RouterProvider router={route} />
      
      </>
  )
}

export default App
