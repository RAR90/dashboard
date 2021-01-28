import Head from 'next/head'
import MainHeader from '../components/main-header'
import SideBar from '../components/sidebar'
import styles from '../styles/Home.module.css'
import QuickSidebar from '../components/quick-sidebar'

export default function GridSystem() {
  return (
    <div className={styles.container}>

      <Head>
        <title>Next.js Charts</title>
        <link rel="icon" href="assets/img/favicon.ico" />
      </Head>

      <div className="main-panel">
        <div className="content">
          <div className="container-fluid">
            <div className="page-header">
              <h4 className="page-title">Grid System</h4>
              <ul className="breadcrumbs">
                <li className="nav-home">
                  <a href="gridsystem.html#">
                    <i className="flaticon-home"></i>
                  </a>
                </li>
                <li className="separator">
                  <i className="flaticon-right-arrow"></i>
                </li>
                <li className="nav-item">
                  <a href="gridsystem.html#">Base</a>
                </li>
                <li className="separator">
                  <i className="flaticon-right-arrow"></i>
                </li>
                <li className="nav-item">
                  <a href="gridsystem.html#">Grid System</a>
                </li>
              </ul>
            </div>
            <div className="card">
              <div className="card-body">

                <h4 className="card-title mt-3">XL Grid</h4>
                <div className="row row-demo-grid">
                  <div className="col-xl-4">
                    <div className="card">
                      <div className="card-body"><code>.col-xl-4</code></div>
                    </div>
                  </div>
                  <div className="col-xl-4">
                    <div className="card">
                      <div className="card-body"><code>.col-xl-4</code></div>
                    </div>
                  </div>
                  <div className="col-xl-4">
                    <div className="card">
                      <div className="card-body"><code>.col-xl-4</code></div>
                    </div>
                  </div>
                </div>

                <h4 className="card-title">LG Grid (Collapsed at 992px)</h4>
                <div className="row row-demo-grid">
                  <div className="col-lg-4">
                    <div className="card">
                      <div className="card-body"><code>.col-lg-4</code></div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="card">
                      <div className="card-body"><code>.col-lg-4</code></div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="card">
                      <div className="card-body"><code>.col-lg-4</code></div>
                    </div>
                  </div>
                </div>

                <h4 className="card-title">MD Grid (Collapsed at 768px)</h4>
                <div className="row row-demo-grid">
                  <div className="col-md-4">
                    <div className="card">
                      <div className="card-body"><code>.col-md-4</code></div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card">
                      <div className="card-body"><code>.col-md-4</code></div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card">
                      <div className="card-body"><code>.col-md-4</code></div>
                    </div>
                  </div>
                </div>

                <h4 className="card-title">SM Grid (Collapsed at 576px)</h4>
                <div className="row row-demo-grid">
                  <div className="col-sm-4">
                    <div className="card">
                      <div className="card-body"><code>.col-sm-4</code></div>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="card">
                      <div className="card-body"><code>.col-sm-4</code></div>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="card">
                      <div className="card-body"><code>.col-sm-4</code></div>
                    </div>
                  </div>
                </div>

                <h4 className="card-title">XS Grid</h4>
                <div className="row row-demo-grid">
                  <div className="col-4">
                    <div className="card">
                      <div className="card-body"><code>.col-4</code></div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="card">
                      <div className="card-body"><code>.col-4</code></div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="card">
                      <div className="card-body"><code>.col-4</code></div>
                    </div>
                  </div>
                </div>

                <h4 className="card-title">Equality Width</h4>
                <div className="row row-demo-grid">
                  <div className="col">
                    <div className="card">
                      <div className="card-body"><code>col</code></div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card">
                      <div className="card-body"><code>col</code></div>
                    </div>
                  </div>
                </div>
                <div className="row row-demo-grid">
                  <div className="col">
                    <div className="card">
                      <div className="card-body"><code>col</code></div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card">
                      <div className="card-body"><code>col</code></div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card">
                      <div className="card-body"><code>col</code></div>
                    </div>
                  </div>
                </div>

                <h4 className="card-title">Setting one column width</h4>
                <div className="row row-demo-grid">
                  <div className="col">
                    <div className="card">
                      <div className="card-body"><code>col</code></div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="card">
                      <div className="card-body"><code>col-6</code></div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card">
                      <div className="card-body"><code>col</code></div>
                    </div>
                  </div>
                </div>

                <h4 className="card-title">Mix and Match (Showing different sizes on different screens)</h4>

                <div className="row row-demo-grid">
                  <div className="col-12 col-md-8">
                    <div className="card">
                      <div className="card-body"><code>col-12 col-md-8</code></div>
                    </div>
                  </div>
                  <div className="col-6 col-md-4">
                    <div className="card">
                      <div className="card-body"><code>col-6 col-md-6</code></div>
                    </div>
                  </div>
                </div>

                <div className="row row-demo-grid">
                  <div className="col-sm-6 col-md-3">
                    <div className="card">
                      <div className="card-body"><code>col-sm-6 col-md-3</code></div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-3">
                    <div className="card">
                      <div className="card-body"><code>col-sm-6 col-md-3</code></div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-3">
                    <div className="card">
                      <div className="card-body"><code>col-sm-6 col-md-3</code></div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-3">
                    <div className="card">
                      <div className="card-body"><code>col-sm-6 col-md-3</code></div>
                    </div>
                  </div>
                </div>

                <div className="row row-demo-grid">
                  <div className="col-6">
                    <div className="card">
                      <div className="card-body"><code>col-6</code></div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="card">
                      <div className="card-body"><code>col-6</code></div>
                    </div>
                  </div>
                </div>

                <h4 className="card-title">Offset Grid (Adding some space when needed)</h4>
                <div className="row row-demo-grid">
                  <div className="col-md-4">
                    <div className="card">
                      <div className="card-body text-center">
                        <code>col-md-4</code>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 ml-auto">
                    <div className="card">
                      <div className="card-body text-center">
                        <code>col-md-4 ml-auto</code>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row row-demo-grid">
                  <div className="col-md-4 ml-auto mr-auto">
                    <div className="card">
                      <div className="card-body text-center">
                        <code>col-md-4 ml-auto mr-auto</code>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 ml-auto mr-auto">
                    <div className="card">
                      <div className="card-body text-center">
                        <code>col-md-4 ml-auto mr-auto</code>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row row-demo-grid">
                  <div className="col-md-6 ml-auto mr-auto">
                    <div className="card">
                      <div className="card-body text-center">
                        <code>col-md-6 ml-auto mr-auto</code>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
                </div>
        <div className="quick-sidebar">
          <a href="gridsystem.html#" className="close-quick-sidebar">
            <i className="flaticon-cross"></i>
          </a>
          <div className="quick-sidebar-wrapper">
            <ul className="nav nav-tabs nav-line nav-color-primary" role="tablist">
              <li className="nav-item"> <a className="nav-link active show" data-toggle="tab" href="gridsystem.html#messages" role="tab" aria-selected="true">Messages</a> </li>
              <li className="nav-item"> <a className="nav-link" data-toggle="tab" href="gridsystem.html#tasks" role="tab" aria-selected="false">Tasks</a> </li>
              <li className="nav-item"> <a className="nav-link" data-toggle="tab" href="gridsystem.html#settings" role="tab" aria-selected="false">Settings</a> </li>
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
                            <a href="gridsystem.html#">
                              <div className="user-image">
                                <img src="../../assets/img/jm_denis.jpg" alt="denis" />
                                <span className="status online"></span>
                              </div>
                              <div className="user-data">
                                <span className="name">Jimmy Denis</span>
                                <span className="message">How are you ?</span>
                              </div>
                            </a>
                          </div>
                          <div className="user">
                            <a href="gridsystem.html#">
                              <div className="user-image">
                                <img src="../../assets/img/chadengle.jpg" alt="chad" />
                                <span className="status away"></span>
                              </div>
                              <div className="user-data">
                                <span className="name">Chad</span>
                                <span className="message">Ok, Thanks !</span>
                              </div>
                            </a>
                          </div>
                          <div className="user">
                            <a href="gridsystem.html#">
                              <div className="user-image">
                                <img src="../../assets/img/mlane.jpg" alt="john doe" />
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
                            <a href="gridsystem.html#">
                              <div className="user-image">
                                <img src="../../assets/img/jm_denis.jpg" alt="denis" />
                                <span className="status"></span>
                              </div>
                              <div className="user-data2">
                                <span className="name">Jimmy Denis</span>
                              </div>
                            </a>
                          </div>
                          <div className="user">
                            <a href="gridsystem.html#">
                              <div className="user-image">
                                <img src="../../assets/img/chadengle.jpg" alt="chad" />
                                <span className="status away"></span>
                              </div>
                              <div className="user-data2">
                                <span className="name">Chad</span>
                              </div>
                            </a>
                          </div>
                          <div className="user">
                            <a href="gridsystem.html#">
                              <div className="user-image">
                                <img src="../../assets/img/talha.jpg" alt="talha" />
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
                      <img src="../../assets/img/chadengle.jpg" alt="chad" />
                      <span className="name">Chad</span>
                      <span className="last-active">Active 2h ago</span>
                    </div>
                    <button className="return">
                      <i className="flaticon-left-arrow-3"></i>
                    </button>
                  </div>
                  <div className="messages-body messages-scroll scrollbar-outer">
                    <div className="message-content-wrapper">
                      <div className="message message-in">
                        <div className="message-pic">
                          <img src="../../assets/img/chadengle.jpg" alt="chad" />
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
                          <img src="../../assets/img/chadengle.jpg" alt="chad" />
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
                          <img src="../../assets/img/chadengle.jpg" alt="chad" />
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
                      <a href="gridsystem.html#" className="attachment">
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
                              <a href="gridsystem.html#" className="link text-danger">
                                <i className="flaticon-interface-5"></i>
                              </a>
                            </span>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox custom-control checkbox-secondary">
                            <input type="checkbox" className="custom-control-input" /><span className="custom-control-label">Create the main structure							</span>
                            <span className="task-action">
                              <a href="gridsystem.html#" className="link text-danger">
                                <i className="flaticon-interface-5"></i>
                              </a>
                            </span>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox custom-control checkbox-secondary">
                            <input type="checkbox" className="custom-control-input" /><span className="custom-control-label">Add new Post</span>
                            <span className="task-action">
                              <a href="gridsystem.html#" className="link text-danger">
                                <i className="flaticon-interface-5"></i>
                              </a>
                            </span>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox custom-control checkbox-secondary">
                            <input type="checkbox" className="custom-control-input" /><span className="custom-control-label">Finalise the design proposal</span>
                            <span className="task-action">
                              <a href="gridsystem.html#" className="link text-danger">
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
                              <a href="gridsystem.html#" className="link text-danger">
                                <i className="flaticon-interface-5"></i>
                              </a>
                            </span>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox custom-control checkbox-secondary">
                            <input type="checkbox" className="custom-control-input" /><span className="custom-control-label">Create the main structure							</span>
                            <span className="task-action">
                              <a href="gridsystem.html#" className="link text-danger">
                                <i className="flaticon-interface-5"></i>
                              </a>
                            </span>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox custom-control checkbox-secondary">
                            <input type="checkbox" className="custom-control-input" /><span className="custom-control-label">Updates changes to GitHub							</span>
                            <span className="task-action">
                              <a href="gridsystem.html#" className="link text-danger">
                                <i className="flaticon-interface-5"></i>
                              </a>
                            </span>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox custom-control checkbox-secondary">
                            <input type="checkbox" className="custom-control-input" /><span title="This task is too long to be displayed in a normal space!" className="custom-control-label">This task is too long to be displayed in a normal space!				</span>
                            <span className="task-action">
                              <a href="gridsystem.html#" className="link text-danger">
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
        <div className="custom-template">
          <div className="title">Settings</div>
          <div className="custom-content">
            <div className="switcher">
              <div className="switch-block">
                <h4>Topbar</h4>
                <div className="btnSwitch">
                  <button type="button" className="changeTopBarColor" data-color="default"></button>
                  <button type="button" className="changeTopBarColor" data-color="black"></button>
                  <button type="button" className="changeTopBarColor" data-color="dark"></button>
                  <button type="button" className="selected changeTopBarColor" data-color="blue"></button>
                  <button type="button" className="changeTopBarColor" data-color="purple"></button>
                  <button type="button" className="changeTopBarColor" data-color="light-blue"></button>
                  <button type="button" className="changeTopBarColor" data-color="green"></button>
                  <button type="button" className="changeTopBarColor" data-color="orange"></button>
                  <button type="button" className="changeTopBarColor" data-color="red"></button>
                </div>
              </div>
              <div className="switch-block">
                <h4>Logo Header</h4>
                <div className="btnSwitch">
                  <button type="button" className="selected changeLogoHeaderColor" data-color="default"></button>
                  <button type="button" className="changeLogoHeaderColor" data-color="black"></button>
                  <button type="button" className="changeLogoHeaderColor" data-color="dark"></button>
                  <button type="button" className="changeLogoHeaderColor" data-color="blue"></button>
                  <button type="button" className="changeLogoHeaderColor" data-color="purple"></button>
                  <button type="button" className="changeLogoHeaderColor" data-color="light-blue"></button>
                  <button type="button" className="changeLogoHeaderColor" data-color="green"></button>
                  <button type="button" className="changeLogoHeaderColor" data-color="orange"></button>
                  <button type="button" className="changeLogoHeaderColor" data-color="red"></button>
                </div>
              </div>
              <div className="switch-block">
                <h4>Sidebar</h4>
                <div className="btnSwitch">
                  <button type="button" className="selected changeSidebarColor" data-color="default"></button>
                  <button type="button" className="changeSidebarColor" data-color="black"></button>
                  <button type="button" className="changeSidebarColor" data-color="dark"></button>
                  <button type="button" className="changeSidebarColor" data-color="blue"></button>
                  <button type="button" className="changeSidebarColor" data-color="purple"></button>
                  <button type="button" className="changeSidebarColor" data-color="light-blue"></button>
                  <button type="button" className="changeSidebarColor" data-color="green"></button>
                  <button type="button" className="changeSidebarColor" data-color="orange"></button>
                  <button type="button" className="changeSidebarColor" data-color="red"></button>
                </div>
              </div>
              <div className="switch-block">
                <h4>Background</h4>
                <div className="btnSwitch">
                  <button type="button" className="changeBackgroundColor" data-color="bg2"></button>
                  <button type="button" className="changeBackgroundColor selected" data-color="bg1"></button>
                  <button type="button" className="changeBackgroundColor" data-color="bg3"></button>
                </div>
              </div>
              <div className="switch-block">
                <div className="form-group d-flex p-0 align-items-center">
                  <h4>Image Background</h4>
                  <div className="ml-auto">
                    <input id="custom-image-background" type="checkbox" data-toggle="toggle" data-onstyle="primary" data-style="btn-round" />
                  </div>
                </div>
              </div>
              <div className="switch-block mt-3">
                <h4>Pick Image:</h4>
                <div className="row images-pick m-0 mt-3 mb-5">
                  <div className="col-4 col-md-3 img-pick active">
                    <img src="../../assets/img/sidebar-images/1.jpg" alt="sidebar background" />
                  </div>
                  <div className="col-4 col-md-3 img-pick">
                    <img src="../../assets/img/sidebar-images/2.jpg" alt="sidebar background" />
                  </div>
                  <div className="col-4 col-md-3 img-pick">
                    <img src="../../assets/img/sidebar-images/3.jpg" alt="sidebar background" />
                  </div>
                  <div className="col-4 col-md-3 img-pick">
                    <img src="../../assets/img/sidebar-images/4.jpg" alt="sidebar background" />
                  </div>
                  <div className="col-4 col-md-3 img-pick">
                    <img src="../../assets/img/sidebar-images/5.jpg" alt="sidebar background" />
                  </div>
                  <div className="col-4 col-md-3 img-pick">
                    <img src="../../assets/img/sidebar-images/6.jpg" alt="sidebar background" />
                  </div>
                  <div className="col-4 col-md-3 img-pick">
                    <img src="../../assets/img/sidebar-images/7.jpg" alt="sidebar background" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="custom-toggle">
            <i className="flaticon-settings"></i>
          </div>
        </div>
      </div>

      <QuickSidebar />

    </div>

  )
}
