import { useRouter } from "next/router";
import { useState } from "react";

export default function Select() {
  const router = useRouter();
  const [selectedEmotion, setSelectedEmotion] = useState(null);

  const emotions = [
    { label: "心配", color: "#2196F3" }, // 青
    { label: "警戒", color: "#2196F3" }, // 青
    { label: "不愉快", color: "#2196F3" }, // 青
    { label: "恐れ", color: "#2196F3" }, // 青
    { label: "興奮", color: "#9C27B0" }, // 紫
    { label: "幸せ", color: "#9C27B0" }, // 紫
    { label: "元気", color: "#9C27B0" }, // 紫
    { label: "喜び", color: "#9C27B0" }, // 紫
    { label: "悲しみ", color: "#4CAF50" }, // 緑
    { label: "退屈", color: "#4CAF50" }, // 緑
    { label: "憂鬱", color: "#4CAF50" }, // 緑
    { label: "疲れ", color: "#4CAF50" }, // 緑
    { label: "安心", color: "#FF9800" }, // オレンジ
    { label: "楽しい", color: "#FF9800" }, // オレンジ
    { label: "リラックス", color: "#FF9800" }, // オレンジ
    { label: "満足", color: "#FF9800" }, // オレンジ
  ];

  const handleSelect = (emotion) => {
    setSelectedEmotion(emotion); // 選択内容を保存
    router.push({
      pathname: "/chat",
      query: { emotion: emotion.label },
    }); // 次の画面に遷移
  };

 return (
    <div
      style={{
        display: "flex",
        flexDirection: "column", // 縦方向に配置
        alignItems: "center", // 水平方向中央揃え
        justifyContent: "center", // 垂直方向中央揃え
        textAlign: "center",
        marginTop: "50px",
      }}
    >
      <h1>
        今日はどんな日だった？
        <br />
        今の気持ちを選んでみて
      </h1>
      <img
        src="/cat.png" // ローカルの猫画像
        alt="cat"
        style={{
          width: "150px",
          height: "200px",
          marginBottom: "20px", // 猫画像とボタンの間隔
        }}
      />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 120px)", // ボタンを4列に配置
          gap: "10px", // ボタン間の上下左右余白
          justifyContent: "center", // ボタンを中央揃え
        }}
      >
        {emotions.map((emotion, index) => (
          <button
            key={index}
            onClick={() => handleSelect(emotion.label)}
            style={{
              backgroundColor: emotion.color,
              color: "white",
              border: "none",
              borderRadius: "20px",
              width: "120px",
              height: "60px",
              fontSize: "18px",
              fontWeight: "bold",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {emotion.label}
          </button>
        ))}
      </div>
    </div>
  );  
}
