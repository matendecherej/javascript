This is my teachable moment. This is my child, I want to grow it till it gives me millions.
Here is the path;

soma-side/
│
├── index.html        (Landing page)
├── home.html
├── story.html
├── profile.html
├── upload.html
├── about.html
│
├── css/
│   └── styles.css
│
├── js/
│   └── main.js
│
├── assets/
│   ├── logo.png
│   └── images/
│
└── README.md

## ROADMAP.

Step-by-step roadmap (this is our contract 🤝)
PHASE 1 — Foundation (no pressure)

✅ Project setup
✅ Color system (white & purple)
✅ Typography
✅ Navigation bar (shared across pages)

## PHASE 2 — Pages

-Landing page

-Home page (story cards)

-Story page

-Profile page

-Upload page

-About page

## PHASE 3 — JavaScript logic

-Fake story data

-Click to open story

-Like / bookmark (local only)

-Form validation

-PHASE 4 — TypeScript intro

-Convert JS → TS

-Strong typing for stories & users

## Soma Side Visual Map

![Soma Side App Flow](assets/soma_side_map.png)

-Upload page plan ;
User types → JS reads values → 
Create new story object → 
Save to localStorage → 
Redirect to Home

-Right now your Home page uses this:
const stories = [ ... ];
-this means the stories are hard coded,

We are goung to modify our story data system;

-At the VERY TOP of main.js, replace your stories declaration with this:

// ==========================
// GET STORIES FROM LOCALSTORAGE OR DEFAULT
// ==========================

// Default stories (only used first time)
const defaultStories = [
  {
    id: "1",
    title: "The Baobab Tree",
    author: "Amina Njeri",
    category: "Poem",
    content: `Under the ancient baobab...`,
    likes: 24
  },
  {
    id: "2",
    title: "Drums of the Savannah",
    author: "Kofi Mensah",
    category: "Story",
    content: `When the drums spoke...`,
    likes: 12
  }
];

// Get stored stories OR use defaults
let stories = JSON.parse(localStorage.getItem("stories")) || defaultStories;

// Save defaults if nothing exists yet
localStorage.setItem("stories", JSON.stringify(stories));

VERSION 2
##FRONTEND

project/
├── index.html          ✅ done
├── about.html          ✅ done
├── home.html           (story feed — after "entering" the app)
├── upload.html         (write & publish)
├── story.html          (single story reader view)
├── profile.html        (user profile + their works)
├── css/
│   └── style.css       ✅ existing
└── js/
    ├── main.js         (entry point — routes init calls by page)
    ├── data.js         (ALL hardcoded stories, authors, fallback images)
    ├── home.js         (feed rendering, filters, likes, bookmarks)
    ├── story.js        (single story view, prev/next navigation)
    ├── upload.js       (form handling, validation, preview)
    └── profile.js      (profile stats, user's works)

    ##BACKEND

    Stage 1 — The server : Get Node + Express running, understand how requests and responses work. Your first "hello from the backend" moment.

    Stage 2 — The database: Connect to MongoDB (a database that stores data as JSON). Store and retrieve stories for real instead of using the hardcoded data.js file.

    Stage 3 — User accounts: Let people sign up, log in, and have a real profile. Stories will be linked to real authors.

    Stage 4 — Deploy: Put it on the internet so anyone in the world can use Soma Side.

    *IMPORTANT*
    Here, I am completely new to backend. Codes may include instructions, even during presentation, I will keep the notes not just as a guide but a reminder of where I begun.