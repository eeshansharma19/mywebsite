const resumeData = {
  name: "Eeshan Sharma",
  role: "Co-Founder & COO",
  location: "Bengaluru, India",
  email: "eeshan7c@gmail.com",
  phone: "+91 63778 29027",
  website: "",
  linkedin: "http://linkedin.com/in/sharma-eeshan",
  github: "",
  profileImage: "./profile.jpg",
  resumeUrl: "./resume.pdf",
  summary:
    "Co-founded and scaled a YC-backed startup, BharatX, from early stage to a $2.5M ARR business with strong cashflow, acquisition by Flipkart, and large-scale fintech operations across India.",
  about:
    "I enjoy building high-impact businesses from zero to scale. I work closely with founders, manage cross-functional teams, and drive strategic partnerships to unlock measurable growth.",
  experience: [
    {
      title: "Co-Founder & COO",
      company: "BharatX (YC-Backed | Acquired by Flipkart)",
      duration: "Aug 2020 - Present",
      points: [
        "Co-founded a FinTech consumer lending startup in a highly regulated space at age 20.",
        "Raised $5M+ from marquee VC investors including Y Combinator, WorldQuant ($10B Hedge Fund), and strategic angel investors.",
        "Recognized by Forbes 30 Under 30 India (2022) and Asia (2023) for achievements in fintech and venture capital.",
        "Oversaw acquisition by Flipkart (Walmart Group), the largest startup e-commerce company in India, at age 24.",
        "Built a digital-first debt recovery operation driving loss rates to 1.7%, outperforming leading fintechs and banks.",
        "Spearheaded 250+ brand partnerships with Boat, Mokobara, The Sleep Company, Snitch, Cashify, and integrations with major payment gateways in India including Cashfree, Razorpay, and Juspay.",
        "Scaled business to $2.5M ARR within 1.5 years and achieved cashflow positivity with a lean 15-member team.",
        "Handled loan disbursals of $36M ARR growing at 30-35% MoM, enabling formal credit access for 300,000+ citizens.",
      ],
    },
    {
      title: "Interim Quality Management",
      company: "Bosch India",
      duration: "Dec 2019 - Jan 2020",
      points: [
        "Optimized gauges by 25% and standardized nomenclature of 3,700 gauges as part of a process revamp across Bosch product enhancement programs.",
        "Conducted internal audits for diesel V-pumps and nozzle holder assembly lines, improving compliance with quality standards.",
      ],
    },
  ],
  projects: [
    {
      name: "BharatX Growth Engine",
      description:
        "Built and scaled core partnerships, lending operations, and fintech distribution to drive fast ARR growth and unit-level efficiency.",
      link: "https://www.ycombinator.com/companies/bharatx",
    },
    {
      name: "Forbes 30 Under 30 Recognition",
      description:
        "Featured in Forbes 30 Under 30 India (2022) and Asia (2023) for fintech and venture ecosystem impact.",
      link: "https://www.forbesindia.com/article/30-under-30-2022/mehul-nath-jindal-eeshan-sharma-taking-credit-to-those-who-need-it-most/73695/1",
    },
    {
      name: "Company Profile",
      description: "Public profile and company coverage on Forbes.",
      link: "https://www.forbes.com/profile/bharatx/",
    },
  ],
  skills: [
    "Startup Operations",
    "FinTech Lending",
    "Strategic Partnerships",
    "Debt Recovery Systems",
    "Fundraising",
    "Business Scaling",
    "Stakeholder Management",
    "Team Leadership",
  ],
  awards: [
    {
      title: "Forbes 30 Under 30 (FinTech) - Asia List",
      year: "2023",
    },
    {
      title: "Forbes 30 Under 30 (Finance) - India List",
      year: "2022",
    },
    {
      title: "Y Combinator Founder at 21 years",
      year: "Winter 2022 Batch",
    },
  ],
  education: [
    {
      degree: "Bachelor of Technology - Mechanical Engineering",
      school: "NIT Trichy",
      duration: "Jul 2018 - Aug 2022",
      details:
        "Vice President & Co-Founder of PRNITT (Finance & Investments Club); led events, outreach, and campus media initiatives.",
    },
    {
      degree: "Summer Program",
      school: "Stanford University",
      duration: "Jun 2019 - Aug 2019",
      details:
        "Worked on a moon-shot decentralized solar power generation project enabling community-led power sharing.",
    },
  ],
};

function setText(id, text) {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
}

function renderMeta() {
  const meta = [resumeData.location, resumeData.email, resumeData.phone].filter(Boolean);
  const host = document.getElementById("hero-meta");
  host.innerHTML = meta.map((item) => `<li>${item}</li>`).join("");
}

function renderExperience() {
  const host = document.getElementById("experience-list");
  host.innerHTML = resumeData.experience
    .map(
      (exp) => `
        <article class="item">
          <h3>${exp.title} - ${exp.company}</h3>
          <p>${exp.duration}</p>
          <ul>${exp.points.map((pt) => `<li>${pt}</li>`).join("")}</ul>
        </article>
      `
    )
    .join("");
}

function renderProjects() {
  const host = document.getElementById("project-list");
  host.innerHTML = resumeData.projects
    .map(
      (project) => `
        <article class="card">
          <h3>${project.name}</h3>
          <p>${project.description}</p>
          <a href="${project.link}" target="_blank" rel="noopener">View Project</a>
        </article>
      `
    )
    .join("");
}

function renderSkills() {
  const host = document.getElementById("skills-list");
  host.innerHTML = resumeData.skills.map((skill) => `<span class="chip">${skill}</span>`).join("");
}

function renderEducation() {
  const host = document.getElementById("education-list");
  host.innerHTML = resumeData.education
    .map(
      (edu) => `
        <article class="item">
          <h3>${edu.degree}</h3>
          <p>${edu.school} | ${edu.duration}</p>
          <p>${edu.details || ""}</p>
        </article>
      `
    )
    .join("");
}

function renderAwards() {
  const host = document.getElementById("awards-list");
  host.innerHTML = resumeData.awards
    .map(
      (award) => `
        <article class="item">
          <h3>${award.title}</h3>
          <p>${award.year}</p>
        </article>
      `
    )
    .join("");
}

function renderContact() {
  const items = [
    { label: "Email", value: `mailto:${resumeData.email}`, text: resumeData.email },
    { label: "LinkedIn", value: resumeData.linkedin, text: resumeData.linkedin },
    { label: "Website", value: resumeData.website, text: resumeData.website },
  ].filter((item) => item.text && item.text !== "#");

  const host = document.getElementById("contact-list");
  host.innerHTML = items
    .map(
      (item) =>
        `<li><strong>${item.label}:</strong> <a href="${item.value}" target="_blank" rel="noopener">${item.text}</a></li>`
    )
    .join("");
}

function setupMenu() {
  const btn = document.querySelector(".menu-toggle");
  const links = document.querySelector(".nav-links");
  btn.addEventListener("click", () => links.classList.toggle("open"));

  links.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => links.classList.remove("open"));
  });
}

function init() {
  setText("hero-name", resumeData.name);
  setText("hero-role", resumeData.role);
  setText("hero-summary", resumeData.summary);
  setText("about-text", resumeData.about);
  document.getElementById("resume-link").href = resumeData.resumeUrl || "#";
  document.getElementById("profile-photo").src = resumeData.profileImage || "./profile.jpg";
  document.getElementById("footer-text").textContent = `${new Date().getFullYear()} ${resumeData.name}`;

  renderMeta();
  renderExperience();
  renderProjects();
  renderSkills();
  renderAwards();
  renderEducation();
  renderContact();
  setupMenu();
}

init();
