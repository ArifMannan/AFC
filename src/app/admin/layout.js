'use client';
import { SessionProvider } from "next-auth/react";
import React from "react";
import ProtectedRoute from "../component/ProtectedRoute";
import styles from './admin.module.css'
import AdminSidebar from "../component/adminSidebar/AdminSidebar";
const Layout = ({ children }) => {
    return (
        <div>
            <div>
                <SessionProvider>
                    <ProtectedRoute requiredRole="admin">
                        <div className="d-flex">
                            <div>
                                <AdminSidebar />
                            </div>
                            <div style={{ flexGrow: 1, marginRight: "1vh" }}>
                                {children}
                            </div>
                        </div>

                    </ProtectedRoute>
                </SessionProvider>
            </div>

        </div>
    );
};

export default Layout;