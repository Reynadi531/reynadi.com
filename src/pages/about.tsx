import { NextPage } from 'next';
import { NextSeo } from 'next-seo';

import Presentation from '@/components/About/Presentation';
import Footer from '@/components/Layout/Footer';
import Header from '@/components/Layout/Header';
import Layout from '@/components/Layout/Layout';

const About: NextPage = () => {
  return (
    <>
      <NextSeo title='About' />
      <Layout>
        <Header />
        <main>
          <Presentation />
        </main>
        <Footer />
      </Layout>
    </>
  );
};

export default About;
