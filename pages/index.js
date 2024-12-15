import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  const handleStart = () => {
    router.push("/feel"); // 次の画面に遷移
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>今日もお疲れ様でした</h1>
      <img
        src="/cat.png" // ローカルの猫画像
        alt="cat"
        style={{ width: "200px", height: "200px" }}
      />
      <h1>
        毎日の振り返りから
        <br />
        キャリアを考えましょう！
        <br />
        応援しています！
      </h1>
      <button
        onClick={handleStart}
        style={{
          marginTop: "20px",
          padding: "15px 30px",
          fontSize: "28px",
          cursor: "pointer",
          backgroundColor: "#F9A825", // 落ち着いた黄色
          color: "white",
          border: "none",
          borderRadius: "30px", // 角丸を大きく
          width: "300px", // ボタンの幅を今の倍に
        }}
      >
        キャリフレに進む
      </button>
    </div>
  );
}
