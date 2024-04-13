import React from 'react';
import './page.css';
import SignupWidget from '../components/SignupWidget/SignupWidget.jsx';
import WorkWidget from '../components/WorkWidget/WorkWidget.jsx';
import SkillsWidget from '../components/SkillsWidget/SkillsWidget.jsx';
import ArticleCard from '../components/ArticleCard/ArticleCard';
import Paragraph from '../components/Paragraph/Paragraph.jsx';

//test changes

export const metadata = {
  title: 'Portfolio - Home',
  description: 'Home page of my portfolio.',
}

const Home = () => {
  // Example article data
  const articleData = {
    date: '2024-04-07',
    title: 'Example Article',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    link: 'https://www.example.com/article',
  };

  const skills = [
    { name: 'HTML', proficiency: 60, icon: 'html5.png' },
    { name: 'CSS', proficiency: 50, icon: 'css3.png' },
    { name: 'JavaScript', proficiency: 75, icon: 'javascript.png' },
  ];

  return (
    <div className='page'>
      <div className = 'intro'>
        <div className='profileMain'>
          <img src="GigaChad.png" alt="Profile" />
        </div>
        <Paragraph title="Welcome to My Portfolio" text={["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ", "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."]} />
        {/* Add more paragraphs as needed */}
        <div className = 'profiles'>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src="linkedin-mode-light.png" alt="Linkedin" />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
            <img src="x-mode-light.png" alt="X" />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <img src="github-mode-light.png" alt="Github" />
          </a>
        </div>
      </div>
      <div className = 'body'>
        <div className= 'articles'>
          {/* Include the ArticleCard component with articleData */}
          <ArticleCard
            date={articleData.date}
            title={articleData.title}
            content={articleData.content}
            link={articleData.link}
          />
          <ArticleCard
            date={articleData.date}
            title={articleData.title}
            content={articleData.content}
            link={articleData.link}
          />
          <ArticleCard
            date={articleData.date}
            title={articleData.title}
            content={articleData.content}
            link={articleData.link}
          />
        </div>
        <div className='About-Me'>
          <div className="widget">
            <SignupWidget
              title={'Stay up to date'}
              content={'Get notified when I publish something new, and unsubscribe at any time.'}
            />
          </div>
          <div className="widget">
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
          <div className="widget">
            <SkillsWidget
              title={'Skills'}
              content={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.'}
              skills={skills}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
