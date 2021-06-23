"use strict";

const { Builder, By, Key, until } = require("selenium-webdriver");
const { expect } = require("chai");

describe("Selenium-WebDriver Test", () => {
	const driver = new Builder().forBrowser("firefox").build();

	it("Ingresar al sitio cargando usuario y clave correctos pasa a la url de mapas", async () => {
		await driver.get("http://localhost:5000/ingresar");
		// espero
		await driver.sleep(2000);
		// en el campo usuario cargo "admin"
		let entrada = await driver.findElement(By.name("usuario"))
		entrada.sendKeys("admin", Key.TAB);
        let password = await driver.findElement(By.name("clave"))
		password.sendKeys("admin", Key.TAB)
		await driver.sleep(2000);
        password.sendKeys(Key.ENTER);
        //driver.findElement(By.linkText("Ingresar")).click();
        // espero
		await driver.sleep(2000);
		// obtengo el url al que se accedió
		let url = await (await driver).getCurrentUrl();
		// comparo url ingresado y url buscado
        expect(url).to.equal('http://localhost:5000/admin/mapa');
	});

	it("Ingresar al sitio cargando solo usuario no pasa a la url de mapas", async () => {
		await driver.get("http://localhost:5000/ingresar");
		// espero
		await driver.sleep(2000);
		// en el campo usuario cargo "admin"
		let entrada = await driver.findElement(By.name("usuario"))
		entrada.sendKeys("admin", Key.TAB);
        let password = await driver.findElement(By.name("clave"))
		await driver.sleep(2000);
        password.sendKeys(Key.ENTER);
        // espero
		await driver.sleep(2000);
		// obtengo el url al que se accedió
		let url = await (await driver).getCurrentUrl();
		// comparo url ingresado y url buscado
        expect(url).not.to.equal('http://localhost:5000/admin/mapa');
	});

	it("Ingresar al sitio cargando solo clave no pasa a la url de mapas", async () => {
		await driver.get("http://localhost:5000/ingresar");
		// espero
		await driver.sleep(2000);
		// en el campo usuario cargo "admin"
        let password = await driver.findElement(By.name("clave"))
		password.sendKeys("admin", Key.TAB);
        await driver.sleep(2000);
        password.sendKeys(Key.ENTER);
        // espero
		await driver.sleep(2000);
		// obtengo el url al que se accedió
		let url = await (await driver).getCurrentUrl();
		// comparo url ingresado y url buscado
        expect(url).not.to.equal('http://localhost:5000/admin/mapa');
	});

	it("Ingresar al sitio sin cargar usuario y clave no pasa a la url de mapas", async () => {
		await driver.get("http://localhost:5000/ingresar");
		// espero
		await driver.sleep(2000);
		// en el campo usuario cargo "admin"
        let password = await driver.findElement(By.name("clave"))
        await driver.sleep(2000);
        password.sendKeys(Key.ENTER);
        // espero
		await driver.sleep(2000);
		// obtengo el url al que se accedió
		let url = await (await driver).getCurrentUrl();
		// comparo url ingresado y url buscado
        expect(url).not.to.equal('http://localhost:5000/admin/mapa');
	});

	it("Ingresar al sitio cargando usuario y clave no correctas no pasa a la url de mapas", async () => {
		await driver.get("http://localhost:5000/ingresar");
		// espero
		await driver.sleep(2000);
		// en el campo usuario cargo "admin"
		let entrada = await driver.findElement(By.name("usuario"))
		entrada.sendKeys("admin-erroneo", Key.TAB);
        let password = await driver.findElement(By.name("clave"))
		password.sendKeys("admin-erroneo", Key.TAB);
        await driver.sleep(2000);
        password.sendKeys(Key.ENTER);
        // espero
		await driver.sleep(2000);
		// obtengo el url al que se accedió
		let url = await (await driver).getCurrentUrl();
		// comparo url ingresado y url buscado
        expect(url).not.to.equal('http://localhost:5000/admin/mapa');
	});

	it("Ingresar al sitio cargando usuario correcto y clave no correcta no pasa a la url de mapas", async () => {
		await driver.get("http://localhost:5000/ingresar");
		// espero
		await driver.sleep(2000);
		// en el campo usuario cargo "admin"
		let entrada = await driver.findElement(By.name("usuario"))
		entrada.sendKeys("admin", Key.TAB);
        let password = await driver.findElement(By.name("clave"))
		password.sendKeys("admin-erroneo", Key.TAB);
        await driver.sleep(2000);
        password.sendKeys(Key.ENTER);
        // espero
		await driver.sleep(2000);
		// obtengo el url al que se accedió
		let url = await (await driver).getCurrentUrl();
		// comparo url ingresado y url buscado
        expect(url).not.to.equal('http://localhost:5000/admin/mapa');
	});

	it("Ingresar al sitio cargando usuario incorrecto y clave correcta no pasa a la url de mapas", async () => {
		await driver.get("http://localhost:5000/ingresar");
		// espero
		await driver.sleep(2000);
		// en el campo usuario cargo "admin"
		let entrada = await driver.findElement(By.name("usuario"))
		entrada.sendKeys("admin-erroneo", Key.TAB);
        let password = await driver.findElement(By.name("clave"))
		password.sendKeys("admin", Key.TAB);
        await driver.sleep(2000);
        password.sendKeys(Key.ENTER);
        // espero
		await driver.sleep(2000);
		// obtengo el url al que se accedió
		let url = await (await driver).getCurrentUrl();
		// comparo url ingresado y url buscado
        expect(url).not.to.equal('http://localhost:5000/admin/mapa');
	});


    after(async () => driver.quit());
});


