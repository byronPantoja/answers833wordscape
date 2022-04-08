import Head from 'next/head';
import Header from 'components/Header';
import SectionsList from 'components/SectionsList';

const Home = () => {
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
        <SectionsList />
      </Header>
    </>
  );
};

export default Home;
