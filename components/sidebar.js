export default function SideBar() {
  return (
  <div className="sidebar">
    <div className="sidebar-background"></div>
    <div className="sidebar-wrapper scrollbar-inner">
      <div className="sidebar-content">
        <div className="user">
          <div className="photo">
            <img src="../assets/img/profile.jpg" alt="image profile" />
          </div>
          <div className="info">
            <a data-toggle="collapse" href="#collapseExample" aria-expanded="true">
              <span>
                Hizrian
                <span className="user-level">Administrator</span>
                <span className="caret"></span>
              </span>
            </a>
            <div className="clearfix"></div>

            <div className="collapse in" id="collapseExample">
              <ul className="nav">
                <li>
                  <a href="#profile">
                    <span className="link-collapse">My Profile</span>
                  </a>
                </li>
                <li>
                  <a href="#edit">
                    <span className="link-collapse">Edit Profile</span>
                  </a>
                </li>
                <li>
                  <a href="#settings">
                    <span className="link-collapse">Settings</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <ul className="nav">
          <li className="nav-item active">
            <a href="/">
              <i className="flaticon-home"></i>
              <p>Dashboard</p>
              <span className="badge badge-count">5</span>
            </a>
          </li>
          <li className="nav-section">
            <span className="sidebar-mini-icon">
              <i className="la la-ellipsis-h"></i>
            </span>
            <h4 className="text-section">Components</h4>
          </li>
          <li className="nav-item">
            <a data-toggle="collapse" href="#base">
              <i className="flaticon-layers"></i>
              <p>Base</p>
              <span className="caret"></span>
            </a>
            <div className="collapse" id="base">
              <ul className="nav nav-collapse">
                <li>
                  <a href="components/buttons">
                    <span className="sub-item">Buttons</span>
                  </a>
                </li>
                <li>
                  <a href="components/gridsystem">
                    <span className="sub-item">Grid System</span>
                  </a>
                </li>
                <li>
                  <a href="components/panels">
                    <span className="sub-item">Panels</span>
                  </a>
                </li>
                <li>
                  <a href="components/notifications">
                    <span className="sub-item">Notifications</span>
                  </a>
                </li>
                <li>
                  <a href="components/sweetalert">
                    <span className="sub-item">Sweet Alert</span>
                  </a>
                </li>
                <li>
                  <a href="components/line-awesome-icons">
                    <span className="sub-item">Line Awesome Icons</span>
                  </a>
                </li>
                <li>
                  <a href="components/flaticons">
                    <span className="sub-item">Flaticons</span>
                  </a>
                </li>
                <li>
                  <a href="components/typography">
                    <span className="sub-item">Typography</span>
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <a data-toggle="collapse" href="#forms">
              <i className="flaticon-agenda-1"></i>
              <p>Forms</p>
              <span className="caret"></span>
            </a>
            <div className="collapse" id="forms">
              <ul className="nav nav-collapse">
                <li>
                  <a href="forms/forms">
                    <span className="sub-item">Basic Form</span>
                  </a>
                </li>
                <li>
                  <a href="forms/formvalidation">
                    <span className="sub-item">Form Validation</span>
                  </a>
                </li>
                <li>
                  <a href="forms/formwidget">
                    <span className="sub-item">Form Widget</span>
                  </a>
                </li>
                <li>
                  <a href="forms/formwizard">
                    <span className="sub-item">Form Wizard</span>
                  </a>
                </li>
                <li>
                  <a href="forms/formupload">
                    <span className="sub-item">Multiple Upload</span>
                  </a>
                </li>
                <li>
                  <a href="forms/formwysiwyg">
                    <span className="sub-item">WYSIWYG Editor</span>
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <a data-toggle="collapse" href="#tables">
              <i className="flaticon-box"></i>
              <p>Tables</p>
              <span className="caret"></span>
            </a>
            <div className="collapse" id="tables">
              <ul className="nav nav-collapse">
                <li>
                  <a href="tables/tables">
                    <span className="sub-item">Basic Table</span>
                  </a>
                </li>
                <li>
                  <a href="tables/datatables">
                    <span className="sub-item">Datatables</span>
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <a data-toggle="collapse" href="#maps">
              <i className="flaticon-placeholder"></i>
              <p>Maps</p>
              <span className="caret"></span>
            </a>
            <div className="collapse" id="maps">
              <ul className="nav nav-collapse">
                <li>
                  <a href="maps/googlemaps">
                    <span className="sub-item">Google Maps</span>
                  </a>
                </li>
                <li>
                  <a href="maps/fullscreenmaps">
                    <span className="sub-item">Full Screen Maps</span>
                  </a>
                </li>
                <li>
                  <a href="maps/jqvmap">
                    <span className="sub-item">JQVMap</span>
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <a href="/charts">
              <i className="flaticon-graph"></i>
              <p>Charts</p>
              <span className="badge badge-count badge-primary">8</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="calendar">
              <i className="flaticon-calendar"></i>
              <p>Calendar</p>
              <span className="badge badge-count badge-info">1</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="widgets">
              <i className="flaticon-web"></i>
              <p>Widgets</p>
              <span className="badge badge-count badge-success">4</span>
            </a>
          </li>
          <li className="nav-section">
            <span className="sidebar-mini-icon">
              <i className="la la-ellipsis-h"></i>
            </span>
            <h4 className="text-section">Snippets</h4>
          </li>
          <li className="nav-item">
            <a data-toggle="collapse" href="#email-nav">
              <i className="flaticon-mailbox"></i>
              <p>Email</p>
              <span className="caret"></span>
            </a>
            <div className="collapse" id="email-nav">
              <ul className="nav nav-collapse">
                <li>
                  <a href="email-inbox">
                    <span className="sub-item">Inbox</span>
                  </a>
                </li>
                <li>
                  <a href="email-compose">
                    <span className="sub-item">Email Compose</span>
                  </a>
                </li>
                <li>
                  <a href="email-detail">
                    <span className="sub-item">Email Detail</span>
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <a href="invoice">
              <i className="flaticon-file-1"></i>
              <p>Invoices</p>
              <span className="badge badge-count">6</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="pricing">
              <i className="flaticon-price-tag"></i>
              <p>Pricing</p>
              <span className="badge badge-count">6</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="faqs">
              <i className="flaticon-round"></i>
              <p>Faqs</p>
              <span className="badge badge-count">6</span>
            </a>
          </li>
          <li className="nav-item">
            <a data-toggle="collapse" href="#custompages">
              <i className="flaticon-placeholder"></i>
              <p>Custom Pages</p>
              <span className="caret"></span>
            </a>
            <div className="collapse" id="custompages">
              <ul className="nav nav-collapse">
                <li>
                  <a href="login">
                    <span className="sub-item">Login</span>
                  </a>
                </li>
                <li>
                  <a href="userprofile">
                    <span className="sub-item">User Profile</span>
                  </a>
                </li>
                <li>
                  <a href="404">
                    <span className="sub-item">404</span>
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <a data-toggle="collapse" href="#submenu">
              <i className="flaticon-mailbox"></i>
              <p>Menu Levels</p>
              <span className="caret"></span>
            </a>
            <div className="collapse" id="submenu">
              <ul className="nav nav-collapse">
                <li>
                  <a data-toggle="collapse" href="#subnav1">
                    <span className="sub-item">Level 1</span>
                    <span className="caret"></span>
                  </a>
                  <div className="collapse" id="subnav1">
                    <ul className="nav nav-collapse subnav">
                      <li>
                        <a href="#">
                          <span className="sub-item">Level 2</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span className="sub-item">Level 2</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a data-toggle="collapse" href="#subnav2">
                    <span className="sub-item">Level 1</span>
                    <span className="caret"></span>
                  </a>
                  <div className="collapse" id="subnav2">
                    <ul className="nav nav-collapse subnav">
                      <li>
                        <a href="#">
                          <span className="sub-item">Level 2</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="#">
                    <span className="sub-item">Level 1</span>
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
  )
}