import Document, { Html, Head, Main, NextScript } from 'next/document'
import MainHeader from '../components/main-header'
import SideBar from '../components/sidebar'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>

        <Head>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <link rel="icon" href="assets/img/favicon.ico" type="image/x-icon"/>
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link>
          <link rel="stylesheet" href="assets/css/fonts.css" />
          <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
          <link rel="stylesheet" href="assets/css/ready.min.css" />
          <link rel="stylesheet" href="assets/css/demo.css" />
        </Head>

        <body>

          <div className="wrapper">

            <MainHeader />
            <SideBar />

            <Main />
            <NextScript />
          </div>

          <script src="assets/js/core/jquery.3.2.1.min.js"></script>
          <script src="assets/js/core/popper.min.js"></script>
          <script src="assets/js/core/bootstrap.min.js"></script>
          <script src="assets/js/plugin/jquery-ui-1.12.1.custom/jquery-ui.min.js"></script>
          <script src="assets/js/plugin/jquery-ui-touch-punch/jquery.ui.touch-punch.min.js"></script>
          <script src="assets/js/plugin/jquery-scrollbar/jquery.scrollbar.min.js"></script>
          <script src="assets/js/plugin/moment/moment.min.js"></script>
          <script src="assets/js/plugin/chart.js/chart.min.js"></script>
          <script src="assets/js/plugin/chart-circle/circles.min.js"></script>
          <script src="assets/js/plugin/datatables/datatables.min.js"></script>
          <script src="assets/js/plugin/bootstrap-notify/bootstrap-notify.min.js"></script>
          <script src="assets/js/plugin/bootstrap-toggle/bootstrap-toggle.min.js"></script>
          <script src="assets/js/plugin/jqvmap/jquery.vmap.min.js"></script>
          <script src="assets/js/plugin/jqvmap/maps/jquery.vmap.world.js"></script>
          <script src="assets/js/plugin/gmaps/gmaps.js"></script>
          <script src="assets/js/plugin/dropzone/dropzone.min.js"></script>
          <script src="assets/js/plugin/fullcalendar/fullcalendar.min.js"></script>
          <script src="assets/js/plugin/datepicker/bootstrap-datetimepicker.min.js"></script>
          <script src="assets/js/plugin/bootstrap-tagsinput/bootstrap-tagsinput.min.js"></script>
          <script src="assets/js/plugin/bootstrap-wizard/bootstrapwizard.js"></script>
          <script src="assets/js/plugin/jquery.validate/jquery.validate.min.js"></script>
          <script src="assets/js/plugin/summernote/summernote-bs4.min.js"></script>
          <script src="assets/js/plugin/select2/select2.full.min.js"></script>
          <script src="assets/js/plugin/sweetalert/sweetalert.min.js"></script>
          <script src="assets/js/ready.min.js"></script>
          <script src="assets/js/demo.js"></script>
          <script src="assets/js/pages/charts.js"></script>
          <script src="assets/js/pages/calendar.js"></script>
        </body>
      </Html>
    )
  }
}

export default MyDocument