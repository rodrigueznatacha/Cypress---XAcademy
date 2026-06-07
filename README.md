# Actividad Clase 5 - Automatización SauceDemo 🚀

Proyecto de automatización de pruebas utilizando **Cypress** y reporte de bugs en **Trello** para la plataforma SauceDemo.

## 📁 Estructura del Proyecto

La suite está organizada de manera modular para garantizar la mantenibilidad y la ejecución independiente de cada caso de prueba:

```text
cypress/
├── e2e/                           # Archivos de pruebas (.cy.js)
│   ├── login.cy.js                # Módulo de Autenticación 
│   ├── inventario.cy.js           # Catálogo e imágenes 
│   ├── carrito.cy.js              # Validación del Carrito 
│   └── checkout-flow.cy.js        # Flujo completo de compra 
└── support/
    ├── commands/                  # Custom Commands divididos por módulos
    │   ├── auth.commands.js       # Comandos de Login y Logout
    │   ├── cart.commands.js       # Acciones del flujo del carrito
    │   └── checkout.commands.js   # Acciones del formulario de checkout y cierre
    ├── commands.js                # Centralizador de importaciones de comandos
    └── e2e.js                     # Configuración de soporte de Cypress
```

## 📋 Reporte de Bugs en Trello

Los 3 bugs críticos detectados con el perfil de `problem_user` han sido documentados formalmente.

👉 **[Haz clic aquí para ver el Tablero de Trello](https://trello.com/b/zwBooqLQ/qa-automation-2026)**

## 🚀 Cómo ejecutar los tests localmente

Este proyecto utiliza **pnpm** como gestor de paquetes para optimizar el rendimiento, la velocidad y la seguridad en el manejo de las dependencias de Node.js. Los scripts de ejecución se encuentran configurados y centralizados directamente en el archivo `package.json`.

### 1. Prerrequisitos

Asegúrate de tener instalados en tu entorno local:

* [Node.js](https://nodejs.org/) (Versión 18 o superior recomendada)
* [pnpm](https://pnpm.io/)

### 2. Clonar el repositorio e instalar dependencias

Abre tu terminal favorita y ejecuta los siguientes comandos en orden:

```bash
# Clonar este repositorio
git clone [https://github.com/rodrigueznatacha/Cypress---XAcademy.git](https://github.com/rodrigueznatacha/Cypress---XAcademy.git)

# Acceder a la carpeta del proyecto
cd Cypress---XAcademy

# Instalar las dependencias del proyecto de forma segura
pnpm install
```

---
Estudiante: Natacha Rodriguez
