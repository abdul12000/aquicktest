package com.quicktest.stepDef;

//import base.BaseUtil;
//import cucumber.api.java.After;
//import cucumber.api.java.Before;
import com.quicktest.base.BaseUtil;
import org.openqa.selenium.chrome.ChromeDriver;

import io.cucumber.java.After;
import io.cucumber.java.Before;

public class Hook extends BaseUtil {

    private BaseUtil base;

    public Hook(BaseUtil base) {
        this.base = base;
    }

    @Before
    public void setUp(){
        String chromeDriverLocation = "src/main/resources/drivers/chromedriver.exe";
        System.setProperty("webdriver.chrome.driver", chromeDriverLocation);
        base.driver = new ChromeDriver();
    }
    @After
    public void teardown(){
        base.driver.quit();
    }
}
