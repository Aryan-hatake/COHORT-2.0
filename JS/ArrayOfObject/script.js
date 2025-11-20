const profiles = [
  {
    image: "https://images.unsplash.com/photo-1604145559206-e3bce0040e2d?w=500&auto=format&fit=crop&q=60",
    name: "Aryan Gadhave",
    title: "Full Stack",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, sunt inventore laudantium molestiae veniam a saepe doloremque modi voluptas error.",
    tags: ["JavaScript", "Node.js", "Express", "MongoDB", "React"]
  },
  {
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&auto=format&fit=crop&q=60",
    name: "Sana Verma",
    title: "Frontend Developer",
    description: "Crafts beautiful and responsive interfaces with a strong focus on user experience.",
    tags: ["HTML", "CSS", "React", "Tailwind"]
  },
  {
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=60",
    name: "Rohan Patil",
    title: "Backend Engineer",
    description: "Passionate about robust server logic, database design, and scalable APIs.",
    tags: ["Node.js", "SQL", "Docker", "AWS"]
  },
  {
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60",
    name: "Neha Sharma",
    title: "UI/UX Designer",
    description: "Designs intuitive and visually appealing user interfaces with a research-driven approach.",
    tags: ["Figma", "UI/UX", "Prototyping"]
  },
  {
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=500&auto=format&fit=crop&q=60",
    name: "Karan Gupta",
    title: "DevOps Engineer",
    description: "Ensures smooth workflows, automated pipelines, and reliable deployments.",
    tags: ["DevOps", "CI/CD", "Kubernetes", "Linux"]
  }
];

let clutter=""
profiles.forEach((e)=>{
    clutter+=` <div class="card">
            <img src="${e.image}" alt="">

            <h1>${e.name}</h1>
            <h5>${e.title}</h5>
            <p>${e.description}</p>
        </div>`
})
document.querySelector("main").innerHTML=clutter