function zebraStripe() {
    let body = document.getElementById('myBody');
    body.style.background = 'black';
    body.style.color = 'white';

    $("tr:nth-of-type(even)").css(
        "background", "white" );

    $('tr:nth-of-type(even)').css(
        "color", "black" );
}

function restoreStripe() {
    let body = document.getElementById('myBody');
    body.style.background = 'white';
    body.style.color = 'black';

    let tr = $("tr:nth-child(even)");
    tr.style.background = 'black';

    $("tr:nth-of-type(even)").css(
        "background", "black" );

}

