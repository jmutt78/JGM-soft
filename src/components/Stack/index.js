import React from "react";

import Front from "../../../assets/coding.svg";
import Server from "../../../assets/ui.svg";
import Data from "../../../assets/database.svg";
import Cloud from "../../../assets/cloud-computing.svg";

import {
  Root,
  Container,
  Column,
  SkillsContainer2,
  SkillsColumn
} from "./styles";

const Work = () => {
  const skillsData = [
    {
      image: <Front />,
      title: "FRONT END",
      body: (
        <ul>
          <li>HTML5</li>
          <li>CSS3 SASS</li>
          <li>JavaScript</li>
          <li>React Redux GraphQl </li>
        </ul>
      )
    },
    {
      image: <Server />,
      title: "SERVER",
      body: (
        <ul>
          <li>NodeJS</li>
          <li>Express</li>
          <li>GraphQl</li>
          <li>PHP</li>
        </ul>
      )
    },
    {
      image: <Data />,
      title: "DATABASE",
      body: (
        <ul>
          <li>PostgreSQL</li>
          <li>mySQL</li>
          <li>MongoDB</li>
          <li>Cassandra</li>
        </ul>
      )
    },
    {
      image: <Cloud />,
      title: "DEPLOYMENT",
      body: (
        <ul>
          <li>System Design</li>
          <li>AWS ECS SQS</li>
          <li>Docker</li>
          <li>Git</li>
        </ul>
      )
    }
  ];

  return (
    <Root>
      <SkillsContainer2 style={{ width: "100%", paddingTop: "30px" }}>
        {skillsData.map(({ image, title, body }) => (
          <SkillsColumn key={title}>
            {image}
            <h4>{title}</h4>
            <div>{body}</div>
          </SkillsColumn>
        ))}
      </SkillsContainer2>
    </Root>
  );
};

export default Work;
