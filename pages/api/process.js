export default function handler(req, res) {
  if (req.method === "POST") {
    const { feel, event, emotion, opinion } = req.body;

    // 仮のレスポンスデータ
    const values = {
      value_analysis: "あなたの価値観は新しいことに挑戦することです。",
      recommendation: "挑戦を続けることでさらなる成長が期待されます。",
    };

    return res.status(200).json({ values });
  } else {
    return res.status(405).json({ error: "Method not allowed" });
  }
}
