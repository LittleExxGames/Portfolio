"use client"
import './page.css';
import SignupWidget from '../components/SignupWidget/SignupWidget.jsx';
import WorkWidget from '../components/WorkWidget/WorkWidget.jsx';
import SkillsWidget from '../components/SkillsWidget/SkillsWidget.jsx';
import ArticleCard from '../components/ArticleCard/ArticleCard';
import Paragraph from '../components/Paragraph/Paragraph.jsx';
import { useTheme } from '../components/ThemeContext/ThemeContext.jsx';
import Head from 'next/head';


// export const metadata = {
//   title: 'Portfolio - Home',
//   description: 'Home page of my portfolio.',
// }

const Home = () => {

  const { theme } = useTheme();
  console.log('Theme in Home:', theme); // Should log 'light' or 'dark'

  const getImageSrc = (baseName) => {
    return theme === "dark" ? `${baseName}-mode-dark.png` : `${baseName}-mode-light.png`;
  };

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
    <><Head>
    <title>Portfolio - Home</title>
    <meta name="description" content="Home page of my portfolio." />
  </Head>
    <div className='page'>
      <div className = 'intro'>
        <div className='profileMain'>
          <img src="GigaChad.png" alt="Profile" />
        </div>
        <Paragraph title="Christopher Knowles" text={["I am a determined programmer, passionate creator, and a commited friend who loves to create and learn new things.", "My passion is to make fulfilling video games that help people explore and experience new worlds and connect with others through them."]} />
        {/* Add more paragraphs as needed */}
        <div className = 'profiles'>
          <a href="https://www.linkedin.com/in/-christopher-knowles" target="_blank" rel="noopener noreferrer">
            <img src={getImageSrc("linkedin")} alt="Linkedin" />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
            <img src={getImageSrc("x")} alt="X" />
          </a>
          <a href="https://github.com/LittleExxGames" target="_blank" rel="noopener noreferrer">
            <img src={getImageSrc("github")} alt="Github" />
          </a>
        </div>
      </div>
      <div className = 'news'>
        <h1>Newsletter</h1>
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
    </>
  );
}

export default Home;
