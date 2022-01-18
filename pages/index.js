import React from 'react';
import Head from 'next/head';
import Root from '../components/common/Root';
import Footer from '../components/common/Footer';
import SocialMedia from '../components/common/SocialMedia';
import ExploreBanner from '../components/productAssets/ExploreBanner';
import HeroSection from '../components/homepage/HeroSection';
import HomeBanner from '../components/homepage/HomeBanner';
import CategoryBanner from '../components/homepage/CategoryBanner';
import ProductsBanner from '../components/homepage/ProductsBanner';
import dynamic from 'next/dynamic'

/**
 * Leaflet makes direct calls to the DOM when it is loaded, therefore React Leaflet is not compatible with server-side rendering.
 * @see https://stackoverflow.com/a/64634759/9244579
 */
 const MapElement = dynamic(() => import('../components/homepage/MapContainer'), {
  loading: () => <p>Map is loading</p>,
  ssr: false, // This line is important. It's what prevents server-side render
});

const position = [51.505, -0.09]

const Home = () => (
  
  <Root transparentHeader={true}>
    <Head>
      <title>Home | commerce</title>
    </Head>

    <HeroSection />
    <HomeBanner />
    <CategoryBanner />
    <ProductsBanner />
    <ExploreBanner />
    <SocialMedia />
    <MapElement />
    <Footer />
  </Root>
);

export default Home;
