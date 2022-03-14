# Just a starter build

Want to dive into web development but don't know where to start?
This is the stack that gets me up and running asap.
A project starter. Threw some extra code in there just for fun.

## Installation

Setting up a development environment is a topic on it's own.
This is the most simple way to do it.

If you are using linux, just fire up your terminal.
On windows, i would use something like [git bash](https://gitforwindows.org/) or [cygwin](https://www.cygwin.com/).
On mac, well, you'll figure it out 😁

You will need [Node.Js, npm](https://linuxize.com/post/how-to-install-node-js-on-ubuntu-20-04/) and [webpack](https://webpack.js.org/guides/installation/).

Then run:

```bash
npm install
```

## Usage

When you are ready to make some edits, just do

```bash
npm run watch
```

or, if you made some changes and want to have a quick build:

```bash
npm run build
```

Webpack will bundle javascript and scss files into one, like magic.
Then, index.html will include those two files.
Open the html file with your browser, and you are good to go.

For a development build, try minifying your js and css files too. Webpack can handle it with a few tweaks.
Note, that you only need the contents of the public/ directory to display your project.
