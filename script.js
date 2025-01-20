document.addEventListener("DOMContentLoaded", () => {
  console.log("Script loaded"); // Debug log

  // Get all project panels
  const panels = document.querySelectorAll(".project-panel");
  console.log("Found panels:", panels.length); // Debug log

  // Get all project sections
  const phishingSection = document.getElementById("phishing-notebook");
  const chatdbSection = document.getElementById("chatdb-project");
  const aifredSection = document.getElementById("aifred-project");  // Changed from ocrSection
  const project4Section = document.getElementById("project4-section");
  const project5Section = document.getElementById("project5-section");

  console.log("Sections found:", {
    phishing: !!phishingSection,
    chatdb: !!chatdbSection,
    aifred: !!aifredSection,  // Changed from ocr
    project4: !!project4Section,
    project5: !!project5Section
  }); // Debug log

  // Function to hide all sections
  const hideAllSections = () => {
    [phishingSection, chatdbSection, aifredSection, project4Section, project5Section].forEach(section => {
      if (section) section.style.display = "none";
    });
  };

  // Update the project mapping
  const projectMapping = {
    'project4': 'project4-section',
    'phishing': 'phishing-notebook',
    'project2': 'chatdb-project',
    'project5': 'project5-section',
    'aifred': 'aifred-project'  // Changed from 'ocr': 'ocr-project'
  };

  // Update the panel selector in HTML
  const panelHtml = `
    <!-- ... other panels ... -->
    
    <!-- AiFRED Project Panel (replacing OCR panel) -->
    <div class="project-panel special-panel" data-project="aifred" role="button" tabindex="0">
      <div class="panel-content">
        <span class="vertical-text">aifred</span>
      </div>
    </div>
  `;

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
        case "aifred":  // Changed from "ocr"
          if (aifredSection) {
            aifredSection.style.display = "block";
            console.log("Showing AiFRED section");
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
