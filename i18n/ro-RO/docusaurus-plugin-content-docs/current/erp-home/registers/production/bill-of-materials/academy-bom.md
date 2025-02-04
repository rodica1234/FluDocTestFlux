---
title: Distinta base
sidebar_position: 0
---

:::important **Fluentis Academy**     

La distinta base è una struttura dati di tipo fisico-logico che descrive come è fatto un prodotto.             
Normalmente si utilizza solo per prodotti di produzione e non di acquisto, indicando i componenti che fanno parte del prodotto assemblato e la quantità necessaria di ciascuno di essi per realizzare una quantità predefinita del prodotto assemblato (coefficiente d’impiego del componente).            
Oltre a codice componente e quantità che rappresentano le informazioni di base, ne esistono molte altre che verranno illustrate nell’help in linea di Fluentis.

La distinta base serve per i seguenti scopi:

- Pianificare il fabbisogno di materiali (semilavorati e materie prime) e risorse produttive

- Gestire le movimentazioni di magazzino dei componenti a fronte della realizzazione di un assemblato (conoscendo la quantità realizzata dell’assemblato si può calcolare la quantità teoricamente consumata di ciascun componente e quindi fare i relativi scarichi di magazzino)

- Calcolare il costo a preventivo di un assieme; infatti la struttura del prodotto unitamente ai costi dei materiali acquistati o lavorati esternamente ed alla descrizione del processo di lavorazione tramite i cicli di lavoro, permettono di calcolare il costo teorico di un prodotto. 
Il costo effettivo varia per ogni ordine di trasformazione in base al valore effettivo di acquisto dei materiali, ai tempi di lavorazione consuntivati, alle risorse effettivamente impiegate.

- Descrivere e documentare la struttura di un prodotto.

A volte si crea la distinta base di un prodotto che non viene realizzato internamente (per esempio un prodotto acquistato), solo al fine di rappresentarne la struttura per scopi di manutenzione o riparazione.

Per quanto riguarda la pianificazione, oltre alle distinte fisiche nelle quali sia il codice assemblato che i componenti sono prodotti reali che vengono gestiti a magazzino con processi di acquisto e produzione, si utilizzano delle distinte non fisiche ma logiche dette distinte di pianificazione, il cui scopo è quello di semplificare il processo di pianificazione di periodo medio-lungo come attività a valle della previsione delle vendite che viene realizzata non per singoli codici di prodotto finito ma per famiglie di prodotti e tipicamente a valore e non a quantità.

I principali tipi di distinte di pianificazione sono i seguenti:

<details>
<summary> Distinte modulari </summary>

Questo tipo di distinta descrive i moduli e le opzioni di un prodotto finito.
I moduli sono parti comuni che non dipendono dalle scelte dei clienti, le opzioni invece vengono scelte dai clienti.
Si utilizza molto negli ambienti in cui un prodotto è ordinabile secondo più opzioni da parte del cliente come per esempio nell’industria automobilistica (scelta accessori, motorizzazione etc).

</details>

<details>
<summary> Distinte contenitore (kit bill) </summary>

In questo caso il codice dell’assemblato non corrisponde ad un prodotto reale gestito a magazzino ma rappresenta un raggruppamento logico dei suoi componenti.
Il vantaggio è che con un solo codice articolo se ne gestiscono molti, sia in fase di pianificazione che di movimentazione di magazzino che di costificazione di prodotto.
Il codice contenitore viene quindi utilizzato come componente di altre distinte sia fisiche che logiche.

</details>

<details>
<summary> Distinte super (super bill) </summary>

Sono distinte utilizzate per rappresentare famiglie di prodotti finiti che utilizzano come componenti distinte modulari e distinte di parti comuni.
Il coefficiente d’impiego assegnato a ciascuna opzione rappresenta la probabilità d’ordine di tale opzione sul totale delle unità vendute della famiglia di prodotti finiti (se per esempio la motorizzazione 2000 cc benzina viene scelta nel 23% dei casi, il coefficiente d’impiego di tale opzione varrà 0,23).
Il coefficiente d’impiego assegnato a ciascuna distinta di parti comuni rappresenta invece la quantità necessaria per realizzare una unità di prodotto finito di tale gruppo.

</details>

<details>
<summary> Distinte famiglia (family bill) </summary>

Il codice assemblato di una tale distinta è un elemento logico e non fisico che serve per identificare  una famiglia di prodotti indicandone i singoli membri quando il numero membri di una famiglia non è numeroso.
Spesso i membri della famiglia sono i “modelli” che la compongono.
Pensiamo per esempio ad una grande azienda che realizza diverse famiglie di prodotti come motociclette, automobili, mezzi pesanti di trasporto, autobus, macchine movimentazione terra, trattori etc..
In questo esempio la famiglia delle automobili è composta dai vari modelli di auto venduti dall’azienda e così via per le altre famiglie.
Ogni “modello” sarà presente nella distinta con un coefficiente d’impiego che rappresenta la percentuale di vendite di tale modello sul totale della famiglia.

</details>

<details>
<summary> Distinta media (average bill) </summary>

Anche in questo caso il codice dell’assemblato è di tipo logico e non fisico.
Rappresenta la struttura media di un prodotto in modo simile a quanto fa una distinta super ma a differenza di quest’ultima i suoi componenti non sono moduli o kit (cioè componenti di tipo logico) ma codici fisici realmente gestiti a magazzino e nella maggior parte dei casi si tratta di soli componenti d’acquisto.
Si usa soprattutto quando i prodotti finiti si differenziano per caratteristiche fisiche come forma, dimensione, volume, peso etc..

</details>

<details>
<summary> Distinta immaginaria (imaginary bill) </summary>

E’ un tipo distinta che si utilizza nelle aziende che lavorano su commessa di tipo Engineer to Order dove si realizzano prodotti molto complessi con lunghi tempi di realizzazione non ancora ingegnerizzati al momento dell’ordine cliente (impianti industriali, grossi macchinari, navi, aerei etc.).
In questo caso la distinta del prodotto finito risulterebbe disponibile sola alla fine dell’intera attività di progettazione e quindi troppo tardi per consentire al sistema di pianificazione di esplicare la sua azione.
Per tale ragione inizialmente viene creata una distinta base “immaginaria” copiata da un prodotto simile realizzato nel passato contenente parti già note e parti temporanee che verranno sostituite da quelle definitive man mano che la progettazione progredisce.
Questa distinta consente comunque l’elaborazione del sistema di pianificazione e la programmazione di attività ed approvvigionamenti cadenzati opportunamente nel tempo e la ripianificazione delle attività man mano che la commessa evolve.

</details>
:::