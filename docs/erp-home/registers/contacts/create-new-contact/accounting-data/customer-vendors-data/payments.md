---
title: Pagamenti
sidebar_position: 3
---

In questa form si possono specificare le condizioni commerciali di default in merito ai pagamenti/incassi.  

*Pulsanti specifici*:
> Cancella banche: per cancellare la banca d'appoggio selezionata.  
> Cancella tipo pagamento: per cancellare dalla griglia delle tipologie di pagamento.  

Per tutto quanto non dettagliato in questo documento sul funzionamento comune delle form fare riferimento al seguente link [Funzionalità, pulsanti e campi comuniguide/common).

### Tipi pagamento
:::tip[ ]
La sezione fondamentale del tab **Pagamenti** e serve per impostare la logica di calcolo delle scadenze. Si selezionano il **Tipo di pagamento** e la **Soluzione di pagamento** (entrambe si trovano in *Configurazione > Tabelle > Impostazioni generali*).
:::


**Importo**: consente di calcolare una scadenza imponendo l'importo indicato, il residuo dovrà essere gestito con righe con il campo Percentuale compilato. Nel caso in cui il totale del documento sia inferiore rispetto al valore del campo Importo (anche in presenza di righe con il campo Percentuale compilato) verrà inviato un messaggio di errore in fase di creazione delle scadenze nel documento che chiede la rettifica del settaggio in quanto non coerente.

<u>Attenzione</u>: questo campo risulta di rara applicazione nella pratica, inoltre all'interno dei documenti, nel calcolo delle scadenze, viene utilizzato e compilato dalle procedure automatiche nel seguente modo: quando si valorizzano, ad esempio, più DDT in una fattura si verifica la situazione per cui potrebbero esserci condizioni di pagamento diverse nelle bolle. Allora nella fattura vengono create tante righe di pagamento quanti sono i tipi di condizione raggruppando gli importi (somma dei  DDT con quella condizione) e inserendo tale valore nel campo *Importo*, viene creata una ulteriore riga, “residuale” dove, sfruttando il campo *Percentuale*,  viene gestito il 100% del valore “residuo” (eventuale) con condizione di pagamento determinata dall'anagrafica. Questo valore “residuo” accoglie tipicamente eventuali ulteriori somme imputate direttamente in fattura (e quindi non presenti nelle bolle) quali *spese di incasso, spese di trasporto, spese bollo* ecc…Questa compilazione di più righe (almeno due, una per la scadenza del DDT e una "residuale") ci sarà anche se viene valorizzata un'unica DDT. Questa gestione è imposta dal parametro di valorizzazione DDT, nella sezione *Trattamento pagamenti in fattura* con l'opzione *Mantieni quelli delle bolle*. Scegliendo invece *Ripristina quelli di anagrafica* le scadenze saranno accorpate tutte con l'unica condizione presente in anagrafica. Si segnala che in stampa fattura saranno riportate tutte le scadenze calcolate così come presenti a video. Volendo è possibile intervenire personalizzando la stampa in modo che riporti solo la riga effettivamente utilizzata (cioè non riporti la riga “extra” se non aggancia alcuna scadenza).

**Percentuale**: consente di definire la quota parte (in percentuale) del valore totale del pagamento (o incasso) da gestire con la condizione di pagamento (come combinazione di tipo pagamento e soluzione di pagamento) impostata nella riga.

In caso di percentuale inferiore a 100 vanno, pertanto, create tante righe con percentuali che sommano 100.

*Esempio*:<br />
- 50% Contanti a vista fattura e 50% Bonifico bancario a 30 gg.<br />
- 50% Contanti a vista fattura; 25% Bonifico bancario a 30 gg; 25% bonifico bancario a 60 gg.<br />
![](/img/it-it/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/payments/image03.png)  ![](/img/it-it/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/payments/image04.png)

<u>Attenzione</u>: se la soluzione di pagamento prevede più di una scadenza si compilerà in questo modo: esempio 50% contanti a vista e 50% bonifico bancario a 30 - 60 gg

**![](/img/it-it/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/payments/image05.png)**

**Banca (d'appoggio)**: rappresenta la banca di riferimento per le partite.  
- Per l' anagrafica cliente:
> - se tipo pagamento è ricevuta bancaria,  va indicata la banca del cliente;
> - se tipo pagamento è bonifico bancario va indicata la banca della società in uso  (in modo da avere in stampa dei documenti i riferimenti di pagamento per il cliente); 

- Per l'anagrafica fornitori:
> - se tipo pagamento è bonifico bancario sarà indicata la banca del fornitore;
> - se tipo pagamento è ricevuta bancaria sarà indicata la banca della società.

Il campo si compila tramite una combo box (**Banca**) collegata alla tabella [*Banca d'appoggio*configurations/tables/general-settings/reference-bank.md). All'interno di questa tabella è possibile inserire sia la banche della società, sia le banche della controparte (cliente o fornitore). Inoltre è possibile inserire sia righe complete di codice IBAN e/o SWIFT (consigliato per le banche della società) sia righe complete di soli codice ABI e CAB (consigliato per le banche di controparte per le quali IBAN e SWIFT possono essere indicati nei campi della griglia presente in anagrafica).

Se la riga presente nella tabella Banca d'appoggio è completa di IBAN e/o SWIFT, oltre che di ABI e CAB, richiamando tale riga tramite la combobox i dati saranno riportati nella griglia in anagrafica, diversamente, saranno riportati solo ABI e CAB, ma sarà sempre possibile aggiungere i dati mancanti direttamente nella griglia. Ciò è consigliabile per le banche di controparte al fine di evitare di codificare nella tabella Banca d'appoggio troppe righe utilizzate solo per un unico cliente o fornitore. E' preferibile indicare solo i dati dello sportello bancario (ABI e CAB) presso il quale potrebbero avere il conto corrente diversi clienti o fornitori.

L'inserimento di una banca può essere eseguita anche attraverso un doppio click nei campi abi/cab per aprire l'help di ricerca tra le agenzie bancarie nazionali, dalle quali selezionare quella del caso e creare il codice nell'anagrafica da completare con i dati di conto corrente, cin, iban, swift. Al salvataggio di un Iban, **Fluentis** eseguirà i controlli sintattici sulla sua struttura, indicando eventuali errori sul numero di caratteri o sul carattere di controllo.

**Descrizione Banca**: campo collegato al precedente campo.

**Codice Banca**: campo NON utilizzato in Italia. Per localizzazioni estere può accogliere un codice bancario alternativo rispetto al sistema ABI CAB.

**Configurazione ricerche**: con questo campo è possibile legare la riga ad una logica di attribuzione a livello di Ordine cliente, tramite un extra-data legato al tipo Ordine.

:::tip nota
Con questa impostazione, in sostanza, possiamo impostare che per gli ordini di tipo X il cliente ci pagherà con Riba a 60GG, mentre per gli ordini di tipo Y ci pagherà con Bonifico a 30GG
:::

### Banca d'appoggio

Nella griglia si possono inserire le banche d'appoggio della controparte.

Tra queste, quella impostata come **Default** (con il flag omonimo) può essere utilizzata come banca beneficiaria dei bonifici fornitori del modulo *Pagamenti fornitori*.

In questo caso la banca inserita in questa griglia verrà imposta nella distinta di bonifico, sostituendo quella presente nella registrazione contabile  (quest'ultima definita, nella registrazione contabile, manualmente o tramite il dato inserito in anagrafica nella griglia superiore Tipi Pagamento) e collegata alla partita aperta.

*Attenzione*: per attivare la sostituzione della banca d'appoggio di cui sopra è necessario attivare il flag *Imponi la banca d'appoggio* presente in *Anagrafica fornitore > [Parametri Pagamenti Fornitoreconfigurations/parameters/treasury/vendor-payments-parameters)*.

Se il flag è attivo nella form *Parametri Pagamenti Fornitore* ma non sono inserite banche con flag default attivo nella griglia, sarà mantenuta la banca indicata nella registrazione contabile tramite il dato inserito in anagrafica nella griglia superiore *Tipi Pagamento* (o modificata manualmente nella registrazione).

In questo modo è possibile inserire delle banche d'appoggio alternative (sempre di controparte).  Un altro esempio può essere quello di un cliente che paga con bonifico (e quindi nella griglia Tipo Pagamento si inserisce la banca della nostra società) ma del quale si vuole inserire la sua banca d'appoggio in caso di pagamento di note di accredito.

L'inserimento di una banca può essere eseguita attraverso un doppio click nei campi abi/cab per aprire l'help di ricerca tra le agenzie bancarie nazionali, dalle quali selezionare quella del caso e creare il codice nell'anagrafica da completare con i dati di conto corrente, cin, iban, swift.

**Beneficiario**: il flag attiva la lettura del campo Ragione sociale beneficiario

**Ragione sociale beneficiario**: inserire il dato anagrafico nel caso in cui i pagamenti vadano intestati ad una terza parte (ad esempio una società finanziaria di gruppo).

### Mese esclusione scadenze

![](/img/it-it/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/payments/image07.png)

In questa griglia è possibile impostare un automatismo che rinvia tutte le scadenze riferite ad uno o più mesi (inserendo più righe) e le posticipa ad un giorno prestabilito.

**Mese escluso**: Mese per il quale si vogliono posticipare le scadenze

**Giorno**: Giorno al quale si vogliono portare le scadenze posticipate

**Mese**: Mese al quale si vogliono portare le scadenze posticipate

*Esempio*: compilando come nell'immagine tutte le scadenze del mese di agosto saranno posticipate al 5 settembre.

Inserendo anche una riga Dicembre - 7 - Gennaio, le scadenze del mese di dicebre sarebbero posticipate al giorno 7 di gennaio.

### Sezione inferiore

La tipologia di calcolo della partita consente di definire se la base di calcolo delle partite è il solo imponibile del documento (ad esempio per i fornitori intracomunitari o gestiti contabilmente in regime di reverse charge, dove quindi l'IVA che si integra nel documento non va gestita a livello di scadenziario) oppure imponibile+IVA (che è la logica di default anche se in questo campo non è indicato nulla).

**Utilizzo a partite aperte**: il flag è proposto di default ed è obbligatorio per poter gestire automaticamente le partite aperte.

Nei parametri di configurazione delle causali contabili è possibile definire un controllo per garantire che ci sia corrispondenza tra saldo contabile e saldo partitario;

**Tipo calcolo**: combo box che permette di scegliere tra i due metodi alternativi: imponibile + iva o solo imponibile. La modalità solo imponibile è raccomandata, ad esempio, per i fornitori intracomunitari ed in regime di "reverse charge" oppure per i clienti soggetti alla casistica iva dello "split payment".

**Raggruppa partite**: attualmente non gestito; consente di raggruppare le partite che nella stessa registrazione abbiano la stessa data scadenza (ad esempio per casi di mesi di esclusione);

**Raggr. scadenze in effetti**: permette di raggruppare più partite/scadenze in un unico effetto del modulo portafoglio effetti (saranno raggruppate in caso di uguale data scadenza e stesso appoggio bancario);

**Raggr. note cred. in effetti**: consente di stornare, nella creazione effetti, anche le note di credito che hanno il tipo pagamento da gestire negli effetti. Se il flag non è attivo le partite aperte relative alle note di accredito non saranno visualizzate nella form di ricerca partite per la procedura [creazione effetti dalle partitetreasury/bills-holding/procedures/bills-acquisition-from-maturity-values/bills-acquisition-from-maturity-values-intro).

Il parametro di cui sopra deve essere abbinato con il flag **Raggruppa note credito per data scadenza** presente nei  [Parametri portafoglio effetticonfigurations/parameters/treasury/bills-portfolio-parameters) 

Se si attiva il flag per il raggruppamento per data scadenza la partita (o partite) relativa alla nota di accredito con tipo pagamento coerente con l'emissione effetti sarà raggruppata (stornando le partite attive) soltanto se ha scadenza uguale rispetto alle partite selezionate per l'emissione dell' effetto. Diversamente, se il flag è disattivato la nota di accredito sarà raggruppata andando a stornare la partita scadente alla prima data utile (a patto ovviamente che il flag *Raggr. note cred. in effetti* nell'anagrafica sia attivo).

**Controllo esposizione**: con questo flag si renderà visibile questo soggetto nelle maschere riepilogative dell'[esposizione clientitreasury/customer-risk/procedures/customer-statement).

**Giorni ritardo** è un dato statistico calcolato nel modulo **rischio cliente** (procedura  [**controllo rimesse**treasury/customer-risk/procedures/remittances-management) ) e utilizzato nelle proiezioni di cash flow; rappresenta una **media dei giorni di ritardo nei pagamenti da parte dei clienti** non solo sulle partite scadute attuali, ma anche sullo storico. Il calcolo prevede una media pesata sull'importo della partita. Infatti il calcolo si basa sull'elaborazione dei "numeri creditori" (come in un estratto conto scalare bancario). All'interno della form **controllo rimesse**(nella ribbon bar in alto) è presente il comando **Aggiorna gg ritardo** che inserisce il risultato sdel calcolo nel campo Giorni ritardo in anagrafica cliente.

**Imp. fido concesso**: è l'importo del fido che è concesso al cliente. Per la corretta gestione di questa funzionalità si deve gestire anche il flag **Fido** presente nelle tabelle relativi ai dipi documento del ciclo vendite (Tipo fatture; Tipi Bolla; Tipi Ordine cliente) il quale include o meno il tipo di documento in questione nel controllo dello sconfinamento rispetto al fido.

**Tipo contr. fido**: si può definire se il cliente è soggetto ad un solo ‘**monitor fido**' (cioè sarà restituito un solo messaggio di segnalazione dello sforamento del fido) oppure un **blocco doc. e monitor fido** con il quale il documento che va a sforare il fido sarà bloccato e dovrà essere autorizzato all'interno del modulo Rischio cliente (procedura [Lock managertreasury/customer-risk/procedures/lock-manager/documents-authorization), oppure in un database multi societario la possibilità di impostare un **monitor di gruppo** o **blocco di gruppo** andando quindi a valutare la situazione complessiva del soggetto nei confronti di tutte le società gestite nella base dati e quindi sommando il monte documenti (si raccomanda di impostare l'importo fido uguale e attivo su tutte le società).**Blocco /monitor gruppo cliente** verifica per gruppo aziendale e quindi verificando il campo sottoconto capogruppo (legge il fido del capogruppo). Totalizza sempre i valori di tutte le aziende del gruppo sul fido della capogruppo. Ignora il valore del fido scritto sulle anagrafiche delle filiali.

Nel modulo Rischio cliente c'è una procedura di [gestione fiditreasury/customer-risk/credit-management) che consente di visualizzare l'elenco delle impostazioni di fido impostate su tutti i codici cliente, senza dover entrare nella singola anagrafica;

**Fido assicurato**: è un semplice campo indicativo dell'importo coperto da assicurazione, non influente sui calcoli del rischio;

**Note fido**: annotazioni commerciali sul fido concesso

**Data revisione Credito:** campo indicativo della data di revisione dell'accordo commerciale con il cliente in merito al fido concesso.

**Tipo sollecito**: tipo di sollecito di pagamento nei confronti del cliente da generare nella procedura di creazione automatica solleciti

La combo box è collegata alla tabella Tipi solleciti (Home>Tabelle>Amministrativa); l'anagrafica del cliente in uso sarà associata ad uno dei possibili tipi di sollecito.

*Esempio*: si possono creare un tipo sollecito standard ed un tipo di sollecito particolare, esempio per clienti storici o particolarmente importanti, con un testo differente (magari più "morbido").

**Data accordo**: è la data dell'accordo sul calcolo degli interessi di mora per i ritardi di pagamento;

**Tipo tasso di interesse**: è il tipo di tasso moratorio da applicare al soggetto sulla base dell'accordo concordato;

La combo box è collegata alla tabella [Tipi Tassoconfigurations/tables/finance/rate-types) in Configurazione > Tabelle >Amministrativa).

**Spread**: maggiorazione di tasso rispetto allo standard della sua tipologia.

**Livello autorizzativo:** si rinvia all [**tabella collegata**configurations/tables/finance/authorization-levels/) alla combo box.


