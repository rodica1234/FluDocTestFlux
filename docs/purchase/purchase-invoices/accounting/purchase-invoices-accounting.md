---
title: Contabilizzazione fatture di acquisto
sidebar_position: 1
---

La procedura si apre tramite il percorso **Acquisti > Fatture di acquisto > Procedure > Contabilizzazione fatture di acquisto**.

### Contabilizzazione

La maschera presenta nella parte superiore i filtri di ricerca per individuare la lista delle fatture da contabilizzare presenti nel sistema.

Alla base della maschera sono presenti alcuni parametri di gestione della contabilizzazione:

**Data registrazione**: è la data registrazione da assegnare alla registrazione stessa, se non è stato impostato il flag *Data registrazione uguale ultima data registro IVA*;

**Data competenza**: è la data competenza da assegnare alla registrazione;

**Data registrazione uguale ultima data registro IVA**: con questo flag il sistema individuerà per ogni fattura quale è l'ultima data di registrazione utilizzata per il registro IVA associato alla causale del tipo fattura e utilizzerà questa data per registrare i documenti selezionati. In mancanza del flag si attiverà il campo *Data registrazione* per impostare la data registrazione manualmente;

**Data competenza uguale a data registrazione**: questo flag impone la contabilizzazione con data competenza uguale alla data della registrazione. Se il flag viene disabilitato, si attiva il campo della data competenza in modo da impostare manualmente questa data;

**Usa il cambio della tabella cambi**: con questo flag si impone al sistema di verificare la tabella cambi per utilizzare quello presente alla data registrazione/fattura (o l'ultimo inserito in precedenza). Se il flag non è impostato sarà invece utilizzato il cambio già presente in testata della fattura;

**Aggiorna cambio in documento**: il campo è attivo solo se il precedente flag è impostato. Il significato è quello di andare ad aggiornare anche il cambio presente in testata della fattura, sovrascrivendo quello presente;

*Pulsante specifico*: 

> **Contabilizzazione fatture**: permette di contabilizzare le fatture selezionate nella griglia, in base ai parametri inseriti.


### Omaggi

L'utente ha la possibilità di decidere quali omaggi siano da contabilizzare. Per questo deve specificare la causale per la contabilizzazione omaggi e il conto per lo storno IVA.

**Contabilizzazione omaggi**: con questo flag si attiva la gestione della contabilizzazione omaggi, attivando i campi successivi collegati.

Se la fattura che si sta contabilizzando presenta un omaggio e:

1. il parametro di gestione non è stato impostato, il sistema chiederà conferma all'utente con un avviso della mancata impostazione. In questa situazione sarà registrata la fattura normalmente senza alcuna gestione della riga omaggio, che andrà quindi gestita manualmente in contabilità.

2. il parametro di gestione omaggi è stato impostato:

    2.1 non si sia inserito alcun sottoconto nei campi successivi, il sistema andrà ad aggiungere in coda ai normali movimenti di contabilizzazione le necessarie righe di storno dei costi, utilizzando lo stesso sottoconto impostato per l'articolo.

    2.2 è stato impostato il flag **Sostituisci al conto dell'articolo** si attiverà il campo dove impostare il sottoconto di storno omaggi, che sarà utilizzato al posto del sottoconto dell'articolo in queste righe aggiuntive.

**Conto storno IVA**: usato nel caso in cui l'articolo omaggio in fattura non abbia il flag **Rivalsa IVA**, con il quale si indica se l'IVA applicata all'articolo omaggio è a carico (con flag) o meno (senza flag) del fornitore. Questo importo sarà registrato e stornato solo nel caso in cui sia inserito il *Conto di storno IVA*, senza il quale l'operazione sarà da gestire manualmente in contabilità (anche in questo campo c'è un messaggio di conferma/avviso utente della mancata impostazione).

*Pulsante specifico*: 

> **Salva**: permette di salvare i parametri impostati per la contabilizzazione omaggi.

Dopo aver selezionato le fatture (dal tab *Contabilizzazione*) e impostato i parametri, le fatture possono essere contabilizzate con l'aiuto del pulsante *Contabilizzazione fatture*.

### Precedenti

La form presenta la lista delle operazioni di contabilizzazione eseguite, al fine di visualizzarle ed eventualmente annullarle attraverso gli appositi pulsanti.

L'annullamento sarà possibile solo se il periodo è ancora modificabile (stampa libro giornale, registro iva non stampato, liquidazione periodica non stampata, chiusura conti non eseguita, partite contabili chiuse in un incasso o in un effetto). 

**Contabilizzazione fatture**: griglia con i dettagli delle operazioni eseguite. Viene popolata dopo la procedura di ricerca e possono essere selezionate le operazioni sulle quale applicare le funzioni del ribbon.

I dati nelle griglie in basso, **Fatture di acquisto** e **Registrazione contabile** corrispondono all'operazione selezionata nella griglia superiore. Un doppio click nella sezione delle fatture/registrazioni consentirà di visualizzare la fattura/la registrazione contabile relativa.

*Pulsanti specifici*:
> **Ricerca contabilizzazione**: ricerca la lista delle contabilizzazioni eseguite.  
> **Anteprima contabilizzazione**: per visualizzare l'anteprima di stampa della contabilizzazione.  
> **Ripristina contabilizzazione**: per cancellare la contabilizzazione selezionata.  
> **Ripristina registrazione**: per cancellare l'intera operazione selezionata, con tutti i suoi dettagli visualizzati nelle due griglie sottostanti.

### Messaggi di errore

vedere la pagina sulla [**contabilizzazione fattura di vendita**accounting/sales-invoices-accounting#messaggi-di-errore)