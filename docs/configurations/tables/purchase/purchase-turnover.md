---
title: Fatturato acquisti
sidebar_position: 9
---

La tabella si apre tramite il percorso **Tabelle > Acquisti > Fatturato acquisti** e contiene dati necessari per la contabilizzazione dei documenti.

*Campi specifici*:

**Tipo**: codice di identificazione del fatturato;

**Descrizione**: descrizione del fatturato;

**Conto/Sottoconto/Descrizione sottoconto**: conto di costo utilizzato in contabilizzazione dei documenti;

**Tipo IVA**: utilizzato nella registrazione della contabilizzazione del documento. Solitamente è impostato a generico, per altri dettagli verificarne l'utilizzo nelle causali contabili e nelle registrazioni contabili in area amministrativa;

**Conto/Sottoconto analitico/Descrizione**: conto utilizzato per contabilizzare il documento in contabilità analitica.

**Tipo/Descrizione**: utilizzato nella registrazione della contabilizzazione del documento. Per altri dettagli verificarne l'[utilizzoconfigurations/tables/finance/ledger-records-templates/insert-ledger-records-templates/attributes-detail) contabile nelle registrazioni contabili in area amministrativa.

Per tutto quanto non dettagliato in questo documento sul funzionamento comune delle form fare riferimento al seguente link [Funzionalità, pulsanti e campi comuniguide/common).

:::note Note
Se il *Tipo fatturato* viene inserito nell'*Anagrafica articoli* questo codice viene proposto nelle righe articolo del documento di acquisti e automatizza la contabilizzazione dei documenti su un determinato conto di contropartita.
:::

*Esempio di una fattura di acquisti*:

Se quindi, il *Tipo fatturato* fosse presente già nell'*Anagrafica articolo*, nei documenti di acquisti lo troveremo riportato nel tab *Articoli*, nel campo *Fatturato acquisti*; nel caso in cui non sia presente in anagrafica articolo, è possibile andarlo a selezionare direttamente all'interno del documento di acquisti tramite l'apposita combo box.

Nel caso in cui non venga inserito nell'anagrafica articolo e non ci si ricordi di andarlo ad inserire manualmente nel documento di acquisti, il sistema per non bloccare la contabilizzazione dei documenti, permette (se questa scelta risulta opportuna) di riprendere il sottoconto di contropartita di default che si è deciso di impostare nell'*Anagrafica contatto > tab Dati Contabili > tab Amministrazione* nel campo **Costo/Ricavo di contropartita predefinito**.