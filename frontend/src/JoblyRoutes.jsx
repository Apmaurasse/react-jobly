import React from "react";
import { createBrowserRouter, Route, Navigate, createRoutesFromElements, RouterProvider } from "react-router-dom";
import Homepage from "./Templates/Homepage";
import CompanyList from "./Templates/CompanyList";
import CompanyCard from "./Templates/CompanyCard";
import Jobs from "./Templates/Jobs";
import Login from "./Templates/Login";
import Signup from "./Templates/Signup";
import Users from "./Templates/Users";
import ProfileEditPage from "./Templates/ProfileEditPage";
import RootLayout from "./Templates/RootLayout";




const JoblyRoutes = ({ companies }) => { // Receive companies prop
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<RootLayout />}>
                <Route index element={<Homepage />} />
                <Route path="/companies" element={<CompanyList companies={companies} />} /> 
                <Route path="/companies/:handle" element={<CompanyCard companies={companies}/>} />
                <Route path="/jobs" element={<Jobs />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/users" element={<Users />} />
                <Route path="/profileeditpage/" element={<ProfileEditPage />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Route>
        )
    );

    return (
        <RouterProvider router={router} />
    );
};

export default JoblyRoutes