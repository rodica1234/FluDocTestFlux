---
title: Tipi documento
sidebar_position: 25
---

:::tip[FAst Start]
La tabella è interessata dalla procedura di [**Fast Start**guide/fast-start)

Nel caso in cui si intenda configurare manualmente fare riferimento alla check list della pagina linkata
:::

Questa tabella gestisce le tipologie di documento associate alle Causali di contabilità generale e da qui, quindi, alle registrazioni contabili o infrannuali o gestionali che richiamano queste causali.

:::tip Nota
il **Fast Start** crea i tipi documento associandoli alla localizzazione geografica relativa, in modo da avere una lista dei documenti per l'Italia o per la Romania ecc. ecc.
L'oggetto, infatti, prevede il campo nazione, che si può visualizzare in griglia dall'object navigator: per retrocompatibilità, è possibile avere anche Tipi documento *senza* legame ad una nazione, in modo che siano visibili in tutte le società del database indifferentemente.
Ogni nuovo inserimento, comunque, recepirà la nazione della società attiva
:::

I campi disponibili sono:
- *Tipo codice* è il codice del tipo
- *Tipo descrizione*, la descrizione
- *Fattura*
- *Ricevuta fiscale*
- *Parcella*
- *Saldaconto*
- *Giroconto*
- *Generale*
- *Nota accredito*: per questo tipo documento, ***FluentisERP*** verificherà che la registrazione contabile abbia righe negative nella sezione Iva
- *Nota debito*
- *Nota di variazione*: per le note di credito di sola iva ***semplificate*** (TD08)
- *Riepilogativa*
- *Autofattura*
- *Incasso*
- *Pagamento*
- *Codice per fatture elettroniche*: è il codice che si utilizzerà per valorizzare il file Sdi (TD01, TD04 ecc)

:::tip Nota
Nella griglia sottostante è possibile agganciare un numeratore specifico per Tipo documento: sarà utilizzato per un numeratore interno, non ufficiale, delle registrazioni contabili, non direttamente visibile in interfaccia
:::