import React from 'react';
import logo from '../../assets/logo.svg'

const Footer = () => {
    return (
        <footer className="footer p-10 bg-neutral text-neutral-content">
            <div>
                <div className='w-28'>
                    <img className='w-full' src={logo} alt="" />
                </div>
                <p>Animal Toy World Ltd.<br />Where the best toys for animals are found</p>
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
        </footer>
    );
};

export default Footer;