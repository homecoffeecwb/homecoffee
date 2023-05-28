import React from "react"
import { useEffect } from "react"
import { Route } from "react-router-dom"
import ReactSlideRoutes from "react-slide-routes"
import { NewProduct } from "./NewProduct"
import { ProductList } from "./ProductList"
import "./style.scss"
import { Header } from "./Header"
import { Categories } from "./Categories"

export const ControlPanel = () => {
    useEffect(() => {
        document.title = "Home Coffee - Dashboard"
    }, [])

    return (
        <div className="ControlPanel-Page">
            <Header />
            <ReactSlideRoutes duration={1000}>
                <Route index element={<ProductList />} />
                <Route path="/novo" element={<NewProduct />} />
                <Route path="/categorias" element={<Categories />} />
            </ReactSlideRoutes>
        </div>
    )
}
