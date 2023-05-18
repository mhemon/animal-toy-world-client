import React, { useContext } from 'react';
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from '../../Provider/AuthProvider';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const SocialLogin = () => {
    const { googleLogin } = useContext(AuthContext)
    const navigate = useNavigate()
    const handleGoogle = () => {
        googleLogin()
        .then(() => {
            toast.success('Login Success')
            navigate('/')
        })
        .catch(error => toast.error(error.message))
    }
    return (
        <div className='text-center p-4'>
            <div className="divider">OR</div>
            <div className="tooltip" data-tip="Login with Google">
                <button onClick={handleGoogle} className="btn btn-primary btn-circle btn-outline">
                    <FaGoogle />
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;