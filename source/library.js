
var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;



var driver = new webdriver.Builder().forBrowser('chrome').build();

driver.manage().window().maximize();

driver.get('https://library-app.firebaseapp.com/');

driver.findElement(By.className('ember-text-field'))
    .then(ele => {
        console.log('found input')
    })
    .catch(err => {
        console.log('1', err)
    })

driver.findElement(By.className('btn-primary'))
    .then(ele => {
        console.log('found button')
        return ele.getText()
    })
    .then(text => {
        console.log('button text', text)
    })
    .catch(err => {
        console.log('2', err)
    })

// driver.findElement(By.css('alert-success'))
// .catch(err => {
//     console.log('3', err)
// })

// driver.findElements(By.className('nav-link'))
driver.findElements(By.css('ul li'))
    .then(arr_ele => {
        console.log('found array')
        return Promise.all(
            arr_ele.map(ele => {
                return ele.getText()
            })
        )
    })
    .then(arr_text => {
        arr_text.forEach(text => {
            console.log('menu text', text)
        })
    })
    .catch(err => {
        console.log('4', err)
    })

driver.sleep(10000);
driver.quit();
