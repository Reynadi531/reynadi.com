import { NextPage } from 'next';
import Link from 'next/link';
import { NextSeo } from 'next-seo';

import '@fontsource/inter/900.css';
import '@fontsource/inter/600.css';

import Footer from '@/components/Layout/Footer';
import Header from '@/components/Layout/Header';
import Layout from '@/components/Layout/Layout';

const NotFoundPage: NextPage = () => {
  return (
    <>
      <NextSeo title='Not Found' />
      <Layout>
        <Header />
        <main>
          <div className='min-h-[700px] flex flex-col justify-center items-center text-center'>
            <h1 className='text-4xl font-black tracking-wide'>
              You've got the wrong page 😔
            </h1>

            <div className='mt-4 bg-gradient-to-r from-brand-orange to-brand-yellow p-[2px]'>
              <Link href='/'>
                <button className='text-md px-4 py-3 bg-gradient-to-r from-brand-orange to-brand-yellow font-semibold text-black rounded-xl'>
                  Get Back Home
                </button>
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </Layout>
    </>
  );
};

export default NotFoundPage;
