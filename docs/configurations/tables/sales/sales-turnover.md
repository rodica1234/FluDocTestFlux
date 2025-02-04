---
title: Fatturato vendite
sidebar_position: 10
---

Consente di inserire nuovi record o di ricercare quelli già esistenti per visualizzarli, modificarli oppure cancellarli.

La form si compone di un'area di filtro e da una di risultato. Una volta impostati tutti i filtri desiderati, basterà cliccare sul pulsante **Ricerca** per visualizzare i risultati all'interno della griglia di risultato.

Per poter inserire record è necessario cliccare sulla prima riga vuota della griglia oppure premere il pulsante **Nuovo**.

*Campi specifici*

**Tipo**: codice di identificazione del fatturato vendite;

**Descrizione**: descrizione del fatturato vendite;

**Conto/Sottoconto/Descrizione sottoconto**: Conto di costo utilizzato in contabilizzazione dei documenti di vendita;

**Tipo IVA**: utilizzato nella registrazione della contabilizzazione del documento. Solitamente è impostatato a generico, per altri dettagli verificarne l'utilizzo nelle causali contabili e nelle registrazioni contabili in area amministrativa;

**Tipo importo**: utilizzato nella registrazione della contabilizzazione del documento. Per altri dettagli verificarne l' [utilizzoconfigurations/tables/finance/ledger-records-templates/insert-ledger-records-templates/attributes-detail)  contabile nelle registrazioni contabili in area amministrativa.

**Famiglia prodotti/Descrizione famiglia prodotti**: campo di assegnazione statistica della vendita per il Sales Forecast del Crm.

**Dettaglio per nazioni**: questi dati sono utilizzati solo per lo scambio dati con programmi esterni. In futuro sarà possibile definire conti di costo diversi per nazione e tipo contabilizzazione articolo, associato in anagrafica cliente.

Per tutto quanto non dettagliato in questo documento sul funzionamento comune delle form fare riferimento al seguente link [Funzionalità, pulsanti e campi comuniguide/common).

:::note Note
Se il *Tipo fatturato* viene inserito nell'*Anagrafica articoli* questo codice viene proposto nelle righe articolo del documento di acquisti e automatizza la contabilizzazione dei documenti su un determinato conto di contropartita.
:::

*Esempio di una fattura di vendita*:

Se quindi, il *Tipo fatturato* fosse presente già nell'*Anagrafica articolo*, nei documenti di vendita lo troveremo riportato nel nel tab *Articoli*, nel campo *Fatturato vendite*; nel caso in cui non sia presente in anagrafica articolo, è possibile andarlo a selezionare direttamente all'interno del documento di vendita tramite l'apposita combo box.

Nel caso in cui non venga inserito nell'anagrafica articolo e non ci si ricordi di andarlo ad inserire manualmente nel documento di vendita, il sistema per non bloccare la contabilizzazione dei documenti, permette (se questa scelta risulta opportuna) di riprendere il sottoconto di contropartita di default che si è deciso di impostare nell'Anagrafica contatto > tab Dati Contabili > tab Amministrazione nel campo **Costo/Ricavo di contropartita predefinito**.

