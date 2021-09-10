const { GoogleSpreadsheet } = require('../google-spreadsheet');

exports.handler = async (event, context) => {
  const data = JSON.parse(event.body);
  const { name, email, subject, msg, sheetTitle } = data;

  const sheetData = {
    name,
    email,
    subject,
    msg,
  }

  try {
    const googleSheet = require('./googleSheet.json');
    const doc = new GoogleSpreadsheet('1f74p-Mx5PPs_JohhjdH18426UXrX7GtNTTQxMI4PgjU');
    await doc.useServiceAccountAuth(googleSheet);
    await doc.loadInfo();

    const sheetsByTitle = Object.keys(doc.sheetsByTitle);
    const sheetExist = sheetsByTitle.find(sheet => sheet === sheetTitle)
    const sheetToUpdate = sheetExist
      ? doc.sheetsByTitle[sheetTitle]
      : await doc.addSheet({
          title: sheetTitle, 
          headerValues: ['name', 'email', 'subject', 'msg']
        });
    
    await sheetToUpdate.addRow(sheetData);

    return {
      statusCode: 200,
      body: JSON.stringify('worked'),
    }
  }

  catch (e) {
    return {
      statusCode: 500,
      body: JSON.stringify(e)
    }
  }
} 