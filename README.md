<h1 align="center" style="border:none;">
Machine-Status 💻📊
</h1>

Machine Status (CPU usage + Memory usage + Disk usage) tracking using node-js.

[![Github file size](https://img.shields.io/github/size/webcaetano/craft/build/phaser-craft.min.js.svg)](https://github.com/Agezao/machine-status)
[![GitHub top language](https://img.shields.io/github/languages/top/badges/shields.svg)](https://github.com/Agezao/machine-status)
[![GitHub](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/Agezao/machine-status)

## How it works?

It runs on a configured schedule and gather system's information (CPU usage + Memory usage + Disk usage), save it to a local Sqlite3 database and then provides a routine to export these data to CSV so you can run your analysis/reports on it :)


## Getting started

### Install Global Dependancies
  * [Node.js](http://nodejs.org)

### Running the project
  * [Download zip](https://github.com/agezao/machine-status/archive/master.zip), or clone the repo `git clone https://github.com/Agezao/machine-status.git`
  * cd to project folder
  * run `[sudo] npm install` (first time users)
  * edit config with your informations and rename it to `index.js` (instead of `index.example.js`)
  * `npm start`

### Querying data

To later query the data, you can use the [CLI of sqlite](https://www.sqlite.org/cli.html) to search inside the .sqlite3 file.

or

run `npm run export` and it'll generate one .csv with all your sql data in a structured manner.

## License

Do whatever you want. [open-source MIT license](http://opensource.org/licenses/mit-license.php).
