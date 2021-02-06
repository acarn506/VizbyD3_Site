const Datastore = require("nedb");
const db = new Datastore({
  filename: "./DB/" + "nycWeather.db",
  autoload: true
});

const weather = require("../JsonData/nyc_weather_data.json");

db.insert(weather, function(err, newDocs) {
  if (err) {
    console.log("Something went wrong");
    console.log(err);
  } else {
    console.log(`Add ${newDocs.length} new documents`);
  }
});
