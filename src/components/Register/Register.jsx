import React, { useContext } from 'react';
import signup from '../../assets/login.svg'
import SocialLogin from '../../Shared/SocialLogin/SocialLogin';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { updateCurrentUser, updateProfile } from 'firebase/auth';
import { toast } from 'react-toastify';

const Register = () => {
    const { createUser } = useContext(AuthContext)
    const navigate = useNavigate()
    const handleRegisterSubmit = (event) => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        const name = form.name.value
        const photourl = form.photourl.value
        createUser(email, password)
        .then(result => {
            const currentuser = result.user
            updateProfile(currentuser, {
                displayName: name,
                photoURL: photourl
            })
            .then(() => {
                toast.success('Register Success');
                navigate('/')
            })
            .catch(error => toast.error(error.message))
        })
        .catch(error => toast.error(error.message))
    }
    return (
        <div className="hero min-h-screen bg-base-200">

            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/2 mr-12">
                    <img src={signup} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleRegisterSubmit}>
                            <h1 className="text-3xl text-center font-bold">Register</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name='photourl' placeholder="Photo URL" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button type='submit' className="btn btn-primary">Sign up</button>
                            </div>
                        </form>
                    </div>
                    <p className='text-center'>Alreday have an account? <Link to='/login' className='text-primary'>Login</Link></p>
                    <SocialLogin />
                </div>
            </div>
        </div>
    );
};

export default Register;