const params = new URLSearchParams(window.location.search);
console.log(params);
const id = params.get("id");
const productContainer = document.querySelector(".product_container");

fetch(`https://kea-alt-del.dk/t7/api/products/${id}`)
  .then((response) => response.json())
  .then((data) => {
    productContainer.innerHTML = ` 
        <img  src="https://kea-alt-del.dk/t7/images/webp/640/${id}.webp" alt="Puma sko" />

        <article class="productsingle" ${data.soldout ? " soldout" : ""} ${data.discount ? " onsale" : ""}"  >
          <h2>Product Information</h2>
          <p><strong>Model name</strong></p>
          <p>${data.variantname}</p>

          <p><strong>Color</strong></p>
          <p>${data.basecolour}</p>

          <p><strong>Inventory Number</strong></p>
          <p>${data.relid}</p>

             <p>Now DKK<span> ${Math.ceil((data.price / 100) * data.discount)}</span>,-</p>

           <p class="onsale_badge"><span>${data.discount}</span>%</p></div>

          <a href="product.html">Add to basket</a>


        </article>
      `;
  });

//    <p><strong>Price</strong></p>
//            <p class="price">DKK ${data.price},-</p>
