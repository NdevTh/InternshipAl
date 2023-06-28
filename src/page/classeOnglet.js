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
  
  class FormGenerator {
    constructor(containerSelector, options) {
      this.container = document.querySelector(containerSelector);
      this.options = options;
      this.form = this.createForm();
      this.appendForm();
    }
  
    createForm() {
      const form = document.createElement("form");
      form.classList.add("flex", "max-xs:flex-wrap", "max-xs:justify-start", "h-full", "mx-5", "items-center", "pr-3");
      
      this.options.forEach((options) => {
        const select = this.createSelect(options);
        form.appendChild(select);
      });
      
      return form;
    }
  
    createSelect(options) {
      const select = document.createElement("select");
      select.classList.add("m-2", "border", "border-black", "flex", "items-center", "pl-3", "h-full", "pr-3");
      
      options.forEach((option) => {
        const optionElem = document.createElement("option");
        optionElem.value = option;
        optionElem.textContent = option;
        
        select.appendChild(optionElem);
      });
      
      return select;
    }
  
    appendForm() {
      this.container.appendChild(this.form);
    }
  }

  const onglet = new ClasseOnglet();

// Call object methods or access its properties
// For example:
onglet.methodName();
console.log(onglet.propertyName);
  
  // Usage
  const sectionSelector = ".max-xs\\:hidden.flex.justify-between.content-center.text-xl.pt-4";
  new FormGenerator(sectionSelector, selectOptions);
  