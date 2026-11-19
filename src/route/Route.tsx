import  { lazy, Suspense, type JSX } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from '../App'

const PageLoader = ()=>(
    <div className=" w-full min-h-screen flex items-center justify-center">
        <div className="animate-spin inline-block w-5 h-5 border-[3px] border-current border-t-transparent text-white-600 rounded-full"></div>
    </div>
)

const withSuspense = (el:JSX.Element) => {
    return (
        <Suspense fallback={<PageLoader />}>{el}</Suspense>
    )
}

const Home = lazy(() => import('../pages/home'))
const MovieRecapFree = lazy(() => import('../pages/movie-recap-free'))

export default function Route() {
    const router = createBrowserRouter([
        {
            path : '/',
            element: <App/>,
            children:[
                {path:'/',element:withSuspense(<Home />)},
                {path:'/movie-recap-free',element:withSuspense(<MovieRecapFree />)}
            ]
        }
    ])
    return (
        <RouterProvider router={router} />
    )
}
