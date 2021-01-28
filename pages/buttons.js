import Head from 'next/head'
import MainHeader from '../components/main-header'
import SideBar from '../components/sidebar'
import styles from '../styles/Home.module.css'
import QuickSidebar from '../components/quick-sidebar'

export default function Buttons() {
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
              <h4 className="page-title">Buttons</h4>
              <ul className="breadcrumbs">
                <li className="nav-home">
                  <a href="#">
                    <i className="flaticon-home"></i>
                  </a>
                </li>
                <li className="separator">
                  <i className="flaticon-right-arrow"></i>
                </li>
                <li className="nav-item">
                  <a href="#">Base</a>
                </li>
                <li className="separator">
                  <i className="flaticon-right-arrow"></i>
                </li>
                <li className="nav-item">
                  <a href="#">Buttons</a>
                </li>
              </ul>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title">Button Original</h4>
                    <p className="card-category">Here is a subtitle for this table</p>
                  </div>
                  <div className="card-body">
                    <p className="demo">
                      <button className="btn btn-default">Default</button>

                      <button className="btn btn-primary">Primary</button>

                      <button className="btn btn-secondary">Secondary</button>

                      <button className="btn btn-info">Info</button>

                      <button className="btn btn-success">Success</button>

                      <button className="btn btn-warning">Warning</button>

                      <button className="btn btn-danger">Danger</button>

                      <button className="btn btn-link">Link</button>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title">Button with Label</h4>
                    <p className="card-category">Here is a subtitle for this table</p>
                  </div>
                  <div className="card-body">
                    <p className="demo">
                      <button className="btn btn-default">
                        <span className="btn-label">
                          <i className="la la-archive"></i>
                        </span>
                        Default
                      </button>

                      <button className="btn btn-primary">
                        <span className="btn-label">
                          <i className="la la-bookmark"></i>
                        </span>
                        Primary
                      </button>

                      <button className="btn btn-secondary">
                        <span className="btn-label">
                          <i className="la la-plus"></i>
                        </span>
                        Secondary
                      </button>

                      <button className="btn btn-info">
                        <span className="btn-label">
                          <i className="la la-info"></i>
                        </span>
                        Info
                      </button>

                      <button className="btn btn-success">
                        <span className="btn-label">
                          <i className="la la-check"></i>
                        </span>
                        Success
                      </button>

                      <button className="btn btn-warning">
                        <span className="btn-label">
                          <i className="la la-exclamation-circle"></i>
                        </span>
                        Warning
                      </button>

                      <button className="btn btn-danger">
                        <span className="btn-label">
                          <i className="la la-flash"></i>
                        </span>
                        Danger
                      </button>

                      <button className="btn btn-link">
                        <span className="btn-label">
                          <i className="la la-link"></i>
                        </span>
                        Link
                      </button>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title">Disabled Button</h4>
                    <p className="card-category">Here is a subtitle for this table</p>
                  </div>
                  <div className="card-body">
                    <p className="demo">
                      <button className="btn btn-default" disabled="disabled">Default</button>

                      <button className="btn btn-primary" disabled="disabled">Primary</button>

                      <button className="btn btn-secondary" disabled="disabled">Secondary</button>

                      <button className="btn btn-info" disabled="disabled">Info</button>

                      <button className="btn btn-success" disabled="disabled">Success</button>

                      <button className="btn btn-warning" disabled="disabled">Warning</button>

                      <button className="btn btn-danger" disabled="disabled">Danger</button>

                      <button className="btn btn-link" disabled>Link</button>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title">Button Size</h4>
                    <p className="card-category">Here is a subtitle for this table</p>
                  </div>
                  <div className="card-body">
                    <p className="demo">
                      <button className="btn btn-primary btn-lg">Large</button>

                      <button className="btn btn-primary">Normal</button>

                      <button className="btn btn-primary btn-sm">Small</button>

                      <button className="btn btn-primary btn-xs">Extra Small</button>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title">Button Type</h4>
                    <p className="card-category">Here is a subtitle for this table</p>
                  </div>
                  <div className="card-body">
                    <p className="demo">
                      <button className="btn btn-primary">Normal</button>
                      <button className="btn btn-primary btn-border">Border</button>

                      <button className="btn btn-primary btn-round">Round</button>

                      <button className="btn btn-primary btn-border btn-round">Round</button>

                      <button className="btn btn-primary btn-link">Link</button>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title">Nav Pills</h4>
                    <p className="card-category">Here is a subtitle for this table</p>
                  </div>
                  <div className="card-body">
                    <ul className="nav nav-pills nav-primary">
                      <li className="nav-item">
                        <a className="nav-link active" href="#">Active</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link disabled" href="#">Disabled</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title">Pagination</h4>
                    <p className="card-category">Here is a subtitle for this table</p>
                  </div>
                  <div className="card-body">
                    <div className="demo">
                      <ul className="pagination pg-primary">
                        <li className="page-item">
                          <a className="page-link" href="#" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                            <span className="sr-only">Previous</span>
                          </a>
                        </li>
                        <li className="page-item active"><a className="page-link" href="#">1</a></li>
                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                        <li className="page-item">
                          <a className="page-link" href="#" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                            <span className="sr-only">Next</span>
                          </a>
                        </li>
                      </ul>
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
