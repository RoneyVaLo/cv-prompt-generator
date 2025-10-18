document.getElementById("generarBtn").addEventListener("click", generarTexto);
document.getElementById("copiarBtn").addEventListener("click", copiarTexto);
document
  .getElementById("languageBtn")
  .addEventListener("click", changeLanguage);

function generarTexto() {
  const oferta = document.getElementById("oferta").value.trim();
  const salida = document.getElementById("resultado");
  const copiarBtn = document.getElementById("copiarBtn");
  const languageBtn = document.getElementById("languageBtn");
  const spanishCV = `Roney Alfonso Valdelomar López
Ingeniero de Software
Guatuso, Costa Rica | rvaldelomarlopez@gmail.com | +506 62831879
LinkedIn | GitHub
PERFIL PROFESIONAL
Ingeniero de Software con una sólida formación en lenguajes de programación como Python y C#, y experiencia en desarrollo web utilizando tecnologías como HTML5, CSS3, TailwindCSS, JavaScript, ReactJS, ASP.NET Core y API Rest. Conocimientos en bases de datos SQL y manejo de herramientas de control de versiones como Git.
Apasionado por el desarrollo de soluciones tecnológicas innovadoras, con un enfoque en el trabajo en equipo, la resolución de problemas y el pensamiento crítico. Capaz de adaptarse rápidamente a nuevos desafíos y comprometido con el aprendizaje continuo. Busco aplicar mis conocimientos y habilidades en un entorno profesional para contribuir al desarrollo de proyectos de software de alto impacto.
TECNOLOGÍAS
    Frontend: HTML, CSS, JS, ReactJS, TailwindCSS
    Backend: NodeJS, C#, API Rest
    Bases de Datos: PostgreSQL, SQL Server, MongoDB
    Herramientas: Git, Visual Studio, VSCode
EXPERIENCIA PROFESIONAL
    Práctica Profesional – Proyecto “CTP Portal Docente” (Administración Docente)
    Universidad Técnica Nacional (UTN), Costa Rica | Jul 2025 - Oct 2025
    Descripción
        Desarrollo de un sistema web denominado CTP Portal Docente, creado como parte de la práctica profesional para el Bachillerato en Ingeniería de Software. El sistema fue diseñado para el Colegio Técnico Profesional de Los Chiles con el objetivo de facilitar la gestión académica y administrativa del personal docente.
    • Se desarrolló utilizando ASP.NET Core para el backend y React.js + TailwindCSS para el frontend.
    • Se integró una base de datos PostgreSQL existente, añadiendo nuevas tablas para módulos de asistencia, calificaciones y gestión docente.
    • Se completó un prototipo funcional totalmente operativo, cumpliendo los objetivos académicos del proyecto.
EDUCACIÓN
    • Bachiller en Ingeniería de Software
    Universidad Técnica Nacional (UTN) | 2025
    • Programa de Inglés para el Trabajo Módulos 1 y 2
    Universidad Técnica Nacional (UTN) | 2024
    • Operador de Tecnologías de la Información y Comunicación
    Instituto Nacional de Aprendizaje (INA) | 2024
    • Manipulación de Datos con SQL
    Instituto Nacional de Aprendizaje (INA) | 2024
    • Introducción a la Seguridad Cibernética
    Cisco Networking Academy | 2024
    • JavaScript Essentials 1
    Cisco Networking Academy | 2024
    • Python Essentials 1
    Cisco Networking Academy | 2024
HABILIDADES
    • Aprendizaje rápido
    • Resolución de problemas
    • Mejora continua
    • Competencias digitales
    • Adaptabilidad y flexibilidad
    • Trabajo en equipo
IDIOMAS
    Español: Nativo
    Inglés: Intermedio (B1)
  `;

  const englishCV = `Roney Alfonso Valdelomar López
Software Engineer
Guatuso, Costa Rica | rvaldelomarlopez@gmail.com | +506 62831879
LinkedIn | GitHub
PROFESSIONAL PROFILE
    Software engineer with experience in web development using ReactJS, TypeScript, JavaScript, HTML5, CSS3, and TailwindCSS, as well as knowledge of SQL databases and version control tools such as Git/GitHub. 
    Passionate about developing innovative technological solutions, with a focus on teamwork, problem-solving, and critical thinking. Able to quickly adapt to new challenges and committed to continuous learning. Eager to contribute to agile and collaborative teams where innovation and technology generate significant impact.
TECHNOLOGIES
    Frontend: HTML5, CSS3, JavaScript (ES6+), TypeScript, ReactJS, TailwindCSS
    Backend: NodeJS, API Rest, C#
    Databases: PostgreSQL, SQL Server, MongoDB
    Tools: Git/GitHub, Vercel (deployment), Visual Studio Code
PROFESSIONAL EXPERIENCE
    Professional Internship – Project “CTP Portal Docente” (Teacher Administration)
    Universidad Técnica Nacional (UTN), Costa Rica | Jul 2025 - Oct 2025

    • Developed the web system’s interface using ReactJS and TailwindCSS, implementing reusable components and state management.
    • Designed and implemented new tables and relationships in PostgreSQL, applying concepts such as primary/foreign keys and indexes.
    • Managed project versioning with Git/GitHub, documenting updates prior to deployment.
    • Collaborated with the academic staff to gather requirements and perform functional testing of the system.
EDUCATION
    • Bachelor’s Degree in Software Engineering
    Universidad Técnica Nacional (UTN) | 2025
    • English for Work Program – Modules 1 & 2
    Universidad Técnica Nacional (UTN) | 2024
    • Information and Communication Technology Operator
    Instituto Nacional de Aprendizaje (INA) | 2024
    • Data Manipulation with SQL
    Instituto Nacional de Aprendizaje (INA) | 2024
    • Introduction to Cybersecurity
    Cisco Networking Academy | 2024
    • JavaScript Essentials 1
    Cisco Networking Academy | 2024
    • Python Essentials 1
    Cisco Networking Academy | 2024
SKILLS
    • Fast learning
    • Problem-solving
    • Continuous improvement
    • Digital competencies
    • Adaptability and flexibility
    • Teamwork
LANGUAGES
    Spanish: Native
    English: Intermediate (B1) – Reading and technical writing
    `;

  if (!oferta) {
    alert("Por favor, ingresa una oferta laboral.");
    return;
  }

  // Formato de salida (puedes modificarlo a tu gusto)
  const textoFormateado = `
Oferta laboral:
${oferta}

Usando mi CV como plantilla:
${languageBtn.textContent.toLowerCase() === "es" ? spanishCV : englishCV}

Por favor, adapta mi CV a esta oferta, destacando la experiencia y habilidades más relevantes, manteniendo el mismo formato y estilo.
`;

  salida.textContent = textoFormateado;
  salida.style.display = "block";
  copiarBtn.style.display = "inline-block";
}

function copiarTexto() {
  const texto = document.getElementById("resultado").textContent;
  navigator.clipboard
    .writeText(texto)
    .then(() => alert("Texto copiado al portapapeles ✅"))
    .catch(() => alert("Hubo un error al copiar el texto."));
}

function changeLanguage() {
  const languageBtn = document.getElementById("languageBtn");

  switch (languageBtn.textContent.toLowerCase()) {
    case "es":
      languageBtn.innerText = "EN";
      break;
    case "en":
      languageBtn.innerText = "ES";
      break;
    default:
      break;
  }
}
