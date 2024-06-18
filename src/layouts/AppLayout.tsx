import { Link, Outlet, Navigate } from "react-router-dom"
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Logo from "@/components/Logo"
import NavMenu from "@/components/NavMenu"
import { useAuth } from "@/hooks/useAuth"

export const AppLayout = () => {

    const { data, isLoading, isError } = useAuth()

    if (isLoading) return 'Loading...'
    if (isError) return <Navigate to='/auth/login'/>

    if(data) return (
        <>
            <header className="bg-gray-800 py-5">
                <div className=" max-w-screen-xl mx-auto flex flex-col lg:flex-row justify-between items-center">
                    <div className=" w-64">
                        <Link to={'/'}>
                            <Logo />
                        </Link>
                        
                    </div>

                    <NavMenu name={data.name}/>
                </div>
            </header>

            <section className="max-w-screen-xl mx-auto my-10">
                <Outlet />
            </section>

            <footer className="p-5">
                <p className="text-center">
                    All rights reserved {new Date().getFullYear()}
                </p>
            </footer>

            <ToastContainer
                pauseOnHover={false}
                pauseOnFocusLoss={false}
            />
        </>
    )
}
