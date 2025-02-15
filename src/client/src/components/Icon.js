import { SiStackblitz } from "react-icons/si";
import { FaSun, FaStopwatch } from "react-icons/fa";
import { GiBulletBill } from "react-icons/gi";
import { BsPuzzleFill } from "react-icons/bs";
const Icon = ({ style }) => {
    switch (style) {
      case "Bullet": {
        return <GiBulletBill className={style || ""} />;
      }
      case "Blitz": {
        return <SiStackblitz className={style || ""} />;
      }
      case "Tactics": {
        return <BsPuzzleFill className={style || ""} />;
      }
      case "Rapid": {
        return <FaStopwatch className={style || ""} />;
      }
      default:
        return;
    }
  };

  export default Icon;