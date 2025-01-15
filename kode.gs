function doGet(e) { 
  var x = HtmlService.createTemplateFromFile("index");
  var y = x.evaluate();
  var z = y.setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
  return z;
}

function checkLogin(username, password) {
  // Substitua com a URL da sua planilha
  var url = 'https://docs.google.com/spreadsheets/d/SEU_SPREADSHEET_ID/edit'; // Coloque a URL correta
  var ss = SpreadsheetApp.openByUrl(url);
  var webAppSheet = ss.getSheetByName('NomeDaAba'); // Substitua com o nome da sua aba na planilha
  var getLastRow = webAppSheet.getLastRow();
  var found_record = '';
  
  for (var i = 1; i <= getLastRow; i++) {
    if (webAppSheet.getRange(i, 1).getValue().toUpperCase() === username.toUpperCase() &&
        webAppSheet.getRange(i, 2).getValue().toUpperCase() === password.toUpperCase()) {
      found_record = 'TRUE';
      break;
    }
  }

  // Retorna 'TRUE' ou 'FALSE' baseado no resultado da pesquisa
  return found_record === '' ? 'FALSE' : 'TRUE';
}

function AddRecord(usernamee, passwordd, email, phone) {
  // Substitua com a URL da sua planilha
  var url = 'https://docs.google.com/spreadsheets/d/SEU_SPREADSHEET_ID/edit'; // Coloque a URL correta
  var ss = SpreadsheetApp.openByUrl(url);
  var webAppSheet = ss.getSheetByName('NomeDaAba'); // Substitua com o nome da sua aba na planilha
  webAppSheet.appendRow([usernamee, passwordd, email, phone]);
}

