import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import SignupWidget from '../components/SignupWidget/SignupWidget.jsx';
import WorkWidget from '../components/WorkWidget/WorkWidget.jsx';
import SkillsWidget from '../components/SkillsWidget/SkillsWidget.jsx';
import Paragraph from '../components/Paragraph/Paragraph.js';

export const metadata = {
  title: 'Portfolio - Home',
  description: 'Home page of my portfolio.',
}

const skills = [
  { name: 'HTML', proficiency: 60, icon: 'html5.png' },
  { name: 'CSS', proficiency: 50, icon: 'css3.png' },
  { name: 'JavaScript', proficiency: 75, icon: 'javascript.png' },
];

const Home = () => {
  return (
    <div>
      <Navbar />
      <h1>Welcome to My Portfolio</h1>
      <Paragraph text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
      <Paragraph text="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
      {/* Add more paragraphs as needed */}
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
        ]}
      />
      <SkillsWidget
        title={'Skills'}
        content={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.'}
        skills={skills}
      />
    </div>
  );
}

export default Home;
