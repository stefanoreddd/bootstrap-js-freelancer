let discountCodesUser = ["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"];



function calculateWorkPrice(event){
    event.preventDefault();

    console.log("FUNZIONA!!!!");

    let workPrice = 1;


    let selectedWorkType = document.getElementById("work-type").value;
    console.log(selectedWorkType);

    switch(selectedWorkType){
        case "backend":
            workPrice *= 20.50;
            break;
        case "frontend":
            workPrice *= 15.30;
            break; 
        case "project-analysis":
            workPrice *= 33.60;
            break;
    }

    let selectedHours = document.getElementById("hoursWork").value;
    selectedHours = parseInt(selectedHours);

    workPrice = selectedWorkType * selectedHours;
    workPrice = parseFloat(workPrice);

    let discountCode = document.getElementById("coupon").value;

    let isDiscountCodeAvailable = discountCodesUser.includes(discountCode);

    if(isDiscountCodeAvailable){
        workPrice = workPrice * 0,25;
        console.log("Al prezzo è stato inserito un codice sconto del 25%");
    } else if (discountCode != ""){
        document.getElementById("coupon-error").innerHTML = "Il codice sconto non è valido!";
        discountCode.classList.add("coupon-red");
    }

    document.getElementById("price").innerHTML = "€ " + workPrice.toFixed(2);

    
}



function removeElementFromArray(array, elementToRemove){

    const index = array.indexOf(elementToRemove);

    array.splice(index, 1);

    return array;

}
