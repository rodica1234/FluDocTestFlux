---
title: Dettaglio attributi
sidebar_position: 2
---


 

I campi del form **Dettaglio attributi** sono:

**Causale automatica**: al momento del salvataggio di una registrazione basata sulla causale che è in modifica il programma andrà a creare automaticamente una seconda registrazione basata sulla causale indicata in questo campo. Affinché la seconda registrazione sia compilata correttamente si devono rispettare le seguenti logiche di relazione tra le due registrazioni:

a) il primo caso è quello in cui la prima registrazione è con tipo movimento IVA acquisti IntraCEE e la seconda con Giroconto IVA acquisti IntraCEE, nella quale il legame è dato dalla rilevazione dell'IVA Acquisti anche nel registro Vendite; (allo stesso modo si ha lil caso del reverse charge, utilizzando i tipi movimento IVA acquisti in reverse charge e Giroconto IVA acquisti reverse charge);

b) il secondo caso è quello in cui la prima registrazione apre una partita mentre la seconda ne opera la chiusura immediata; 

c) il terzo caso è relativo alla registrazione di chiusura di una partita nata con tipo movimento ‘IVA vendita a Enti pubblici' per la quale l'IVA è in sospensione, caso in cui si collega una registrazione di Giroconto IVA in sospensione;

d) il quarto caso è l'acquisto con IVA in sospensione, inverso al precedente 

e) il quinto caso è quello in cui la prima registrazione è IVA, mentre la seconda è valorizzata con la logica dei sottoconti automatici impostati nel piano dei conti 

f) quando non sono presenti i casi precedenti il programma cercherà di impostare i dati della seconda registrazione sulla base dei dati IVA della prima; in alternativa la seconda registrazione sarà generata riportando i sottoconti previsti senza alcun valore impostato.


**Tipo autofattura automatica**: vedere la sezione specifica alle [**configurazioni delle autofatture automatiche**/e-invoice/auto-invoice/ledger-templates)

**Inversione colonne se importo è minore di zero**: È possibile fare in modo che il programma inverta le colonne Dare/Avere di movimentazione sulla base del segno del movimento IVA, tipicamente nel caso di registrazione di note di accredito (di questo campo è consigliato la selezione per tutte le registrazioni IVA).

**Avviso**: Il campo è attivo solo se il precedente è stato attivato, consiste nel ritornare all'utente un messaggio di avvertimento dell'inversione del segno. Il flag è ininfluente per causali utilizzate nelle procedure automatiche di contabilizzazione.

**Consenti sottoconti con valori a zero**: con questo flag la procedura:

a) consentirà di inserire manualmente righe con importo sia dare che avere uguale a zero 

b) al momento del salvataggio della registrazione NON andrà a cancellare le righe riportate dalla causale e non valorizzate dall'utente nella registrazione 

c) le righe che valorizzano nel libro giornale il debito/credito IVA questo flag comporterà comunque la cancellazione dell'importo a zero ma solo a condizione che non sia stato anche inserito il flag ‘Consenti Iva 0 in LG' nella tabella delle [Aliquote modalità IVAconfigurations/tables/finance/vat-rates).

ESEMPI:

- segliendo di impostare il flag disattivato si può sfruttare la funzionalità per inserire nel modello di registrazione proposto dalla causale tutti i conti potenzialmente utili i quali, se non verranno movimentati, non saranno poi mantenuti al momento del salvataggio della registrazione. Si pensi ad esempio alle scritture dei dipendenti, buste paga ecc... per i quali non sempre si utilizzano gli stessi conti ogni mese benchè i conti possibili siano svariati.

- scegliendo di mantenere il flag attivo potranno essere inseriti sottoconti con movimento a zero, situazione che si verifica spesso registrando le utenze telefoniche o elettriche, ad esempio.

 

**Prototipo della registrazione**: questa è la sezione fondamentale (ma non obbligatoria) della causale di contabilità, nella quale va caricato lo schema tipico del tipo di registrazione contabile da gestire. È possibile inserire anche codici generici di conto (es. il conto fornitori), che saranno aggiornati automaticamente dal programma sulla base della lista conti clienti/fornitori inseriti nei Parametri di contabilità generale. Questi sottoconti, così come le sezioni dare/avere, guideranno le valorizzazioni contabili, che saranno comunque modificabili nel corso del caricamento manuale della registrazione.

![](/img/it-it/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates/attributes-detail/image02.png)



[Tipo importo](#amount-type)


Meritano spiegazioni specifiche i codici di Tipo importo, fondamentali per valorizzare automaticamente il libro giornale sulla base dei dati iva e di partitario movimentati nella registrazione. In particolare:

**Manuale**: indica che la riga sarà valorizzata manualmente dall'utente all'atto della registrazione;

**Imponibile sottoconto**: indica che la riga sarà aggiornata per ogni codice di sottoconto inserito nella sezione Iva con l'importo ottenuto dall'imponibile della/e riga/e stessa/e; l'uso di questo tipo importo è **consigliato tipicamente per tutti i ricavi inseriti nelle causali di vendita**;

**Totale imponibile**: indica che la riga sarà aggiornata con il totale imponibile della registrazione: nessuna considerazione sarà effettuata sul codice di conto/sottoconto inserito. ESEMPI: Vendita con regime dello split payment o vendita intra comunitaria; 

**Totale imposta**: indica che la riga sarà aggiornata con il totale imposta della registrazione: nessuna considerazione sarà effettuata sul codice di conto/sottoconto inserito;

**Imposta detraibile**: indica che la riga sarà aggiornata con il totale dell'imposta detraibile della registrazione: nessuna considerazione sarà effettuata sul codice di conto/sottoconto inserito;

**Tot. Doc/Registrazione**: indica che la riga sarà aggiornata con il codice del sottoconto intestatario della registrazione (se conforme alle combinazioni inserite nei Parametri di contabilità) per il valore totale del documento/registrazione;

**Imponibile+Imposta Indetraibile**: indica che la riga sarà aggiornata con il totale imponibile sommato del totale imposta indetraibile della registrazione: nessuna considerazione sarà effettuata sul codice di conto/sottoconto inserito; Tipo di movimento di scarsa applicazione - conviene utilizzare  **Imp. Sott.+Imposta indetr. Sott**.



**50% Imponibile**: indica che la riga sarà aggiornata con il 50% del totale imponibile della registrazione: nessuna considerazione sarà effettuata sul codice di conto/sottoconto inserito;

**50% Imponibile+Iva indetraibile**: indica che la riga sarà aggiornata con il 50% del totale imponibile della registrazione sommato del totale dell'iva indetraibile della stessa: nessuna considerazione sarà effettuata sul codice di conto/sottoconto inserito;

**50% Impon.+ 50% Iva Indetraibile**: indica che la riga sarà aggiornata con il 50% del totale imponibile della registrazione sommato del 50% dell'iva indetraibile della stessa: nessuna considerazione sarà effettuata sul codice di conto/sottoconto inserito;

CREATI PER RAGIONI FISCALI E DA CONSIDERARE OBSOLETI



**Imp. Sott.+Imposta indetr. Sott**.: indica che la riga sarà aggiornata per ogni codice di sottoconto inserito nella sezione IVA con l'importo ottenuto dalla somma dell'imponibile della/e riga/e stessa/e e della relativa imposta indetraibile; **l'uso di questo tipo importo è consigliato tipicamente per tutti i costi inseriti nelle causali d'acquisto;**

**Arrotondamenti Attivi**: indica che la riga sarà aggiornata con l'importo degli arrotondamenti attivi; l'uso è da collegarsi a causali di chiusura partite;

**Arrotondamenti Passivi**: indica che la riga sarà aggiornata con l'importo degli arrotondamenti passivi; l'uso è da collegarsi a causali di chiusura partite;

**Importo Sottoconto**: indica che la riga sarà aggiornata con l'importo dei pagamenti partite inserite nella registrazione, secondo il segno del pagamento stesso;

**Utile Diff. Cambi**: indica che la riga sarà aggiornata con il sottoconto di utile della divisa di riferimento della differenza cambi, per l'importo ottenuto secondo il differenziale di valorizzazione tra cambio storico e cambio di chiusura della partita; in caso sia stato impostato il flag di chiusura al cambio storico la riga non avrà valorizzazione alcuna;

**Perd. Diff. Cambi**: indica che la riga sarà aggiornata con il sottoconto di perdita della divisa di riferimento della differenza cambi, per l'importo ottenuto secondo il differenziale di valorizzazione tra cambio storico e cambio di chiusura della partita; in caso sia stato impostato il flag di chiusura al cambio storico la riga non avrà valorizzazione alcuna;

**Automatico**: tipo importo utilizzato in alcune procedure di contabilizzazione automatica.

ESEMPIO: Si imposta nelle causali di vendita cespite per gestire la plus-minusvalenza, per il resto è impostato dal sistema nelle procedure di contabilizzazione automatica.

 

La griglia si completa con: 

- un campo di codifica delle contropartite (ne è sconsigliato l'uso: in contabilità è già presente una stampa - "Estratto conto con contropartite" - che visualizza le contropartite indipendentemente da questa impostazione). Inoltre attivando il flag che permtte di visualizzare i sottoconti di contropartita (tab Dettaglio Registrazione)

![](/img/it-it/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates/attributes-detail/image03.png)

questi campi saranno gestiti in automatico; per questo motivo non è consigliato gestirli manualmente imponendoli nella causale.

In corripondenza dei conti iva a credito (o a debito) e costo (o ricavo), ad esempio, vengono riportate le indicazioni del fornitore (o cliente), mentre sul fornitore (o cliente) viene riportato il conto di contropartita del costo o ricavo, nel caso in cui ci siano più conti di contropartita viene riportato quello di importo maggiore (gli altri eventuali vengono ignorati).

 

- un campo di note di dettaglio: in questo campo è possibile utilizzare tutti i codici riportati alla base della maschera.  

**Per causali di chiusura partite** inserire in corrispondenza del conto clienti/fornitori generico i **codici (8) o (9)** in concomitanza con il **flag ‘Rif. doc. partita in pag.'** (situato nel tab Dettaglio Registrazione) per annotare in contabilità i riferimenti dei documenti pagati/incassati.

Prestare attenzione che il conto generico presente nella cusale (esempio "Fornitori Italia") sia effettivamente gestito nei  [Parametri di contabilitàconfigurations/parameters/finance/accounting-parameters)  in abbinamento al tipo conto corretto (es. FIT nel db standard Fluentis). Controllare inoltre che il tipo importo in corrispondenza della riga del cliente o fornitore sia correttamente settato su Importo sottoconto.

 

![](/img/it-it/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates/attributes-detail/image04.png)

 

**Imposta detr. e sottoconto IVA**: tipo importo utilizzato per valorizzare la riga relativa all'IVA con l'importo detraibile dell'IVA e con il sottoconto individuato secondo il ‘Tipo contabilizzazione IVA' associato in via prioritaria all'anagrafica intestataria della registrazione o di default nei ‘Parametri di contabilità generale'.

Impostazione non utilizzata in Italia, utile per localizzazioni estere, esempio Croazia, per legare il conto dell'iva all'aliquota utilizzata (esempio se viene utilizzata l'aliquota IVA 10% verrà associato il conto "iva acquisti al 10%", quindi specifico per quell'aliquota anzichè un conto, esempio "iva a credito", generico come in Italia per tutte le aliquote).

 

**Descrizione parametrica della registrazione contabile**: all'interno di questa si possono codificare delle descrizioni standard che vengono compilate dal programma attraverso i vari codici indicati nella legenda posta immediatamente sopra al compo, descrizioni che saranno riportate nelle stampe contabili e in particolare negli Estratti conto e nel Libro giornale. 

Anche per ogni riga di movimentazione della sezione *Dettaglio conti / sottoconti - Prototipo registrazione* è possibile, come già illustrato sopra, codificare delle note preimpostate così come per la Descrizione generale. 

ATTENZIONE: in particolare i codici (8) e (9) sono gestiti solo per la descrizione specifica di riga e non sono considerati nella descrizione generale della registrazione di cui al campo in commento.

![](/img/it-it/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates/attributes-detail/image05.png)

:::important Vedi Anche
[**VIDEO TUTORIALS SULLE CAUSALI CONTABILI**/finance/intro.md)
:::