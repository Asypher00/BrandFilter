import { React, useState } from "react";
export default function BrandsFilter({ brands1 }) {
  const [brands, setBrands] = useState(brands1);
  const onChangeHandler = (event) => {
    console.log(1, event.target.value);
    const brandSearched = brands1.filter((item) =>
      item.brandName.includes(event.target.value)
    );
    console.log(2, brandSearched);
    setBrands(brandSearched);
    console.log(3, brands);
  };
  return (
    <div>
      <input
        onChange={onChangeHandler}
        type="text"
        placeholder="search"
      ></input>
      <div>
        <ul>
          {brands.map((e) => (
            <li key={e.id}>{e.brandName}</li>
          ))}
        </ul>
        {console.log(4, brands)}
      </div>
    </div>
  );
}
