---
title: Nuova Richiesta di acquisto
sidebar_position: 3
---

La form si apre tramite il percorso **Acquisti > Richieste di Acquisto > Nuova richiesta** oppure dal filtro di riceca *Richieste di Acquisto* mediante il pulsante *Nuovo*.   

### Sezione superiore

I campi obbligatori per l'inserimento di una richiesta di acquisto sono i seguenti:

- **Tipo**: predefinito in *Configurazione > Tabelle >* [*Tipi richieste di acquisto*configurations/tables/purchase/purchase-request-type). A seconda del tipo scelto, saranno attivate alcune funzionalità quali ad esempio il *controllo della disponibilità*.   
- **Data/Anno**: di default viene proposta la data corrente, ma può essere modificata manualmente.   
- **Numero**: poposto automaticamente in base al *Tipo RDA* scelto.

Gli altri dati disponibili nella sezione superiore sono:

- **Storicizzata**: attivando questo flag la RDA non sarà più visibile nella procedura di [Creazione automatica ordinipurchase/purchase-orders/procedures/create-purchase-orders-from-purchase-requests).   
- **Annotazioni**: permette di inserire note visibili a livello di RDA.   
- **Stato richiesta**: campo non editabile; visualizza lo stato di evasione dell'intera richiesta considerando lo stato evasione di ogni singola riga articolo. Una RDA viene considerata *Evasa* o *Parzialmente evasa* quando è stato generato l'ordine fornitore per tutte o alcune delle righe articolo contenute in essa.       

### Articoli

Nella griglia articoli sono presenti i seguenti dati: 

- **Tipo riga** offre la possibilità di selezionare, dalla combo-box, articoli con caratteristiche diverse:
    - *Articolo codificato*: sono gli articoli codificati in anagrafica e possono essere contabilizzati in contabilità analitica e registrati in magazzino.   
    - *Articolo non-codificato*: sono articoli descrittivi che possono essere contabilizzati in contabilità analitica ma non possono essere movimentati a magazzino.    
    - *Articolo note*: sono note descrittive riportate nella stampa del documento; non incidono sulla contabilità e sul magazzino.

- **Classe/Codice/Descrizione articolo**: si possono inserire manualmente oppure con l'ausilio dell'*help di campo* il quale proporrà tutti i dati relativi inseriti nell'*Anagrafica articolo*. Dopo l'inserimento del *Codice* articolo, la *Descrizione* e la *Classe* saranno riprese automaticamente dall'anagrafica. Se l'articolo ha *Varianti*, sarà possibile selezionare la variante desiderata dal tab *Dati articolo*.

- **Unità di misura**: viene proposta l'unità di misura principale dell'articolo, ma nel caso in cui nell'anagrafica articolo siano codificate unità di misura alternative l'utente ha la possibilità di sceglierne un'altra.

- **Quantità**: rappresenta la quantità dell'U.M. principale.    

- **Prezzo**: il prezzo viene proposto dal listino del fornitore preferenziale di default dell'articolo; il listino di riferimento per l'articolo stesso è visualizzato nel tab *Sconti/Listini*. Lo stesso documento potrebbe contenere articoli con prezzi presi da listini diversi. Attraverso il doppio click nel campo **Listini** (tab *Sconti/Listini*) l'utente ha la possibilità di selezionare un listino diverso da quello di default, dal quale sarà ripreso il prezzo dell'articolo inserito.   
In assenza del listino, il dato proposto può essere ripreso dal *costo ultimo* di anagrafica articolo oppure può essere proposto a zero, in base ai parametri impostati nei [Parametri richieste di acquistoconfigurations/parameters/purchase/purchase-requests-parameters/).   

- **Evaso forzatamente**: è possibile impostare l'evasione forzata per la riga selezionata. In questo modo, non verrà fatto il carico di magazzino.

- **Stato**: indica lo stato evasione di ciascuna riga articolo.   

- **Data richiesta**: nel caso di RDA rilasciata dalla pianificazione viene automaticamene compilato con la *Data fine* dell'ordine pianificato di acquisto; può anche essere inserita o modificata manualmente.   

- **Data spedizione**: se la RDA è stata rilasciata dalla pianificazione e la *Data FOB* dell'ordine pianificato è valorizzata, essa verrà riportata in questo campo; può anche essere inserita o modificata manualmente. 

- **Data di arrivo stimata**: se la RDA è stata rilasciata dalla pianificazione e la *Data ETA* dell'ordine pianificato è valorizzata, essa sarà riportata in questo campo; può anche essere inserita o modificata manualmente. 

Nella sezione sottostante la griglia vengono riportati i totali del documento:   

- **Imponibile**: riporta il totale imponibile della Richiesta di acquisto.    
- **Imposta**: riporta il valore dell'imposta calcolata sul totale imponibile, sulla base dell'aliquota IVA indicata per ciascun articolo nel tab *Dati articolo*.    
- **Totale**: dato dalla somma di *Imponibile* e *Imposta*.

### Pulsanti specifici

> **Autorizzazione RDA**: permette di autorizzare tutte le righe articolo selezionate; da questo momento il documento è considerato confermato.   

> **Generatore RDO**: cliccando questo bottone verrà creata la [Richiesta di Offerta/settings) per le righe presenti nel tan *Generatore RDO*. Per maggiori dettagli vedere il paragrafo [Generatore RDOpurchase/purchase-requests/insert-purchase-request#generatore-rdo).   

> **Rollback RDO**: permette di annullare ed eliminare la richiesta di offerta creata precedentemente.   

> **Apri richiesta di offerta**: permette di aprire la RDO generata.

### Dati Articolo{#items-data}

Sono tutti campi informativi che vengono presi di default dall'articolo/fornitore. È possibile comunque sovrascrivere tali informazioni a livello di riga.   

- **Listini**: viene proposto il listino da cui è stato ripreso il prezzo dell'articolo.    

- **Fornitore**: viene riportato il *fornitore preferenziale* di default dell'[anagrafica articoloerp-home/registers/items/create-new-items/item-registry/preferential-vendors).    
- **IVA**: riporta l'aliquota IVA associata all'articolo.   
- **Marca**: rappresenta la marca dell'articolo, ripresa dalla sua anagrafica oppure dal listino dell'articolo.
- **Divisa**: di default viene proposta la [divisaconfigurations/tables/general-settings/currencies) presente nell'[anagraficaerp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/finance) del *Fornitore preferenziale*. 
- **Cambio**: riporta la data e il tasso di cambio da utilizzare per la conversione valuta. 
   

- **Variante**: in questo campo è possibile selezionare una variante dell'articolo tra quelle precedentemente codificate nel tab [Variantierp-home/registers/items/create-new-items/item-registry/variants) dell'anagrafica articolo. Se nel listino sono stati inseriti prezzi e/o sconti diversi per ciascuna variante essi saranno aggiornati quando si sleziona una variante diversa dell'articolo.   
- **Commesse di produzione**: se la richiesta di acquisto è stata generata dalla [pianificazione/ms-master-scheduling/general-schedule/) di una commessa di produzione (con rilascio ordini automatico oppure mediante la [procedura/ms-master-scheduling/planned-orders/procedures/release-planned-orders#richieste-dacquisto) di rilascio di un ordine pianificato di acquisto) in questo campo sarà riportato il riferimeto alla commessa. Per maggiori informazioni vedere anche la [sezione introduttivapurchase/purchase-requests/general-overview).   
- **Operatore**: in quersto campo è possibile inserire l'operatore che ha inserito la richiesta di acquisto.   

- **Progetto**: in questo campo è possibile associare un progetto a ciascun articolo. Se la RDA è stata generata a partire dalla pianificazione di una commessa di produzione contenente un progetto, esso sarà automaticamente riportato sulle singole righe articolo.   
- **Tipo fatturato acquisti**: viene proposto il dato inserito nel tab [Generalitàerp-home/registers/items/create-new-items/item-registry/generality) dell'anagrafica articoli.    
- **Priorità richiesta**: viene riportata la *priorità approvvigionamento* presente all'interno della [commessa di produzione/mps-master-production-scheduling/production-job-orders/new-monoproduct-job-order).   
- **Note**: in questo campo è possibile inserire note relative alla riga articolo; saranno riportate in tutti i documenti generati da questo.   
- **Data evasione**: al momento della [creazione dell'ordine fornitorepurchase/purchase-orders/procedures/create-purchase-orders-from-purchase-requests) dalla richiesta di acquisto, le righe inserite nell'ordine vengono evase e vuiene riportata in quetso campo la data dell'evasione.   

- **Autorizzata**: può essere attivato manualmente per ogni riga oppure attraverso il bottone della ribbon bar *Autorizzazione RDA*.    
- **In data**: riporta la data in cui è stata autorizzata la riga articolo della RDA.   
- **Dall'utente**: riporta il nome dell'utente che ha autorizzato la richiesta di acquisto.   


### Analitica

Contiene campi relativi alla contabilità analitica. Vengono riportati i centri di costo/profitto sui quali sono distribuiti i valori dei prodotti acquistati.    

Questi dati possono essere inseriti: manualmente oppure automaticamente, nel caso in cui i centri di costo/profitti sono stati inseriti precedentemente nell'anagrafica del contatto, anagrafica articolo oppure nel piano dei conti.

### Documenti allegati

Viene visualizzato il dettaglio di un eventuale documento allegato (nome, tipo di documento, eventuali note, ns/vs riferimento).    

Per le istruzioni relative a come allegare un documento si rimanda all'articolo  [Allega documentiguide/common/operations-with-data/attach-documents).

### Generatore RDO

In questa tab vengono riportati i *Fornitori preferenziali* presenti nell'anagrafica dell'articolo selezionato in griglia con i relativi dati, listini e prezzi. Da questa tab è possibile quindi scegliere il miglior prezzo. In alternativa, è possibile inserire manualmente il fornitore da considerare per l'articolo.    

È possibile scegliere tra: 
1. **Fornitore**: per specificare un'anagrafica fornitore esistente; la selezione di questa opzione abilita l'inserimento del dato nel campo *Descrizione conto*.  
2. **Nomenclatura**: per specificare *Nomignolo* e *Ragione sociale* del contatto da utilizzare; la selezione di questa opzione abilita l'inserimento dei dati nei campi *Nomenclatura* e *Descrizione nomenclatura*.  
3. **Contatto**: per selezionare un [Contatto CRMhome-crm/contacts/search-contacts) a cui richiedere l'offerta; la selezione di questa opzione abilita l'inserimento del dato nel campo *Contatto*.  
4. **Nuovo fornitore**: per selezionare un fornitore per cui non è stata ancora codificata l'anagrafica; la selezione di questa opzione abilita l'inserimento del dato nel campo *Descrizione fornitore*.  

Gli altri campi presenti nella griglia sono: 
- **Codice/Descrizione/Barcode articolo fornitore**: riportano il codice e la decsrizione con cui il fornitore identifica l'articolo richiesto; sono campi facoltativi.     
- **Unità di misura**: viene proposta l'unità di misura associata al fornitore nell'[angrafica dell'articoloerp-home/registers/items/create-new-items/item-registry/preferential-vendors), oppure l'unità di misura principale nel caso in cui tale campo non sia valorizzato.   
- **Quantità**: viene proposta in base all'eventuale lotto economico del fornitore, se specificato nel tab [fornitori preferenzialierp-home/registers/items/create-new-items/item-registry/preferential-vendors) dell'articolo; in alternativa viene proposta la quantità presente nella riga articolo della RDA.
- **Prezzo**: viene proposto in base al listino associato al fornitore preferenziale. 
- **Data stimata consegna**: permette di inserire la data prevista per la consegna. 
- **IVA**: viene proposta l'aliquota IVA presente nel tab *Dati articolo*, ma è modificabile manualmente.  
- **Unità di misura/Quantità alternativa**: permette di selezionare un'unità di misura e una quantità alternativa che saranno riportate nei documenti generati dalla RDO. 
- **Prezzo unità di misura alternativa**: se attivo, il prezzo viene moltiplicato per la quantità alternativa. 
- **Listino di Acquisto**: riporta il listino da cui è stato ripreso il prezzo. 
- **Sospseso**: questo flag viene attivato automaticamente quando la RDO è stata generata.

La presenza di almeno una riga in questa tab fa attivare il bottone della ribbon bar **Generazione RDO**. Cliccando questo bottone, verrà creata la [Richiesta di Offerta/settings) per le righe selezionate. Il documento creatò sarà consultabile nella ricerca RDO, oppure è possibile aprirlo direttamente col bottone **Apri richiesta di offerta** della ribbon bar.   

Per annullare una creazione effettuata, è possibile utilizzare il bottone della ribbon bar **Rollback RDO**, il quale cancellerà la *Richiesta di offerta* creata.
