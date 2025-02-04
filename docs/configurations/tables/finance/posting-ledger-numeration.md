---
title: Numerazione registrazioni contabili
sidebar_position: 19
---


:::note Percorso
**Configurazione > Amministrazione > Numerazione registrazioni contabili**

Nota:
Per tutto quanto non dettagliato in questo documento sul funzionamento comune delle form fare riferimento al seguente link [Funzionalità, pulsanti e campi comuniguide/common).

:::


:::tip[FAst Start]
La tabella è interessata dalla procedura di [**Fast Start**guide/fast-start)

Nel caso in cui si intenda configurare manualmente fare riferimento alla check list della pagina linkata
:::
---

In questa tabella viene definita, attraverso un ** [*Numeratore standard di Fluentis* configurations/tables/fluentis-numerations) ** , la politica per le registrazioni contabili definitive e provvisorie.

**<u>Si raccomanda di seguire le impostazioni visibili nelle immagini</u>** per una ottimale gestione della numerazione.
E' possibile scegliere una diversa periodicità, ad esempio annuale, oppure non adottare il recupero dei numeri liberi, o anche vincolare la numerazione al criterio di coerenza tra data e numero (esempio non posso avere il numero 2 oggi ed il numero 1 domani).

E' anche possibile, in casi particolari o di specifica necessità, far partire la numerazione da un numero diverso da 1.

**NOTA:** per la numerazione provvisoria è necessario che la numerazione sia negativa.

![](/img/it-it/configurations/tables/finance/posting-ledger-numerations/posting-ledger-numerations.png)

![](/img/it-it/configurations/tables/finance/posting-ledger-numerations/posting-ledger-numerations-detail.png)

![](/img/it-it/configurations/tables/finance/posting-ledger-numerations/posting-ledger-numerations-detail-provisory.png)

:::danger ATTENZIONE
Si sconsiglia di impostare, in situazioni normali, più di un numeratore, rispettivamente per le registrazioni definitive e provvisorie, contemporaneamente. Se emerge questa necessità si veda ** [*la testata della causale contabile* campo *Numerazione*configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates/header) **.
Si sconsiglia altresì di inserire una data fine validità per la numerazione in corso se questo non è motivato da un effettivo cambio nei dettagli della politica stessa. La periodicità scelta nella numerazione stessa fa sì che il numero riparta ogni anno , oppure ogni giorno ecc... Si veda per ulteriori dettagli in merito al rinnovo dei numeratori al cambio d'anno [**qui**configurations/utility/new-year-counter-generation).
:::

:::important Vedi Anche
[**VIDEO TUTORIALS SULLE TABELLE AMMINISTRATIVE**/finance/intro.md)
:::