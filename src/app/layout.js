import './global.css';

import NavBarr from "../components/NavBar";
import { montserrat } from './font';
import Provider from '../components/Provider';


export const metadata = {
  title: 'Buyify',
  description: 'You can shop coding shirt from this ',
  keywords: 'coding, shirt, buy, shop, developer, programming,nextjs,ecommerce project',

}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={`bg-gray-200 ${montserrat.className}`}>
        <Provider>
          <NavBarr />
          {children}

        </Provider>
      </body>
    </html >


  )
}
