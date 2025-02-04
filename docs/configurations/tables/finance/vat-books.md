---
title: Registri IVA
sidebar_position: 20
---

:::note Percorso
**Configurazione > Tabelle > Amministrazione > Registri IVA**


:::tip[FAst Start]
La tabella è interessata dalla procedura di [**Fast Start**guide/fast-start)

Nel caso in cui si intenda configurare manualmente fare riferimento alla check list della pagina linkata

I registri creati dal Fast Start sono già pronti per gestire

- Acquisti e vendite Italia
- Acquisti e vendite Reverse Charge oltre a sezionale per giroconto acquisti
- Acquisti e vendite UE oltre a sezionale per giroconto acquisti
- Acquisti e vendite Extra UE
- Corrispettivi
- Riepilogativo per stampa liquidazioni iva
:::

---

Tabella di impostazione dei registri IVA da gestire nella società attiva. 

:::note Pulsanti della Ribbon bar
| Funzione | Significato |
| --- | --- |
| Nuovo | Pulsante per effettuare l'inserimento di un nuovo registro IVA. |
| Inserimento anno | Pulsante per effettuare l'inserimento di un nuovo anno per il registro IVA su cui si è posizionati. |
| Cancella | Pulsante per effettuare la cancellazione del registro IVA su cui si è posizionati. |
| Cancella anno | Pulsante per effettuare la cancellazione dell'anno del registro IVA su cui si è posizionati. |
| Anteprima | Pulsante per effettuare la stampa. |
| Stampa | Pulsante per effettuare la stampa. |
| Annulla stampe definitive | Pulsante per effettuare l'annullamento delle stampe definitive dei registri. Si apre un dialog nel quale selezionare il registro e il periodo che si intende annullare. |
:::

I campi della **prima sezione**:

**Codice**: codice alfanumerico identificativo del registro.

**Descrizione**: descrizione del registro stampato normalmente nei report ufficiali.

**Tipo registro**: tipologia precodificata del registro. Prestare attenzione al corretto settaggio ad esempio dei registri che accolgono il giroconto per acquisti intra o reverse charge i quali saranno impostati su *Vendite* ed a differenziare correttamente la fattispecie degli acquisti / vendite in sospensione d'imposta ed il regime speciali ex art. 74 ter dpr 633/72.

**Controllo protocolli**: l'impostazione di questo flag blocca la possibilità di stampare in definitivo un registro che abbia buchi nei protocolli o incongruenze nell'ordinamento degli stessi.

**Da ventilare**: questo flag impone la gestione del registro relativo nella procedura di ventilazione dei corrispettivi.

**Da liquidare**: permette di determinare quali registri IVA siano da gestire nella stampa della Liquidazione IVA periodica.

**Rif. reg. acquisto**: il campo è attivo solo per i registri vendite/corrispettivi, al fine di indicare il registro iva acquisti d'origine della ventilazione dei corrispettivi.

**Descrizione**: descrizione rif. reg. acquisto.

**Numerazione**: consente di impostare per ogni registro un numeratore con le consuete opzioni standard comuni agli altri numeratori presenti nel gestionale, al posto della numerazione standard prevista per i registri iva. Nella localizzazione italiana questo campo non viene utilizzato.

**Descrizione**: descrizione del numeratore associato

**Tipo attività Iva**: la combo box rinvia alla tabella Tipo attività Iva dove è possibile codificare liberamente diverse tipologie di attività ai fini iva (a titolo di esempio "Produzione" ed "Immobiliare") ai quali associare una percentuale di *Pro Rata* di detraibilità iva. E' presenta anche un flag per definire quale sia l'attività principale prevalente sulla quale totalizzare i valori nella liquidazione iva.

**Descrizione**: descrizione del tipo attività iva

---

**La seconda sezione** consente di impostare il contatore dei protocolli per ogni anno contabile nel campo 'Prot. IVA Iniziale'.

**Anno**: anno di riferimento.

**Prot. IVA iniziale**: protocollo IVA iniziale dell'anno di riferimento.

**Ultimo prot. IVA**: consente di visualizzare qual'è l'ultimo protocollo IVA che è stato stampato in definitivo nel registro stesso.

**Data ultima stampa**: data di esecuzione dell'ultima stampa definitiva.

**Ultima pag. stampata**: ultimo numero di pagina stampata in definitiva.

---

:::tip nota
la stampa di questa tabella consente di visualizzare l'ultimo periodo stampato in modo definitivo per ogni registro e anno
:::

:::important Vedi Anche
[**VIDEO TUTORIALS SULLE TABELLE AMMINISTRATIVE**/finance/intro.md)
:::