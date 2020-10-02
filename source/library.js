
var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;



var driver = new webdriver.Builder().forBrowser('chrome').build();
driver.manage().window().maximize();
driver.manage().setTimeouts({ implicit: 5000 })

driver.get('https://library-app.firebaseapp.com/');

driver.findElement(By.css('input'))
    .sendKeys('lcd@email.com')
    .then(() => {
        console.log('typing lcd@email.com')
    })
    .catch(err => {
        console.log('1', err)
    })

driver.findElement(By.className('btn-primary'))
    .click()
    .then(() => {
        console.log('press the button')
    })
    .catch(err => {
        console.log('2', err)
    })

// use setTimeouts instead
// driver.sleep(3000)

driver.findElement(By.css('.alert-success'))
    .getText()
    .then(txt => {
        console.log('alert success with text ' + txt)
    })
    .catch(err => {
        console.log('3', err)
    })

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
