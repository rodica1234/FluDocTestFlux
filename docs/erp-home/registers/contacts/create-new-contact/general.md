---
title: Generale
sidebar_position: 2
---

## Generale

In questo tab verranno inserite tutte le informazioni generali legate all'anagrafica che si vuole inserire.

La finestra si compone di una prima sezione in cui verranno inserite le informazioni relative ai **Dati** puramente anagrafici della società e di una seconda sezione che si compone di due tab **Rifermenti** e **Indirizzi alternativi** in cui si andranno ad inserire le persone di riferimento ed eventuali indirizzi alternativi nel caso di una società con sedi diverse.

### Dati anagrafica

**Ragione sociale**: è il campo all'interno del quale si va a definire il nome del soggetto: sarà assegnato a tutti i sottoconti contabili definiti per l'anagrafica in uso e sarà riportato tramite questo in ogni stampa contabile/documentale.

Sulla base del testo qui inserito, uscendo dal campo, il gestionale andrà a generare automaticamente un ‘Nomignolo', cioè un codice univoco breve identificativo dell'anagrafica stessa: questo è modificabile da parte dell'utente, ma deve essere unico nella lista di tutte le anagrafiche. Dato che la ricerca del soggetto (se contabile) sarà effettuata tipicamente sulla base della ragione sociale, questo campo non è particolarmente rilevante.

**Partita IVA**: campo composto dal codice ISO internazionale della nazione (definito nella tabella Nazioni stessa) e dalla relativa partita iva. Il campo è soggetto a test di correttezza del carattere di controllo per le partite iva italiane (test eseguito all'uscita del campo). Una volta impostata la partita iva, nel caso di soggetto Europeo, tramite il pulsante 'Proponi dati' è possibile andare a richiedere al database comunitario del Vies la verifica e il recepimento dei dati disponibili: per alcune nazioni, infatti, vengono restituiti anche i dati dell'indirizzo corrispondente alla partita iva richiesta, che andranno a valorizzare i campi in ***Fluentis***

**Codice fiscale**: campo per l'inserimento del codice fiscale del soggetto;

**Persona fisica/giuridica**: indica se il soggetto è un privato o meno;

**Contabile**: flag presente di default nei nuovi inserimenti, consentirà di definire i dettagli di gestione amministrativa/commerciale per i sottoconti associati all'anagrafica in uso.

**Indirizzo**: è l'indirizzo della sede legale;

**Numero civico**: il numero civico dell'indirizzo;

**Edificio**: l'eventuale edificio dell'indirizzo;

**CAP**: è il codice di avviamento posta; può essere scritto manualmente oppure derivare dalla selezione del comune (campo successivo) attraverso l'help comuni;

**Comune**: campo editabile all'interno del quale inserire il comune della sede legale. È presente un help Comuni per ricercare nella lista dei comuni così come definiti in tabella (Home>Tabelle>Impostazioni generali);

**Natura giuridica**: natura giuridica, la lista è legata alla nazione del contatto;

**Provincia**: campo editabile all'interno del quale inserire il codice della provincia. È presente un help Province per ricercare nella lista delle province così come definite in tabella (Home>Tabelle>Impostazioni generali);

**Note**: campo libero all'interno del quale è possibile definire, ad esempio, il testo completo dell'indirizzo da riportare in stampa dei documenti, senza dover combinare indirizzo+cap+comune+provincia;

**Nazione**: codice della nazione per l'anagrafica in uso, così come definito in tabella (Home>Tabelle>Impostazioni generali). Da ricordare che questo campo è la base per l'individuazione dei soggetti presenti in Nazioni a fiscalità privilegiata (Home>Tabelle>Impostazioni generali>Nazioni black list), per la relativa dichiarazione fiscale dell'area amministrativa;

**Regione**: codice della regione di appartenenza (Home>Tabelle>Impostazioni generali);

**Lingua**: codice della lingua (Home>Tabelle>Impostazioni generali) di riferimento per le comunicazioni indirizzate all'anagrafica in uso. È possibile generare una reportistica automaticamente in lingua sulla base del dizionario definito in ARM (Application Resource Manager);

**Nome** e **Cognome**: per persone fisiche;

**Città nascita**, **Codice provincia nascita**, **Data nascita**, **Sesso**: per persone fisiche;

**Telefono/Telefono cellulare**: campo per l'inserimento del telefono principale o del cellulare del contatto;

**Fax**: campo per l'inserimento del fax principale del contatto;

**Sito web**: campo per l'inserimento del sito web del contatto;

**e.mail**: campo per l'inserimento dell'indirizzo email di default del contatto;

**Data/Utente ult. variazione**: campo che visualizza l'utente e la data dell'ultimo salvataggio effettuato per l'anagrafica in uso;

**Data fine validità**: campo per bloccare l'utilizzo dell'anagrafica in uso. Una volta impostata questa data, il sistema chiederà se attribuire questa fine validità su tutti i sottoconti contabili associati all'anagrafica stessa: su nessuno, sulla sola società in uso, su tutte le società o se annullare la modifica;

**Note**: campo in cui si possono inserire eventuali note relative al soggetto;

### Pulsanti specifici - Inserimento automatico dati anagrafici
:::tip
[**Proponi dati**-intro#v): inserendo la **Partita Iva** nel relativo campo dell'anagrafica, e cliccando su **Proponi Dati**, il sistema tramite web-service andrà ad interrogare il sistema informatico del V.I.E.S. che andrà a verificare la validità e correttezza della P.Iva del soggetto. Nel caso il dato sia corretto, il sistema andrà a proporre in automatico il resto dei dati anagrafici di base del soggetto, senza doverli inserire manualmente. Per maggiori informazioni relative al sistema V.I.E.S. cliccare sul link.
:::



### Riferimenti

Nella sezione **Accesso Web** è possibile abilitare l'accesso via Internet Explorer all'applicativo, abilitando l'anagrafica e assegnando il nome utente e la password di accesso;

Nella sezione **Codice EDI** è possibile inserire il codice per il trasferimento di file tramite il processo EDI con il relativo numero interno assegnato al soggetto e la possibilità di dire il codice fa riferimento a un venditore.

Nella sezione **Altri dati** invece è possibile inserire il numero cliente, il n. reg. autotrasp. ovvero per anagrafiche relative a trasportatori, è il codice del soggetto nel registro degli autotrasportatori; e la data di nascita nel caso di persona fisica.

Nella griglia **Persone di Riferimento** si potranno specificare, per il contatto in uso, la lista delle persone di riferimento presenti al suo interno con la descrizione del ruolo occupato, e i relativi contatti telefonici e/o indirizzi email.

:::tip[]
Nella griglia **Sottoconti in tutte le società** si potrà vedere se per l'anagrafica in uso è stata definito l'uso contabile in un'altra società; nella griglia si troverà quindi la lista dei vari sottoconti assegnati con la relativa società di riferimento.
:::



### Indirizzi Alternativi

Qui è possibile inserire alcuni indirizzi alternativi che dipendono dal [**Tipo indirizzo associato**configurations/tables/general-settings/address-types.md) 

**Attenzione:** non si tratta degli indirizzi di consegna della merce per i quali è stata sviluppata la tab [Consegnaerp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/delivery) nella sezione *Dati contabili* dove inserire i *Destinatari/Destinazioni* della merce per permettere la gestione completa nei documenti).

**La funzione più frequente di questa sezione è soprattutto la gestione egli indirizzi mail per automatizzare l'invio di documenti, solitamente report di stampa, tramite workflow (flussi operativi con passaggi di stato da gestire all'interno elle maschere) principalmente tramite invio massivo di mail.**

*Esempio*: se selezioniamo nella griglia il tipo indirizzo 'Sede Commerciale' si andrà ad inserire un referente o più per l'ufficio commerciale a cui inviare ad esempio le conferme d'ordine via mail. La mail va indicata nella sezione accanto alla griglia in cui si possono inserire anche il riferimento telefonico del contatto e altri dati di tipo anagrafico. In questo caso, quando si inserirà l'ordine, nel tab *Riepiloghi* quando si andrà a scegliere di inviare la conferma d'ordine al cliente si aprirà una schermata con l'anteprima della mail con l'indirizzo del destinatario già popolato con le informazioni che sono state inserite in questa sezione, e non servirà andare ad aggiungerlo a mano ogni volta. In base al tipo di indirizzo, si potrà scegliere a chi inviare le fatture, degli ordini fornitori ecc.

Pertanto la form **Indirizzi alternativi** non consente una gestione dei dati nei successivi documenti del ciclo attivo/passivo.

La sua funzione, oltre ad un eventuale inserimento semplice di indirizzi (soprattutto e-mail) alternativi, è limitata a due **possibili automazioni** molto utili:

- **La gestione degli indirizzi e-mail nell'invio massivo di documenti** (Fatture di vendita, ma anche altre tipologie previa configurazione) tramite coda di spedizione gestita dal componente Bizlink.

- Gestione dei [Cointestatarierp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/fiscal-information) della fattura di vendita.


### Procedura di inserimento indirizzi

Prima di inserire le informazioni di dettaglio nella parte destra della form (all'interno dei vari campi specifici), è necessario inserire almeno una riga nella griglia a sinistra corrispondente ad una tipologia di indirizzo.

**Tipo Indirizzo**: codice del tipo indirizzo. La combo box è collegata alla tabella [Tipi indirizziconfigurations/tables/general-settings/address-types) (che si trova su Home > Tabelle  > Impostazioni generali).

**Indirizzo**: descrizione corrispondente al codice contenuto nel campo precedente.

**Descrizione**: campo obbligatorio per il salvataggio, si tratta semplicemente di una ulteriore descrizione per la riga che si sta inserendo.



Una volta inserita la riga con la tipologia di indirizzo prescelto, è possibile compilare i dati di dettaglio corrispondenti.

![](/img/it-it/erp-home/registers/contacts/create-new-contact/general/image02.png)

E' possibile inserire e gestire anche più di un indirizzo mail contemporaneamente (per l'invio ad esempio a più destinatari) inserendo gli indirizzi stessi di seguito nel medesimo campo e separandoli da un punto e virgola ( ; ).


### Invio massivo documenti via mail

Per la gestione automatica dell'indirizzo e-mail nell'invio massivo delle fatture di vendita (vedi anche l'allegato all'inizio di questo articolo) è necessario utilizzare un particolare tipo indirizzo (che può essere codificato a piacere, purché abbia, nella tabella [Tipi indirizziconfigurations/tables/general-settings/address-types) attivato il flag **Email Fatt. C. = email fattura cliente**).

Sarà inoltre possibile, previa *configurazione* gestire l'invio massivo anche su altri tipi di documento (esempio il sollecito di pagamento ecc.) agganciando magari l'indirizzo e-mail inserito ad un apposito tipo indirizzo da configurare sfruttando uno degli altri flag disponibili nella tabella Tipi indirizzi. In questo caso sarà necessario definire sia la Trasformation del documento specifico sia un Workflow (cambio stato) dedicato.

La gestione dell'indirizzo e-mail inserito e codificato associandolo al flag *Email Fatt. C.* è collegata anche alla composizione automatica della e-mail accompagnatoria (necessaria l'installazione di Outlook sul proprio PC) che si può eseguire, una volta entrati all'interno della Fattura di vendita ed eseguita l'anteprima di stampa, con il comando **Send** (Pdf, Word, ecc.) 


### Gestione cointestatari

In questo caso il dato rilevante è il nome dei cointestatari. Sarà dunque necessario inserire una riga per ognuno dei contestatari al fine di inserire il dato anagrafico di ognuno. Il tipo di indirizzo corretto da associare nella tabella [Tipi indirizzi configurations/tables/general-settings/address-types) e [Cointestatariconfigurations/tables/general-settings/address-types).

Per la gestione in fattura vedere [quierp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/fiscal-information).

Una volta inserite le informazioni **Generali**, si procederà all'inserimento delle informazioni specifiche all'interno del successivo tab **Dati Contabili**.


### Tab Dati Storici
Questa sezione serve per gestire la possibilità di storicizzare, ovvero memorizzare dei cambiamenti, nei dati generali, quali ad esempio un cambio della ragione sociale o dell'indirizzo ecc. del soggetto in questione, ad esempio un cliente o un fornitore.

:::note
In particolare un cambio di ragione sociale modificherà in automatico (a fronte comunque di messaggio di conferma che occorre accettare) la descrizione dei sottoconti contabili del piano dei conti assegnati all'anagrafica i contatto.

Pertanto l'esigenza di memorizzare il dato precedente è particolarmente sentita al fine di tracciare i documenti e gli altri dati inseriti anche tramite il riferimento precedente.
:::

Nella form è presente una griglia di **Sinistra** che accoglierà la data della variazione e servirà da riferimento per mostrare il vecchio o il nuovo dato

Sulla parte **Destra** sono riproposti i campi relativi ai dati del contatto, che saranno però compilati in automatico dalla procedura di storicizzazione. In seguito si potrà modificare la parte *Generale* con il dato attuale aggiornato.

**Pulsante Storicizza dati anagrafici**: posto nella ribbon bar è il pulsante principale per la procedura di storicizzazione (memorizzazione) del dato. Premendolo appare un popup che chiede la data di variazione (*Data fine validità*) la quale sarà riportata nella griglia di Sinistra, mentre nella parte Destra sarnno cpiati i dati attuali per poi procedere alla modifica.

**Pulsante Cancella storico**: Rimuove la data fine validità ed i dati inseriti nella parte Destra 

:::tip[Procedura]
1. Premere il bottone *Storicizza dati anagrafici*
2. Nel popup che compare indicare la data della variazione, ovvero la data a partire dalla quale il dato (es. la ragione sociale è cambiata). Confermando il dato "vecchio", attualmente ancora presente, viene salvato
3. Modificare il dato nel tab ***Dati anagrafici*** e premere **Salva**
:::

Da questo momento, il dato "vecchio" (storico) è disponibile in diversi report di stampa standard quali ad esempio i registri iva, le fatture di vendita ecc. (oltre a poter essere inserito a piacimento in eventuali report personalizzati o creati ex novo) ed in automatico sarà mostrato il vecchio dato se il documento si riferisce ad una data antecedente alla data di fine validità

:::danger[Attenzione]
Il dato che viene visualizzato nelle maschere a video ell'ERP è sempre quello attuale aggiornato, non è possibile avere una visualizzazione del dato storico.

La presente sezione permette di gestire il dato storico unicamente per i report di stampa.

Si consiglia di copiare il campo e le relative eventuali formule  per la gestione della visibilità in base alla data di riferimento dal un report standard (o almeno prenderne visione) nel caso di utilizzo in un report di stampa personalizzato 
:::