export default async function handler(req, res) {
  const { bookId } = req.query

  try {
    const r = await fetch(
      `https://sapimu.au/dramabox/api/chapters/${bookId}?lang=in`,
      {
        headers: {
          Authorization: `Bearer ${process.env.DRAMABOX_TOKEN}`
        }
      }
    )
    res.json(await r.json())
  } catch (e) {
    res.status(500).json({ error: e.message })
  }
}
