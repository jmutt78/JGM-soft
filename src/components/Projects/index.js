import React from "react";

import Hover from "./Hover";

import mattid from "../../images/mattid.jpg";
import hike from "../../images/hike.jpg";
import docusite from "../../images/docusite.jpg";
import journal from "../../images/journal.jpg";
import entra from "../../images/mountain.jpg";
import ihmo from "../../images/ihmo.jpg";
import tamilee from "../../images/tamilee.png";
import { Root, SkillsContainer, SkillsColumn } from "./styles";

const Projects = () => {
  const myWorksection1 = [
    {
      image: entra,
      title: "Entra",
      body: `A powerful community of entrepreneurs that help each other learn and grow through a simple Question and Answer forum.`,
      url: "https://entra.io/",
      stack: "React, NextJS, graphQl, MongoDB, NodeJS",
      git: "https://github.com/jmutt78/Entra-Backend"
    },
    {
      image: mattid,
      title: "Matti D",
      body: "An e-commerce website for a retail boutique.",
      url: "https://mattidstyle.com",
      stack: "Shopify"
    },
    {
      image: ihmo,
      title: "Integrative Health Management",
      body:
        "An informational business website that allows users to book appointments, download forms, and watch informative videos.",
      url: "https://adrianak.netlify.app/",
      stack: "Gatsby.Js, Wordpress headless CMS"
    },
    {
      image: docusite,
      title: "DocuSite",
      body: "A business website for a construction application.",
      url: "https://docusites.com",
      stack: "Wordpress"
    },

    {
      image: journal,
      title: "Daily Journal",
      body: `Project that lets users record a simple journal.`,
      url: "https://my-journal-app123.herokuapp.com",
      stack: "React, Redux, MongoDB, Express, NodeJS",
      git: "https://github.com/jmutt78/15-Minute-Journal"
    },
    {
      image: hike,
      title: "Trail Finder API",
      body: `Data populated and cached with REST API calls to trails database.`,
      url: "https://jmutt78.github.io/Hiking-API-Hack/",
      stack: "HTML, CSS, JavaScript, jQuery",
      git: "https://github.com/jmutt78/Hiking-API-Hack"
    }
  ];

  return (
    <Root>
      <SkillsContainer>
        {myWorksection1.map(({ image, title, body, stack, url, git }) => (
          <SkillsColumn key={url}>
            <Hover
              image={image}
              title={title}
              body={body}
              stack={stack}
              url={url}
              git={git}
            />
          </SkillsColumn>
        ))}
      </SkillsContainer>
    </Root>
  );
};

export default Projects;
