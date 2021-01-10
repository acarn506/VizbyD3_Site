# VizbyD3

## Implemented a Dashboard for Housing Prices


### Data whereabouts 

Retrieved data from the House Pricing Kaggle Competition

- [Kaggle Link](https://www.kaggle.com/c/house-prices-advanced-regression-techniques)


### Server Side

- Setup a database with NeDB and load the housing data
- Created two different routes to retrieve housing data for the dashboard
- Note: only used the training data from the Kaggle Competition

```javascript
// House Prices dashboard routes
let housePrices = Datastore.create("./DB/housePrices.db");

// get just sale prices for histogram
app.get("/housePrices", checkMemberMiddleware, async function(req, res) {
  let data = await housePrices.find({}, { SalePrice: 1, _id: 0 });
  res.json(data);
});
```

```javascript 
// get specific house feature for scatter plot 
app.get("/housePrices/:feature", checkMemberMiddleware, async function(
  req,
  res
) {
  let feature = req.params.feature;
  let data = null;

  switch (feature) {
    case "OverallQual":
      data = await housePrices.find(
        {},
        { OverallQual: 1, SalePrice: 1, _id: 0 }
      );
      break;
      }
  res.json(data);
});
```


### Client Side

- Wanted to build a dashboard that displayed some insight on the target feature for this set of data/competition being "SalePrice"
- built a histogram chart and a Scatter plot that was capable of switching out different features.  

![Bar Chart](images/barChart.png)

- On the left are some info panels and the "SalePrice chart" is a button that switches the display back to the bar chart.  

![Scat Chart](images/scatChart.png)

- A display of buttons under the scat plot allows you to switch out which feature will be compared with the target feature "SalePrice" in order to get an idea of correlated relationships.  


## Wall of D3

These were a collection of some of my first ever D3 charts but converted to react components.  


## Link to My Site 

[Click Me!](https://vizbyd3.com/)




