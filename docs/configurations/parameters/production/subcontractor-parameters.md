---
title: Parametri Conto Lavoro
sidebar_position: 2
tags: [Conto Lavoro]
---

Attraverso questa finestra vengono settati tutti i parametri che riguardano la gestione del conto lavoro e più nello specifico il modo in cui devono essere eseguite le movimentazioni di magazzino innescate dalle procedure del modulo stesso.

### Generale

*Dati proposti negli ordini*:   

> **Rigenerazione materiali nell'aggiornamento dell'articolo**: se il flag è attivato, ogniqualvolta si effettui una modifica sulla riga articolo presente nel tab *Articoli da produrre* dell'ordine di conto lavoro la procedura rigenera le informazioni relative ai materiali da consegnare e da impiegare da inserire nell'ultimo tab dell'ordine stesso.  
>   
> **Dati materiali proposti**: visualizza le 4 differenti possibilità che l'utente ha di far proporre automaticamente alla procedura i materiali nel tab Materiali da Consegnare dell'ordine di conto lavoro.  
> Le possibilità sono le seguenti:  
> 1. *Da ultima consegna effettuata presso lo stesso terzista*: si controlla l'ultimo ordine di conto lavoro generato per lo stesso terzista e in cui è presente lo stesso articolo da produrre.    
> 2. *Esplosione livello da struttura distinta*: si controlla la distinta base dell'articolo inserito nel tab Articoli da Produrre.    
> 3. *Consegna dello stesso articolo da produrre*: si inserisce nel tab Materiali da Consegnare lo stesso articolo inserito nel tab Articoli da Produrre.    
> 4. *Nessun materiale*: nel tab Materiali da Consegnare non viene proposto alcun materiale.
> 5. *Dall'ordine di produzione*: usato per gli ordini di conto lavoro generati mediante rilascio di un ordine pianificato di conto lavoro oppure da un ordine di produzione con fase esterna.   
>
> **Versione**: consentono di selezionare la versione della distinta base.

*Considera le disponibilità provenienti da*:    

> Questa sezione permette di decidere se considerare o no le disponibilità provenienti da **Conto Lavoro** / **Produzione** / **Acquisti** / **Magazzino** / **Vendite**; ciascuno di questi flag sta a indicare la volontà da parte dell'utente di fare in modo che la procedura di creazione dell'ordine di conto lavoro consideri la disponibilità dei materiali in base alle informazioni che provengono dalle singole aree applicative di ERP. Quindi per esempio se l'utente sceglie di attivare il flag solo su Acquisti e non su Vendite, significa che saranno considerate le disponibilità provenienti dagli ordini fornitori, dalle DDT e fatture di acquisto e dalle richieste di acquisto e non quelle provenienti da ordini clienti, DDT e fatture di vendita.   

*Prodotti finiti*:   

> **Proposta dell'ultimo prezzo di lavorazione effettuato**: se attivato, consente di far proporre nell'ordine di conto lavoro, nella casella del prezzo unitario di lavorazione del tab *Articoli da Produrre*, il prezzo dell'ultimo ordine di conto lavoro emesso per quell'articolo per lo stesso terzista.
>   
> **Considera le quantità in base al lotto economico** e **Considera i multipli del lotto economico**: permette di scegliere, al momento dell'inserimento di un articolo nel tab *Articoli da produrre* dell'ordine di conto lavoro, se considerare le quantità degli articoli stessi in base al lotto economico, e/o considerare eventualmente anche i multipli del lotto.  


**Tipo DDT**: in questa sezione si imposta il [Tipo DDT di venditaconfigurations/tables/sales/delivery-notes-type) che deve essere proposto di default quando si utilizza la procedura di creazione DDT di consegna di conto lavoro. Questo tipo DDT utilizzerà in automatico magazzino e causale impostati nelle apposite combo della voce "Consegne materiali a terzisti" che si trova nella finestra dei parametri di conto lavoro.

**Unità di misura volume predefinita**: permette di indicare l'unità di misura da utilizzare di default per i volumi.   

**Unità di misura pesi predefinita**: permette di indicare l'unità di misura da utilizzare di default per i pesi.   

**Valor. lavorazione materiali a costo**: permette di definire se la valorizzazione della lavorazione dei materiali debba avvenire a costo ultimo o a costo medio. Quindi si tratta di un metodo per decidere se i materiali utilizzati dai terzisti debbano essere imputati alla lavorazione utilizzando il  costo ultimo oppure il  costo medio tra quelli inseriti nell'anagrafica dell'articolo stesso. Inoltre, è possibile, selezionando i flag **Lotti** e/o **Commessa di produzione**, andare a proporre come costo del materiale il costo ultimo/Medio/standard per il relativo lotto e/o commessa di produzione in base ai flag attivati.    

*Evasione*:   

> **Visualizzazione griglia di evasione**: se attivo, nelle procedure di evasione ordine in DDT di conesgna o nel rientro sarà visibile la griglia di evasione.   
> 
> **Visualizzazione tree evasione**: se attivo, nelle procedure di evasione ordine in DDT di conesgna o nel rientro sarà visibile la struttura gerarchica. Questi due flag posono essere attivati in concomitanza.    


**Codice operatore obbligatorio**: se attivo, permette di decidere se sia necessario inserire il codice operatore nel momento in cui si inserisce la DDT di consegna di conto lavoro.

**Proposta automatica serial number per l'articolo rientrato se presente anche come materiale consumato**: nei rientri di conto lavoro questo flag attivo permette di far proporre in automatico il serial number per l'articolo.

**Controlla disponibilità**: se attivo, permette di decidere se fare in modo che la procedura controlli o meno la disponibilità proveniente dai flag impostati nella sezione *Considera le disponibilità provenienti da*.

**Disponibilità obbligatoria**: se attivo, impedisce l'inserimento di materiali in ordini di conto lavoro nel caso di mancata disponibilità alla data dell'eventuale consegna al terzista.

**Nessun materiale in consegna**: se attivo, fa in modo che nel tab *Materiali da consegnare* non sia inserito alcun articolo per nessun articolo da produrre.

**Carico/Scarico automatico**: se attivo, permette all'utente di fare in modo che le movimentazioni di magazzino in uscita avvengano automaticamente non appena la DDT di consegna venga stampata. Questo consente di saltare lo step dello scarico dei  DDT di consegna di conto lavoro

**Registrazioni di magazzino con data del documento**: 
per la registrazione dei **DDT di consegna**, se questo flag è attivo, viene usata la *Data trasporto* (presente nel tab *Riepiloghi* > *Destinatario*), se valorizzata, altrimenti viene considerata la data di creazione del documento presente in testata. Se il flag non è attivo, lo scarico dall'interno del documento viene sempre effttuato con la data corrente.    
Per la registrazione dei **Rientri di conto lavoro**: se il flag è attivo viene sempre utilizzata la *Data rientro* presente in testata; se non attivo la registrazione dall'interno del documento viene effettuata con la *Data documento def.* presente in testata.

**Blocca inserimento documento in date festive**: se attivo, impedisce l'inserimento di un ordine, di una DDT e di un rientro di conto lavoro in date festive.

**Controllo terzista di riferimento per gli articoli**: se attivo, consente all'utente di fare in modo che la procedura di creazione degli ordini di conto lavoro controlli se l'articolo che si sta inserendo nel tab *Articoli da Produrre* abbia, come fornitore preferenziale, il terzista inserito nella testata dell'ordine stesso.

**Lotti e numeri serali obbligatori**: se attivato, obbliga l'utente ad inserire in tutti i documenti il lotto dell'articolo inserito nel documento stesso, sempre che l'articolo sia gestito a lotti o a serial numbers.

**Ricalcola trasporto**: questo flag fa in modo che nel tab Trasporto del DDT vengano riportati i totali di peso, volume e colli delle righe del documento; senza questo flag, i campi non saranno compilati.

**Verifica articoli in esaurimento**: se attivato, il sistema fa un controllo sulla disponibilità degli articoli in riga ordine ed avvisa qualora l'articolo fosse in esaurimento, ovvero se nell'[anagrafica dell'articoloerp-home/registers/items/create-new-items/item-registry/generality) è stato attivato il flag *In esaurimento*.

**Attiva il controllo qualità**: work in progress.

**Gestione doppia unità misura**: solo se attivato, il sistema può gestire l'unità di misura alternativa nei documenti di conto lavoro.

**Proposta automatica UM alternativa**: se attivato, fa in modo che venga proposta la quantità relativa all'unità di misura alternativa, a patto che sull'anagrafica dell'articolo ne sia stata impostata una di default. È possibile attivare questo flag solo se il flag precedente è stato attivato.

**Considera magazzini in base al tipo DDT rientro**: permette di scegliere se considerare i magazzini in base al tipo di DDT di rientro o al tipo di DDT consegna, invece che utilizzare le impostazioni inserite nelle apposite combo delle voci *Consegne materiali a terzisti* e *Rientro prodotto*.

### Magazzini

**Consegne materiali a terzisti W.i.P.**   
In questa sezione vengono impostati il magazzino e la relativa causale che devono essere considerati per lo scarico dei materiali destinati ai terzisti nel caso in cui sia utilizzata la gestione del magazzino W.I.P., attivabile nei [Parametri ordini produzioneconfigurations/parameters/production/production-orders-parameters/production-orders-parameters-intro). In questo caso, tutti gli ordini di conto lavoro creati dal *Rilascio ordini pianificati* o direttamente dall'ordine di produzione useranno questo magazzino e casuale per lo scarico dei materiali inseriti nel tab [Materiali da Consegnaresubcontractor/subcontractor-orders/insert-subcontractor-orders/materials) dell'ordine di conto lavoro.    

**Consegne materiali a terzisti**   
In questa sezione vengono impostati il magazzino e la relativa causale che devono essere considerati per lo scarico dei materiali destinati ai terzisti. Quindi il magazzino impostato è il magazzino da cui saranno scaricati i materiali inseriti nel tab [Materiali da Consegnaresubcontractor/subcontractor-orders/insert-subcontractor-orders/materials) dell'ordine di conto lavoro. Questi saranno impiegati solo negli ordini di conto lavoro creati manualemente nel caso in cui sia attiva la gestione del magazzino W.I.P., mentre se la gestione del magazzino W.I.P. non è attiva verranno considerate in tutti i casi.     

**Consumo materiali impiegati**  
In questa sezione vengono impostati il magazzino e la relativa causale che devono essere considerati per lo scarico dei materiali che i terzisti hanno utilizzato. Quindi il magazzino impostato è il magazzino da cui saranno scaricati i materiali inseriti nel tab Materiali dell'ordine di Rientro di conto lavoro. Fare link quando verrà creato l'articolo.   

**Carichi materiali a terzisti**  
In questa sezione vengono impostati il magazzino e la relativa causale che devono essere considerati per il carico dei materiali destinati ai terzisti. Quindi il magazzino impostato è il magazzino su cui saranno caricati i materiali inseriti nel tab Materiali da Consegnare dell'ordine di conto lavoro. Questi dati vengono ripresi dalla causale di contropartita inserita nella tabella delle causali in corrispondenza della causale che effettua lo scarico dei materiali destinati ai terzisti (cioè la causale impostata nell'apposita combo box della sezione *Consegne materiali a terzisti*).

**Consegne materiali tra terzisti**   
In questa sezione vengono impostati il magazzino e la relativa causale che devono essere considerati per lo spostamento dei materiali da un terzista ad un altro.     

**Rientro articolo W.I.P.**  
In questa sezione vengono impostati il magazzino e la relativa causale che devono essere considerati per il carico dei semilavorati che i terzisti hanno realizzato, questa verrà usata nel caso di tutte le fasi esterne che non siano l'ultima fase del ciclo di lavoro. Quindi il magazzino impostato è il magazzino su cui saranno caricati gli articoli inseriti nel tab Articoli dell'Ordine di Rientro di conto lavoro.

**Rientro articolo finito**  
In questa sezione vengono impostati il magazzino e la relativa causale che devono essere considerati per il carico dei prodotti finiti / semilavorati che i terzisti hanno realizzato, questa verrà usata nel caso in cui la fase esterna sia l'ultima fase del ciclo di lavoro. Quindi il magazzino impostato è il magazzino su cui saranno caricati gli articoli inseriti nel tab Articoli dell'Ordine di Rientro di conto lavoro.

**Materiale reso**  
In questa sezione vengono impostati il magazzino e la relativa causale che devono essere considerati per il carico dei resi. Quindi il magazzino impostato è il magazzino su cui saranno caricati gli articoli inseriti nel tab Materiali Impiegati del Rientro di conto lavoro e a cui è stata associata una quantità resa.

Per tutto quanto non dettagliato in questo documento sul funzionamento comune delle form fare riferimento al seguente link [Funzionalità, pulsanti e campi comuniguide/common).