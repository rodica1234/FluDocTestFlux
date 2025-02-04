---
title: Parametri MRP
sidebar_position: 2
---

Per modificare i Parametri MRP:
1. aprire la form che si trova sul percorso **Parametri > Produzione > Parametri MRP**. 
2. selezionare l'articolo ed eseguire doppio clic sulla riga oppure usare il pulsante **Modifica Parametri**.

I parametri MRP vengono creati in automatico dal sistema al salvataggio di un nuovo articolo inserito in anagrafica, con dei valori di default che possono essere variati manualmente dall’operatore singolarmente o in maniera massiva tramite il pulsante **Sostituzione parametri** presente nella form di filtro.

### Dati generali

I parametri che si possono definire all'interno di questo tab sono i seguenti:

**Politica di gestione**: questa combo box permette all'utente di scegliere se gestire l'articolo a:  
> **Previsionale**: in questo caso l'articolo verrà gestito tramite la generazione previsioni di vendita oppure tramite l'inserimento di un piano principale di produzione. Questa politica di gestione viene presa in considerazione sia in [Generazione commesse di produzione/mps-master-production-scheduling/job-order-creation) sia dall'[MRP/ms-master-scheduling/mrp).  
> **Scorta**: in questo caso l'articolo verrà gestito sulla base delle informazioni relative al punto di riordino e alla scorta minima inseriti nel tab [Approvvigionamentoerp-home/registers/items/create-new-items/item-registry/procurement) dell'anagrafica articolo. Questo perché sono articoli per i quali la domanda arriva troppo tardi rispetto alla necessità di approvvigionamento o produzione, e quindi nasce l'esigenza di gestirli a scorta. Questo consente un approvvigionamento prima che mi arrivi la reale domanda. Anche in questo caso la generazione della commessa di produzione dell'articolo sarà ottenuta tramite l'utilizzo sia della procedura di [Generazione commesse di produzione/mps-master-production-scheduling/job-order-creation) che dall'[MRP/ms-master-scheduling/mrp).
> **Commessa**: viene usata per articoli per i quali si andrà a produrre a commessa con lo scopo di mantenere una tracciabilità durante le  fasi della sua produzione; in questo caso questo tipo di politica di gestione verrà attuata durante la [Generazione commesse di produzione/mps-master-production-scheduling/job-order-creation), utilizzando il tab Ordini Clienti; tramite questa gestione che si vanno a generare le commesse di produzione. Si può gestire anche con l'[MRP/ms-master-scheduling/mrp) ma solo nel caso in cui lo si vada espressamente a specificare tramite il flag **Considera l'articolo nel calcolo MRP** che si trova nel tab Parametri all’interno di questa form.
Ad esempio: è stato generato un ordine cliente per 6 pezzi di un articolo gestito a Commessa e un altro ordine cliente di 8 pezzi sempre per lo stesso articolo, per poter tenere traccia della produzione e del legame tra ordine cliente e ordini di produzione, si andranno a creare due commesse di produzione diverse ognuna collegata ad un ordine cliente specifico.
> **Fabbisogno**: in questo caso invece, si tratta di articoli per i quali potrebbe essere che non si desideri tenere tracciabilità e quindi si possono raggruppare più domande aventi fonti diverse (perdendo il legame con la commessa) in questo caso l'articolo potrà essere preso in considerazione nel caso di utilizzo della procedura [MRP/ms-master-scheduling/mrp) in luogo della procedura **Pianificazione Generale**. 
Ad esempio: nella situazione simile alla precedente, con un ordine cliente di 6 pezzi e uno di 8 pezzi sempre per il medesimo articolo, si potrà generare un ordine di produzione cumulativo di 14 pezzi perdendo però il legame tra ordine e commessa e quindi la tracciabilità. In alternativa si può gestire senza raggruppamenti.

:::note NOTA
Le seguenti opzioni dei buffer e tolleranza tempo cliente sono disponibili solo con DDMRP.
:::
> **Buffer dinamici DDMRP**: prevedono la variazione nel tempo delle tre zone caratteristiche (verde,gialla,rossa) e di conseguenza anche il livello medio di giacenza.          
> **Buffer fissi DDMRP**: utilizzano valori fissi delle zone e di conseguenza anche un livello medio di giacenza fisso (si utilizzano in caso di limitazioni di spazio, di investimento, per limiti di sicurezza etc).                
> **Buffer min-max DDMRP**: usano solo la zona rossa e la zona verde.           
>> **Tolleranza tempo del cliente**: è il tempo di consegna espresso in giorni che i clienti in genere considerano accettabile. (Si abilita solo dopo aver selezionato una tipologia di buffer DDMRP).      

**Tipo di approvvigionamento**: la combo serve per differenziare la tipologia di ordini pianificati che si creano e consente all'utente di scegliere se il tipo approvvigionamento dell'articolo debba essere di:  
> **Acquisto**: in questo caso l'esplosione dei fabbisogni crea un ordine pianificato di acquisto per l'articolo in questione;  
> **Produzione**: in questo caso l'esplosione dei fabbisogni crea un ordine pianificato di produzione per l'articolo in questione;  
> **Conto lavoro**: in questo caso l'esplosione dei fabbisogni crea un ordine pianificato di conto lavoro per l'articolo in questione.  

**Tipo di prelievo**: la combo consente all'utente di scegliere il tipo di prelievo dell'articolo, ovvero come si vuole che venga scaricato il materiale nell'area produttiva e si può scegliere tra:  
> **Automatico**: con questa impostazione l'articolo verrà prelevato durante il rilascio dell'ordine di produzione ovvero quando c'è il passaggio dell'ordine di produzione da Lanciato a Esecutivo;  
> **Con lista**: con questa impostazione l'articolo verrà prelevato tramite la generazione di una lista di prelievo che viene creata manualmente tramite la procedura presente nell'area produzione > Lista prelievo materiali. In questo caso si deciderà manualmente quando scaricare il materiale.  
> **Manuale**: con questa impostazione, l'articolo verrà prelevato solo durante la segnalazione di produzione del livello di distinta base a lui direttamente superiore. Il prelievo avverrà contestualmente alla segnalazione della fase di produzione alla quale il materiale è stato agganciato, oppure, in mancanza di una fase collegata, contestualmente alla segnalazione dell'ultima fase produttiva e movimentabile. Quindi in altre parole quando andrò a dichiarare il padre della distinta mi verranno proposte tutte le quantità dei figli che avrei dovuto usare per produrre quel padre e confermando le quantità si procede anche al loro scarico. Da notare che nel caso di utilizzo del Magazzino WIP, il tipo di prelievo Manuale comporta il passaggio del materiale in questione dal magazzino materie prime al magazzino WIP nel corso del rilascio dell'ordine di produzione, e poi il suo scarico dal WIP durante la segnalazione (per la spiegazione dei magazzini W.I.P. si rimanda all'articolo dedicato al tab dei *Parametri MRP* chiamato *Magazzini*).

Inoltre, sono presenti i seguenti campi:

**Priorità approvvigionamento:** questo campo editabile consente all’utente di impostare il tipo di priorità da assegnare all’articolo. Questa verrà utilizzata nella creazione delle *richieste di acquisto* in fase di [Rilascio degli ordini pianificati/ms-master-scheduling/planned-orders/procedures/release-planned-orders/) se è stato attivato il flag **Proprietà approvvigionamento da Parametri MRP articolo**;     

**Generazione commesse di produzione**: se attivato, indica che le righe ordine cliente che presentano questo articolo devono essere visualizzate nel filtro del tab *Ordini Clienti* della *Generazione commesse di produzione*; inoltre, verrà anche considerato nel caso in cui fosse attiva la *Generazione automatica flusso di produzione* presente nei [Parametri MSconfigurations/parameters/production/mps-parameters/). Nel caso in cui il flag fosse disattivato, l'articolo non verrà considerato in nessuna delle due procedure;

**Escludi da pianificazione**: se attivato, 

**Percentuale scarto**: consente all'utente di impostare una percentuale di scarto fissa per l'articolo. Questa percentuale viene impostata sempre con questo dato quando l'articolo viene ripreso all'interno di una distinta base.  
*Esempio*: se viene indicato che per produrre quel materiale c'è uno scarto di solito del 10%, se l'ordine da produrre è di 100 pezzi lo schedulatore o l'MRP quando crea l'ordine pianificato invece di farlo da 100 pezzi, lo farà da 100 pezzi + il 10%.

**Considera in Conto lavoro**: se attivato, permette all'utente di fare in modo che l'articolo sia considerato nella compilazione automatica del tab *Materiali da Consegnare* e del tab *Materiali da Impiegare* dell'*Ordine di Conto Lavoro*;

Ci sono poi una serie di flag che vengono utilizzati dall'elaborazione della procedura MRP e sono:

**Considera le quantità in base al lotto economico**: se attivato, il flag consente di fare in modo che per l'articolo venga considerato il lotto economico (ovvero la quantità minima di produzione/acquisto) di produzione (impostato nella sezione Parametri di produzione sempre all'interno di questa form e che verrà dettagliata successivamente) o di acquisto (impostato nella sezione dei parametri di acquisto sempre in questa form e che verrà dettagliata successivamente);

**Considera i multipli del lotto economico**: se attivato, il flag consente di fare in modo che per l'articolo venga considerato il multiplo del lotto economico di produzione o di acquisto impostato nelle rispettive sezioni della form che verranno dettagliate successivamente;

**Reintegro scorta minima dell'articolo**: se attivato, il flag consente di fare in modo che per l'articolo venga reintegrata la scorta minima impostata nella sua anagrafica, tab *Approvvigionamento*;

**Reintegro punto di riordino dell'articolo**: se attivato, il flag consente di fare in modo che per l'articolo venga reintegrato il punto di riordino impostato nella sua anagrafica, tab *Approvvigionamento*;

**Considera l'indice di copertura**: se attivato, il flag consente di fare in modo che per l'articolo venga considerato l'indice di copertura impostato nella sua anagrafica, tab *Approvvigionamento*; l'indice di copertura viene espresso in settimane e quando viene indicato, significa che si va a dire al sistema di coprire il fabbisogno per le settimane indicate in questo campo;

**Considera anche le alternative dei materiali**: se attivato, il flag consente di fare in modo che per l'articolo vengano considerate anche le sue alternative impostate in distinta base, tab *Alternative* nel caso l'articolo non sia disponibile;

**Considera le fasi alternative**: se attivato, il flag consente di fare in modo che per l'articolo vengano considerate, se esso di Produzione, le fasi alternative impostate nel ciclo di lavorazione dello stesso articolo. Nel box *Tolleranza per l'occupazione del CDL* è possibile impostare una percentuale che permette di decidere quando considerare il mio CDL pieno (per esempio se metto 90% quando arrivo al 90% di occupazione in quel centro di lavoro il programma deve andare a considerare le alternative impostate per quel centro) mentre nel box *Tolleranza di Produzione* è possibile impostare, sempre in percentuale, quanto di più si possa produrre per l'articolo rispetto alla quantità prevista dell'ordine di produzione e lo stesso a livello di acquisto per il campo *Tolleranza di acquisto*.

**Blocco per produzione**: se attivato, il flag fa in modo che se una commessa di produzione di questo articolo venga elaborata dalla Pianificazione Generale esca il messaggio “Impossibile schedulare, l'articolo XXXX è bloccato per la produzione”. In questo caso la Pianificazione si blocca e l'utente deve rilanciarla escludendo la commessa relativa a questo articolo.

**Controllo fabbisogni con generazione ordini pianificati**: se attivo, questo flag fa sì che l'MRP crei gli ordini pianificati (sempre se attivo con l'omonimo flag presente nel tab Parametri dell'[MRPconfigurations/parameters/production/mrp-parameters/mrp-parameters-intro)); mentre se non attivo, l'MRP creerà solamente la proposta degli ordini pianificati (ma senza creali).

**Distinta base di riferimento**: sezione nella quale viene impostato, se diverso dal codice articolo in testata dei parametri MRP, l'articolo/variante la cui distinta base deve essere presa come riferimento per la Pianificazione di una eventuale commessa di produzione per l'articolo/variante a cui fanno riferimenti i parametri MRP su cui si sta lavorando. Si potrà quindi inserire l'articolo (comprensivo di **classe**, **codice** e **descrizione**) e l'eventuale **variante**, mentre l’**unità di misura** verrà riportata in automatico.

**Parametri di Produzione** la sezione risulta attiva se la politica di gestione dell'articolo è *Produzione*. In essa si possono impostare i seguenti campi:  
> **Lead Time**: in questo campo l'utente che non utilizza i cicli di produzione può impostare un lead time di produzione per l'articolo in questione, tempo calcolato in giorni lavorativi basandosi sul calendario di fabbrica e che non varia al variare della quantità da produrre;
> **Unità di capacità produttiva**: in questo campo l'utente può inserire l'unità di capacità produttiva per cui deve essere considerato il lead time dell'articolo;  
> **Lead Time Fisso**: in questo campo l'utente può decidere di voler considerare un valore di lead time fisso e non calcolato sulla base dei suoi cicli di lavorazione (quindi il sistema non considererà il lead time impostato nel ciclo di lavoro ma considererà questo dato), inserendo quindi il valore in giorni lavorativi e attivando questa modalità tramite il flag. 
Se il flag è attivo, il tempo calcolato sarà dato dalla somma del valore del **Lead Time Fisso** (inserito accanto al flag) più il valore di **Lead time analisi** presente nel tab [Qualitàerp-home/registers/items/create-new-items/item-registry/quality) dell'*Anagrafica articolo*, quindi in questo caso il tempo sulle fase non è considerato e la data di inizio è ricalcolata in base al *Calendario di Fabbrica*. Se il flag non è attivo, la data di inizio viene ricalcolata prendendo in considerazione le fasi, le fasi alternative e il *Calendario dei centri di lavoro*; 
> **Lotto economico**: in questo campo l'utente può impostare un lotto economico di produzione dell'articolo, che verrà considerato dalle procedure di [Generazione commesse di produzione/mps-master-production-scheduling/job-order-creation) e Pianificazione Generale (solo nel caso di flag 'Considera quantità in base al lotto economico spiegato in precedenza);  
> **Giorni limite pianificazione**: nella schedulazione/pianificazione terrà conto solo degli ordini, impegni e fabbisogni per questa durata, tutto quello che andrà oltre non verrà considerato;
> **Multipli**: in questo campo l'utente può impostare i multipli del lotto economico di produzione dell'articolo, che verranno considerati dalle procedure di [Generazione commesse di produzione/mps-master-production-scheduling/job-order-creation) e Pianificazione Generale (solo nel caso di flag 'Considera le quantità in base ai multipli del lotto economico spiegato in precedenza);  
> **Da dichiarare su Mobile**: questo flag viene attivato se l'articolo è gestito tramite l'applicazione Fluentis Mobile;  
> **Giorni raggruppamento**: in questo campo l'utente determina il periodo temporale su cui la procedura raggruppa gli eventuali ordini pianificati. Se per esempio questo parametro vale 5 per un dato articolo, saranno raggruppati tutti gli ordini pianificati che hanno data compresa nell'intervallo di 5 giorni lavorativi (da calendario di fabbrica);    
> **Giorni Tolleranza Anticipi**, **Giorni Tolleranza Posticipi**: sono i giorni che l'MRP tollera in anticipo o in posticipo di un documento senza proporre l'effettivo anticipo o posticipo, ma sfruttandone l'eventuale esubero senza proposte. Per questo motivo se ad esempio un articolo specifico ha come valori Giorni Tolleranza Anticipi = 2 e Giorni Tolleranza Posticipi = 5, significa che se l'algoritmo MRP rileva l'esigenza di anticipare o posticipare un documento per quell'articolo, questo non verrà comunicato all'utente come richiesta di anticipo o posticipo se nell'intervallo di 2 giorni precedenti nel caso di anticipo e nell'intervallo di 5 giorni successivi nel caso di posticipo (all'utente sarà solo comunicato che l'esigenza è stata soddisfatta dal particolare documento). In sostanza, nel caso *Giorni Tolleranza Anticipi* l'MRP verifica nel futuro (per il numero di giorni indicati) se ci sono carichi che coprano eventuali fabbisogni precedenti, mentre, nel caso di *Giorni Tolleranza Posticipi* l'MRP verifica nel passato (per il numero di giorni indicati) se ci sono carichi che coprano eventuali fabbisogni successivi;     
> **Giorni Orizzontale Congela**: serve per salvaguardare gli ordini già lanciati in questo orizzonte temporale, mentre i pianificati vengono rigenerati;         
> **Tolleranza in giorni/percentuale da lead time**: determina il periodo temporale in cui poter anticipare o posticipare (oltre questo limite l'MRP propone di eliminare il documento) e fino a quando comunicare l'eventuale esubero di un articolo. Può essere espresso in giorni o in Percentuale da leadtime. Per cui se ad esempio per un articolo vengono definiti 90 giorni di tolleranza, i documenti relativi a questo articolo specifico potranno essere anticipati o posticipati al massimo di 90 giorni, se l'esigenza supererà questa soglia, l'MRP proporrà di eliminare il documento e di crearne uno nuovo nella data dove ha rilevato l'esigenza. Inoltre, per lo specifico articolo, un'eventuale disponibilità in esubero potrà essere disponibile fino ad un massimo di 90 giorni.
Se questo parametro è attivo, l'MRP, andrà a modificare le date dei seguenti tipi di documenti: Ordini pianificati (se non tassativi), ordini di produzione (solo quelli che non hanno segnalazioni), richieste di acquisto, ordini di conto lavoro (solo se non ha il flag già stampato), ordini fornitore (se non già confermati), anticipandole o posticipandole di un valore massimo pari a quello indicato;   
> **Obbligo dichiarazione materiale manuale**: viene utilizzato in Fluentis MES. Se attivo, insieme al flag **Dichiarazione quantità materiale obbligatoria** presente nella tabella [Risorse di produzione/production-resources) del MES, fa si che nel tab *Materiali* di Fluentis MES l'articolo venga proposto con quantità zero e quindi l'utente, sarà obbligato ad inserire manualmente un valore prima di poter proseguire;     

**Lettura Distinte/Cicli**: in questa sezione l'utente ha la possibilità di impostare la **versione** della distinta e del ciclo di produzione che deve essere considerata dalla procedura MRP per l'articolo in questione; ed anche il **Numero ciclo** definito come ciclo di default per l'articolo;

**Considera le disponibilità provenienti da**: in questa sezione l'utente ha la possibilità di decidere quali siano le aree gestionali i cui documenti debbano essere presi in considerazione durante l'elaborazione della procedura MRP. Le aree sono Acquisti, Vendite, Magazzino (ed in questo caso si può decidere se debbano essere considerate o meno le giacenze di lotti in stato non disponibile tramite l'attivazione dell'apposito flag), Conto Lavoro, Pianificazione (quindi Commesse di Produzione, Ordini Pianificati di Acquisto, Conto Lavoro e/o Produzione), Produzione Rilasciata (quindi Ordini di Produzione);

**Considera lotti in stato non disponibile**: come spiegato nel tab [Lotti e Serial numbererp-home/registers/items/create-new-items/item-registry/lots-and-serial-number) dell'anagrafica articoli, i lotti presentano uno stato (disponibile, non disponibile, in quarantena etc..). Se si abilita questo flag (che diventa editabile solo se si sceglie di considerare la disponibilità proveniente da Magazzino) il sistema andrà a considerare anche i lotti che avranno lo stato non disponibile;

**Escludi giacenza negativa**: se abilitato questo flag consente di non considerare gli articoli con giacenza negativa.

**Considera l'articolo nel calcolo MRP**: questo flag diventa editabile solo nel caso in cui la politica di gestione sia 'a commessa'. Abilitando questo flag anche gli articoli con politica di gestione a commessa, che di default verranno analizzati dalla [Generazione commesse di produzione/mps-master-production-scheduling/job-order-creation), potranno essere analizzati anche dal MRP.

**Gestione previsione**: la combo permette di decidere come dovranno essere generate le commesse di produzione da [Generazione commesse di produzione/mps-master-production-scheduling/job-order-creation) nel caso di generazione dal Previsionale. Le possibilità sono le seguenti: Il maggiore tra Ordini Clienti e Previsioni di Vendita; Sempre la Previsione di vendita; Il minore tra Ordini Clienti e Previsioni di Vendita; Sempre gli Ordini Clienti; Somma di Ordini Clienti e Previsioni di Vendita. Si consiglia di utilizzare 'il maggiore tra ordini e Previsioni' questo perché se abbiamo previsto di produrre 100 pezzi di quel materiale in base alle previsioni e entro la data di inizio produzione riceviamo ordini per 200 pezzi, se viene impostata questa politica di gestione della previsione il sistema andrà a creare un ordine per 200 pezzi e non un ordine per 100 pezzi come da previsione e 200 pezzi da ordine perché nei 200 pezzi è compresa la previsione iniziale che è stata poi superata nella realtà.

**Parametri di Acquisto/Conto Lavoro**: la sezione è attiva se la politica di gestione dell'articolo è 'Acquisto' oppure 'Conto Lavoro'. Qui si possono visualizzare ed eventualmente modificare i dati inseriti all'interno del tab *Fornitori Preferenziali* dell'*Anagrafica articolo* (lead time di spedizione, tempo di approvvigionamento, totale tempi di approvvigionamento, quantità minima acquistabile, multipli sulla quantità minima).

### Magazzini

In questo tab l'utente ha la possibilità di decidere che per l'articolo in questione la movimentazione degli articoli tramite le procedure legate all'area produzione non deve avvenire considerando le impostazioni dei *Parametri Ordini di Produzione* ma secondo impostazioni personalizzate dell'articolo stesso. 
 
*Esempio*: se nella combo *Magazzino* e nella combo *Causale* della sezione **Materie Prime** si impostano un magazzino ed una causale diversi rispetto a quelli impostati nella stessa sezione dei [Parametri Ordini di Produzioneconfigurations/parameters/production/production-orders-parameters/production-orders-parameters-intro), significa che quando quell'articolo viene prelevato per produzione tramite lista di prelievo, rilascio ordini di produzione oppure registrazione segnalazione di produzione dovrà essere prelevato dal magazzino qui impostato e utilizzando la causale qui impostata, anziché tramite i valori impostati nei *Parametri Ordini di Produzione*, che hanno quindi valenza generale per tutti gli articoli, tranne per quelli per i quali l'utente ha settato valori diversi in questo tab *Magazzini* dei *Parametri MRP*.

In questo tab quindi, si potranno impostare i magazzini relativi alle *Materie Prime*, ai *Semilavorati*, ai *Prodotti finiti* e ad eventuali *Scarti* con le relative causali di carico e scarico.

Per poter impostare uno di questi magazzini sarà sufficiente selezionare tramite le relative combo box il magazzino e le causali (precodificati nelle rispettive tabelle *Magazzini* e *Causali*) che si vogliono impostare.

Vi sono inoltre i Magazzini *W.I.P.* che si attivano selezionando la voce *W.I.P* e procedendo alla selezione all'interno delle combo box dei magazzini e delle causali come per i magazzini generali.

:::note IMPORTANTE
Gli stessi magazzini si trovano proposti, nella stessa identica visualizzazione all'interno dei  [Parametri degli Ordini di Produzioneconfigurations/parameters/production/production-orders-parameters/production-orders-parameters-intro) dove sono spiegate in maniera completa tutte le logiche di utilizzo.
:::

Per tutto quanto non dettagliato in questo documento sul funzionamento comune delle form fare riferimento al seguente link [Funzionalità, pulsanti e campi comuniguide/common).