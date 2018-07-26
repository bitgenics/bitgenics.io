# bitgenics.io
The repository for the Bitgenics website and blog.

## Development

1. clone the repo and then navigate into that directory

  `$ git clone git@github.com:bitgenics/bitgenics.io.git`

  `$ cd bitgenics.io`

2. run the application using Linc

  `$ linc build`
  `$ linc serve`

  it is important to note that at present Linc does not have a development mode and will not pick up changes made to the code, you will need to stop and restart the server.

  If you are making multiple changes you do have the option to run `npm start` however it is important to be aware that Linc ignores the public/index.html where as npm start will utilise this file.

## Deploying
  To deploy the application ensure all changes are in master the run

`$ linc build`

`$ linc publish`

`$ linc release`
