var html = '<table>';
for (var i=0; i<10; i++) {
    html += '<tr>';
    for (var j=0; j<10; j++) {
        html += '<td id="'+i+'_'+j+'"></td>';
    }
    html += '</tr>';
}
html += '</table>';