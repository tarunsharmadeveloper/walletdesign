import React from 'react'
// import Header from '../../Components/LandingPages/Header';
import emailCard from '../../assets/images/icons/emailCard.svg'
function ConfirmationPage() {
    return (
        <div className="authenticationPage">
            {/* <Header /> */}
            <div id="page-content" className="container signUpPage">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-8 col-lg-5 col-xxl-4">
                        <div className="confirmationCard">
                            <div className="text-center">
                                <img className="" src={emailCard} alt="" />
                                <p className="">Thank you, a verification Email is on its way</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConfirmationPage
