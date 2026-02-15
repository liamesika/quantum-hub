// =============================================================
// Google Apps Script — RSVP Webhook for Google Sheets
// =============================================================
//
// SETUP INSTRUCTIONS:
//
// 1. Go to https://script.google.com and create a new project
// 2. Paste this entire script into the Code.gs file
// 3. Click "Deploy" > "New deployment"
// 4. Choose type: "Web app"
// 5. Set "Execute as": "Me"
// 6. Set "Who has access": "Anyone"
// 7. Click "Deploy" and copy the Web App URL
// 8. Paste that URL into index.html where it says:
//    YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL
//
// Google Sheet columns (auto-created on first submission):
// A: Timestamp
// B: Full Name
// C: Email
// D: Company
// E: Title
// F: Country
// G: Status
//
// =============================================================

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // Create headers if sheet is empty
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        'Timestamp',
        'Full Name',
        'Email',
        'Company',
        'Title',
        'Country',
        'Status'
      ]);

      // Bold the header row
      sheet.getRange(1, 1, 1, 7).setFontWeight('bold');
    }

    var data = JSON.parse(e.postData.contents);

    // Append the new registration row
    sheet.appendRow([
      new Date(),                        // Timestamp
      data.fullName  || '',              // Full Name
      data.email     || '',              // Email
      data.company   || '',              // Company
      data.title     || '',              // Title
      data.country   || '',              // Country
      'PENDING'                          // Status — always starts as PENDING
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ result: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: 'error', message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Required for CORS preflight (optional, but good practice)
function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ status: 'ok', message: 'RSVP webhook is active.' }))
    .setMimeType(ContentService.MimeType.JSON);
}
