# Storybook de componentes creados con React + TypeScript + Vite

Instalar
`npm i cob3x85-components-storybook`

1. Button component
2. Label component

## NPM Publish

`npm login`

Change version every time we publish a new package to NPM

`npm publish`

Para agregar los archivos de distribución y typings es necesario agregar las siguiente configuración en el archivo `package.json`

```json
{
  ...,
  "main": "dist/index.js",
  "typings": "dist/index.d.ts"
}
```

- Libreria para hacer el publish de forma automatizada, `np`

[NP Package](https://www.npmjs.com/package/np)

- Libreria para actualizar paquetes de npm `npm-check-updates`

[NPM Check updates](https://www.npmjs.com/package/npm-check-updates#npm-check-updates)
