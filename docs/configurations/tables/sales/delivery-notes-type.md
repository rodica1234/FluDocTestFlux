---
title: Tipi DDT di vendita
sidebar_position: 18
---

:::tip[FAst Start]
La tabella è interessata dalla procedura di [**Fast Start**guide/fast-start)

Nel caso in cui si intenda configurare manualmente fare riferimento alla check list della pagina linkata
:::

La tabella si apre tramite il percorso **Tabelle > Vendite > Tipi DDT di vendita** ed è utilizzata per determinare le proprietà di un DDT.

Consente di inserire nuovi record o di ricercare quelli già esistenti per visualizzarli, modificarli oppure cancellarli.

La form si compone di un'area di filtro e da una di risultato. Una volta impostati tutti i filtri desiderati, basterà cliccare sul pulsante **Ricerca** per visualizzare i risultati all'interno della griglia di risultato.

Per poter inserire nuovi record è necessario cliccare nella griglia sulla prima riga vuota oppure premere il pulsante **Nuovo**. 

**Tipo DDT /Descrizione tipo DDT**: tipo e descrizione del tipo DDT. Il codice del DDT deve essere univoco;

**Numerazione:** in questo campo va inserito il codice della numerazione appropriato. Per approfondimenti fare riferimento all'articolo relativo alle [numerazioni Fluentisconfigurations/tables/fluentis-numerations);

**Natura DDT**: in questo campo va inserita la natura del DDT: consegna, reso, c/visione e reso c/visione. Questo valore dovrà essere selezionato da un elenco;

**Ordine**: se attivo, questo flag indica che il DDT può essere evaso da un ordine cliente;

**Valori**: se attivo, questo flag farà si che nella stampa DDT vengano mostrati i valori delle righe articolo presenti nel documento;

**Tipo fattura/Descrizione tipo fattura**: in questi campi verrà definito il tipo fattura che si vorrà venga utilizzato per creare la fattura da DDT tramite l'apposita [proceduraprocedures/create-invoices-from-delivery-notes). E' possibile creare la fattura dal DDT solo se questo campo è valorizzato con il tipo fattura;

**Causale Trasporto**: in questi campo andrà inserita la descrizione della causale di trasporto; si tratta di un campo di testo libero su cui indicare la causale che verrà proposta nel DDT;

**Controllo Cliente**: se attivo,  questo flag consente al sistema di effettuare un controllo sul tipo anagrafica del conto/sottoconto che si è inserito nel documento per verificare che sia obbligatoriamente un cliente. Se così non fosse il sistema avviserà l'utente riportando un messaggio di errore. Sarebbe Obbligatorio attivarlo su tutte le tipologie di DDT di Vendita;

**Blocca Doc. Stampato**: se attivo, questo flag non permette di modificare un DDT che risulti essere già con il flag Stampato settato in testata;

**Fido**: se attivo, il DDT con questo tipo rientrerà nel controllo del fido;

**Escludi blocco**: se attivo, il sistema per questo tipo DDT non andrà a considerare il blocco del documento dovuto all'eventuale superamento fido ma permetterà comunque all'utente di poterlo inserire e stampare;

**Cash flow**: se attivo, il tipo DDT concorre al calcolo del [cash flowtreasury/cash-flow/cash-flow/search-cash-flow).

**Magazzino/Descrizione magazzino**: in questi campi di dovrà inserire il magazzino di arrivo della merce contenuta nelle DDT appartenenti a questa tipologia. Questo valore verrà utilizzato come valore di default;

**Causale magazzino/Descrizione causale magazzino**: in questi campi invece si dovrà andare ad indicare la casuale di movimentazione della merce in arrivo contenuta nelle DDT appartenenti a questa tipologia;

**Evasione quantità articolo non sommata**: se settato questo flag consentirà, nel momento in cui si andranno ad evadere queste tipologie di DDT, di riportare le quantità evase del documento di evasione suddivise per riga articolo senza sommare le quantità;

**Agr. Acq. IVA**: se attivo, in fase di creazione DDT, il sistema andrà a verificare se per l'articolo utilizzato è presente un codice dell'IVA agricola altrimenti verrà utilizzato il codice IVA presente nell'anagrafica dell'articolo;

**Controlla Picking Scaricato**: se attivo, quando si crea una DDT da un Picking scaricato, si attiva in automatico il flag scaricato per la DDT. Si consiglia di attivare sempre questo flag qualora si utilizzi la gestione picking;

**Blocca Quantità Picking**: se attivo, blocca la quantità e la quantità alternativa nel DDT creata da lista UDC. Si consiglia di attivare sempre questo flag qualora si utilizzi la gestione picking e UDC;

**Permetti scarico lotti non disponibili** se attivo, permette anche lo scarico dei lotti non disponibili;

**Gestione EDI**: se attivo, per il DDT di questo tipo è possibile creare un file EDI;

**Prezzo Ivato**: se attivo, il sistema recupera il prezzo di vendita da listini o dall'anagrafica articolo e lo riporta con l'aggiunta dell'IVA. Se non trova il listino (nel caso per esempio di listino scaduto o listino in valuta non compatibile) recupera i costi o i prezzi dall'anagrafica articolo e li riporta comprensivi di IVA.

I costi e i prezzi in anagrafica sono in EUR, quindi il sistema li andrà anche a convertire nella valuta del cliente.

**Verifica lotti:** se attivo, controlla che i lotti siano congrui per gli articoli;

**Gestione matrici Extra Data**: se attivo, permette di visualizzare nel caso di gestione articoli con matrice, un tab aggiuntivo per l'imputazione dei valori della quantità per singola cella di matrice. Se non attivo, non viene visualizzato questo TAB e la conseguente matrice.

**Gestione cespiti**: questo flag abilita la gestione dei cespiti nel tipo fattura e nel campo successivo va specificato il tipo di operazione dei cespiti;

**Tipo operazione**: in questa combo box è possibile selezionare il tipo di operazione dei cespiti tra diverse opzioni (rivalutazione, distruzione, plusvalenza, ecc.).       

**Tipo sconto/Descrizione**: in questa colonna è possibile associare la tipologia di sconto da proporre quando gli sconti vengono inseriti direttamente nella colonna *Sconti articolo* della griglia articoli dei documenti (per maggiori dettagli vedi l'articolo [Gestione Widget sconti semplificato-flow/discount-widget)).