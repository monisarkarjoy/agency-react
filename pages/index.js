import Head from 'next/head';
import Image from 'next/image';
import Intro from "../components/intro";
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import { data } from '../data';
import styles from '../styles/Home.module.css';


export default function Home({ services }) {
  return (
    <div>
      <Head>
        <title>Joy Sarkar</title>
        <meta name="description" content="Web Designer and Developer" />
      </Head>
      <Intro />
      <Services services={services} />
      <Testimonials />
    </div>
  );
}

export const getStaticProps = async () => {
  const services = data;
  return {
    props: { services }
  };
};
