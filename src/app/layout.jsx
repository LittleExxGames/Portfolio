import './layout.css';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import {Roboto, Roboto_Flex} from 'next/font/google';
import './globals.css';


const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});
const links = [
  {
    title: 'Home',
    url: '/home',
  },
  {
    title: 'About',
    url: '/about',
  },
  {
    title: 'Projects',
    url: '/projects',
  },
  {
    title: 'Uses',
    url: '/uses',
  },
];

export default function RootLayout({children}) {
  return (
    <>
      <div  className="layout-container">
      <Navbar links={links}/>
      </div>
      <main>
        {children}
      </main>
      <Footer links={links} />
    </>
  )
}
