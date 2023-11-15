import React from "react";
import { Component } from "../../components/Component";
import { Group } from "../../components/Group";
import { GroupWrapper } from "../../components/GroupWrapper";
import "./style.css";

export const DesktopLightMode = () => {
  const scrollToSection = (sectionId) => {
    const sectionElement = document.querySelector(`.${sectionId}`);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="desktop-light-mode">
      <div className="div-2">
        <div className="group-3">
          <div className="group-4">
            <div className="text-wrapper" onClick={() => scrollToSection("text-wrapper-4")}>
              Tech Stack
            </div>
            <div className="text-wrapper-2" onClick={() => scrollToSection("text-wrapper-17")}>
              Projects
            </div>
            <div className="text-wrapper-3" onClick={() => scrollToSection("text-wrapper-19")}>
              About
            </div>
          </div>
          <img className="datacyb" alt="Datacyb" src="https://c.animaapp.com/LHYzf02L/img/datacyb@2x.png" />
          <div className="group-5">
            <a href="https://www.linkedin.com/in/esteban-baigts-70b423232/" target="_blank" rel="noopener noreferrer">
              <img
                className="linkedin"
                alt="Entypo social"
                src="https://c.animaapp.com/LcNIGwu7/img/entypo-social-linkedin-with-circle.svg"
              />
            </a>
          </div>
          <img className="github" alt="Vector" src="https://c.animaapp.com/LHYzf02L/img/vector-4.svg" />
        </div>
        <div className="text-wrapper-4">My Tech Stack</div>
        <img
          className="akar-icons-github"
          alt="Akar icons github"
          src="https://c.animaapp.com/LHYzf02L/img/akar-icons-github-fill-4.svg"
        />
        <img
          className="logos-git-icon"
          alt="Logos git icon"
          src="https://c.animaapp.com/LHYzf02L/img/logos-git-icon.svg"
        />
        <img className="logos-react" alt="Logos react" src="https://c.animaapp.com/LHYzf02L/img/logos-react.svg" />
        <img
          className="vscode-icons-file"
          alt="Vscode icons file"
          src="https://c.animaapp.com/LHYzf02L/img/vscode-icons-file-type-js-official.svg"
        />
        <div className="overlap-group">
          <div className="rectangle" />
          <div className="text-wrapper-5">
            <a href="https://github.com/estebanbaigts/N4S" target="_blank" rel="noopener noreferrer">
              View Code
            </a>
          </div>
          <div className="text-wrapper-6">Projet 🔨 - N4S</div>
          <p className="p">
            A project based on AI, the goal being to connect an AI to a small car with lasers that allows it to orient
            itself and we had to make it move forward without it hitting a wall
          </p>
          <p className="tech-stack-c">
            <span className="span">Tech stack :</span>
            <span className="text-wrapper-7">&nbsp;</span>
            <span className="text-wrapper-8">C</span>
          </p>
          <img
            className="img"
            alt="Akar icons github"
            src="https://c.animaapp.com/LHYzf02L/img/akar-icons-github-fill-3.svg"
          />
          <img
            className="DALLE"
            alt="Dalle"
            src="https://c.animaapp.com/LHYzf02L/img/dall-e-2023-11-14-11-02-1@2x.png"
          />
        </div>
        <div className="overlap">
          <div className="text-wrapper-9">
            <a href="https://github.com/estebanbaigts/Popeye" target="_blank" rel="noopener noreferrer">
              View Code
            </a>
          </div>
          <div className="text-wrapper-10">Projet 🔨 - POPEYE</div>
          <p className="text-wrapper-11">
            The goal was to containerize and define the deployment of a simple web survey application.
          </p>
          <p className="tech-stack-HTML">
            <span className="span">Tech stack :</span>
            <span className="text-wrapper-7">&nbsp;</span>
            <span className="text-wrapper-8">HTML , JavaScript, CSS,, Docker</span>
          </p>
          <img
            className="akar-icons-github-2"
            alt="Akar icons github"
            src="https://c.animaapp.com/LHYzf02L/img/akar-icons-github-fill-2.svg"
          />
          <img
            className="DALLE-2"
            alt="Dalle"
            src="https://c.animaapp.com/LHYzf02L/img/dall-e-2023-11-14-11-09-19---a-basc-image-simple-web-survey-appl@2x.png"
          />
        </div>
        <div className="overlap-2">
          <div className="text-wrapper-9">
            <a href="https://github.com/estebanbaigts/RPG" target="_blank" rel="noopener noreferrer">
              View Code
            </a>
          </div>
          <div className="text-wrapper-12">Projet 🔨 - RPG</div>
          <div className="overlap-3">
            <p className="text-wrapper-13">
              Projet Epitech qui consiste à créer une API REST qui gère les opérations CRUD, en l&#39;occurrence pour
              une application de liste de tâches.
            </p>
            <p className="div-3">
              <span className="span">Tech stack :</span>
              <span className="text-wrapper-7">&nbsp;</span>
              <span className="text-wrapper-8">HTML , JavaScript, Python, TSQL, CSS</span>
            </p>
          </div>
          <img
            className="akar-icons-github-2"
            alt="Akar icons github"
            src="https://c.animaapp.com/LHYzf02L/img/akar-icons-github-fill-1.svg"
          />
          <img
            className="img-2"
            alt="Adobestock"
            src="https://c.animaapp.com/LHYzf02L/img/adobestock-546101577-preview-1@2x.png"
          />
        </div>
        <div className="overlap-4">
          <div className="text-wrapper-9">
            <a href="https://github.com/estebanbaigts/GreenMeet" target="_blank" rel="noopener noreferrer">
              View Code
            </a>
          </div>
          <div className="text-wrapper-14">Projet 🔨 - GreenMett</div>
          <div className="overlap-3">
            <p className="text-wrapper-13">
              Notre mission est de créer un réseau dynamique et vivant de jardins communautaires, favorisant la
              collaboration, la convivialité et la découverte.
            </p>
            <p className="div-3">
              <span className="span">Tech stack :</span>
              <span className="text-wrapper-7">&nbsp;</span>
              <span className="text-wrapper-8">HTML, CSS , JavaScript, React Native</span>
            </p>
          </div>
          <img
            className="akar-icons-github-2"
            alt="Akar icons github"
            src="https://c.animaapp.com/LHYzf02L/img/akar-icons-github-fill.svg"
          />
          <img
            className="img-2"
            alt="Dalle"
            src="https://c.animaapp.com/LHYzf02L/img/dall-e-2023-11-14-11-04-1@2x.png"
          />
        </div>
        <div className="overlap-5">
          <Component className="component-1" />
          <img
            className="esteban-photo"
            alt="Esteban photo"
            src="https://c.animaapp.com/LHYzf02L/img/esteban-photo@2x.png"
          />
        </div>
        <p className="text-wrapper-15">Technologies that i use actualy</p>
        <div className="text-wrapper-16">What i do</div>
        <div className="text-wrapper-17">Projects</div>
        <img className="divider" alt="Divider" src="https://c.animaapp.com/LHYzf02L/img/divider.svg" />
        <Group className="group-6" />
        <GroupWrapper className="group-7" />
        <img className="group-8" alt="Group" src="https://c.animaapp.com/LHYzf02L/img/group@2x.png" />
        <img className="figma" alt="Figma" src="https://c.animaapp.com/LHYzf02L/img/figma.svg" />
        <img className="vector-2" alt="Vector" src="https://c.animaapp.com/LHYzf02L/img/vector-3.svg" />
        <div className="vector-wrapper">
          <img className="vector-3" alt="Vector" src="https://c.animaapp.com/LHYzf02L/img/vector-1.svg" />
        </div>
        <img className="image" alt="Image" src="https://c.animaapp.com/LHYzf02L/img/image-17.svg" />
        <img className="vector-4" alt="Vector" src="https://c.animaapp.com/LHYzf02L/img/vector.svg" />
        <img className="group-9" alt="Group" src="https://c.animaapp.com/LHYzf02L/img/group-12.svg" />
        <img className="group-10" alt="Group" src="https://c.animaapp.com/LHYzf02L/img/group-13.svg" />
        <p className="text-wrapper-18">Who am I and what do I offer</p>
        <div className="text-wrapper-19">About</div>
        <div className="je-suis-un-passionn-wrapper">
          <p className="je-suis-un-passionn">
            Je suis un passionné de développement full-stack JavaScript de 21 ans, actuellement en cours de master à
            Epitech Digital School. Fort d&#39;une formation rigoureuse et d&#39;un titre RNCP niveau 7, je combine
            créativité et expertise technique pour créer des solutions innovantes et performantes.
          </p>
        </div>
        <div className="en-tant-que-d-wrapper">
          <p className="en-tant-que-d">
            En tant que développeur full-stack JS, je propose des services complets, du façonnage de maquettes web ou
            d&#39;applications mobiles sur Figma à la réalisation experte de sites sur mesure. Mon expertise front-end
            et back-end assure la concrétisation de projets avec une approche holistique, combinant créativité et
            fonctionnalité pour offrir des expériences utilisateur exceptionnelles.
          </p>
        </div>
      </div>
    </div>
  );
};
