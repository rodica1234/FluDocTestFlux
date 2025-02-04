---
title: Qualità
sidebar_position: 19
---

In questo tab si andranno a definire tutta una serie di informazioni utili ai processi di controllo qualità (ove ve ne fossero) per quell'articolo.

### Ubicazioni

In questa sezione si andrà a definire il luogo all'interno del magazzino in cui l'articolo dovrà essere ubicato; in particolare si potranno definire:

**Tipo di ubicazione**: ovvero dove vogliamo ubicare l'articolo;

**Ubicazione mono-articolo**: se attivo, questo flag indica che in quell'ubicazione potrà essere ubicato solamente quel tipo di articolo; non potranno quindi esserci due articoli diversi in quella stessa ubicazione contemporaneamente;

**Ubicazione mono-lotto**: se attivo, questo flag indica che in quell'ubicazione potrà essere ubicato non soltanto solo un tipo di articolo, ma di quell'articolo potrà essere ubicato in quel luogo solo un lotto e non più lotti dello stesso articolo contemporaneamente;

### Registrazioni di magazzino

In questa sezione si vanno a definire informazioni utili alla registrazione di magazzino per questo articolo, quali:

**Carico manuale permesso**: se attivo, questo flag indica che questo articolo potrà essere caricato manualmente in magazzino;

**Blocco movimento**: viene utilizzato nelle personalizzazioni per bloccare il salvataggio di una reg manuale se il relativo valore (da standard o reale dell’articolo o del lotto) supera quello specificato **Valore massimo carico/valore massimo scarico**. Non viene usato a standard;          

**Valore massimo carico/valore massimo scarico**: vengono utilizzati nelle personalizzazioni (insieme al flag **Blocco movimento**) come valori di riferimento per bloccare il salvataggio di una reg manuale se il relativo valore (da standard o reale dell’articolo o del lotto) supera quello specificato. Non sono usati a standard;     

**Costo da utilizzare**: in questa sotto sezione si va ad indicare come si intende valorizzare l'articolo, se considerando il costo reale oppure il costo standard;

### Acquisti

In questa sezione si va ad indicare se al momento della ricezione del materiale di acquisto debbano essere effettuati degli accertamenti in entrata sul materiale oppure se questi non sono richiesti, indicando:

**Controlli in accettazione**:  attraverso la combo si va a selezione il tipo di controllo che deve essere fatto (se interno/non normalizzato/normalizzato/ufficiale) e attraverso nei campi affianco attraverso l'help si andrà ad indicare il Tipo di piano di controllo scegliendo tra i piani di controllo codificati all'interno della relativa form a cui si accede tramite il percorso **Qualità > Piani di controllo**.

**Controlli in accettazione non richiesti**: se attivo, questo flag indica che non sono al contrario richiesti controlli in accettazione; 

### Produzione

In questa sezione invece si vanno a specificare informazioni relative alla produzione del materiale sempre connesse al controllo qualità, quali:

**% tolleranza quantità prodotta**: in questo si andrà ad indicare la percentuale di tolleranza sulla quantità prodotta in più e/o in meno,

**Scheda tecnica**: in questi campi si va a selezionare, ove sia presente, la scheda tecnica e il tipo di scheda tecnica relativi a questo articolo;

**Scheda tecnica non richiesta**: nel caso in cui il materiale non necessiti di scheda tecnica, questo flag verrà attivato;

### Qualità

In questa sezione si va ad indicare il lead time di analisi necessario per effettuare i controlli preliminare sull'aritcolo:

**Lead time analisi**: se attivo, questo flag indica che per quel materiale sono necessarie dei controlli di qualità che necessitano quindi di un periodo di tempo (in giorni) che viene indicato nel campo affianco; questo serve per stabilire dopo aver ricevuto il materiale, dopo quanti giorni è possibile utilizzarlo in produzione o nel caso di un prodotto finito dopo quanti giorni dalla sua produzione è possibile spedire il materiale;

### Post vendita

In questa sezione finale si andrà ad indicare l'eventuale garanzia concessa sul materiale e i relativi giorni di garanzia stabili attivando il flag **Con Garanzia** e aggiungendo nel campo editabile il numero dei giorni di garanzia; nel caso in cui il materiale non abbia una garanzia il flag risulterà disattivato.
