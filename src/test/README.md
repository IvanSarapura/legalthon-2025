# Testing

Este proyecto utiliza [Vitest](https://vitest.dev/) y [React Testing Library](https://testing-library.com/react) para tests unitarios y de componentes.

## Configuración

- **Vitest**: Framework de testing rápido y moderno
- **React Testing Library**: Utilidades para testear componentes React
- **jsdom**: Entorno DOM simulado para tests
- **@testing-library/jest-dom**: Matchers adicionales para DOM

## Ejecutar tests

```bash
# Ejecutar tests en modo watch
npm test

# Ejecutar tests una vez
npm test -- --run

# Ejecutar tests con UI interactiva
npm run test:ui

# Ejecutar tests con cobertura
npm run test:coverage
```

## Estructura de tests

Los archivos de test deben seguir el patrón `*.test.ts` o `*.test.tsx` y estar junto a los archivos que testean, o en una carpeta `__tests__`.

Ejemplos:
- `Button.test.tsx` junto a `Button.tsx`
- `highlightsImages.test.ts` junto a `highlightsImages.ts`

## Mocks

Los mocks comunes están configurados en `setupTests.ts`:
- `next-intl`: Traducciones mockeadas
- `next/navigation`: Router y navegación mockeados

## Escribir nuevos tests

### Test de componente

```tsx
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MyComponent } from "./MyComponent";

describe("MyComponent", () => {
  it("renderiza correctamente", () => {
    render(<MyComponent />);
    expect(screen.getByText("Hello")).toBeInTheDocument();
  });
});
```

### Test de función

```ts
import { describe, it, expect } from "vitest";
import { myFunction } from "./myFunction";

describe("myFunction", () => {
  it("retorna el valor esperado", () => {
    expect(myFunction("input")).toBe("expected");
  });
});
```

## Cobertura

El objetivo es mantener una cobertura mínima del 70% en componentes críticos y funciones de utilidad.
