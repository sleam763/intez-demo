import React, { Component } from 'react'
import investment from './images/investment.png'
import visa from './images/visa.png'
import expenses from './images/expenses.png'
import { getRoles } from '@testing-library/dom'
import facebook from './images/facebook.png'
import youtube from './images/youtube.png'
import spotify from './images/spotify.png'
import skype from './images/skype.png'
import googleplus from './images/googleplus.png'
import dropbox from './images/dropbox.png'


class Payment extends Component {
    render() {
        return (
            <div>
                <div class="content-head">
                    <div class="content">
                        <div class="body">
                            <h1>Payment</h1>
                            <p>Welcome Intez Payment</p>
                        </div>
                        <div class="dash">
                            <a href="/">Home</a>
                            <span>&gt;</span>
                            <a href="/payment">Payment</a>
                        </div>
                    </div>
                </div>

                <div className="row container-content">
                    <div className="col-lg-9">
                        <div id="expe">
                            <div>
                                <p>Expenses</p>
                            </div>
                            <div >
                                <img src={expenses} />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div id="unpai">
                            <div>
                                <h4>Unpaid Bills</h4>
                            </div>
                            <div id="unpai-each" className="row">
                                <div className="col-lg-6">
                                    <p>Service</p>
                                </div>
                                <div className="col-lg-6">
                                    <p className='other-p'>Payoneer</p>
                                </div> <hr />
                            </div> <hr />
                            <div id="unpai-each" className="row">
                                <div className="col-lg-6">
                                    <p>Issued</p>
                                </div>
                                <div className="col-lg-6">
                                    <p className='other-p'>March 17, 2021</p>
                                </div>
                            </div> <hr />
                            <div id="unpai-each" className="row">
                                <div className="col-lg-6">
                                    <p>Payment Date</p>
                                </div>
                                <div className="col-lg-6">
                                    <p className='other-p'>17 Days</p>
                                </div>
                            </div> <hr />
                            <div id="unpai-each" className="row">
                                <div className="col-lg-6">
                                    <p>Paid</p>
                                </div>
                                <div className="col-lg-6">
                                    <p className='other-p'>0.00</p>
                                </div>
                            </div> <hr />
                            <div id="unpai-each" className="row">
                                <div className="col-lg-6">
                                    <p>Amount to pay</p>
                                </div>
                                <div className="col-lg-6">
                                    <p className='other-p'>$ 532.69</p>
                                </div>
                            </div> <hr />
                            <div id="unpai-each" className="row">
                                <div className="col-lg-7">
                                    <p>Payment Method</p>
                                </div>
                                <div className="col-lg-5">
                                    <p className='other-p'>Paypal</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-12">
                        <div id="payment">
                            <h4>Payments</h4>

                            <div className="row">
                                <div className="col-lg-1">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" id="flexCheckDefault" value="" />
                                    </div>
                                </div>
                                <div className="col-lg-5">
                                    <p>Service</p>
                                </div>
                                <div className="col-lg-2">
                                    <p>Amount</p>
                                </div>
                                <div className="col-lg-3">
                                    <p>Date</p>
                                </div>
                                <div className="col-lg-1">
                                    <p>Status</p>
                                </div>
                            </div> <hr />

                            <div className="row">
                                <div className="col-lg-1">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" id="flexCheckDefault" value="" />
                                    </div>
                                </div>
                                <div className="col-lg-5">
                                    <p>
                                        <img src={facebook} alt="" width="22" class="me-3 img-fluid" />Facebook Ads
                                    </p>
                                </div>
                                <div className="col-lg-2">
                                    <p>$412</p>
                                </div>
                                <div className="col-lg-3">
                                    <p>March 21, 2021</p>
                                </div>
                                <div className="col-lg-1">
                                    <p><span class="badge px-3 py-2 bg-success">Paid</span></p>
                                </div>
                            </div> <hr />

                            <div className="row">
                                <div className="col-lg-1">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" id="flexCheckDefault" value="" />
                                    </div>
                                </div>
                                <div className="col-lg-5">
                                    <p>
                                        <img src={youtube} alt="" width="22" class="me-3 img-fluid" />Youtube premium
                                    </p>
                                </div>
                                <div className="col-lg-2">
                                    <p>$175</p>
                                </div>
                                <div className="col-lg-3">
                                    <p>December 26, 2021</p>
                                </div>
                                <div id="danger-span" className="col-lg-1">
                                    <p><span class="badge px-3 py-2 bg-danger">Cancel</span></p>
                                </div>
                            </div> <hr />

                            <div className="row">
                                <div className="col-lg-1">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" id="flexCheckDefault" value="" />
                                    </div>
                                </div>
                                <div className="col-lg-5">
                                    <p>
                                        <img src={dropbox} alt="" width="22" class="me-3 img-fluid" />Dropbox
                                    </p>
                                </div>
                                <div className="col-lg-2">
                                    <p>$521</p>
                                </div>
                                <div className="col-lg-3">
                                    <p>February 16, 2021</p>
                                </div>
                                <div className="col-lg-1">
                                    <p><span class="badge px-3 py-2 bg-success">Paid</span></p>
                                </div>
                            </div> <hr />

                            <div className="row">
                                <div className="col-lg-1">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" id="flexCheckDefault" value="" />
                                    </div>
                                </div>
                                <div className="col-lg-5">
                                    <p>
                                        <img src={googleplus} alt="" width="22" class="me-3 img-fluid" />Google Plus
                                    </p>
                                </div>
                                <div className="col-lg-2">
                                    <p>$125</p>
                                </div>
                                <div className="col-lg-3">
                                    <p>June 17, 2021</p>
                                </div>
                                <div className="col-lg-1">
                                    <p><span class="badge px-3 py-2 bg-warning">Due</span></p>
                                </div>
                            </div> <hr />

                            <div className="row">
                                <div className="col-lg-1">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" id="flexCheckDefault" value="" />
                                    </div>
                                </div>
                                <div className="col-lg-5">
                                    <p>
                                        <img src={spotify} alt="" width="22" class="me-3 img-fluid" />Spotify
                                    </p>
                                </div>
                                <div className="col-lg-2">
                                    <p>$521</p>
                                </div>
                                <div className="col-lg-3">
                                    <p>August 01, 2021</p>
                                </div>
                                <div className="col-lg-1">
                                    <p><span class="badge px-3 py-2 bg-success">Paid</span></p>
                                </div>
                            </div> <hr />

                            <div className="row">
                                <div className="col-lg-1">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" id="flexCheckDefault" value="" />
                                    </div>
                                </div>
                                <div className="col-lg-5">
                                    <p>
                                        <img src={skype} alt="" width="22" class="me-3 img-fluid" />Skype
                                    </p>
                                </div>
                                <div className="col-lg-2">
                                    <p>$234</p>
                                </div>
                                <div className="col-lg-3">
                                    <p>January 19, 2021</p>
                                </div>
                                <div className="col-lg-1">
                                    <p><span class="badge px-3 py-2 bg-warning">Due</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>









                {/* <div class="payment-cont">
                    <div>
                        <div>
                            <h4>Payments</h4>
                        </div>
                        <div class="card-body">
                            <div class="payments-content">
                                <div class="table-responsive">
                                    <table class="table">
                                        <thead>
                                            <tr>
                                                <th>
                                                    <div class="form-check"><input class="form-check-input" type="checkbox" id="flexCheckDefault" value="" /></div>
                                                </th>
                                                <th>Service</th>
                                                <th>Amount</th>
                                                <th>Date</th>
                                                <th>Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div class="form-check"><input class="form-check-input" type="checkbox" id="flexCheckDefault" value="" /></div>
                                                </td>
                                                <td><img src="/images/social/facebook.png" alt="" width="22" class="me-3 img-fluid" />Facebook Ads</td>
                                                <td>$412</td>
                                                <td>March 21, 2021</td>
                                                <td><span class="badge px-3 py-2 bg-success">Paid</span></td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div class="form-check"><input class="form-check-input" type="checkbox" id="flexCheckDefault" value="" /></div>
                                                </td>
                                                <td><img src="/images/social/youtube.png" alt="" width="22" class="me-3 img-fluid" />Youtube Premium</td>
                                                <td>$175</td>
                                                <td>December 26, 2021</td>
                                                <td><span class="badge px-3 py-2 bg-danger">Cancel</span></td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div class="form-check"><input class="form-check-input" type="checkbox" id="flexCheckDefault" value="" /></div>
                                                </td>
                                                <td><img src="/images/social/dropbox.png" alt="" width="22" class="me-3 img-fluid" />Dropbox</td>
                                                <td>$521</td>
                                                <td>February 16, 2021</td>
                                                <td><span class="badge px-3 py-2 bg-success">Paid</span></td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div class="form-check"><input class="form-check-input" type="checkbox" id="flexCheckDefault" value="" /></div>
                                                </td>
                                                <td><img src="/images/social/google-plus.png" alt="" width="22" class="me-3 img-fluid" />Google Plus</td>
                                                <td>$125</td>
                                                <td>June 17, 2021</td>
                                                <td><span class="badge px-3 py-2 bg-warning">Due</span></td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div class="form-check"><input class="form-check-input" type="checkbox" id="flexCheckDefault" value="" /></div>
                                                </td>
                                                <td><img src="/images/social/spotify.png" alt="" width="22" class="me-3 img-fluid" />Spotify</td>
                                                <td>$521</td>
                                                <td>August 01, 2021</td>
                                                <td><span class="badge px-3 py-2 bg-success">Paid</span></td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div class="form-check"><input class="form-check-input" type="checkbox" id="flexCheckDefault" value="" /></div>
                                                </td>
                                                <td><img src="/images/social/skype.png" alt="" width="25" class="me-3 img-fluid" />Skype</td>
                                                <td>$234</td>
                                                <td>January 19, 2021</td>
                                                <td><span class="badge px-3 py-2 bg-warning">Due</span></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div> */}







            </div>
        )
    }
};

export default Payment;