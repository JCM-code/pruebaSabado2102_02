# Zapatos Medina — Landing Page

Proyecto simple: una landing page para la zapatería local "Zapatos Medina".

Archivos principales:

- index.html: página principal con 3 secciones (Nuestra tienda, Formulario, PDF)
- styles.css: estilos básicos
- script.js: manejo de formulario y previsualización de PDF
- assets/shoes.pdf: coloca aquí tu PDF real (opcional)

Para ver la página, abre index.html en tu navegador o sirve la carpeta con un servidor estático.

Servidor PHP recomendado para probar el formulario:

```powershell
# Desde la carpeta del proyecto, ejecutar el servidor embebido de PHP:
php -S localhost:8000 -t .
# Abrir en el navegador: http://localhost:8000/index.html
```

Después de enviar el formulario, las entradas se guardan en `data/messages.txt` en formato JSON por línea.
