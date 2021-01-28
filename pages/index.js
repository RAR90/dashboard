import Head from 'next/head'
import styles from '../styles/Home.module.css'
import QuickSidebar from '../components/quick-sidebar'

export default function Home() {
  return (
    <div className={styles.container}>

      <Head>
        <title>Next.js Dashboard</title>
        <link rel="icon" href="assets/img/favicon.ico" />
      </Head>

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

      <QuickSidebar />

    </div>


  )
}
