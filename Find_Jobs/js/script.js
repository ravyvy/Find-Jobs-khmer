/* ===== JobKH Main JavaScript - Khmer ===== */

// Khmer UI Labels
const UI = {
  viewDetails: "View Details",
  applyNow: "Apply Now",
  saveJob: "Save Job",
  perMonth: "/month",
  jobsFound: "jobs found",
  noJobs: "No jobs found",
  noJobsMsg: "Try adjusting your filters",
  jobNotFound: "Job Not Found",
  browseAll: "Browse All Jobs",
  jobDesc: "Job Description",
  requirements: "Requirements",
  benefits: "Benefits",
  companyInfo: "Company Overview",
  jobOverview: "Job Overview",
  jobType: "Job Type",
  location: "Location",
  expLabel: "Experience",
  category: "Category",
  posted: "Posted"
};

const jobsData = [
  {
    "id": 1,
    "title": "Senior Frontend Developer",
    "company": "TechCam Solutions",
    "logo": "TC",
    "location": "Phnom Penh",
    "salary": "$1,500 - $2,500",
    "salaryNum": 2500,
    "type": "Full-time",
    "category": "IT & Software",
    "experience": "Senior",
    "tags": ["React", "JavaScript", "CSS"],
    "posted": "2 days ago",
    "description": "We are looking for an experienced Frontend Developer to join our growing team. You will be responsible for building and maintaining user interfaces for our web applications using modern frameworks and best practices.",
    "requirements": ["5+ years Frontend experience", "React, Vue.js or Angular", "HTML5, CSS3, JavaScript ES6+", "Responsive design", "Git version control", "Problem-solving skills"],
    "benefits": ["Competitive salary + bonus", "Health insurance", "Flexible hours", "Remote options", "Dev budget", "Free lunch"],
    "companyOverview": "TechCam Solutions is a leading software development company in Cambodia, founded in 2018.",
    "phone": "012 345 678",
    "telegram": "@jobkh_official"
  },
  {
    "id": 2,
    "title": "Digital Marketing Manager",
    "company": "CamBoost Agency",
    "logo": "CB",
    "location": "Siem Reap",
    "salary": "$1,200 - $2,000",
    "salaryNum": 2000,
    "type": "Full-time",
    "category": "Marketing",
    "experience": "Mid-level",
    "tags": ["SEO", "Social Media", "Analytics"],
    "posted": "1 day ago",
    "description": "Join CamBoost Agency as a Digital Marketing Manager to lead impactful digital campaigns.",
    "requirements": ["3+ years digital marketing", "SEO, SEM, Social Media", "Google Analytics", "Strategic thinking", "English and Khmer", "Marketing degree"],
    "benefits": ["Performance bonuses", "Health & dental", "Team retreats", "Learning budget", "Modern office", "Travel allowance"],
    "companyOverview": "CamBoost Agency is a full-service digital marketing agency based in Siem Reap.",
    "phone": "012 345 678",
    "telegram": "@jobkh_official"
  },
  {
    "id": 3,
    "title": "Senior Accountant",
    "company": "KH Finance Group",
    "logo": "KF",
    "location": "Phnom Penh",
    "salary": "$1,000 - $1,800",
    "salaryNum": 1800,
    "type": "Full-time",
    "category": "Accounting",
    "experience": "Senior",
    "tags": ["QuickBooks", "Tax", "IFRS"],
    "posted": "3 days ago",
    "description": "KH Finance Group is seeking a Senior Accountant to manage financial operations.",
    "requirements": ["5+ years accounting", "CPA or ACCA preferred", "QuickBooks and Excel", "Cambodian tax regulations", "Attention to detail", "IFRS standards"],
    "benefits": ["Competitive salary", "Annual bonus", "Health insurance", "Certification support", "Paid leave", "Career advancement"],
    "companyOverview": "KH Finance Group provides comprehensive financial services in Cambodia.",
    "phone": "012 345 678",
    "telegram": "@jobkh_official"
  },
  {
    "id": 4,
    "title": "Banking Operations Officer",
    "company": "PhnomPenh Commercial Bank",
    "logo": "PB",
    "location": "Phnom Penh",
    "salary": "$800 - $1,500",
    "salaryNum": 1500,
    "type": "Full-time",
    "category": "Banking",
    "experience": "Entry-level",
    "tags": ["Banking", "Operations", "Customer Service"],
    "posted": "5 days ago",
    "description": "Support daily banking operations including transaction processing and account management.",
    "requirements": ["Finance or Banking degree", "1-2 years banking preferred", "Banking operations knowledge", "Customer service skills", "MS Office proficiency", "Banking regulations"],
    "benefits": ["Comprehensive benefits", "Banking discounts", "Training programs", "Annual salary review", "Life insurance", "Transport allowance"],
    "companyOverview": "PhnomPenh Commercial Bank is one of Cambodia's fastest-growing commercial banks.",
    "phone": "012 345 678",
    "telegram": "@jobkh_official"
  },
  {
    "id": 5,
    "title": "UI/UX Designer",
    "company": "CreativeKH Studio",
    "logo": "CK",
    "location": "Phnom Penh",
    "salary": "$1,200 - $2,200",
    "salaryNum": 2200,
    "type": "Full-time",
    "category": "Design",
    "experience": "Mid-level",
    "tags": ["Figma", "UI Design", "Prototyping"],
    "posted": "1 day ago",
    "description": "Create beautiful and intuitive user interfaces for digital products.",
    "requirements": ["3+ years UI/UX design", "Expert in Figma", "Strong portfolio", "Design systems knowledge", "User research", "Responsive & mobile design"],
    "benefits": ["Creative workspace", "Latest design tools", "Flexible hours", "Conference budget", "Health insurance", "Team building"],
    "companyOverview": "CreativeKH Studio is a boutique design agency in Phnom Penh.",
    "phone": "012 345 678",
    "telegram": "@jobkh_official"
  },
  {
    "id": 6,
    "title": "Civil Engineer",
    "company": "BuildCam Construction",
    "logo": "BC",
    "location": "Sihanoukville",
    "salary": "$1,500 - $2,800",
    "salaryNum": 2800,
    "type": "Full-time",
    "category": "Engineering",
    "experience": "Senior",
    "tags": ["AutoCAD", "Construction", "Project Mgmt"],
    "posted": "4 days ago",
    "description": "Lead construction projects in the Sihanoukville area.",
    "requirements": ["Civil Engineering degree", "5+ years construction", "AutoCAD proficiency", "Large-scale project management", "Leadership skills", "PMP certification is a plus"],
    "benefits": ["Competitive salary + project bonuses", "Company vehicle", "Health & accident insurance", "Accommodation support", "Professional development", "Relocation assistance"],
    "companyOverview": "BuildCam Construction is a leading construction company in Cambodia.",
    "phone": "012 345 678",
    "telegram": "@jobkh_official"
  },
  {
    "id": 7,
    "title": "Backend Developer (Node.js)",
    "company": "DataKH Labs",
    "logo": "DK",
    "location": "Phnom Penh",
    "salary": "$1,800 - $3,000",
    "salaryNum": 3000,
    "type": "Full-time",
    "category": "IT & Software",
    "experience": "Senior",
    "tags": ["Node.js", "MongoDB", "AWS"],
    "posted": "1 day ago",
    "description": "Build scalable APIs and services with cutting-edge technologies.",
    "requirements": ["4+ years backend development", "Node.js and Express", "MongoDB/PostgreSQL/MySQL", "AWS or cloud services", "RESTful API design", "Microservices architecture"],
    "benefits": ["Top-tier compensation", "Stock options", "Remote flexibility", "MacBook Pro provided", "Health & wellness", "Unlimited PTO"],
    "companyOverview": "DataKH Labs is a technology startup building data-driven solutions.",
    "phone": "012 345 678",
    "telegram": "@jobkh_official"
  },
  {
    "id": 8,
    "title": "Content Marketing Specialist",
    "company": "MediaCam Digital",
    "logo": "MD",
    "location": "Phnom Penh",
    "salary": "$700 - $1,200",
    "salaryNum": 1200,
    "type": "Part-time",
    "category": "Marketing",
    "experience": "Entry-level",
    "tags": ["Content Writing", "Blog", "Social Media"],
    "posted": "6 hours ago",
    "description": "Create engaging content for brands across multiple platforms.",
    "requirements": ["1+ years content writing", "Excellent English writing", "SEO best practices", "Social media experience", "Creative storytelling", "Published portfolio"],
    "benefits": ["Flexible part-time", "Work from home", "Competitive rate", "Learn from experts", "Premium tools", "Growth opportunities"],
    "companyOverview": "MediaCam Digital is a content-focused digital agency in Cambodia.",
    "phone": "012 345 678",
    "telegram": "@jobkh_official"
  },
  {
    "id": 9,
    "title": "Financial Analyst",
    "company": "Mekong Capital Partners",
    "logo": "MC",
    "location": "Phnom Penh",
    "salary": "$1,400 - $2,200",
    "salaryNum": 2200,
    "type": "Full-time",
    "category": "Banking",
    "experience": "Mid-level",
    "tags": ["Financial Modeling", "Excel", "Analysis"],
    "posted": "2 days ago",
    "description": "Conduct financial analysis and provide investment recommendations.",
    "requirements": ["3+ years financial analysis", "Advanced Excel & modeling", "CFA Level 1+ preferred", "Analytical skills", "Investment/banking experience", "MBA is a plus"],
    "benefits": ["Highly competitive salary", "Annual bonus", "CFA support", "International travel", "Premium health insurance", "Networking events"],
    "companyOverview": "Mekong Capital Partners is a boutique investment firm in the Greater Mekong Region.",
    "phone": "012 345 678",
    "telegram": "@jobkh_official"
  },
  {
    "id": 10,
    "title": "Graphic Designer",
    "company": "PixelKH Creative",
    "logo": "PK",
    "location": "Battambang",
    "salary": "$600 - $1,000",
    "salaryNum": 1000,
    "type": "Contract",
    "category": "Design",
    "experience": "Entry-level",
    "tags": ["Photoshop", "Illustrator", "Branding"],
    "posted": "3 days ago",
    "description": "Create visual content including logos, brochures, and marketing materials.",
    "requirements": ["1+ years graphic design", "Adobe Creative Suite", "Strong portfolio", "Typography & color theory", "Work under deadlines", "Print and digital design"],
    "benefits": ["Creative freedom", "Portfolio building", "Flexible schedule", "Equipment provided", "Mentorship", "Project bonuses"],
    "companyOverview": "PixelKH Creative is a design studio in Battambang.",
    "phone": "012 345 678",
    "telegram": "@jobkh_official"
  },
  {
    "id": 11,
    "title": "Electrical Engineer",
    "company": "PowerGrid Cambodia",
    "logo": "PG",
    "location": "Phnom Penh",
    "salary": "$1,600 - $2,500",
    "salaryNum": 2500,
    "type": "Full-time",
    "category": "Engineering",
    "experience": "Mid-level",
    "tags": ["Electrical Systems", "AutoCAD", "Safety"],
    "posted": "5 days ago",
    "description": "Design and maintain electrical systems for commercial and industrial projects.",
    "requirements": ["Electrical Engineering degree", "3+ years experience", "Electrical codes & safety", "AutoCAD Electrical", "Project management", "PE license preferred"],
    "benefits": ["Competitive salary", "Safety equipment", "Health & life insurance", "Professional development", "Annual increases", "Team outings"],
    "companyOverview": "PowerGrid Cambodia specializes in electrical engineering and power distribution.",
    "phone": "012 345 678",
    "telegram": "@jobkh_official"
  },
  {
    "id": 12,
    "title": "Tax Consultant",
    "company": "KPMG Cambodia",
    "logo": "KP",
    "location": "Phnom Penh",
    "salary": "$1,200 - $2,000",
    "salaryNum": 2000,
    "type": "Full-time",
    "category": "Accounting",
    "experience": "Mid-level",
    "tags": ["Tax Law", "Compliance", "Advisory"],
    "posted": "1 week ago",
    "description": "Provide expert tax advisory services to multinational and local clients.",
    "requirements": ["3+ years tax consulting", "Cambodian & international tax", "CPA/ACCA certification", "Analytical skills", "Client relationship management", "English and Khmer fluency"],
    "benefits": ["Global career opportunities", "World-class training", "Comprehensive insurance", "Performance bonuses", "Work-life balance", "Prestigious brand"],
    "companyOverview": "KPMG Cambodia is part of the global KPMG network.",
    "phone": "012 345 678",
    "telegram": "@jobkh_official"
  },
  {
    "id": 13,
    "title": "Mobile App Developer",
    "company": "AppFactory KH",
    "logo": "AF",
    "location": "Phnom Penh",
    "salary": "$1,400 - $2,400",
    "salaryNum": 2400,
    "type": "Full-time",
    "category": "IT & Software",
    "experience": "Mid-level",
    "tags": ["Flutter", "React Native", "Mobile"],
    "posted": "12 hours ago",
    "description": "Build cross-platform mobile applications for various clients.",
    "requirements": ["3+ years mobile dev", "Flutter or React Native", "Published apps", "Mobile UI/UX principles", "RESTful APIs", "State management"],
    "benefits": ["Competitive salary", "Latest devices", "Conference budget", "Flexible hours", "Remote 2 days/week", "Health insurance"],
    "companyOverview": "AppFactory KH creates innovative mobile solutions for businesses.",
    "phone": "012 345 678",
    "telegram": "@jobkh_official"
  },
  {
    "id": 14,
    "title": "HR Manager",
    "company": "PeopleFirst Cambodia",
    "logo": "PF",
    "location": "Phnom Penh",
    "salary": "$1,000 - $1,800",
    "salaryNum": 1800,
    "type": "Full-time",
    "category": "Marketing",
    "experience": "Senior",
    "tags": ["HR", "Recruitment", "Management"],
    "posted": "4 days ago",
    "description": "Lead HR department overseeing recruitment and employee relations.",
    "requirements": ["5+ years HR management", "Cambodian labor laws", "HRIS systems", "Interpersonal skills", "HR or Business degree", "SHRM certification preferred"],
    "benefits": ["Leadership role", "Comprehensive benefits", "Professional development", "Annual bonuses", "Work-life balance", "Team leadership"],
    "companyOverview": "PeopleFirst Cambodia provides HR consulting and recruitment services.",
    "phone": "012 345 678",
    "telegram": "@jobkh_official"
  },
  {
    "id": 15,
    "title": "Structural Engineer",
    "company": "AngkorBuild Engineering",
    "logo": "AB",
    "location": "Siem Reap",
    "salary": "$1,300 - $2,200",
    "salaryNum": 2200,
    "type": "Full-time",
    "category": "Engineering",
    "experience": "Mid-level",
    "tags": ["Structural Analysis", "ETABS", "Design"],
    "posted": "3 days ago",
    "description": "Design and analyze structural systems for buildings and infrastructure.",
    "requirements": ["Structural Engineering degree", "3+ years structural design", "ETABS, SAP2000", "Building codes", "Strong math skills", "Attention to detail"],
    "benefits": ["Competitive salary", "Project bonuses", "Relocation support", "Health insurance", "Continuous learning", "Career growth"],
    "companyOverview": "AngkorBuild Engineering provides structural engineering services in Cambodia.",
    "phone": "012 345 678",
    "telegram": "@jobkh_official"
  },
  {
    "id": 16,
    "title": "Data Analyst",
    "company": "InsightCam Analytics",
    "logo": "IA",
    "location": "Phnom Penh",
    "salary": "$1,100 - $1,900",
    "salaryNum": 1900,
    "type": "Full-time",
    "category": "IT & Software",
    "experience": "Mid-level",
    "tags": ["Python", "SQL", "Data Visualization"],
    "posted": "2 days ago",
    "description": "Analyze complex datasets to extract insights and support decision making.",
    "requirements": ["2+ years data analysis", "Python and SQL", "Data visualization tools", "Statistical knowledge", "Communication skills", "Related degree"],
    "benefits": ["Competitive pay", "Learning opportunities", "Modern office", "Team events", "Health coverage", "Flexible schedule"],
    "companyOverview": "InsightCam Analytics helps businesses make smarter data-driven decisions.",
    "phone": "012 345 678",
    "telegram": "@jobkh_official"
  },
  {
    "id": 17,
    "title": "Social Media Manager",
    "company": "ViralKH Media",
    "logo": "VK",
    "location": "Phnom Penh",
    "salary": "$800 - $1,400",
    "salaryNum": 1400,
    "type": "Full-time",
    "category": "Marketing",
    "experience": "Entry-level",
    "tags": ["Instagram", "TikTok", "Content"],
    "posted": "6 hours ago",
    "description": "Manage social media accounts and create viral content for brands.",
    "requirements": ["1-2 years social media", "Algorithm understanding", "Content creation skills", "Analytical mindset", "Social media tools", "Creative and trend-aware"],
    "benefits": ["Fun environment", "Tool subscriptions", "Performance bonuses", "Flexible hours", "Learning budget", "Company events"],
    "companyOverview": "ViralKH Media is a social media agency in Cambodia.",
    "phone": "012 345 678",
    "telegram": "@jobkh_official"
  },
  {
    "id": 18,
    "title": "DevOps Engineer",
    "company": "CloudKH Infrastructure",
    "logo": "CI",
    "location": "Phnom Penh",
    "salary": "$2,000 - $3,500",
    "salaryNum": 3500,
    "type": "Full-time",
    "category": "IT & Software",
    "experience": "Senior",
    "tags": ["Docker", "Kubernetes", "CI/CD"],
    "posted": "1 day ago",
    "description": "Design CI/CD pipelines, manage cloud infrastructure, and ensure reliability.",
    "requirements": ["4+ years DevOps", "Docker and Kubernetes", "AWS/GCP certification", "Linux administration", "Terraform and Ansible", "Security best practices"],
    "benefits": ["Top-market salary", "Remote-first", "Certification budget", "Latest equipment", "Comprehensive health plan", "Equity options"],
    "companyOverview": "CloudKH Infrastructure provides cloud consulting and managed services.",
    "phone": "012 345 678",
    "telegram": "@jobkh_official"
  }
];

// ===== State =====
let currentPage = 1;
const jobsPerPage = 6;
let filteredJobs = [];

// ===== App Initialization =====
function initApp() {
  initNavbar();
  initScrollTop();
  initSmoothScroll();

  // Load user posts from localStorage
  try {
    const userPosts = JSON.parse(localStorage.getItem('jobkh_user_posts')) || [];
    if (Array.isArray(userPosts)) {
      jobsData.unshift(...userPosts);
    }
  } catch (e) {
    console.error('Error loading user posts', e);
  }

  // Initialize State with Search logic
  filteredJobs = [...jobsData];

  // Apply URL params search if present
  const params = new URLSearchParams(window.location.search);
  const kw = params.get('keyword');
  const loc = params.get('location');
  if (kw || loc) {
    filteredJobs = jobsData.filter(j => {
      const matchKw = !kw || (j.title + j.company + j.tags.join(' ')).toLowerCase().includes(kw.toLowerCase());
      const matchLoc = !loc || j.location.toLowerCase().includes(loc.toLowerCase());
      return matchKw && matchLoc;
    });
  }

  // Render UI
  if (document.getElementById('featured-jobs')) renderFeaturedJobs();
  if (document.getElementById('jobs-listing')) { renderJobsPage(); initFilters(); }
  if (document.getElementById('job-detail-content')) loadJobDetail();
  if (document.getElementById('contact-form')) initContactForm();
}

document.addEventListener('DOMContentLoaded', initApp);

// ===== Navbar =====
function initNavbar() {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  const overlay = document.querySelector('.nav-overlay');
  if (hamburger) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('active');
      if (overlay) overlay.classList.toggle('active');
      document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
    });
  }
  if (overlay) {
    overlay.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navLinks.classList.remove('active');
      overlay.classList.remove('active');
      document.body.style.overflow = '';
    });
  }
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      if (hamburger) hamburger.classList.remove('active');
      navLinks.classList.remove('active');
      if (overlay) overlay.classList.remove('active');
      document.body.style.overflow = '';
    });
  });
  window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (navbar) navbar.classList.toggle('scrolled', window.scrollY > 20);
  });
}

function initScrollTop() {
  const scrollBtn = document.querySelector('.scroll-top');
  if (!scrollBtn) return;
  window.addEventListener('scroll', () => { scrollBtn.classList.toggle('visible', window.scrollY > 400); });
  scrollBtn.addEventListener('click', () => { window.scrollTo({ top: 0, behavior: 'smooth' }); });
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const id = this.getAttribute('href');
      if (id === '#') return;
      e.preventDefault();
      const t = document.querySelector(id);
      if (t) t.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

// ===== Job Card =====
function createJobCard(job, showSave) {
  return `
    <div class="job-card" data-id="${job.id}">
      ${showSave ? '<button class="save-btn" onclick="toggleSave(this,event)" title="' + UI.saveJob + '"><i class="far fa-heart"></i></button>' : ''}
      <div class="job-card-header">
        <div class="company-logo">${job.logo}</div>
        <div class="info">
          <h3>${job.title}</h3>
          <span class="company"><i class="far fa-building"></i> ${job.company}</span>
        </div>
      </div>
      <div class="job-meta">
        <span><i class="fas fa-map-marker-alt"></i> ${job.location}</span>
        <span><i class="fas fa-clock"></i> ${job.type}</span>
        <span><i class="fas fa-phone-alt"></i> ${job.phone || 'N/A'}</span>
        ${job.telegram ? `<span><i class="fab fa-telegram"></i> ${job.telegram}</span>` : ''}
        <span><i class="fas fa-calendar"></i> ${job.posted}</span>
      </div>
      <div class="job-tags">${job.tags.map(t => '<span class="job-tag">' + t + '</span>').join('')}</div>
      <div class="job-card-footer">
        <div class="salary">${job.salary} <span>${UI.perMonth}</span></div>
        <a href="job-detail.html?id=${job.id}" class="btn-apply">${UI.viewDetails}</a>
      </div>
    </div>`;
}

function renderFeaturedJobs() {
  const c = document.getElementById('featured-jobs');
  if (c) c.innerHTML = jobsData.slice(0, 6).map(j => createJobCard(j)).join('');
}

function renderJobsPage() {
  const c = document.getElementById('jobs-listing');
  if (!c) return;
  const start = (currentPage - 1) * jobsPerPage;
  const pageJobs = filteredJobs.slice(start, start + jobsPerPage);
  if (!pageJobs.length) {
    c.innerHTML = '<div style="grid-column:1/-1;text-align:center;padding:60px 20px"><i class="fas fa-search" style="font-size:3rem;color:var(--text-light);margin-bottom:16px"></i><h3 style="color:var(--text-secondary)">' + UI.noJobs + '</h3><p style="color:var(--text-light)">' + UI.noJobsMsg + '</p></div>';
  } else {
    c.innerHTML = pageJobs.map(j => createJobCard(j, true)).join('');
  }
  const cnt = document.getElementById('result-count');
  if (cnt) cnt.textContent = filteredJobs.length + ' ' + UI.jobsFound;
  renderPagination();
}

function renderPagination() {
  const c = document.getElementById('pagination');
  if (!c) return;
  const total = Math.ceil(filteredJobs.length / jobsPerPage);
  if (total <= 1) { c.innerHTML = ''; return; }
  let h = '<button ' + (currentPage === 1 ? 'disabled' : '') + ' onclick="goToPage(' + (currentPage - 1) + ')"><i class="fas fa-chevron-left"></i></button>';
  for (let i = 1; i <= total; i++) {
    if (i === 1 || i === total || (i >= currentPage - 1 && i <= currentPage + 1))
      h += '<button class="' + (i === currentPage ? 'active' : '') + '" onclick="goToPage(' + i + ')">' + i + '</button>';
    else if (i === currentPage - 2 || i === currentPage + 2)
      h += '<button disabled>...</button>';
  }
  h += '<button ' + (currentPage === total ? 'disabled' : '') + ' onclick="goToPage(' + (currentPage + 1) + ')"><i class="fas fa-chevron-right"></i></button>';
  c.innerHTML = h;
}

function goToPage(p) {
  currentPage = p;
  renderJobsPage();
  document.querySelector('.jobs-page-layout').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ===== Filters =====
function initFilters() {
  const fb = document.getElementById('btn-filter');
  const rb = document.getElementById('btn-reset');
  if (fb) fb.addEventListener('click', applyFilters);
  if (rb) rb.addEventListener('click', resetFilters);
}

function applyFilters() {
  const cat = document.getElementById('filter-category')?.value || '';
  const loc = document.getElementById('filter-location')?.value || '';
  const sal = parseInt(document.getElementById('filter-salary')?.value) || 0;
  const exp = document.getElementById('filter-experience')?.value || '';
  const types = [];
  document.querySelectorAll('.job-type-check:checked').forEach(cb => types.push(cb.value));
  filteredJobs = jobsData.filter(j => {
    if (cat && j.category !== cat) return false;
    if (loc && j.location !== loc) return false;
    if (sal && j.salaryNum < sal) return false;
    if (exp && j.experience !== exp) return false;
    if (types.length && !types.includes(j.type)) return false;
    return true;
  });
  currentPage = 1;
  renderJobsPage();
}

function resetFilters() {
  document.getElementById('filter-category').value = '';
  document.getElementById('filter-location').value = '';
  document.getElementById('filter-salary').value = '';
  document.getElementById('filter-experience').value = '';
  document.querySelectorAll('.job-type-check').forEach(cb => cb.checked = false);
  filteredJobs = [...jobsData];
  currentPage = 1;
  renderJobsPage();
}

function toggleSave(btn, e) {
  e.preventDefault(); e.stopPropagation();
  btn.classList.toggle('saved');
  const i = btn.querySelector('i');
  i.classList.toggle('far'); i.classList.toggle('fas');
}

// ===== Job Detail =====
function loadJobDetail() {
  const paramId = new URLSearchParams(window.location.search).get('id');
  const id = (paramId && paramId.startsWith('user_')) ? paramId : parseInt(paramId);
  const job = jobsData.find(j => j.id === id);
  if (!job) {
    document.getElementById('job-detail-content').innerHTML = '<div style="text-align:center;padding:80px 20px"><i class="fas fa-exclamation-circle" style="font-size:3rem;color:var(--text-light);margin-bottom:16px"></i><h2>' + UI.jobNotFound + '</h2><a href="jobs.html" class="btn-apply" style="padding:12px 28px;margin-top:24px;display:inline-block">' + UI.browseAll + '</a></div>';
    return;
  }
  document.title = job.title + ' - JobKH';
  const bt = document.getElementById('breadcrumb-title');
  if (bt) bt.textContent = job.title;
  const pt = document.getElementById('page-title');
  if (pt) pt.textContent = job.title;
  const pc = document.getElementById('page-company');
  if (pc) pc.textContent = job.company;

  document.getElementById('job-detail-content').innerHTML = `
    <div class="job-detail-layout">
      <div class="job-detail-main">
        <div class="detail-header">
          <div class="company-logo">${job.logo}</div>
          <div class="info">
            <h1>${job.title}</h1>
            <div class="company-name">${job.company}</div>
            <div class="meta">
              <span><i class="fas fa-map-marker-alt"></i> ${job.location}</span>
              <span><i class="fas fa-clock"></i> ${job.type}</span>
              <span><i class="fas fa-calendar-alt"></i> ${job.posted}</span>
              <span><i class="fas fa-layer-group"></i> ${job.experience}</span>
            </div>
          </div>
        </div>
        <div class="detail-section"><h2><i class="fas fa-file-alt"></i> ${UI.jobDesc}</h2><p>${job.description}</p></div>
        <div class="detail-section"><h2><i class="fas fa-clipboard-list"></i> ${UI.requirements}</h2><ul>${job.requirements.map(r => '<li>' + r + '</li>').join('')}</ul></div>
        <div class="detail-section"><h2><i class="fas fa-gift"></i> ${UI.benefits}</h2><ul>${job.benefits.map(b => '<li>' + b + '</li>').join('')}</ul></div>
        <div class="detail-section"><h2><i class="fas fa-building"></i> ${UI.companyInfo}</h2><p>${job.companyOverview}</p></div>
      </div>
      <div class="job-detail-sidebar">
        <div class="apply-card">
          <div class="salary-range"><div class="amount">${job.salary}</div><div class="period">${UI.perMonth}</div></div>
          <button class="btn-apply-large"><i class="fas fa-paper-plane"></i> ${UI.applyNow}</button>
          <button class="btn-save-job" onclick="toggleSave(this,event)"><i class="far fa-heart"></i> ${UI.saveJob}</button>
        </div>
        <div class="job-info-card">
          <h3>${UI.jobOverview}</h3>
          <div class="info-item"><i class="fas fa-briefcase"></i><div><div class="label">${UI.jobType}</div><div class="value">${job.type}</div></div></div>
          <div class="info-item"><i class="fas fa-map-marker-alt"></i><div><div class="label">${UI.location}</div><div class="value">${job.location}</div></div></div>
          <div class="info-item"><i class="fas fa-phone-alt"></i><div><div class="label">Phone</div><div class="value">${job.phone || 'N/A'}</div></div></div>
          ${job.telegram ? `<div class="info-item"><i class="fab fa-telegram"></i><div><div class="label">Telegram</div><div class="value">${job.telegram}</div></div></div>` : ''}
          <div class="info-item"><i class="fas fa-layer-group"></i><div><div class="label">${UI.expLabel}</div><div class="value">${job.experience}</div></div></div>
          <div class="info-item"><i class="fas fa-tags"></i><div><div class="label">${UI.category}</div><div class="value">${job.category}</div></div></div>
          <div class="info-item"><i class="fas fa-calendar-check"></i><div><div class="label">${UI.posted}</div><div class="value">${job.posted}</div></div></div>
        </div>
      </div>
    </div>`;
}

// ===== Contact Form =====
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    let valid = true;
    const fields = [
      { id: 'name', min: 2 },
      { id: 'email', pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ },
      { id: 'subject', min: 3 },
      { id: 'message', min: 10 }
    ];
    fields.forEach(f => {
      const inp = document.getElementById(f.id);
      const grp = inp.closest('.form-group');
      const val = inp.value.trim();
      if (f.pattern ? !f.pattern.test(val) : val.length < f.min) {
        grp.classList.add('error'); valid = false;
      } else { grp.classList.remove('error'); }
    });
    if (valid) {
      const popup = document.getElementById('success-popup');
      if (popup) popup.classList.add('active');
      form.reset();
    }
  });
  document.querySelectorAll('.form-group input, .form-group textarea').forEach(inp => {
    inp.addEventListener('input', function () { this.closest('.form-group').classList.remove('error'); });
  });
}

function closePopup() {
  const p = document.getElementById('success-popup');
  if (p) p.classList.remove('active');
}

function searchJobs() {
  const kw = document.getElementById('hero-search')?.value?.trim() || '';
  const loc = document.getElementById('hero-location')?.value || '';
  let url = 'jobs.html';
  const params = new URLSearchParams();
  if (kw) params.set('keyword', kw);
  if (loc) params.set('location', loc);
  if (params.toString()) url += '?' + params.toString();
  window.location.href = url;
}
