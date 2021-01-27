import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>

        <Head>
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta content='width=device-width, initial-scale=1.0, shrink-to-fit=no' name='viewport' />
          <link rel="icon" href="../assets/img/favicon.ico" type="image/x-icon"/>
          <script src="../assets/js/plugin/webfont/webfont.min.js"></script>
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link>
          <link rel="stylesheet" href="../assets/css/fonts.css" />
          <link rel="stylesheet" href="../assets/css/bootstrap.min.css" />
          <link rel="stylesheet" href="../assets/css/ready.min.css" />
          <link rel="stylesheet" href="../assets/css/demo.css" />
        </Head>

        <body>

          <Main />
          <NextScript />

        </body>
      </Html>
    )
  }
}

export default MyDocument