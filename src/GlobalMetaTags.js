import React, { memo } from "react";
import {Helmet} from "react-helmet";

/* This should load on every page so that no matter on which page the user lands,
 * we fetch the manifest.json file
 */
const GlobalMetaTags = memo(() => (
    <Helmet
      titleAttributes={{ itemprop: "name" }}
      htmlAttributes={{
        itemscope: "",
        itemtype: "http://schema.org/WebPage",
      }}
    >
      <link rel="manifest" href="/manifest.webmanifest.json" />
      <meta name="theme-color" content="#FBB67B" />
    </Helmet>
  ));
GlobalMetaTags.displayName = "GlobalMetaTags";
export default GlobalMetaTags