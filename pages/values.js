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
      <h2>この価値観分析の結果はどう？</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "20px",
        }}
      >
        {[1, 2, 3, 4, 5].map((score) => (
          <label
            key={score}
            style={{
              fontSize: "30px",
              margin: "0 10px",
              display: "flex",
              alignItems: "center",
            }}
          >
            {" "}
            {/* 大きく表示 */}
            <input
              type="radio"
              name="assessment"
              value={score}
              checked={assessment === score}
              onChange={() => setAssessment(score)}
              style={{
                transform: "scale(2.0)", // ラジオボタンを2倍に拡大
                marginRight: "10px", // ラベルとの間に余白を追加
                cursor: "pointer",
              }}
            />
            {score}
          </label>
        ))}
      </div>
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
