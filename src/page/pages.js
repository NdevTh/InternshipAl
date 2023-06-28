const MenuBurger = onclick


// Define the menu items
const menuItems = [
    { href: "./page/sherlock.html", content: "<img class='h-full' src='./image/logoSherlok.svg' alt=''>" },
    { href: "./page/trial.html", content: "Trial" },
    { href: "./page/renewal.html", content: "Renewal" },
    { href: "./page/products.html", content: "Products" },
    { href: "./page/glossary.html", content: "Glossary" },
  ];
  
  // Create the <ul> element
  const ul = document.createElement("ul");
  ul.setAttribute("name", "menuCurtain");
  ul.classList.add("max-xs:hidden", "bg-blue-900", "z-40", "justify-center", "items-center", "p-1");
  
  // Iterate over the menu items array
  menuItems.forEach((item) => {
    // Create the <li> element
    const li = document.createElement("li");
  
    // Create the <a> element
    const a = document.createElement("a");
    a.classList.add("mx-3.5", "text-black", "font-bold", "text-lg");
    a.href = item.href;
    a.innerHTML = item.content;
  
    // Append the <a> element to the <li> element
    li.appendChild(a);
  
    // Append the <li> element to the <ul> element
    ul.appendChild(li);
  });
  
  // Append the <ul> element to the document body
  document.body.appendChild(ul);
  