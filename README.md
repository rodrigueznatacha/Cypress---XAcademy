# SauceDemo Automation Project Suite 🚀

Proyecto de automatización de pruebas de extremo a extremo (E2E) utilizando **Cypress** y gestión de defectos en **Trello** para la plataforma SauceDemo. Desarrollado originalmente en el marco de las actividades prácticas de **XAcademy**.

> 📌 **Nota sobre el Control de Versiones:** La entrega oficial y la suite de pruebas básica requerida para la cursada se mantienen intactas en la rama principal (`main`). Esta rama (`feature/refactor-commands`) representa una etapa de **optimización y mejora arquitectónica**, donde se implementa una estructura avanzada y escalable de comandos personalizados (*Custom Commands*).

---

## 📐 Evolución de la Arquitectura (Refactorización)

En la suite de pruebas inicial, los selectores y flujos se escribían de forma lineal dentro de cada prueba (`.cy.js`). Para evitar la duplicación de código (*DRY Principle*) y facilitar el mantenimiento ante futuros cambios en la interfaz, se migraron las acciones a comandos personalizados.

A medida que el proyecto creció con los módulos de Carrito y Checkout, un único archivo `commands.js` se volvía ineficiente. Por ello, se aplicó un **enfoque modular por páginas y componentes**, subdividiendo los comandos en archivos específicos dentro de `cypress/support/commands/`:

* **`auth.comands.js`:** Abstracción de los procesos de autenticación (`cy.login()`, `cy.logout()`).
* **`cart.commands.js`:** Métodos reutilizables para interactuar con el carrito de compras (`cy.agregarAlCarrito()`, `cy.irAlCarrito()`).
* **`checkout.commands.js`:** Lógica modular para completar formularios de facturación y confirmación de órdenes (`cy.completarCheckout()`, `cy.confirmarPedido()`).
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
    │   ├── auth.comands.js
    │   ├── cart.commands.js
    │   ├── checkout.commands.js
    │   └── ui.commands.js
    ├── commands.js                # Centralizador de importaciones de comandos
    └── e2e.js                     # Configuración de soporte global de Cypress
```

## 📋 Reporte de Bugs en Trello

Los 3 bugs críticos detectados con el perfil de `problem_user` han sido documentados formalmente.

👉 **[Haz clic aquí para ver el Tablero de Trello](https://trello.com/b/zwBooqLQ/qa-automation-2026)**
