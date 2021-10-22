import React, { Component } from 'react'

class Invoice extends Component {
    render() {
        return (
            <div id="container">
                <div class="content-head">
                    <div class="content">
                        <div class="body">
                            <h1>Invoice</h1>
                            <p>Welcome Intez Invoice</p>
                        </div>
                        <div class="dash">
                            <a href="/">Home</a>
                            <span>&gt;</span>
                            <a href="/invoice">Invoice</a>
                        </div>
                    </div>
                </div>

                <div className="row container-content">
                    <div className="col-lg-3">
                        <span className="invoice-icons"><i class="fas fa-file-invoice"></i></span>
                        {/* <i class="fas fa-band-aid"></i>
                        <i class="fas fa-cat"></i>
                        <i class="fas fa-dragon"></i>
                        <i class="far fa-clock"></i>
                        <i class="fas fa-clock"></i> */}

                    </div>
                    <div className="col-lg-3">
                        fvfrv
                    </div>
                    <div className="col-lg-3">
                        rfvr
                    </div>
                    <div className="col-lg-3">
                        frvr
                    </div>

                </div>



            </div>
        )
    }
};

export default Invoice;