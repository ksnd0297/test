import { motion } from "motion/react";
import { MOTION_VARIANTS } from "./constants";
import { Link } from "react-router";

function App() {
  return (
    <motion.div className="Page" custom={{ direction: "forward" }} initial="initial" animate="in" exit="out" variants={MOTION_VARIANTS}>
      <div className="App" style={{ backgroundColor: "yellow", width: "100%", height: "100vh" }}>
        <div>App Page</div>
        <Link to="/home">Go to Home</Link>
        <Link to="/upload">Go to Upload</Link>
      </div>
    </motion.div>
  );
}

export default App;
