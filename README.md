# New Games

Prototype of shared components in a private NPM registry

## Setup

Create a `.env.local` file with your API key for the GiantBomb API:
```
REACT_APP_API_KEY=YOUR_API_KEY_HERE
```

A private NPM registry can be started using `sinopia`

```bash
npm i -g sinopia
sinopia
```

This should start a registry server on your local machine at `http://localhost:4873` Before you can use the registry, you will need to set up a user account with `npm adduser --registry http://localhost:4873/`

Next with your new login, publish the shared package to `sinopia`.

```bash
cd shared_components
npm run build
npm publish
```

Now the dependency can be installed in the parent app to start the demo.

```bash
yarn
yarn start
```
