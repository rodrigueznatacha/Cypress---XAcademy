# SauceDemo Automation Project Suite 🚀

Proyecto de automatización de pruebas de extremo a extremo (E2E) utilizando **Cypress** y gestión de defectos en **Trello** para la plataforma SauceDemo. Desarrollado originalmente en el marco de las actividades prácticas de **XAcademy**.

> 📌 **Nota sobre el Control de Versiones:** La entrega oficial y la suite de pruebas básica requerida para la cursada se mantienen intactas en la rama principal (`main`). Esta rama (`feature/refactor-commands`) representa una etapa de **optimización y mejora arquitectónica**, donde se implementa una estructura avanzada y escalable de comandos personalizados (*Custom Commands*).

---

## 📐 Evolución de la Arquitectura (Refactorización)

En la suite de pruebas inicial, los selectores y flujos se escribían de forma lineal dentro de cada prueba (`.cy.js`). Para evitar la duplicación de código (*DRY Principle*) y facilitar el mantenimiento ante futuros cambios en la interfaz, se migraron las acciones a comandos personalizados.

A medida que el proyecto creció con los módulos de Carrito y Checkout, un único archivo `commands.js` se volvía ineficiente. Por ello, se aplicó un **enfoque modular por páginas y componentes**, subdividiendo los comandos en archivos específicos dentro de `cypress/support/commands/`:

* **`auth.commands.js`:** Abstracción de los procesos de autenticación (`cy.login()`, `cy.logout()`).
* **`cart.commands.js`:** Métodos reutilizables para interactuar con el carrito de compras (`cy.agregarAlCarrito()`, `cy.irAlCarrito()`).
* **`checkout.commands.js`:** Lógica modular para completar formularios de facturación y confirmación de órdenes (`cy.checkoutOrder()`, `cy.confirmOrder()`).
* **`ui.commands.js`:** Comandos utilitarios de interfaz (manejo de esperas explícitas, scrolls o validaciones globales visuales).

---

## 📁 Estructura del Proyecto en esta Rama

```text
cypress/
├── e2e/                           # Suites de Pruebas Integrales (.cy.js)
│   ├── login.cy.js                # Pruebas del Módulo de Autenticación
│   ├── inventory.cy.js            # Pruebas del Catálogo e Imágenes
│   ├── cart.cy.js                 # Pruebas de interacción con el Carrito
│   ├── checkout.cy.js             # Pruebas de validación de campos de Checkout
│   └── e2e-refactor-commands.cy.js# Flujos integrales (Happy Paths) optimizados
└── support/
    ├── commands/                  # 📂 Modularización de Custom Commands
    │   ├── auth.commands.js
    │   ├── cart.commands.js
    │   ├── checkout.commands.js
    │   └── ui.commands.js
    ├── commands.js                # Centralizador de importaciones de comandos
    └── e2e.js                     # Configuración de soporte global de Cypress
```

## 🚀 Cómo ejecutar los tests localmente

Este proyecto está optimizado para utilizar **pnpm** como gestor de paquetes, asegurando instalaciones veloces, eficientes en espacio en disco y consistentes mediante el archivo `pnpm-lock.yaml`.

### 1. Prerrequisitos

Asegúrate de contar con las siguientes herramientas instaladas en tu entorno local:

* [Node.js](https://nodejs.org/) (Versión 18 o superior recomendada)
* [pnpm](https://pnpm.io/)

### 2. Clonar el repositorio y posicionarse en la Rama de Refactor

Abre tu terminal y ejecuta los siguientes comandos:

```bash
# 1. Clonar el repositorio
git clone [https://github.com/rodrigueznatacha/Cypress---XAcademy.git](https://github.com/rodrigueznatacha/Cypress---XAcademy.git)

# 2. Acceder a la carpeta del proyecto
cd Cypress---XAcademy

# 3. Cambiar a la rama de refactorización
git checkout feature/refactor-commands

# 4. Instalar las dependencias de forma segura con pnpm
pnpm install

```

### 3. Ejecución de la Suite de Pruebas

Los scripts de ejecución se encuentran completamente configurados y centralizados en el archivo package.json:

Modo Interactivo (Cypress UI): Abre el Launchpad visual para seleccionar navegadores y observar el paso a paso detallado de las pruebas en tiempo real.

```Bash
pnpm cypress:open
```

Modo Headless (Consola): Ejecuta la suite de pruebas completa en segundo plano directamente sobre la terminal, ideal para entornos de CI/CD.

```Bash
pnpm cypress:run
```

## 📋 Reporte de Defectos (Bugs) en Trello

Durante las fases de ejecución sobre la cuenta de pruebas problem_user se detectaron y aislaron 3 defectos críticos en la plataforma. Cada uno ha sido formalmente documentado e ingresado en el tablero de gestión de calidad bajo la plantilla profesional de reporte de la Clase N°2.

👉 **[Haz clic aquí para ver el Tablero de Trello](https://trello.com/b/zwBooqLQ/qa-automation-2026)**

Desarrollado por Natacha Rodriguez | QA Analyst & Software Quality professional.
