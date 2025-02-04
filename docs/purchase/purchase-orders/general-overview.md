---
title: Introduzione
sidebar_position: 1
---

Il modulo si trova nell'area **Acquisti > Ordini fornitori** e rappresenta uno degli step intermedi del ciclo passivo. Gli ordini di acquisto sono documenti formali emessi dal reparto *Acquisti*, utilizzati per richiedere beni o servizi da un fornitore, secondo condizioni predefinite. Contengono i dettagli relativi ai prodotti o servizi da acquistare, inclusi quantità, prezzi, termini di consegna, condizioni di pagamento e altre specifiche contrattuali.   

### **Flusso operativo**

Gli ordini di acquisto possono essere inseriti manualmente oppure creati automaticamente a partire da documenti preesistenti. Le modalità di generazione automatica comprendono:    

- **Richieste di acquisto**: attraverso la procedura di [Creazione automatica ordinipurchase/purchase-orders/procedures/create-purchase-orders-from-purchase-requests) è possibile evadere le RDA autorizzate all'interno di un ordine di acquisto.    
- **Richieste di offerta**: dopo aver selezionato l'offerta migliore tra quelle ricevute dai fornitori è possibile generare l'ordine di acquisto mediante la procedura di [Creazione Ordine fornitore da Offerta fornitore/procedures/order-creation).   
- **Ordini clienti**: la procedura di *Creazione automatica ordini* permette anche la creazione di un *Ordine fornitore* a partire da un *Ordine cliente*. In alternativa, è possibile generare un ordine di acquisto dal filtro di [Ricerca Ordini clienti-orders/search-sales-orders) mediante il pulsante *Creazione ordini fornitori*.    
- **Commesse di acquisto**: l'ordine di acquisto può essere generato anche attraverso l'[evasione* totale o parziale di una commessa di acquisto, sulla base di contratti predefiniti e già negoziati con il fornitore.   

Una volta confermato, l'ordine di acquisto può essere evaso tramite un DDT o una fattura. Questo permette la registrazione della merce in magazzino e la successiva contabilizzazione della fattura all'interno del sistema, mantenendo un controllo accurato delle scorte e dei flussi finanziari.

Il modulo offre inoltre la possibilità di creare il [ricevimento della merce-reception/receipt-goods-form-settings-and-structure) permettendo all'operatore di evadere l'ordine fornitore, registrare l'arrivo dei beni, posizionarli nel magazzino o nelle ubicazioni predefinite, e procedere successivamente al carico ufficiale delle merci in magazzino.

### **Funzionalità principali**

- Gestione completa delle anagrafiche: Gli ordini sono integrati con le anagrafiche dei fornitori e listini, permettendo la configurazione automatica di sconti, termini di pagamento e altre condizioni specifiche per ciascun fornitore. 
- Tracciabilità dello stato dell'ordine: Gli ordini possono essere monitorati attraverso diversi stati (inserito, stampato, ecc.), con aggiornamenti in tempo reale disponibili per tutte le fasi del processo.
- Workflow automatizzati: Le fasi di approvazione, invio notifiche e aggiornamenti degli ordini possono essere automatizzate tramite workflow configurabili, migliorando la velocità operativa e riducendo il rischio di errori.
- Reportistica e analisi degli ordini: È possibile accedere a report dettagliati che analizzano volumi d’ordine, tempi di evasione, ordini non completati, e altri KPI utili per migliorare la gestione degli acquisti e delle performance aziendali.

### **Impostazioni**

Prima di utilizzare il modulo, è necessario configurare correttamente i seguenti parametri e tabelle: 
> - [Numerazioniconfigurations/tables/fluentis-numerations)    
> - [Tipo ordini fornitoriconfigurations/tables/purchase/purchase-orders-type) 
> - [Parametri ordini fornitoriconfigurations/parameters/purchase/purchase-orders-parameters)

