

import { Html, Head, Main, NextScript } from "next/document";


export default function Document() {
  return (
    <Html lang="en">

      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/leaflet.css"
        />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/leaflet.markercluster/1.4.1/MarkerCluster.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/leaflet.markercluster/1.5.0/MarkerCluster.Default.min.css" />
      </Head>

      <body className=" mx-auto">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
