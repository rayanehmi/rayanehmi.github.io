/**
 * Client-side router and smooth-scroll helpers.
 * At this early stage we only expose the scrollNext event listener that will
 * be triggered by the game module in milestone 6.
 */

function onScrollNext() {
  const blog = document.getElementById("blog");
  if (blog) {
    blog.scrollIntoView({ behavior: "smooth" });
  }
}

export function setupRouter() {
  document.addEventListener("scrollNext", onScrollNext);
}

// Auto-init
document.addEventListener("DOMContentLoaded", setupRouter);
