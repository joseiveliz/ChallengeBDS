const { Given, When, Then } = require('@wdio/cucumber-framework');
const eBayPage = require('../page-objects/ebayPage'); 
const chai = require('chai');
const expect = chai.expect;

Given('I am on the eBay homepage', () => {
  eBayPage.open();
  
});

When(/^I search for (\w+)$/, (prod) => {
  eBayPage.search(prod);
});

Then('I should see the search results', () => {
  const resultCount = eBayPage.getSearchResultsCount();
  console.log(`Number of items found: ${resultCount}`);
  expect(resultCount).to.be.above(0);
  });
  
