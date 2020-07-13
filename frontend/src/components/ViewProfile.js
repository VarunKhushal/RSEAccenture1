import React, { Component } from 'react';
import './stylesheet/profile.css'

class ViewProfile extends Component {
  render() {
    return (
      <>
      <link href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>
      <script src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js"></script>
      <script src="//code.jquery.com/jquery-1.11.1.min.js"></script>

      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>


      <div className="container">
        <div className="row">
          <div className=" col-lg-offset-3 col-lg-6">
              <div className="panel panel-default">
                  <div className="panel-body">
                      <div className="row">
                          <div className="col-lg-12">
                              <div className="row">
                                  <div className="col-sm-offset-3 col-sm-6 col-md-offset-3 col-md-6 col-lg-offset-3 col-lg-6">
                                      {/* <img className="img-circle img-responsive" src="http://api.adorable.io/avatars/300/abott@adorable.png"> </img> */}
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="row">
                          <div className="col-lg-12">
                              <div className="row">
                                  <div className="centered-text col-sm-offset-3 col-sm-6 col-md-offset-3 col-md-6 col-lg-offset-3 col-lg-6">
                                      <div itemscope="" itemtype="http://schema.org/Person">
                                          <h2> <span itemprop="name">John Citizen</span></h2>
                                          <p>
                                              <i className="fa fa-map-marker"></i> <span itemprop="addressRegion">Nsw, 2150</span>
                                          </p>
                                          <p itemprop="email"> <i className="fa fa-envelope"> </i> <a href="mailto:you@somedomain.com">jc@releaf.com</a> </p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="col-lg-12 centered-text">
                              I'm a generous person and I love giving. 
                          </div>
              
                      </div>
                  </div>
                  <div className="panel-footer">
                      <div className="row">

                        

                          <div className="main-wrapper">
                            <div className="badge yellow">
                                <div className="circle"> <i className="fa fa-bolt"></i></div>
                                <div className="ribbon tool">Initiator
                                    <span className="tooltiptext tooltip-left"> First to donate of the day </span>
                                </div>

                            </div>
                            <div className="badge orange">
                              <div className="circle"> <i className="fa fa-gamepad "></i></div>
                              <div className="ribbon tool">Gamer
                                <span className="tooltiptext tooltip-top"> Donated 15 assorted vido games</span>
                              </div>
                            </div>
                            <div className="badge pink">
                              <div className="circle"> <i className="fa fa-battery-full "></i></div>
                              <div className="ribbon tool">Recharger
                                <span className="tooltiptext tooltip-top"> Donated a packet battery </span>
                              </div>
                            </div>
                            <div className="badge red">
                              <div className="circle"> <i className="fa fa-heart"></i></div>
                              <div className="ribbon tool">Giver 
                                <span className="tooltiptext tooltip-right"> Donated twice in one day! </span>
                              </div>
                            </div>
                            <div className="badge purple">
                              <div className="circle"> <i className="fa fa-anchor"></i></div>
                              <div className="ribbon">Durable</div>
                            </div>
                            <div className="badge teal">
                              <div className="circle"> <i className="fa fa-bicycle"></i></div>
                              <div className="ribbon">Roamer</div>
                            </div>
                            <div className="badge blue">
                              <div className="circle"> <i className="fa fa-users"></i></div>
                              <div className="ribbon">Pusher</div>
                            </div>
                            <div className="badge blue-dark">
                              <div className="circle"> <i className="fa fa-rocket"></i></div>
                              <div className="ribbon">Escape</div>
                            </div>
                            <div className="badge green">
                              <div className="circle"> <i className="fa fa-tree"></i></div>
                              <div className="ribbon">Jungler</div>
                            </div>
                            <div className="badge green-dark">
                              <div className="circle"> <i className="fa fa-user fa-street-view"></i></div>
                              <div className="ribbon">Offlaner</div>
                            </div>

                          </div>
                      </div>
                  </div>
              </div>
          </div>
        </div>

      </div>
      
      </>
    );
  }
}

export default ViewProfile;
