import React from 'react';
import { Navbar, Container, Nav, NavDropdown, Accordion } from 'react-bootstrap';


function WalletImg() {
    return (
        <>
            <div className='wallet_svg'>
                <svg width="37" height="34" viewBox="0 0 37 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M27.0885 26.2279C25.3207 26.2278 23.8825 24.7897 23.8825 23.0219V17.6977C23.8825 15.9299 25.3207 14.4918 27.0885 14.4918H35.4422C35.4928 14.4918 35.5431 14.4933 35.5931 14.4955V9.19173C35.5931 7.82648 34.4864 6.71973 33.1211 6.71973H2.47208C1.10675 6.71965 0 7.8264 0 9.19165V31.5279C0 32.8931 1.10675 33.9999 2.47208 33.9999H33.1211C34.4864 33.9999 35.5931 32.8932 35.5931 31.5279V26.224C35.5431 26.2264 35.4928 26.2279 35.4422 26.2279H27.0885Z" fill="white"/>
                <path d="M35.4426 16.2485H27.0889C26.2885 16.2485 25.6396 16.8974 25.6396 17.6978V23.022C25.6396 23.8224 26.2885 24.4713 27.0889 24.4713H35.4426C36.243 24.4713 36.8919 23.8225 36.8919 23.022V17.6978C36.8919 16.8973 36.243 16.2485 35.4426 16.2485ZM29.9674 22.4516C28.8122 22.4516 27.8757 21.5151 27.8757 20.3598C27.8757 19.2046 28.8122 18.2681 29.9674 18.2681C31.1227 18.2681 32.0592 19.2046 32.0592 20.3598C32.0592 21.5151 31.1227 22.4516 29.9674 22.4516Z" fill="white"/>
                <path d="M28.8164 2.19158C28.2634 0.517619 26.458 -0.391048 24.7842 0.162005L12.2256 4.31103H29.5167L28.8164 2.19158Z" fill="white"/>
                </svg>
            </div>
        </>
    )
}

export default WalletImg