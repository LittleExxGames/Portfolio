import Navbar from '../components/Navbar/Navbar';
import SignupWidget from '../components/SignupWidget/SignupWidget.jsx';
import WorkWidget from '../components/WorkWidget/WorkWidget.jsx';

export const metadata = {
  title: 'Portfolio - Home',
  description: 'Home page of my portfolio.',
}

export default function Home() {
  return (
    <div>
      <Navbar
      options={[
        { path: '/', label: 'Home' },
        { path: '/about', label: 'About' },
        { path: '/contact', label: 'Contact' },
      ]} />
      <SignupWidget
        title={'Stay up to date'}
        content={'Get notified when I publish something new, and unsubscribe at any time.'}
      />
      <WorkWidget
        title={'Work'}
        content={'My work experience.'}
        experiences={[
          {
            logo: '/slack.png',
            organization: 'Slack',
            jobTitle: 'Software Engineer',
            startYear: 2016,
            endYear: null,
          },
          {
            logo: '/spotify.png',
            organization: 'Spotify',
            jobTitle: 'Software Engineer',
            startYear: 2014,
            endYear: 2015,
          },
          {
            logo: '/audible.png',
            organization: 'Audible',
            jobTitle: 'Software Engineer',
            startYear: 2012,
            endYear: 2013,
          },
          {
            logo: '/microsoft.png',
            organization: 'Microsoft',
            jobTitle: 'Software Engineer',
            startYear: 2010,
            endYear: 2011,
          },
        ]}
      />
      </div>

  );
}
