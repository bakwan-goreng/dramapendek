export default async function handler(req, res) {
  try {
    const r = await fetch(
      "https://sapimu.au/dramabox/api/watch/player?lang=in",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.DRAMABOX_TOKEN}`
        },
        body: JSON.stringify(req.body)
      }
    )

    res.json(await r.json())
  } catch (e) {
    res.status(500).json({ error: e.message })
  }
}
