import Head, { defaultHead } from 'next/head';

const Meta = (props) => {

  return (
    <>
      <Head>
          <title>
            {props.title || "xosookvip"} 
          </title>
          <meta
            name="description"
            content={props.description || "xosookvip"}
          />
          <link rel="icon" href="/logo.png" />
          <link
            rel="canonical"
            href={`${process.env.NEXT_PUBLIC_SCHEMA_URL}`}
          />
          <meta
            name="keywords"
            content={props.keywords}
          />
          <meta
            name="COPYRIGHT"
            content="Copyright (C) 2007 xosookvip.com"
          ></meta>
          <meta name="RATING" content="GENERAL"></meta>
          <meta name="geo.placename" content="ho chi minh"></meta>
          {/* <meta name="robots" content="index,follow,noydir,noodp"></meta> */}
          <meta name="robots" content="noindex"></meta>
          <meta
            property="og:description"
            content={props.description || "xosookvip"}
          ></meta>
          <meta
            property="og:site_name"
            content={`${process.env.NEXT_PUBLIC_SCHEMA_NAME}`}
          ></meta>
          <meta
            property="og:url"
            content={`${process.env.NEXT_PUBLIC_SCHEMA_URL}`}
          ></meta>
          <meta
            property="og:title"
            content="xosookvip"
          ></meta>
          <meta
            name="robots"
            content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
          ></meta>
      </Head>
    
    </>
  );
};

export default Meta;
