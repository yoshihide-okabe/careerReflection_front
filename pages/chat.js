import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

export default function Result() {
  const router = useRouter();
  const { emotion: feel } = router.query; // 2番目の画面で選択した感情
  const [answers, setAnswers] = useState({
    answer1: "",
    answer2: "",
    answer3: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAnswers({ ...answers, [name]: value });
  };

  // 4番目の画面に入力内容を渡す
  const handleNext = () => {
    router.push({
      pathname: "/values",
      query: {
        event: answers.answer1, // 質問1の入力内容
        emotion: answers.answer2, // 質問2の入力内容
        opinion: answers.answer3, // 質問3の入力内容
      },
    });
  };
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div style={{ margin: "20px", fontFamily: "Arial, sans-serif" }}>
      {/* 質問1 */}
      <div
        style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}
      >
        <img
          src="/cat.png" // ローカルの猫画像
          alt="cat"
          style={{ width: "45px", height: "60px", marginRight: "10px" }}
        />
        <h2 style={{ fontSize: "24px", margin: 0 }}>
          今日はどんなことがあった？
        </h2>
      </div>
      <textarea
        name="answer1"
        value={answers.answer1}
        onChange={handleChange}
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

      {/* 質問2 */}
      <div
        style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}
      >
        <img
          src="/cat.png" // ローカルの猫画像
          alt="cat"
          style={{ width: "45px", height: "60px", marginRight: "10px" }}
        />
        <h2 style={{ fontSize: "24px", margin: 0 }}>
          そのときはどんな気持ちだった？
        </h2>
      </div>
      <textarea
        name="answer2"
        value={answers.answer2}
        onChange={handleChange}
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

      {/* 質問3 */}
      <div
        style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}
      >
        <img
          src="/cat.png" // ローカルの猫画像
          alt="cat"
          style={{ width: "45px", height: "60px", marginRight: "10px" }}
        />
        <h2 style={{ fontSize: "24px", margin: 0 }}>どんな意見を持った？</h2>
      </div>
      <textarea
        name="answer3"
        value={answers.answer3}
        onChange={handleChange}
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

      {/* 次に進むボタン */}
      <button
        onClick={handleNext}
        style={{
          marginTop: "20px",
          width: "80%", // テキスト入力枠と同じ幅
          padding: "15px 30px",
          fontSize: "28px",
          cursor: "pointer",
          backgroundColor: "#F9A825", // 落ち着いた黄色
          color: "white",
          border: "none",
          borderRadius: "30px", // 角丸を大きく
        }}
      >
        次に進む
      </button>
    </div>
  );
}
