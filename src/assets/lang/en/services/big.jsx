import React from "react";
import audiovisualContImg from "./../../../img/3.jpg";
import webDevelopImg from "./../../../img/4.jpg";
import digitalMarkImg from "./../../../img/5.jpg";
import softwareDevImg from "./../../../img/8.jpg";
import databaseImg from "./../../../img/6.jpg";
import linuxServersImg from "./../../../img/7.jpg";

const big = [
  {
    image: webDevelopImg,
    title: "Diseño y desarrollo de paginas web",
    texts: [
      <p key="1">
        Diseñamos tu sitio web pensando en la escalabilidad, de esta manera tu
        plataforma podra crecer al igual que tu empresa.
      </p>,
      <p key="2">Creamos y administramos tu sitio web.</p>
    ],
    abilities: [
      <li key="1">PHP</li>,
      <li key="2">JavaScript</li>,
      <li key="3">HTML</li>,
      <li key="4">CSS</li>,
      <li key="5">Wordpress</li>,
      <li key="6">Codeigniter</li>
    ]
  },
  {
    image: softwareDevImg,
    title: "Desarrollo de software",
    texts: [
      <p key="1">
        Diseñamos software especializado para automatizar y controlar el
        funcionamiento de tu empresa.
      </p>,
      <p key="2">
        Ahorra tiempo y dinero invirtiendo en software para tu empresa.
      </p>
    ],
    abilities: [
      <li key="1">
        Plataformas Desktop
        <ul>
          <li>Python</li>
          <li>Java</li>
        </ul>
      </li>,
      <li key="2">
        Plataformas web
        <ul>
          <li>Javascript</li>
          <li>ReactJs</li>
          <li>ElectronJs</li>
          <li>NodeJs</li>
          <li>PHP</li>
          <li>Codeigniter</li>
        </ul>
      </li>
    ]
  },
  {
    image: audiovisualContImg,
    title: "Creacion de contenido audiovisual",
    texts: [
      <p key="1">
        Fotografia a productos, Fotografia de escenarios, creacion de videos
        publicitarios, creacion de videos sobre eventos.
      </p>
    ],
    abilities: [
      <li key="1">Fotograf&iacute;a.</li>,
      <li key="2">Edici&oacute;n de imagenes.</li>,
      <li key="3">Fotografia de eventos.</li>,
      <li key="4">Creacion de videos sobre eventos.</li>,
      <li key="5">Edicion de Videos.</li>
    ]
  },
  {
    image: digitalMarkImg,
    title: "Marketing Digital",
    texts: [
      <p key="1">
        Formulamos estrategias digitales para que tu empresa crezca por medio de
        las redes sociales.
      </p>
    ],
    abilities: [
      <li key="1">Outbound Marketing.</li>,
      <li key="2">Inbound Marketing.</li>,
      <li key="3">Uso de herramientas publicitarias.</li>
    ]
  },
  {
    image: databaseImg,
    title: "Administraci&oacute;n de bases de datos.",
    texts: [
      <p key="1">
        Administramos, controlamos y centralizamos todas su informacion usando
        sistemas para la creacion de bases de datos.
      </p>
    ],
    abilities: [
      <li key="1">
        Bases de datos SQL
        <ul>
          <li>MySQL</li>
          <li>PostgreSQL</li>
        </ul>
      </li>,
      <li key="2">
        Bases de datos NoSQL
        <ul>
          <li>MongoDB</li>
        </ul>
      </li>
    ]
  },
  {
    image: linuxServersImg,
    title: "Administracion de servidores",
    texts: [
      <p key="2">
        Creacion y administracion de servidores Linux en instancias EC2, manejo
        de cerficados SSL y construccion de entornos basados en docker
        containers.
      </p>
    ],
    abilities: [
      <li key="1">Linux</li>,
      <li key="2">SSL</li>,
      <li key="3">AWS</li>,
      <li key="4">Ubuntu</li>,
      <li key="5">Docker</li>
    ]
  }
];

export default big;
