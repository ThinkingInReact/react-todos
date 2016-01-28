# React Todos

A simple React todos app using a dispatcher and reducer approach but without Redux. Written for my book [Thinking In React](http://ThinkingInReact.com). It is solely intended as a learning example and is not a good starting point for an app. Checkout [redux](https://github.com/rackt/redux) itself if you need a library that works like this app.

Collaborating on this React app:

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with npm)
* [nwb](https://github.com/insin/nwb/) - `npm install -g nwb`

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`

## Running / Development

* `nwb serve` will run the app
* Visit the app at [http://localhost:3000](http://localhost:3000)

### Running Tests

* `nwb test` will run the tests once
* `nwb test --server` will run the tests on every change

### Building

* `nwb build` (production)
* `nwb build --set-env-NODE_ENV=development` (development)
