import { useSelector } from "react-redux";
import HomeItems from "../components/HomeItems";
import EthinicWear from "../components/EthinicWear";
import HomeBanner from "../components/HomeBanner";
import Categories from "../components/Categories";
import AllInOnePlaceBanner from "../components/AllInOnePlaceBanner";

const Home = () => {
  const items = useSelector((store) => store.items);
  return (
    <main>
      <HomeBanner></HomeBanner>
      <Categories></Categories>
      <AllInOnePlaceBanner></AllInOnePlaceBanner>
      <div className="items-container">
        {items.map((item) => (
          <HomeItems key={item.id} item={item} />
        ))}
      </div>
    </main>
  );
};

export default Home;
