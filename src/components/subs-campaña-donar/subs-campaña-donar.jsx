import React from "react";
import TarjetaDonacion from "../donar-webpay/webpay";

function SubsCampañaDonar () {
    return (
        <div className="container-fluid container-fluid-blanco">
            <div className='container container-blanco'>
                <div className="row align-items-center justify-content-center">
                    <div className="col-md-12 text-center">   
                        <TarjetaDonacion />
                    </div> 
                </div>
            </div>
        </div>    
    )
}

export default SubsCampañaDonar;