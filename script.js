document.addEventListener("DOMContentLoaded", () => {
  console.log("Page fully loaded");

  // Project details data
  const projectDetails = {
    project2: {
      title: "Project 2",
      description: "Description of Project 2. This project involves..."
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

  // Initially hide project details, OCR project section, and phishing notebook section
  projectDetailsSection.style.display = "none";
  ocrProjectSection.style.display = "none";
  phishingNotebookSection.style.display = "none";

  // Handle project panel clicks
  document.querySelectorAll(".project-panel").forEach(panel => {
    panel.addEventListener("click", () => {
      const projectKey = panel.getAttribute("data-project");
      console.log("Project clicked:", projectKey);

      // Toggle visibility based on selected project
      if (projectKey === "ocr") {
        // Show OCR project section and hide other sections
        ocrProjectSection.style.display = "block";
        projectDetailsSection.style.display = "none";
        phishingNotebookSection.style.display = "none";
      } else if (projectKey === "phishing") {
        // Show phishing notebook section and hide other sections
        phishingNotebookSection.style.display = "block";
        ocrProjectSection.style.display = "none";
        projectDetailsSection.style.display = "none";
      } else {
        // Show general project details for project2 and hide OCR and phishing sections
        const { title, description } = projectDetails[projectKey];
        document.getElementById("project-title").textContent = title;
        document.getElementById("project-description").textContent = description;

        projectDetailsSection.style.display = "block";
        ocrProjectSection.style.display = "none";
        phishingNotebookSection.style.display = "none";
      }
    });
  });
});
