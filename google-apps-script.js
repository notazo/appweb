// ══════════════════════════════════════════════════════
// GOOGLE APPS SCRIPT — Conectar formulario a Google Sheets
// ══════════════════════════════════════════════════════
//
// PASOS PARA CONFIGURAR:
//
// 1. Ve a Google Sheets (sheets.google.com) con tu cuenta contacto.notazo@gmail.com
// 2. Crea una nueva hoja llamada "Registros Notazo"
// 3. En la fila 1, pon estos encabezados:
//    A1: nombre | B1: correo | C1: universidad | D1: fecha
// 4. Ve a Extensiones > Apps Script
// 5. Borra todo el código que aparezca y pega este archivo completo
// 6. Guarda (Ctrl+S)
// 7. Click en "Implementar" > "Nueva implementación"
// 8. Tipo: "Aplicación web"
// 9. Ejecutar como: "Yo"
// 10. Quién tiene acceso: "Cualquier persona"
// 11. Click en "Implementar"
// 12. Copia la URL que te da
// 13. Pega esa URL en el archivo index.html donde dice TU_URL_DE_GOOGLE_APPS_SCRIPT_AQUI
//
// ══════════════════════════════════════════════════════

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    
    // Agregar fila con los datos
    sheet.appendRow([
      data.nombre,
      data.correo,
      data.universidad,
      data.fecha
    ]);
    
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'ok' }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ status: 'Notazo API activa' }))
    .setMimeType(ContentService.MimeType.JSON);
}
