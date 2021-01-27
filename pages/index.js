import Head from 'next/head'
import MainHeader from '../components/main-header'
import SideBar from '../components/sidebar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>

      <Head>
        <title>Next.js Dashboard</title>
        <link rel="icon" href="assets/img/favicon.ico" />
      </Head>

      <MainHeader />
      <SideBar />

      <div className="main-panel">
        <div className="content">
          <div className="container-fluid">
            <div className="page-header">
              <h4 className="page-title">Dashboarda</h4>
              <div className="btn-group btn-group-page-header ml-auto">
                <button type="button" className="btn btn-light btn-round btn-page-header-dropdown dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i className="la la-ellipsis-h"></i>
                </button>
                <div className="dropdown-menu">
                  <div className="arrow"></div>
                  <a className="dropdown-item" href="#">Action</a>
                  <a className="dropdown-item" href="#">Another action</a>
                  <a className="dropdown-item" href="#">Something else here</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">Separated link</a>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6 col-md-3">
                <div className="card card-stats card-primary card-round">
                  <div className="card-body ">
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
                          <i className="flaticon-graph"></i>
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
              <div className="col-md-8">
                <div className="card">
                  <div className="card-header">
                    <div className="card-head-row">
                      <div className="card-title">Users Statistics</div>
                      <div className="card-tools">
                        <a href="#" className="btn btn-info btn-border btn-round btn-sm mr-2">
                          <span className="btn-label">
                            <i className="la la-pencil"></i>
                          </span>
                          Export
                        </a>
                        <a href="#" className="btn btn-info btn-border btn-round btn-sm">
                          <span className="btn-label">
                            <i className="la la-print"></i>
                          </span>
                          Print
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="chart-container">
                      <canvas id="statisticsChart"></canvas>
                    </div>
                    <div id="myChartLegend"></div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title">Users Percentage</h4>
                    <p className="card-category">
                    Users percentage this month</p>
                  </div>
                  <div className="card-body">
                    <div className="chart-container">
                      <canvas id="usersChart"></canvas>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row row-card-no-pd">
              <div className="col-md-12">
                <div className="card">
                  <div className="card-header">
                    <div className="card-head-row">
                      <h4 className="card-title">Users Geolocation</h4>
                      <div className="card-tools">
                        <a href="#" className="btn btn-primary btn-icon-only"><span className="icon flaticon-down-arrow"></span></a>
                        <a href="#" className="btn btn-primary btn-icon-only"><span className="icon flaticon-repeat"></span></a>
                        <a href="#" className="btn btn-primary btn-icon-only"><span className="icon flaticon-cross"></span></a>
                      </div>
                    </div>
                    <p className="card-category">
                    Map of the distribution of users around the world</p>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="table-responsive table-hover table-sales">
                          <table className="table">
                            <tbody>
                              <tr>
                                <td>
                                  <div className="flag">
                                    <img src="assets/img/flags/id.png" alt="indonesia" />
                                  </div>
                                </td>
                                <td>Indonesia</td>
                                <td className="text-right">
                                  2.320
                                </td>
                                <td className="text-right">
                                  42.18%
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div className="flag">
                                    <img src="assets/img/flags/us.png" alt="united states" />
                                  </div>
                                </td>
                                <td>USA</td>
                                <td className="text-right">
                                  240
                                </td>
                                <td className="text-right">
                                  4.36%
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div className="flag">
                                    <img src="assets/img/flags/au.png" alt="australia" />
                                  </div>
                                </td>
                                <td>Australia</td>
                                <td className="text-right">
                                  119
                                </td>
                                <td className="text-right">
                                  2.16%
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div className="flag">
                                    <img src="assets/img/flags/ru.png" alt="russia" />
                                  </div>
                                </td>
                                <td>Russia</td>
                                <td className="text-right">
                                  1.081
                                </td>
                                <td className="text-right">
                                  19.65%
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div className="flag">
                                    <img src="assets/img/flags/cn.png" alt="china" />
                                  </div>
                                </td>
                                <td>China</td>
                                <td className="text-right">
                                  1.100
                                </td>
                                <td className="text-right">
                                  20%
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div className="flag">
                                    <img src="assets/img/flags/br.png" alt="brazil" />
                                  </div>
                                </td>
                                <td>Brasil</td>
                                <td className="text-right">
                                  640
                                </td>
                                <td className="text-right">
                                  11.63%
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mapcontainer">
                          <div id="map-example" className="vmap"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row row-card-no-pd">
              <div className="col-md-4 mt-3 mb-3">
                <div className="card">
                  <div className="card-body">
                    <p className="fw-mediumbold mt-1">My Balance</p>
                    <h4 className="text-primary"><b>$ 3,018</b></h4>
                    <a href="#" className="btn btn-primary btn-full text-left mt-3 mb-3"><i className="la la-plus"></i> Add Balance</a>
                  </div>
                  <div className="card-footer mt-auto">
                    <ul className="nav">
                      <li className="nav-item"><a className="btn btn-default btn-link" href="#"><i className="la la-history"></i> History</a></li>
                      <li className="nav-item ml-auto"><a className="btn btn-default btn-link" href="#"><i className="la la-refresh"></i> Refresh</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-5 mt-3 mb-3">
                <div className="card">
                  <div className="card-body">
                    <div className="progress-card">
                      <div className="d-flex justify-content-between mb-1">
                        <span className="text-muted">Profit</span>
                        <span className="text-muted fw-bold"> $3K</span>
                      </div>
                      <div className="progress mb-2" >
                        <div className="progress-bar bg-success" role="progressbar" aria-valuenow="78" aria-valuemin="0" aria-valuemax="100" data-toggle="tooltip" data-placement="top" title="78%"></div>
                      </div>
                    </div></div>
                </div>
              </div>
              <div className="col-md-3 mt-3 mb-3">
                <div className="card card-stats">
                  <div className="card-body">
                    <p className="fw-mediumbold mt-1">Statistic</p>
                    <div className="row">
                      <div className="col-5">
                        <div className="icon-big text-center icon-warning">
                          <i className="la la-pie-chart text-warning"></i>
                        </div>
                      </div>
                      <div className="col-7 col-stats">
                        <div className="numbers">
                          <p className="card-category">Number</p>
                          <h4 className="card-title">150GB</h4>
                        </div>
                      </div>
                    </div>
                    <hr/>
                    <div className="row">
                      <div className="col-5">
                        <div className="icon-big text-center">
                          <i className="la la-heart-o text-primary"></i>
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
              <div className="col-md-5">
                <div className="card card-tasks">
                  <div className="card-header ">
                    <div className="card-head-row">
                      <h4 className="card-title">Tasks</h4>
                      <div className="card-tools">
                        <ul className="nav nav-pills nav-secondary nav-pills-no-bd nav-sm" id="pills-tab" role="tablist">
                          <li className="nav-item">
                            <a className="nav-link active" id="pills-home" data-toggle="pill" href="#pills-home" role="tab" aria-selected="true">Today</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" id="pills-profile" data-toggle="pill" href="#pills-profile" role="tab" aria-selected="false">Week</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" id="pills-contact" data-toggle="pill" href="#pills-contact" role="tab" aria-selected="false">Month</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="card-body ">
                    <div className="table-full-width">
                      <table className="table">
                        <thead>
                          <tr>
                            <th>
                              <div className="form-check">
                                <label className="form-check-label">
                                  <input className="form-check-input  select-all-checkbox" type="checkbox" data-select="checkbox" data-target=".task-select" />
                                  <span className="form-check-sign"></span>
                                </label>
                              </div>
                            </th>
                            <th>Task</th>
                            <th className="text-center">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <div className="form-check">
                                <label className="form-check-label">
                                  <input className="form-check-input task-select" type="checkbox" />
                                  <span className="form-check-sign"></span>
                                </label>
                              </div>
                            </td>
                            <td>Planning new project structure</td>
                            <td className="td-actions text-center">
                              <div className="form-button-action">
                                <button type="button" data-toggle="tooltip" title="Edit Task" className="btn btn-link btn-primary">
                                  <i className="la la-edit"></i>
                                </button>
                                <button type="button" data-toggle="tooltip" title="Remove" className="btn btn-link btn-danger">
                                  <i className="la la-times"></i>
                                </button>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="form-check">
                                <label className="form-check-label">
                                  <input className="form-check-input task-select" type="checkbox" />
                                  <span className="form-check-sign"></span>
                                </label>
                              </div>
                            </td>
                            <td>Update Fonts</td>
                            <td className="td-actions text-center">
                              <div className="form-button-action">
                                <button type="button" data-toggle="tooltip" title="Edit Task" className="btn btn-link btn-primary">
                                  <i className="la la-edit"></i>
                                </button>
                                <button type="button" data-toggle="tooltip" title="Remove" className="btn btn-link btn-danger">
                                  <i className="la la-times"></i>
                                </button>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="form-check">
                                <label className="form-check-label">
                                  <input className="form-check-input task-select" type="checkbox" />
                                  <span className="form-check-sign"></span>
                                </label>
                              </div>
                            </td>
                            <td>Add new Post
                            </td>
                            <td className="td-actions text-center">
                              <div className="form-button-action">
                                <button type="button" data-toggle="tooltip" title="Edit Task" className="btn btn-link btn-primary">
                                  <i className="la la-edit"></i>
                                </button>
                                <button type="button" data-toggle="tooltip" title="Remove" className="btn btn-link btn-danger">
                                  <i className="la la-times"></i>
                                </button>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="form-check">
                                <label className="form-check-label">
                                  <input className="form-check-input task-select" type="checkbox" />
                                  <span className="form-check-sign"></span>
                                </label>
                              </div>
                            </td>
                            <td>Finalise the design proposal</td>
                            <td className="td-actions text-center">
                              <div className="form-button-action">
                                <button type="button" data-toggle="tooltip" title="Edit Task" className="btn btn-link btn-primary">
                                  <i className="la la-edit"></i>
                                </button>
                                <button type="button" data-toggle="tooltip" title="Remove" className="btn btn-link btn-danger">
                                  <i className="la la-times"></i>
                                </button>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="card-footer ">
                    <div className="stats">
                      <i className="now-ui-icons loader_refresh spin"></i> Updated 3 minutes ago
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-3">
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title">Task Progress</h4>
                  </div>
                  <div className="card-body">
                    <div id="task-complete" className="chart-circle mt-4 mb-3"></div>
                  </div>
                  <div className="card-footer">
                    <div className="legend"><i className="la la-circle text-primary"></i> Completed</div>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card card-round">
                  <div className="card-body">
                    <div className="card-title">Suggested People</div>
                    <div className="card-list">
                      <div className="item-list">
                        <img src="assets/img/jm_denis.jpg" alt="denis" className="small-pic" />
                        <div className="info-user ml-3">
                          <div className="username">Jimmy Denis</div>
                          <div className="status">Graphic Designer</div>
                        </div>
                        <a href="#" className="btn btn-add">
                          <i className="la la-plus"></i>
                        </a>
                      </div>
                      <div className="item-list">
                        <img src="assets/img/chadengle.jpg" alt="chad" className="small-pic" />
                        <div className="info-user ml-3">
                          <div className="username">Chad</div>
                          <div className="status">CEO Zeleaf</div>
                        </div>
                        <a href="#" className="btn btn-add">
                          <i className="la la-plus"></i>
                        </a>
                      </div>
                      <div className="item-list">
                        <img src="assets/img/mlane.jpg" alt="john doe" className="small-pic" />
                        <div className="info-user ml-3">
                          <div className="username">Jhon doe</div>
                          <div className="status">Content Writer</div>
                        </div>
                        <a href="#" className="btn btn-add">
                          <i className="la la-plus"></i>
                        </a>
                      </div>
                      <div className="item-list">
                        <img src="assets/img/talha.jpg" alt="talha" className="small-pic" />
                        <div className="info-user ml-3">
                          <div className="username">Talha</div>
                          <div className="status">Front End Designer</div>
                        </div>
                        <a href="#" className="btn btn-add">
                          <i className="la la-plus"></i>
                        </a>
                      </div>
                      <div className="item-list">
                        <img src="assets/img/sauro.jpg" alt="sauro" className="small-pic" />
                        <div className="info-user ml-3">
                          <div className="username">Sauro</div>
                          <div className="status">Back End Developer</div>
                        </div>
                        <a href="#" className="btn btn-add">
                          <i className="la la-plus"></i>
                        </a>
                      </div>
                      <div className="item-list">
                        <img src="assets/img/arashmil.jpg" alt="arash mil" className="small-pic" />
                        <div className="info-user ml-3">
                          <div className="username">Arash Mil</div>
                          <div className="status">Content Writer</div>
                        </div>
                        <a href="#" className="btn btn-add">
                          <i className="la la-plus"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="quick-sidebar">
        <a href="#" className="close-quick-sidebar">
          <i className="flaticon-cross"></i>
        </a>
        <div className="quick-sidebar-wrapper">
          <ul className="nav nav-tabs nav-line nav-color-primary" role="tablist">
            <li className="nav-item"> <a className="nav-link active show" data-toggle="tab" href="#messages" role="tab" aria-selected="true">Messages</a> </li>
            <li className="nav-item"> <a className="nav-link" data-toggle="tab" href="#tasks" role="tab" aria-selected="false">Tasks</a> </li>
            <li className="nav-item"> <a className="nav-link" data-toggle="tab" href="#settings" role="tab" aria-selected="false">Settings</a> </li>
          </ul>
          <div className="tab-content mt-3">
            <div className="tab-chat tab-pane fade show active" id="messages" role="tabpanel">
              <div className="messages-contact">
                <div className="quick-wrapper">
                  <div className="quick-scroll scrollbar-outer">
                    <div className="quick-content contact-content">
                      <span className="category-title mt-0">Recent</span>
                      <div className="contact-list contact-list-recent">
                        <div className="user">
                          <a href="#">
                            <div className="user-image">
                              <img src="assets/img/jm_denis.jpg" alt="denis" />
                              <span className="status online"></span>
                            </div>
                            <div className="user-data">
                              <span className="name">Jimmy Denis</span>
                              <span className="message">How are you ?</span>
                            </div>
                          </a>
                        </div>
                        <div className="user">
                          <a href="#">
                            <div className="user-image">
                              <img src="assets/img/chadengle.jpg" alt="chad" />
                              <span className="status away"></span>
                            </div>
                            <div className="user-data">
                              <span className="name">Chad</span>
                              <span className="message">Ok, Thanks !</span>
                            </div>
                          </a>
                        </div>
                        <div className="user">
                          <a href="#">
                            <div className="user-image">
                              <img src="assets/img/mlane.jpg" alt="john doe" />
                              <span className="status offline"></span>
                            </div>
                            <div className="user-data">
                              <span className="name">John Doe</span>
                              <span className="message">Ready for the meeting today with...</span>
                            </div>
                          </a>
                        </div>
                      </div>
                      <span className="category-title">Contacts</span>
                      <div className="contact-list">
                        <div className="user">
                          <a href="#">
                            <div className="user-image">
                              <img src="assets/img/jm_denis.jpg" alt="denis" />
                              <span className="status"></span>
                            </div>
                            <div className="user-data2">
                              <span className="name">Jimmy Denis</span>
                            </div>
                          </a>
                        </div>
                        <div className="user">
                          <a href="#">
                            <div className="user-image">
                              <img src="assets/img/chadengle.jpg" alt="chad" />
                              <span className="status away"></span>
                            </div>
                            <div className="user-data2">
                              <span className="name">Chad</span>
                            </div>
                          </a>
                        </div>
                        <div className="user">
                          <a href="#">
                            <div className="user-image">
                              <img src="assets/img/talha.jpg" alt="talha" />
                              <span className="status offline"></span>
                            </div>
                            <div className="user-data2">
                              <span className="name">Talha</span>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="messages-wrapper">
                <div className="messages-title">
                  <div className="user">
                    <img src="assets/img/chadengle.jpg" alt="chad" />
                    <span className="name">Chad</span>
                    <span className="last-active">Active 2h ago</span>
                  </div>
                  <button className="return">
                    <i className="flaticon-left-arrow-3"></i>
                  </button>
                </div>
                <div className="messages-body messages-scroll scrollbar-outer" />
                  <div className="message-content-wrapper">
                    <div className="message message-in">
                      <div className="message-pic">
                        <img src="assets/img/chadengle.jpg" alt="chad" />
                      </div>
                      <div className="message-body">
                        <div className="message-content">
                          <div className="name">Chad</div>
                          <div className="content">Hello, Rian</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="message-content-wrapper">
                    <div className="message message-out">
                      <div className="message-body">
                        <div className="message-content">
                          <div className="content">
                            Hello, Chad
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="message-content-wrapper">
                    <div className="message message-in">
                      <div className="message-pic">
                        <img src="assets/img/chadengle.jpg" alt="chad" />
                      </div>
                      <div className="message-body">
                        <div className="message-content">
                          <div className="name">Chad</div>
                          <div className="content">
                            When is the deadline of the project we are working on ?
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="message-content-wrapper">
                    <div className="message message-out">
                      <div className="message-body">
                        <div className="message-content">
                          <div className="content">
                            The deadline is about 2 months away
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="message-content-wrapper">
                    <div className="message message-in">
                      <div className="message-pic">
                        <img src="assets/img/chadengle.jpg" alt="chad" />
                      </div>
                      <div className="message-body">
                        <div className="message-content">
                          <div className="name">Chad</div>
                          <div className="content">
                            Ok, Thanks !
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="messages-form">
                  <div className="messages-form-control">
                    <input type="text" placeholder="Type here" className="form-control input-pill input-solid message-input" />
                  </div>
                  <div className="messages-form-tool">
                    <a href="#" className="attachment">
                      <i className="flaticon-file"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="tasks" role="tabpanel">
              <div className="tasks-wrapper">
                <div className="tasks-scroll scrollbar-outer">
                  <div className="tasks-content">
                    <span className="category-title mt-0">Today</span>
                    <ul className="tasks-list">
                      <li>
                        <label className="custom-checkbox custom-control checkbox-secondary">
                          <input type="checkbox" className="custom-control-input" /><span className="custom-control-label">Planning new project structure</span>
                          <span className="task-action">
                            <a href="#" className="link text-danger">
                              <i className="flaticon-interface-5"></i>
                            </a>
                          </span>
                        </label>
                      </li>
                      <li>
                        <label className="custom-checkbox custom-control checkbox-secondary">
                          <input type="checkbox" className="custom-control-input" /><span className="custom-control-label">Create the main structure							</span>
                          <span className="task-action">
                            <a href="#" className="link text-danger">
                              <i className="flaticon-interface-5"></i>
                            </a>
                          </span>
                        </label>
                      </li>
                      <li>
                        <label className="custom-checkbox custom-control checkbox-secondary">
                          <input type="checkbox" className="custom-control-input" /><span className="custom-control-label">Add new Post</span>
                          <span className="task-action">
                            <a href="#" className="link text-danger">
                              <i className="flaticon-interface-5"></i>
                            </a>
                          </span>
                        </label>
                      </li>
                      <li>
                        <label className="custom-checkbox custom-control checkbox-secondary">
                          <input type="checkbox" className="custom-control-input" /><span className="custom-control-label">Finalise the design proposal</span>
                          <span className="task-action">
                            <a href="#" className="link text-danger">
                              <i className="flaticon-interface-5"></i>
                            </a>
                          </span>
                        </label>
                      </li>
                    </ul>

                    <span className="category-title">Tomorrow</span>
                    <ul className="tasks-list">
                      <li>
                        <label className="custom-checkbox custom-control checkbox-secondary">
                          <input type="checkbox" className="custom-control-input" /><span className="custom-control-label">Initialize the project							</span>
                          <span className="task-action">
                            <a href="#" className="link text-danger">
                              <i className="flaticon-interface-5"></i>
                            </a>
                          </span>
                        </label>
                      </li>
                      <li>
                        <label className="custom-checkbox custom-control checkbox-secondary">
                          <input type="checkbox" className="custom-control-input" /><span className="custom-control-label">Create the main structure							</span>
                          <span className="task-action">
                            <a href="#" className="link text-danger">
                              <i className="flaticon-interface-5"></i>
                            </a>
                          </span>
                        </label>
                      </li>
                      <li>
                        <label className="custom-checkbox custom-control checkbox-secondary">
                          <input type="checkbox" className="custom-control-input" /><span className="custom-control-label">Updates changes to GitHub							</span>
                          <span className="task-action">
                            <a href="#" className="link text-danger">
                              <i className="flaticon-interface-5"></i>
                            </a>
                          </span>
                        </label>
                      </li>
                      <li>
                        <label className="custom-checkbox custom-control checkbox-secondary">
                          <input type="checkbox" className="custom-control-input" /><span title="This task is too long to be displayed in a normal space!" className="custom-control-label">This task is too long to be displayed in a normal space!				</span>
                          <span className="task-action">
                            <a href="#" className="link text-danger">
                              <i className="flaticon-interface-5"></i>
                            </a>
                          </span>
                        </label>
                      </li>
                    </ul>

                    <div className="mt-3">
                      <div className="btn btn-primary btn-rounded btn-sm">
                        <span className="btn-label">
                          <i className="la la-plus"></i>
                        </span>
                        Add Task
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="settings" role="tabpanel">
              <div className="quick-wrapper settings-wrapper">
                <div className="quick-scroll scrollbar-outer">
                  <div className="quick-content settings-content">
                    <span className="category-title mt-0">General Settings</span>
                    <ul className="settings-list">
                      <li>
                        <span className="item-label">Enable Notifications</span>
                        <div className="item-control">
                          <input type="checkbox" data-toggle="toggle" data-onstyle="primary" data-style="btn-round" />
                        </div>
                      </li>
                      <li>
                        <span className="item-label">Signin with social media</span>
                        <div className="item-control">
                          <input type="checkbox" data-toggle="toggle" data-onstyle="primary" data-style="btn-round" />
                        </div>
                      </li>
                      <li>
                        <span className="item-label">Backup storage</span>
                        <div className="item-control">
                          <input type="checkbox" data-toggle="toggle" data-onstyle="primary" data-style="btn-round" />
                        </div>
                      </li>
                      <li>
                        <span className="item-label">SMS Alert</span>
                        <div className="item-control">
                          <input type="checkbox" data-toggle="toggle" data-onstyle="primary" data-style="btn-round" />
                        </div>
                      </li>
                    </ul>

                    <span className="category-title mt-0">Notifications</span>
                    <ul className="settings-list">
                      <li>
                        <span className="item-label">Email Notifications</span>
                        <div className="item-control">
                          <input type="checkbox" data-toggle="toggle" data-onstyle="primary" data-style="btn-round" />
                        </div>
                      </li>
                      <li>
                        <span className="item-label">New Comments</span>
                        <div className="item-control">
                          <input type="checkbox" data-toggle="toggle" data-onstyle="primary" data-style="btn-round" />
                        </div>
                      </li>
                      <li>
                        <span className="item-label">Chat Messages</span>
                        <div className="item-control">
                          <input type="checkbox" data-toggle="toggle" data-onstyle="primary" data-style="btn-round" />
                        </div>
                      </li>
                      <li>
                        <span className="item-label">Project Updates</span>
                        <div className="item-control">
                          <input type="checkbox" data-toggle="toggle" data-onstyle="primary" data-style="btn-round" />
                        </div>
                      </li>
                      <li>
                        <span className="item-label">New Tasks</span>
                        <div className="item-control">
                          <input type="checkbox" data-toggle="toggle" data-onstyle="primary" data-style="btn-round" />
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>


  )
}
