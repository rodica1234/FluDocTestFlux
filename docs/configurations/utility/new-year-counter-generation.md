---
title: Generazione contatori nuovo anno
sidebar_position: 3
---

La form permette di gestire i numeratori presenti in Fluentis, in particolare nel momento del cambio d'anno.

All'apertura della form, Fluentis visualizza l'**Ultimo anno gestionale esistente** (preso dai parametri di contabilità) e il filtro per i *contatori non validi per il prossimo anno*.

La griglia presenta la lista dei numeratori non definiti (o non definiti correttamente) per l'anno prossimo permettendo all'utente, con un doppio click, di identificare il motivo: generalmente il problema risiede nella configurazione del numeratore con una data di fine validità senza un motivo valido, costringendo (prima della creazione del presente automatismo) a creare una nuova riga ogni anno, anziché impostare il numeratore con l'opzione Annuale che riparte da capo ogni anno automaticamente, tuttavia potrebbe essere che il numeratore sia stato bloccato per un motivo preciso (cambio di politica della numerazione ecc.).

*Pulsanti specifici*: 

> **Creazione**: il pulsante mostra un messaggio di conferma della correzione automatica dei numeratori per le righe selezionate nella griglia.  
> **Rollback**: esegue il ripristino della procedura.

*Esempio*  
Se al messaggio si risponde in modo:  
- affermativo, saranno tolte le date fine validità dei numeratori che sono stati (si suppone) erroneamente chiusi nell'anno 2017 dell'esempio (non si sbloccheranno quindi numeratori chiusi negli anni precedenti), impostandoli inoltre come ‘annuali' in modo da renderli validi per sempre.

- negativo, i numeratori Fluentis resteranno come sono.


Facciamo qualche esempio:

A) supponiamo ultimo anno 2017, numeratore fatture Fluentis con codice ‘1' impostato con data di fine validità 2020 e quindi valido per il 2018, la procedura andrà a creare anche il numeratore ex-Ideale2010 con codice 1 per il 2018.

B) supponiamo ultimo anno 2017, numeratore fatture Fluentis con codice ‘2' impostato con data di fine validità 2017 e quindi NON valido per il 2018, se l'utente conferma la sistemazione del numeratore Fluentis allora nel numeratore sarà tolta la data fine validità e impostato il tipo come annuale e poi sarà ricreato il corrispondente numeratore ex-Ideale2010 con codice ‘2'; in caso il numeratore Fluentis non venga sistemato, questo numeratore non sarà valido per il 2018 e quindi anche il numeratore ex-Ideale2010 con codice ‘2' resterà bloccato.

C) supponiamo ultimo anno 2017, numeratore fatture Fluentis con codice ‘3' senza data fine validità e quindi valido per il 2018, la procedura andrà a creare anche il numeratore ex-Ideale2010 con codice 3 per il 2018 (indipendentemente da come l'utente risponde al messaggio di conferma della sistemazione Fluentis).

:::tip NOTA
Questa utilità permette di creare anche i parametri di contabilità per il nuovo anno. Verrà visualizzato un apposito messaggio che chiede di confermare. Si consiglia di accettare la creazione, diversamente i parametri di contabilità, **necessari** per eseguire qualsiasi registrazione contabile dovranno essere creati, per il nuovo anno dalla [**apposita form**configurations/parameters/finance/accounting-parameters).
:::
