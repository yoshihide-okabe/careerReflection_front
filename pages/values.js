import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Values() {
  const router = useRouter();
  const { event, emotion, opinion } = router.query;
  const [values, setValues] = useState(null);
  const [assessment, setAssessment] = useState(3);
  const [awareness, setAwareness] = useState("");

  // バックエンドにデータを送信してレスポンスを取得
  useEffect(() => {
    const res = await fetch('https://tech0-gen-8-step3-app-py-12.azurewebsites.net/api/process', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ "evnt":event, "emotion":emotion, "opinion":opinion }),
    });
    const data = await res.json();

    setValues(data.values);
  };

  const handleSubmit = async () => {
    try {
      await axios.post("/api/feedback", {
        assess: assessment,
        awareness,
      });
      router.push("/catend");
    } catch (error) {
      console.error("Error sending feedback:", error);
    }
  };

  return (
    <div style={{ margin: "20px", fontFamily: "Arial, sans-serif" }}>
      {/* 猫の画像 */}
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <img
          src="/cat.png"
          alt="Cat"
          style={{ width: "120px", height: "auto" }}
        />
      </div>

      {/* 価値観分析結果 */}
      <div
        style={{
          padding: "20px",
          borderRadius: "10px",
          border: "1px solid #ccc",
          marginBottom: "20px",
        }}
      >
        {values ? <div>{values}</div> : <p>データを取得中...</p>}
      </div>

      {/* 評価 */}
      <h2>この価値観分析の結果はどう？</h2>
      <div
  style={{
    display: "flex",
    justifyContent: "space-evenly", // 均等配置
    marginBottom: "20px",
  }}
>
  {[1, 2, 3, 4, 5].map((score) => (
    <label
      key={score}
      style={{
        fontSize: "24px", // ラベルのフォントサイズ
        margin: "0 5px", // ラジオボタン間の余白を小さく
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <input
        type="radio"
        name="assessment"
        value={score}
        checked={assessment === score}
        onChange={() => setAssessment(score)}
        style={{
          width: "30px", // ラジオボタンの大きさを10倍
          height: "30px",
          transform: "scale(1.0)", // ラジオボタン自体の拡大
          marginBottom: "5px",
          cursor: "pointer",
        }}
      />
      {score}
    </label>
  ))}
</div>


      {/* コメント入力 */}
      <h2>今はどんな気持ち？</h2>
      <textarea
        value={awareness}
        onChange={(e) => setAwareness(e.target.value)}
        placeholder="ここに入力してください"
        style={{
          width: "80%",
          height: "80px",
          borderRadius: "10px",
          border: "1px solid #ccc",
          padding: "10px",
          marginBottom: "20px",
        }}
      />

      {/* 送信ボタン */}
      <button
        onClick={handleSubmit}
        style={{
          width: "80%",
          padding: "10px",
          fontSize: "28px",
          cursor: "pointer",
          backgroundColor: "#F9A825",
          border: "none",
          borderRadius: "30px",
          color: "white",
        }}
      >
        入力完了！
      </button>
    </div>
  );
}
