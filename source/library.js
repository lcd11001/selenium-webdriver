
var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

        

        var driver = new webdriver.Builder().forBrowser('chrome').build();
        
        driver.get('https://library-app.firebaseapp.com/');
        
        driver.findElement(By.className('ember-text-field'))
        .catch(err => {
            console.log('1', err)
        })

        driver.findElement(By.className('btn-primary'))
        .catch(err => {
            console.log('2', err)
        })

        driver.findElement(By.css('alert-success'))
        .catch(err => {
            console.log('3', err)
        })
        
        
        driver.sleep(10000);
        driver.quit();
