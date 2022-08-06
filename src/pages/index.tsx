import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';

import '@fontsource/inter/700.css';

import FeaturedPosts from '@/components/Home/FeaturedPosts';
import FeaturedProject from '@/components/Home/FeaturedProject';
import Hero from '@/components/Home/Hero';
import Footer from '@/components/Layout/Footer';
import Header from '@/components/Layout/Header';
import Layout from '@/components/Layout/Layout';
const Home: NextPage = () => {
  return (
    <>
      <NextSeo title='Home' />
      <Layout>
        <Header />
        <main>
          <Hero />
          <FeaturedProject />
          <FeaturedPosts />
        </main>
        <Footer />
      </Layout>
    </>
  );
};

export default Home;
