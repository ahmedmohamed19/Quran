import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo.png'
export default function NavigationBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
            <div className="container">
                <NavLink className="navbar-brand fw-bold text-primary" to="/"> <img src={logo} alt="Logo" style={{ height: '40px' }} /></NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link active" to="/">الرئيسية</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="عن الموقع">عن الموقع</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="اتصل بنا">اتصل بنا</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="انجازات">انجازات</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
