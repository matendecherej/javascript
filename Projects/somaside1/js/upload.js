// ============================================================
//  upload.js — Write & publish form
// ============================================================

function initUpload() {
  initCharCount();
  initGenreSelect();
  initFormSubmit();
  initPreview();
}

// ── Character count for excerpt ──────────────────────────────
function initCharCount() {
  const excerpt = document.getElementById("excerptField");
  const counter = document.getElementById("excerptCount");
  if (!excerpt || !counter) return;

  const MAX = 160;

  excerpt.addEventListener("input", () => {
    const len = excerpt.value.length;
    counter.textContent = `${len} / ${MAX}`;
    counter.style.color = len > MAX ? "#e05050" : "#888";
    if (len > MAX) excerpt.value = excerpt.value.slice(0, MAX);
  });
}

// ── Genre pill selector ──────────────────────────────────────
function initGenreSelect() {
  const pills = document.querySelectorAll(".genre-pill");
  const hiddenInput = document.getElementById("genreInput");
  if (!pills.length || !hiddenInput) return;

  pills.forEach(pill => {
    pill.addEventListener("click", () => {
      pills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      hiddenInput.value = pill.dataset.genre;
    });
  });
}

// ── Live preview panel ───────────────────────────────────────
function initPreview() {
  const titleField   = document.getElementById("titleField");
  const contentField = document.getElementById("contentField");
  const previewTitle = document.getElementById("previewTitle");
  const previewBody  = document.getElementById("previewBody");

  if (!titleField || !previewTitle) return;

  titleField.addEventListener("input", () => {
    previewTitle.textContent = titleField.value || "Your title appears here";
  });

  contentField?.addEventListener("input", () => {
    const text = contentField.value || "Your story will appear here...";
    previewBody.innerHTML = text
      .split(/\n\n+/)
      .map(p => `<p>${p.replace(/\n/g, "<br>")}</p>`)
      .join("");
  });
}

// ── Form submission ──────────────────────────────────────────
function initFormSubmit() {
  const form = document.getElementById("uploadForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const title   = document.getElementById("titleField")?.value.trim();
    const author  = document.getElementById("authorField")?.value.trim();
    const genre   = document.getElementById("genreInput")?.value;
    const excerpt = document.getElementById("excerptField")?.value.trim();
    const content = document.getElementById("contentField")?.value.trim();

    // Validate
    const errors = [];
    if (!title)   errors.push("Title is required.");
    if (!author)  errors.push("Author name is required.");
    if (!genre)   errors.push("Please select a genre.");
    if (!excerpt) errors.push("Excerpt is required.");
    if (!content || content.length < 50) errors.push("Story content must be at least 50 characters.");

    if (errors.length) {
      showFormFeedback(errors.join(" "), "error");
      return;
    }

    // Build new story object and push to STORIES array
    const newStory = {
      id: STORIES.length + 1,
      title,
      author,
      country: "Africa",
      city: "",
      genre,
      excerpt,
      content,
      image: null,
      color: "linear-gradient(135deg, #3d1260, #7b2fbe)",
      likes: 0,
      liked: false,
      bookmarked: false,
      readTime: estimateReadTime(content)
    };

    STORIES.unshift(newStory); // add to front of feed

    showFormFeedback("Story published! Redirecting to feed…", "success");

    setTimeout(() => {
      window.location.href = "home.html";
    }, 1800);
  });
}

// ── Helpers ──────────────────────────────────────────────────
function estimateReadTime(text) {
  const words = text.trim().split(/\s+/).length;
  const mins  = Math.max(1, Math.ceil(words / 200));
  return `${mins} min`;
}

function showFormFeedback(message, type) {
  let banner = document.getElementById("formFeedback");
  if (!banner) {
    banner = document.createElement("div");
    banner.id = "formFeedback";
    document.getElementById("uploadForm").prepend(banner);
  }

  banner.textContent = message;
  banner.className = `form-feedback ${type}`;
  banner.scrollIntoView({ behavior: "smooth", block: "center" });
}
