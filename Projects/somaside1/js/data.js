// ============================================================
//  data.js — Soma Side single source of truth
//  All stories, genres, and the mock profile live here.
// ============================================================

const GENRES = ["All", "Poem", "Story", "Song"];

const STORIES = [
  {
    id: 1,
    title: "Harmattan Daughter",
    author: "Ngozi Adeyemi",
    country: "Nigeria",
    city: "Lagos",
    genre: "Poem",
    excerpt: "She carries dust like memory — stubborn, season-less, entirely her own. The wind named her before her mother could.",
    content: `She carries dust like memory —
stubborn, season-less, entirely her own.
The wind named her before her mother could,
called her from the red-earth roads
where harmattan cracked the lips of old men
and made children sneeze like little gods.

She is the daughter of dry seasons,
born in the month when rivers forget themselves,
when the sky turns the colour of forgotten things.
Her skin holds the warmth of a thousand afternoons.

Ask her where she is from
and she will point to the haze on the horizon —
that place between dust and sky
where nothing is settled
and everything, everything belongs.`,
    image: "images/six.jpg",
    color: "linear-gradient(135deg, #3d1260, #1a0040)",
    likes: 84,
    bookmarked: false,
    readTime: "2 min"
  },
  {
    id: 2,
    title: "The Fisherman's Oath",
    author: "Kofi Mensah",
    country: "Ghana",
    city: "Accra",
    genre: "Story",
    excerpt: "The sea remembers every promise made on its shore. Kwame learned this the morning his father did not return.",
    content: `The sea remembers every promise made on its shore.

Kwame learned this the morning his father did not return. He was seven, standing knee-deep in the shallows, counting the boats that came back. He counted them twice. Then a third time. The number was always one short.

His grandmother said nothing when she saw his face. She simply took his hand and walked him to the water's edge. She pressed his small palm flat against the wet sand and let the tide wash over it.

"You feel that?" she asked.

He nodded, though he felt only cold.

"That is your father. The sea does not take. It keeps. There is a difference."

Kwame is forty-three now. He has three sons of his own. Each morning, before the boats go out, he presses their palms into the sand. He has never explained why. Some promises are made in silence, sealed by salt, witnessed only by the horizon.

He has never missed a morning.`,
    image: "images/two.jpg",
    color: "linear-gradient(135deg, #0a2040, #1a3060)",
    likes: 127,
    bookmarked: false,
    readTime: "3 min"
  },
  {
    id: 3,
    title: "Mtoto wa Pwani",
    author: "Amara Kimani",
    country: "Kenya",
    city: "Mombasa",
    genre: "Song",
    excerpt: "Mama's lullaby stitched into salt and wave. Sung at dusk when the dhows return and the children stop playing to listen.",
    content: `[Verse 1]
Mtoto wa pwani, lala sasa
The dhows are coming home
Stars are counting you to sleep
The ocean hums your name

[Chorus]
Pumzika, pumzika, mtoto wangu
The tide will guard your door
Pumzika, pumzika, roho yangu
Until the morning shore

[Verse 2]
Your grandfather sailed these waters
Before you knew the sky
He left his songs inside the waves
For you to find in time

[Chorus]
Pumzika, pumzika, mtoto wangu
The tide will guard your door
Pumzika, pumzika, roho yangu
Until the morning shore

[Bridge]
Swahili wind, carry him gently
Coral reef, hold her safe
Every child born by the ocean
Knows the sea is home

[Outro]
Lala... lala... mtoto wa pwani
The water knows your name`,
    image: "images/five.jpg",
    color: "linear-gradient(135deg, #0a3020, #1a4830)",
    likes: 203,
    bookmarked: false,
    readTime: "2 min"
  },
  {
    id: 4,
    title: "The Colour of Silence",
    author: "Fatima Diallo",
    country: "Senegal",
    city: "Dakar",
    genre: "Poem",
    excerpt: "In our house, grief was a particular shade of blue. Not the sky — never the sky. Something deeper. The colour of the Atlantic at 4am.",
    content: `In our house, grief was a particular shade of blue.
Not the sky — never the sky.
Something deeper.
The colour of the Atlantic at 4am
when the fishermen have not yet left
and the night has not yet decided
to become morning.

My mother wore it for three years
without anyone naming it.
We ate around it at the dinner table.
We spoke carefully,
the way you speak in rooms
where something fragile lives.

I learned to read silence young.
How it sits differently in a chair
when it is sad.
How it has weight.
How you can pour it like water
from one generation to the next
without spilling a drop.

I am learning, slowly,
to set it down.`,
    image: "images/four.jpg",
    color: "linear-gradient(135deg, #1a2050, #2a3080)",
    likes: 156,
    bookmarked: false,
    readTime: "2 min"
  },
  {
    id: 5,
    title: "Aunty Bisi's Recipe",
    author: "Tunde Olatunji",
    country: "Nigeria",
    city: "Ibadan",
    genre: "Story",
    excerpt: "Nobody could make egusi soup like Aunty Bisi. Not because of the ingredients — she was generous with those. It was the way she stirred.",
    content: `Nobody could make egusi soup like Aunty Bisi.

Not because of the ingredients — she was generous with those, scribbling measurements on torn paper bags for anyone who asked. It was the way she stirred.

Clockwise only, she insisted. Always clockwise. The soup knows the difference.

We laughed at this when we were young. We laughed quietly, behind our hands, because Aunty Bisi had a way of knowing when you were laughing at her. But we noticed, eventually, that whenever someone else made the soup — even with her exact recipe, even with the same pot — it tasted like something was missing.

Not a spice. Something else.

When she died, we gathered in her kitchen for the first time without her. My cousin Adaeze stood at the stove. She picked up the wooden spoon. She started to stir.

Clockwise.

None of us said anything. We didn't need to. The smell that rose from that pot was so familiar it made three grown women cry into their wrappers.

Some things are not in the recipe.
Some things are passed hand to hand,
spoon to spoon,
woman to woman,
without a single word.`,
    image: "images/one.jpg",
    color: "linear-gradient(135deg, #3a1a00, #6b3510)",
    likes: 312,
    bookmarked: false,
    readTime: "4 min"
  },
  {
    id: 6,
    title: "Jua Kali",
    author: "Omondi Otieno",
    country: "Kenya",
    city: "Nairobi",
    genre: "Song",
    excerpt: "A song for the hands that build without blueprints. For the welders and cobblers and craftsmen who make something from nothing under a fierce sun.",
    content: `[Verse 1]
Under the open sky I work
No roof but the sun on my back
My hands know what school never taught
How to take nothing and come back

Jua kali, jua kali
Fierce sun, strong hands
Jua kali, jua kali
We build this with what we have

[Verse 2]
They said I needed a certificate
To prove what my calluses know
But look at this gate, look at this frame
Tell me this iron doesn't show

[Chorus]
Jua kali, jua kali
Fierce sun, strong hands
Jua kali, jua kali
We build this with what we have

[Bridge]
Every city has its backbone
Bent over, unsung, unnamed
But the buildings stand on our labour
And the streets carry our names

[Verse 3]
My son asks me what I do
I show him, I don't explain
One day these hands will be his hands
And the sun will know his name

[Outro]
Jua kali... jua kali...
Fierce sun, we remain`,
    image: "images/three.jpg",
    color: "linear-gradient(135deg, #2a1a00, #5a3a00)",
    likes: 178,
    bookmarked: false,
    readTime: "3 min"
  },
  {
    id: 7,
    title: "What the Baobab Knows",
    author: "Amina Sy",
    country: "Mali",
    city: "Bamako",
    genre: "Story",
    excerpt: "The elders say the baobab grows upside down — its roots reaching for heaven. Our grandmother said this was not a punishment but a choice.",
    content: `The elders say the baobab grows upside down — its roots reaching for heaven, its branches buried in earth.

Our grandmother said this was not a punishment but a choice.

She told us this story every dry season, sitting in the shade of the oldest baobab in our village. It was wider than six men with arms outstretched. Nobody knew how old it was. The tree knew, she said. Trees always know.

"It chose to stand differently," she told us. "The other trees laughed. The birds complained. There was nowhere comfortable to sit. But the baobab kept water inside itself when everything else was thirsty. It grew wide instead of tall. It outlasted everything that laughed at it."

She would pat the bark when she finished.

"Some of us are made to grow differently. This is not a flaw. This is the plan."

I am thirty-one years old and I have moved to three countries. I have been the strange one, the different one, the one who does not quite fit the shape of the space I am in.

But I am not thirsty.

And I am learning, slowly, that wide is its own kind of magnificent.`,
    image: "images/seven.jpg",
    color: "linear-gradient(135deg, #1a0a00, #4a2a10)",
    likes: 241,
    bookmarked: false,
    readTime: "3 min"
  }
];

// Mock profile — no login for MVP
const PROFILE = {
  name: "Soma Reader",
  handle: "@somareader",
  bio: "Lover of African stories. Based everywhere.",
  avatar: "images/avatar.jpg",
  joined: "March 2025",
  storyIds: [1, 3, 5] // stories "written" by this profile
};

// Fallback gradient colors when images are missing
const FALLBACK_COLORS = STORIES.map(s => s.color);