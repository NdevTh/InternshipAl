
    // <!-- Start for menuCurtain -->

  // Get reference  to the elements
  const button = document.getElementById("showMenu");
  const menu = document.getElementById("menuCurtain");
  
  // Function to handle button clic
  function handleClick(){
      // Toggle the "hidden" class one the menu - add it if visible, remove it if hidden
      menu.classList.toggle("hidden");
  }
  
  // Add click event listener to the button
  button.addEventListener("click",handleClick);
      
  // Get references to the elements
  const menuCurtain = document.getElementById("menuCurtain");
  const closeCurtainButton = document.getElementById("closeCurtain");

  // Function to hide the menu curtain
  function hideMenuCurtain() {
    menuCurtain.classList.add("hidden");
  }

  // Add click event listener to the close curtain button
  closeCurtainButton.addEventListener("click", hideMenuCurtain);

  // <!-- end menuCurtain -->

// automatisated onglet 
// Array of select options
const selectOptions = [
["Région1", "Région2", "Région3", "Région4"],
["Cluster1", "Cluster2", "Cluster3", "Cluster4"],
["Country 1", "Country 2", "Country 3", "Country 4"],
["State 1", "State 2", "State 3", "State 4"],
["BP-1 1", "BP-1 2", "BP-1 3", "BP-1 4"],
["BP-21 1", "BP-21 2", "BP-21 3", "BP-21 4"],
["CSM 1", "CSM 2", "CSM 3", "CSM 4"],
["KAM 1", "KAM 2", "KAM 3", "KAM 4"]
];

// Get the section element
const section = document.querySelector(".max-xs\\:hidden.flex.justify-between.content-center.text-xl.pt-4");

// Create the form element
const form = document.createElement("form");
form.classList.add("flex", "max-xs:flex-wrap", "max-xs:justify-start", "h-8", "mx-5", "items-center", "pr-3");

// Iterate over the select options
selectOptions.forEach((options) => {
// Create the select element
const select = document.createElement("select");
select.classList.add("m-2", "border", "border-black", "flex", "items-center", "pl-3", "h-12", "pr-3");

// Iterate over the options for each select
options.forEach((option) => {
  // Create the option element
  const optionElem = document.createElement("option");
  optionElem.value = option;
  optionElem.textContent = option;
  
  // Append the option to the select element
  select.appendChild(optionElem);
});

// Append the select element to the form
form.appendChild(select);
});

// Append the form to the section
section.appendChild(form);

// end function automatised onglet
