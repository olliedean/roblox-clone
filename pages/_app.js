/* eslint-disable react/jsx-props-no-spreading */
import ChatMenu from '../components/ChatMenu';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import '../styles/globals.css';
import '../styles/icons.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <div className="flex">
        <Sidebar />
        <div className="overflow-scroll h-[calc(100vh-42px)] flex-1">
          <Component {...pageProps} />
        </div>
      </div>
      <ChatMenu />
    </>
  );
}

export default MyApp;
