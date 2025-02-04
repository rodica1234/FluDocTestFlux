---
title: Piano dei conti
sidebar_position: 1
---
:::tip[FAst Start]
La tabella è interessata dalla procedura di [**Fast Start**guide/fast-start)

Nel caso in cui si intenda configurare manualmente fare riferimento alla check list della pagina linkata
:::

### RIBBON BAR:
:::note Bottoni della Ribbon Bar

| Funzione | Significato |
| --- | --- |
| Ricerca | Esegue la ricerca dei conti/sottoconti all'interno del gruppo selezionato. |
| Nuovo conto | Imposta il cursore all'inserimento di un nuovo sottoconto all'interno della griglia di dettaglio. |
| Spostamento  conti | Apre una maschera per spostare un conto da un gruppo ad un altro. |
| Apri anagrafiche | Apre l'anagrafica associata al sottoconto cliente/fornitore/banca/agente selezionato. |
| Nuovo raggruppamento | Esegue l'inserimento di un nuovo gruppo ‘radice' nella struttura del piano dei conti, indipendentemente dal gruppo selezionato. |
| Nuovo gruppo | Esegue l'inserimento di un gruppo all'interno di quello selezionato. Non è possibile inserire gruppi all'interno di uno che ha già cont/sottoconti associati. |
| Cancella conto | Esegue la cancellazione del conto selezionato. Per cancellare è anche possibile selezionarlo e premere il tasto CANC sulla tastiera. Non è possibile cancellare un sottoconto se questo è stato utilizzato nel sistema. (impostare in questo caso una data di fine validità per renderlo invisibile all'utente.) |
| Cancella gruppo | Esegue la cancellazione del gruppo selezionato. |
| Esplodi l'albero | Esplode l'albero sottostante al gruppo selezionato. |
| Implodi l'albero | Implode l'albero sottostante al gruppo selezionato. |
| Nuovo CdC | Imposta il cursore all'inserimento di un nuovo centro di costo per il sottoconto selezionato. |
| Cancella C.d.C. | Cancella il centro di costo selezionato. |
| Nuovo CdP | Imposta il cursore all'inserimento di un nuovo centro di profitto per il sottoconto selezionato. |
| Cancella C.d.P. | Cancella il centro di profitto selezionato. |
| Nuova automatica conti | Imposta il cursore all'inserimento di un nuovo sottoconto automatico per il sottoconto selezionato |
| Cancella automatica conti | Cancella il sottoconto automatico selezionato |

:::

---

### Collegamento con altre tabelle
La codifica del piano dei conti coinvolge il completamento di una serie di tabelle:  [Tipi contoconfigurations/tables/finance/account-types) ,  [Anagrafiche contattierp-home/registers/contacts/registers-management), [Voce di spesaconfigurations/tables/finance/charge-item), Tipi periodicità budget, Centri di costo, Centri di profitto, Divisioni, Scritture di rettifica/integrazione, Scritture da diff. budget,  [Causali automaticheconfigurations/tables/finance/ledger-records-templates/insert-ledger-records-templates/attributes-detail) , Tipo importo


### Inserimento della struttura del piano dei conti

La codifica del piano dei conti prevede di partire dall'inserimento della lista dei gruppi nella sezione superiore della maschera: 

![](/img/it-it/erp-home/registers/accounting/analytic-chart-of-accounts/image01.png)

Attraverso i pulsanti di inserimento raggruppamenti/gruppi si potranno inserire nuovi primi livelli o livelli inferiori a quello selezionato, attribuendo ad ognuno un codice alfanumerico univoco, una descrizione ed un tipo conto.



**Nuovo Raggruppamento**: agisce solamente per inserire un nuovo** livello zero** (un gruppo senza padri sopra di esso).

**Nuovo Gruppo**: agisce per inserire un gruppo figlio del gruppo selezionato. 

**Struttura**: campo compilato automaticamente dal sistema per rappresentare una concatenazione dei codici dei gruppi e raggruppamenti in cui la riga è contenuta;

**Descr. alternativa**: permette di assegnare una descrizione ulteriore che può essere ripresa ad esempio nella stampa bilancio (personalizzandola con gli strumenti specifici). Potrebbe essere inserita ad esempio una traduzione in lingua della descrizione conto.

**Natura gruppo**: accoglie il tipo conto del gruppo. La combo box è collegata alla tabella Tipo conto. Si raccomanda di compilare il tipo conto anche per i gruppi e raggruppamenti così come viene fatto nella fase di inserimento dei sottoconti di dettaglio descritta sotto.


### Inserimento del dettaglio del piano dei conti

Una volta selezionato il gruppo di livello più basso si attiverà, nella griglia sottostante, la lista dei conti e sottoconti inseriti all'interno di questo. 

![](/img/it-it/erp-home/registers/accounting/analytic-chart-of-accounts/image03.png)

Questa **griglia inferiore viene compilata inserendo direttamente i dati** nelle righe. Si nota sempre l'ultima riga disponibile all'inserimento di un nuovo input e contrassegnata dal simbolo dell'asterisco nella zona azzurra all'estrema sinistra.

![](/img/it-it/erp-home/registers/accounting/analytic-chart-of-accounts/image04.png)

**ATTENZIONE: la struttura del piano dei conti prevede che sia inserito, per ogni gruppo di livello più basso del quale stiamo inserendo il dettaglio, almento un conto ("mastro") senza sottoconto che funge da ultimo raggruppamento di dettaglio dei sottoconti operativi. Si ricorda che solo i conti con sottoconto possono essere utilizzati nelle registrazioni contabili.**

Si consiglia di seguire un criterio numerico progressivo con uniformità di caratteri (es. tutti i conti a 4 caratteri, tutti i sottoconti a 3).

ATTENZIONE: in fase di inserimento dei sottoconti di dettaglio è attivo un contatore che incrementa il sottoconto automaticamente di uno rispetto all'ultimo inserito per quel gruppo; si sconsiglia di lasciare "buchi" nella numerazione poichè questi non saranno recuperati in automatico in nessun caso.



Procedere in ordine inserendo il **tipo conto**, poi il **conto** (senza sottoconto se si intende creare un nuovo "mastro") e poi il **sottoconto **(se il sottoconto viene inserito per la prima volta per quel gruppo inserire manualmente il numero anche definendo il numero di caratteri, ad esempio 1 oppure 01 oppure 001, al successivo inserimento il numero sarà incrementato automaticamente).

**Data di inserimento**: è la data di creazione del conto/sottoconto;

**Data ultima variazione**: è la data di ultima modifica del codice di conto/sottoconto, aggiornata automaticamente dal sistema;

**Apertura partite**: flag che indica, per i conti collegati ad anagrafiche clienti e fornitori, se viene gestita l'apertura partite per quel conto. Il flag è ripreso, e va gestito, all'interno dell'anagarafica. E possibile attivare il flag da qui per conti NON di anagrafica (costi, ricavi ecc...) al fine di aprire partite in concomitanza con la registrazione contabile (raro). In questo caso la causale contabile utilizzata dovrà avere attivo il parametro per l'apertura partite. In questo caso il flag attivo sul conto permette, in particolare, di operare il controllo di quadratura tra il movimento contabile e la partita aperta. In ogni caso l'apertura partite su conti non di anagrafica dovrà essere fatta manualmente e non potrà avvenire automaticamente.

**Tipo / Soluzione di pagamento**: in abbinamento con il precedente flag di apertura partite, nel caso in cui venga utilizzato su conti NON di anagrafica (ad esempio costi ricavi, patrimoniali ecc...) permettono di specificare le condizioni di pagamento da utilizzare in fase di apertura partita.

**Gestione c. aziendali**: attivando questo flag sarà possibile gestire centri di costo anche su conti patrimoniali (raro); esempio incrementi per lavori interni in economia ecc...

**Gestione Divisa**: Flag che abilita il conto per:
- Gestione nella procedura di Regolarizzazione valuta (Amministrazione > Registrazioni contabili > Procedure > Regolarizzazione valuta)
- Gestione dell'importo in divisa nella chiusura e riapertura dei conti

:::danger[Attenzione]
Il flag si abilita automaticamente nella fase di inserimento di una nuova anagrafica ed associazione con il tipo conto per la creazione del nuovo sottoconto nel piano dei conti. Si consiglia di non disabilitarlo (se in anagrafica viene associata un divisa estera) altrimenti la chiusura de conti perderà, per quel conto, la gestione del valore in divisa anche se nei parametri della chiusura è abilitata in generale questa gestione della divisa. Dunque la possibilità di disattivarlo è riservata ad una volontaria gestione particolare du un determinato conto che pur valorizzato in divisa deve poi essere chiuso ricalcolando tutto in euro, senza stanziamento delle differenze cambi.
:::

**Data di fine validità**: serve **per bloccare l'utilizzo del sottoconto in nuove registrazioni** (a partire dalla data inserita), mantenendo la visibilità dei movimenti precedentemente inseriti;

**Ulteriore descrizione**: vedere Descr. alternativa sopra;

**Ratei / Risconti - attivi / passivi - Conto / Sottoconto / Descrizione**: Campi che permettono di inserire, rispettivamente per ratei e risconti attivi e passivi, un sottoconto specifico sul quale saranno contabilizzate, con priorità rispetto ai sottoconti generici per ratei e risconti attivi e passivi ineriti nei [parametri di contabilitàconfigurations/parameters/finance/accounting-parameters), le scritture di rettifica ed integrazione relative al sottoconto di costo o ricavo che stiamo compilando. Si ricorda che per la gestione automatica dei ratei e risconti il conto di costo o ricavo oggetto di rettifiche deve avere un particolare tipo conto (es. "da rettificare") avente il flag servizio attivo nella tabella [Tipo contoconfigurations/tables/finance/account-types).


**Conto / sottoconto / descrizione Non Deducibile**: Gestito prevalentemente per localizzazioni non italiane dove c'è la necessità di contabilizzare la quota di iva non detraibile su un conto separato


**Percentuale indetraibilità**: Gestito prevalentemente per localizzazioni non italiane dove c'è la necessità di contabilizzare la quota di iva non detraibile su un conto separato Campo connesso all'utilizzo del precedente. Permette la definizione della percentuale di indetraibilità IVA direttamente sul conto contabile anzichè sul codice iva utilizzato.


**Voci di spesa / Descrizione**: combo box collegato alla tabella ** [Voci di spesaconfigurations/tables/finance/charge-item) **; permette il collegamento ad un dato statistico utile nel controllo di gestione.

**Variabilità**: questo campo, collegato alle griglie, presenti sulla destra della form, *Attribuzione Cdc* e *Variabilità Cdc* (necessarie per l'inserimento dei legami tra sottoconti contabili e centri aziendali al fine di ripartire automaticamente i movimenti contabili sui centri) viene **movimentato in particolare quando il movimento contabile è collegato a più di un centro aziendale**. Così come l'omonimo campo presente nella griglia Variabilità Cdc accoglie un valore in percentuale che **definisce se il costo è un costo fisso** (variabilità 0%) **oppure un costo** totalmente **variabile** (variabilità 100%) o parzialmente variabile (es. 70%). Si veda immagine sosttostante per una corretta compilazione.

NOTA: da non confondere con il campo Percentuale (presente nella griglia Attribuzione Cdc) che serve ad indicare la percentuale del movimento contabile da imputare a quel centro (esempio un costo ripartito tra due centri al 50% oppure 70% e 30%).

Il campo **Variabilità** presente nella griglia principale in commento è prioritario rispetto a quello presente nella griglia *Variabilità Cdc*. Per questo motivo, se viene popolato solo il campo nella griglia principale, il dato sarà utilizzato per entrambi (o tutti) i Centri associati al conto selezionato.

![](/img/it-it/erp-home/registers/accounting/analytic-chart-of-accounts/image05.png)

**Non utilizzare in controlling**: il flag, utilizzato solo se sono attive le funzioni avanzate per il controlling nella tabella società, permette di escludere (se attivato) i movimenti contabili presenti per il conto selezionato dalle elaborazioni specifiche del controlling (quali ad esempio reversioni in base a cost driver, formule ed ammortamenti tecnici specifici per il controlling). In questo modo sarà possibile operare manualmente tramite le funzioni specifiche del modulo controlling.

Esempio: se si desidera utilizzare ai fini delle elaborazioni del controlling gli ammortamenti specifici definiti nell'ambito delle funzioni del controlling stesso anziché partire dal dato contabile. Altro esempio: si desidera rilevare manualmente il costo del collegio sindacale stanziandolo manualmente con le funzioni del controlling per gestire budget e consuntivi, anziché attendere la rilevazione del relativo costo in contabilità (tipicamente a posteriori e quindi non in tempo utile).

Nota: il movimento contabile sarà comunque incluso nelle chiusure dei conti infrannuali (Controlling > Chiusure infrannuali).

La **metodologia** qui sopra descritta determina la necessità, periodicamente, di procedere a dei **conguagli** per quadrare i movimenti contabili (che confluiscono nel bilancio) con i movimenti della contabilità gestionale (propri del controlling). Tali conguagli saranno rappresentati nella reportistica specifica del controlling mediante rettifiche (con segno positivo o negativo a seconda dei casi) specifiche e distintamente indicate che riconciliano i totali di bilancio con i totali della contabilità gestionale (i quali sono frutto dei movimenti gestiti manualmente, o comunque non a partire dal dato contabile).

I successivi due campi sono funzionali a questa manovra:

**Tempi di bilanciamento**: la combo box permette di scegliere se il conguaglio di cui sopra avverrà annualmente, oppure con cadenza infrannuale, oppure sia disabilitato (scegliendo nessuno)

**Tipi di bilanciamento**: la combo box permette di scegliere tra due differenti metodologie di conguaglio:

   - **Riproporziona gestionale**: parte dal movimento contabile e lo riproporziona (inserendo le rettifiche) utilizzando le logiche della contabilità analitica (ovvero l'attribuzione ai centri aziendali) per gestire la differenza;

   - **Differenze analitica**: parte dalla contabilità gestionale (controlling) e lo riallinea al dato contabile inserendo le rettifiche con segno positivo o negativo.

**Percentuali di variazione / descrizione**: la combo box, collegata alla tabella [Percentuali di variazioneconfigurations/tables/controlling/analytical-accounting/variation-percentages), permette di definire, per ogni sottoconto, delle percentuali (predefinitite e categorizzate all'interno della tabella collegata) da applicare in varie elaborazione del controlling, quali ad esempio il budget preventivo a partire dal consuntivo dell'anno precedente, applicando degli incrementi o decrementi.

**Distribuzione periodi / Descrizione**: la combo box, collegata alla tabella [Distribuzione periodiconfigurations/tables/controlling/managerial-accounting/periods-distribution), permette di assegnare, ad ogni sottoconto, una logica di ripartizione specifica del movimento contabile sui singoli periodi in fase di elaborazione delle chiusure infrannuali.

**Gruppi di conguaglio / Descrizione**: la combo box è collegata alla tabella [Gruppi di conguaglioconfigurations/tables/controlling/analytical-accounting/adjustments-groups), all'interno della quale è possibile codificare dei raggruppamenti di conti utili per la gestione della reportistica specifica per il controlling. Il campo non ha altra valenza operativa e non genera ulteriori automatismi.

**Descrizione estesa 1 / 2 / 3**: ulteriori campi per accogliere descrizioni alternative (ad esempio in lingua). Possono essere, ad esempio, successivamente inserite nella stampa del bilancio mediante personalizzazione della stessa.

**Crisi d'impresa:** vedere pagina specifica relativa a questa funzionalità. Si tratta del modulo specifico, integrato in Fluentis, per la gestione degli indici da calcolare per adempiere alla normativa sulla prevenzione delle crisi di impresa. Tali indici sono gestiti attraverso il modulo CPM di Fluentis (che permette più in generale il calcolo di indicatori di performance)

Poiché gli indicatori per la crisi di impresa fanno alcune considerazioni e calcoli relativamente ad alcuni conti o sottoconti specifici, all’atto della configurazione del modulo per il suo utilizzo occorre agganciare alle varie categorie specifiche previste dalla combo box, e riferendosi alla documentazione teorica specifica di questa normativa, i conti opportuni.


### INSERIMENTO DEL COLLEGAMENTO SOTTOCONTI - CENTRI AZIENDALI

Il collegamento viene effettuato semplicemente selezionando il sottoconto di riferimento e inserendo la lista dei cdc/cdp nelle due griglie apposite: è possibile collegare la valorizzazione su divisioni aziendali differenti, ma normalmente la divisione non viene compilata. Non c'è alcun controllo che la somma delle percentuali inserite sia uguale al 100%.

NOTA: Attivando le funzioni avanzate per il controlling nella tabella [societàconfigurations/tables/general-settings/company) , si opererà secondo le nuove logiche in cui non ha più rilevanza l'utilizzo dei centri di profitto ma si utilizzano i cdc (nella loro denominazione di centri Aziendali) sui quali si attribuiranno componenti negativi o positivi per procedere poi ad elaborazioni evolute quali reversioni e confronti per determinare margini ecc...

Per questo motivo la griglia dei **centri di profitto** (mantenuta per utilizzare le logiche standard) è stata spostata nella tab **Altro** (relativa alla griglia Attribuzione Cdc).

Si ricorda, inoltre che vi sono ulteriori punti di codifica dei Centri di costo/Profitto: anagrafiche clienti/fornitori/agents, anagrafiche articoli, magazzini, cespiti. La priorità di valorizzazione viene definita normalmente nei parametri di gestione del singolo modulo.

### Griglia Attribuzione CDC

**N**: Progressivo di riga

**Cdc / Descrizione**: combo box collegata alla tabella **Centri aziendali **, necessaria per richiamare il centro desiderato;

**Percentuale %**: inserire qui la percentuale di attribuzione del movimento contabile al centro inserito nella riga. Ad es. inserendo il valore 100 il movimento contabile sarà attribuito per il 100% a questo centro, inserendo 50 sarà attribuito al 50% e dunque il residuo sarà attribuito (eventualmente) ad altri centri inseriti nelle righe sottostanti.

**Divisione / Descrizione**: il legame può essere inserito eventualmente differenziando per singola divisione.

**Data inizio validità**: indica la data dalla quale è attiva l'attribuzione automatica del movimento al centro.

**Data fine validità**: indica la data di fine validità dalla quale l'attribuzione automatica del movimento al centro non avrà più effetto.

**Dimensione / Descrizione**: combo box necessaria per attribuire al centro aziendale che si sta inserendo la relativa dimensione di analisi (questo concetto è introdotto e disponibile soltanto attivando le funzioni avanzate per il controlling dalla tabella società).

**Categoria centro di costo / Descrizione**: la combo box, collegata alla tabella **Categorie centri** aziendali permette di associare ad ogni **Dimensione** di analisi del controlling una categoria che a sua volta è collegata a diversi centri aziendali (essendo la categoria un campo obbligatorio nella codifica di ogni centro aziendale). In questo modo è possibile, in fase di inserimento del movimento contabile, permettere all'operatore la scelta di una serie di centri di aziendali predefiniti. Questo può essere fatto in alternativa ad una rigida definizione del centro associato al conto (possibile attivando il parametro "Vincolo conto / centro" all'interno della dimensione).

### Griglia Sottoconti automatici

In questa griglia è possibile inserire, per ogni sottoconto che sarà richiamato in una scrittura contabile inserita tramite una causale contabile avente una seconda causale automatica agganciata, un sottoconto specifico da utilizzare nella scrittura riferita alla seconda causale automatica.

In questo modo è possibile far variare "dinamicamente" i sottoconti utilizzati dalla seconda causale, a seconda del sottoconto che viene sostituito al conto generico (tipicamente inserito nel template della causale principale) nel momento della creazione della scrittura contabile grazie agli automatismi del programma.

E' necessario inserire, oltre al codice del sottoconto, anche il tipo importo e la sezione dare o avere (vedere la documentazione relativa alla gestione delle causali contabili).

:::note Nota

In particolare la logica di funzionamento prevede:

- che il sottoconto sia utilizzato nella sezione Iva della registrazione;

- che la registrazione si basi su una causale che prevede una causale automatica;

- a queste condizioni l'ERP andrà ad aggiungere, nella registrazione automatica, i sottoconti automatici che sono collegati ai sottoconti;

- la valorizzazione di questi sottoconti utilizzerà il tipo importo della sezione ‘sottoconti automatici' ma applicandola alla riga IVA d'origine.
:::


**Esempio di utilizzo può essere la registrazione di sottoconti per i quali debbano essere valorizzati in dare/avere conti d'ordine.**

---

### Extra Data: 
si rinvia alla documentazione relativa agli [Extra Dataconfigurations/utility/extra-data/extradata/search-extradata)

---

### VIDEO TUTORIALS

:::important Vedi Anche
[**VIDEO TUTORIALS SUL PIANO DEI CONTI**/finance/intro.md)
:::