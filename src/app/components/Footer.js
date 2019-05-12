import React from 'react';


const Footer = () => {
    const color = {
        backgroundColor: "#009587"
    }
    return (
        <footer className="page-footer" style={color}>
            <div className="container">

                <div className="footer-copyright center" style={color}>
                    <div className="container">
                        © {new Date().getFullYear()} Copyright By GonzaloRapido
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;