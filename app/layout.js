
import ChatMenu from "./_chatmenu/ChatMenu";
import Footer from "./Footer";
import GlobalAlert from "./GlobalAlert";
import "./globals.css";
import "./icons.css";
import Header from "./Header";
import Sidebar from "./_sidebar/Sidebar";

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

export const metadata = {
  title: {
    template: "%s - Roblox",
    default: "Roblox",
  }
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <Header />
        <div className="flex">
          <Sidebar />
          <div className="overflow-y-auto flex flex-col overflow-x-hidden h-[calc(100vh-42px)] flex-1">
            <GlobalAlert
              type="info"
              content="This is a test alert!"
            />
            <div className="flex-grow">
              {children}
            </div>
            <Footer />
          </div>
        </div>
        <ChatMenu />
      </body>
    </html>
  );
}
