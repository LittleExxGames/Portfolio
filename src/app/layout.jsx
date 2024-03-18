import './layout.css';
import Navbar from '../components/Navbar/Navbar';
import {Roboto, Roboto_Flex} from 'next/font/google';
import './globals.css';

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({children}) {
  return (
    <>
      <div  className="layout-container">
      <Navbar
      options={[
        { path: '/', label: 'Home' },
        { path: '/about', label: 'About' },
        { path: '/contact', label: 'Contact' },
      ]}/>
      </div>
      <main>
        {children}
      </main>
    </>
  )
}
