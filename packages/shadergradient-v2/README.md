# framer-tsup-esm

For better code experiences in the [Framer](https://www.framer.com/) Canvas.

Supports:

- TypeScript
- React
- ESM hosting (powered by Github Workflows and Github Pages)
- Hot module reloading (Components Only for now)

## Github Setups

1. Settings > Actions > General > Workflow permissions > Read and write permissions
2. Settings > Pages > Source > Branch: `pages`

## Framer Project Example

https://framer.com/projects/framer-tsup-esm--lLG7BjQ9yVi8xMvGbgIT-iYZXI

```tsx
import { Button as ImportedComponent } from "http://yourdomain.ngrok-free.app/index.mjs";
import { useRealtimeComponent } from "http://yourdomain.ngrok-free.app/utils/live-reload/useRealtimeComponent.mjs";
import { addPropertyControls } from "framer";

/**
 * @framerSupportedLayoutWidth auto
 * @framerSupportedLayoutHeight auto
 */
export function ButtonLive(props) {
  const Component = useRealtimeComponent(ImportedComponent, "Button");
  return <Component {...props} />;
}

addPropertyControls(ButtonLive, ImportedComponent.propertyControls || {});
```
