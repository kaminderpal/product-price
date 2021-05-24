# Total Cost of Order.

This service let user calculate the total cost of an order which include giving discount based on order value then apply sales tax on it based on the location where order is purchased.

## Prerequisites

You need to have following installed on your computer to complete the steps for this project.
  1. Nodejs v10 or later
  2. NPM

## Steps

Follow the below steps to set up the project locally.

1. Clone the repo.
2. Run the application
   1. Install packages with npm by running `npm install`.
   2. Start the app by running `npm start`.
   3. Browse the api from your browser `localhost:5000/totalcost/:numberOfItems/:pricePerItem/:provinceCode`, e.g  `localhost:5000/totalcost/5000/2/ON`
3. Run the unit test case with `npm test`
