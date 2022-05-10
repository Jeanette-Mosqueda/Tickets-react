import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import Auth from '../Auth';
import FullLayout from '../layouts/FullLayout';
import Dashboard from '../pages/Dashboard';

const Router = ({ user, setUser }) => {
    return (
        <Routes>
            {!user && (
                <Route path='/auth'
                    element={<Auth user={user} setUser={setUser} />}
                />
            )}
            {user && (
                <>
                    <Route
                        path='/home'
                        element={<FullLayout setUser={setUser} />}
                    />
                    <Route path='/dashboard' element={<Dashboard />} />

                </>
            )}

            <Route path="*" element={<Navigate to={user ? '/home' : "/auth"} />} />
        </Routes>
    );
};

export default Router