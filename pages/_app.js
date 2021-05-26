import '../styles/globals.css'
import '@fortawesome/fontawesome-svg-core/styles.css'
import {library} from '@fortawesome/fontawesome-svg-core';
import { faArrowDown,faCircleNotch } from '@fortawesome/free-solid-svg-icons'

library.add(faArrowDown,faCircleNotch);
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
