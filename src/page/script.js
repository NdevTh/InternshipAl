
const curtain (){


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

}

function generateSelects() {
    // Définir les valeurs d'options pour chaque select
    const selectOptions = [
        {name: 'Region', values: ['Region1', 'Region2', 'Region3', 'Region4']},
        {name: 'Cluster', values: ['Cluster1', 'Cluster2', 'Cluster3', 'Cluster4']},
        {name: 'Country', values: ['Country1', 'Country2', 'Country3', 'Country4']},
        {name: 'State', values: ['State1', 'State2', 'State3', 'State4']},
        {name: 'BP', values: ['bp1', 'bp2', 'bp3', 'bp4']},
        {name: 'BP2', values: ['bp21', 'bp22', 'bp23', 'bp24']},
        {name: 'CSM', values: ['CSM1', 'CSM2', 'CSM3', 'CSM4']},
        {name: 'KAM', values: ['KAM1', 'KAM2', 'KAM3', 'KAM4']}
    ];

    let form = document.createElement('form');
    form.className = "flex max-xs:flex-wrap max-xs:justify-start h-8 mx-5 items-center pr-3";

    // Créez chaque select en boucle
    for (let i = 0; i < selectOptions.length; i++) {
        let select = document.createElement('select');
        select.className = "m-2 border border-black flex items-center pl-3 h-12 pr-3";
        select.name = selectOptions[i].name;

        // Créez chaque option en boucle
        for (let j = 0; j < selectOptions[i].values.length; j++) {
            let option = document.createElement('option');
            option.value = selectOptions[i].values[j];
            option.textContent = selectOptions[i].values[j];
            select.appendChild(option);
        }

        form.appendChild(select);
    }

    return form;
}

// Utilisation de la fonction
let form = generateSelects();
document.body.appendChild(form); // Ajoutez le formulaire au corps du document


