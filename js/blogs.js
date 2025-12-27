const API_URL = "http://localhost:3000/blogs";
const blogContainer = document.getElementById("blogContainer");

/* ================= LOAD BLOGS ================= */
fetch(API_URL)
  .then(res => res.json())
  .then(blogs => {
    blogContainer.innerHTML = "";

    blogs.forEach(blog => {
      const blogCard = `
        <article class="postcard light blue">
          <a class="postcard__img_link" href="#">
            <img class="postcard__img" src="${blog.image}" alt="blog image">
          </a>
          <div class="postcard__text t-dark">
            <h1 class="postcard__title blue">${blog.title}</h1>
            <div class="postcard__bar"></div>
            <div class="postcard__preview-txt">
              ${blog.description}
            </div>
          </div>
        </article>
      `;
      blogContainer.innerHTML += blogCard;
    });
  })
  .catch(err => {
    console.error("Error loading blogs:", err);
  });

/* ================= ADD BLOG ================= */
document.getElementById("blogForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const title = document.getElementById("blogTitle").value;
  const description = document.getElementById("blogDescription").value;

  // student-style shortcut (no upload yet)
  const image = "images/default-blog.jpg";

  fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, description, image })
  })
    .then(() => {
      document.getElementById("blogForm").reset();
      location.reload(); // simple & student-like
    })
    .catch(err => {
      console.error("Error adding blog:", err);
    });
});
