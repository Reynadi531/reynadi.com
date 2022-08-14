import { ApolloError, gql } from '@apollo/client';
import type { GetStaticProps, NextPage } from 'next';
import { NextSeo } from 'next-seo';

import '@fontsource/inter/700.css';

import FeaturedPosts from '@/components/Home/FeaturedPosts';
import FeaturedProject from '@/components/Home/FeaturedProject';
import Hero from '@/components/Home/Hero';
import Footer from '@/components/Layout/Footer';
import Header from '@/components/Layout/Header';
import Layout from '@/components/Layout/Layout';

import { ContentfulClient } from '@/helper/gqlclient';

interface IData {
  post: {
    title: string;
    slug: string;
    shortDescription: string;
    thumbnail: {
      url: string;
    };
    sys: {
      publishedAt: string;
    };
  };
  project: {
    title: string;
    slug: string;
    shortDescription: string;
    thumbnail: {
      url: string;
    };
    sys: {
      publishedAt: string;
    };
  };
}

interface IProps {
  data: IData;
  error: ApolloError | undefined;
}

export const getStaticProps: GetStaticProps = async () => {
  const { data, error } = await ContentfulClient.query({
    query: gql`
      query {
        postCollection(limit: 1) {
          items {
            title
            thumbnail {
              url
            }
            slug
            shortDescription
            sys {
              publishedAt
            }
          }
        }
        projectCollection(limit: 1) {
          items {
            title
            thumbnail {
              url
            }
            slug
            shortDescription
            sys {
              publishedAt
            }
          }
        }
      }
    `,
  });

  return {
    props: {
      data: !data
        ? null
        : ({
            post: data.postCollection.items[0],
            project: data.projectCollection.items[0],
          } as IData),
      error: error ? error : null,
    } as IProps,
  };
};

const Home: NextPage<IProps> = ({ data, error }: IProps) => {
  return (
    <>
      <NextSeo title='Home' />
      <Layout>
        <Header />
        <main>
          <Hero />
          <FeaturedProject
            title={!error ? data.project.title : 'Error'}
            date={!error ? data.project.sys.publishedAt : ''}
            description={!error ? data.project.shortDescription : ''}
            link={!error ? `/projects/${data.project.slug}` : ''}
            thumbnail={data.project.thumbnail.url}
            key={1}
          />
          <FeaturedPosts
            title={!error ? data.post.title : 'Error'}
            date={!error ? data.post.sys.publishedAt : ''}
            description={!error ? data.post.shortDescription : ''}
            link={!error ? `/posts/${data.post.slug}` : ''}
            thumbnail={data.post.thumbnail.url}
            key={2}
          />
        </main>
        <Footer />
      </Layout>
    </>
  );
};

export default Home;
