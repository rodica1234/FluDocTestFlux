---
title: Tipi POS
sidebar_position: 25
---

:::tip[FAst Start]
La tabella è interessata dalla procedura di [**Fast Start**guide/fast-start)

Nel caso in cui si intenda configurare manualmente fare riferimento alla check list della pagina linkata
:::

La tabella si apre tramite il percorso **Tabelle > Vendite > Tipi POS**.

### Ricerca POS

Consente di inserire nuovi record o di ricercare quelli già esistenti per visualizzarli, modificarli oppure cancellarli.

La form si compone di un'area di filtro e da una di risultato. Una volta impostati tutti i filtri desiderati, basterà cliccare sul pulsante **Ricerca** per visualizzare i risultati all'interno della griglia di risultato.

Per modificare/visualizzare un tipo POS basta fare doppio click sulla riga desiderata oppure premere il pulsante **Modifica**.

Per inserire nuovi record è necessario premere il pulsante **Nuovo** che aprirà una nuova form di inserimento. 

### Inserimento/Modifica POS

In questa form si andranno ad inserire tutti i dati relativi al nuovo tipo di POS che si vuole inserire, quali:

**Tipo e descrizione**: in questi campi di dovrà andare a definire il tipo e la descrizione del POS;

**Numerazione**: in questo campo si andrà ad inserire il codice della numerazione appropriato. Per approfondimenti sulle numerazioni del gestionale riferimento all'articolo  [Numerazioni Fluentisconfigurations/tables/fluentis-numerations); 

**Default**: se attivo, questo flag indica il tipo POS di default che viene proposto alla creazione di un nuovo POS;

**Note**: questo è un campo di testo libero nel quale si potranno andare ad inserire eventuali note descrittive che verranno poi visualizzate nelle relative stampe;

**Prezzo Ivato**: se attivo, i prezzi presenti nell'offerta verranno riportati comprendendo l'IVA;

**Acconto**: se attivo, questo flag indica che il POS è di tipo acconto e potrà essere stornato con una transazione con un tipo di POS ordinario;

**Server P.O.S/Database/Tabella**: in questi campi si andrà a selezionare il Server, il Database e la Tabella dove leggere e/o scrivere i dati dei POS;

**Tabella coll. documenti**: tabella dove leggere e/o scrivere i dati dei documenti collegati ai POS;

**UM arr.**: UM utilizzata nella creazione di DDT e fatture da POS;

**IVA arr./Descrizione IVA**: codice IVA utilizzato nella creazione di DDT e fatture da POS;

**Punto vendita**: punto vendita in cui vengono creati i POS;

**Cassa**:  in questo campo va indicato il codice della cassa da collegare ai POS;

**Cat. merc.**: in questo campo viene riportata la categoria merceologica riportata sull'ordine;

**IVA**: codice IVA da utilizzare nei POS;

**Magazzino**: in questo campo va indicato il magazzino di impegno della merce contenuta in POS di questo tipo;

**Causale**: in questo campo va indicata la causale di movimentazione della merce impegnata contenuta in POS di questo tipo;

**Tipo pagamento**: in questo campo viene proposto il tipo pagamento proposto nei POS di questo tipo;

**Soluzione di pagamento**: in questo campo va indicata la soluzione di pagamento proposta nei POS di questo tipo;

**Listino**: in questo campo viene indicato il codice listino generale da cui vengono ripresi i prezzi degli articoli da inserire nel POS;

**Data validità**: qui verrà riportata la data validità del listino generale;

**Scarico automatico alla chiusura del corrispettivo**: se attivo, quando il POS viene stampato viene automaticamente anche scaricato da magazzino, altrimenti bisognerà procedere con lo scarico manuale;

**E' necessario il registratore di cassa**: se attivo, questo flag indica che per utilizzare i POS è necessario il collegamento con un registratore di cassa per la stampa dello scontrino fiscale;

**Visualizza varianti**: se attivo, possono essere utilizzate anche le varianti articolo;

**Visualizza attributi**: se attivo, possono essere utilizzati anche gli attributi articolo.

Per tutto quanto non dettagliato in questo documento sul funzionamento comune delle form fare riferimento al seguente link [Funzionalità, pulsanti e campi comuniguide/common).