import SoupsImg from "../assets/Images/1.Home Page/Soups.png";
import DessertsImg from "../assets/Images/1.Home Page/Desserts.png";
import WafflesImg from "../assets/Images/1.Home Page/Waffles.png";
import SideDishesImg from "../assets/Images/1.Home Page/SideDishes.png";

export const items = [
  {
    name: "Soups",
    img: SoupsImg,
    path: "/dishes/soups", 
  },
  {
    name: "Desserts",
    img: DessertsImg,
    path: "/dishes/desserts", 
  },
  {
    name: "Waffles",
    img: WafflesImg,
    path: "/dishes/WaffelsPage",
  },
  {
    name: "Side Dishes",
    subName: "Pickles and Snacks",
    img: SideDishesImg,
    path: "/dishes/SidedishesPage",
  },
];
