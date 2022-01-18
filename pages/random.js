import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Root from '../components/common/Root';
import Footer from '../components/common/Footer';
import Image from 'next/image';

const About = () => {
    const [catImage, setCatImage] = useState(null);

    const handler = async (callback) => {
        fetch('/api/cat')
            .then(res => res.json())
            .then(
                (result) => {
                    callback(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    };

    useEffect(() => {
        handler(setCatImage)
      }, [])

    return (
    <Root>
        <Head>
        <title>Random Cat | commerce</title>
        </Head>
        <div className="random-container">
            <div className="row mt-5 pt-5 random-hero">
                <div className="col-12 col-md-10 col-lg-6 offset-md-1 offset-lg-0 row-content">
                    <h1>
                        Random cat page.
                    </h1>
                    <div>
                        {catImage && 
                            <img src={catImage.url} 
                            width={'600'} 
                            alt='A random cat'/>
                        }
                    </div>
                    <div>
                        {catImage && 
                            <Image
                            src={catImage.url}
                            quality={50}
                            width={600}
                            height={700}
                            layout='responsive'
                            alt='A random cat'/>
                        }
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </Root>
    )
};

export default About;
