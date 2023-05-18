import React from 'react';
import { FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
    return (
        <div className='text-center p-4'>
            <div className="divider">OR</div>
            <div className="tooltip" data-tip="Login with Google">
                <button className="btn btn-primary btn-circle btn-outline">
                    <FaGoogle />
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;