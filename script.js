document.addEventListener("DOMContentLoaded", () => {
  console.log("Script loaded"); // Debug log

  // Get all project panels
  const panels = document.querySelectorAll(".project-panel");
  console.log("Found panels:", panels.length); // Debug log

  // Get all project sections
  const phishingSection = document.getElementById("phishing-notebook");
  const chatdbSection = document.getElementById("chatdb-project");
  const ocrSection = document.getElementById("ocr-project");
  const project4Section = document.getElementById("project4-section");
  const project5Section = document.getElementById("project5-section");

  console.log("Sections found:", {
    phishing: !!phishingSection,
    chatdb: !!chatdbSection,
    ocr: !!ocrSection,
    project4: !!project4Section,
    project5: !!project5Section
  }); // Debug log

  // Function to hide all sections
  const hideAllSections = () => {
    [phishingSection, chatdbSection, ocrSection, project4Section, project5Section].forEach(section => {
      if (section) section.style.display = "none";
    });
  };

  // Add click handlers to panels
  panels.forEach(panel => {
    panel.style.cursor = "pointer";
    
    panel.addEventListener("click", (e) => {
      console.log("Panel clicked"); // Debug log
      const projectKey = panel.getAttribute("data-project");
      console.log("Project key:", projectKey); // Debug log

      // Hide all sections first
      hideAllSections();

      // Show the appropriate section
      switch(projectKey) {
        case "phishing":
          if (phishingSection) {
            phishingSection.style.display = "block";
            console.log("Showing phishing section");
          }
          break;
        case "project2":
          if (chatdbSection) {
            chatdbSection.style.display = "block";
            console.log("Showing chatdb section");
          }
          break;
        case "ocr":
          if (ocrSection) {
            ocrSection.style.display = "block";
            console.log("Showing OCR section");
          }
          break;
        case "project4":
          if (project4Section) {
            project4Section.style.display = "block";
            console.log("Showing Project 4 section");
          }
          break;
        case "project5":
          if (project5Section) {
            project5Section.style.display = "block";
            console.log("Showing Project 5 section");
          }
          break;
      }

      // Scroll the section into view
      const activeSection = document.querySelector(`section[style="display: block"]`);
      if (activeSection) {
        activeSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
});
