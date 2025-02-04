---
title: Interventi
sidebar_position: 13
---

In questa tab vengono configurati tutti i parametri inerenti al cliente da utilizzare negli interventi dell'area Gestione Progetti. 

Sono presenti 2 ulteriori tab: 

### Oneri di Viaggio

qui possono essere inserite tutte le spese che verranno proposte negli interventi come Spese da Fatturare. 

**Tipologia di spese viaggio**

**Tipo Spesa**: tipologia della spesa da proporre. Verranno visualizzate nell'elenco solamente le spese con flag "Viaggio" attivo nella loro configurazione

**Tipo Forfait**: se il tipo spesa inserito è configurato con "Tipo spesa viaggio" = forfait, il campo sarà abilitato per scegliere il tipo forfait da utilizzare. 

**Importo**: importo della spesa. Abilitato per tutti i tipi spesa che non siano distanza o ore di viaggio. 

**Ore Viaggio**: ore di viaggio per il raggiungimento della sede del cliente/sede dell'intervento. Abilitato soltanto se il tipo spesa è configurato correttamente come "Ore di viaggio"

**KM andata/Ritorno**: KM di viaggio per il raggiungimento della sede del cliente/sede dell'intervento. Abilitato soltanto se il tipo spesa è configurato correttamente come "Distanza"

**Costo orario**: spesa oraria, verrà moltiplicata per le ore di viaggio. Abilitato soltanto se il tipo spesa è configurato correttamente come "Ore di viaggio"

**Costo KM**: spesa al km, verrà moltiplicata per i km indicati. Abilitato soltanto se il tipo spesa è configurato correttamente come "Distanza"

**Tipo di contratto della risorsa e descrizione**: utilizzato come filtro per selezionare la spesa corrispondente al contratto configurato nell'anagrafica risorsa. 

**Sede di lavoro**: utilizzato come filtro per selezionare la spesa corrispondente alla sede di lavoro configurata nell'anagrafica risorsa. 

**Tipo Intervento**: utilizzato come filtro per selezionare la spesa corrispondente al tipo intervento utilizzato

**Spesa viva**: se abilitato, in fase di calcolo spese considererà anche i dati dichiarati dalla risorsa. 
:::note[Esempio]
in anagrafica cliente configuriamo la spesa Costo km 0,50 senza indicare i KM andata/ritorno ed abilitiamo il flag. 
La risorsa inserisce l'intervento dichiarando nelle spese sostenute la stessa spesa indicando 150 km.
Al cambio stato intervento da Inserito in Da approvare, le spese verranno ricalcolate, ed in presenza di questo flag attivo, considererà i km dichiarati dalla risorsa e li inserirà nelle spese da fatturare assieme al valore Costo Km indicato in anagrafica cliente. 
La stessa logica è applicata per le altre tipologie  di spesa. 
:::

**Tipologia di spese viaggio - dettaglio forfait**

il forfait essendo composto da più spese che in fattura verranno inserite come 1 riga cumulativa, permette in questo riquadro la visualizzazione del dettaglio del forfait, e l'indicazione dell'importo delle singole voci. La riga forfait in intervento ed in fattura verrà inserita come somma di tutti i valori configurati in questa videata. 

**Tipo Spesa**: tipologia della spesa considerata nel forfait

**Importo**: importo per la spesa

**Una tantum**: indipendentemente dal numero di risorse e/o giorni di servizio all'interno dello stesso intervento, la spesa verrà considerata 1 sola volta. 

**Per giorno**: in base ai giorni di servizio all'interno dello stesso intervento, la spesa verrà moltiplicata per ogni giornata di servizio. 

**Per risorsa**: in base risorse indicate nei servizi all'interno dello stesso intervento, la spesa verrà moltiplicata per ogni risorsa. 
:::note[Esempio]
il forfait è composto da: 
Autostrada: 100
Pranzo: 50

Nell'intervento della durata di una giornata sono presenti 3 risorse, quindi verranno dichiarate 3 righe di servizio. 
La spesa forfait da fatturare risulterà in totale 250 (100 autostrada fissi, 50 pranzo per ogni risorsa). Il calcolo verrà effettuato al cambio stato intervento da "Inserito" in "Da approvare"
:::


### Impostazioni del piano di fatturazione
Le regole da applicare al piano di fatturazione dell'intervento possono essere stabilite nei parametri generali della Gestione Progetti, ed essere quindi valide per tutti i clienti, oppure specifiche per cliente. 
La procedura di calcolo del piano di fatturazione controllerà prima la presenza di configurazioni specifiche per il cliente, e se non presenti, considererà quelle presenti nei parametri generali. 

**Sede di Lavoro** e **Tipo intervento** : utilizzati come filtro; se vuoti vengono considerati validi per tutte le sedi di lavoro e per tutti i tipi interventi. Se invece configurati, verranno presi in considerazione solamente in corrispondenza della sede di lavoro configurata nell'anagrafica della risorsa che svolge l'intervento, e del tipo intervento utilizzato. 

**Tipo fascia oraria**: indica la fascia oraria di lavoro concordata con il cliente, ed il monte ore giornaliero. 
:::note[Osservazione] 
Si potrà stabilire che per un cliente il monte ore giornaliero sono 7 ore, mentre per un altro 8. Le ore indicate nella fascia oraria verranno utilizzate nella conversione tra diverse unità di misura temporali: 
- es. se abbiamo svolto 7 ore dal cliente e la sua fascia corrisponde a 7 ore, nella conversione in Giorni avremo come quantità 1. 
- se invece abbiamo svolto 7 ore dal cliente e la sua fascia corrisponde a 8 ore, nella conversione in Giorni avremo come quantità 0.875. 

La fascia verrà inoltre considerata per il calcolo del fuori orario da tariffare con prezzo diverso, sia per il superamento del monte ore totale sia degli orari stabiliti. 
:::

**Tipo fascia oraria notturna**: il funzionamento è analogo come per il campo "Tipo Fascia oraria" ma verrà utilizzato nel caso di effettuazione servizi sia diurni che notturni, per permettere diversa tariffazione. 

**Tipo arrotondamento**: indica la regola matematica con cui arrotondare le ore di lavoro. L'arrotondamento verrà poi applicato sulle ore complessive dell'intervento. Es. totale ore 7,45 h, se previsto arrotondamento alla mezz'ora, le ore fatturate saranno 8. 

**Categoria commerciale**: ulteriore filtro per la selezione della regola per il piano di fatturazione. Se vuoto verrà considerato valido per tutte le categorie commerciali clienti, nel caso di indicazione specifica verrà selezionata quella corrispondente inserita in anagrafica cliente - tab Amministrazione

**Includi ore viaggio nei servizi**: permette di considerare le ore di viaggio presenti nell'intervento nella tab "Spese da fatturare", come se fossero delle ore di servizio. Di conseguenza tutte le regole di fatturazione (fascia oraria, arrotondamenti, etc) verranno applicate anche alle ore di viaggio, come appunto fossero un servizio svolto. 

**Escludi arrotondamenti**: se abilitato, non verranno applicati arrotondamenti nel piano di fatturazione. 

**Escludi calcolo Fuori Orario**: se abilitato, non verrà calcolato il fuori orario nel piano di fatturazione. Per la conversione tra diverse unità di misura temporali (es. da ore a giorni) verrà utilizzato il monte ore indicato nel campo "Turno di lavoro" nei parametri generali della Gestione Progetti. 

**Considera tutte le fasce orarie calcolo fuori Orario**: se abilitato nel calcolo del fuori orario vengono prese in considerazione sia la fascia oraria diurna che la fascia oraria notturna. Verrà considerato fuori orario solo ciò che è al di fuori di entrambe le fasce o supera il monte ore giornaliero. Se disabilitato, verrà considerata solo una fascia oraria (notturna o diurna in base all'orario di inizio del servizio) e tutto ciò che è fuori da questa fascia oraria considerata, sarà tariffato fuori orario. 
:::note[Esempio]
Fascia diurna 7.00 - 18.00
Fascia oraria notturna 20.00 - 5.00

orario servizio: 3.00 - 8.00
con flag abilitato il piano di fatturazione sarà: 
- riga servizio 3.00 - 5.00 con tariffa notturna
- riga servizio 05.00 - 07.00 con tariffa fuori orario
- riga servizio 07.00 - 08.00 con tariffa diurna
(vengono considerate per il calcolo entrambe  le fasce orarie, risulta in fuori orario solamente quello che non rientra in nessuna delle due)

con flag disabilitato il piano di fatturazione sarà:
- riga con servizio 3.00 - 5.00 con tariffa notturna
- riga con servizio 05.00 - 08.00 con tariffa fuori orario 
(viene considerato per il calcolo solo la fascia di orario notturna, che è di riferimento per il servizio iniziato in quella fascia)

:::