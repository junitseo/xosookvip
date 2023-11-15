import Head from 'next/head';

const Meta = (props) => {

  return (
    <>
      <Head>
          <title>
            {props.title || "Xổ số được cập nhật hàng ngày và hoàn toàn miễn phí trên trang xosookvip.com"} 
          </title>
          <meta
            name="description"
            content={props.description || "Xổ số được cập nhật hàng ngày và hoàn toàn miễn phí trên trang xosookvip.com"}
          />
          <link rel="icon" href="/logo.png" />
          <link
            rel="canonical"
            href={`${process.env.NEXT_PUBLIC_SCHEMA_URL}`}
          />
          <meta
              name="google-site-verification"
              content="5ontnxwmnfkdkizt7evfgm5xcxooitqw"
          />
          <meta
            property="og:url"
            content={`${process.env.NEXT_PUBLIC_SCHEMA_URL}`}
          />
          <meta property="og:type" content="article" />
          <meta property="og:title" content="Xổ số được cập nhật hàng ngày và hoàn toàn miễn phí trên trang xosookvip.com" />
          <meta
            property="og:description"
            content={props.description || "Xổ số được cập nhật hàng ngày và hoàn toàn miễn phí trên trang xosookvip.com"}
          ></meta>
          <meta
            property="og:image"
            content="https://xosookvip.com/logo.png"
          />
          <meta
            name="keywords"
            content={props.keywords}
          />
          {/* <meta name="robots" content="index,follow,noydir,noodp"></meta> */}
          <meta name="robots" content="noindex"></meta>
      </Head>
    </>
  );
};

export default Meta;