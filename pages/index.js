import Head from 'next/head';
import { useRouter } from 'next/router';
import Header from 'components/Header';
import answersData from 'data/answersData';
import LevelCard from 'components/LevelCard';
import TierCard from 'components/TierCard';
import SectionCard from 'components/SectionCard';

const Home = () => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>
          Wordscape Answers - Project
          Neo - By Developer833
        </title>
        <meta
          name='developer833'
          content='Project Neo - Coding Mentorship'
        />
        <link
          rel='icon'
          href='/favicon.ico'
        />
      </Head>
      <Header>
        <SectionCard />
      </Header>
    </>
  );
};

export default Home;
