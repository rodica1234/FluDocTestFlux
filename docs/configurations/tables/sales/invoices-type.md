---
title: Tipi fatture di vendita
sidebar_position: 20
---

:::tip[FAst Start]
La tabella è interessata dalla procedura di [**Fast Start**guide/fast-start)

Nel caso in cui si intenda configurare manualmente fare riferimento alla check list della pagina linkata
:::

La tabella si apre tramite il percorso **Tabelle > Vendite > Tipi fatture di vendita** ed è utilizzata per determinare le proprietà di una fattura;

Consente di inserire nuovi record o di ricercare quelli già esistenti per visualizzarli, modificarli oppure cancellarli;

La form si compone di un'area di filtro e da una di risultato; Una volta impostati tutti i filtri desiderati, basterà cliccare sul pulsante **Ricerca** per visualizzare i risultati all'interno della griglia di risultato;

Per poter inserire nuovi record è necessario cliccare nella griglia sulla prima riga vuota oppure premere il pulsante **Nuovo**; 

**Tipo/Descrizione**: tipo fattura e descrizione del tipo fattura; il codice inserito deve essere univoco;

**Numerazione:** in questo campo va inserito il codice della numerazione appropriato; Per approfondimenti fare riferimento all'articolo relativo alle [numerazioni fluentisconfigurations/tables/fluentis-numerations); 

**Natura fattura**: in questo campo va inserita la natura associata al tipo fattura; il valore verrà selezionato da un elenco tra Fattura, Nota di credito, ecc;

**Ordine**: se attivo, la fattura potrà essere creata dall'evasione dell'ordine tramite l'apposita procedura; altrimenti, il bottone 'Evasione da ordini' sarà disattivato;

**Immediata**: se attivo, significa che la fattura è di tipo immediato e dovranno essere compilati, nella fattura, anche i dati per il trasporto; se non attivo la fattura sarà di tipo differito e i dati del trasporto saranno recuperati dal DDT;

**Natura della Transazione Intrastat**: in questo campo va inserito il codice transazione utilizzato per la dichiarazione intrastat; Per approfondimenti fare riferimento alla [Natura transazioni intrastatconfigurations/tables/finance/nature-of-intrastat-transaction); 

**In statistica**: se attivo, la fattura con questo tipo verrà riportata nelle statistiche quindi sarà visibile nelle stampe *Fatturato*;

**Proforma**: se attivo, la fattura è di tipo proforma e non può essere contabilizzata;

**Causale**: in questo campo va inserita la causale contabile utilizzata per la contabilizzazione della fattura; Per approfondimenti fare riferimento alle [causali di contabilità generaleconfigurations/tables/finance/ledger-records-templates/insert-ledger-records-templates/recording-detail);

**Tipo documento**: in questo campo va inserita la causale analitica utilizzata pe la contabilizzazione della fattura in contabilità analitica;

**Note**: campo di testo libero in cui è possibile inserire delle note descrittive del tipo fattura;

**Controllo cliente**: se attivo, questo flag consente al sistema di effettuare un controllo sul tipo anagrafica del conto/sottoconto che si è inserito nel documento per verificare che sia obbligatoriamente un cliente; Se così non fosse il sistema avviserà l'utente riportando un messaggio di errore; Sarebbe *obbligatorio* attivarlo su tutte le tipologie di fattura di vendita;

**Blocca doc; stampato**: se attivo, questo flag non permette di modificare una fattura che risulti essere già con il flag *Stampato* settato in testata;

**Intracomunitaria**: se attivo, il sistema verifica che la nazione del cliente sia una *nazione CEE*; Questo flag andrà *impostato solo su tipi fattura Intracomunitari*; Qualora non ci fosse il link tra cliente e tipo fattura intracomunitaria, il sistema ritornerà un messaggio di avviso;

**Evasione fattura proforma**: se settato, e la fattura è proforma, l'evasione evade l'ordine altrimenti l'ordine rimane non evaso;

**Causale trasporto**: Campo di testo libero in cui va indicata una causale di trasporto da poter stampare in fattura;

**Fido**: se attivo, la fattura con questo tipo rientrerà nel controllo del fido;

**Escludi blocco:** si riferisce al blocco per superamento del fido e perciò inserito nella gestione Lock Manager presente nell’area tesoreria tra le procedure dell’Utilizzo Fidi. Se attivo, il sistema per questo tipo fattura non considererà il blocco del documento dovuto al superamento del fido ma lascerà all'utente la possibilità di inserire e stampare il documento; se non attivo, il tipo fattura verrà bloccato qualora si superi il fido e all'utente verrà impedito la stampa del documento; 

**Magazzino/Descrizione magazzino**: in questi campi si andrà ad indicare il [magazzinoconfigurations/tables/logistics/warehouses) di impegno degli articoli presenti in quel determinato tipo di fattura; il magazzino qui specificato viene riportato in tutte le righe articolo inserite nella fattura di questa tipologia; 

**Causale /Descrizione causale magazzino**: in questi campi si andrà invece ad indicare la [causale di movimentazioneconfigurations/tables/logistics/warehouse-templates) degli articoli impegnati contenuti in quel determinato tipo di ordine; la causale qui specificata viene riportato in tutte le righe articolo inserite nell’ordine di questa tipologia; 

**Raggruppamento partite**: se attivo, nella contabilizzazione fatture vengono raggruppate le partite; Per approfondimenti fare riferimento a [raggruppamento partite/maturity-values/maturity-values/maturity-value-grouping); 

**Iva agricola per vendite**: se attivo, in fase di creazione DDT, il sistema andrà a verificare se per l'articolo utilizzato è presente un codice dell'IVA agricola altrimenti verrà utilizzato il codice IVA presente nell'anagrafica dell'articolo;

**Controlla Picking scaricato**: se attivo, quando si crea una fattura da un Picking scaricato, si attiva in automatico il flag scaricato per la DDT; Se non attivo, il flag non viene attivato; 

**Blocca quantità Picking**: se attivo, blocca la quantità e la quantità alternativa nella fattura  creata da lista UDC; Se non attivo non blocca la quantità ma la lascia libera; Si consiglia di attivare sempre questo flag qualora si utilizzi la gestione picking e UDC;

**Calcola provvigioni**: se attivo, le fatture appartenenti a questa tipologia, verranno conteggiate nel il calcolo delle provvigioni agenti;

**Scollega DDT**: se attivo, è possibile scaricare da magazzino anche le fatture differite (Normalmente lo scarico magazzino avviene tramite DDT);

**Non evade Picking**: se attivo, non farà evadere il picking qualora venga generata una fattura;

**Prezzo Ivato**: la gestione dei prezzi ivati si attiva tramite questo parametro presente in tutti i documenti dell’area vendita a partire dai listini di vendita. Nella ripresa prezzi di un documento con tipologia Prezzo Ivato, si cerca nei listini, con lo stesso flag Prezzo Ivato settato, e si calcolano gli sconti partendo sempre dal prezzo ivato. Dal prezzo ivato utilizzando l’aliquota iva dell’anagrafica cliente o dell’anagrafica articolo  viene calcolato il prezzo non ivato.Nei documenti sono visibili le colonne Prezzo e Prezzo Ivato Attenzione! se non esiste un listino valido con settato il flag Prezzo Ivato e in anagrafica articoli c’è un prezzo di vendita, viene proposto come Prezzo Ivato il prezzo di vendita. Per capire il funzionamento della ripresa Prezzi e dei prezzi ivati e non ivati seguire l’articolo Ripresa Prezzi e Sconti nei documenti di vendita.  

**Competenza economica**: se attivo, il tipo fattura ha competenza economica e quindi sarà necessario impostare le date del periodo di competenza;

**Causale Competenza Economica**: in questo campo va indicata la causale di competenza economica utilizzata in contabilizzazione delle fatture; Questo valore potrà essere scelto da un elenco; Per approfondimenti fare riferimento alle [Causali di contabilità generaleconfigurations/tables/finance/ledger-records-templates/search-ledger-records-templates);

**Gestione matrici Extra Data**: se attivo, permette di visualizzare nel caso di gestione articoli con matrice, un tab aggiuntivo per l'imputazione dei valori della quantità per singola cella di matrice; Se non attivo, non viene visualizzato questo TAB e la conseguente matrice;

**Stampa**: in questo campo è possibile impostare la stampa di default da utilizzare per questa tipologia di documento; ricordiamo che, in fase di stampa documento, sarà necessario selezionare il report 'Stampe multiple' per utilizzare in automatico la stampa di default;

**Numero di copie**: in questo campo vengono impostate il numero di copie documento da stampare; 

**Gestione Conai**: questo bottone abilita la gestione CONAI (Consorzio Nazionale Imballaggi) per il tipo fattura;

**Gestione cespiti**: questo flag abilita la gestione dei cespiti nel tipo fattura e nel campo successivo va specificato il tipo di operazione dei cespiti;

**Tipo operazione**: in questa combo box è possibile selezionare il tipo di operazione dei cespiti tra diverse opzioni (rivalutazione, distruzione, plusvalenza, ecc.).       

**Tipo sconto/Descrizione**: in questa colonna è possibile associare la tipologia di sconto da proporre quando gli sconti vengono inseriti direttamente nella colonna *Sconti articolo* della griglia articoli dei documenti (per maggiori dettagli vedi l'articolo [Gestione Widget sconti semplificato-flow/discount-widget)).