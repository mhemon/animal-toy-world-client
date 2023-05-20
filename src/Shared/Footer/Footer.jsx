import React from 'react';
import logo from '../../assets/logo.svg'

const Footer = () => {
    return (
        <footer className="footer p-10 bg-neutral text-neutral-content">
            <div>
                <div className='w-28'>
                    <img className='w-full' src={logo} alt="" />
                </div>
                <p className='text-base'>Animal Toy World Ltd.<br />Where the best toys for animals are found <br /> Copyright © 2023 - All right reserved</p>
            </div>
            <div>
                <span className="footer-title">Services</span>
                <a className="link link-hover">Online shopping</a>
                <a className="link link-hover">In-store shopping</a>
                <a className="link link-hover">Gift wrapping</a>
                <a className="link link-hover">Loyalty program</a>
            </div>
            <div>
                <span className="footer-title">Social Media</span>
                <a className="link link-hover">Facebook</a>
                <a className="link link-hover">Instagram</a>
                <a className="link link-hover">Twitter</a>
                <a className="link link-hover">Tiktok</a>
            </div>
            <div>
                <span className="footer-title">Legal</span>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </div>
            <div className='hidden md:block'>
                <span className="footer-title">Newsletter</span>
                <div className="form-control w-80">
                    <label className="label">
                        <span className="label-text text-white">Enter your email address</span>
                    </label>
                    <div className="relative">
                        <input type="text" placeholder="username@site.com" className="input input-bordered w-full px-2 pr-16" />
                        <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;