// Placeholder for posts data (no Markdown files added yet)
const posts = [];

// Define sections and their folders
const sections = [
    { section: "thoughts", folder: "posts/thoughts" },
    { section: "tech-news", folder: "posts/tech-news" },
    { section: "learning", folder: "posts/learning" },
];

// Dynamically generate sections in Posts page
function loadSections() {
    const sectionMenu = document.getElementById("section-menu");

    // Clear existing content
    sectionMenu.innerHTML = "";

    sections.forEach(({ section, folder }) => {
        const count = posts.filter(post => post.section === section).length;

        // Create section item dynamically
        const sectionItem = document.createElement("a");
        sectionItem.className = "section-item";
        sectionItem.href = `${folder}/${section}.html`;
        sectionItem.innerHTML = `
            <span>${section.charAt(0).toUpperCase() + section.slice(1)}</span>
            <span>(${count} posts)</span>
        `;

        sectionMenu.appendChild(sectionItem);
    });
}

// Load posts by section (when specific section page is visited)
function loadPostsBySection(sectionName, containerId) {
    const container = document.getElementById(containerId);
    const sectionPosts = posts.filter(post => post.section === sectionName);

    sectionPosts.forEach(post => {
        const postElement = document.createElement("div");
        postElement.className = "post-item";
        postElement.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.date}</p>
        `;
        container.appendChild(postElement);

        loadMarkdown(post.path, postElement); // Markdown content loader
    });
}

// Placeholder for loading Markdown content dynamically
async function loadMarkdown(filePath, targetElement) {
    console.warn("No Markdown files to load yet:", filePath);
    targetElement.innerHTML = `<p>No content available for this file: ${filePath}</p>`;
}
