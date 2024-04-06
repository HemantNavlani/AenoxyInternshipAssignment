import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import SignupPage from './pages/SignupPage.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/',
        element:<SignupPage/>
      },
      // {
      //   path:'/login',
      //   element:(
      //     <AuthLayout authentication={false}>
      //       <Login/>
      //     </AuthLayout>
      //   )
      // },
      // {
      //   path:'/signup',
      //   element:(
      //     <AuthLayout authentication={false}>
      //       <Signup />
      //     </AuthLayout>
      //   )
      // },
      // {
      //   path:'/all-posts',
      //   element:(
      //     <AuthLayout authentication>
      //       {" "}
      //       <AllPosts/>
      //     </AuthLayout>
      //   )
      // },
      // {
      //   path:'/add-post',
      //   element:(
      //     <AuthLayout authentication>
      //       {" "}
      //       <AddPost/>
      //     </AuthLayout>
      //   )
      // },
      // {
      //   path:'/edit-post/:slug',
      //   element:(
      //     <AuthLayout authentication>
      //       {' '}
      //       <EditPost/>
      //     </AuthLayout>
      //   )
      // },
      // {
      //   path:'/post/:slug',
      //   element:<Post/>
      // }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router}/>
  </React.StrictMode>,
)
