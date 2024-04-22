import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomePage from './pages/home/home.page.jsx'
import JobPage from './pages/job/job.page.jsx'
import './index.css'
import RootLayout from './layouts/root.layout.jsx'
import SignInPage from './pages/sign-in.page.jsx'
import SignUpPage from './pages/sign-up.page.jsx'




const router = createBrowserRouter([
 {
  element : <RootLayout />,
  children : [
    {
      path : "/",
      element : <HomePage/>
     },
     {
      path : "/job",
      element : <JobPage/>
     },
     {
      path : "/sign-in",
      element : <SignInPage/>
     },
     {
      path : "/sign-up",
      element : <SignUpPage/>
     }
   
  ]
 },
 
]
);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
