import { motion } from "motion/react";
import { MOTION_VARIANTS } from "../../constants";
import { Link } from "react-router";
import SplitText from "../../components/SplitText";

const HomePage = () => {
  return (
    <motion.div className="Page" custom={{ direction: "forward" }} initial="initial" animate="in" exit="out" variants={MOTION_VARIANTS}>
      <div className="App" style={{ backgroundColor: "lightblue", width: "100%", height: "100vh" }}>
        <div>Home Page</div>
        <SplitText />
        <Link to="/">Go to App</Link>
      </div>
    </motion.div>
  );
};

export default HomePage;
