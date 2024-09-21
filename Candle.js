document.addEventListener("DOMContentLoaded", function() {
    // Select the container where the <ul> will be appended
    let buttonsContainer = document.querySelector(".buttons");
    let productsContainer = document.querySelector(".products");

    // Create a <ul> element
    let ul = document.createElement("ul");

    // Array of list items data with data-fil attributes and text content
    const listItems = [
        { text: "All", dataFil: ".all", className: "active" },
        { text: "lotions", dataFil: ".lotions", className: "" },
        { text: "natural", dataFil: ".natural", className: "" },
        { text: "universal", dataFil: ".universal", className: "" }
    ];

    // Create and append <li> elements
    listItems.forEach(item => {
        let li = document.createElement("li");
        li.textContent = item.text; 
        li.dataset.fil = item.dataFil; 
        if (item.className) {
            li.classList.add(item.className); // Add class if provided
        }
        ul.appendChild(li); // Append <li> to <ul>
    });

    // Append <ul> to the container
    buttonsContainer.appendChild(ul);

    // Array of product data
    const products = [
        { imgSrc: "images/img9.jpg", classes: ["card", "all", "lotions"], name: "Bubbles", price: "200$" },
        { imgSrc: "images/img2.jpg", classes: ["card", "all", "lotions"], name: "faces", price: "100$" },
        { imgSrc: "images/img4.jpg", classes: ["card", "all", "lotions"], name: " Baptize him", price: "250$" },
        { imgSrc: "images/img5.jpg", classes: ["card", "all", "natural"], name: "the castle", price: "700$" },
        { imgSrc: "images/img6.jpg", classes: ["card", "all", "natural"], name: "classic", price: "200$" },
        { imgSrc: "images/img7.jpg", classes: ["card", "all", "natural"], name: "romanian", price: "900$" },
        { imgSrc: "images/img3.jpg", classes: ["card", "all", "universal"], name: "coincidence", price: "500$" },
        { imgSrc: "images/img11.jpeg", classes: ["card", "all", "universal"], name: "shapes", price: "670$" },
        { imgSrc: "images/img10.jpg", classes: ["card", "all", "universal"], name: " the hate", price: "520$" },
        
    ];

    // Create and append product cards
    products.forEach(product => {
        let card = document.createElement("div");
        card.classList.add(...product.classes);

        let img = document.createElement("img");
        img.src = product.imgSrc;
        img.alt ="";

        let dataDiv = document.createElement("div");
        dataDiv.classList.add("data", ...product.classes.slice(1)); 

        let h1 = document.createElement("h1");
        h1.textContent = product.name;
        h1.classList.add('name');
        let span = document.createElement("span");
        span.textContent = product.price;

        dataDiv.appendChild(h1);
        dataDiv.appendChild(span);

        card.appendChild(img);
        card.appendChild(dataDiv);

        productsContainer.appendChild(card);
    });


    // Filtering logic+
    let lis = document.querySelectorAll(".buttons ul li");
    let cards = document.querySelectorAll(".products .card");

    function filteration() {
        cards.forEach(card => {
            card.style.display = "none"; // Hide all cards
        });
        document.querySelectorAll(this.dataset.fil).forEach(ele => {
            ele.style.display = "block"; // Show the filtered cards
        });
    }

    lis.forEach(item => {
        item.addEventListener("click", function() {
            lis.forEach(ele => {
                ele.classList.remove("active"); // Remove active class from all
            });
            this.classList.add("active"); // Add active class to clicked item
            filteration.call(this); // Call filteration with the correct context
        });
    });
});
