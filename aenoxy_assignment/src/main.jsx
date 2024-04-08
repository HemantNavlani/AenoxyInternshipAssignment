import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import SignupPage from './pages/SignupPage.jsx'
import ProfilePage from './pages/ProfilePage.jsx'
import { Provider } from 'react-redux'
import store from './store/store.js'
const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/signup',
        element:<SignupPage/>
      },
      {
        path:'/profile',
        element:(
            <ProfilePage/>
        )
      },
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
    <Provider store={store}>
     <RouterProvider router={router}/>
     </Provider>
  </React.StrictMode>,
)
