todo-ng-pouchdb
==========================

An Example of the use of [ng-pouchdb](https://github.com/danielzen/ng-pouchdb), a 4-way data-binding library, in action using a simple Ionic Todo app with a PouchDb local storage backend configured to sync with a CouchDb installation. This is a demo of offline functionality with server synchronization. And is part of my Offline data synchronization talk.
 Slides available at: [http://zndg.tl/ng-pouchdb](http://zndg.tl/ng-pouchdb)

You can watch me demo building a much earlier version of the app at
[FITC Spotlight: AngularJS](http://youtu.be/6ecuA-pOev0?t=14m9s) in Toronto.

## Installation

Node must be installed. And, you wil need to install bower globally with `npm install -g bower` before running `bower install`, to download
the necessary required frontend libraries.

## Run the App

You can `cd` into the `www` directory and run

```bash
npm install http-server -g
http-server -p 8080
```

You can then just open [http://localhost:8080/index.html](http://localhost:8080/index.html) in a browser.

Personally I use WebStorm which has a built in server. From a JetBrains product, you can select "View...", "Open in Browser" on index.html.

The final version of this demo requires you to [download and install CouchDb](http://couchdb.apache.org/#download), which runs on port 5984. And, [enable CORS](http://pouchdb.com/getting-started.html#enabling_cors).

## iOS version

However, to run this as a mobile application in iOS emulator,
do the following to setup :

```bash
cd todo-ng-pouchdb
npm install -g cordova ionic gulp
```

To run in the iPhone Simulator:

```bash
ionic platform add ios
ionic build ios
ionic emulate ios
```

## Building Out & Updating Ionic or PouchDb

To update to a new version of Ionic, open bower.json and change the version listed there.

```
"ionic": "driftyco/ionic-bower#1.0.0-XXX"
```

After saving the update to bower.json file, run `bower install`.

I was a little forward thinking adding  the `package.json` file.
To continue working on this repository, adding tests, using SASS, you can

```bash
$ npm install
$ gulp install
```
