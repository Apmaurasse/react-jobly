import React from "react";
import useConfirmLoggedIn from "../Helpers/useConfirmLoggedIn";

const ProfileEditPage = () => {
    useConfirmLoggedIn();
    
    return (
        <div>
            <h1 className="title-container">This is the profile edit page.</h1>
        </div>
    )
};

export default ProfileEditPage