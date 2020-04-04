import React from "react";
import { Helmet } from "react-helmet";
import Config from "../../config/index";

class Head extends React.Component {
  render() {
    return (
      <Helmet>
        <html lang={Config.siteLanguage} />
        <meta charSet="utf-8" />
        <title>
          {Config.name} | {Config.title}
        </title>
        <meta name={Config.description} content={Config.content} />
        <meta name="author" content={Config.name} />

        <meta property="og:image" content="" />
        <meta property="og:description" content="" />
        <meta property="og:title" content="" />

        <link
          href="https://fonts.googleapis.com/css?family=Alice&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap"
          rel="stylesheet"
        />
      </Helmet>
    );
  }
}

export default Head;