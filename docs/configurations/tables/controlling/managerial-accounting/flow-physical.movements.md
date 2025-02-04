---
title: Flusso Movimenti Fisici
sidebar position: 4
---

:::tip Nota
Questa tabella è ad uso esclusivo delle società che hanno impostato il *Controlling*
:::

Il Flusso movimenti fisici consente di interagire con i movimenti caricati nella prima nota movimenti fisici, consentendo di replicarli o convertirli applicando un moltiplicatore o una percentuale.

I campi disponibili sono i seguenti

- il ***CODICE*** del flusso

- la ***DESCRIZIONE*** del flusso

- l'[***AREA***/controlling-parametrization/controlling-specific-settings/area-types-areas) di riferimento

- il [***CENTRO AZIENDALE***/controlling-parametrization/controlling-specific-settings/cost-centers) per il quale ricercare i dati quantitativi da gestire

- la [***DIMENSIONE CENTRI DESTINAZIONE***/controlling-parametrization/controlling-specific-settings/dimension) per definire la dimensione dei centri da valorizzare

- la ***DATA INIZIO*** e ***DATA FINE*** validità della regola

- il ***TIPO DISTRIBUZIONE*** da applicare, che può essere solo *01 Percentuale*

- l'[***UNITA' DI MISURA DI ORIGINE***/controlling-parametrization/controlling-specific-settings/measure-units) e l'[***UNITA' DI MISURA DI DESTINAZIONE***/controlling-parametrization/controlling-specific-settings/measure-units), per eventuali conversioni tra UM

- il ***MOLTIPLICATORE*** da applicare alle quantità di origine

Nella griglia sottostante andremo ad inserire la lista dei centri di destinazione da valorizzare, valorizzando i seguenti campi:
- il [***CENTRO AZIENDALE***/controlling-parametrization/controlling-specific-settings/cost-centers)  di destinazione appunto

- la ***PERCENTUALE*** da applicare

- il ***VALORE*** da utilizzare

- il flat ***PERCENTUALE / VALORE***: se è spuntato significa che si digiterà direttamente la percentuale, altrimenti si potrà inserire una quantità di riga (il campo precedente) che ***FluentisERP*** utilizzerà per derivare una percentuale relativa

- un eventuale ***PROGETTO*** da valorizzare

:::tip Esempi
 Una prima necessità potrebbe essere quella di attribuire delle quantità fisiche ad un centro per il quale non si rilevano i tempi, al fine di poterne calcolare una sua tariffa di costo derivandola dal totale delle ore replicate da altri centri: un ausiliario di produzione, per esempio, potrebbe ricevere i totali delle ore di altri centri utilizzati in produzione, per derivarne una quantità da sfruttare per un suo calcolo di tariffa.
 
 Un’altra necessità potrebbe essere quella di replicare dei movimenti fisici della dimensione direzionale nelle altre dimensioni, al fine di utilizzarli per applicare dei driver specifici di queste.
 
 Una terza necessità potrebbe essere quella di convertire le ore che si ricevono dalla produzione in minuti, per calcolare una tariffa in una seconda unità di misura senza doverla calcolare a mano esternamente.
 
 Se da un unico dato d’origine dovessimo duplicare la quantità su due altri centri, si potrebbe applicare una regola che duplica con un moltiplicatore il valore di partenza e poi attribuisce metà ad uno e metà all’altro ad esempio.
:::

:::tip Nota
Nella maschera è presente un pulsante di duplicazione del flusso selezionato.
:::