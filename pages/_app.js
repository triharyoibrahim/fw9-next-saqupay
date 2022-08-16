import '../styles/globals.css'
import "../styles/auth.css";
import "../styles/home.css";
import "../styles/landingpage-v2.css";

import "bootstrap/dist/css/bootstrap.css"

import {Provider} from "react-redux"
import {store} from "../stores"

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
     </Provider>
  )
}

export default MyApp