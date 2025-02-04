---
title: Inserimento causali di contabilità generale
sidebar_position: 1
---

:::tip[FAst Start]
La tabella è interessata dalla procedura di [**Fast Start**guide/fast-start)

Nel caso in cui si intenda configurare manualmente fare riferimento alla check list della pagina linkata

Le causali create dalla procedura di Fast Start permettono di eseguire:

- Scritture di acquisto e vendita **Italia**
- Acquisto e vendita in **Reverse charge** in Italia, giroconto acquisti e relativa autofatturazione
- Scritture di acquisto e vendita **UE**, giroconto acquisti e relativa autofatturazione
- Scritture di acquisto e vendita **Extra UE** e relativa autofatturazione con giroconto
- Note di accredito a storno delle precedenti
- Acquisto e vendita **cespiti**
- Corrispettivi
- **Incassi e pagamenti**
- Portafoglio attivo (emissione e presentazione Ri.Ba e incasso, insoluti)
- Scritture di prima nota libere
- Altre scritture in prima nota quali paghe ecc.
- Giriconto IVA
- Versamenti imposte e contributi
- Scritture di rettifica quali ratei e risconti attivi e passivi
- Ammortamenti
- Scritture di chiusura e riapertura conti
:::

:::important[Importante]
Le causali contabili sono composte da una testata e da tre sezioni: 

**[Dettaglio attributi;configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates/attributes-detail)**, 

**[Dettaglio registrazioneconfigurations/tables/finance/ledger-records-templates/insert-ledger-records-templates/recording-detail)** e 

**[Parametriconfigurations/tables/finance/ledger-records-templates/insert-ledger-records-templates/parameters)**.
:::



![](/img/it-it/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates/header/image01.png)

### Testata

**Causale**: rappresenta il codice alfanumerico di 5 caratteri che deve essere univoco.

**Descrizione causale**: rappresenta la descrizione della causale.

**Tipo movimento**: rappresenta il tipo di movimento della registrazione. Si tratta di una tabella fissa interna, non disponibile in modifica all'utente, che suddivide le causali non IVA dalle varie tipologie di movimento IVA.

**Tipo documento**: la tabella è precaricata ma può essere modificata/integrata dall'utente. In questa tabella, in particolare, sono d'interesse le righe che prevedono i flag **‘Nota Accredito'** e **‘Nota di variazione'**: per l'Accredito, infatti, la procedura controlla che la sezione IVA sia valorizzata con importi negativi (un controllo di coerenza dei segni, inoltre, viene effettuata sulla contabilizzazione delle note di credito dall'area vendita/acquisto: significa che non possono essere presenti righe con importi positivi e contemporaneamente altre per un altro sottoconto con importi negativi); per la ‘Nota di variazione' la procedura andrà ad attivare, sempre nella sezione IVA della registrazione, un flag di identificazione delle righe relative alle note di variazione e una data di riferimento del documento da rettificare ai fini dell'IVA. Non si confonda questa data con il campo **Comp. IVA:** la nota di accredito (o comunque di variazione) rettificherà l'iva del periodo indicato in quest'ultimo campo. 



![](/img/it-it/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates/header/image02.png)

![](/img/it-it/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates/header/image03.png)

 
**Numerazione:** le combo box permettono di abbinare ad ogni causale contabile, rispettivamente per le registrazioni definitive e provvisorie, una particolare numerazione. Questo tipo di gestione è richiesto in alcune localizzazioni estere. Cfr [*Tabella Numerazione Registrazioni contabili* configurations/tables/fluentis-numerations). Se non viene definita una particolare numerazione valida per la causale, di default verrà cercata una numerazione eventualmente impostata nei ** [*Parametri generali di contabilità* configurations/parameters/finance/accounting-parameters/) e in mancanza di un'impostazione sarà letta la tabella generale *Numerazione registrazioni contabili***

**Libri contabili:** combo box che rinvia ad apposita tabella dove definire un codice e descrizione da richiamare poi nella causale al fine di raggruppare e categorizzare le causali stesse. Queste categorie potrebbero essere anche abbinate alle differenti numerazioni di cui al campo precedente (utile per localizzazioni estere dove vengono tenuti separati i libri giornali a seconda del tipo di scrittura contabile). Esempio: gli acquisti potrebbero avere il numeratore a) legato al libro contabile "Acquisti", mentre le vendite il numeratore b) legato al libro "Vendite", le scritture di banca (incassi / pagamenti) il numeratore c) legato al libro "Scritture banca" ecc...

**Data fine validità**: è possibile bloccare l'utilizzo di una causale contabile a partire da questa data. Non sarà visibile nella lista delle causali dalla data successiva.

**Registro incassi e pagamenti**: NON ATTIVO (identifica le causali da riportare nel registro incassi/settlement della contabilità semplificata professionisti).

**Professionisti**: NON ATTIVO (identifica una causale per la contabilità dei professionisti).

:::important Vedi Anche
[**VIDEO TUTORIALS SULLE CAUSALI CONTABILI**/finance/intro.md)
:::