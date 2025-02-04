---
title: Tipi ordine cliente
sidebar_position: 23
---

:::tip[FAst Start]
La tabella è interessata dalla procedura di [**Fast Start**guide/fast-start)

Nel caso in cui si intenda configurare manualmente fare riferimento alla check list della pagina linkata
:::

La tabella si apre tramite il percorso **Tabelle > Vendite > Tipi ordine cliente**.

Consente di inserire nuovi record o di ricercare quelli già esistenti per visualizzarli, modificarli oppure cancellarli.

La form si compone di un'area di filtro e da una di risultato. Una volta impostati tutti i filtri desiderati, basterà cliccare sul pulsante **Ricerca** per visualizzare i risultati all'interno della griglia di risultato.
 
Per inserire nuovi record è necessario cliccare nella griglia sulla prima riga vuota oppure premere il pulsante **Nuovo**.  

**Tipo/Descrizione:** campi in cui viene indicato il codice e la descrizione della tipologia di ordine cliente. Importante: il codice deve essere univoco per società e dvisione; 

**Numerazione**: in questo campo va inserito il codice della numerazione appropriato. Per approfondimenti sulla numerazione dei documenti si rimanda all'articolo  [Numerazioni Fluentisconfigurations/tables/fluentis-numerations); 

**Creazione Progetto Automatico** e **Tipo Progetto**: se attivo, il sistema provvederà, in fase di inserimento ordine cliente, a creare un progetto del tipo specificato nella colonna Tipo Progetto presente sempre nel tipo ordine e con lo stesso numero dell'ordine cliente, il progetto verrà automaticamente inserito in testata dell’ordine cliente per creare la relazione. Il progetto creato è considerato come un contenitore per collezionare i documenti collegati al progetto e alle sue righe. Il progetto creato dall’ordine cliente viene tenuto aggiornato in base alle modifiche fatte nell’ordine e viene mantenuto il legame riga progetto per ogni riga ordine. 

**Conferma ordine automatica**: se attivo, all’inserimento di un nuovo ordine viene settata la data conferma ordine automaticamente uguale alla data inserimento ordine; 

**Escludi blocco:** si riferisce al blocco per superamento del fido e perciò inserito nella gestione Lock Manager presente nell’area tesoreria tra le procedure dell’Utilizzo Fidi. Se attivo, il sistema per questo tipo ordine non considererà il blocco del documento dovuto al superamento del fido ma lascerà all'utente la possibilità di inserire e stampare il documento; se non attivo, il tipo ordine verrà bloccato qualora si superi il fido e all'utente verrà impedito la stampa del documento; 

**Evasione tipo DDT**: contiene il tipo DDT che si vuole venga generato al lancio della procedura automatica di Evasione DDT presente nella ribbon button della Ricerca Ordini Clienti; 

**Evasione tipo fattura**: contiene il tipo fattura  che si vuole venga generato al lancio della procedura automatica di Evasione Fatture presente nella ribbon button della Ricerca Ordini Clienti; 

**Evasione tipo picking**: contiene il tipo picking che si vuole venga generato al lancio della procedura di creazione del picking dalle [Spedizionishipping/shippings); 

**Blocca Doc. Stampato**: se attivo, non permette la modifica dell'ordine cliente che abbia il flag “Stampato” attivo in testata; 

**Fido**: se attivo, l'ordine con questo tipo viene considerato per il calcolo del superamento del fido; 

**Cash flow**: se attivo, il tipo ordine concorre al calcolo del [cash flowtreasury/cash-flow/cash-flow/search-cash-flow); 

**Magazzino/Descrizione magazzino**: in questi campi si andrà ad indicare il [magazzinoconfigurations/tables/logistics/warehouses)  di impegno degli articoli presenti in quel determinato tipo di ordine; il magazzino qui specificato viene riportato in tutte le righe articolo inserite nell’ordine di questa tipologia. 

**Causale /Descrizione causale magazzino**: in questi campi si andrà invece ad indicare la *causale di movimentazione* degli articoli impegnati contenuti in quel determinato tipo di ordine; la causale qui specificata viene riportato in tutte le righe articolo inserite nell’ordine di questa tipologia. 

**Evasione Quantità Articolo non sommata**: se attivo, evadendo in momenti diversi la stessa riga ordine nello stesso documento di evasione (DDT, Fattura, ..) vengono riportate nel documento di evasione le singole righe articolo senza sommare le quantità. Esempio ho una riga ordine di 10 pz faccio una prima evasione in DDT di 2 pezzi, poi una seconda evasione della stessa riga di altri 2 pz, nel ddt compariranno 2 righe articolo con quantità 2 ciascuna, mentre senza il flag la seconda evasione avrebbe incrementato la riga DDT portando a 4 la quantità; 

**Controllo disponibilità**: se attivo, questi tipi ordine verranno considerati nel [calcolo della disponibilitàerp-home/registers/items/calculate-availability); 

**Agr. Acq. IVA**: se attivo, in fase di creazione dell'ordine, il sistema andrà a controllare se per l'articolo utilizzato è presente un codice dell'IVA agricola, altrimenti verrà utilizzato il codice IVA presente nell'[anagrafica articoloerp-home/registers/items/create-new-items/item-registry/generality); 

**Prezzo Ivato**: la gestione dei prezzi ivati si attiva tramite questo parametro presente in tutti i documenti dell’area vendita a partire dai listini di vendita. Nella ripresa prezzi di un documento con tipologia Prezzo Ivato, si cerca nei listini, con lo stesso flag Prezzo Ivato settato, e si calcolano gli sconti partendo sempre dal prezzo ivato. Dal prezzo ivato utilizzando l’aliquota iva dell’anagrafica cliente o dell’anagrafica articolo  viene calcolato il prezzo non ivato.Nei documenti sono visibili le colonne Prezzo e Prezzo Ivato Attenzione! se non esiste un listino valido con settato il flag Prezzo Ivato e in anagrafica articoli c’è un prezzo di vendita, viene proposto come Prezzo Ivato il prezzo di vendita. Attenzione! è possibile evadere un ordine con flag prezzo ivato in un ddt con tipologia non a prezzo ivato, i totali di riga vengono calcolati in modo diverso tra un documento con flag prezzo ivato e un documento senza flag prezzo ivato. Attenzione! è possibile duplicare un ordine con flag prezzo ivato in un ordine con tipologia non a prezzo ivato, i totali di riga vengono calcolati in modo diverso tra un documento con flag prezzo ivato e un documento senza flag prezzo ivato. Per capire il funzionamento della ripresa Prezzi e dei prezzi ivati e non ivati seguire l’articolo Ripresa Prezzi e Sconti nei documenti di vendita.       

**Tipo commessa produzione**: in questo campo è possibile indicare il tipo di commessa di produzione che si vuole venga generata da questo tipo di ordine all'interno della *Definizione MPS* nel momento della generazione delle commesse di produzione da ordine cliente; nel caso in cui sia settato il successivo flag *Generazione commessa di produzione*, la generazione della commessa avverrà automaticamente quando l'ordine viene confermato.     

**Tipo ordini fornitori/Descrizione tipo OF**: va indicato il codice del tipo ordine fornitore che si vuole venga generato, nel caso si scelga di generare l'ordine fornitore partendo dall'ordine cliente, tramite l'apposita procedura; 

**Controllo cliente**: se attivo, nel momento in cui viene inserito il cliente all'interno dell'ordine, il sistema andrà a fare un controllo sulle anagrafiche, andando a verificare che il codice inserito corrisponda obbligatoriamente al codice di un'anagrafica cliente. Se così non fosse il sistema avviserà l'utente; senza questo flag è possibile creare Ordini anche per tipi conto Fornitore. 

**Gestione Matrici Extra Data**: se attivo, permette di visualizzare, nel caso di gestione articoli con matrice, un tab aggiuntivo per l'imputazione dei valori della quantità per singola cella di matrice. Se non attivo, non viene visualizzato questo TAB e la conseguente matrice. Per saperne di più della gestione Matrici leggere l’articolo Gestione Matrici Extra-Data. 

**Configurazione**: in questo campo di andrà ad inserire un codice per l'impostazione automatica degli Extradata nella testata dell'ordine cliente. 

**Stampa**: in questo campo è possibile impostare la stampa di default da utilizzare per questa tipologia di documento; ricordiamo che, in fase di stampa documento, sarà necessario selezionare il report 'Stampe multiple' per utilizzare in automatico la stampa di default;

**Numero di copie**: in questo campo vengono impostate il numero di copie documento da stampare; 

**Generazione Commessa di Produzione**: se attivo, indica che la commessa di produzione del tipo specificato nella colonna *Tipo Produzione Commessa* verrà creata automaticamente una volta che l'ordine viene confermato. 

:::note
Quando viene aggiunta una nuova riga all’interno di un Ordine Cliente per cui vengono generate automaticamente le Commesse di Produzione, la nuova riga nella commessa assume stato *Non esaminato*.
:::

**Gestione Cespiti**: se attivo, nel tab articoli dell’ordine viene attivato il tab Cespiti per collegare l’ordine alla vendita di un cespite 

**Tipo Operazione**: è sempre collegata alla gestione cespiti, se indicata viene proposta automaticamente nel widget Tipo Operazione presente nel tab Cespiti del tab Articoli dell’ordine.      

**Tipo sconto/Descrizione**: in questa colonna è possibile associare la tipologia di sconto da proporre quando gli sconti vengono inseriti direttamente nella colonna *Sconti articolo* della griglia articoli dei documenti (per maggiori dettagli vedi l'articolo [Gestione Widget sconti semplificato-flow/discount-widget)).