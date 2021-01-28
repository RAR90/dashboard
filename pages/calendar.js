import Head from 'next/head'
import MainHeader from '../components/main-header'
import SideBar from '../components/sidebar'
import styles from '../styles/Home.module.css'
import QuickSidebar from '../components/quick-sidebar'

export default function Calendar() {
  return (
    <div className={styles.container}>

      <Head>
        <title>Next.js Charts</title>
        <link rel="icon" href="assets/img/favicon.ico" />
      </Head>


      <div className="main-panel">
        <div className="content">
          <div className="container-fluid">
            <h4 className="page-title">Calendar</h4>
            <div className="row">
              <div className="col-md-12">
                <div className="card">
                  <div className="card-header">
                    <div className="card-title">Full Calendar</div>
                    <div className="card-category">Handcrafted by our friends from <a href="https://fullcalendar.io/">FullCalendar.io</a>. Please checkout their <a href="https://fullcalendar.io/docs/">full documentation</a>.</div>
                  </div>
                  <div className="card-body">
                    <div id="calendar">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <QuickSidebar />

      <script src="assets/js/pages/calendar.js"></script>
    </div>

  )
}
