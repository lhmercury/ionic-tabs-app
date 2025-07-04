📱 Aplicación Ionic con Tabs y Formulario de Perfil
Desarrollada con:
https://img.shields.io/badge/Ionic-3880FF?style=for-the-badge&logo=ionic&logoColor=white
https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white

📌 Descripción
Aplicación móvil con menú de pestañas inferiores desarrollada en Ionic + Angular que incluye:
✅ Navegación por tabs (Inicio, Información Personal, Contacto)
✅ Formulario de perfil con validación
✅ Diseño responsivo para móvil y web
✅ Estructura modular con lazy loading

🚀 Instalación
Clonar repositorio

bash
git clone https://github.com/tu-usuario/ionic-tabs-app.git
cd ionic-tabs-app
Instalar dependencias

bash
npm install
Ejecutar

bash
ionic serve
(Abre en http://localhost:8100)

📂 Estructura Principal
text
src/app/
├── tabs/               # Navegación principal
├── inicio/             # Página de inicio
├── informacion-personal/ # Formulario de perfil
├── contacto/           # Info de contacto
└── ...                 # Otros módulos
🔧 Funcionalidades Clave
1. Menú de Tabs Inferior
Navegación entre 3 secciones

Iconos personalizados

Diseño adaptativo

2. Formulario de Perfil
typescript
datosUsuario = {
  nombre: '',
  apellido: '',
  email: '' 
};
✅ Validación de campos
✅ Guardado de datos
✅ Visualización en tarjeta

3. Páginas
Inicio: Mensaje de bienvenida

Contacto: Datos de ubicación y contacto

Información Personal: Formulario interactivo

🛠 Tecnologías Utilizadas
Tecnología	Uso
Ionic 7	UI Components
Angular 16	Lógica de aplicación
TypeScript	Tipado estático
SCSS	Estilos personalizados


📝 Documentación Técnica
Configuración de Tabs

Validación de Formularios

Lazy Loading

💡 Mejoras Futuras
🛠 Próximas características:

Guardado persistente con Ionic Storage

Autenticación de usuarios

Subida de foto de perfil

📜 Licencia
MIT License © 2023 [Tu Nombre]

📞 Contacto
✉ Email: luislahb22@gmail.com
🔗 GitHub: @lhmercury

¡Listo para usar! 🎉
Si este proyecto te ayudó, deja una ⭐ en el repositorio.

Nota: Ejecuta ionic serve --lab para ver el diseño en iOS y Android simultáneamente.
