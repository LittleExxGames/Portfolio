import './page.css';
import SignupWidget from '../components/SignupWidget/SignupWidget.jsx';
import WorkWidget from '../components/WorkWidget/WorkWidget.jsx';
import SkillsWidget from '../components/SkillsWidget/SkillsWidget.jsx';


export const metadata = {
  title: 'Portfolio - Home',
  description: 'Home page of my portfolio.',
}
const skills = [
  { name: 'HTML', proficiency: 60, icon: 'html5.png' },
  { name: 'CSS', proficiency: 50, icon: 'css3.png' },
  { name: 'JavaScript', proficiency: 75, icon: 'javascript.png' },
];

export default function Home() {
  return (
    <div className='About-Me'>
<div>
      <SignupWidget
        title={'Stay up to date'}
        content={'Get notified when I publish something new, and unsubscribe at any time.'}
      />
      </div>
      <div>
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
      <div>
        <SkillsWidget
        title={'Skills'}
        content={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.'}
        skills={skills}
      />
      </div>
      </div>
  );
}
