import React from 'react';
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            <div className="mdc-layout-grid">
                <div className="mdc-layout-grid__inner">
                    <div className="mdc-layout-grid__cell stretch-card mdc-layout-grid__cell--span-6-desktop">
                  <span className="tx-14"
                  >Copyright © 2020
                    <Link to="/" target="_blank"> Kechyy todo application</Link>. All
                    rights reserved.</span>
                    </div>
                    <div
                        className="mdc-layout-grid__cell stretch-card mdc-layout-grid__cell--span-6-desktop d-flex justify-content-end">
                        <div className="d-flex align-items-center">
                            <Link to="/">Documentation</Link>
                            <span className="vertical-divider"></span>
                            <Link to="/">FAQ</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
