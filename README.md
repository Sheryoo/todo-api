![Bun](https://img.shields.io/badge/Bun-%23000000.svg?style=for-the-badge&logo=bun&logoColor=white)

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)

![SQLite](https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white)

![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

# ToDo-API

> This is full API for an ToDo api using bun, typescript and sqlite3.

## Table of contents

- [ToDo-API](#ToDo-API)
  - [Table of contents](#table-of-contents)
  - [Prerequisites](#prerequisites)
  - [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Usage](#usage)
    - [Serving the app](#serving-the-app)
  - [Built With](#built-with)
  - [Authors](#authors)
  - [License](#license)

## Prerequisites

This project requires Bun.
[Bun](https://bun.sh/) is really easy to install.
To make sure you have them available on your machine,
try running the following command.

```sh
$ bun -v
1.1.0
```

### .env file requirements

you must provide the following environment variables to run the application.

```ts


JWT_SECRET = ...

PORT = ...

PREFIX = ...

```

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

## Installation

**BEFORE YOU INSTALL:** please read the [prerequisites](#prerequisites)

Start with cloning this repo on your local machine:

```sh
$ git clone https://github.com/Sheryoo/todo-api.git
$ cd todo-api
```

To install and set up the library, run:

```sh
$ bun install
```

## Usage

### Serving the app

```sh
$ bun start
```

## Built With

- Bun
- Typescript
- Express
- MongoDB
- Love ❤️

## Authors

- **Sheryoo0** - _Initial work_ - [Sheryoo](https://github.com/Sheryoo)

## License

[MIT License](./LICENSE) © Sheryoo0
