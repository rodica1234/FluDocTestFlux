---
title: Introduzione
sidebar_position: 0
---

:::important **Identificazione dei prodotti e relative parti**     

Ogni azienda manifatturiera vende prodotti fisici comunemente denominati prodotti finiti. 

Per realizzare questi sono necessarie materie prime e componenti reperibili sul mercato.

E’ evidente che ogni azienda manifatturiera ha come minimo la necessità di identificare le merci in ingresso ed in uscita per gestire i processi di acquisto, vendita e contabili relativi.

Ogni prodotto viene identificato univocamente tramite un codice articolo, normalmente di tipo alfanumerico, secondo logiche di codifica proprie di ciascun’azienda.

Teoricamente è quindi sempre possibile descrivere la struttura dei prodotti finiti semplicemente tramite una distinta base ad un livello comprendente tutte le materie prime e/o componenti d’acquisto.

Molto spesso però quanto esposto è un metodo di rappresentazione troppo semplice e poco efficace e risulta necessario codificare anche prodotti intermedi detti semilavorati.

Quale logica si deve adottare per stabilire quando è necessario creare un codice articolo per un semilavorato? 

Dato un prodotto finito quanti semilavorati è necessario codificare per definirne la struttura? 

Dal punto di vista progettuale/ingegneristico è possibile individuare molte parti in un prodotto finito, ma dal punto di vista produttivo la necessità di codifica può essere molto differente.

In generale se un componente logico della struttura viene sempre immediatamente riutilizzato dopo averlo realizzato non è consigliabile creare un codice articolo (con alcune eccezioni spiegate nel seguito).

Se invece il momento della realizzazione e dell’utilizzo non sono temporalmente coincidenti, allora si ha la necessità di stoccare l’elemento e quindi si deve codificarlo per poter gestire i relativi processi e le contabilizzazioni di bilancio di fine anno.

Pertanto, la necessità di stoccare un elemento è una condizione sufficiente per richiederne la codifica tramite un codice articolo.

Le motivazioni che portano alla necessità di stoccare un componente sono tipicamente le seguenti:
- La produzione del componente implica un costo di attrezzaggio macchina non trascurabile, quindi si stabiliscono dei lotti minimi di produzione per limitare gli attrezzaggi e incrementare il rapporto tra ore di produzione effettiva e ore di lavoro disponibili. Pertanto normalmente i lotti sono di entità superiore ai fabbisogni del momento, quindi una parte della produzione verrà stoccata per poi essere consumata nel futuro.
- Alcuni componenti vanno prodotti in anticipo rispetto ai fabbisogni per poter consegnare i prodotti finiti nei tempi richiesti dal mercato, quindi non si conoscono le quantità effettivamente necessarie nel momento della produzione, pertanto si crea una scorta in previsione del consumo futuro.
- Alcuni processi produttivi hanno una resa non costante, pertanto è necessario disporre di una scorta dei materiali da utilizzare
- Si vuole creare una scorta a monte di una risorsa critica (collo di bottiglia) per scongiurare il pericolo che questa si fermi per mancanza di materiale da lavorare, poiché il tasso di produzione della fabbrica è determinato proprio dai colli di bottiglia
- Si voglio separare dei processi produttivi in modo da ridurne l’interdipendenza quando questi non sono sincronizzabili come avviene in una produzione a flusso continuo

A volte si sceglie comunque di codificare un elemento anche se non si fa scorta di esso.

Ciò avviene tipicamente per le seguenti ragioni:
- L’articolo serve solo come raggruppamento logico di un gruppo di articoli che vengono utilizzati insieme in altri prodotti o venduti in gruppo.
Questo consente di velocizzare e semplificare la creazione di distinte base gestendo un solo articolo al posto di un gruppo di articoli che altrimenti andrebbero inseriti e gestiti singolarmente nelle distinte in cui sono utilizzati (in letteratura spesso chiamate kit bill).
- Normalmente l’articolo viene immediatamente consumato dopo l’utilizzo ma è necessario mantenere una piccola scorta come ricambi per assistenza tecnica.
- Il ciclo di  lavoro di un articolo assemblato non è rappresentabile tramite una sequenza lineare di fasi poiché ha una natura reticolare (cioè con più diramazioni). 
Infatti la stragrande maggioranza dei sistemi ERP consente di definire solo cicli di lavoro sequenziali, pertanto in caso di ciclo reticolare è necessario introdurre dei codici articolo in corrispondenza di ciascuna diramazione del ciclo di lavoro.
- Per individuare parti del prodotto dal punto di vista logico o perché si ha la necessità di calcolare dei costi per parti di esso.
- Per ragioni di documentazione tecnica per interventi di riparazione e manutenzione.

Nei casi in cui si crea un codice articolo ma non si ha mai giacenza dello stesso, l’articolo viene identificato come articolo fantasma o fittizio, pertanto per lo stesso non risulterà possibile emettere ordini o eseguire movimentazioni di magazzino ed il sistema MRP considererà direttamente i suoi componenti senza pianificare lo stesso visto che non può avere giacenza ne ordini.*

:::