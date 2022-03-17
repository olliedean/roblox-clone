import ChatMenu from '../components/ChatMenu';
import Header from '../components/Header'
import '../styles/globals.css'
import "../styles/icons.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <ChatMenu />
    </>
  )
}

export default MyApp
