# EchoesFromSilenceWeb

Esta web nace de la necesidad de mi grupo de musica y de mi curiosidad como desarrolladora. Despues de un ano en el mundillo tech, necesito seguir practicando y explorando sobre las tecnologias con las que trabajo, por lo que esta web esta desarrollada en su totalidad con Angular.

Proyecto Angular actualizado a una version moderna del framework y sus dependencias.

## Requisitos previos

- Node.js 20 o superior
- npm 10 o superior

Comprobar versiones:

```bash
node -v
npm -v
```

## Development server

1. Instalar dependencias:

```bash
npm install
```

2. Levantar el servidor de desarrollo:

```bash
npm start
```

3. Abrir en el navegador:

`http://localhost:4200/`

La aplicacion recarga automaticamente cuando cambias archivos fuente.

### Nota importante

Si ejecutas `ng serve` y te aparece `command not found`, usa `npm start` o `npx ng serve`.
Eso pasa cuando Angular CLI no esta instalado de forma global, pero si esta disponible localmente en el proyecto.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

```bash
npm run build
```

Los artefactos de compilacion se generan en `dist/`.

## Running unit tests

```bash
npm test -- --watch=false --browsers=ChromeHeadless
```

Los tests se ejecutan con [Karma](https://karma-runner.github.io).

## Further help

Para mas ayuda sobre Angular CLI:

```bash
npx ng help
```

o revisa la documentacion oficial: [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli).
