import Header from '@/components/Layout/Header';
import Layout from '@/components/Layout/Layout';
import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import '@fontsource/inter/700.css';
import Link from 'next/link';
import Hero from '@/components/Home/Hero';
const Home: NextPage = () => {
  return (
    <>
      <NextSeo title='Home' />
      <Layout>
        <Header />
        <main>
          <Hero />
        </main>
      </Layout>
    </>
  );
};

export default Home;
