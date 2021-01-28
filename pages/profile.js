import Head from 'next/head'
import MainHeader from '../components/main-header'
import SideBar from '../components/sidebar'
import styles from '../styles/Home.module.css'
import QuickSidebar from '../components/quick-sidebar'

export default function Profile() {
  return (
    <div className={styles.container}>

      <Head>
        <title>Next.js Charts</title>
        <link rel="icon" href="assets/img/favicon.ico" />
      </Head>

      <div className="main-panel">
        <div className="content">
          <div className="container-fluid">
            <h4 className="page-title">User Profile</h4>
            <div className="row">
              <div className="col-md-4">
                <div className="card card-profile card-secondary">
                  <div className="card-header">
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
                        <a className="btn btn-info btn-twitter btn-sm btn-link" href="#">
                          <span className="btn-label just-icon"><i className="flaticon-twitter"></i> </span>
                        </a>
                        <a className="btn btn-danger btn-sm btn-link" rel="publisher" href="#">
                          <span className="btn-label just-icon"><i className="flaticon-google-plus"></i> </span>
                        </a>
                        <a className="btn btn-primary btn-sm btn-link" rel="publisher" href="#">
                          <span className="btn-label just-icon"><i className="flaticon-facebook"></i> </span>
                        </a>
                        <a className="btn btn-danger btn-sm btn-link" rel="publisher" href="#">
                          <span className="btn-label just-icon"><i className="flaticon-dribbble"></i> </span>
                        </a>
                      </div>
                      <div className="view-profile">
                        <a href="#" className="btn btn-secondary btn-block">View Full Profile</a>
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
              <div className="col-md-8">
                <div className="card card-with-nav">
                  <div className="card-header">
                    <div className="row">
                      <ul className="nav nav-tabs nav-line nav-color-secondary" role="tablist">
                        <li className="nav-item"> <a className="nav-link active show" data-toggle="tab" href="#home" role="tab" aria-selected="true">Timeline</a> </li>
                        <li className="nav-item"> <a className="nav-link" data-toggle="tab" href="#profile" role="tab" aria-selected="false">Profile</a> </li>
                        <li className="nav-item"> <a className="nav-link" data-toggle="tab" href="#settings" role="tab" aria-selected="false">Settings</a> </li>
                      </ul>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="row mt-3">
                      <div className="col-md-6">
                        <div className="form-group form-group-default">
                          <label>Name</label>
                          <input type="text" className="form-control" name="name" placeholder="Name" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group form-group-default">
                          <label>Email</label>
                          <input type="email" className="form-control" name="email" placeholder="Name" />
                        </div>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-md-4">
                        <div className="form-group form-group-default">
                          <label>Birth Date</label>
                          <input type="text" className="form-control" id="datepicker" name="datepicker" placeholder="Birth Date" />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group form-group-default">
                          <label>Gender</label>
                          <select className="form-control" id="gender">
                            <option>Male</option>
                            <option>Female</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group form-group-default">
                          <label>Phone</label>
                          <input type="text" className="form-control" name="phone" placeholder="Phone" />
                        </div>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-md-12">
                        <div className="form-group form-group-default">
                          <label>Address</label>
                          <input type="text" className="form-control" name="address" placeholder="Address" />
                        </div>
                      </div>
                    </div>
                    <div className="row mt-3 mb-1">
                      <div className="col-md-12">
                        <div className="form-group form-group-default">
                          <label>About Me</label>
                          <textarea className="form-control" name="about" placeholder="About Me" rows="3">A man who hates loneliness</textarea>
                        </div>
                      </div>
                    </div>
                    <div className="text-right mt-3 mb-3">
                      <button className="btn btn-success">Save</button>
                      <button className="btn btn-danger">Reset</button>
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
