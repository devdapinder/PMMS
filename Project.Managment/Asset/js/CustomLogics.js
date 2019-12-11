//ON READY INIT REQUIRED FUNTIONS OR ANY....

$(document).ready(function () {
    //$('#project').DataTable(
    //    {
    //        dom: 'Bfrtip',
    //        buttons: [
    //            {
    //                extend: 'csv',
    //                text: 'Export to Excel  ',
    //                className: 'btn btn-success fa-file-excel-o',
    //                //exportOptions: {
    //                //    modifier: {
    //                //        page: 'current'
    //                //    }
    //                //}
    //            }
    //            //'copy', 'csv', 'excel', 'pdf', 'print'
    //        ]
    //    }
    //);
    $('#project').DataTable();


    //$('#project').DataTable({
    //    language: {
    //        processing: "Traitement en cours...",
    //        search: "Rechercher&nbsp;:",
    //        lengthMenu: "Afficher _MENU_ &eacute;l&eacute;ments",
    //        info: "Affichage de l'&eacute;lement _START_ &agrave; _END_ sur _TOTAL_ &eacute;l&eacute;ments",
    //        infoEmpty: "Affichage de l'&eacute;lement 0 &agrave; 0 sur 0 &eacute;l&eacute;ments",
    //        infoFiltered: "(filtr&eacute; de _MAX_ &eacute;l&eacute;ments au total)",
    //        infoPostFix: "",
    //        loadingRecords: "Chargement en cours...",
    //        zeroRecords: "Aucun &eacute;l&eacute;ment &agrave; afficher",
    //        emptyTable: "Aucune donnée disponible dans le tableau",
    //        paginate: {
    //            first: "Premier",
    //            previous: "Pr&eacute;c&eacute;dent",
    //            next: "Suivant",
    //            last: "Dernier"
    //        },
    //        aria: {
    //            sortAscending: ": activer pour trier la colonne par ordre croissant",
    //            sortDescending: ": activer pour trier la colonne par ordre décroissant"
    //        }
    //    }
    //});
});

var tableToExcel = (function () {
    var uri = 'data:application/vnd.ms-excel;base64,'
        , template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body><table>{table}</table></body></html>'
        , base64 = function (s) { return window.btoa(unescape(encodeURIComponent(s))) }
        , format = function (s, c) { return s.replace(/{(\w+)}/g, function (m, p) { return c[p]; }) }
    return function (table, name) {
        if (!table.nodeType) table = document.getElementById(table)
        var ctx = { worksheet: name || 'Worksheet', table: table.innerHTML }
        window.location.href = uri + base64(format(template, ctx))
    }
})();