
function GenerateFn(){
  var Amount = document.getElementById("RentMoney").value;
  var TenantName = document.getElementById("TenantName").value;
  var OwnerName = document.getElementById("OwnerName").value;
  var StartDate = document.getElementById("StartDate").value;
  var EndDate = document.getElementById("EndDate").value;
  var Pan = document.getElementById("Pan").value;
  CompareDates(StartDate , EndDate,Amount,TenantName);
}
function CompareDates(StartDate, EndDate,Amount,TenantName){
   var StartDate = new Date(StartDate);
   var EndDate = new Date(EndDate);
   var StartMonth = StartDate.getMonth();
    var EndMonth = EndDate.getMonth();
   if(StartDate.getMonth() < EndDate.getMonth()){
      var NoMonths = EndMonth-StartMonth
   }
   var body = document.getElementsByTagName("body")[0];
   var tbl = document.createElement("table");
   var tbody = document.createElement("tbody");

  document.getElementById("RentForm").className = "dispnone"
  for(var i = 0 ;i<NoMonths; i++){
  	 var div = document.createElement('div');
     div.className = "RecieptBack";
     div.innerHTML = "Rent is <strong>"+Amount+"</strong> " + "for Tenant <strong>"+ TenantName+"</strong> You Owner is";
     body.appendChild(div);
  }

  for(var i=0; i< 2; i++){
  	var trow = document.createElement("tr");
    var tcol = document.createElement("td");
    tcol.innerHTML= "<p>cell in row <strong>"+Amount+"</strong>"+", column </p>";
    trow.appendChild(tcol);
    tbody.appendChild(trow);
  }

    tbl.appendChild(tbody);
    body.appendChild(tbl);



}
// on button click I need to assign the paragraph to the dom using dom
// Displau DOm 