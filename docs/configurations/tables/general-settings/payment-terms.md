---
title: Soluzioni di pagamento
sidebar_position: 10
---

:::tip[FAst Start]
La tabella è interessata dalla procedura di [**Fast Start**guide/fast-start)

Nel caso in cui si intenda configurare manualmente fare riferimento alla check list della pagina linkata
:::

La tabella contiene le soluzioni di pagamento da utilizzare nel gestionale per il calcolo delle scadenze e delle partite aperte.

:::danger Attenzione
Il corretto inserimento di una soluzione di pagamento richiede di compilare sia la griglia superiore, sia quella di dettaglio che definisce il calcolo dei giorni di scadenza. Nonostante il programma permetta di salvare senza la griglia di dettaglio, una soluzione creata in questo modo non sarà utilizzabile. 
:::

### Griglia superiore

**Soluzione / Descrizione:** Rappresenta il codice e descrizione della dilazione di pagamento da applicare

**Fine mese:** il flag attivo porta la dilazione di pagamento a fine mese dopo aver applicato il numero di giorni definiti nella griglia di dettaglio in basso

**Fine settimana:** il flag attivo porta la dilazione di pagamento al venerdì seguente alla data ottenuta dopo aver applicato il numero di giorni definiti nella griglia di dettaglio in basso

**Giorni:** numero di giorni da aggiungere al fine mese per ottenere il giorno fisso di scadenza (il corretto settaggio prevde quindi di definire in basso il numero di giorni di dilazione, anche zero se del caso, poi viene letto il flag fine mese e infine aggiunti i giorni ulteriori oltre il fine mese. Per normalizzare il calcolo si consiglia di abbinare anche il flag per il calendario commerciale che rende tutti i mesi di 30 giorni)

**DL Art 62:** flag che identifica le due rate dei 30 e 60 giorni che saranno da utilizzare per il calcolo delle scadenze di pagamento in fatture contenenti merci deperibili secondo l’art.62 del Decreto Legge 24 gennaio 2012 n.1.

[**Vedere anagrafiche clienti fornitori**erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/fiscal-information)

**Nazione**: filtro per rendere visibile quella soluzione pagamento solo alle società del database che hanno la nazionalità specificata (utile in quanto la tabella essendo di base è visibile a tutte le società della stessa base dati).


### Griglia inferiore

A livello di rateizzazione, è possibile ripartire in percentuale sulle varie rate l’imponibile, l’iva e le spese del documento (la % spese non è applicabile direttamente nelle registrazioni di contabilità generale). Nel caso in cui la percentuale venga lasciata a zero, ***Fluentis*** ripartirà in modo uniforme sul numero di rate presenti

flag **Commerciale**: con questa opzione possiamo inserire solo multipli di 30 giorni nel campo relativo, che saranno gestiti come singolo mese

caso tipico è una scadenza a 30gg fine mese, quando la data fattura è il 31/01: se applichiamo 30 giorni di calendario (quindi senza il flag ‘commerciale’), andremo ad ottenere una scadenza al 02/03 e quindi il fine mese porterà la scadenza al 31/03, cioè sostanzialmente 60gg dopo e non 30 come inteso dal nome. Se invece è presente il flag commerciale, i 30 giorni saranno in realtà gestiti come 1 mese in più + fine mese, quindi dal 31/01 si andrà correttamente al 28 o 29 febbraio come da calendario.




### Lingue

Per ogni tipo di pagamento selezionato nella griglia superiore, è possibile definire delle descrizioni in lingua: utilizzabile per stampe personalizzate.
