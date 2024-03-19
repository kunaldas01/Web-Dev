import { useSelector } from "react-redux";
import BagItem from "../components/BagItem";
import BagSummary from "../components/BagSummary";

function Bag() {
  const items = useSelector((store) => store.items);
  const bagItemsIds = useSelector((store) => store.bag);
  const finalItems = items.filter((item) => bagItemsIds.includes(item.id));

  return (
    <main>
      <div className="bag-page">
        {finalItems.map((item) => (
          <BagItem key={item.id} item={item} />
        ))}
        <BagSummary />
      </div>
    </main>
  );
}

export default Bag;
