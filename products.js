/* Datos compartidos por el catálogo y la ficha de producto.
   Imágenes extraídas de https://images.unsplash.com/ */
window.PRODUCTOS = [
  { id: 1, nombre: 'Blusa Sirena', categoria: 'Novedades', tallas: ['S', 'M', 'L'], precio: 89, imagen: 'https://plus.unsplash.com/premium_photo-1664373232909-32af52b7cacd?fm=jpg&q=60&w=3000&auto=format&fit=crop&w=400&h=500' },
  { id: 2, nombre: 'Zapatos Derby', categoria: 'Calzado', tallas: ['39', '40', '41', '42', '43'], precio: 145, imagen: 'https://images.unsplash.com/photo-1668069226492-508742b03147?fm=jpg&q=60&w=3000&auto=format&fit=crop&w=400&h=500' },
  { id: 3, nombre: 'Camisa Oxford', categoria: 'Camisas', tallas: ['S', 'M', 'L', 'XL'], precio: 95, imagen: 'https://images.unsplash.com/photo-1717127354833-e4d10625d3e7?fm=jpg&q=60&w=3000&auto=format&fit=crop&w=400&h=500' },
  { id: 4, nombre: 'Pantalón Tailleur', categoria: 'Pantalones', tallas: ['S', 'M', 'L'], precio: 120, imagen: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?fm=jpg&q=60&w=3000&auto=format&fit=crop&w=400&h=500' },
  { id: 5, nombre: 'Cinturón de Cuero', categoria: 'Accesorios', tallas: ['Única'], precio: 55, imagen: 'https://images.unsplash.com/photo-1664285612706-b32633c95820?fm=jpg&q=60&w=3000&auto=format&fit=crop&w=400&h=500' },
  { id: 6, nombre: 'Abrigo Camel', categoria: 'Novedades', tallas: ['S', 'M', 'L'], precio: 220, imagen: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?fm=jpg&q=60&w=3000&auto=format&fit=crop&w=400&h=500' },
  { id: 7, nombre: 'Botines Chelsea', categoria: 'Calzado', tallas: ['38', '39', '40', '41'], precio: 165, imagen: 'https://images.unsplash.com/photo-1605733160314-4fc7dac4bb16?fm=jpg&q=60&w=3000&auto=format&fit=crop&w=400&h=500' },
  { id: 8, nombre: 'Camisa de Lino', categoria: 'Camisas', tallas: ['XS', 'S', 'M', 'L'], precio: 85, imagen: 'https://plus.unsplash.com/premium_photo-1782383827927-0f20294f79c8?fm=jpg&q=60&w=3000&auto=format&fit=crop&w=400&h=500' },
  { id: 9, nombre: 'Vestido Midi', categoria: 'Novedades', tallas: ['XS', 'S', 'M'], precio: 135, imagen: 'https://images.unsplash.com/photo-1789111161022-1970ba92f3b9?fm=jpg&q=60&w=3000&auto=format&fit=crop&w=400&h=500' },
  { id: 10, nombre: 'Bolso Tote', categoria: 'Accesorios', tallas: ['Única'], precio: 175, imagen: 'https://images.unsplash.com/photo-1624687943971-e86af76d57de?fm=jpg&q=60&w=3000&auto=format&fit=crop&w=400&h=500' },
  { id: 11, nombre: 'Sandalias Planas', categoria: 'Calzado', tallas: ['36', '37', '38', '39', '40'], precio: 75, imagen: 'https://images.unsplash.com/photo-1777979925976-723230e37453?fm=jpg&q=60&w=3000&auto=format&fit=crop&w=400&h=500' },
  { id: 12, nombre: 'Camiseta Algodón', categoria: 'Novedades', tallas: ['XS', 'S', 'M', 'L', 'XL'], precio: 45, imagen: 'https://images.unsplash.com/photo-1759572095384-1a7e646d0d4f?fm=jpg&q=60&w=3000&auto=format&fit=crop&w=400&h=500' },
  { id: 13, nombre: 'Pantalón Palazzo', categoria: 'Pantalones', tallas: ['S', 'M', 'L', 'XL'], precio: 110, imagen: 'https://images.unsplash.com/photo-1789110520755-058df30bf9cb?fm=jpg&q=60&w=3000&auto=format&fit=crop&w=400&h=500' },
  { id: 14, nombre: 'Pendientes de Plata', categoria: 'Accesorios', tallas: ['Única'], precio: 65, imagen: 'https://images.unsplash.com/photo-1713004539634-a6694a83f3d9?fm=jpg&q=60&w=3000&auto=format&fit=crop&w=400&h=500' },
  { id: 15, nombre: 'Blazer Estructurado', categoria: 'Novedades', tallas: ['S', 'M', 'L'], precio: 190, imagen: 'https://images.unsplash.com/photo-1588189408846-30ad110a0f4c?fm=jpg&q=60&w=3000&auto=format&fit=crop&w=400&h=500' },
  { id: 16, nombre: 'Mocasines de Cuero', categoria: 'Calzado', tallas: ['39', '40', '41', '42'], precio: 155, imagen: 'https://plus.unsplash.com/premium_photo-1783411051502-47624192f975?fm=jpg&q=60&w=3000&auto=format&fit=crop&w=400&h=500' },
  { id: 17, nombre: 'Camisa Denim', categoria: 'Camisas', tallas: ['S', 'M', 'L', 'XL'], precio: 105, imagen: 'https://images.unsplash.com/photo-1740711152088-88a009e877bb?fm=jpg&q=60&w=3000&auto=format&fit=crop&w=400&h=500' },
  { id: 18, nombre: 'Pantalón Recto', categoria: 'Pantalones', tallas: ['XS', 'S', 'M', 'L'], precio: 98, imagen: 'https://images.unsplash.com/photo-1602293589930-45aad59ba3ab?fm=jpg&q=60&w=3000&auto=format&fit=crop&w=400&h=500' },
  { id: 19, nombre: 'Pañuelo de Seda', categoria: 'Accesorios', tallas: ['Única'], precio: 45, imagen: 'https://images.unsplash.com/photo-1623832101940-647285e32a58?fm=jpg&q=60&w=3000&auto=format&fit=crop&w=400&h=500' },
  { id: 20, nombre: 'Chaqueta de Cuero', categoria: 'Novedades', tallas: ['M', 'L', 'XL'], precio: 250, imagen: 'https://images.unsplash.com/photo-1727524366429-27de8607d5f6?fm=jpg&q=60&w=3000&auto=format&fit=crop&w=400&h=500' }
];
