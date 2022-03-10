$(document).ready(function() {
// write your code here
// link https://www.google.com/maps?q=33.0977,-116.99572
    $.getJSON("./data.json", (data) => {
        $.each( data, (index, obj) => {
            $('#table').append(`
            <tr>
                <td>${obj.name}</td>
                <td>${obj.description}</td>
                <td>
                    <input type="button"
                    value="Open in Google Maps"
                    onclick="window.location.href='https://www.google.com/maps?q=${obj.location[0]},${obj.location[1]}'"
                    />
                </td>
            </tr>
            `);
        })
    });
});
