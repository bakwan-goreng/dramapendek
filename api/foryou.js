export default async function handler(req, res) {
  try {
    const r = await fetch(
      "https://sapimu.au/dramabox/api/foryou/1?lang=in",
      {
        headers: {
          Authorization: `Bearer ${process.env.DRAMABOX_TOKEN}`
        }
      }
    )
    const data = await r.json()
    res.status(200).json(data)
  } catch (e) {
    res.status(500).json({ error: e.message })
  }
}
