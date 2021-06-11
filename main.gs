function onEdit(e){
  // Set a comment on the edited cell to indicate when it was changed.
  var range = e.INSERT_ROW;
    var s = SpreadsheetApp.getActiveSheet();
  var data = s.getDataRange().getValues();
  var data_len = data.length;
  for(var i=0; i<data_len; i++) {
    if(data[i][7] == "%number%") {
      s.getRange(i+1,8).setValue("79210010101");  //8 - № coll
      }
    }
}
