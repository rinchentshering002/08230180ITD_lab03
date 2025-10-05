// =============================
// 1. JavaScript Basics
// =============================

const studentName = "Rinchen Tshering";
const course = "Bachelor of Education in IT";
const skills = ["HTML", "CSS", "JavaScript", "Python", "C++"];
const currentYear = new Date().getFullYear();

// Function to display a short self-introduction in the console
function showIntroduction() {
  console.log(`👋 Hello, I'm ${studentName}, currently pursuing ${course}.`);
  console.log(`💻 My technical skills: ${skills.join(", ")}.`);
  console.log(`📅 Year: ${currentYear}`);
}
showIntroduction();

// =============================
// 2. DOM Manipulation
// =============================

// Update dynamic greeting on Home page
const greeting = document.querySelector("h1");
if (greeting) {
  const hour = new Date().getHours();
  let message;
  if (hour < 12) message = "Good Morning ☀️";
  else if (hour < 18) message = "Good Afternoon 🌤️";
  else message = "Good Evening 🌙";

  greeting.textContent = `${message}, I'm ${studentName}!`;
}

// Add current year automatically in footer
document.querySelectorAll("footer p").forEach((p) => {
  if (p.textContent.includes("©")) {
    p.innerHTML = `&copy; ${currentYear} ${studentName}. All rights reserved.`;
  }
});

// =============================
// 3. Event Handling
// =============================

// --- (a) Background Color Changer (Home Page) ---
const homeSection = document.querySelector(".home");
if (homeSection) {
  const colorButton = document.createElement("button");
  colorButton.textContent = "Change Background";
  colorButton.classList.add("btn-js");
  homeSection.appendChild(colorButton);

  colorButton.addEventListener("click", () => {
    const colors = ["#dff9fb", "#f6e58d", "#c7ecee", "#f8a5c2", "#dfffe2"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.background = randomColor;
  });
}

// --- (b) Toggle Fun Facts (About Page) ---
const funFacts = document.querySelector(".fun-facts");
if (funFacts) {
  const toggleBtn = document.createElement("button");
  toggleBtn.textContent = "Show / Hide Fun Facts";
  toggleBtn.classList.add("btn-js");
  funFacts.parentElement.appendChild(toggleBtn);

  toggleBtn.addEventListener("click", () => {
    funFacts.style.display = funFacts.style.display === "none" ? "block" : "none";
  });
}

// --- (c) Highlight Latest Education (Education Page) ---
const educationBox = document.querySelector(".education-box");
if (educationBox) {
  const highlightBtn = document.createElement("button");
  highlightBtn.textContent = "Highlight My Latest Degree 🎓";
  highlightBtn.classList.add("btn-js");
  educationBox.parentElement.insertBefore(highlightBtn, educationBox);

  highlightBtn.addEventListener("click", () => {
    educationBox.style.backgroundColor = "#e8f5e9";
    educationBox.style.border = "2px solid #4CAF50";
    educationBox.style.transition = "0.4s";
  });
}

// --- (d) Animate Skill Bars (Skills Page) ---
const skillBars = document.querySelectorAll(".progress div");
if (skillBars.length > 0) {
  window.addEventListener("scroll", () => {
    skillBars.forEach((bar) => {
      const targetWidth = bar.getAttribute("style").match(/width:\s*(\d+)%/)[1];
      if (bar.getBoundingClientRect().top < window.innerHeight) {
        bar.style.transition = "width 1.5s ease";
        bar.style.width = targetWidth + "%";
      }
    });
  });
}

// --- (e) Project Hover Effect (Projects Page) ---
const projects = document.querySelectorAll(".project");
projects.forEach((project) => {
  project.addEventListener("mouseover", () => {
    project.style.transform = "scale(1.05)";
    project.style.transition = "0.3s";
    project.style.boxShadow = "0 4px 10px rgba(0,0,0,0.2)";
  });
  project.addEventListener("mouseout", () => {
    project.style.transform = "scale(1)";
    project.style.boxShadow = "none";
  });
});

// --- (f) Contact Form Validation (Contact Page) ---
const contactForm = document.querySelector("form");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const nameInput = contactForm.querySelector('input[name="name"]');
    const emailInput = contactForm.querySelector('input[name="email"]');
    const messageInput = contactForm.querySelector('textarea[name="message"]');

    if (!nameInput.value || !emailInput.value || !messageInput.value) {
      alert("⚠️ Please fill out all fields before submitting!");
    } else {
      alert(`✅ Thank you, ${nameInput.value}! Your message has been received.`);
      contactForm.reset();
    }
  });
}

// =============================
// 4. Responsive Check
// =============================

window.addEventListener("resize", () => {
  if (window.innerWidth < 600) {
    console.log("📱 Mobile view active — JavaScript adjustments are responsive.");
  }
});
