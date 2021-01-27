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
            <a data-toggle="collapse" href="index.html#collapseExample" aria-expanded="true">
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
                  <a href="index.html#profile">
                    <span className="link-collapse">My Profile</span>
                  </a>
                </li>
                <li>
                  <a href="index.html#edit">
                    <span className="link-collapse">Edit Profile</span>
                  </a>
                </li>
                <li>
                  <a href="index.html#settings">
                    <span className="link-collapse">Settings</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <ul className="nav">
          <li className="nav-item active">
            <a href="index.html">
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
            <a data-toggle="collapse" href="index.html#base">
              <i className="flaticon-layers"></i>
              <p>Base</p>
              <span className="caret"></span>
            </a>
            <div className="collapse" id="base">
              <ul className="nav nav-collapse">
                <li>
                  <a href="components/buttons.html">
                    <span className="sub-item">Buttons</span>
                  </a>
                </li>
                <li>
                  <a href="components/gridsystem.html">
                    <span className="sub-item">Grid System</span>
                  </a>
                </li>
                <li>
                  <a href="components/panels.html">
                    <span className="sub-item">Panels</span>
                  </a>
                </li>
                <li>
                  <a href="components/notifications.html">
                    <span className="sub-item">Notifications</span>
                  </a>
                </li>
                <li>
                  <a href="components/sweetalert.html">
                    <span className="sub-item">Sweet Alert</span>
                  </a>
                </li>
                <li>
                  <a href="components/line-awesome-icons.html">
                    <span className="sub-item">Line Awesome Icons</span>
                  </a>
                </li>
                <li>
                  <a href="components/flaticons.html">
                    <span className="sub-item">Flaticons</span>
                  </a>
                </li>
                <li>
                  <a href="components/typography.html">
                    <span className="sub-item">Typography</span>
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <a data-toggle="collapse" href="index.html#forms">
              <i className="flaticon-agenda-1"></i>
              <p>Forms</p>
              <span className="caret"></span>
            </a>
            <div className="collapse" id="forms">
              <ul className="nav nav-collapse">
                <li>
                  <a href="forms/forms.html">
                    <span className="sub-item">Basic Form</span>
                  </a>
                </li>
                <li>
                  <a href="forms/formvalidation.html">
                    <span className="sub-item">Form Validation</span>
                  </a>
                </li>
                <li>
                  <a href="forms/formwidget.html">
                    <span className="sub-item">Form Widget</span>
                  </a>
                </li>
                <li>
                  <a href="forms/formwizard.html">
                    <span className="sub-item">Form Wizard</span>
                  </a>
                </li>
                <li>
                  <a href="forms/formupload.html">
                    <span className="sub-item">Multiple Upload</span>
                  </a>
                </li>
                <li>
                  <a href="forms/formwysiwyg.html">
                    <span className="sub-item">WYSIWYG Editor</span>
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <a data-toggle="collapse" href="index.html#tables">
              <i className="flaticon-box"></i>
              <p>Tables</p>
              <span className="caret"></span>
            </a>
            <div className="collapse" id="tables">
              <ul className="nav nav-collapse">
                <li>
                  <a href="tables/tables.html">
                    <span className="sub-item">Basic Table</span>
                  </a>
                </li>
                <li>
                  <a href="tables/datatables.html">
                    <span className="sub-item">Datatables</span>
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <a data-toggle="collapse" href="index.html#maps">
              <i className="flaticon-placeholder"></i>
              <p>Maps</p>
              <span className="caret"></span>
            </a>
            <div className="collapse" id="maps">
              <ul className="nav nav-collapse">
                <li>
                  <a href="maps/googlemaps.html">
                    <span className="sub-item">Google Maps</span>
                  </a>
                </li>
                <li>
                  <a href="maps/fullscreenmaps.html">
                    <span className="sub-item">Full Screen Maps</span>
                  </a>
                </li>
                <li>
                  <a href="maps/jqvmap.html">
                    <span className="sub-item">JQVMap</span>
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <a href="charts.html">
              <i className="flaticon-graph"></i>
              <p>Charts</p>
              <span className="badge badge-count badge-primary">8</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="calendar.html">
              <i className="flaticon-calendar"></i>
              <p>Calendar</p>
              <span className="badge badge-count badge-info">1</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="widgets.html">
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
            <a data-toggle="collapse" href="index.html#email-nav">
              <i className="flaticon-mailbox"></i>
              <p>Email</p>
              <span className="caret"></span>
            </a>
            <div className="collapse" id="email-nav">
              <ul className="nav nav-collapse">
                <li>
                  <a href="email-inbox.html">
                    <span className="sub-item">Inbox</span>
                  </a>
                </li>
                <li>
                  <a href="email-compose.html">
                    <span className="sub-item">Email Compose</span>
                  </a>
                </li>
                <li>
                  <a href="email-detail.html">
                    <span className="sub-item">Email Detail</span>
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <a href="invoice.html">
              <i className="flaticon-file-1"></i>
              <p>Invoices</p>
              <span className="badge badge-count">6</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="pricing.html">
              <i className="flaticon-price-tag"></i>
              <p>Pricing</p>
              <span className="badge badge-count">6</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="faqs.html">
              <i className="flaticon-round"></i>
              <p>Faqs</p>
              <span className="badge badge-count">6</span>
            </a>
          </li>
          <li className="nav-item">
            <a data-toggle="collapse" href="index.html#custompages">
              <i className="flaticon-placeholder"></i>
              <p>Custom Pages</p>
              <span className="caret"></span>
            </a>
            <div className="collapse" id="custompages">
              <ul className="nav nav-collapse">
                <li>
                  <a href="login.html">
                    <span className="sub-item">Login</span>
                  </a>
                </li>
                <li>
                  <a href="userprofile.html">
                    <span className="sub-item">User Profile</span>
                  </a>
                </li>
                <li>
                  <a href="404.html">
                    <span className="sub-item">404</span>
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <a data-toggle="collapse" href="index.html#submenu">
              <i className="flaticon-mailbox"></i>
              <p>Menu Levels</p>
              <span className="caret"></span>
            </a>
            <div className="collapse" id="submenu">
              <ul className="nav nav-collapse">
                <li>
                  <a data-toggle="collapse" href="index.html#subnav1">
                    <span className="sub-item">Level 1</span>
                    <span className="caret"></span>
                  </a>
                  <div className="collapse" id="subnav1">
                    <ul className="nav nav-collapse subnav">
                      <li>
                        <a href="index.html#">
                          <span className="sub-item">Level 2</span>
                        </a>
                      </li>
                      <li>
                        <a href="index.html#">
                          <span className="sub-item">Level 2</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a data-toggle="collapse" href="index.html#subnav2">
                    <span className="sub-item">Level 1</span>
                    <span className="caret"></span>
                  </a>
                  <div className="collapse" id="subnav2">
                    <ul className="nav nav-collapse subnav">
                      <li>
                        <a href="index.html#">
                          <span className="sub-item">Level 2</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="index.html#">
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