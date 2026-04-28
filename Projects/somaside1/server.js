// server.js
const express  = require('express')
const mongoose = require('mongoose')
const Story    = require('./models/story')

const app  = express()
const PORT = 3000

const MONGO_URI = 'mongodb+srv://somaside:somaside2025@somaside.eykleb2.mongodb.net/somaside?appName=somaside'

app.use(express.json())

// ── Connect to MongoDB ──
mongoose.connect(MONGO_URI)
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch(err => console.log('❌ Connection error:', err))

// ── GET all stories ──
// Frontend calls this to load the stories feed
app.get('/api/stories', async (req, res) => {
  try {
    const stories = await Story.find().sort({ createdAt: -1 })
    res.json(stories)
  } catch (err) {
    res.status(500).json({ error: 'Could not fetch stories' })
  }
})

// ── GET a single story by ID ──
// Frontend calls this when someone clicks a story
app.get('/api/stories/:id', async (req, res) => {
  try {
    const story = await Story.findById(req.params.id)
    if (!story) return res.status(404).json({ error: 'Story not found' })
    res.json(story)
  } catch (err) {
    res.status(500).json({ error: 'Could not fetch story' })
  }
})

// ── POST a new story ──
// Frontend calls this when someone submits on upload.html
app.post('/api/stories', async (req, res) => {
  try {
    const story = new Story(req.body)
    await story.save()
    res.status(201).json({ message: '✅ Story published!', story })
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
})

// ── Start server ──
app.listen(PORT, () => {
  console.log(`🚀 Soma Side server running on http://localhost:${PORT}`)
})