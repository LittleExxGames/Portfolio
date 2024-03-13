import Navbar from '../components/Navbar/Navbar';

export const metadata = {
  title: 'Portfolio - Home',
  description: 'Home page of my portfolio.',
}

export default function Home() {
  return (
    <div><Navbar
      options={[
        { path: '/', label: 'Home' },
        { path: '/about', label: 'About' },
        { path: '/contact', label: 'Contact' },
      ]} />
      </div>
  );
}
