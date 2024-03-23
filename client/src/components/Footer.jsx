import React from "react"

function Footer(){
    const currentYear = new Date().getFullYear();
    return(
        <footer style={{ position: "fixed", bottom: "0" }}>
            <p>Copyright ⓒ {currentYear}</p>
        </footer> 
    )
}

export default Footer;
