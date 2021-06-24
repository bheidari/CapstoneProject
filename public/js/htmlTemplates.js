const headerInnerHtml = '<div class="container-fluid bg-info text-white">' +
    '        <div class="row">' +
    '            <div class="col-sm-3">' +
    '                <p>Tel: 122 456-789</p>' +
    '            </div>' +
    '            <div class="col-sm-3">' +
    '                <p>Location: 1111 1111</p>' +
    '            </div>' +
    '            <div class="col-sm-6">' +
    '                <p>somthing else</p>' +
    '            </div>' +
    '        </div>' +
    '</div>';

function header() {
    return headerInnerHtml;
}

var footerInnerHtml = '<div class="container-fluid bg-info text-white">'+
'        <br>'+
'        <div class="row">'+
'            <div class="col-sm-4">'+
'                <dl>'+
'                    <dt>About Us</dt>'+
'                    <dd>- a note here</dd>'+
'                    <dd>- a note here</dd>'+
'                    <dd>- uuuuuuuuuuu'+
'                </dl>'+
'            </div>'+
'            <div class="col-sm-4">'+
'                <dl>'+
'                    <dt>Terms</dt>'+
'                    <dd>- a note here</dd>'+
'                    <dd>- a note here</dd>'+
'                    <dd>- a note here</dd>'+
'                </dl>'+
'            </div>'+
'            <div class="col-sm-4">'+
'                <dl>'+
'                    <dt>Contact us</dt>'+
'                    <dd>- Email: ...........</dd>'+
'                    <dd>- Tel: ...............</dd>'+
'                    <dd>- .............</dd>'+
'                </dl>'+
'            </div>'+
'        </div>'+
'</div>';
	
function footer() {
    return footerInnerHtml;
}


