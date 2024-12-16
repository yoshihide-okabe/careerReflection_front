import { useRouter } from "next/router";
import { useState } from "react";
import axios from "axios";

export default function Values() {
  const router = useRouter();
  const { values } = router.query;
  const parsedValues = values ? JSON.parse(values) : {};
  const [assessment, setAssessment] = useState(3); // 初期値: 3
  const [awareness, setAwareness] = useState("");

  const handleSubmit = async () => {
    try {
      await axios.post("/api/feedback", {
        assess: assessment,
        awareness,
      });
      router.push("/catend"); // 5番目の画面に遷移
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
        {parsedValues.value_analysis}
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
