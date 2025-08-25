// api/screenshot.js
import axios from 'axios';

export default async function handler(req, res) {
  const { url, device = 'desktop' } = req.query;

  if (!url) {
    return res.status(400).json({ error: 'URL parameter is required' });
  }

  try {
    const result = await ssweb(url, device);
    res.setHeader('Content-Type', 'image/jpeg');
    res.send(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function ssweb(url, device = 'desktop') {
  // Your existing ssweb function implementation
}
