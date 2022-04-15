
//variable declaration
let pool = 10000;
document.getElementById('pool').innerHTML = pool;
let brian_percentage = 40;
let brenda_percentage = 20;
let remaining_percentage = 40;

let form = document.forms.add_share_holder_form;

//listener
form.onsubmit = processForm;

// function to process form that
function processForm(){

    let form_name = form.name;
    let form_percentage = form.percentage;

    //validating user input
    if( form_name.value === '' || form_name.value === null){

        form_name.style.background = "red";

        form_name.style.color = "white";

        form_name.focus();

        return false;
    }
    if( form_percentage.value === '' || form_percentage.value === null ||  form_percentage.value > share_holder_object.available ){

        form_percentage.style.background = "red";

        form_percentage.style.color = "white";

        form_percentage.focus();

        return false;
    }
    //calling fuction to add a new share holder
    share_holder_object.addNewShareHolder(form_name.value ,form_percentage.value);
    document.getElementById('available').innerHTML = share_holder_object.available;
    document.getElementById('available_shares').innerHTML = share_holder_object.available;

    // emptying the form fields
    form_percentage.value = '';
    form_name.value = '';
    return false;
}

// share holders object
let share_holder_object = {
    brian :brian_percentage,
    brenda : brenda_percentage,
    available:remaining_percentage,
    addNewShareHolder: function (name ,percentage){
        if(share_holder_object.available !== 0 && percentage <= share_holder_object.available) {
            share_holder_object[name] = percentage;
            share_holder_object.available = ( share_holder_object.available - percentage);
            addTableRow(name ,percentage);
        }else{
            alert('We\'ve run out of shares!')
        }

    }
};

//function that adds a new record to share holders table
function addTableRow(name ,percentage) {
    let table = document.getElementById("share_holder_summary");
    let row = table.insertRow(table.rows.length);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    cell1.innerHTML = name;
    cell2.innerHTML = '$' + percentage/100 * pool ;
    cell3.innerHTML = percentage + '%';
}



