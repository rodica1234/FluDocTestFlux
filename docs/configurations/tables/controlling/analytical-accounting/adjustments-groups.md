---
title: Gruppi di conguaglio
sidebar_position: 6
---

:::note Percorso
**Tabelle > Controlling > Contabilità analitica > Gruppi di conguaglio**

Nota:
Per tutto quanto non dettagliato in questo documento sul funzionamento comune delle form fare riferimento al seguente link [Funzionalità, pulsanti e campi comuniguide/common).

:::

---

:::tip Nota
Questa tabella è ad uso esclusivo delle società che hanno impostato il *Controlling*
:::

All'interno della presente tabella è possibile codificare dei raggruppamenti di conti utili per la gestione della reportistica specifica per il controlling.
Alcuni conti contabili non vengono utilizzati in prima battuta, direttamente, dal controlling ma soltanto indirettamente ed a posteriori: I gruppi di conguaglio servono quindi per identificare dei gruppi logici a cui assegnare i singoli costi per i conguagli che faremo infra-annualmente oppure solo a fine esercizio, in modo da raggrupparli in modo opportuno nella maschera dei ***Valori di controllo*** e verificarne la quadratura con la contabilità a fine periodo.

I campi disponibili sono:
- ***CODICE***
- ***DESCRIZIONE***
- ***TIPO SALDO***: quest'ultimo è di fondamentale importanza per i sottoconti delle rimanenze iniziali/finali, per i quali saranno da definire obbligatoriamente due categorie specifiche.

:::tip Nota
In particolare, la procedura di ***Contabilizzazione rimanenze*** per il Controlling valorizza nelle registrazioni extracontabili di area le rimanenze iniziali e finali di ogni singolo periodo (mese) che si sta elaborando nell'anno. Quando poi si richiederà, nel modulo del Reporting, gli importi delle rimanenze iniziali e finali del primo semestre dell'anno YYYY, ***FluentisERP*** **deve** sapere per quali conti leggere solo il dato del periodo iniziale di Gennaio e per quali leggere solo il periodo finale di Giugno, altrimenti si avrebbero le somme di 6 mesi di rimanenze iniziali e 6 di rimanenze finali, inficiando completamente l'elaborazione!
:::