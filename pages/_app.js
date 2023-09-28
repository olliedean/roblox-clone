/* eslint-disable react/jsx-props-no-spreading */
import ChatMenu from '../components/ChatMenu';
import Footer from '../components/Footer';
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
        <div className="overflow-y-auto flex flex-col overflow-x-hidden h-[calc(100vh-42px)] flex-1">
          <div className="flex-grow">
            <Component {...pageProps} />
          </div>
          <Footer />
        </div>
      </div>
      <ChatMenu />
    </>
  );
}

export default MyApp;
