import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className="mdc-layout-grid">
                <div className="mdc-layout-grid__inner">
                    <div className="mdc-layout-grid__cell stretch-card mdc-layout-grid__cell--span-6-desktop">
                  <span className="tx-14"
                  >Copyright © 2020
                    <a href="#" target="_blank"> Kechyy todo application</a>. All
                    rights reserved.</span>
                    </div>
                    <div
                        className="mdc-layout-grid__cell stretch-card mdc-layout-grid__cell--span-6-desktop d-flex justify-content-end">
                        <div className="d-flex align-items-center">
                            <a href="">Documentation</a>
                            <span className="vertical-divider"></span>
                            <a href="">FAQ</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
