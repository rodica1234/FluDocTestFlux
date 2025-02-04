---
title: Formule di Calcolo
sidebar position: 3
--- 

:::tip Nota
Questa tabella è ad uso esclusivo delle società che hanno impostato il *Controlling*
:::

Nelle Formule di calcolo possiamo definire come creare automaticamente delle registrazioni extracontabili di area a partire da dei valori di origine. In generale, l’idea è cercare di automatizzare, magari approssimandole, alcune registrazioni che in contabilità sarebbero rilevate posticipatamente, o che sarebbe dispendioso inserire su ogni periodo come registrazioni extracontabili di Area manuali.

:::tip Esempio
Ad esempio, potremmo valorizzare automaticamente i costi dei premi di risultato, che magari rileviamo a fine anno tramite l’applicazione del 3% sul fatturato dei ricambi Italia, attraverso una formula che rileva questa percentuale sul saldo del conto d’interesse valorizzato sul centro di costo dei ricavi di vendita, assegnando questo costo al centro del Commerciale.

Oppure potremmo applicare delle formule sulle quantità rilevate di un’unità di misura, se magari si presuppone che determinati costi siano di un tot. a pezzo
:::

Per inserire una nuova *Formula*, dalla maschera di ricerca si premerà sul pulsante *Nuovo* in modo da aprire la maschera di gestione, che prevede i seguenti campi:
- la ***DATA INIZIO*** e ***DATA FINE*** validità della regola

- l'[***AREA***/controlling-parametrization/controlling-specific-settings/area-types-areas) di applicazione della regola stessa

- il ***CONTO DI DESTINAZIONE***, cioè il sottoconto da utilizzare per rilevare il movimento automatico nell'analitica della registrazione extracontabile di area

- il [***CENTRO DI DESTINAZIONE***/controlling-parametrization/controlling-specific-settings/cost-centers), cioè il centro da utilizzare nella riga stessa

- il [***CENTRO DI ORIGINE UM***/controlling-parametrization/controlling-specific-settings/cost-centers), opzionale, che serve come centro di filtro dei movimenti fisici quando la formula prevede delle quantità gestite da un'unità di misura

- il ***CENTRO ORIGINE CONTI***(/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-centers), opzionale, che serve come centro di filtro dei valori dei sottoconti inseriti nella formula

Al di sotto avremo due griglie, a sinistra la lista dei conti del piano dei conti, a destra le[* Unità di misura*/controlling-parametrization/controlling-specific-settings/measure-units) disponibili.
Alla base della maschera c'è la sezione con la formula, che può essere gestita trascinando con il mouse le entità (*conti* e/o *UM*) che si vogliono inserire nella formula stessa

:::tip Esempio
Una formula potrebbe essere, ad esempio, "40001-004-Ricavi di Vendita ricambi ITA"*0.03
:::

:::tip Nota
Nella maschera di ricerca è presente un pulsante di duplicazione della formula selezionata.
:::
