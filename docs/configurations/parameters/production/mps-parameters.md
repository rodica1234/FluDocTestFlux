---
title: Parametri MS
sidebar_position: 3
tags: [MS]
---

Attraverso questa finestra vengono settati tutti i parametri che riguardano la gestione delle commesse di produzione ed il modo in cui devono essere gestite le fasi successive alla generazione delle commesse stesse.

**Metodo generazione commessa**  
In questa sezione deve essere impostato il **Tipo di Commessa** (Monoprodotto / Multiprodotto) che deve essere proposto nella procedura **Generazione commesse di produzione**, tab [Parametri/mps-master-production-scheduling/job-order-creation).  
Nel momento della generazione della commessa dalla [Generazione commesse di produzione/mps-master-production-scheduling/job-order-creation) è comunque possibile modificare questa impostazione, così come quella relativa alla combo successiva chiamata **Raggruppamento per**, tramite la quale è possibile indicare come devono essere eventualmente raggruppati gli articoli all'interno della stessa commessa *Monoprodotto* o *Multiprodotto*.

Se il *Tipo commessa* è:  
- *Monoprodotto*, l'unico raggruppamento ammesso è quello per Articolo: questo tipo di gestione permette all'utente di far generare automaticamente dal sistema una serie di commesse monoprodotto, selezionando una lista di righe di ordini clienti, righe provenienti da Previsioni di Vendita o dal Piano Principale di Produzione o provenienti dal Sottoscorta, facendo in modo che ciascuna commessa che verrà generata presenti la somma delle quantità richieste per lo stesso articolo. La data di fine di una commessa raggruppata è sempre uguale a quella del fabbisogno più vicino alla data in cui si lancia l'elaborazione.  
- *Multiprodotto* i raggruppamenti possono essere effettuati per cliente, commessa di vendita,  cliente/commessa, e consentono all'utente di inserire nella stessa commessa Multiprodotto più articoli provenienti da righe d'ordine cliente legate allo stesso cliente, alla stessa commessa di vendita oppure alla stessa commessa di vendita dello stesso cliente.

La **Priorità approvvigionamento** sarà il default per quando verranno generate le commesse.

**Generazione commessa da**   
In questa sezione l'utente può impostare con gli appositi flag se la commessa debba essere generata da *Ordini clienti* o da un *Previsionale* (nello specifico poi può selezionare se da *Previsioni di vendita*, e/o da *Piano principale di produzione*).  
Questi parametri sono poi modificabili dalla finestra di [Generazione commesse di produzione/mps-master-production-scheduling/job-order-creation).  
Nel caso di *Generazione commessa di produzione dal Previsionale*, deve essere specificato se si preferisce che la commessa di produzione venga generata con scadenza settimanale o mensile.

**Considera le disponibilità provenienti da**   
In questa sezione l'utente può decidere di impostare la considerazione della disponibilità dei prodotti finiti in sede di generazione commessa di produzione da: *Conto Lavoro*, *Acquisti*, *Vendite*, *Produzione*, *Magazzino*.

Ci sono poi una serie di flag:

**Calcolo quantità in base al Lead Time dell'articolo**: viene attivato nel caso non si vogliano utilizzare i cicli di lavorazione per calcolare la durata di una commessa di produzione; in questo caso, ai fini del calcolo della durata della commessa si fa riferimento al campo Lead time di produzione presente nei [Parametri MRPconfigurations/parameters/production/mrp-parameters/search-mrp-parameters)  dell'articolo. 

**Generazione commessa da Ordini clienti in automatico**: se attivo, permette di fare in modo che la procedura crei automaticamente la commessa di produzione non appena venga inserita una riga ordine cliente. La commessa in questo caso viene creata nello stato di *Non Esaminata*. Generalmente viene attivato quando per schedulare si utilizza la procedura *MRP* anziché la *Schedulazione Generale*.

**Aggiornamento data merce pronta**: se attivo, quando viene cambiata la data di fine prevista lavorazione in una commessa (manualmente o da una procedura), la nuova data viene riportata anche sul campo *Data merce pronta* della commessa stessa e anche dell’ordine cliente collegato. Inoltre, è stata creata anche la tabella di log chiamata **MS_ProductionJobOrderItemReadyGoodsDateLogs** che tiene traccia di tutte le modifiche fatte. Questa è consultabile solo tramite SQL.           

**Generazione automatica Flusso di produzione**: se attivo, l'utente può decidere di attivare il flag **Schedulazione**, che permette di vedere già schedulate le commesse di produzione non appena generate dalla **Generazione commesse di produzione**. L'attivazione del flag *Schedulazione* consente poi di attivare il flag **Rilascio**, che permette di decidere se dopo la schedulazione automatica gli ordini pianificati di acquisto, produzione e/o conto lavoro debbano essere rilasciati anch'essi in automatico. In quest'ultimo caso, per gli ordini pianificati di produzione si può attivare anche il flag **Rilascio OP esecutivi**, che permette di generare direttamente ordini di produzione esecutivi, saltando quindi anche la procedura di Rilascio ordini di produzione.  

**Costificazione commessa**      
In questa sezione è possibile indicare dei parametri che saranno proposti come defualt per la costificazione delle commesse di produzione.    

> **Tipo di costo**: permette di indicare il tipo di costo da utilizzare per la costificazione delle materie prime tra costo *Ultimo*, *Medio* e *Standard*;    
> **Tipo di ricarico**: permette di indicare il tipo di ricarico tra *Costo* (a valore) e *Percentuale*; nel campo accanto è possibile inserire il valore corrispondente;      
> **Costo del lotto**: attivando questo flag, la procedura valorizzerà il costo del materiale in base al tipo costo selezionato considerando i valori solo di quello specifico lotto;     
> **Costo della commessa**: attivando questo flag, la procedura valorizzerà il costo del materiale in base al tipo costo selezionato considerando i valori solo di quella specifica commesa.     

:::note Nota
Se **Costo del lotto** e **Costo della commessa** sono attivati entrambi, la procedura valorizzerà il costo del materiale in base al tipo costo selezionato considerando i valori solo di quella specifica commesa e per quello specifico lotto.
::: 

**Magazzini di schedulazione commesse**   
Questa griglia è la semplice visualizzazione della lista di magazzini su cui deve essere controllata la disponibilità in sede di generazione commessa di produzione. Questa lista viene impostata nella form chiamata *Calcolo disponibilità* che si trova in *Home > Articoli >  [Calcolo disponibilitàerp-home/registers/items/calculate-availability)*.

**Dati ultima schedulazione**   
Questa sezione contiene alcuni dati riepilogativi dell'ultima schedulazione (data e ora inizio, numero di errori generati, data e ora fine, progressivo di schedulazione).

**Parametri proposti schedulazione**: permette di definire quali parametri proporre per la schedulazione, può riproporre i parametri dell’ultima schedulazione effettuata, oppure proporre i parametri utilizzati per la schedulazione dal singolo operatore.

**Giorni prossima schedulazione**: indica il numero di giorni che verranno usati per incrementare la data inizio della schedulazione a capacità finita (campo *Dalla data*), nel tab *Parametri schedulazione a capacità finita* della form *Schedulazione a capacità finita*.

**Numero massimo di mesi per la schedulazione**: indica il numero di mesi da aggiungere alla data odierna per determinare la data di fine schedulazione *Schedulare fino al* presente nei parametri della *Schedulazione generale*.        

**Numero massimo di mesi per il calcolo della disponibilità materiali**: è possibile definire l’orizzonte temporale per il calcolo della disponibilità, nello specifico viene inserito il numero di mesi in cui verranno considerati i documenti; invece, i documenti con data successiva ai mesi presi in considerazione non saranno considerati nella schedulazione.   

**Primo giorno della settimana visualizzato nel Calendario di fabbrica**: consente di inserire il giorno che si vuol far comparire come primo giorno della settimana lavorativa nel [Calendario di Fabbricaconfigurations/tables/production/factory-calendar). Di solito si inserisce il lunedì.

**Colori delle commesse**   
In questa sezione è possibile impostare i colori dello sfondo e del testo delle commesse di produzione in base al loro stato (non esaminate, lanciate...ecc).

Per tutto quanto non dettagliato in questo documento sul funzionamento comune delle form fare riferimento al seguente link [Funzionalità, pulsanti e campi comuniguide/common).
