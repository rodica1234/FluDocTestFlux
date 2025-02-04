---
title: Anagrafiche contatti
sidebar_position: 2
---

Attraverso questa gestione è possibile definire la rubrica di tutti i soggetti con i quali possono lavorare le società definite nel database, sia come intestatari dei documenti del ciclo attivo/passivo/contabile che come semplici indirizzi e riferimenti di sedi alternative.

:::danger[Attenzione]
La parte generale definita **Contatto** accoglie solo i dati generali del soggetto in questione, quali la ragione sociale di un'azienda o il nome di un professionista o soggetto privato, il loro indirizzo, il codice fiscale e la partita iva ecc...

Questi dati costituiscono un serbatoio, una sorta di rubrica, a disposizione di tutte le aziende gestite nel database.

Ogni azienda ha il proprio piano dei conti e pertanto, al fine di poter utilizzare l'anagrafica concretamente nel ciclo documentale e nelle registrazioni contabili e definire i vari dettagli d interesse, **è necessario, all'interno di ogni singola società coinvolta** (agendo dunque dopo aver selezionato la società attiva) [**associare il Contatto ad un Tipo conto**erp-home/registers/contacts/create-new-contact/accounting-data/accounting-data-intro) al fine di inizializzare l'anagrafica in dettaglio associandole appunto un conto contabile che identificherà anche ai fini della contabilità quel determinato cliente italiano o ad esempio quel determinato fornitore europeo, quell'agente o quella banca.
:::

### Ricerca anagrafiche

La form si apre tramite il percorso **Home > Anagrafiche > Anagrafiche contatti** ed è stata disegnata per permettere all'utente di ricercare facilmente all'interno della rubrica dei contatti, con lo scopo di visualizzarli, modificarli, annullarli ed eventualmente cancellarli o procedere all'inserimento di una nuova referenza, previa la possibilità di avere i diritti necessari per queste operazioni.

Come tutte le form di ricerca, questa finestra si compone di un'area di filtro e di una griglia di risultato. Una volta impostati tutti i filtri desiderati, basterà cliccare sul pulsante **Ricerca** per visualizzare i risultati all'interno della griglia di risultato.

Posizionandosi sulla riga dell'anagrafica che si desidera visualizzare nel dettaglio e facendo doppio click si aprirà la finestra di dettaglio contenente le informazioni **Generali** e tutti i **Dati contabili** relativi a quell'anagrafica, che verranno dettagliati negli articoli seguenti.


*Pulsante specifico*:  
> **Duplica**: permette di duplicare l'anagrafica selezionata. Il pulsante apre una form all'interno della quale si devono definire gli elementi di base della copia: ragione sociale, nomignolo (cioè codice dell'anagrafica stessa), indirizzo, cap, comune e provincia. Una volta confermata la copia, questa sarà aperta in modifica automaticamente. Nella copia dell'anagrafica, saranno ricreati anche tutti i sottoconti del piano dei conti associati all'anagrafica nella società attiva, attribuendo un nuovo sottoconto secondo il progressivo di ogni mastro.

### Crea anagrafica

La **Nuova anagrafica** si può inserire:

- attraverso il percorso **Home > Contatti > Crea Anagrafica contatti**

   oppure

- cliccando sul pulsante **Nuovo**, all'interno della form **[Anagrafiche contattierp-home/registers/contacts/registers-management)**.

La form **Anagrafica** si compone di due tab:
- **[Generaleerp-home/registers/contacts/create-new-contact/general)** in cui si troveranno le informazioni generali dell'anagrafica;
- **[Dati Contabilierp-home/registers/contacts/create-new-contact/accounting-data/accounting-data-intro)** che a sua volta presenterà una serie di tab nei quali si potranno inserire informazioni più specifiche di tipo amministrativo, commerciale, logistico e che verranno dettagliate negli articoli successivi.
 

## Riepilogo
:::tip[Flusso Operativo per le Anagrafiche]
1. Usare il comando *Nuovo* per inserire un *Contatto* che contiene i dati anagrafici generali
2. Scrivere il numero di partita iva e usare il comando **Proponi Dati** per compilare automaticamente i dati generali verificando anche la validità della partita iva 
3. Associare un **Tipo conto** e viene creato automaticamente il conto contabile, si attivano i dettagli
4. Compilare i dettagli nei vari tab, in particolare le **Condizioni di pagamento** (se Cliente, Fornitore o Agente) oppure l'IBAN se anagrafica Banca
:::