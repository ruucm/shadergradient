Curated and customizable 3d gradient package, in modern design tools and React.


# Available platforms

## React


```
yarn add shadergradient @react-three/fiber @react-three/drei @react-spring/three three@^0.135.0 three-stdlib@^2.6.1

```tsx
import React from "react";
import { LCanvas, Gradient } from "shadergradient";
import * as reactSpring from "@react-spring/three";
import * as drei from "@react-three/drei";
import * as fiber from "@react-three/fiber";

function App() {
  return (
    <LCanvas
      importedFiber={{ ...fiber, ...drei, ...reactSpring }}
      style={{
        position: "absolute",
        top: 0,
      }}
    >
      <Gradient cDistance={32} cPolarAngle={125} />
    </LCanvas>
  );
}
```




# Development

## Setup

```
yarn install && yarn bootstrap
```

## Start development

```
yarn start
```

## TODO
- add proper importing method to the `example-cra` (like `next-transpile-modules` does on the `example-nextjs`)
