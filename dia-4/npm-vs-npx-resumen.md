# NPM vs NPX - Resumen Rápido

## NPM (Node Package Manager)

**¿Qué es?**
- Gestor de paquetes de Node.js
- Instala y gestiona dependencias de proyectos
- Viene incluido con Node.js

**Uso principal:**
```bash
npm install <paquete>           # Instala localmente
npm install -g <paquete>        # Instala globalmente
npm install <paquete>@<version> # Instala versión específica
```

**Características:**
- Instala paquetes en `node_modules/`
- Gestiona dependencias en `package.json`
- Los paquetes instalados permanecen en el sistema
- Requiere actualización manual de paquetes

---

## NPX (Node Package eXecute)

**¿Qué es?**
- Ejecutor de paquetes de Node.js
- Viene incluido con npm (desde npm 5.2.0)
- Ejecuta paquetes sin instalarlos permanentemente

**Uso principal:**
```bash
npx <paquete>                   # Ejecuta directamente
npx <paquete>@<version>         # Ejecuta versión específica
npx -p <paquete> <comando>      # Ejecuta con paquete temporal
```

**Características:**
- Ejecuta paquetes sin instalarlos globalmente
- Descarga temporalmente si no existe
- Siempre usa la última versión (o la especificada)
- Ideal para herramientas CLI de un solo uso

---

## Comparación Rápida

| Aspecto | NPM | NPX |
|---------|-----|-----|
| **Propósito** | Instalar y gestionar | Ejecutar directamente |
| **Instalación** | Permanente | Temporal (si no está instalado) |
| **Espacio** | Ocupa espacio en disco | No deja rastro |
| **Versión** | Requiere actualización | Puede especificar al momento |
| **Uso típico** | Dependencias de proyecto | Herramientas CLI puntuales |

---

## Versionado en NPM

### Semantic Versioning (SemVer)
Formato: `MAJOR.MINOR.PATCH` (ejemplo: `2.4.1`)

- **MAJOR**: Cambios incompatibles con versiones anteriores
- **MINOR**: Nueva funcionalidad compatible
- **PATCH**: Corrección de bugs compatible

### Símbolos de Versionado

```json
{
  "dependencies": {
    "express": "4.18.2",      // Versión exacta
    "react": "^18.2.0",       // Compatible con MINOR y PATCH (^)
    "lodash": "~4.17.21",     // Compatible solo con PATCH (~)
    "axios": "*",             // Última versión (no recomendado)
    "vue": ">=3.0.0 <4.0.0",  // Rango de versiones
    "next": "latest"          // Última versión publicada
  }
}
```

### Operadores de Versión

- **`^` (caret)**: Permite cambios que no modifican el primer dígito distinto de cero
  - `^1.2.3` → `>=1.2.3 <2.0.0`
  - `^0.2.3` → `>=0.2.3 <0.3.0`
  
- **`~` (tilde)**: Permite cambios de patch solamente
  - `~1.2.3` → `>=1.2.3 <1.3.0`
  
- **`*` o `x`**: Cualquier versión (comodín)

### Comandos Útiles de Versionado

```bash
# Ver versiones disponibles
npm view <paquete> versions

# Instalar versión específica
npm install <paquete>@1.2.3

# Instalar última versión
npm install <paquete>@latest

# Actualizar paquetes según package.json
npm update

# Ver paquetes desactualizados
npm outdated

# Ver versión instalada
npm list <paquete>

# Crear package-lock.json (bloquea versiones)
npm install
```

### package-lock.json

- Bloquea las versiones exactas de todas las dependencias
- Garantiza instalaciones consistentes entre entornos
- Se genera automáticamente con `npm install`
- **Debe incluirse en el control de versiones**

---

## Ejemplos Prácticos

### Cuándo usar NPM:
```bash
npm install react          # Dependencia del proyecto
npm install -D typescript  # Dependencia de desarrollo
npm install -g nodemon     # Herramienta global frecuente
```

### Cuándo usar NPX:
```bash
npx create-react-app my-app      # Crear proyecto (una vez)
npx tsc --init                   # Inicializar TypeScript
npx prettier --write .           # Formatear código puntualmente
npx json-server --watch db.json  # Servidor temporal
npx cowsay "Hello!"              # Diversión sin instalar
```

### Ejemplo con Versiones:
```bash
# Instalar versión específica con npm
npm install react@17.0.2

# Ejecutar versión específica con npx
npx create-react-app@latest my-app
npx typescript@4.9.0 tsc --version
```

---

## Consejos

✅ **Usa npm** para dependencias que usarás frecuentemente  
✅ **Usa npx** para herramientas CLI de uso esporádico  
✅ **Usa `^`** en package.json para permitir actualizaciones seguras  
✅ **Commitea** siempre el `package-lock.json`  
✅ **Revisa** regularmente con `npm outdated`  
⚠️ **Evita** usar `*` o `latest` en producción  
⚠️ **Ten cuidado** con actualizaciones de MAJOR version

---


