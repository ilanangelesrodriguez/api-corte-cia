# 🎉 API de Gestión de Eventos - Corte & Cía

## 📚 Índice

- [Descripción del Proyecto](#-descripción-del-proyecto)
- [Estructura de la Aplicación](#-estructura-de-la-aplicación)
- [Tecnologías Utilizadas](#-tecnologías-utilizadas)
- [Instalación](#-instalación)
- [Uso](#-uso)
- [Documentación API](#-documentación-api)
- [Modelos de Datos](#-modelos-de-datos)
- [Contribución](#-contribución)
- [Licencia](#-licencia)

## 🚀 Descripción del Proyecto

La API de Gestión de Eventos de Corte & Cía es una solución robusta y escalable diseñada para administrar todos los aspectos de la organización de eventos. Desde la creación y gestión de eventos hasta el manejo de asistentes, ponentes, y más, nuestra API proporciona una plataforma completa para la industria de eventos.

## 🏗 Estructura de la Aplicación

![Estructura de la Aplicación](/public/estructura.png)

## 💻 Tecnologías Utilizadas

- Node.js
- Express.js
- MongoDB
- Swagger para documentación de API

## 🛠 Instalación

1. Clona el repositorio:
   \`\`\`
   git clone https://github.com/corte-y-cia/api-eventos.git
   \`\`\`

2. Instala las dependencias:
   \`\`\`
   cd api-eventos
   npm install
   \`\`\`

3. Configura las variables de entorno en un archivo \`.env\`:
   \`\`\`
   MONGODB_URI=tu_uri_de_mongodb
   PORT=3000
   \`\`\`

4. Inicia la aplicación:
   \`\`\`
   npm start
   \`\`\`

## 🚀 Uso

Una vez que la aplicación esté en funcionamiento, puedes acceder a la API en \`http://localhost:3000\` (o el puerto que hayas configurado).

## 📘 Documentación API

La documentación completa de la API está disponible a través de Swagger UI. Accede a:

\`http://localhost:3000/api-docs\`

Aquí encontrarás todos los endpoints disponibles, modelos de datos y podrás probar la API directamente desde el navegador.

## 📊 Modelos de Datos

Nuestra API maneja los siguientes modelos principales:

- Eventos (Events)
- Organizadores (Organizers)
- Ponentes / Artistas (Speakers/Performers)
- Asistentes (Attendees)
- Entradas / Tickets (Tickets)
- Patrocinadores (Sponsors)
- Ubicaciones (Locations)
- Categorías (Categories)
- Comentarios (Comments)

Para más detalles sobre la estructura de cada modelo, consulta la documentación de Swagger.

## 🤝 Contribución

¡Agradecemos las contribuciones! Si deseas contribuir:

1. Haz un Fork del proyecto
2. Crea tu rama de características (\`git checkout -b feature/AmazingFeature\`)
3. Haz commit de tus cambios (\`git commit -m 'Add some AmazingFeature'\`)
4. Push a la rama (\`git push origin feature/AmazingFeature\`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo \`LICENSE\` para más detalles.

---
Desarrollado con ❤️ por [Ilan Angeles Rodriguez](https://www.linkedin.com/in/ilanangelesrodriguez/).
