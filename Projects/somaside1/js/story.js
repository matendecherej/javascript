// ============================================================
//  story.js — Single story reader view
//  Reads ?id= from URL, renders full story, handles nav
// ============================================================

function initStory() {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get("id"), 10);

  const story = STORIES.find(s => s.id === id);

  if (!story) {
    document.getElementById("storyContainer").innerHTML = `
      <div class="empty-state">
        <p>Story not found.</p>
        <a href="home.html" class="btn-primary">← Back to feed</a>
      </div>`;
    return;
  }

  renderStory(story);
  renderRelated(story);
}

// ── Render full story ────────────────────────────────────────
function renderStory(story) {
  const container = document.getElementById("storyContainer");
  if (!container) return;

  const genreClass = story.genre.toLowerCase();

  container.innerHTML = `
    <div class="story-cover-banner" style="${story.image ? `background-image: url('${story.image}'); background-size: cover; background-position: center;` : `background: ${story.color};`}">
      <div class="story-cover-inner">
        <span class="tag ${genreClass}">${story.genre}</span>
        <h1 class="story-main-title">${story.title}</h1>
        <div class="story-meta-row">
          <span class="story-author-line">by ${story.author}</span>
          <span class="story-location">📍 ${story.city}, ${story.country}</span>
          <span class="story-rt">⏱ ${story.readTime}</span>
        </div>
      </div>
    </div>

    <div class="story-body-wrap">
      <div class="story-actions-top">
        <a href="home.html" class="back-btn">← Back to stories</a>
        <div class="story-action-btns">
          <button class="like-btn" id="storyLikeBtn" data-id="${story.id}">
            <span id="likeIcon">${story.liked ? '❤️' : '🤍'}</span>
            <span id="likeCount">${story.likes}</span>
          </button>
          <button class="bookmark-btn ${story.bookmarked ? 'active' : ''}" id="storyBookmarkBtn" data-id="${story.id}">
            ${story.bookmarked ? '🔖' : '📄'}
          </button>
        </div>
      </div>

      <div class="story-text">
        ${formatContent(story.content)}
      </div>

      <div class="story-nav">
        ${prevStory(story.id)}
        ${nextStory(story.id)}
      </div>
    </div>
  `;

  // Like
  document.getElementById("storyLikeBtn").addEventListener("click", () => {
    story.liked = !story.liked;
    story.likes += story.liked ? 1 : -1;
    document.getElementById("likeIcon").textContent = story.liked ? "❤️" : "🤍";
    document.getElementById("likeCount").textContent = story.likes;
  });

  // Bookmark
  document.getElementById("storyBookmarkBtn").addEventListener("click", (e) => {
    story.bookmarked = !story.bookmarked;
    e.currentTarget.textContent = story.bookmarked ? "🔖" : "📄";
    e.currentTarget.classList.toggle("active", story.bookmarked);
  });
}

// ── Format content: preserve line breaks & stanza gaps ──────
function formatContent(text) {
  return text
    .split(/\n\n+/)
    .map(para => `<p>${para.replace(/\n/g, "<br>")}</p>`)
    .join("");
}

// ── Prev / Next links ────────────────────────────────────────
function prevStory(currentId) {
  const idx = STORIES.findIndex(s => s.id === currentId);
  if (idx <= 0) return `<span></span>`;
  const prev = STORIES[idx - 1];
  return `<a href="story.html?id=${prev.id}" class="story-nav-btn">← ${prev.title}</a>`;
}

function nextStory(currentId) {
  const idx = STORIES.findIndex(s => s.id === currentId);
  if (idx >= STORIES.length - 1) return `<span></span>`;
  const next = STORIES[idx + 1];
  return `<a href="story.html?id=${next.id}" class="story-nav-btn">${next.title} →</a>`;
}

// ── Related stories (same genre, exclude current) ───────────
function renderRelated(story) {
  const container = document.getElementById("relatedStories");
  if (!container) return;

  const related = STORIES
    .filter(s => s.genre === story.genre && s.id !== story.id)
    .slice(0, 3);

  if (!related.length) {
    container.style.display = "none";
    return;
  }

  container.innerHTML = `
    <h2 class="related-heading">More ${story.genre}s</h2>
    <div class="related-grid">
      ${related.map(s => `
        <a href="story.html?id=${s.id}" class="related-card">
          <div class="related-cover" style="background:${s.color};"></div>
          <div class="related-info">
            <span class="tag ${s.genre.toLowerCase()}">${s.genre}</span>
            <h4>${s.title}</h4>
            <p>${s.author} · ${s.country}</p>
          </div>
        </a>
      `).join("")}
    </div>
  `;
  
}

// bottom of story.js
document.addEventListener("DOMContentLoaded", initStory);