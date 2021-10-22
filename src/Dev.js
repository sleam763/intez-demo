import React, { Component } from 'react'
import overviewImage from './images/overview.png'
import wallet from './images/wallet.png'
import visa from './images/visa.png'
import payoneer from './images/payoneer.png'
import statistics from './images/statistics.png'
import brad from './images/brad.jpg'
import facebook from './images/facebook.png'
import youtube from './images/youtube.png'
import spotify from './images/spotify.png'
import skype from './images/skype.png'

class Dev extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        return (
            <>
                <div class="content-head">
                    <div class="row">
                        <div class="col-lg-6 body">
                            <h1>Dashboard</h1>
                            <p>Welcome Intez Dashboard</p>
                        </div>
                        <div class="col-lg-6 dash">
                            <a href="/">Home</a>
                            <span>&gt;</span>
                            <a href="#">Dashboard</a>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="row container-content">
                        <div class="col-lg-6 col-sm-12">
                            <div id="stats">
                                <p>Stats</p>
                                <div class="row">
                                    <div class="col-lg-6 col-sm-6">
                                        <div class="stats-item">
                                            <div class="row">
                                                <div className="col-lg-4 col-sm-4">
                                                    <span>
                                                        <img src={wallet} />
                                                    </span>
                                                </div>
                                                <div className="col-lg-8">
                                                    <div class="word">
                                                        <p>432568</p>
                                                        <p>Last Balance</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-sm-6">
                                        <div class="stats-item">
                                            <div class="row">
                                                <div className="col-lg-4">
                                                    <span>
                                                        <img src={wallet} />
                                                    </span>
                                                </div>
                                                <div className="col-lg-8">
                                                    <div class="word">
                                                        <p>432568</p>
                                                        <p>Last Balance</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-6 col-sm-6">
                                        <div class="stats-item">
                                            <div class="row">
                                                <div className="col-lg-4">
                                                    <span>
                                                        <img src={wallet} />
                                                    </span>
                                                </div>
                                                <div className="col-lg-8">
                                                    <div class="word">
                                                        <p>432568</p>
                                                        <p>Last Balance</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-sm-6">
                                        <div class="stats-item">
                                            <div class="row">
                                                <div className="col-lg-4">
                                                    <span>
                                                        <img src={wallet} />
                                                    </span>
                                                </div>
                                                <div className="col-lg-8">
                                                    <div class="word">
                                                        <p>432568</p>
                                                        <p>Last Balance</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-sm-12">
                            <div id="expenses">
                                <p>Expenses</p>
                                <span>
                                    <i><img src={overviewImage} /></i>
                                </span>
                            </div>
                        </div>
                    </div>


                    <div class="row">
                        <div class="col-lg-4">
                            <div id="unpaid" >
                                <h4>Unpaid Bills</h4>
                                <ul>
                                    <li>
                                        <p>Service</p>
                                        <h5>Youtube channel</h5>
                                    </li>
                                    <li>
                                        <p>Issued</p>
                                        <h5>March 17, 2021</h5>
                                    </li>
                                    <li>
                                        <p>Payment Due</p>
                                        <h5>17 Days</h5>
                                    </li>
                                    <li>
                                        <p>Paid</p>
                                        <h5>0.00</h5>
                                    </li>
                                    <li>
                                        <p>Amount to pay</p>
                                        <h5>$ 532.69</h5>
                                    </li>
                                    <li>
                                        <p>Payment Method</p>
                                        <h5>Paypal</h5>
                                    </li>
                                </ul>
                            </div>

                        </div>
                        <div class="col-lg-4">
                            <div class="debit">
                                <div class="card-div">
                                    <div class="deb">
                                        <p>Debit Card</p>
                                        <img src={visa} />
                                    </div>
                                    <h4>1234 5678 7890 9875</h4>
                                    <div class="sal">
                                        <h5>Saiful Islam</h5>
                                        <h5>EXP:12/21</h5>
                                    </div>
                                </div>

                                <div class="other-debit">
                                    <div class="other-div">
                                        <div class="deb">
                                            <p>Debit Card</p>
                                            <img src={payoneer} />
                                        </div>
                                        <h4>1234 5678 7890 9875</h4>
                                        <div class="sal">
                                            <h5>Saiful Islam</h5>
                                            <h5>EXP:12/21</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="balance">
                                <div className="bal-head">
                                    <h3>Balance Details</h3>
                                    <p>Total balance</p>
                                    <h1>$221,478</h1>
                                </div>
                                <div class="row">
                                    <div className="col-lg-6">
                                        <div className="cards-in">
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
                                        <div className="cards-in">
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
                                {/* <div class="row">
                            <div class="col-lg-6">
                                fkkf
                            </div>
                            <div class="col-lg-6">
                                fkkf
                            </div>
                        </div>         */}
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-4">
                            <div id="statistics">
                                <div>
                                    <h4>Statistics</h4>
                                </div>
                                <div>
                                    <img src={statistics} />
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div id="transact">
                                <div class="row">
                                    <div class="col-lg-8">
                                        <p>Transaction History</p>
                                    </div>
                                    <div class="col-lg-4">
                                        <a>see more</a>
                                    </div>
                                </div>
                                <div class="row" id="trans-column">
                                    <div class="col-lg-3 transaction-img">
                                        <div>
                                            <img src={brad} />
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div>
                                            <p class="transaction-name">Terry P. Camacho</p>
                                            <p class="transaction-time">5 January 2021 at 10.15 pm</p>
                                        </div>
                                    </div>
                                    <div class="col-lg-3 transaction-row">
                                        <div>
                                            <p class="transaction-amount">+450.00</p>
                                            <span class="transaction-paid">Paid</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="row" id="trans-column">
                                    <div class="col-lg-3 transaction-img">
                                        <div>
                                            <img src={brad} />
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div>
                                            <p class="transaction-name">John L. Foster</p>
                                            <p class="transaction-time">5 January 2021 at 10.15 pm</p>
                                        </div>
                                    </div>
                                    <div class="col-lg-3 transaction-row">
                                        <div>
                                            <p class="transaction-amount">+450.00</p>
                                            <span class="transaction-due">Due</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="row" id="trans-column">
                                    <div class="col-lg-3 transaction-img">
                                        <div>
                                            <img src={brad} />
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div>
                                            <p class="transaction-name">John C. Adams</p>
                                            <p class="transaction-time">5 January 2021 at 10.15 pm</p>
                                        </div>
                                    </div>
                                    <div class="col-lg-3 transaction-row">
                                        <div>
                                            <p class="transaction-amount">+450.00</p>
                                            <span class="transaction-cancel">Cancel</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-3 transaction-img">
                                        <div>
                                            <img src={brad} />
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div>
                                            <p class="transaction-name">Weston P. Thomas</p>
                                            <p class="transaction-time">5 January 2021 at 10.15 pm</p>
                                        </div>
                                    </div>
                                    <div class="col-lg-3 transaction-row">
                                        <div>
                                            <p class="transaction-amount">+450.00</p>
                                            <span class="transaction-paid">Paid</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div id="goal">
                                <p>Goals Budget</p>
                                <div class="goal-content">
                                    <div class="row">
                                        <div class="col-lg-3">
                                            <div class="goal-img">
                                                <img src={youtube} />
                                            </div>
                                        </div>
                                        <div class="col-lg-9 goal-services">
                                            <div>
                                                <div class="row">
                                                    <div class="col-lg-7">
                                                        <p>Youtube Premium</p>
                                                    </div>
                                                    <div class="col-lg-5">
                                                        <p class="goal-rating"><strong>25</strong> /100</p>
                                                    </div>
                                                </div>
                                                <div class="progress">
                                                    <div class="progress-bar-youtube"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-3">
                                            <div class="goal-img">
                                                <img src={spotify} />
                                            </div>
                                        </div>
                                        <div class="col-lg-9 goal-services">
                                            <div>
                                                <div class="row">
                                                    <div class="col-lg-7">
                                                        <p>Spotify Music</p>
                                                    </div>
                                                    <div class="col-lg-5">
                                                        <p class="goal-rating"><strong>50</strong> /100</p>
                                                    </div>
                                                </div>
                                                <div class="progress">
                                                    <div class="progress-bar-spotify"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-3">
                                            <div class="goal-img">
                                                <img src={skype} />
                                            </div>
                                        </div>
                                        <div class="col-lg-9 goal-services">
                                            <div>
                                                <div class="row">
                                                    <div class="col-lg-7">
                                                        <p>Skype Premium</p>
                                                    </div>
                                                    <div class="col-lg-5">
                                                        <p class="goal-rating"><strong>45</strong> /100</p>
                                                    </div>
                                                </div>
                                                <div class="progress">
                                                    <div class="progress-bar-skype"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-3">
                                            <div class="goal-img">
                                                <img src={youtube} />
                                            </div>
                                        </div>
                                        <div class="col-lg-9 goal-services">
                                            <div>
                                                <div class="row">
                                                    <div class="col-lg-7">
                                                        <p>Envanto Element</p>
                                                    </div>
                                                    <div class="col-lg-5">
                                                        <p class="goal-rating"><strong>35</strong> /100</p>
                                                    </div>
                                                </div>
                                                <div class="progress">
                                                    <div class="progress-bar-envanto"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </>
        )
    };
};

export default Dev;