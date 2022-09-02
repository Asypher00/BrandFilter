import "./styles.css";
import BrandsFilter from "./brands-filter";
export default function App() {
  const brands1 = [
    { id: "0a", brandName: "puma" },
    { id: "0b", brandName: "adidas" },
    { id: "0c", brandName: "wildcraft" },
    { id: "0d", brandName: "levis" },
    { id: "0e", brandName: "celio" }
  ];

  return (
    <div className="App">
      <BrandsFilter brands1={brands1} />
    </div>
  );
}
