import React, { useContext } from 'react';
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from '../../Provider/AuthProvider';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

const SocialLogin = ({ from }) => {
    const { googleLogin } = useContext(AuthContext)
    const navigate = useNavigate()
    const handleGoogle = () => {
        googleLogin()
            .then(() => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Login Success!',
                    showConfirmButton: false,
                    timer: 1500
                  })
                navigate(from || '/', { replace: true })
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