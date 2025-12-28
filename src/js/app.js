// src/js/app.js

async function loadProjects() {
  const grid = document.getElementById("projectsGrid");

  try {
    const res = await fetch("data/projects.json"); // sin "/" al inicio
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();

    const projects = Array.isArray(data?.projects) ? data.projects : [];
    if (!projects.length) throw new Error("JSON sin proyectos");

    renderProjects(projects);
  } catch (err) {
    console.error("Error cargando projects.json:", err);
    grid.innerHTML = `
      <div class="col-12">
        <p style="opacity:.8">
          No se pudieron cargar los proyectos. Revisa la consola (F12) y la ruta del JSON.
        </p>
      </div>`;
  }
}

function projectCard({ title, image, liveUrl, codeUrl }) {
  return `
    <div class="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3">
      <div class="grid-item">
        <div class="sf-book-cover">
          <div class="book-wrapper">
            <div class="cover">
              <img src="${image}" alt="${title}" loading="lazy" />
              <p class="cover-title">${title}</p>

              <div class="button-container">
                <a class="btn btn-outline-warning btn-lg m-1"
                   href="${liveUrl}" target="_blank" rel="noopener noreferrer">View</a>
                <a class="btn btn-outline-warning btn-lg m-1"
                   href="${codeUrl}" target="_blank" rel="noopener noreferrer">Code</a>
              </div>
            </div>

            <div class="page page-1"></div>
            <div class="page page-2"></div>
            <div class="page page-3"></div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderProjects(projects) {
  const grid = document.getElementById("projectsGrid");
  grid.innerHTML = projects.map(projectCard).join("");
}



document.addEventListener("DOMContentLoaded", loadProjects);
