import React, { Component } from 'react'
import investment from './images/investment.png'
import visa from './images/visa.png'
import payoneer from './images/payoneer.png'


class Wallet extends Component {
    render() {
        return (
            <div>
                <div class="content-head">
                    <div class="content">
                        <div class="body">
                            <h1>Wallet</h1>
                            <p>Welcome Intez Wallet</p>
                        </div>
                        <div class="dash">
                            <a href="/">Home</a>
                            <span>&gt;</span>
                            <a href="/wallet">Wallet</a>
                        </div>
                    </div>
                </div>

                <div className="row container-content">
                    <div className="col-lg-6">
                        <div id="other">
                            <div class="tot">
                                <h3>Balance Details</h3>
                                <p>Total balance</p>
                                <h1>$221,478</h1>
                            </div>
                            <div class="row">

                                <div className="col-lg-6">
                                    <div className="other-in">
                                        <div className="cards">
                                            <p>Last Month</p>
                                            <h4>$42,678</h4>
                                        </div>
                                        <div className="cards">
                                            <p>Expenses</p>
                                            <h4>$1,798</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="other-in">
                                        <div className="cards">
                                            <p>Taxes</p>
                                            <h4>$255.25</h4>
                                        </div>
                                        <div className="cards">
                                            <p>Debt</p>
                                            <h4>$365,478</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div id="other">
                            <div class="trans">
                                <h4>Bills</h4>
                                <a href="#">See more</a>
                            </div>
                            <div class="other-bod">
                                <div>
                                    <p>Netflix</p>
                                    <h3>$17.00</h3>
                                </div>
                                <div>
                                    <button>Pay now</button>
                                </div>
                            </div>
                            <div class="other-bod">
                                <div id="spotify">
                                    <p>Spotify</p>
                                    <h3>$11.00</h3>
                                </div>
                                <div>
                                    <button>Pay now</button>
                                </div>
                            </div>
                            <div class="other-bod">
                                <div id="youtube">
                                    <p>Youtube</p>
                                    <h3>$11.00</h3>
                                </div>
                                <div>
                                    <button>Pay now</button>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

                <div className="row">
                    <div className="col-lg-6">
                        <div id="inv" className="inv">
                            <p>Investment</p>
                            <img src={investment} />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div id="deb-first" className="row">
                            {/* <div id="deb-first"> */}
                                <div id="de" className="col-lg-6">
                                    <p>Debit Card</p>
                                </div>
                                <div id="img" className="col-lg-6">
                                    <img src={visa} />
                                </div>
                                <div id="h4" className="col-lg-12">
                                    <p>1234 5678 7890 9875</p>
                                </div>
                                <div id="sai" className="col-lg-6">
                                    <h5>Saiful Islam</h5>
                                </div>
                                <div id="h5" className="col-lg-6">
                                    <h5>EXP:12/21</h5>
                                </div>
                            {/* </div> */}

                        </div>

                        <div id="deb-second" className="row">
                            <div id="de" className="col-lg-6">
                                <p>Debit Card</p>
                            </div>
                            <div id="im" className="col-lg-6">
                                <img src={payoneer} />
                            </div>
                            <div id="h4" className="col-lg-12">
                                <p>1234 5678 7890 9875</p>
                            </div>
                            <div id="sai" className="col-lg-6">
                                <h5>Saiful Islam</h5>
                            </div>
                            <div id="h5" className="col-lg-6">
                                <h5>EXP:12/21</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default Wallet;