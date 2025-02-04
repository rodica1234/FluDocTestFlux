---
title: Cambi valute
sidebar_position: 4
---

La tabella dei Cambi valute, comune a tutte le società della stessa base dati, consente di impostare giorno per giorno i cambi ufficiali da utilizzare nelle varie procedure del gestionale: in particolare si segnala che il programma andrà a recuperare da questa tabella l'ultimo cambio valido a ritroso dalla data del documento/registrazione che si sta inserendo.

:::note Nota
La tabella può essere valorizzata manualmente inserendo direttamente il tasso di cambio relativo alla divisa ed al giorno anch'essi impostati manualmente, oppure può essere eseguito un aggiornamento automatico scaricando i tassi di cambio tramite l'apposito bottone posto nella ribbon bar ***Scarica tassi di cambio***.

 Premendo il bottone apparirà un **popup** che richiede l'inserimento delle **date Da / A** all'interno delle quali ricercare i tassi di cambio ed il **flag Inserimento automatico** che va direttamente a popolare la tabella (e che si consiglia di lasciare attivo).

**ATTENZIONE:** vengono scaricati i tassi di cambio relativi solamente alle divise che hanno il flag Scarica cambi nella tabella [**Divisa**configurations/tables/general-settings/currencies).
:::


Nella griglia si trovano i seguenti campi:

**Cambio**: normalmente va inserita la divisa della società (euro).

**Descrizione**: descrizione della divisa.

**In**: divisa di riferimento.

**Descrizione**: descrizione divisa di riferimento.

**Data valuta**: data di riferimento del cambio.

**Valore cambio**: si tratta del cambio 'incerto per certo', effettivamente utilizzato dal programma nei calcoli dei controvalori. Nel caso dell'euro, quindi, è il valore inverso al cambio ufficiale del giorno.

**Valore diretto**: si tratta del cambio 'certo per incerto'. Nel caso dell'euro, quindi, è il valore de cambio ufficiale del giorno.






