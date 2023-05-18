import React, { useContext } from 'react';
import login from '../../assets/login.svg'
import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from '../../Shared/SocialLogin/SocialLogin';
import { AuthContext } from '../../Provider/AuthProvider';
import { toast } from 'react-toastify';

const Login = () => {
    const { loginUser } = useContext(AuthContext)
    const navigate = useNavigate()
    const handleLoginSubmit = (event) => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        console.log(email, password);
        loginUser(email, password)
            .then(() => {
                toast.success('Login Success');
                navigate('/')
            })
            .catch(error => {
                toast.error(error.message)
            })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/2 mr-12">
                    <img src={login} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleLoginSubmit}>
                            <h1 className="text-3xl text-center font-bold">Login</h1>
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
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button type='submit' className="btn btn-primary">Login</button>
                            </div>
                        </form>
                    </div>
                    <p className='text-center'>New here? <Link to='/register' className='text-primary'>Signup</Link></p>
                    <SocialLogin />
                </div>
            </div>
        </div>
    );
};

export default Login;