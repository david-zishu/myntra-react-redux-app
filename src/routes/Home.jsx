import { HomeItem } from "../components/HomeItem";
import { useSelector } from "react-redux";
export const Home = () => {
  const items = useSelector((state) => state.items);

  return (
    <main>
      <div className="items-container">
        {items.map((item) => (
          <HomeItem key={item.id} item={item} />
        ))}
      </div>
    </main>
  );
};
