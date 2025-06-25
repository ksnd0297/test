import { useState, type ChangeEvent } from "react";
import { motion } from "motion/react";
import { Link } from "react-router";
import { MOTION_VARIANTS } from "../../constants";

const UploadPage: React.FC = () => {
  const [preview, setPreview] = useState<string | null>(null);

  const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === "string") {
          resolve(reader.result);
        } else {
          reject("FileReader result is not a string");
        }
      };
      reader.onerror = () => reject("FileReader error");
      reader.readAsDataURL(file);
    });
  };

  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      const base64 = await fileToBase64(file);
      setPreview(base64);

      const res = await fetch("http://192.168.219.103:4000/upload", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ image: base64 }),
      });

      const data = await res.json();
      alert(`Upload complete: ${data.filename}`);
    } catch (err) {
      console.error(err);
      alert("Upload failed.");
    }
  };

  return (
    <motion.div className="Page" custom={{ direction: "forward" }} initial="initial" animate="in" exit="out" variants={MOTION_VARIANTS}>
      <div className="App" style={{ backgroundColor: "lightblue", width: "100%", height: "100vh" }}>
        <div style={{ padding: 20 }}>
          <h1>Image Upload (Base64)</h1>
          <input type="file" accept="image/*" onChange={handleFileChange} />
          {preview && (
            <div style={{ marginTop: 20 }}>
              <h3>Preview:</h3>
              <img src={preview} alt="preview" width="300" />
            </div>
          )}
        </div>
        <Link to="/">Go to App</Link>
      </div>
    </motion.div>
  );
};

export default UploadPage;
