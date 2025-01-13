// Array of skills with their levels (out of 10)
const skills = [
  { name: "AUTOCAD", level: 8 },
  { name: "SKETCHUP", level: 10 },
  { name: "V-RAY", level: 10 },
  { name: "LUMION", level: 10 },
  { name: "BLUEBEAM", level: 6 },
  { name: "ETABS", level: 8 },
];

// Function to generate skill progress with dots
function renderSkills() {
  const skillsList = document.getElementById("skills-list");

  skills.forEach((skill) => {
    // Create a row for each skill
    const skillRow = document.createElement("div");
    skillRow.className = "row";
    skillRow.style.marginBottom = "15px";
    skillRow.style.alignItems = "center";

    // Create skill name column (col-2)
    const skillLabel = document.createElement("div");
    skillLabel.className = "col-4";
    skillLabel.innerText = skill.name;
    skillLabel.style.fontWeight = "bold";

    // Create progress dots column (col-10)
    const dotsContainer = document.createElement("div");
    dotsContainer.className = "col-8";
    dotsContainer.style.display = "flex";
    dotsContainer.style.gap = "20px";

    // Generate 10 dots (filled and empty)
    for (let i = 0; i < 10; i++) {
      const dot = document.createElement("span");
      dot.style.width = "30px";
      dot.style.height = "30px";
      dot.style.borderRadius = "50%";
      dot.style.display = "inline-block";
      dot.style.backgroundColor = i < skill.level ? "#2eb1ed" : "#ddd";
      dotsContainer.appendChild(dot);
    }
    // Append columns to the row
    skillRow.appendChild(skillLabel);
    skillRow.appendChild(dotsContainer);

    // Append the row to the skills list
    skillsList.appendChild(skillRow);
  });
}

// Call the function to render skills when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", renderSkills);
