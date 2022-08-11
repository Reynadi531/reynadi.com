import { NextPage } from 'next';
import { NextSeo } from 'next-seo';

import Presentation from '@/components/Contact/Presentation';
import Footer from '@/components/Layout/Footer';
import Header from '@/components/Layout/Header';
import Layout from '@/components/Layout/Layout';

const ContactPage: NextPage = () => {
  return (
    <>
      <NextSeo title='Contact' />
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

export default ContactPage;
