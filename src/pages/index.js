import React from "react";

import Layout from "../components/layout.js";
import Intro from "../components/Intro";
import About from "../components/About";
import Skill from "../components/Skill";
import Work from "../components/Work";
import Projects from "../components/Projects";
import Transition from "../components/Transition";
import Startup from "../components/Startup";
import Services from "../components/Stack/Stacks";

import SEO from "../components/seo.js";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Intro />
    <About />
    <Skill />
    <Services />
    <Work />

    <Transition />
    <Projects />

    <Startup />
  </Layout>
);

export default IndexPage;
