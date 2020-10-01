
var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;



var driver = new webdriver.Builder().forBrowser('chrome').build();

driver.get('https://library-app.firebaseapp.com/');

driver.findElement(By.className('ember-text-field'))
    .then(ele => {
        console.log('found input', ele)
    })
    .catch(err => {
        console.log('1', err)
    })

driver.findElement(By.className('btn-primary'))
    .then(ele => {
        console.log('found button', ele)
    })
    .catch(err => {
        console.log('2', err)
    })

// driver.findElement(By.css('alert-success'))
// .catch(err => {
//     console.log('3', err)
// })

driver.findElements(By.css('ul li'))
    .then(arr_ele => {
        console.log('found array', arr_ele)
    })
    .catch(err => {
        console.log('4', err)
    })

driver.sleep(10000);
driver.quit();
