﻿//ON READY INIT REQUIRED FUNTIONS OR ANY....
///******************************COMMON FUNCTIONS***************************//
$(document).ready(function () {

    ///IF WE NEED TO ADD DATATABLE EXCEL ... DOWNLOAD FUNCTIONALITY
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
    BindHumanResource();
    BindBusinessTrip();
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
    var $window = $(window);
    var $pane = $('#pane1');
    function checkWidth() {
        var windowsize = $window.width();
        if (windowsize > 440) {
            $('.addResponsiveTable').addClass('table-responsive');
        }
        else {
            $('.addResponsiveTable').removeClass('table-responsive');
        }
    }
    // Execute on load
    checkWidth();
    // Bind event listener
    $(window).resize(checkWidth);
});

///Bind HumanResource
function BindHumanResource() {
    $('#humanResource').DataTable({
        //"order": [[5, "desc"]],
        //"columnDefs": [{ "targets": 5, "type": "date-eu" }],
        "footerCallback": function (row, data, start, end, display) {

            var api = this.api(), data;
            // Remove the formatting to get integer data for summation
            var intVal = function (i) {
                return typeof i === 'string' ?
                    i.replace(/[\$,]/g, '') * 1 :
                    typeof i === 'number' ?
                        i : 0;
            };

            OfferDays = api
                .column(2)
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);

            // Update footer
            $(api.column(2).footer()).html(
                OfferDays
            );

            // Avarage need to calculate
            OfferAmountperday = api
                .column(3)
                .data()
                .reduce(function (a, b) {

                    return intVal(a) + intVal(b);

                }, 0);

            $(api.column(3).footer()).html(
                GetAvarage(OfferAmountperday, 'humanResource')
            );

            // total Trip Cost
            TotalOfferamount = api
                .column(4)
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);

            $(api.column(4).footer()).html(
                TotalOfferamount
            );

            // total Trip Cost
            RealEstimatedDays = api
                .column(5)
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);

            $(api.column(5).footer()).html(
                RealEstimatedDays
            );


            // Cost Per Day
            CostPerDay = api
                .column(6)
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);

            $(api.column(6).footer()).html(
                GetAvarage(CostPerDay, 'humanResource')
            );
            // Cost Per Day
            TotalEstimatedAmount = api
                .column(7)
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);

            $(api.column(7).footer()).html(
                TotalEstimatedAmount
            );

            TotalOfferamount = api
                .column(8)
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);

            $(api.column(8).footer()).html(
                TotalOfferamount
            );


            TotalEstimatedAmount = api
                .column(9)
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);

            $(api.column(9).footer()).html(
                TotalEstimatedAmount
            );
            Difference = api
                .column(10)
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);

            $(api.column(10).footer()).html(
                Difference
            );

        }
    });
}
///Bind BusinessTrip
function BindBusinessTrip() {
    $('#dtBusinessTrip').DataTable({
        //"order": [[5, "desc"]],
        //"columnDefs": [{ "targets": 5, "type": "date-eu" }],
        "footerCallback": function (row, data, start, end, display) {
            var api = this.api(), data;
            // Remove the formatting to get integer data for summation
            var intVal = function (i) {
                return typeof i === 'string' ?
                    i.replace(/[\$,]/g, '') * 1 :
                    typeof i === 'number' ?
                        i : 0;
            };

            totalTripDays = api
                .column(4)
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);

            // Update footer
            $(api.column(4).footer()).html(
                totalTripDays
            );
            // total Days Refunded
            totalDaysRefunded = api
                .column(5)
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);

            $(api.column(5).footer()).html(
                totalDaysRefunded
            );

            // total Trip Cost
            totalTripCost = api
                .column(6)
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);

            $(api.column(6).footer()).html(
                totalTripCost
            );

            // total Trip Cost
            Dailyfood = api
                .column(7)
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);

            $(api.column(7).footer()).html(
                totalTripCost
            );


            // total amount
            TotalAmount = api
                .column(8)
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);

            $(api.column(8).footer()).html(
                TotalAmount
            );
        }
    });
}
////Table to excel class
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
///Get Query string variables
function getUrlVars() {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for (var i = 0; i < hashes.length; i++) {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}
///Get Plane string
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
///GET AVARAGE
function GetAvarage(total = 0, id) {
    var count = $('#' + id).find('tbody').children().length;
    var average = 0;
    average = total / count;
    return average;
}

///******************************COMMON FUNCTIONS END***************************//



///******************************PROJECT SCREEN REQUIRED FUNCTIONS***************************//
///DUE TO WE ARE USING ONE MODAL POPUP FOR ADD EDIT
function ProjectAddEditShowHide(isedit = true) {
    if (isedit) {
        $('#prjAdd').hide();
        $('#prjUpdate').show();
    }
    else {
        $('#prjUpdate').hide();
        $('#prjAdd').show();
    }
}
///ON ADD CASE OPEN PROJECT MODAL
function OpenAddProjectModal() {
    ProjectAddEditShowHide(false);
    $('#addProject').modal('show');
}

///REQUIRED MUST 
var selecedRowThis = null;
///CRUD PROJECT ADD EDIT OPERATION
function OnProjectEditBindElements(event, id) {
    ProjectAddEditShowHide();   
    $('#project tr').removeClass("selected");
    $(event).closest("tr").addClass('selected');
    selecedRowThis = event;
    $('#txtData').val($(event).closest("tr").find('td').eq(0).text());
    $('#txtFornotore').val($(event).closest("tr").find('td').eq(1).text());
    $('#txtLotto').val($(event).closest("tr").find('td').eq(2).text());
    $('#txtCodiceboliaaccompagnamento').val($(event).closest("tr").find('td').eq(3).text());
    $('#txtOperatore').val($(event).closest("tr").find('td').eq(4).text());
    $('#txtNarticolicaricati').val($(event).closest("tr").find('td').eq(5).text());
    $('#txtTotaleimponibile').val($(event).closest("tr").find('td').eq(6).text());
    $('#txtTotaleiva').val($(event).closest("tr").find('td').eq(7).text());
    $('#addProject').modal('show');
}
///BIND ROW WITH DUMMY DATA
function DrawProjectRow() {
    $('#project').DataTable().row.add([
        $('#txtData').val(),
        $('#txtFornotore').val(),
        $('#txtLotto').val(),
        $('#txtCodiceboliaaccompagnamento').val(),
        $('#txtOperatore').val(),
        $('#txtNarticolicaricati').val(),
        $('#txtTotaleimponibile').val(),
        $('#txtTotaleiva').val(),
        '<a href="Dashboard/DetailResources?Project=' + $('#txtData').val() + '&amp;Projecttitle=' + $('#txtFornotore').val() + '&amp;Customer=' + $('#txtLotto').val() + '&amp;Projectmanager=' + $('#txtOperatore').val() + '&amp;Projectcode=' + $('#txtNarticolicaricati').val() + '" class="btn btn-primary btn-sm">DETTAGLIO</a><a href="javascript:void(0);" class="btn btn-success btn-sm" onclick="OnProjectEditBindElements(this,1);">Edit</a>',
    ]).draw();
}

///ON PROJECT ADD BUTTON CLICK
function OnProjectAdd() {
    $('#project tr').removeClass("selected");
    DrawProjectRow();  
    $('#addProject').modal('hide');
    ProjectAddEditShowHide(false);
}
//ON UPDATE SAVE
function OnProjectUpdateSave() {   
    $('#project').DataTable().row('.selected').remove().draw(false);
    DrawProjectRow();
    $('#addProject').modal('hide');
    selecedRowThis = null;
    ProjectAddEditShowHide(false);  
}
///******************************PROJECT SCREEN REQUIRED FUNCTIONS END***************************//