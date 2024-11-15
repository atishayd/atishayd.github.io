document.addEventListener("DOMContentLoaded", () => {
  console.log("Page fully loaded");

  // Project details data
  const projectDetails = {
    project2: {
      title: "ChatDB",
      description: "A project that dynamically generates SQL and MongoDB queries, focusing on efficiency and reliability."
    },
    ocr: {
      title: "OCR Project",
      description: "This project involves using Optical Character Recognition to analyze and identify numerical patterns from images."
    },
    phishing: {
      title: "Phishing Project",
      description: "This project involves detecting phishing emails using machine learning techniques."
    }
  };

  const projectDetailsSection = document.querySelector(".project-details");
  const ocrProjectSection = document.getElementById("ocr-project");
  const phishingNotebookSection = document.getElementById("phishing-notebook");
  const chatdbProjectSection = document.getElementById("chatdb-project");

  // Initially hide all project details sections
  projectDetailsSection.style.display = "none";
  ocrProjectSection.style.display = "none";
  phishingNotebookSection.style.display = "none";
  chatdbProjectSection.style.display = "none";

  // Handle project panel clicks
  document.querySelectorAll(".project-panel").forEach(panel => {
    panel.addEventListener("click", () => {
      const projectKey = panel.getAttribute("data-project");
      console.log("Project clicked:", projectKey);

      // Hide all sections first
      projectDetailsSection.style.display = "none";
      ocrProjectSection.style.display = "none";
      phishingNotebookSection.style.display = "none";
      chatdbProjectSection.style.display = "none";

      // Toggle visibility based on selected project
      if (projectKey === "ocr") {
        ocrProjectSection.style.display = "block";
      } else if (projectKey === "phishing") {
        phishingNotebookSection.style.display = "block";
      } else if (projectKey === "project2") {
        chatdbProjectSection.style.display = "block";
      } else {
        const { title, description } = projectDetails[projectKey];
        document.getElementById("project-title").textContent = title;
        document.getElementById("project-description").textContent = description;
        projectDetailsSection.style.display = "block";
      }

      // Scroll the project panel into view with half visibility
      const panelTop = panel.offsetTop - (window.innerHeight / 4);
      window.scrollTo({
        top: panelTop,
        behavior: "smooth"
      });
    });
  });
});
