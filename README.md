<div align="center">

  <img src="public/img/logo512.png" alt="logo" width="200" height="auto" />
  <h1>eShop Backend App</h1>
   
<h4>
    <a href="https://esklep.sajko255.usermd.net/">View Demo</a>
</div>

<br />

<!-- About the Project -->
## 💦 About the Project


<!-- Screenshots -->
### 📷 Screenshots

<div align="center"> 
  <img src="https://i.ibb.co/GTy7vXk/front-page.png" alt="front-page">
</div>

<br />

<!-- TechStack -->
### 🔧 Tech Stack

  <ul>
    <li><a href="https://www.typescriptlang.org/">Typescript</a></li>
    <li><a href="https://expressjs.com/">ExpressJS</a></li>
  </ul>


<br />

<!-- Features -->
### 📋 Features

- Sunchronization with FE available here: https://github.com/dLeczycki/eshop-frontend.git
- Product List
- Order Placement


<br />

<!-- Config & Env Vriables -->
### 🔑 Config & Env Variables

All config and env variables can be found under /src/config/config.ts file.

<br />

<!-- Getting Started -->
## 	🔥 Getting Started

<br />

<!-- Prerequisites -->
### 🚩 Prerequisites

At first you need to clone the project to your local environment
```bash
  git clone https://github.com/dLeczycki/eshop-backend.git
```

<br />

<!-- Installation -->
### 🌟 Installation

Install node_modules with npm

```bash
  cd eshop-backend
  npm i
```

<br />

<!-- Run Locally -->
### ⚡ Run Locally

Clone the project

```bash
  git clone https://github.com/dLeczycki/eshop-backend.git
```

Go to the project directory

```bash
  cd eshop-backend
```

Install dependencies

```bash
  npm i
```

Start the server

```bash
  npm run start:dev
```

<br />


<!-- Deployment -->
### 🌀 Deployment

At first change config/config.ts file to production configuration

To create production build run

```bash
  npm run build
```

Copy files from /dist folder to your hosting provider (e.g. with FTP protocol)

Copy package.json file to the same destination folder as above

Install dependencies
```bash
npm i
```

Run app according to provider documentation