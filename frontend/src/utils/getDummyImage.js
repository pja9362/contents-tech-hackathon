import dummy1 from "../images/dummy1.png";
import dummy2 from "../images/dummy2.png";
import dummy3 from "../images/dummy3.png";
import dummy4 from "../images/dummy4.png";

const getDummyImage = (index) => {
    switch (index) {
      case 0:
        return dummy1;
      case 1:
        return dummy2;
      case 2:
        return dummy3;
      case 3:
        return dummy4;
      default:
        return dummy1;
    }
  };
  
  export default getDummyImage;