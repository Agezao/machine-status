const trackService = require('../services/track.service');
const config = require('../config');
const jsonexport = require('jsonexport');

//

class TrackBusiness {
  
  constructor() { }

  // Public

  async exportCsv() {
    let raw = await trackService.list();
    let cleansed = [];

    for(var i = 0; i < raw.length; i++) {
      let line = raw[i];
      line.FormatedDate = new Date(line.Date).getDate() + '/' + (new Date(line.Date).getMonth() + 1) + '/' + new Date(line.Date).getFullYear();
      line.Weekday = new Date(line.Date).getDay() + 1;
      line.Hour = new Date(line.Date).getHours();
      line.Minute = new Date(line.Date).getMinutes();

      cleansed.push(line);
    }

    let csv = await new Promise((resolve, reject) => {
      jsonexport(cleansed, {rowDelimiter: ';'}, function(err, csv){
          if(err) return reject(err);
          return resolve(csv);
      });
    });

    csv = csv.replace(/\./g, ",");

    return csv;
  }
}

module.exports = TrackBusiness;