import Head from 'next/head'
import MainHeader from '../components/main-header'
import SideBar from '../components/sidebar'
import styles from '../styles/Home.module.css'
import QuickSidebar from '../components/quick-sidebar'

export default function Widgets() {
  return (
    <div className={styles.container}>

      <Head>
        <title>Next.js Charts</title>
        <link rel="icon" href="assets/img/favicon.ico" />
      </Head>

      <div className="main-panel">
        <div className="content">
          <div className="container-fluid">

            <h4 className="page-title">Card</h4>
            <div className="row">
              <div className="col-sm-6 col-md-3">
                <div className="card card-stats card-primary card-round">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-5">
                        <div className="icon-big text-center">
                          <i className="flaticon-users"></i>
                        </div>
                      </div>
                      <div className="col-7 col-stats">
                        <div className="numbers">
                          <p className="card-category">Visitors</p>
                          <h4 className="card-title">1,294</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="card card-stats card-info card-round">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-5">
                        <div className="icon-big text-center">
                          <i className="flaticon-interface-6"></i>
                        </div>
                      </div>
                      <div className="col-7 col-stats">
                        <div className="numbers">
                          <p className="card-category">Subscribers</p>
                          <h4 className="card-title">1303</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="card card-stats card-success card-round">
                  <div className="card-body ">
                    <div className="row">
                      <div className="col-5">
                        <div className="icon-big text-center">
                          <i className="flaticon-analytics"></i>
                        </div>
                      </div>
                      <div className="col-7 col-stats">
                        <div className="numbers">
                          <p className="card-category">Sales</p>
                          <h4 className="card-title">$ 1,345</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="card card-stats card-secondary card-round">
                  <div className="card-body ">
                    <div className="row">
                      <div className="col-5">
                        <div className="icon-big text-center">
                          <i className="flaticon-success"></i>
                        </div>
                      </div>
                      <div className="col-7 col-stats">
                        <div className="numbers">
                          <p className="card-category">Order</p>
                          <h4 className="card-title">576</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-6 col-md-3">
                <div className="card card-stats card-round">
                  <div className="card-body ">
                    <div className="row">
                      <div className="col-5">
                        <div className="icon-big text-center">
                          <i className="flaticon-pie-chart text-warning"></i>
                        </div>
                      </div>
                      <div className="col-7 col-stats">
                        <div className="numbers">
                          <p className="card-category">Number</p>
                          <h4 className="card-title">150GB</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="card card-stats card-round">
                  <div className="card-body ">
                    <div className="row">
                      <div className="col-5">
                        <div className="icon-big text-center">
                          <i className="flaticon-coins text-success"></i>
                        </div>
                      </div>
                      <div className="col-7 col-stats">
                        <div className="numbers">
                          <p className="card-category">Revenue</p>
                          <h4 className="card-title">$ 1,345</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="card card-stats card-round">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-5">
                        <div className="icon-big text-center">
                          <i className="flaticon-error text-danger"></i>
                        </div>
                      </div>
                      <div className="col-7 col-stats">
                        <div className="numbers">
                          <p className="card-category">Errors</p>
                          <h4 className="card-title">23</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="card card-stats card-round">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-5">
                        <div className="icon-big text-center">
                          <i className="flaticon-twitter text-primary"></i>
                        </div>
                      </div>
                      <div className="col-7 col-stats">
                        <div className="numbers">
                          <p className="card-category">Followers</p>
                          <h4 className="card-title">+45K</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-6 col-md-3">
                <div className="card card-stats card-round">
                  <div className="card-body ">
                    <div className="row">
                      <div className="col-5">
                        <div className="icon-big text-center icon-warning">
                          <i className="flaticon-pie-chart text-warning"></i>
                        </div>
                      </div>
                      <div className="col-7 col-stats">
                        <div className="numbers">
                          <p className="card-category">Number</p>
                          <h4 className="card-title">150GB</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="card card-stats card-round">
                  <div className="card-body ">
                    <div className="row">
                      <div className="col-5">
                        <div className="icon-big text-center icon-success">
                          <i className="flaticon-coins text-success"></i>
                        </div>
                      </div>
                      <div className="col-7 col-stats">
                        <div className="numbers">
                          <p className="card-category">Revenue</p>
                          <h4 className="card-title">$ 1,345</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="card card-stats card-round">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-5">
                        <div className="icon-big text-center icon-danger">
                          <i className="flaticon-error text-danger"></i>
                        </div>
                      </div>
                      <div className="col-7 col-stats">
                        <div className="numbers">
                          <p className="card-category">Errors</p>
                          <h4 className="card-title">23</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="card card-stats card-round">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-5">
                        <div className="icon-big text-center icon-primary">
                          <i className="flaticon-twitter text-primary"></i>
                        </div>
                      </div>
                      <div className="col-7 col-stats">
                        <div className="numbers">
                          <p className="card-category">Followers</p>
                          <h4 className="card-title">+45K</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row row-card-no-pd">
              <div className="col-sm-6 col-md-3">
                <div className="card card-stats card-round">
                  <div className="card-body ">
                    <div className="row">
                      <div className="col-5">
                        <div className="icon-big text-center">
                          <i className="flaticon-pie-chart text-warning"></i>
                        </div>
                      </div>
                      <div className="col-7 col-stats">
                        <div className="numbers">
                          <p className="card-category">Number</p>
                          <h4 className="card-title">150GB</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="card card-stats card-round">
                  <div className="card-body ">
                    <div className="row">
                      <div className="col-5">
                        <div className="icon-big text-center">
                          <i className="flaticon-coins text-success"></i>
                        </div>
                      </div>
                      <div className="col-7 col-stats">
                        <div className="numbers">
                          <p className="card-category">Revenue</p>
                          <h4 className="card-title">$ 1,345</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="card card-stats card-round">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-5">
                        <div className="icon-big text-center">
                          <i className="flaticon-error text-danger"></i>
                        </div>
                      </div>
                      <div className="col-7 col-stats">
                        <div className="numbers">
                          <p className="card-category">Errors</p>
                          <h4 className="card-title">23</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="card card-stats card-round">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-5">
                        <div className="icon-big text-center">
                          <i className="flaticon-twitter text-primary"></i>
                        </div>
                      </div>
                      <div className="col-7 col-stats">
                        <div className="numbers">
                          <p className="card-category">Followers</p>
                          <h4 className="card-title">+45K</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h4 className="page-title">Timeline</h4>
            <div className="row">
              <div className="col-md-12">

                <ul className="timeline">
                  <li>
                    <div className="timeline-badge"><i className="flaticon-message"></i></div>
                    <div className="timeline-panel">
                      <div className="timeline-heading">
                        <h4 className="timeline-title">Mussum ipsum cacilds</h4>
                        <p><small className="text-muted"><i className="flaticon-message"></i> 11 hours ago via Twitter</small></p>
                      </div>
                      <div className="timeline-body">
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                      </div>
                    </div>
                  </li>
                  <li className="timeline-inverted">
                    <div className="timeline-badge warning"><i className="flaticon-alarm-1"></i></div>
                    <div className="timeline-panel">
                      <div className="timeline-heading">
                        <h4 className="timeline-title">Mussum ipsum cacilds</h4>
                      </div>
                      <div className="timeline-body">
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="timeline-badge danger"><i className="flaticon-error"></i></div>
                    <div className="timeline-panel">
                      <div className="timeline-heading">
                        <h4 className="timeline-title">Mussum ipsum cacilds</h4>
                      </div>
                      <div className="timeline-body">
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                      </div>
                    </div>
                  </li>
                  <li className="timeline-inverted">
                    <div className="timeline-panel">
                      <div className="timeline-heading">
                        <h4 className="timeline-title">Mussum ipsum cacilds</h4>
                      </div>
                      <div className="timeline-body">
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="timeline-badge info"><i className="flaticon-price-tag"></i></div>
                    <div className="timeline-panel">
                      <div className="timeline-heading">
                        <h4 className="timeline-title">Mussum ipsum cacilds</h4>
                      </div>
                      <div className="timeline-body">
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        <hr />
                        <div className="btn-group dropdown">
                          <button type="button" className="btn btn-primary btn-sm dropdown-toggle" data-toggle="dropdown">
                            <span className="btn-label">
                              <i className="la la-cog"></i>
                            </span>
                          </button>
                          <ul className="dropdown-menu" role="menu">
                            <li>
                              <a className="dropdown-item" href="widgets.html#">Action</a>
                              <a className="dropdown-item" href="widgets.html#">Another action</a>
                              <div className="dropdown-divider"></div>
                              <a className="dropdown-item" href="widgets.html#">Something else here</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="timeline-panel">
                      <div className="timeline-heading">
                        <h4 className="timeline-title">Mussum ipsum cacilds</h4>
                      </div>
                      <div className="timeline-body">
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                      </div>
                    </div>
                  </li>
                  <li className="timeline-inverted">
                    <div className="timeline-badge success"><i className="flaticon-credit-card-1"></i></div>
                    <div className="timeline-panel">
                      <div className="timeline-heading">
                        <h4 className="timeline-title">Mussum ipsum cacilds</h4>
                      </div>
                      <div className="timeline-body">
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <h4 className="page-title">Pricing</h4>
            <div className="row justify-content-center align-items-center">
              <div className="col-md-3 pl-md-0">
                <div className="card card-pricing">
                  <div className="card-header">
                    <h4 className="card-title">Basic</h4>
                    <div className="card-price">
                      <span className="price">$25</span>
                      <span className="text">/mo</span>
                    </div>
                  </div>
                  <div className="card-body">
                    <ul className="specification-list">
                      <li>
                        <span className="name-specification">Customizer</span>
                        <span className="status-specification">14 days trial</span>
                      </li>
                      <li>
                        <span className="name-specification">Chat History</span>
                        <span className="status-specification">No</span>
                      </li>
                      <li>
                        <span className="name-specification">Statistics</span>
                        <span className="status-specification">14 days trial</span>
                      </li>
                      <li>
                        <span className="name-specification">Support</span>
                        <span className="status-specification">Yes</span>
                      </li>
                      <li>
                        <span className="name-specification">Live Support</span>
                        <span className="status-specification">No</span>
                      </li>
                    </ul>
                  </div>
                  <div className="card-footer">
                    <button className="btn btn-primary btn-block"><b>Get Started</b></button>
                  </div>
                </div>
              </div>
              <div className="col-md-3 pl-md-0 pr-md-0">
                <div className="card card-pricing card-pricing-focus card-primary">
                  <div className="card-header">
                    <h4 className="card-title">Professional</h4>
                    <div className="card-price">
                      <span className="price">$35</span>
                      <span className="text">/mo</span>
                    </div>
                  </div>
                  <div className="card-body">
                    <ul className="specification-list">
                      <li>
                        <span className="name-specification">Customizer</span>
                        <span className="status-specification">Yes</span>
                      </li>
                      <li>
                        <span className="name-specification">Chat History</span>
                        <span className="status-specification">3 Month</span>
                      </li>
                      <li>
                        <span className="name-specification">Statistics</span>
                        <span className="status-specification">3 Month</span>
                      </li>
                      <li>
                        <span className="name-specification">Support</span>
                        <span className="status-specification">Yes</span>
                      </li>
                      <li>
                        <span className="name-specification">Live Support</span>
                        <span className="status-specification">Yes</span>
                      </li>
                    </ul>
                  </div>
                  <div className="card-footer">
                    <button className="btn btn-light btn-block"><b>Get Started</b></button>
                  </div>
                </div>
              </div>
              <div className="col-md-3 pr-md-0">
                <div className="card card-pricing">
                  <div className="card-header">
                    <h4 className="card-title">Team</h4>
                    <div className="card-price">
                      <span className="price">$75</span>
                      <span className="text">/mo</span>
                    </div>
                  </div>
                  <div className="card-body">
                    <ul className="specification-list">
                      <li>
                        <span className="name-specification">Customizer</span>
                        <span className="status-specification">Yes</span>
                      </li>
                      <li>
                        <span className="name-specification">Chat History</span>
                        <span className="status-specification">1 Year</span>
                      </li>
                      <li>
                        <span className="name-specification">Statistics</span>
                        <span className="status-specification">1 Year</span>
                      </li>
                      <li>
                        <span className="name-specification">Support</span>
                        <span className="status-specification">Yes</span>
                      </li>
                      <li>
                        <span className="name-specification">Live Support</span>
                        <span className="status-specification">Yes</span>
                      </li>
                    </ul>
                  </div>
                  <div className="card-footer">
                    <button className="btn btn-primary btn-block"><b>Get Started</b></button>
                  </div>
                </div>
              </div>
            </div>

            <h4 className="page-title">Customized Card</h4>
            <div className="row">
              <div className="col-md-4">
                <div className="card card-info card-annoucement card-round">
                  <div className="card-body text-center">
                    <div className="card-opening">Welcome Rian,</div>
                    <div className="card-desc">
                      Congrats and best wishes for success in your brand new life!
                      I knew that you would do this!
                    </div>
                    <div className="card-detail">
                      <div className="btn btn-light btn-rounded">View Detail</div>
                    </div>
                  </div>
                </div>
                <div className="card card-round">
                  <div className="card-body">
                    <div className="card-title fw-mediumbold">Suggested People</div>
                    <div className="card-list">
                      <div className="item-list">
                        <img src="../assets/img/jm_denis.jpg" alt="denis" className="small-pic" />
                        <div className="info-user ml-3">
                          <div className="username">Jimmy Denis</div>
                          <div className="status">Graphic Designer</div>
                        </div>
                        <a href="widgets.html#" className="btn btn-add">
                          <i className="flaticon-add"></i>
                        </a>
                      </div>
                      <div className="item-list">
                        <img src="../assets/img/chadengle.jpg" alt="chad" className="small-pic" />
                        <div className="info-user ml-3">
                          <div className="username">Chad</div>
                          <div className="status">CEO Zeleaf</div>
                        </div>
                        <a href="widgets.html#" className="btn btn-add">
                          <i className="flaticon-add"></i>
                        </a>
                      </div>
                      <div className="item-list">
                        <img src="../assets/img/mlane.jpg" alt="john doe" className="small-pic" />
                        <div className="info-user ml-3">
                          <div className="username">Jhon doe</div>
                          <div className="status">Content Writer</div>
                        </div>
                        <a href="widgets.html#" className="btn btn-add">
                          <i className="flaticon-add"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card card-post card-round">
                  <img className="card-img-top" src="../assets/img/blogpost.jpg" alt="Card image cap" />
                  <div className="card-body">
                    <div className="d-flex">
                      <img src="../assets/img/profile2.jpg" alt="Joko" className="small-pic" />
                      <div className="info-post ml-2">
                        <p className="username">Joko Subianto</p>
                        <p className="date text-muted">20 Jan 18</p>
                      </div>
                    </div>
                    <div className="seperator-solid"></div>
                    <p className="card-category text-info mb-1"><a href="widgets.html#">Design</a></p>
                    <h3 className="card-title">
                      <a href="widgets.html#">
                        Best Design Resources This Week
                      </a>
                    </h3>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="widgets.html#" className="btn btn-primary btn-rounded btn-sm">Read More</a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card card-profile card-secondary">
                  <div className="card-header" /*style="background-image: url('../assets/img/blogpost.jpg')"*/>
                    <div className="profile-picture">
                      <img src="../assets/img/profile.jpg" alt="Profile Picture" />
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="user-profile text-center">
                      <div className="name">Rafael, 19</div>
                      <div className="job">Frontend Developer</div>
                      <div className="desc">A man who hates loneliness</div>
                      <div className="social-media">
                        <a className="btn btn-info btn-twitter btn-sm btn-link" href="widgets.html#">
                          <span className="btn-label just-icon"><i className="flaticon-twitter"></i> </span>
                        </a>
                        <a className="btn btn-danger btn-sm btn-link" rel="publisher" href="widgets.html#">
                          <span className="btn-label just-icon"><i className="flaticon-google-plus"></i> </span>
                        </a>
                        <a className="btn btn-primary btn-sm btn-link" rel="publisher" href="widgets.html#">
                          <span className="btn-label just-icon"><i className="flaticon-facebook"></i> </span>
                        </a>
                        <a className="btn btn-danger btn-sm btn-link" rel="publisher" href="widgets.html#">
                          <span className="btn-label just-icon"><i className="flaticon-dribbble"></i> </span>
                        </a>
                      </div>
                      <div className="view-profile">
                        <a href="widgets.html#" className="btn btn-secondary btn-block">View Full Profile</a>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer">
                    <div className="row user-stats text-center">
                      <div className="col">
                        <div className="number">125</div>
                        <div className="title">Post</div>
                      </div>
                      <div className="col">
                        <div className="number">25K</div>
                        <div className="title">Followers</div>
                      </div>
                      <div className="col">
                        <div className="number">134</div>
                        <div className="title">Following</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <QuickSidebar />

    </div>

  )
}
