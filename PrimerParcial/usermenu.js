const sidebar = document.querySelector(".sidebar");
const sidebarToggle = document.querySelector(".sidebar-toggle");
const mainBody = document.querySelector(".mainBody");

const toggleSidebar = function() {
  if (sidebar.className === "sidebar open") {
    sidebar.className = "sidebar";
    mainBody.className = "mainBody closeBody bg-light";
  } else {
    sidebar.className = "sidebar open";
    mainBody.className = "mainBody openBody bg-light";
  }
};
