# Package.json: Guía Completa

El archivo `package.json` es el manifiesto fundamental de cualquier proyecto Node.js. Actúa como el centro de configuración del proyecto, gestionando dependencias, scripts, metadatos y configuraciones avanzadas.

## Campos Básicos de Identificación

### name
Nombre único del paquete. Debe ser en minúsculas, sin espacios. Si planeas publicarlo en npm, debe ser único en el registro.

```json
"name": "mi-proyecto"
```

**Reglas:**
- Solo puede contener caracteres URL-safe
- Máximo 214 caracteres
- No puede comenzar con punto o guión bajo
- No debe contener mayúsculas

### version
Versión del paquete siguiendo Semantic Versioning (semver): MAJOR.MINOR.PATCH

```json
"version": "1.2.3"
```

**Significado:**
- **MAJOR**: Cambios incompatibles con versiones anteriores
- **MINOR**: Nueva funcionalidad compatible hacia atrás
- **PATCH**: Correcciones de bugs compatibles

### description
Descripción concisa del proyecto. Aparece en búsquedas de npm.

```json
"description": "API REST para gestión de usuarios con autenticación JWT"
```

### keywords
Array de palabras clave para mejorar la búsqueda en npm.

```json
"keywords": ["express", "api", "rest", "authentication", "jwt"]
```

## Puntos de Entrada

### main
Punto de entrada principal cuando alguien hace `require('tu-paquete')`.

```json
"main": "index.js"
```

### module
Punto de entrada para módulos ES6 (ESM).

```json
"module": "dist/index.mjs"
```

### bin
Define comandos ejecutables desde la línea de comandos.

```json
"bin": {
  "mi-cli": "./bin/cli.js"
}
```

### exports
Define múltiples puntos de entrada (Node.js 12+).

```json
"exports": {
  ".": "./index.js",
  "./utils": "./src/utils.js"
}
```

## Scripts

Los scripts permiten automatizar tareas comunes del proyecto.

```json
"scripts": {
  "start": "node index.js",
  "dev": "nodemon index.js",
  "test": "jest --coverage",
  "test:watch": "jest --watch",
  "build": "tsc",
  "lint": "eslint src/**/*.js",
  "format": "prettier --write src/**/*.js",
  "prepare": "husky install"
}
```

**Scripts especiales:**
- `preinstall`, `postinstall`: Antes/después de instalar
- `prepublish`, `postpublish`: Antes/después de publicar
- `pretest`, `posttest`: Antes/después de tests
- `prepare`: Se ejecuta antes de empaquetar y publicar

## Dependencias

### dependencies
Paquetes necesarios en producción. Se instalan con `npm install`.

```json
"dependencies": {
  "express": "^4.18.2",
  "dotenv": "^16.0.3",
  "mongoose": "^7.0.0"
}
```

**Rangos de versiones:**
- `^4.18.2`: Compatible con 4.x.x (no 5.0.0)
- `~4.18.2`: Compatible con 4.18.x (no 4.19.0)
- `4.18.2`: Versión exacta
- `*` o `latest`: Última versión (no recomendado)
- `>=4.18.0 <5.0.0`: Rango específico

### devDependencies
Paquetes solo necesarios durante el desarrollo.

```json
"devDependencies": {
  "nodemon": "^2.0.20",
  "jest": "^29.3.1",
  "eslint": "^8.34.0",
  "prettier": "^2.8.3",
  "@types/node": "^18.11.18"
}
```

Se instalan con `npm install --save-dev` o `npm install -D`.

### peerDependencies
Especifica qué versiones de otros paquetes son compatibles con tu paquete. **Crítico para plugins y extensiones**.

```json
"peerDependencies": {
  "react": "^17.0.0 || ^18.0.0",
  "react-dom": "^17.0.0 || ^18.0.0"
}
```

**Uso principal:**
- Plugins que extienden funcionalidad de otro paquete
- Librerías que trabajan con frameworks específicos
- Evitar duplicación de dependencias pesadas

**Ejemplo práctico:** Si creas un componente de React, necesitas React instalado, pero no quieres incluirlo en tu paquete (sería duplicación). Usas `peerDependencies` para indicar que el proyecto que use tu componente debe tener React instalado.

### peerDependenciesMeta
Configuración adicional para peerDependencies.

```json
"peerDependenciesMeta": {
  "react-dom": {
    "optional": true
  }
}
```

Indica que `react-dom` es opcional y no causará error si no está instalado.

### optionalDependencies
Dependencias opcionales. El proyecto funcionará aunque fallen al instalarse.

```json
"optionalDependencies": {
  "fsevents": "^2.3.2"
}
```

**Importante:** Tu código debe manejar la ausencia de estas dependencias.

### bundledDependencies
Array de nombres de paquetes que se incluirán al empaquetar.

```json
"bundledDependencies": [
  "renderized",
  "super-streams"
]
```

## Información del Autor y Proyecto

### author
Información del creador principal.

```json
"author": {
  "name": "Pedro Hurtado",
  "email": "pedro@example.com",
  "url": "https://pedrohurtado.com"
}
```

Forma corta:
```json
"author": "Pedro Hurtado <pedro@example.com> (https://pedrohurtado.com)"
```

### contributors
Lista de colaboradores del proyecto.

```json
"contributors": [
  {
    "name": "María García",
    "email": "maria@example.com"
  },
  "Juan López <juan@example.com>"
]
```

### license
Tipo de licencia del proyecto.

```json
"license": "MIT"
```

Licencias comunes: MIT, Apache-2.0, GPL-3.0, ISC, BSD-3-Clause

### homepage
URL de la página principal del proyecto.

```json
"homepage": "https://github.com/usuario/proyecto#readme"
```

### bugs
Dónde reportar problemas.

```json
"bugs": {
  "url": "https://github.com/usuario/proyecto/issues",
  "email": "bugs@proyecto.com"
}
```

## Repositorio

### repository
Ubicación del código fuente.

```json
"repository": {
  "type": "git",
  "url": "https://github.com/usuario/proyecto.git",
  "directory": "packages/core"
}
```

Forma corta:
```json
"repository": "github:usuario/proyecto"
```

## Configuración del Entorno

### engines
Define versiones de Node.js y npm requeridas.

```json
"engines": {
  "node": ">=16.0.0",
  "npm": ">=8.0.0",
  "yarn": ">=1.22.0"
}
```

**Nota:** Para forzar cumplimiento, configura `.npmrc` con `engine-strict=true`.

### os
Sistemas operativos compatibles.

```json
"os": ["darwin", "linux"]
```

Para excluir:
```json
"os": ["!win32"]
```

### cpu
Arquitecturas de CPU compatibles.

```json
"cpu": ["x64", "arm64"]
```

## Configuraciones Avanzadas

### private
Previene publicación accidental en npm.

```json
"private": true
```

### workspaces
Para monorepos con múltiples paquetes.

```json
"workspaces": [
  "packages/*",
  "apps/*"
]
```

### type
Define el sistema de módulos.

```json
"type": "module"
```

Valores:
- `"module"`: Usa ES Modules (ESM) por defecto
- `"commonjs"`: Usa CommonJS por defecto (default)

### files
Array de archivos a incluir al publicar.

```json
"files": [
  "dist",
  "lib",
  "README.md",
  "LICENSE"
]
```

### publishConfig
Configuración específica para publicación.

```json
"publishConfig": {
  "access": "public",
  "registry": "https://registry.npmjs.org/"
}
```

### config
Variables de configuración personalizadas.

```json
"config": {
  "port": "8080"
}
```

Accesible vía `npm_package_config_port`.

### browserslist
Define navegadores objetivo para herramientas como Babel.

```json
"browserslist": [
  "last 2 versions",
  "> 1%",
  "not dead"
]
```

## Ejemplo Completo de Proyecto Real

```json
{
  "name": "@miorganizacion/api-backend",
  "version": "2.4.1",
  "description": "API REST para sistema de gestión empresarial",
  "main": "dist/index.js",
  "module": "dist/index.mjs",
  "type": "module",
  "scripts": {
    "start": "node dist/index.js",
    "dev": "nodemon --exec tsx src/index.ts",
    "build": "tsc && tsc-alias",
    "test": "jest --coverage",
    "test:watch": "jest --watch",
    "lint": "eslint src/**/*.ts",
    "format": "prettier --write \"src/**/*.{ts,json}\"",
    "prepare": "husky install",
    "typecheck": "tsc --noEmit"
  },
  "keywords": [
    "api",
    "rest",
    "express",
    "typescript",
    "backend"
  ],
  "author": {
    "name": "Pedro Hurtado",
    "email": "pedro@empresa.com",
    "url": "https://empresa.com"
  },
  "license": "MIT",
  "repository": {
    "type": "git",
    "url": "https://github.com/empresa/api-backend.git"
  },
  "bugs": {
    "url": "https://github.com/empresa/api-backend/issues"
  },
  "homepage": "https://github.com/empresa/api-backend#readme",
  "dependencies": {
    "express": "^4.18.2",
    "dotenv": "^16.0.3",
    "mongoose": "^7.0.3",
    "jsonwebtoken": "^9.0.0",
    "bcryptjs": "^2.4.3",
    "cors": "^2.8.5",
    "helmet": "^7.0.0"
  },
  "devDependencies": {
    "@types/express": "^4.17.17",
    "@types/node": "^18.15.11",
    "@types/jest": "^29.5.0",
    "@typescript-eslint/eslint-plugin": "^5.57.1",
    "@typescript-eslint/parser": "^5.57.1",
    "eslint": "^8.38.0",
    "prettier": "^2.8.7",
    "jest": "^29.5.0",
    "ts-jest": "^29.1.0",
    "typescript": "^5.0.4",
    "nodemon": "^2.0.22",
    "tsx": "^3.12.6",
    "husky": "^8.0.3"
  },
  "engines": {
    "node": ">=18.0.0",
    "npm": ">=9.0.0"
  },
  "private": false,
  "publishConfig": {
    "access": "public"
  },
  "files": [
    "dist",
    "README.md",
    "LICENSE"
  ]
}
```

## Referencias

- **Documentación oficial de npm**: https://docs.npmjs.com/cli/v9/configuring-npm/package-json
- **Semantic Versioning**: https://semver.org/
- **Node.js Best Practices**: https://github.com/goldbergyoni/nodebestpractices
- **NPM Documentation - peerDependencies**: https://docs.npmjs.com/cli/v9/configuring-npm/package-json#peerdependencies
- **Package.json Interactive Guide**: https://docs.npmjs.com/cli/v10/configuring-npm/package-json
