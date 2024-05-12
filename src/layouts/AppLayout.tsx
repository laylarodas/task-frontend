import { Outlet } from "react-router-dom"
import Logo from "@/components/Logo"
import NavMenu from "@/components/NavMenu"

export const AppLayout = () => {
  return (
    <>
        <header className="bg-gray-800 py-5">
            <div className=" max-w-screen-xl mx-auto flex flex-col lg:flex-row justify-between items-center">
                <div className=" w-64">
                    <Logo />
                </div>

                <NavMenu />
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
      
    </>
  )
}
