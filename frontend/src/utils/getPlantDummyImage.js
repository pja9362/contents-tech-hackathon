import dummy1 from "../images/plantdummy1.jpeg";
import dummy2 from "../images/plantdummy2.jpeg";
import dummy3 from "../images/plantdummy3.jpeg";

const getPlantDummyImage = (index) => {
    switch (index) {
      case 0:
        return dummy1;
      case 1:
        return dummy2;
      case 2:
        return dummy3;
      default:
        return dummy1;
    }
  };
  
  export default getPlantDummyImage;