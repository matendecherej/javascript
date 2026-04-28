// ============================================================
//  home.js — Story feed, genre filters, likes & bookmarks
// ============================================================

function initHome() {
  renderFeed("All");
  initFilters();
}

// ── Render ──────────────────────────────────────────────────
function renderFeed(activeGenre) {
  const grid = document.getElementById("storyGrid");
  if (!grid) return;

  const filtered = activeGenre === "All"
    ? STORIES
    : STORIES.filter(s => s.genre === activeGenre);

  grid.innerHTML = filtered.map(story => storyCard(story)).join("");

  // Attach interaction events after render
  grid.querySelectorAll(".like-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const id = +btn.dataset.id;
      toggleLike(id, btn);
    });
  });

  grid.querySelectorAll(".bookmark-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const id = +btn.dataset.id;
      toggleBookmark(id, btn);
    });
  });

  // Click card → go to story page
  grid.querySelectorAll(".story-card").forEach(card => {
    card.addEventListener("click", () => {
      const id = card.dataset.id;
      window.location.href = `story.html?id=${id}`;
    });
  });

  // Scroll reveal
  observeCards();
}

// ── Card HTML ────────────────────────────────────────────────
function storyCard(story) {
  const genreClass = story.genre.toLowerCase();
  return `
    <article class="story-card" data-id="${story.id}" tabindex="0" role="button" aria-label="Read ${story.title}">
      <div class="card-cover" style="${story.image ? `background-image: url('${story.image}'); background-size: cover; background-position: center;` : `background: ${story.color};`}">
        <span class="card-read-time">⏱ ${story.readTime}</span>
      </div>
      <div class="card-body">
        <span class="tag ${genreClass}">${story.genre}</span>
        <h3 class="card-title">${story.title}</h3>
        <p class="card-author">${story.author} · ${story.city}, ${story.country}</p>
        <p class="card-excerpt">${story.excerpt}</p>
        <div class="card-actions">
          <button class="like-btn ${story.liked ? 'liked' : ''}" data-id="${story.id}" aria-label="Like">
            <span class="like-icon">${story.liked ? '❤️' : '🤍'}</span>
            <span class="like-count">${story.likes}</span>
          </button>
          <button class="bookmark-btn ${story.bookmarked ? 'active' : ''}" data-id="${story.id}" aria-label="Bookmark">
            ${story.bookmarked ? '🔖' : '📄'}
          </button>
          <span class="read-more">Read →</span>
        </div>
      </div>
    </article>
  `;
}

// ── Filters ──────────────────────────────────────────────────
function initFilters() {
  const container = document.getElementById("genreFilters");
  if (!container) return;

  container.innerHTML = GENRES.map(g => `
    <button class="filter-btn ${g === 'All' ? 'active' : ''}" data-genre="${g}">${g}</button>
  `).join("");

  container.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      container.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderFeed(btn.dataset.genre);
    });
  });
}

// ── Like toggle ──────────────────────────────────────────────
function toggleLike(id, btn) {
  const story = STORIES.find(s => s.id === id);
  if (!story) return;

  story.liked = !story.liked;
  story.likes += story.liked ? 1 : -1;

  btn.querySelector(".like-icon").textContent = story.liked ? "❤️" : "🤍";
  btn.querySelector(".like-count").textContent = story.likes;
  btn.classList.toggle("liked", story.liked);
}

// ── Bookmark toggle ──────────────────────────────────────────
function toggleBookmark(id, btn) {
  const story = STORIES.find(s => s.id === id);
  if (!story) return;

  story.bookmarked = !story.bookmarked;
  btn.textContent = story.bookmarked ? "🔖" : "📄";
  btn.classList.toggle("active", story.bookmarked);
}

// ── Scroll reveal ────────────────────────────────────────────
function observeCards() {
  const cards = document.querySelectorAll(".story-card");
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add("visible"), i * 80);
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.08 });

  cards.forEach(c => io.observe(c));
}
