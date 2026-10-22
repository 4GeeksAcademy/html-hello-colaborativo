# MAISON — Prototipo web de marca de moda

Sitio web de demostración (prototipo académico) creado con HTML y CSS sobre el boilerplate de 4Geeks Academy (`html-hello`). El proyecto presenta una tienda ficticia de ropa, calzado y accesorios llamada **MAISON.**: catálogo de productos, carrito y checkout de demostración, además de páginas institucionales.

> **Aviso del propio proyecto:** todo el contenido es ficticio y de carácter académico. Los formularios no envían datos, no se gestionan usuarios reales, no se procesan pagos ni se generan pedidos.

---

## Contenido

- [Tecnologías y construcción](#tecnologías-y-construcción)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Páginas del sitio](#páginas-del-sitio)
- [Catálogo de productos](#catálogo-de-productos)
- [Cómo ejecutar el sitio](#cómo-ejecutar-el-sitio)
- [Características destacadas](#características-destacadas)
- [Notas de proyecto](#notas-de-proyecto)

---

## Tecnologías y construcción

Según el contenido de los ficheros, el proyecto está construido con:

| Tecnología | Uso en el proyecto |
| --- | --- |
| **HTML5** | Toda la estructura de las 9 páginas del sitio. |
| **CSS** | Estilos de maquetación, diseño y el sistema de filtrado del catálogo. |
| **Tailwind CSS v3** | Cargado vía CDN oficial (`https://cdn.tailwindcss.com`) en el `<head>` de todas las páginas, con un `tailwind.config` inline que extiende la paleta de colores de la marca. |
| **CSS `:target`** | Filtrado del catálogo por categoría mediante anclas, **sin JavaScript de negocio**. |
| **Python + Flask** | `server.py` sirve los ficheros estáticos del sitio (boilerplate 4Geeks). |
| **Schema.org** | Datos estructurados JSON-LD en `index.html` y microdatos (`itemprop`, `itemscope`) en el carrito y el checkout. |

### Paleta de marca (definida en `tailwind.config` de cada página)

| Token | Valor |
| --- | --- |
| `brandBg` | `#F8F7F3` (fondo) |
| `brandDark` | `#20232A` (texto/oscuro) |
| `brandAccent` | `#3159A5` (acento azul) |

Las imágenes de producto y del hero se sirven desde **Unsplash** (`images.unsplash.com`), con `srcset` responsivo y atributos `loading="lazy"` / `decoding="async"`.

---

## Estructura del proyecto

```
.
├── index.html          # Portada: hero, nuevos lanzamientos y más vendidos
├── catalog.html        # Catálogo completo (20 productos) con filtro :target
├── cart.html           # Carrito de ejemplo (3 artículos)
├── checkout.html       # Finalización de compra de demostración
├── cuenta.html         # Mi cuenta (login/registro de demostración)
├── contacto.html       # Formulario de contacto de demostración
├── privacidad.html     # Política de privacidad (documento ficticio)
├── sobre-nosotros.html # Sobre la marca (contenido ficticio)
├── terminos.html       # Términos y condiciones (documento ficticio)
├── server.py           # Servidor Flask (boilerplate 4Geeks Academy)
├── learn.json          # Metadatos del template 4Geeks
└── .vscode/            # Ajustes de workspace
```

---

## Páginas del sitio

### Inicio — `index.html`
- Hero a pantalla completa: "Nueva colección · Otoño 2026", titular **MAISON.** y *"La elegancia en movimiento."*
- Secciones **"Nuevos lanzamientos"** (4 productos enlazados al catálogo) y **"Más vendidos"** (4 productos).
- Incluye datos estructurados JSON-LD (`Organization`).

### Catálogo — `catalog.html`
- Grilla de los **20 productos** del catálogo, con `id="producto-N"` e `data-cat` de categoría.
- **Filtro por categoría sin JavaScript**: anclas ocultas (`#todas`, `#novedades`, `#calzado`, `#camisas`, `#pantalones`, `#accesorios`) que activan reglas CSS `:target`. El estado base (sin ancla) muestra el catálogo completo.
- Cada tarjeta incluye ficha desplegable con `<details>/<summary>`: referencia (`MAI-001`…), tallas, precio unitario y material, más un botón "Agregar al carrito" que enlaza a `cart.html`.

### Carrito — `cart.html`
- Lista de **3 artículos fijos** de ejemplo: Camisa Oxford (95,00 €), Pantalón Tailleur (120,00 €) y Bolso Tote (175,00 €).
- Resumen del pedido: subtotal sin IVA **322,31 €**, IVA (21 %) **67,69 €**, envío estándar **Gratis**, total **390,00 €** (IVA incluido).
- Aviso explícito: *"Selección de ejemplo del prototipo académico. Las cantidades y los precios son fijos."* Botón "FINALIZAR COMPRA" enlaza a `checkout.html`.
- Microdatos `schema.org/ItemList`, `Product` y `Offer` con precios en EUR.

### Finalizar compra — `checkout.html`
- Formulario de demostración en 3 pasos: **1. Datos personales**, **2. Dirección de entrega**, **3. Pago**.
- El botón "CONFIRMAR PEDIDO" está **deshabilitado**; los campos de tarjeta también. Se indica: *"No se generará un pedido ni se realizará ningún cobro."*
- Selector de país limitado a **España** y código postal con `pattern="[0-9]{5}"` (formato español).
- Resumen del pedido idéntico al carrito (3 artículos, total 390,00 € con IVA).

### Mi cuenta — `cuenta.html`
- Secciones "Inicia sesión" y "Crear cuenta" con campos de ejemplo.
- Botones de demostración: *"El acceso no está disponible en este prototipo"* / *"No se creará ninguna cuenta real."*

### Contacto — `contacto.html`
- Formulario de contacto (nombre, correo, asunto, mensaje) que **no envía mensajes**.
- Datos ficticios de la marca: correo `demo@maison.example`, horario "Lunes a viernes · 9:00–18:00".

### Páginas institucionales
- **`sobre-nosotros.html`**: historia de la marca (contenido ficticio), valores, descripción de la colección y enlace a contacto.
- **`privacidad.html`**: documento ficticio en 5 apartados (datos que tratamos, finalidad, cookies, derechos, contacto).
- **`terminos.html`**: documento ficticio en 5 apartados (uso del sitio, pedidos y pagos, propiedad intelectual, limitación de responsabilidad, modificaciones).

### Elementos compartidos
Todas las páginas comparten la misma estructura de cabecera (logo, búsqueda visual, "Mi cuenta", "Carrito", navegación de categorías con enlaces `catalog.html#categoria`) y el mismo pie con columnas **CATEGORÍAS / LEGAL / CONTACTO** y copyright **© 2026 MAISON. Todos los derechos reservados.**

---

## Catálogo de productos

20 productos organizados en 5 categorías (referencias `MAI-001` a `MAI-020`). Precios en euros (€).

| Ref. | Producto | Categoría | Precio | Material |
| --- | --- | --- | --- | --- |
| MAI-001 | Blusa Sirena | Novedades | 89,00 € | Algodón orgánico |
| MAI-002 | Zapatos Derby | Calzado | 145,00 € | Piel |
| MAI-003 | Camisa Oxford | Camisas | 95,00 € | Algodón |
| MAI-004 | Pantalón Tailleur | Pantalones | 120,00 € | Mezcla de lana |
| MAI-005 | Cinturón de Cuero | Accesorios | 55,00 € | Piel grabada |
| MAI-006 | Abrigo Camel | Novedades | 220,00 € | Lana y cachemir |
| MAI-007 | Botines Chelsea | Calzado | 165,00 € | Piel |
| MAI-008 | Camisa de Lino | Camisas | 85,00 € | Lino |
| MAI-009 | Vestido Midi | Novedades | 135,00 € | Viscosa fluida |
| MAI-010 | Bolso Tote | Accesorios | 175,00 € | Lona y piel |
| MAI-011 | Sandalias Planas | Calzado | 75,00 € | Piel suave |
| MAI-012 | Camiseta Algodón | Novedades | 45,00 € | Algodón peinado |
| MAI-013 | Pantalón Palazzo | Pantalones | 110,00 € | Crepe fluido |
| MAI-014 | Pendientes de Plata | Accesorios | 65,00 € | Plata |
| MAI-015 | Blazer Estructurado | Novedades | 190,00 € | Lana técnica |
| MAI-016 | Mocasines de Cuero | Calzado | 155,00 € | Piel |
| MAI-017 | Camisa Denim | Camisas | 105,00 € | Denim |
| MAI-018 | Pantalón Recto | Pantalones | 98,00 € | Algodón sarga |
| MAI-019 | Pañuelo de Seda | Accesorios | 45,00 € | Seda |
| MAI-020 | Chaqueta de Cuero | Novedades | 250,00 € | Piel |

> La información de esta tabla procede de las fichas `<details>` que acompañan a cada tarjeta en `catalog.html`.

---

## Cómo ejecutar el sitio

El repositorio incluye `server.py` (boilerplate de 4Geeks Academy). Para servir el sitio localmente:

```bash
pip3 install flask && python3 server.py
```

Se sirve `index.html` en `http://localhost:3000`. También es posible abrir cualquiera de los ficheros `.html` directamente en el navegador, sin servidor, ya que el sitio no depende de JavaScript de negocio ni de llamadas a backend.

---

## Características destacadas

- **Sin JavaScript de negocio**: el filtrado por categorías del catálogo usa únicamente reglas CSS `:target` con anclas ocultas; las fichas de producto usan `<details>/<summary>` nativo.
- **Responsive**: grillas y layouts adaptables con clases utilitarias de Tailwind (`grid-cols-2 … lg:grid-cols-4`).
- **Accesibilidad**: enlaces "Saltar al contenido", `aria-label`/`aria-labelledby`, texto alternativo en imágenes, jerarquía de encabezados y foco visible.
- **Datado estructurado**: JSON-LD en `index.html` y microdatos `schema.org` en carrito y checkout.
- **Coherencia de marca**: paleta centralizada en `tailwind.config` y header/footer repetidos en todas las páginas.

---

## Notas de proyecto

- Los ficheros `products.js` y `product.html` que aparecían en versiones anteriores del repositorio fueron retirados en la refactorización: el sitio es ahora 100 % HTML/CSS.
- El proyecto se encuentra en la rama `borrador` del repositorio `html-hello-colaborativo` del espacio de trabajo.
- `learn.json` conserva los metadatos originales del template 4Geeks (título y descripción en inglés/español), aunque el sitio en sí está íntegramente en español.