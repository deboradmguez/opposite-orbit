// Archivo JSON cargado en una variable
const translations = {
    "es": {
        "metaDescription": "Débora, desarrolladora de software especializada en frontend y backend, crea soluciones web innovadoras.",
        "metaKeywords": "desarrolladora de software, frontend, backend, HTML, CSS, JavaScript, PHP, MySQL",
        
        "navbar": {
            "about": "Acerca de mí",
            "projects": "Proyectos",
            "education": "Formación",
            "contact": "Contacto",
            "contact1": "Puedes contactarme a través de:"
        },

        "about": {
            "title": "Acerca de mí",
            "intro": "¡Hola! Soy <strong>Débora,</strong> una desarrolladora de software con pasión por crear páginas web que no solo se vean increíbles, sino que también sean súper funcionales. Mi objetivo es simple: convertir ideas en experiencias digitales que sorprendan, inspiren y conecten a las personas."
        },
        
        "technologies": {
            "title": "Estas son algunas de las herramientas que utilizo para desarrollar mis proyectos:"
        },

        "projects": {
            "title": "Proyectos",
            "carWashTitle": "Proyecto: Sistema web para gestionar un lavadero",
            "carWashDescription": "Creada con html, css, javascript y php para conectar a la base de datos en mysql",
            "githubButton": "Ver en GitHub ➔"
        },

        "education": {
            "title": "Formación",
            "background": "Educación",
            "description": "He cursado esta tecnicatura por 3 años, gracias a ella pude desarrollar habilidades avanzadas en programación, diseño de software y bases de datos. <br>Esta carrera ha sido la base de mis proyectos, como la gestión de un lavadero y otras aplicaciones web.",
            "button": "Visitar Página del Instituto ➔"
        },

        "courses": {
            "title": "Cursos Realizados",
            "intro": "A lo largo de mi formación, he tomado varios cursos que me han permitido mejorar mis habilidades como desarrolladora de software.",
            "course1": {
                "title": "Certificado - Aprender a Aprender: Técnicas para tu Autodesarrollo",
                "date": "<strong>Fecha de finalización: </strong>Mayo 2023",
                "description": "<strong>Descripción: </strong>Curso en línea de 8 horas sobre técnicas de aprendizaje, enfocándose en el autodesarrollo y cómo mejorar la forma en que adquirimos y procesamos conocimiento.",
                "button": "Ver Certificado"
            },
            "course2": {
                "title": "Diploma - Programa Codo a Codo",
                "date": "<strong>Fecha de finalización: </strong>Diciembre 2022",
                "description": "<strong>Descripción: </strong>Este curso me permitió adquirir conocimientos profundos en desarrollo web y programación. Incluye temas de backend, frontend y buenas prácticas de desarrollo.",
                "button": "Ver Diploma"
            }
        },

        "blog": {
            "title": "Blog: 'Explorando el futuro de la programación en la era de la inteligencia artificial'",
            "date": "Publicado el 9 de mayo de 2024",
            "intro": "Reflexiono sobre cómo la inteligencia artificial está transformando el mundo de la programación, analizando los roles que podrían ser reemplazados por esta tecnología y las habilidades humanas que seguirán siendo esenciales.",
            "button": "Leer más"
        }
    },

    "en": {
        "metaDescription": "Débora, a software developer specializing in frontend and backend, creates innovative web solutions.",
        "metaKeywords": "software developer, frontend, backend, HTML, CSS, JavaScript, PHP, MySQL",
        
        "navbar": {
            "about": "About Me",
            "projects": "Projects",
            "education": "Education",
            "contact": "Contact",
            "contact1": "Contact me"
        },

        "about": {
            "title": "About Me",
            "intro": "Hi! I'm <strong>Débora,</strong> a software developer passionate about creating web pages that not only look amazing but are also super functional. My goal is simple: to turn ideas into digital experiences that amaze, inspire, and connect people."
        },
        
        "technologies": {
            "title": "These are some of the tools I use to develop my projects:"
        },

        "projects": {
            "title": "Projects",
            "carWashTitle": "Project: Web system to manage a car wash",
            "carWashDescription": "Created with html, css, javascript, and php to connect to the database in mysql",
            "githubButton": "View on GitHub ➔"
        },

        "education": {
            "title": "Education",
            "background": "Background",
            "description": "I have studied this technical program for 3 years, and it has allowed me to develop advanced skills in programming, software design, and databases. <br> This program has been the foundation for my projects, such as managing a car wash and other web applications.",
            "button": "Institute's website ➔"
        },

        "courses": {
            "title": "Courses Taken",
            "intro": "Throughout my education, I have taken several courses that have helped me improve my skills as a software developer.",
            "course1": {
                "title": "Certificate - Learn to Learn: Techniques for Your Self-Development",
                "date": "<strong>Date:</strong> May 2023",
                "description": "<strong>Description:</strong> An 8-hour online course on learning techniques, focusing on self-development and how to improve the way we acquire and process knowledge.",
                "button": "View Certificate"
            },
            "course2": {
                "title": "Diploma - Codo a Codo Program",
                "date": "<strong>Date:</strong> December 2022",
                "description": "<strong>Description:</strong> This course allowed me to acquire in-depth knowledge in web development and programming. It covers backend, frontend, and best development practices.",
                "button": "View Diploma"
            }
        },

        "blog": {
            "title": "Blog: 'Exploring the Future of Programming in the Age of Artificial Intelligence' (Spanish blog)",
            "date": "Published on May 9, 2024",
            "intro": "I reflect on how artificial intelligence is transforming the world of programming, analyzing roles that could be replaced by this technology and the human skills that will remain essential.",
            "button": "Read More"
        }
    }
};


/// Función para cambiar el idioma
function changeLanguage(lang) {
    console.log("Cambiando idioma a:", lang);  // Verificación
    const elements = document.querySelectorAll("[data-key]");
    elements.forEach((element) => {
        const key = element.getAttribute("data-key");
        const translation = getNestedTranslation(translations[lang], key);
        if (translation) {
            if (element.placeholder !== undefined) {
                element.placeholder = translation; 
            } else {
                element.innerHTML = translation;
            }
        }
    });

    // Cambiar el texto del botón según el idioma
    const languageButton = document.getElementById("language-switch");
    if (lang === "es") {
        languageButton.innerHTML = "English";  // Si está en español, mostrar 'English'
    } else {
        languageButton.innerHTML = "Español";  // Si está en inglés, mostrar 'Español'
    }
}

// Función para obtener la traducción de una clave en el objeto
function getNestedTranslation(obj, keyPath) {
    return keyPath.split('.').reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : null), obj);
}

// Variable de idioma actual
let currentLanguage = "es"; // Idioma predeterminado

// Listener para el cambio de idioma
document.getElementById("language-switch").addEventListener("click", () => {
    currentLanguage = currentLanguage === "es" ? "en" : "es"; // Cambiar idioma
    changeLanguage(currentLanguage);  // Llamar la función para cambiar idioma
});