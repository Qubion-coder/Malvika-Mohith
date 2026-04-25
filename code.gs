function doGet(e) {
  return ContentService.createTextOutput("Script is running! Send a POST request to submit data.")
    .setMimeType(ContentService.MimeType.TEXT);
}

function doPost(e) {
  try {
    var spreadsheetId = '1hp6lgHPgU00F8gF_3YP-vVAG6aiPuy11bouFzeNldhM';
    var ss = SpreadsheetApp.openById(spreadsheetId);

    var body = e && e.postData && e.postData.contents ? e.postData.contents : '{}';
    var payload = JSON.parse(body);

    var formType = String(payload.formType || '').toLowerCase();
    var submittedAt = payload.submittedAt || new Date().toISOString();

    if (formType === 'rsvp') {
      var rsvpSheet = ss.getSheetByName('rsvp');
      if (!rsvpSheet) {
        rsvpSheet = ss.insertSheet('rsvp');
      }

      if (rsvpSheet.getLastRow() === 0) {
        rsvpSheet.appendRow(['submittedAt', 'name', 'attending']);
      }

      rsvpSheet.appendRow([
        submittedAt,
        payload.name || '',
        payload.attending || '',
      ]);
    } else if (formType === 'wish') {
      var wishSheet = ss.getSheetByName('wish');
      if (!wishSheet) {
        wishSheet = ss.insertSheet('wish');
      }

      if (wishSheet.getLastRow() === 0) {
        wishSheet.appendRow(['submittedAt', 'name', 'message']);
      }

      wishSheet.appendRow([
        submittedAt,
        payload.name || '',
        payload.message || '',
      ]);
    } else {
      throw new Error('Invalid formType. Expected rsvp or wish.');
    }

    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
