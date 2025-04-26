import React from 'react'
import NavigationBar from '../NavigationBar/NavigationBar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'

export default function Layout() {
    return (
        <div dir="rtl" className="text-end bg-light min-vh-100">
            <NavigationBar />
            <div className="container-fluid">
                <Outlet />
            </div>
            <Footer />
        </div>

    )
}
