import React from "react";
import { createBrowserRouter, Route, Navigate, createRoutesFromElements, RouterProvider } from "react-router-dom";
import Homepage from "./Templates/Homepage";
import Companies from "./Templates/Companies";
import Jobs from "./Templates/Jobs";
import Login from "./Templates/Login";
import Signup from "./Templates/Signup";
import Users from "./Templates/Users";
import ProfileEditPage from "./Templates/ProfileEditPage";
import RootLayout from "./Templates/RootLayout";





const router = createBrowserRouter(
    createRoutesFromElements(
        
        <Route path="/" element={<RootLayout />}>
            <Route index element={<Homepage />} />
            <Route path="/companies" element={<Companies />} />
            {/* <Route path="/companies/:handle" element={<Company />} /> */}
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/users" element={<Users />} />
            <Route path="/profileeditpage/" element={<ProfileEditPage />} />
            <Route path="*" element={<Navigate to="/" />} />
        </Route>
    )
)


const JoblyRoutes = () => {
    return (
       <> 
        <RouterProvider router={router} />

        </>
    )

};

export default JoblyRoutes