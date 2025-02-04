---
title: Tipi pagamento
sidebar_position: 7
---
:::tip[FAst Start]
La tabella è interessata dalla procedura di [**Fast Start**guide/fast-start)

Nel caso in cui si intenda configurare manualmente fare riferimento alla check list della pagina linkata
:::


La tabella contiene le tipologie di pagamento da utilizzare nel gestionale.

Consente di inserire nuovi record o di ricercare quelli già esistenti per visualizzarli, modificarli oppure cancellarli.

Per inserire nuovi record cliccare nella griglia superiore sulla prima riga vuota oppure premere il pulsante **Nuovo**. 

## Griglia Tipo pagamento

**Pagamento**: è il codice alfanumerico di riconoscimento;

**Descrizione**: è la descrizione del pagamento, riportata normalmente nelle varie stampe del ciclo attivo/passivo;

**Importo di bollo**: importo del bollo;

**Percentuale Pagamento**: consente di associare una tipologia (richiamandola dalla tabella Tipi Sconto) e la relativa percentuale di sconto alle righe articolo del documento in relazione alla tipologia di pagamento; Ad esempio è possibile definire uno sconto 5% nel caso venga utilizzato il tipo pagamento Contanti.

:::note Nota
Questo è uno sconto che va ad abbattere l’imponibile di riga, insieme agli altri sconti derivanti da listini e condizioni commerciali in anagrafica.
:::

**Tipo sconto finanziario / Valore sconto finanziario:** legati alla scadenza fattura, che non vanno a toccare quindi il totale documento ma vengono applicati all’atto della registrazione d’incasso


**Natura effetto**: consente di definire la tipologia di effetto eventualmente connesso o di altro tipo di pagamento. Attualmente il campo ha solo valenza informativa senza particolari automazioni connesse ad eccezione del tipo Ricevuta bancaria che identifica il tipo pagamento adatto alla successiva gestione della creazione effetto.

**Cod. intra serv.** : codice del pagamento da inserire nelle dichiarazioni intrastat

**Codice per fatture elettroniche** : codice identificativo del tipo pagamento per le fatture elettroniche e le fatture alla pubblica amministrazione (esempio. MP01, MP02 ecc... vedere istruzioni ministeriali per la compilazione delle fatture elettroniche)

**Nazione**: filtro per rendere visibile quel tipo pagamento solo alle società del database che hanno la nazionalità specificata (utile in quanto la tabella essendo di base è visibile a tutte le società della stessa base dati).

### Lingue

Per ogni tipo di pagamento selezionato nella griglia superiore, è possibile definire delle descrizioni in lingua: utilizzabile per stampe personalizzate.

### Tipi effetti

Per ogni tipo di pagamento selezionato nella griglia superiore, è possibile preimpostare il tipo di effetto da creare dalla partita/scadenza nel modulo *Portafoglio effetti*.

:::danger Attenzione
L'associazione pagamento - effetto serve per fare in modo che nella maschera di creazione effetti vengano visualizzate solo le partite coerenti per la creazione delle effetto. Ad esempio il corretto settaggio potrebbe essere quello di associare al tipo pagamento RiBa la tipologia di effetto Ricevuta Bancaria, e al tipo pagamento Cambiale il tipo effetto Cambiale, in questo modo non verranno visualizzate ad esempio le partite aperte con tipo pagamento Bonifico nella maschera di creazione effetti dalle partite o dalle scadenze evitando di generare dati incoerenti.
:::

Per tutto quanto non dettagliato in questo documento sul funzionamento comune delle form fare riferimento al seguente link [Funzionalità, pulsanti e campi comuniguide/common).