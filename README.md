
Add the following in your `/etc/hosts` (c:\Windows\System32\Drivers\etc\hosts) file:
  
```
127.0.0.1 starter.test api.starter.test admin.starter.loctestal
```


# Opdracht:

* Zoek uit hoe dit project gebuild en opgestart kan worden, en documenteer de stappen in deze README file
* Voeg een endpoint toe aan de API, en documenteer wat deze doet op een correcte manier 
  * voeg een endpoint toe in de API (`GET: starter/random`)
  * Selecteer in de callback functie een random element uit de table `starter`, gebruik hiervoor de library ["knexjs"](http://knexjs.org/)
  * Zorg dat deze teruggevgeven wordt in volgend format { data: [{ uuid: `uuid`, title: `title` }] }
  * vervang de body door een functie toe die ervoor zorgt dat er slechts één element wordt teruggegeven (geen array). Je voegt hiervoor best een file toe in de `utils` map. 
* Zorg dat je na elke stap een (logische) commit doet, en zorg dat de commit message duidelijk opgesteld is volgens de conventie

For next week:
* Geef de teruggegeven waarde weer in de frontend, op een logische manier (waar is de axios call, waar wordt de connectie geconfigureerd, ...)
* Denk aan de conventies