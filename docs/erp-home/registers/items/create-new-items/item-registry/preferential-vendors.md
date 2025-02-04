---
title: Fornitori preferenziali
sidebar_position: 12
---

:::important A cosa serve
Il tab Fornitori Preferenziali all'interno dell'anagrafica articoli di Fluentis è una funzionalità chiave per la gestione degli approvvigionamenti. Questo consente di definire in modo preciso i fornitori preferenziali per ciascun articolo, facilitando così il processo di approvvigionamento e garantendo che vengano scelti i fornitori più adatti.
Nella sua interfaccia, la sezione è suddivisa in due parti principali. La prima parte riguarda informazioni generali sui fornitori, come la selezione di un fornitore predefinito, che diventa il principale canale d'approvvigionamento per l'articolo in questione. Qui, gli utenti possono anche impostare parametri importanti come la quantità massima ordinabile, le tolleranze sulle quantità e sui prezzi, e i dettagli relativi agli ordini di fornitura. La seconda parte offre una griglia dettagliata in cui si possono aggiungere informazioni specifiche su ciascun fornitore, come il tempo di approvvigionamento, ed eventuali note.
:::

In questo tab si possono definire, per singolo articolo, quali sono i fornitori preferenziali da cui viene solitamente approvvigionato quell'articolo, indicandone uno di default in modo che il sistema vada ad ordinare sempre dallo stesso fornitore.

La finestra è composta da due sezioni:

1. Nella prima sezione si vanno ad indicare le informazioni relative a tutti i fornitori preferenziali, nel caso queste informazioni siano generiche, quali:

**Relazione fornitore obbligatoria**: se attivo, questo flag indica che questo articolo è acquistabile solamente dal fornitore di default che verrà indicato nella griglia nella seconda parte della schermata;

**Numero massimo righe di prova**: sono il massimo numero di righe di ordine fornitore che si potranno fare per un dato articolo / fornitore fino a quando il flag **Blocco righe ordine** è attivo;

**U.M di acquisto**: in questo campo viene indicata l'unità di misura di acquisto di quel materiale;

**Valore massimo acquistabile**: in questo campo viene indicata la quantità massima ordinabile da quel fornitore per quell'articolo;

**Blocco righe ordine**: se attivo, questo flag indica che si vuole bloccare la possibilità di inserire nuove righe di ordine fornitore;

**Data Blocco**: indica la data in cui si attiva il blocco delle righe ordine fornitore;

**% tolleranza quantità ricevuta in eccesso e in difetto**: in questi due campi si andrà ad indicare la % di tolleranza sulla quantità consegnata in più e in meno dal fornitore per quel materiale;

**% tolleranza prezzo in eccesso e in difetto**: in questi due campi si andrà ad indicare la % di tolleranza sul prezzo fornitore in eccesso e in difetto rispetto al prezzo stabilito;

**consenti prezzo a zero**: se attivo, questo flag consente di emettere ordini fornitori con prezzo a zero per quell'articolo.

2. Nella seconda parte della schermata si trova una griglia, nella quale si andrà ad indicare il fornitore di default ed eventuali altri fornitori che vengono utilizzarti per l'acquisto dell'articolo e i relativi dati per ogni fornitore:

**Fornitore**: si andrà ad indicare il conto/sottoconto/descrizione del fornitore;

**Default**: questo flag, se attivo indica il fornitore di default nel caso di più fornitori;

**Lotto economico**: in questa sezione di andrà ad indicare per ogni fornitore il lotto economico minimo e i suoi multipli;

**Articolo fornitore**: in questa sezione si potrà aggiungere il codice e la descrizione che il fornitore utilizza per identificare l'articolo;

**Tempo di approvvigionamento**: si andrà ad indicare per ogni fornitore la gestione ovvero il tempo necessario al fornitore per riprodurre/acquistare quell'articolo, la spedizione ovvero il tempo necessario di spedizione del materiale dal fornitore, tempo totale la somma dei due dati precedenti che va ad indicare il tempo necessario per reintegrare la scorta di materiale;

**Ordine di acquisto**: in questa sezione si andranno ad indicare per ogni singolo fornitore le informazioni relative agli ordini di acquisto già dettagliate sopra (U.M, blocco riga, data blocco, numero massimo di righe, valore massimo, % di tolleranza quantità ricevuta in eccesso/difetto);

**Produttore**: in questa sezione si andrà ad indicare il conto e la descrizione del produttore del materiale;

**Origine**: indica l'origine della merce, ad esempio il paese di proveniente o la provenienza di origine animale o vegetale;     

**Controlli di accettazione**: all'interno di questo campo si andranno ad indicare eventuali controlli che è necessario eseguire all'accettazione del materiale prima di poterlo utilizzare;

**Variante**: in questo campo si va ad inserire l'eventuale variante del fornitore di quell'articolo;

**Note**: in questa sezione è possibile inserire eventuali note relative al fornitore in oggetto.
