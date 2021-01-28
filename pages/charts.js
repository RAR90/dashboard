import Head from 'next/head'
import MainHeader from '../components/main-header'
import SideBar from '../components/sidebar'
import styles from '../styles/Home.module.css'
import QuickSidebar from '../components/quick-sidebar'

export default function Charts() {
  return (
    <div className={styles.container}>

      <Head>
        <title>Next.js Charts</title>
        <link rel="icon" href="assets/img/favicon.ico" />
      </Head>

      <div className="main-panel">
        <div className="content">
          <div className="container-fluid">
            <h4 className="page-title">Chart.js</h4>
            <div className="page-category">Simple yet flexible JavaScript charting for designers & developers. Please checkout their <a href="http://www.chartjs.org/">full documentation</a>.</div>
            <div className="row">
              <div className="col-md-6">
                <div className="card">
                  <div className="card-header">
                    <div className="card-title">Line Chart</div>
                  </div>
                  <div className="card-body">
                    <div className="chart-container">
                      <canvas id="lineChart"></canvas>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card">
                  <div className="card-header">
                    <div className="card-title">Bar Chart</div>
                  </div>
                  <div className="card-body">
                    <div className="chart-container">
                      <canvas id="barChart"></canvas>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card">
                  <div className="card-header">
                    <div className="card-title">Pie Chart</div>
                  </div>
                  <div className="card-body">
                    <div className="chart-container">
                      <canvas id="pieChart"></canvas>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card">
                  <div className="card-header">
                    <div className="card-title">Doughnut Chart</div>
                  </div>
                  <div className="card-body">
                    <div className="chart-container">
                      <canvas id="doughnutChart"></canvas>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card">
                  <div className="card-header">
                    <div className="card-title">Radar Chart</div>
                  </div>
                  <div className="card-body">
                    <div className="chart-container">
                      <canvas id="radarChart"></canvas>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card">
                  <div className="card-header">
                    <div className="card-title">Bubble Chart</div>
                  </div>
                  <div className="card-body">
                    <div className="chart-container">
                      <canvas id="bubbleChart"></canvas>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card">
                  <div className="card-header">
                    <div className="card-title">Multiple Line Chart</div>
                  </div>
                  <div className="card-body">
                    <div className="chart-container">
                      <canvas id="multipleLineChart"></canvas>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card">
                  <div className="card-header">
                    <div className="card-title">Multiple Bar Chart</div>
                  </div>
                  <div className="card-body">
                    <div className="chart-container">
                      <canvas id="multipleBarChart"></canvas>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="card">
                  <div className="card-header">
                    <div className="card-title">Chart with HTML Legends</div>
                  </div>
                  <div className="card-body">
                    <div className="card-sub">
                      Sometimes you need a very complex legend. In these cases, it makes sense to generate an HTML legend. Charts provide a generateLegend() method on their prototype that returns an HTML string for the legend.
                    </div>
                    <div className="chart-container">
                      <canvas id="htmlLegendsChart"></canvas>
                    </div>
                    <div id="myChartLegend"></div>
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
