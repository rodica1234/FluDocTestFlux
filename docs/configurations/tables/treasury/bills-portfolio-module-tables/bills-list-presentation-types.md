---
title: Tipi presentazione distinte effetti
sidebar_position: 4
---

:::tip[FAst Start]
La tabella è interessata dalla procedura di [**Fast Start**guide/fast-start)

Nel caso in cui si intenda configurare manualmente fare riferimento alla check list della pagina linkata
:::

La tabella è collegata al campo *Tipo* presente nella testata della distinta di presentazione effetti. 

Viene compilata attraverso l'imposizione di un codice e di una descrizione, ai quali va assegnato poi un numeratore di riferimento.

Le opzioni ulteriori previste nella maschera offrono la possibilità di definire:

- **Giro a Fornitore:** se il tipo distinta sia da gestire come distinta di giro effetti/titoli a fornitore;

- **Utenze:** se il tipo distinta sia da gestire come distinta RID attualmente sostituita dal tipo SDD (Sepa Direct Debit - a livello europero) nella creazione del file telematico nel modulo RIBA. Attivando il flag viene abilitato il pulsante di esportazione del tracciato corrispondente nella ribbon bar della form relativa alla distinta di presentazione.

- **LCR:** il corrispondente francese delle nostre Riba. Impostando questo flag, nella distinta sarà attivo il pulsante di export LCR e non l’export normale

- **Accredito Immediato:** quando impostato la contabilizzazione distinte registra in DARE il conto banca e in AVERE il conto transitorio banca (esempio *Banca X C/ S.B.F.*) mentre
la contabilizzazione accrediti avrà in dare il conto transitorio banca e in avere il conto del tipo effetto (esempio il conto *Effetti attivi in portafoglio*). 

Quando il flag è disattivato si torna alla logica standard: in DARE il conto transitorio e in avere il conto preso dal tipo effetto (esempio il conto *Effetti attivi in portafoglio*),mentre la contabilizzazione accrediti prevede com’è sempre stato in dare il conto banca e in avere il conto transitorio banca.

Questa impostazione non è compatibile con altre due logiche attivabile dalla form Parametri portafoglio effetti: il flag di *Chiusura cliente in contabilizzazione distinta* non andrà impostato (perché fa saltare il passaggio sul conto effetti, con il presente flag del tipo distinta attivo andrebbe di fatto a impedire la chiusura del cliente). Anche utilizzare le opzioni di contabilizzazione distinte alla data maturazione risulta poco logico con il presente flag attivo.

- **Codice esterno:** campo utilizzato nel tracciato SDD per definire se è la distinta è di tipo *CORE* o *B2B*. Fare  riferimento alla documentazione tecnica dei tracciati SDD.


- **I conti**

- Conto / Sottoconto / Descrizione **Banca**
- Conto / Sottoconto / Descrizione **Transitorio Banca**

possono essere associati al tipo di distinta per automatizzare e definire la movimentazione contabile all'atto della creazione di una nuova distinta: si tratta del sottoconto di anagrafica banca sulla quale avverrà l'accredito finale effetti e del transitorio di presentazione per la contabilizzazione distinte (tipicamente ad esempio *Banca X C/ S.B.F.*).

<iframe width="560" height="315" src="https://www.youtube.com/embed/pnRACKqZqvM" title="YouTube video player" frameborder="0" allowfullscreen= "true"></iframe>
