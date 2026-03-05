const productList = document.querySelector(".productlist");
console.log(productList);
const params = new URLSearchParams(window.location.search);
const category = params.get("category");

fetch(`https://kea-alt-del.dk/t7/api/products?category=${category}&limit=50`)
  .then((response) => response.json())
  .then((data) => {
    data.forEach((product) => {
      productList.innerHTML += `<article class="productlist ${product.soldout ? " soldout" : ""} ${product.discount ? " onsale" : ""}" >
<div class="image_elements_container">
<a href="product.html?id=${product.id}"> <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="puma sko" /></a>
<p class="soldout_text">Sold Out</p>
</div>
<h3><strong>${product.productdisplayname}/ ${product.articletype} / ${product.category}</strong></h3>
<p class="subtle"> ${product.subcategory}| ${product.brandname}</p>
<p class="price">DKK <span>${product.price}</span>,-</p>
<div class="onsale_element">
<p>Now DKK<span> ${Math.ceil((product.price / 100) * product.discount)}</span>,-</p>
<p class="onsale_badge"><span>${product.discount}</span>%</p></div>
<a class="product_link" href="product.html?id=${product.id}">Read More</a>
</article>`;
    });
  });
