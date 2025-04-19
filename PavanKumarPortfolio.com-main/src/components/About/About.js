import React from "react";
import styled from "styled-components";
import ScrollAnimation from "react-animate-on-scroll";

const AboutWrapper = styled.section`
  padding: 50px 0;
`;

const Image = styled.img`
  width: 200px;  /* Adjust as needed */
  height: 200px; /* Adjust as needed */
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 20px;
`;

const Technologies = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-top: 30px;
`;

const Tech = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const TechImg = styled.img`
  width: 80px;
  height: 80px;
  margin-bottom: 10px;
`;

const TechName = styled.span`
  font-size: 14px;
`;

function About() {
  const technologies = [
    { name: "Python", img: "/images/python.png" },
    { name: "MySQL", img: "/images/mysql.png" },
    { name: "SQL Server", img: "/images/sqlserver.png" },
    { name: "Git", img: "/images/git.png" },
    { name: "Excel", img: "/images/excel.png" },
    { name: "Power BI", img: "/images/powerbi.png" },
    { name: "Tableau", img: "/images/tableau.png" },
    { name: "Pandas", img: "/images/pandas.png" },
    { name: "NumPy", img: "/images/numpy.png" },
    { name: "Seaborn", img: "/images/seaborn.png" },
    { name: "Figma", img: "/images/figma.png" },
    { name: "VS Code", img: "/images/vscode.png" },
  ];

  return (
    <AboutWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
          <ScrollAnimation animateIn="fadeInLeft">
            <Image
           src={process.env.PUBLIC_URL + "/ph.svg"} 
              alt="man-svgrepo"
            />
          </ScrollAnimation>
          <div className="AboutBio">
            <ScrollAnimation animateIn="fadeInLeft">
              Hello! My namePavan Kumar a data analyst  enthusiast with a strong foundation in data analysis, visualization, and business intelligence . Originally from India and currently based in Andhra Pradesh, I’ve gained valuable experience through entry-level roles that have honed my adaptability, communication, and problem-solving skills . My passion lies in uncovering insights from data and transforming it into actionable intelligence to drive decision-making.
            </ScrollAnimation>

            <br /><br />

            <ScrollAnimation animateIn="fadeInLeft">
              During my studies, I worked on impactful projects involving business intelligence dashboards, predictive analytics, and data visualization using tools like Python, SQL, Excel, Power BI, and Tableau . These projects enhanced my technical expertise and ability to translate complex datasets into meaningful insights. Whether optimizing workflows, identifying trends, or creating interactive reports, I thrived in turning raw data into strategic solutions. Collaborating with diverse teams on real-world challenges has been a rewarding part of my growth.
            </ScrollAnimation>

            <br /><br />

            <ScrollAnimation animateIn="fadeInLeft">
              I’m excited to continue exploring data-driven projects , particularly in business intelligence, machine learning, and data storytelling . With a strong analytical mindset and a passion for solving complex problems, I aim to leverage data to deliver impactful business outcomes. My goal is to contribute to innovative organizations while continuously expanding my skills in the ever-evolving field of data science.              <div className="tagline2">
                I have become confident using the following technologies:
              </div>
            </ScrollAnimation>

            <Technologies>
              {technologies.map((tech, index) => (
                <ScrollAnimation animateIn="fadeInLeft" key={index}>
                  <Tech key={index} className="tech">
                    <TechImg src={tech.img} alt={tech.name} />
                    <TechName>{tech.name}</TechName>
                  </Tech>
                </ScrollAnimation>
              ))}
            </Technologies>
          </div>
        </div>
      </div>
    </AboutWrapper>
  );
}

export default About;
