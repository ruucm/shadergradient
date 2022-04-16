Curated and customizable 3d gradient package, in modern design tools and React.

## Figma Plugin

[Link]()

## Framer Package

[Link](https://framer.com/projects/ShaderGradient--7fmA9c0AApv3vyjCPpS3-emceg)

## Develop

First, install dependencies and build package.

### Start build package
```
yarn install && yarn start
```

### Start developing website
```
yarn website:dev
```

### Start developing plugin
```
yarn plugin:start
```


## ~~Installation~~

```sh
yarn add shadergradient three @react-three/fiber @react-three/drei @react-three/postprocessing
```

## ~~Develop shadergradient package with website & figma-plugin~~

To develop with the shadergradient package, follow below instructions.

1. `yarn install`
1. `yarn link shadergradient` (Link and replace shadergradient package to local.)
1. `npm link ../path/to/your/project/node_modules/react` (Use shadergradient package's react)
1. `npm link ../path/to/your/project/node_modules/@react-three/fiber` (Use shadergradient package's @react-three/fiber)
1. `npm link ../path/to/your/project/node_modules/@react-three/drei` (Use shadergradient package's @react-three/drei)
1. `npm link ../path/to/your/project/node_modules/postprocessing` (Use shadergradient package's postprocessing)

For example

```
yarn link shadergradient && npm link '/Users/ruucm/MyDocuments/Carving/blocks/shadergradient/node_modules/react' && npm link '/Users/ruucm/MyDocuments/Carving/blocks/shadergradient/node_modules/@react-three/fiber' && npm link '/Users/ruucm/MyDocuments/Carving/blocks/shadergradient/node_modules/@react-three/drei' && npm link '/Users/ruucm/MyDocuments/Carving/blocks/shadergradient/node_modules/postprocessing' && yarn dev
```

## ~~Next.js Example Project~~

[Codesandbox](https://codesandbox.io/s/optimistic-benji-pw64i)