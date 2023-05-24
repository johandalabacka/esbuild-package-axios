# esbuild-package-axios

Just a small node application using axios. It is an experiment to fix
the problems reported in https://github.com/vercel/pkg/issues/1822

It works by usubg esbuild to make one common-js file of all es6 module files including
any libraries added with yarn. pkg can then package this file as an executable.

The only thing not working is top-level-awaits. These must be wrapped in a function.
