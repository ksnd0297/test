// server.js
const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");

const app = express();
const PORT = 4000;

// 미들웨어 설정
app.use(cors());
app.use(express.json({ limit: "10mb" })); // Base64 데이터 처리

// 업로드 경로 생성
const uploadDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

// 라우트
app.post("/upload", (req, res) => {
  const base64Data = req.body.image;

  if (!base64Data || !base64Data.startsWith("data:image")) {
    return res.status(400).json({ error: "Invalid image data" });
  }

  // 확장자 추출
  const matches = base64Data.match(/^data:image\/(\w+);base64,/);
  const ext = matches ? matches[1] : "png";

  const fileName = `image_${Date.now()}.${ext}`;
  const base64Body = base64Data.replace(/^data:image\/\w+;base64,/, "");
  const buffer = Buffer.from(base64Body, "base64");

  const filePath = path.join(uploadDir, fileName);
  fs.writeFileSync(filePath, buffer);

  console.log(`Saved: ${filePath}`);
  res.json({ message: "Upload successful", filename: fileName });
});

// 서버 시작
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
