document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.querySelector("#sidebar");
  const menuToggle = document.querySelector("#menuToggle");
  const sidebarClose = document.querySelector("#sidebarClose");
  const toast = document.querySelector("#toast");
  const navItems = document.querySelectorAll(".nav-item");
  const breadcrumbTitle = document.querySelector(".breadcrumb strong");
  const pageHeading = document.querySelector("h1");
  let toastTimer;

  if (window.lucide) {
    window.lucide.createIcons();
  }

  const showToast = (message) => {
    toast.textContent = message;
    toast.classList.add("is-visible");
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => toast.classList.remove("is-visible"), 2800);
  };

  const closeSidebar = () => sidebar.classList.remove("is-open");
  menuToggle.addEventListener("click", () => sidebar.classList.add("is-open"));
  sidebarClose.addEventListener("click", closeSidebar);

  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      navItems.forEach((navItem) => navItem.classList.remove("is-active"));
      item.classList.add("is-active");
      breadcrumbTitle.textContent = item.querySelector("span").textContent;
      if (item.dataset.view !== "resumen") {
        pageHeading.querySelector("h1").textContent = item.querySelector("span").textContent;
        pageHeading.querySelector(".heading-copy").textContent = "Esta sección está lista para gestionar la operación institucional.";
      } else {
        pageHeading.querySelector("h1").textContent = "Buenos días, María";
        pageHeading.querySelector(".heading-copy").textContent = "Aquí tienes una lectura clara de lo que está ocurriendo en el instituto.";
      }
      if (window.innerWidth <= 760) closeSidebar();
    });
  });

  document.querySelector("#newAction").addEventListener("click", () => showToast("Nueva inscripción iniciada."));
  document.querySelector("#addTask").addEventListener("click", () => showToast("Nueva tarea preparada para agregar."));
  document.querySelector("#viewTasks").addEventListener("click", () => showToast("Mostrando todas las tareas pendientes."));
  document.querySelectorAll(".notification-button, .profile-button, .select-button").forEach((button) => {
    button.addEventListener("click", () => showToast("La información está actualizada."));
  });
});
