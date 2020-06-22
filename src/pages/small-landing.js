import React from "react";

import Layout from "../components/layout.js";
import LandingInrto from "../components/LandingPageSmall/LandingIntro";
import Work from "../components/Work";

import Idea from "../../assets/idea.svg";
import System from "../../assets/innovation.svg";
import Problem from "../../assets/workflow.svg";
import Organize from "../../assets/man.svg";

import SEO from "../components/seo.js";

const IndexPage = () => (
  <Layout>
    <SEO title="Roast My Website" />
    <LandingInrto />
  </Layout>
);

export default IndexPage;
