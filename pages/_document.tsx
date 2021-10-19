import Document , {Html, Head, Main, NextScript} from 'next/document'

export default class CustomDocument extends Document{
  render(){
    // This will be only executed on server (running on node in the backend)
    // _document.tsx is only forming the page structure 
    // This is the root document
    // It will not be executed on the client side
    console.log('From document.tsx');
    return(
      <Html>
        <Head>
          <meta property="custom" content="Custom content for testing"/>
        </Head>
        <body>
          <Main/>
        </body>
        <NextScript/>
      </Html>
    )
  }

}