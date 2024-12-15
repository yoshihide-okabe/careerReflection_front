export default function handler(req, res) {
  if (req.method === "POST") {
    const { assess, awareness } = req.body;

    console.log("Received Feedback:");
    console.log("Assessment:", assess);
    console.log("Awareness:", awareness);

    // 仮の成功レスポンスを返す
    res.status(200).json({ message: "フィードバックを受け取りました！" });
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
