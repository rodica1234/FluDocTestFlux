---
title: Cost Driver
sidebar position: 6
---

All'interno della tabella dei ***Cost driver*** possiamo codificare tutte le logiche di ribaltamento tra centri.
Vediamo nel dettaglio le singole proprietà a disposizione

:::tip nota
La tabella dei Cost driver è disponibile, in versione *semplificata*, anche per società che non hanno l'attivazione del *Controlling*.
In questo caso, *che non viene dettagliato in quanto d'interesse marginale*, il cost driver prevede un Codice e una Descrizione, con poi solo una lista di Centri destinatari valorizzati unicamente in percentuale (variabile opzionalmente per anno contabile). Il cost driver, poi, dovrà essere collegato ai Centri aziendali da ripartire secondo questa logica percentuale, attraverso la procedura ***Scritture per cost driver*** presente nel modulo delle ***Chiusure infrannuali***. 

Ad esempio possiamo definire un criterio 'metri quadri capannone x', che prevede la ripartizione 60%-40% su due centri produttivi, e poi collegare questo driver ad un centro 'Capannone x' che somma tutti i costi di sua competenza, da ribaltare sui centri produttivi destinatari.
:::

## CAMPI GENERALI

- ***CODICE*** della regola che stiamo inserendo. All'interno di ogni ciclo di elaborazione, ***FluentisERP*** valuta i driver in ordine di codice

:::tip Nota
Per dare un criterio di codifica suggeriamo
    -   A: come ATTRIBUZIONI. Tutte le A sono tutte quelle legate al centro generico ‘VALORI CON ATTRIBUZIONE NEL CONTROLLING’, che è quel centro aziendale che ha il FLAG su CONTI DA RIASSEGNARE. Il primo step dell’elaborazione del controlling è quella di attribuire questi conti generici che la contabilità non sa gestire, oppure che vanno attribuiti con logiche più variabili rispetto alle logiche che un contabile conosce. 
    -   R per i RIBALTAMENTI; quando i valori di un centro li vado a ribaltare su altri centri
    -   P come PROGETTI; Bisogna tener conto che le elaborazioni che riguardano i progetti verranno logicamente applicate alla fine di tutto, perché con queste staremo assegnando ai progetti del periodo i costi indiretti già calcolati nelle dimensione ‘industriale/direzionale’.
:::


- ***DESCRIZIONE*** del driver, che può essere più o meno esplicativa di quello che va a gestire

- [***AREA***/controlling-parametrization/controlling-specific-settings/area-types-areas): nei Cost Driver *l'area è sempre obbligatoria*. Avremo regole puntuali specifiche per certe aree (per una simulazione magari) mentre le regole generali saranno quelle dell’area generica del Set di regole.

- ***NUMERO CICLO***: l'elaborazione del controlling di ***FluentisERP*** deve avere un ordine logico. Innanzi tutto serve iniziare dal calcolo dei movimenti fisici di periodo, poi ci sono gli ammortamenti dei cespiti e poi si passa ai driver, per i quali si deve iniziare dalle attribuzione con numero ciclo 1 (perché per prima cosa si deve svuotare il *centro generico da riattribuire*), poi si passerà ai ribaltamenti secondo il loro ordine di ciclo e infine, per chi ha valorizzato una dimensioen di progetto/commessa tipicamente, i driver dell'ultimo, ciclo di attribuzione dati dalla direzionale ai progetti. A parità di numero ciclo, i driver vengono elaborati poi nell’ordine di codice del driver.

- ***CONTO/SOTTOCONTO***: significa legare il driver alla combinazione sottoconto-centro, cioè si prenderà il totale dei movimenti di questo conto e del centro indicato in seguito e poi il driver dirà dove e come andarli a riassegnare sui centri di destinazione della lista in basso a sinistra. Il conto/sottoconto è un campo obbligatorio solo per i cost driver legati al centro generico da riattribuire, per gli altri è facoltativo.

- [***DIMENSIONE DEI CENTRI DESTINATARI***/controlling-parametrization/controlling-specific-settings/dimension); questa dimensione è quella che filtra i centri destinatari dei valori della griglia in basso a sinistra. In ***FluentisERP***, infatti, possiamo avere driver che spostano o copiano i dati da una dimensione all’altra dei nostri centri: come abbiamo già detto il caso tipico è l’assegnazione dei costi diretti/indiretti alla dimensione di analisi dei progetti.

- ***DATA INIZIO*** e ***DATA FINE***: in questi campi si imposta da che data a che data vale il driver. Non è consentito che due regole della stessa area per lo stesso centro (e conto, se valorizzato) si sovrappongano. Se nel corso del tempo ci dovessimo accorgere che è necessario apportare delle modifiche ad una regola, la possiamo chiudere ad una certa data per poi applicarne una differente dal periodo successivo.

## TIPI DISTRIBUZIONE
- ***TIPO DI DISTRIBUZIONE***: definisce come è gestita l’attribuzione o il ribaltamento. Abbiamo a disposizione i codici da 01 a 09 valorizzabili per le attribuzioni; se ne aggiungono altre 3 per i ribaltamenti tra centri, quando potremo utilizzare anche tariffe del centro; ne avremo invece 6 differenti, invece, specifici della dimensione di destinazione progetti/commesse. Nel dettaglio:
    - tipi distribuzione per attribuzioni e ribaltamenti
        - ***01 Percentuale***: il dato di origine, periodo per periodo, sarà ripartito in base alla percentuale del singolo centro destinatario
        - ***02 Totale dare***: per ogni periodo si calcolerà una percentuale calcolata sulla base del totale dare del singolo centro destinatario rispetto al totale dare di tutti i centri destinatari
        - ***03 Totale avere***: come per il precedente, ma considerando il totale avere
        - ***04 Margini***: come per il precedente, ma considerando dare-avere (in valore assoluto)
        - ***05 Su sottoconto selezionato***: la percentuale si ottiene considerando il dare-avere (in valore assoluto) dei centri destinatari, ma filtrato per la lista dei *sottoconti* della griglia di destra
        - ***06 Su conto selezionato***: la percentuale si ottiene considerando il dare-avere (in valore assoluto) dei centri destinatari, ma filtrato per la lista dei *conti* della griglia di destra
        - ***07 Ad esclusione dei sottoconti selezionati***: la percentuale si ottiene considerando il dare-avere (in valore assoluto) dei centri destinatari, ma filtrato escludendo la lista dei *sottoconti* della griglia di destra
        - ***08 Ad esclusione dei conti selezionati***: la percentuale si ottiene considerando il dare-avere (in valore assoluto) dei centri destinatari, ma filtrato escludendo la lista dei *conti* della griglia di destra
        - ***09 Su grandezza fisica***: la percentuale si ottiene considerando le quantità (dell'unità di misura impostata nel campo dedicato) dei centri destinatari rispetto al totale delle quantità di tutti i centri destinatari
    - tipi distribuzione specifici per i ribaltamenti
        - ***10 Reversione su produzione a tariffa standard***: ribaltiamo un Centro su più Centri in base ad un flusso di Movimenti Fisici tra il Centro di origine (che è il centro collegato al driver) e i Centri destinatari (che sono i centri di destinazione del driver):  pertanto le Ore del Centro di origine saranno uguali alle Ore dei Centri destinatari. Il Centro cedente non viene totalmente svuotato, pertanto avrà un valore residuo diverso da zero.
        - ***11 Reversione diretta a tariffa standard***: permette di ribaltare un Centro su più Centri in base ad una Tariffa Standard del Centro di origine (il centro del driver) e ad un flusso di Movimenti Fisici dei Centri destinatari. L’importo attribuito ai Centri destinatari sarà il prodotto tra la Tariffa Standard del Centro di origine e l’ammontare del valore della Grandezza Fisica di ogni Centro destinatario. Anche in questo caso il Centro cedente non viene totalmente svuotato, pertanto avrà un valore residuo diverso da zero.
        - ***12 Reversione su produzione a tariffa calcolata***: consente di ribaltare un Centro su più Centri in base ad una Tariffa Calcolata del Centro di origine e ad un flusso di Movimenti Fisici tra il Centro di origine e i Centri destinatari, pertanto le Ore del Centro di origine saranno uguali alle Ore dei Centri destinatari. L’importo attribuito ai Centri destinatari sarà il prodotto tra la Tariffa Calcolata del Centro di origine e l’ammontare del valore della Grandezza Fisica di ogni Centro destinatario, quindi il Centro cedente viene totalmente svuotato e avrà un valore residuo pari a zero.
    - tipi distribuzione specifici per la dimensione progetti/commesse (dettagliati in seguito)
        - ***13 Reversione su produzione per progetto***
        - ***14 Reversione margini per progetto***
        - ***15 Reversione ammortamenti specifici per progetto***
        - ***16 Reversione sui ricavi di progetto***
        - ***17 Reversione sui costi di progetto***
        - ***18 Reversione su costo industriale di progetto***


- [***UNITA’ DI MISURA***/controlling-parametrization/controlling-specific-settings/measure-units): il campo si attiva per i tipi distribuzione *09 - 10 - 11 - 12* e serve per selezionare qual è l’unità di misura da ricercare nei movimenti fisici.


## ALTRI CAMPI
- ***ERRORE DI GESTIONE***: in questo campo possiamo indicare come gestire eventualmente i casi nei quali non sono presenti dati per l’applicazione della regola.
    - *BLOCCA*: il blocco chiaramente va ad interrompere l’elaborazione se non vi sono i dati necessari all’applicazione del driver.
    - *VALORE DI RESIDUO*: Valore residuo non può essere utilizzato per le attribuzioni ma solo per i ribaltamenti, perché lascia nel centro d’origine il valore residuo che non è riuscito ad assegnare ai centri di destinazione. Il centro generico deve sempre risultare vuoto e quindi questo tipo di gestione errori non è utilizzabile nelle attribuzioni.
    - *MEDIA DEI VALORI ESISTENTI*, invece, va a spalmare nel periodo corrente, quando non c’è un valore, sulla base della media dei valori esistenti negli altri periodi dell’anno in elaborazione.

:::tip Nota
Ad esempio può servire ad evitare blocchi in periodi, tipo Agosto, nei quali le quantità o i valori da utilizzare nel driver potrebbero essere a zero a causa della chiusura aziendale per ferie
:::

- ***VALORI DA UTILIZZARE***: indico quali sono i dati che devo considerare per i centri destinatari. La scelta è fra
    - TUTTI: legge tutti i movimenti assegnati (fino a quel determinato ciclo che sto elaborando) 
    - SOLO RIGHE DI ORIGINE: solo i dati che arrivano dalle attribuzioni iniziali

:::tip Nota
Sostanzialmente, per i ribaltamenti, in questo campo si definisce se si deve considerare o meno, per i Centri Destinatari, anche i valori ricevuti da ribaltamenti da altri centri. Pertanto, ha valenza solo per i Tipi Distribuzione dal 02 al 08 compresi, è ininfluente per i restanti tipi che si basano su tariffe.
:::


- ***FLAG STORNO***: questo flag risponde alla domanda se i dati della dimensione di origine li devo mantenere o li devo *spostare* nella dimensione di destinazione.

:::tip Nota
Quando il driver è legato alla dimensione progetti/commesse sicuramente il valore lo devo mantenere anche nell’origine che è la direzionale, altrimenti mi mancherebbero dei costi ed eventuali conti economici sarebbero inesatti.
:::

- ***PER DIVISIONE***: andiamo ad abilitare la possibilità di far filtrare i dati d’origine da ripartire sulla base della divisione impostata nel campo successivo.

:::tip nota
In tema di divisione, è altresì interessante notare che è potenzialmente possibile definire driver che operano una riattribuzione di costi/ricavi da una divisione all'altra: è necessario che l’azienda lavori su più divisioni e che abbia attivato il *Parametro generale* di *gestione centri per divisione*.
:::

## PARTICOLARITA' PER DIMENSIONE PROGETTO/COMMESSA
Spostiamo ora l’attenzione di campi legati ai driver di progetto/commessa. Innanzi tutto vediamo gli ultimi tre campi in griglia.

- ***TIPO MISURAZIONE***: in questo campo dobbiamo impostare qual è l'indice di costo (la tariffa) da utilizzare per valorizzare il centro associato al cost driver. Le opzioni disponibili sono
    - *UM1*: si utilizzerà l'indice legato alla prima unità di misura del centro
    - *UM2*: si utilizzerà l'indice legato alla seconda unità di misura del centro
    - *%*: si utilizzerà l'indice percentuale del centro

- ***AREA PER INDICE***: in questo campo possiamo dire in che *Area* ricercare l'indice di costo precedente: in sostanza, per la dimensione progetti possiamo indicare un’area specifica dal quale leggere gli indici, indipendentemente dall’area selezionata per l'*Elaborazione consuntivo di progetto*

- ***TIPO DI CALCOLO DELL'INDICE***: in questo campo posso definire come calcolare l'indice, secondo queste opzioni:
    - *Mese*: si utilizzerà l'indice puntuale del singolo mese
    - *Fino a periodo*: si utilizzerà un indice calcolato con i dati cumulati dall'inizio dell'anno che si sta elaborando
    - *Anno mobile*: si utilizzerà un indice calcolato con i dati cumulati dai 12 mesi precedenti al singolo periodo in elaborazione
    - *Anno*: si utilizzerà un indice calcolato con i dati cumulati di tutti i mesi disponibili nell'anno che si sta elaborando
    - *Tariffa standard*: si utilizzerà la tariffa standard del centro, valida per il singolo periodo che si sta elaborando


- ***TIPI DI DISTRIBUZIONE*** specifici di progetto/commessa: innanzi tutto, il driver prevede sempre dei centri di destinazione, ma per una dimensione progetti avremo non solo questi centri 'di progetto' ma anche lo specifico progetto collegato ad essi. Il riferimento è alla possibilità di avere un unico *centro di progetto* (tramite il flag *Centro di default per i progetti*), che sarà quindi l'unico inserito come destinatario del driver, piuttosto che utilizzare la tabella *Associazione centri/commesse* tramite la quale collegare una lista di codici di centro a seconda di determinate caratteristiche dei progetti. Questa ultima possibilità consente, potenzialmente, di avere driver differenti su tipi di progetto differente (perché ad esempio si hanno strutture di costo differenti a seconda del tipo di progetto). Nel dettaglio, i tipi di distribuzione sono:

    - ***13 Reversione su produzione per progetto***: si leggerà l’indice di costo (per la UM1 o 2, area e tipo calcolo impostato) del centro del driver e lo valorizzererà sulle ore lavorate dal centro sui progetti/commesse associati ai Cdc in basso a sinistra.
    - ***14 Reversione margini per progetto***: si leggerà l'indice di costo (%) del centro del driver e lo valorizzererà sui margini dei progetti/commesse associati ai Cdc in basso a sinistra.
    - ***15 Reversione ammortamenti specifici per progetto***: si cercheranno i costi unitari degli ammortamenti tecnici del controlling del singolo cespite e si moltiplicheranno per le quantità che il cespite ha prodotto sul singolo progetto/commessa associati ai Cdc in basso a sinistra.
    - ***16 Reversione sui ricavi di progetto***: si leggerà l'indice di costo (%) del centro del driver e lo valorizzererà sui ricavi dei progetti/commesse associati ai Cdc in basso a sinistra, eventualmente filtrando i dati sui conti indicati nella griglia di destra.
    - ***17 Reversione sui costi di progetto***: si leggerà l'indice di costo (%) del centro del driver e lo valorizzererà sui costi dei progetti/commesse associati ai Cdc in basso a sinistra, eventualmente filtrando i dati sui conti indicati nella griglia di destra.
    - ***18 Reversione su costo industriale di progetto***: in questo caso l'indice percentuale sarà applicato al costo industriale calcolato, progetto per progetto, tramite i tipi di *origine dati* configurati nella griglia di destra. Possiamo quindi indicare *Materiali*, *Lavorazioni interne*, *Lavorazioni esterne* e magari gli importi di determinati sottoconti prelevati dall'origine *Contabile*


:::tip Nota
Se dobbiamo valorizzare il centro della carpenteria, che è un centro di produzione, sui progetti in lavorazione nel periodo ad esempio, dovrò avere un driver che prende quel costo e me lo ribalta magari per *Reversione su produzione per progetto*: andrò quindi a leggere i dati ripresi dalla produzione, progetto per progetto, quanto è stato lavorato da questo centro, sulla base del tipo di misurazione del centro (cioè la UM1 o UM2 per centri produttivi). L’indice percentuale, invece, tipicamente lo andremo ad utilizzare quando il criterio di distribuzione è legato ai costi/ricavi/margini di progetto.
:::
