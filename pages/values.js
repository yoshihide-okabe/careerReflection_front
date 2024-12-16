import Image from "next/image";
import { useRouter } from "next/router";

export default function CatEnd() {
  const router = useRouter();

  // 足跡の配列 (9個の黒 + 1個のカラー足跡)
  const footprints = Array(10).fill("black");
  footprints[Math.floor(Math.random() * 10)] = "color"; // カラー足跡をランダムに1つ配置

  const handleReview = () => {
    router.push("/"); // ルートに戻る
  };

  return (
    <div
      style={{
        margin: "20px",
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1 style={{ marginBottom: "20px" }}>一歩ずつ進んでいこう</h1>

      {/* 猫の画像 */}
      <div style={{ marginBottom: "20px" }}>
        <Image
          src="/cat.png" // 猫の画像ファイル
          alt="Cat"
          width={100}
          height={100}
        />
      </div>

      {/* 足跡の配置 */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px", // 足跡間の間隔
        }}
      >
        {footprints.map((color, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              justifyContent: index % 2 === 0 ? "flex-start" : "flex-end", // ジグザグ配置
              width: "100%",
              maxWidth: "200px", // 足跡の最大幅
            }}
          >
            <Image
              src={
                color === "black"
                  ? `/footprints.png` // 黒い足跡
                  : `/footprints_color.png` // カラー足跡
              }
              alt="Footprint"
              width={color === "black" ? 50 : 75} // カラーの場合は1.5倍
              height={color === "black" ? 50 : 75} // カラーの場合は1.5倍
            />
          </div>
        ))}
      </div>

      {/* ボタン */}
      <button
        onClick={handleReview}
        style={{
          marginTop: "20px",
          width: "80%",
          padding: "15px 30px",
          fontSize: "20px",
          cursor: "pointer",
          backgroundColor: "#F9A825",
          color: "white",
          border: "none",
          borderRadius: "30px",
        }}
      >
        10日間を振り返る
      </button>
    </div>
  );
}
