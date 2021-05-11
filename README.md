# API Help Women

###### An API built with

<p>
  <img src="https://cdn.svgporn.com/logos/typescript-icon.svg" alt="typescript" width="30" height="30"/>
  <img src="https://cdn.svgporn.com/logos/nodejs-icon.svg" alt="nodejs" width="30" height="30"/>
  <img src="https://cdn.svgporn.com/logos/socket.io.svg" alt="socket.io" width="30" height="30"/>
  <img src="https://cdn.svgporn.com/logos/docker-icon.svg" alt="docker" width="30" height="30"/>
  <img src="https://cdn.svgporn.com/logos/eslint.svg" alt="eslint" width="30" height="30"/>
  <img src="https://cdn.svgporn.com/logos/jest.svg" alt="jest" height="30">
  <img src="https://cdn.svgporn.com/logos/heroku-icon.svg" alt="heroku" height="30">
</p>

## Api Structure

![Clean Architecture Schema](.github/assets/clean-architecture.jpg)

This project structure is inspired in clean architecture code structure, [by Uncle Bob](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html). The main purpose of clean architecture is creating a strong project structure, splitting all the application in layers. The best advantages of using it, is create a application independent of any frameworks, tool, database or technology, being easy to handle the code, create a new features, fix any issue, or change some framework, thanks to the adapters and ports.

#### Folders 🗂

```
root
├── .github                 - Github setup files
│     └── assets
│     └── workflow
├── src                     - Application main code
│    │── app                - Composition layer, entry point code
│    │    └── routes        - routes files
│    │    └── setup         - server config (middlewares, cors, body-parser)
│    │    └── builds        - classes instances
│    │    └── adapters      - components adapters
│    ├── config             - Some global config files (.env, path alias, logger)
│    ├── domain             - Business rules definition
│    │     └── entities
│    │     └── usecases
│    ├── infra              - External frameworks and libs implementation
│    ├── presentation       - External api communication layer (controllers, presenters, validators)
│    └── useCases           - Usecases implementation
└─── tests                  - Components tests
      └── e2e
      └── unit
```

#### Logs 📜

All controllers unexpected errors are stored in the database, becoming available for future analysis and corrections. Having a console available, the errors and the requests data can be logged on console, for faster viewing while running the application.

## Building and contributing 🛠

To run this project locally, you will have to install Nodejs and PostgreSQL on the machine, or run everything with Docker. After run the project, go to **_.env.example_** file, on project root, and rename it to **_.env_**, filling all the properties in the file with your information.

###### Cloning Repository

```git
git clone https://github.com/gabriellopes00/help-women.git
or
git clone git@github.com:gabriellopes00/help-women.git
```

###### Running with Docker

```docker
docker-compose up
```

###### Running locally

```bash
npm install
npm run build
npm run start
```

###### Tests (jest) 🧪

- _**All**_ ❯ `yarn test`
- _**Coverage**_ ❯ `yarn test:ci`
- _**Unit**_ ❯ `yarn test:unit`
- _**e2e**_ ❯ `yarn test:e2e`

###### Linting (eslint and prettier) 🎭

- _**Lint**(eslint)_ ❯ `yarn lint`
- _**Style**(prettier)_ ❯ `yarn style`

###### Statistics of the types of commits 📊📈

Following the standard of the [Conventional Commits](https://www.conventionalcommits.org/).

- _**feature** commits(amount)_ ❯ `git shortlog -s --grep feat`
- _**test** commits(amount)_ ❯ `git shortlog -s --grep test`
- _**refactor** commits(amount)_ ❯ `git shortlog -s --grep refactor`
- _**chore** commits(amount)_ ❯ `git shortlog -s --grep chore`
- _**docs** commits(amount)_ ❯ `git shortlog -s --grep docs`
- _**build** commits(amount)_ ❯ `git shortlog -s --grep build`

## Contact 📱

[![Github Badge](https://img.shields.io/badge/-Github-000?style=flat-square&logo=Github&logoColor=white&link=https://github.com/gabriellopes00)](https://github.com/gabriellopes00)
[![Linkedin Badge](https://img.shields.io/badge/-LinkedIn-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/gabriel-lopes-6625631b0/)](https://www.linkedin.com/in/gabriel-lopes-6625631b0/)
[![Twitter Badge](https://img.shields.io/badge/-Twitter-1ca0f1?style=flat-square&labelColor=1ca0f1&logo=twitter&logoColor=white&link=https://twitter.com/_gabrielllopes_)](https://twitter.com/_gabrielllopes_)
[![Gmail Badge](https://img.shields.io/badge/-Gmail-D14836?&style=flat-square&logo=Gmail&logoColor=white&link=mailto:gabrielluislopes00@gmail.com)](mailto:gabrielluislopes00@gmail.com)
[![Facebook Badge](https://img.shields.io/badge/facebook-%231877F2.svg?&style=flat-square&logo=facebook&logoColor=white)](https://www.facebook.com/profile.php?id=100034920821684)
[![Instagram Badge](https://img.shields.io/badge/instagram-%23E4405F.svg?&style=flat-square&logo=instagram&logoColor=white)](https://www.instagram.com/_.gabriellopes/?hl=pt-br)
[![StackOverflow Badge](https://img.shields.io/badge/stack%20overflow-FE7A16?logo=stack-overflow&logoColor=white&style=flat-square)](https://stackoverflow.com/users/14099025/gabriel-lopes?tab=profile)
