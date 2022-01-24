import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import Logo from '../../assets/images/logo/logo.svg';

function SearchBox() {
    return (
        <>
            <div className='search-box'>
                <div className="input-group flex-nowrap">
                    <input type="text" className="search-bar w-100" placeholder="SEARCH" aria-label="Search" aria-describedby="basic-addon1" />
                    <span className="input-group-text" id="basic-addon1">
                    <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.488 9.258C9.00152 9.80798 9.62269 10.2464 10.3129 10.5461C11.0031 10.8458 11.7476 11.0003 12.5 11C13.9582 10.9984 15.3562 10.4184 16.3873 9.38733C17.4184 8.35623 17.9984 6.9582 18 5.5C17.9984 4.0418 17.4184 2.64377 16.3873 1.61267C15.3562 0.581561 13.9582 0.00158817 12.5 0C11.0418 0.00158817 9.64377 0.581561 8.61267 1.61267C7.58156 2.64377 7.00159 4.0418 7 5.5C6.99982 5.9304 7.05017 6.35934 7.15 6.778L0 10.421L1.279 12.931L8.488 9.258ZM15.724 5.5C15.7229 6.35473 15.3829 7.17416 14.7785 7.77854C14.1742 8.38293 13.3547 8.72294 12.5 8.724C11.6453 8.72294 10.8258 8.38293 10.2215 7.77854C9.61707 7.17416 9.27706 6.35473 9.276 5.5C9.27706 4.64527 9.61707 3.82584 10.2215 3.22146C10.8258 2.61707 11.6453 2.27706 12.5 2.276C13.3547 2.27706 14.1742 2.61707 14.7785 3.22146C15.3829 3.82584 15.7229 4.64527 15.724 5.5Z" fill="#C0B7B7"/>
                        </svg>

                    </span>
                </div>
            </div>
        </>
    )
}

export default SearchBox
