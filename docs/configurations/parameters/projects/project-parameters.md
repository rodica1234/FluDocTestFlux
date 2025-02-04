---
title: Parametri Progetti
sidebar_position: 1
---
### Generale

Questi parametri vengono utilizzati di default se per il cliente o per il tipo documento non sono state effettuate configurazioni predefinite. 

**Unità di misura predefinita per il servizio**: UM di default da considerare per i servizi negli interventi. 

**Unità di Misura Ore**: UM che identifica le Ore nell'area progetti. In caso di conversione tra UM sarà evidente se la quantità è riferita alle ore di lavoro. 

**Unità di Misura Giorni**: UM che identifica i giorni nell'area progetti. In caso di conversione tra UM sarà evidente se la quantità è riferita ai giorni di lavoro. 

**Ore giornaliere**: indica la durata standard della giornata lavorativa aziendale. Configurabile nella tabella [Orari di lavoroconfigurations/tables/employee/working-hours)

**Articolo**: articolo da utilizzare di default nei documenti in assenza di altre impostazioni. 

**Turno di lavoro**: indicare il turno di lavoro principale per l'azienda. I valori sono configurabili nella tabella  [Turno di lavoroconfigurations/tables/employee/working-hours) per ogni giorno della settimana. Il totale delle ore della giornata verrà considerato per effettuare la conversione tra Ore - Giorni. Se ad es. l'azienda prevede 7 ore giornaliere, 1 Giorno = 7 ore, e su questa base verranno fatte le conversioni ad es. nei servizi di un intervento. 

**Tipo Attività**: tipologia di attività predefinita utilizzata ad es. nella creazione automatica di attività da intervento. 

**Tipo Attività per Richiesta ferie/permessi**: tipologia di attività utilizzata in fase di conferma periodo ferie, per generare le relative dichiarazioni attività della risorsa. 

**Tipo Sprint predefinito**: tipologia di sprint da utilizzare di default se non specificato per il tipo documento. 

**Costo predefinito Materiali Progetto**: è possibile scegliere un valore tra Nessuno, Costo ultimo, Costo medio, Costo standard. Quanto configurato verrà utilizzato come regola di base per reperire il costo articolo inserito nella tab Materiali dei Progetti. 

**Tipo Intervento pianificato predefinito**: tipologia di intervento pianificato da utilizzare di default, ad esempio nella creazione di nuovi pianificati direttamente da Wbs Assegnazione risorse. 

**Tipo Richiesta intervento predefinita**: tipologia di richiesta intervento da utilizzare di default, ad esempio nella creazione di nuove richieste intervento da Wbs Assegnazione risorse. 

**Turno di lavoro**: indica il turno di lavoro specifico, codificato nella tabella **Turno di Lavoro**.


### Interventi

**Tipo intervento interno**: tipologia di intervento identificata come intervento interno

**Tipo intervento esterno**: tipologia di intervento identificata come intervento esterno

**Tipo Intervento predefinito** tipologia di intervento da utilizzare di default, ad es. nella generazione automatica di intervento da attività marcate come fatturabili. 

**Dipendente predefinito**: dipendente da utilizzare di default se non presente altro valore 

**Articolo righe fuori Orario nel Piano di fatturazione**: articolo da usare di default per inserire le righe risultate fuori orario nei calcoli del piano di fatturazione di un intervento. 

**Articolo di storno Fattura di Anticipo**: articolo da usare di default per inserire le righe di storno delle fatture di acconto in una fattura generata dalla valorizzazione interventi. 

**Descrizione riga di storno Fattura di Anticipo**: descrizione da usare di default per inserire le righe di storno delle fatture di acconto in una fattura generata dalla valorizzazione interventi. 

**Proponi Fattura di Anticipo nei servizi**: se abilitato, ad ogni salvataggio intervento effettua una verifica se presente una fattura di anticipo associata al progetto indicato nel documento.
Se il valore residuo della fattura di anticipo è sufficiente a coprire il servizio, verrà collegato in automatico alla riga di servizio dell'intervento nell'apposito campo. 

**Proponi Fattura di Anticipo nei materiali**: se abilitato, ad ogni salvataggio intervento effettua una verifica se presente una fattura di anticipo associata al progetto indicato nel documento.
Se il valore residuo della fattura di anticipo è sufficiente a coprire il valore del materiale, verrà collegato in automatico alla riga di materiale dell'intervento nell'apposito campo. 

**Proponi Fattura di Anticipo nelle spese di viaggio**: se abilitato, ad ogni salvataggio intervento effettua una verifica se presente una fattura di anticipo associata al progetto indicato nel documento.
Se il valore residuo della fattura di anticipo è sufficiente a coprire la spesa di viaggio, verrà collegata in automatico alla riga di spesa di viaggio dell'intervento nell'apposito campo. 

## Impostazioni valorizzazione interventi
**Utilizza riferimenti intervento**: se abilitato, nella fattura generata dalla valorizzazione interventi verrà inserita una riga descrittiva prima della riga dell'intervento, contenente la descrizione configurata dall'utente. 

**Aggiungi data intervento nella riga del servizio** se abilitato, inserisce la data del servizio nel campo descrizione della riga relativa al servizio. 

**Proponi descrizioni codice articolo**: se abilitato, inserisce la descrizione del codice articolo nel campo descrizione del servizio. 

**Raggruppa per progetto**: se abilitato, effettua il raggruppamento per testata progetto nella fattura generata dalla valorizzazione interventi. 

**Raggruppa per WBS**: se abilitato, effettua il raggruppamento per wbs progetto nella fattura generata dalla valorizzazione interventi. 

**Raggruppa Servizi e Spese**: se abilitato, effettua il raggruppamento di servizi e spese nella fattura generata dalla valorizzazione interventi. 

**Considera i giorni festivi come tempo extra**: se abilitato, nel piano di fatturazione verrà verificato se la giornata del servizio rientra in una delle date configurare come festive. Le date non lavorative possono essere configurate da Configurazione > Tabelle > Gestione Progetti > [Calendario giorni festiviconfigurations/tables/project-management/not-working-days-calendar)

**Priorità di inserimento delle informazioni**: indicare l'ordine con cui inserire i dati nelle fatture generate dalla valorizzazione interventi. 

### PIANO DI FATTURAZIONE

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

### Attività

**Controlla attività mancanti negli ultimi: numero mesi**: indicare il numero di mesi, per i quali in fase di dichiarazione attività, verranno controllate eventuali dichiarazioni attività mancanti (ore/giorni) e verranno proposti in automatico in fase di dichiarazione. 

Valore di default = 0, nella dichiarazione attività verrà sempre proposta la data odierna senza alcun controllo per le dichiarazioni mancanti nei mesi passati

Valore "1": verrà controllato il periodo dato da data odierna fino al mese precedente. es. 05/06 - 05/07
ad es. se la dichiarazione del 20/06 è mancante, all'inserimento della nuova dichiarazione attività, la data proposta sarà 20/06

Aumentando il numero di mesi, si estende il range dei mesi passati da controllare. 
