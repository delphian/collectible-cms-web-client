# Collectible CMS Web Client

A Content Management System for stamps, coins, comic books, and other 
collectibles. This repository contains the web client portion of the CMS. 
A seperate server, such as [Collectible CMS Server](https://www.github.com/delphian/collectible-cms-server),
must be used to provide the back end.

## Requirements

* nodejs (>7.1.0) and npm (3.10.9). https://nodejs.org/en/download/
* A bash shell. Using windows? Try Cygwin.

## Installation

#### Install global node packages:
* `npm install gulp -g`. 'gulp' will be used to build the project

#### Clone repository, install packages, build client:
* `git clone https://github.com/delphian/collectible-cms-web-client.git`
* `cd collectible-cms-web-client`
* `npm install`
* `gulp`

#### Change API root url in index.html
* `vi ./dist/index.html` change window.apiRoot value.

## Launch Server (client)
* `node server.js` or `forever start server.js`

## Sublime Text 3 Support

### Install Typescript Support

* https://github.com/Microsoft/TypeScript-Sublime-Plugin

## License

[MIT License](../master/LICENSE.md)
