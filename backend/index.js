const express = require("express");
const cors = require("cors");
const eventsData = require("./data/events.json");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/events", (req, res) => {
  res.json({ events: eventsData });
});

app.get("/api/events/:id", (req, res) => {
  const { id } = req.params;
  const event = eventsData.find(e => e.id === id);
  if (event) {
    res.json({ event });
  } else {
    res.status(404).json({ error: "Event not found" });
  }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Backend listening on port ${PORT}`);
});
