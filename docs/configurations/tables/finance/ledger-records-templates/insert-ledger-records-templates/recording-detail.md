---
title: Dettagli registrazione
sidebar_position: 3
---

![](/img/it-it/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates/recording-detail/image01.png)

**Registro IVA**: il campo, obbligatorio solo per causali con tipo movimento IVA, consente di assegnare il registro IVA di riferimento alla causale in gestione.

**Data competenza IVA**: il campo consente di definire quale sia la data di competenza da assegnare al movimento IVA: il programma propone la data registrazione per i movimenti su registri acquisti e la data documento per movimenti su registri vendite. Si raccomanda di impostare la data competenza come data registrazione anche per le causali di giroconto IVA intra cee e reverse charge. 

E' fondamentale, infatti, controllare che le due causali, di acquisto e di giroconto, che sono coinvolte in questi tipi di "doppia registrazione", presentino il medesimo settaggio per evitare che l'iva detratta e l'iva esigibile in contropartita possano assumere periodi di competenza differenti. Lo vogliamo evidenziare in modo particolare perché, la causale di giroconto, essendo una causale iva lato vendite, propone di default il criterio data documento che va dunque modificato.

### Opzioni tipo documento

**Tipo/N. documento**: l'impostazione di questo flag rende obbligatorio il campo del numero documento per il salvataggio della registrazione basata su questa causale.

**Data documento**: l'impostazione di questo flag rende obbligatorio il campo della data documento per il salvataggio della registrazione basata su questa causale.

**N. Doc. = Prot. IVA**: l'impostazione di questo flag implica che il programma proporrà il numero del documento sulla base del numero di protocollo IVA progressivo. Il campo, quindi, non va impostato per registrazioni d'acquisto per le quali il numero documento e protocollo non hanno alcun legame reciproco; per quanto riguarda le vendite, invece, l'uso è suggerito solo per causali di registrazioni effettuate manualmente direttamente in contabilità generale: l'impostazione di questo flag è sconsigliata per causali impostate nei tipi fatture di vendita e utilizzate nella contabilizzazione fatture.

**Prot. IVA = N. doc**: l'impostazione di questo flag implica che il programma cercherà di attribuire il protocollo iva sulla sulla base del numero di documento. Il campo, quindi, non va impostato per registrazioni d'acquisto per le quali il numero documento e protocollo non hanno alcun legame reciproco; per quanto riguarda le vendite, invece, **l'uso è suggerito per tutte le causali impostate nei tipi fatture di vendita e utilizzate quindi nella contabilizzazione automatica fatture**: la possibilità di utilizzare questa impostazione dipende dalla certezza che la numerazione dei tipi fatture sia la stessa per tutti i documenti da registrare nello stesso Registro IVA, diversamente si verrebbero a creare dei "salti" (o dei "doppioni" con conseguente rifiuto di salvataggio) nella protocollazione.

L'utilità di questa funzione nella contabilizzazione automatica delle fatture consiste nella possibilità di contabilizzare senza porre attenzione all'ordine di protocollazione: esempio posso contabilizzare la fattura nr. 2 e poi la nr. 1 ottenendo una corretta protocollazione che associa la fattura nr. 1 al protocollo 1 ecc...

A fine periodo IVA (mese o trimestre) basterà dunque accertarsi di aver contabilizzato tutte le fatture emesse.


### Opzioni tipo registrazione

**Apertura partite**: la presenza di questo flag farà comparire il tabulatore di creazione dei partitari nella registrazione contabile che utilizzerà questa causale; l'impostazione di questo flag è quindi consigliata per tutte le registrazioni di tipo IVA e in generale per poter gestire lo scadenzario clienti/fornitori. Il flag può essere impostato anche per causali che rilevano un pagamento anticipato: in questo caso sarà aperta una partita di segno inverso da compensare successivamente con le partite che si creeranno al momento della rilevazione contabile del documento fiscale successivo.

 

**Dett. mov. in partite**: con questo flag il programma inserirà nelle **note delle partite** i testi inseriti nel campo 'Dettaglio movimento' della riga di contabilità d'origine della partita.![](/img/it-it/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates/recording-detail/image02.png)

Il flag è attivo solo quando il precedente 'Apertura partite' è stato impostato.

**Apertura per ogni riga mov.**: con questo flag il programma inserirà, una partita per ogni riga movimento, nella quale è presente un sottoconto con il flag di gestione partite aperte impostato. Il flag è attivo solo quando il precedente 'Apertura partite' è stato impostato.

Il flag si può attivare solo per causali non iva (esempio apertura conti) per ogni riga movimento fornitore o cliente apre una partita e riporta le indicazioni di pagamento che prende in anagrafica (serve nel caso in cui si apra più di una riga per un singolo cliente o fornitore).

 

**Chiusura partite**: la presenza di questo flag farà comparire il tabulatore di chiusura dei partitari nella registrazione contabile che utilizzerà questa causale. Si tratta tipicamente di tutte le registrazioni pagamento/incasso non IVA, ma può anche essere impostato in combinazione con apertura partite e compensazione partite per le causali delle note di credito e in generale per tutte le registrazioni che prevedono un'apertura partite con una contestuale compensazione di una situazione pregressa.

**Usa cambio storico**: con questo flag, disponibile solo nel caso sia stata impostata la chiusura partite, l'applicativo procederà a chiudere i partitari con il cambio storico di apertura, senza alcuna rilevazione automatica delle differenze di cambio (permettendo quindi di gestirle eventualmente in maniera manuale).

**Ragg. pag. in libro giornale**: con questo flag, disponibile solo nel caso sia stata impostata la chiusura partite, l'applicativo procederà a raggruppare in un unico movimento di contabilità tutti gli importi di chiusura partite legati ad uno stesso sottoconto (in particolare, raggrupperà i movimenti di stesso segno e stessa divisa).

**Escludi da provv. maturate**: con questo flag, disponibile solo nel caso sia stata impostata la chiusura partite, le chiusure partite effettuate con questa causale contabile non saranno ritenuti validi per il calcolo delle provvigioni maturate per agenti con calcolo di tipo 'Pagamento avvenuto'.

**Rif. doc. partita in pag.**: con questo flag, disponibile solo nel caso sia stata impostata la chiusura partite, l'applicativo procederà a gestire i codici (8) e (9) di rilevazione dei riferimenti delle chiusure partite nelle descrizioni di dettaglio dei movimenti.

**Compens. partite**: con questo flag, disponibile solo nel caso siano stati impostati entrambi i flag di apertura e chiusura partite, la procedura attiverà la possibilità di procedere ad una compensazione partite all'interno della registrazione basata su questa causale: questa combinazione di flag viene consigliata per tutte le causali collegate a documenti di tipo note di credito.

**Avviso comp.**: con questo flag si attiva, al salvataggio della registrazione contabile, un controllo che avvisa l'utente sulla presenza di partite da compensare.

**Ragg. partite**: il flag attiva la gestione dei raggruppamenti partite invece che la gestione standard ad apertura/chiusura partite, attraverso un tabulatore specifico di rilevazione nella registrazione contabile.

**Crea Gruppo**: il flag, se attivo ed in combinazione con il flag precedente, crea automaticamente un gruppo partite nei raggruppamenti partite, nel quale fa confluire le partite della registrazione (da attivarsi nelle causali delle fatture di acquisto/vendita).

**Ragg. partite – tipo pagamento**: è la tipologia di pagamento da assegnare ai movimenti dei raggruppamenti partite rilevati con questa causale.

**Progetti**: (ex Commesse): l'attivazione di questo flag farà comparire il campo *Progetto* nella testata della registrazione oltre ai campi di dettaglio el corpo della registrazione per il collegamento dei progetti (commesse) con i movimenti contabili di dettaglio.

Per ulteriori dettagli vedere **[qui/ledger-records/records/create-ledger-record/header-and-total-movements-description#campo_progetto)**

**Centri di costo**: la presenza di questo flag farà comparire il tabulatore di gestione della valorizzazione centri di costo nelle registrazioni contabili.

**Centri di profitto**: la presenza di questo flag farà comparire il tabulatore di gestione della valorizzazione centri di profitto nelle registrazioni contabili.

**Gestione macchina**: NON ATTIVATO il flag visualizzerà in contabilità, nella scheda analitica, una griglia di valorizzazione dei costi/ricavi agli automezzi aziendali.

**Cespiti**: la presenza di questo flag farà comparire il tabulatore di gestione delle schede cespiti nella registrazione contabile.

**Tipo operazione**: si tratta del tipo di operazione da proporre di default per i nuovi movimenti rilevati all'interno della scheda cespiti in contabilità.

**Aggiornamento saldi**: flag impostato di default.

**Descr. mov. in giornale e pagamenti**: con questo flag la procedura andrà a copiare la descrizione generale della registrazione in tutte le descrizioni di dettaglio dei movimenti e anche nelle note dei pagamenti.

**Provvigioni**: il flag attiva un tabulatore specifico all'interno delle registrazioni contabili per gestire i dati di calcolo delle provvigioni dal modulo amministrazione (questo modulo, recentemente introdotto, opera in alternativa rispetto alla gestione provvigioni dal modulo vendite, ma non lo sostituisce rimanendo quest'ultimo comunque attivo).

**Intrastat**: il flag attiva un tabulatore specifico all'interno delle registrazioni contabili per gestire i dati, provenienti dalla fattura d'acquisto o di vendita contabilizzata automaticamente tramite l'apposita procedura, oppure inseriti al momento dell'inserimento della scrittura contabile di prima nota, e relativi alla creazione dei modelli intrastat. I dati così gestiti saranno acquisiti nella procedura di creazione dei modelli intrastat tramite la procedura *Acquisizione delle registrazioni contabili.* Si ricorda che è presenta in alternativa la procedura di *acquisizione dalle fatture* che non interagisce con i movimenti contabili andando a leggere direttamente e soltanto i documenti di acquisto / vendita.


### Ulteriori colonne visualizzabili nella griglia delle registrazioni contabili

**Divisa**: la presenza di questo flag farà comparire il campo Divisa nella sezione del libro giornale.

**Cambio/data valuta**: la presenza di questo flag farà comparire i campi del cambio e della data valuta nella sezione del libro giornale.

**Importo valuta**: la presenza di questo flag farà comparire il campo Importo valuta nella sezione del libro giornale.

**Sottoconto di contropartita**: la presenza di questo flag farà comparire i campi dei sottoconti di contropartita nella sezione del libro giornale. La gestione dei campi di contropartita non è consigliata.

**Dettaglio del movimento**: la presenza di questo flag farà comparire il campo del Dettaglio movimento nella sezione del libro giornale: si consiglia di impostare questo flag per tutte le causali contabili, in modo da consentire sempre l'inserimento di note di dettaglio del singolo movimento contabile.

**Divisione**: la presenza di questo flag farà comparire il campo Divisione già a partite dalla sezione IVA, così come nella sezione del libro giornale. Con questa impostazione sarà possibile spezzare il caricamento dello stesso documento su più divisioni della società.

**Giorni banca**: la presenza di questo flag farà comparire il campo della data valuta banca nella sezione del libro giornale: il campo, quindi, è consigliato per tutte le causali contabili che rilevano movimenti finanziari. La gestione di questo campo può essere automatizzata sulla base dei giorni valuta (positivi/negativi) impostati nell'anagrafica banche per ogni singola causale.

**Numero progressivo**: la presenza di questo flag farà comparire il campo del Numero riga nella sezione del libro giornale: si consiglia di inserire questo flag per causali particolarmente lunghe, in modo da consentire all'utente di ordinare i record in modo fisso come nella causale (es. rilevazione paghe).

**Rif. manuale partite**: la presenza di questo flag farà comparire il campo del Rif. Manuale partita nella sezione del libro giornale. Il campo è indicato per collegare manualmente movimenti di contabilità senza passare per la gestione partite. In pratica si tratta di un campo note libero.

**Operazioni straordinarie**: la presenza di questo flag farà comparire il campo omonimo (di tipo bit ovvero un flag) al fine di evidenziare alcuni movimenti contabili (in particolare ad esempio un costo) come *straordinario* e permettere poi una facile ricerca o estrazione all'interno di una stampa degli stessi.
Questa possibilità si rivela utile a seguito delle modifiche agli schemi di bilancio introdotte con la direttiva 2013/34 (Dlgs 139/2015). Tali modifiche avevano introdotto, in sintesi, l'eliminazione dell'area "straordinaria" del Conto Economico. Ne consegue che tutti i componenti "eccezionali" non possono essere rappresentati da conti quali ad esempio le sopravvenienze attive dell'area straordinaria, ma devono essere iscritti direttamente nel conto cui si riferisce, ad esempio, la spesa (per natura).  Si presenta tuttavia la necessità di evidenziare  tali componenti di costo / ricavo per il necessario dettaglio in nota integrativa e per altre eventuali ragioni di tipo fiscali, ad esempio le riprese in diminuzione di costi nella dichiarazione dei redditi ecc...

**Tipo Operazione fiscale**: Rende visibile una combo box con la quale contrassegnare la riga di contabilita a supporto di una successiva elaborazione (esterna) della dichiarazione annuale iva, dove è richiesto di indicare se l'operazione corrisponda a:
- acquisto beni ammortizzabili
- acquisto beni strumentali non ammortizzabili
- acquisto beni / servizi destinati alla rivendita
- altri acquisti
 
**Riferimento documento**: Rende visibile, in corrispondenza delle righe del movimento contabile due campi ulteriori per annotare il riferimento alla data e numero documento (ad es. fattura sulla riga del conto di contropartita).

:::important Vedi Anche
[**VIDEO TUTORIALS SULLE CAUSALI CONTABILI**/finance/intro.md)
:::