---
title: Nuovo tipo solleciti
sidebar_position: 3
---

I campi di questa form sono:

**Codice**: codice identificativo del tipo sollecito.

**Descrizione**: descrizione del tipo sollecito.

**Tipo interesse**: opzionale, è il collegamento al tipo di tasso di interesse da applicare al ritardo di pagamento, per ottenere un calcolo alla data di emissione del sollecito.

**Sollecito per gruppo partite**: il flag di gestione per gruppo di partite, in particolare, andrà a gestire una lettera di sollecito per un gruppo di partite contemporaneamente (gestione standard), mentre senza flag ogni partita contabile avrebbe il suo sollecito separato dalle altre.

Una volta salvato il tipo di sollecito è possibile crearne i vari livelli con il pulsante ‘nuovo'.

**Codice**: codice identificativo del sollecito.

**Descrizione**: descrizione del tipo sollecito.

**Priorità**: priorità di creazione da 1 a N livelli.

**Descrizione tipo fido**: il collegamento ad un tipo di controllo fido cliente non è gestito.

**Giorni di ritardo**: indicazione dei giorni di ritardo che devono decorrere prima di sollecitare la partita.

**Giorni**: il numero di giorni di scadenza del sollecito e se questi siano da conteggiare dalla data di creazione o dalla data di scadenza del sollecito precedente.

**Da data movimento precedente**: data di riferimento per i livelli successivi al primo.

**Da data creazione**: data di riferimento solitamente utilizzata per il primo livello.

:::danger ATTENZIONE
I valori dei campi "**giorni di ritardo**" e "**giorni**" , in particolare per i solleciti successivi al primo, vengono sommati e pertanto nel caso del secondo, terzo sollecito ecc.. in genere non è necessario aggiungere un valore nel parametro *giorni di ritardo*, è possibile invece riferirsi all'ulteriore tempo intercorso dalla data del primo sollecito  tramite il parametro *giorni*.
:::

Per ogni numero di sollecito si potrà procedere, una volta salvato, all'inserimento dei vari testi in lingua: il primo che si andrà a caricare è quello che sarà utilizzato di default quando l'anagrafica cliente non ha una lingua assegnata.

I testi sono divisi in 4 sezioni: l'oggetto della lettera, la testata, la conclusione e la sezione riferimenti (attiva solo per solleciti su gruppi di partite). Nella sezione riferimenti, in particolare, si può inserire un testo utilizzando i codici previsti alla base della maschera: ad es. “Rif. (3) nr. (4) del (5), (9) di (8) (10) con scadenza al (6)”.






