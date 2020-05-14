package br.com.vitor.runners;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "src/test/resources/features/contas.feature",
		glue = "br.com.vitor.steps",
		tags = {"~@ignore"},
		plugin = {"pretty", "html:target/retport-html", "json:target/report.json"},
		monochrome = false,
		snippets = SnippetType.CAMELCASE,
		dryRun = false,
		strict = false
		)
public class RunnerTest {
	
	
	@BeforeClass
	public static void reset() {
		WebDriver driver = new ChromeDriver();
		driver = new ChromeDriver();
	    driver.get("https://srbarriga.herokuapp.com/");
	    driver.findElement(By.id("email")).sendKeys("vitor.santos.calado@gmail.com");
	    driver.findElement(By.name("senha")).sendKeys("Nagilla2601");
	    driver.findElement(By.tagName("button")).click();
	    driver.findElement(By.linkText("reset")).click();
	    System.out.println("Banco Resetado");
	    driver.quit();
	    
	}

}
