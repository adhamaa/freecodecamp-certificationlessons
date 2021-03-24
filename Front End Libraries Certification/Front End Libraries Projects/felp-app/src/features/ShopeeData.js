import React, { useEffect, useState } from "react";

export default function ShopeeData() {
  const [tempKeyword, setTempKeyword] = useState("");
  const [keyword, setKeyword] = useState("");
  const searchUrl = `https://shopee.com.my/api/v1/search_items/?by=relevancy&keyword=${keyword}&limit=50&newest=0&order=desc&page_type=search&version=2`;
  const [itemsArray, setItemsArray] = useState([]);
  const [itemIds, setItemIds] = useState([]);
  const [shopIds, setShopIds] = useState([]);
  const [product, setProduct] = useState({ itemId: "", shopId: "" });
  //   const [img, setImg] = useState("2b49ad7b2c5ceace6afdac5168ecc6ae");
  //   const [imgUrl, setImgUrl] = useState(`https://cf.shopee.com.my/file/${img}`);
  //   const productUrl = `https://shopee.com.my/api/v2/item/get?itemid=${itemId}&shopid=${shopId}`;

  const proxyUrl = "https://cors-anywhere.herokuapp.com/";

  function handleChange(event) {
    setTempKeyword(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setKeyword(tempKeyword);
    getArrayOfItems(searchUrl);
  }

  async function getArrayOfItems(url) {
    const res = await fetch(proxyUrl + url);
    const data = await res.json();
    setItemsArray(data.items);
  }

  useEffect(() => {
    getArrayOfItems(searchUrl);
  }, [keyword]);

  async function getProduct(url) {
    const res = await fetch(proxyUrl + url);
    const data = await res.json();
    console.log(data);
  }

  //   useEffect(() => {
  //     getProduct(productUrl);
  //   }, [productUrl]);
  console.log(itemIds);
  console.log(product);
  console.log(itemsArray);

  return (
    <div>
      {/* <form
        onSubmit={() => {
          handleSubmit();
        }}
      > */}
      {/* <label> */}
      {/* Search: */}
      <input type="text" onChange={handleChange} />
      {/* </label> */}
      <button onClick={handleSubmit}>Submit</button>
      {/* </form> */}
      <p>{keyword}</p>
      <ul>
        {itemIds.map((itemId) => (
          <li>{itemId}</li>
        ))}
      </ul>
    </div>
  );
}
