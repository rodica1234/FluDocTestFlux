---
title: Società
sidebar_position: 3
---


:::tip[FAst Start]
La tabella è interessata dalla procedura di [**Fast Start**guide/fast-start)

Nel caso in cui si intenda configurare manualmente fare riferimento alla check list della pagina linkata
:::

---

### PREMESSA
La tabella, da considerare come fondamentale e necessaria per poter poi gestire qualsiasi altro dato, permette di codificare le aziende riferite alla base dati alla quale si è collegati.

E' possibile codificare un numero illimitato di società (aziende) che saranno sempre tutte in linea contemporaneamente all'interno dello stesso database.
Dopo l'inserimento / creazione di una nuova azienda sarà necessario gestire i diritti di visibilità per gli utenti attraverso l'applicazione ARM.

:::note Nota
Normalmente la procedura di installazione di Fluentis crea una società di default e pertanto la base dati non risulta mai del tutto vuota.
:::

Accanto al concetto di azienda (o più precisamente società, anche in senso giuridico, codificate nel database) occorre accennare subito alla **DIVISIONE**.

Per ogni società è necessario <u>**codificare almeno una divisione**</u> (ad esempio è possibile nominarla "*Sede principale*" o altri nomi simili se non emerge la specifica necessità di definire diverse divisioni avendo compreso la relativa gestione e peculiarità).

:::tip INFO
Il concetto di divisione può essere inteso come dipartimento aziendale o anche ramo d'azienda, di importanza tale, tuttavia, da determinare un ciclo attivo e passivo, inteso come produzione di documenti, ordini fatture ecc... separato.
La contabilità seppur unica a livello di azienda che redige un unico bilancio, può essere agevolmente filtrata per divisione in modo da produrre un bilancio divisionale. Anche nelle varie maschere come la ricerca dei movimenti contabili e delle partite aperte è possibile filtrare (a volte il campo di filtro è inizialmente "nascosto" all'interno di una sezione espandibile). Anche le anagrafiche degli articoli sono separate inquanto riferite a "business" diversi.
:::

---

### GESTIONE TABELLA
La maschera che si apre rappresenta la lista delle società presenti nel database.
Vengono riportati in griglia, per comodità, alcuni campi presenti nel dettaglio della società stessa, illustrato qui di seguito.

**Per creare una nuova società** (sarà poi definita l'unica o le varie divisioni relative) **premere il tasto *NUOVO***.

:::note Nota
Dopo la creazione della nuova società nella presente tabella è necessario gestirne i permessi di visibilità ai vari utenti tramite l'applicazione ARM e preliminarmente definire anche la società stessa anche su ARM (menu Società)
:::


---

### DETTAGLIO ANAGRAFICA SOCIETA'

il **codice** della Società (che deve corrispondere al codice definito nel portale Arm)

**Descrizione:** ovvero la ragione sociale ufficiale della società

**Partita IVA:** normalmente viene inserita senza il precodice nazione ad esempio IT per l’Italia)

**Codice fiscale della società:** che può corrispondere alla partita iva

**Codice Attività:** ovvero il codice Ateco dell’attività principale della società

**Nazione della società:** sulla base di questo campo Fluentis riconosce la localizzazione e le impostazioni fiscali da presentare di default nel sistema

**Divisa:** è la divisa nella quale è tenuta la contabilità ufficiale della società.

:::note Nota
La nazione e divisa della società sono già popolate inquanto richieste e impostate all’atto dell’installazione di Fluentis. Sono chiaramente dati fondamentali che implementano tutta una serie di altre impostazioni di carattere amministrativo e fiscale. La divisa, in particolare, è quella nella quale è denominata la nostra contabilità.
:::

**Lingua:** in questo campo, non obbligatorio ma molto importante, si indica la lingua ufficiale della società. È utilizzato come lingua di default da riportare nelle stampe, così come nella valorizzazione automatica delle stringhe descrittive in contabilità

**Anagrafica associata:** questo è un campo opzionale che serve per due tipi di utilizzo: il primo nel caso in cui l’azienda sia una ditta individuale, questo è il collegamento all’anagrafica che ci consente di riprendere i dati della persona fisica per le dichiarazioni fiscali
Il secondo utilizzo: nel caso di due aziende appartenenti ad un gruppo che abbiano rapporti, e quindi documenti, intercompany, serve per il passaggio di dati da una società all’altra; ad esempio per fare in modo che la fattura di vendita della prima società diventi automaticamente fattura di acquisto per la seconda società: per far questo, quindi, la seconda società deve sapere in quale anagrafica andare a cercare il fornitore per intestare il documento correttamente.
L'impostazione viene anche utilizzata per la procedura del modulo Controlling > Chiusure > Infrannuali > Consolidamento dove il sistema va a neutralizzare i costi e ricavi, crediti e debiti reciproci tra le due società facenti parte del gruppo ed aggregando invece costi e ricavi, crediti e debiti "esterni" al fine di ottenere un bilancio consolidato.

**Campi indirizzo:** ovvero l’indirizzo della sede legale

**Ufficio IVA:** in questo campo si indica la città dove si trova l’ufficio iva di riferimento della società

**Ufficio REA/Numero di iscrizione REA:** codice della provincia e numero di iscrizione al registro delle imprese (necessari per la fatturazione elettronica)

**Capitale sottoscritto/Capitale versato:** testi relativi ai valori della situazione del capitale societario (necessari per la fatturazione elettronica)

Necessario pure il campo **Soci** e lo **Stato**, se in liquidazione o meno, sempre per la fatturazione elettronica.

**Natura giuridica:** in questo campo si indica il codice che identifica il tipo di società. La tabella è fissa e predefinita

**Regime fiscale:** in questo campo si indica in che regime fiscale opera. La tabella è fissa e predefinita

:::tip GRUPPO IVA
Nella lista dei possibili regimi è stato aggiunto il codice 61 GRUPPO IVA. Selezionando questa voce (se la società che stiamo gestendo fa parte di un gruppo iva e dunque presenta il suo codice fiscale ma la partita iva della capogruppo), in fase di esportazione del file xml della fattura elettronica di vendita, sarà riportato sia la partita iva sia il codice fiscale. Infatti lo SDI controlla entrambi i campi (e non solo la partita iva) nel caso in cui la società dichiari di far parte di un gruppo iva.

Per quanto riguarda i file xml delle fatture d'acquisto in entrata, con questa impostazione viene effettuato il controllo sia sulla partita iva e poi, se all'interno del db ci sono più società con la stessa partita iva, anche del codice fiscale.
:::

**Numero decimali per i campi qtà:** che indica quanti decimali riportare nelle stampe per i campi quantità dei documenti
Il flag **Mosta simbolo valuta** con il quale si indica se visualizzare o meno il simbolo della valuta (e i campi uguali a zero) nelle maschere di visualizzazione dei movimenti contabili

Flag **Gestione controlling** che abilita le procedure "avanzate" (set completo delle funzioni) dell’ area controlling per la società che stiamo modificando

**Società Capogruppo**: campo gestito nella procedura del modulo controlling *Consolidamento master*. Questa opera uno specifico consolidamento dati sulla società capogruppo.

Inserendo la società capogruppo, viene reso visibile all’interno del piano dei conti della società selezionata anche il campo per la corrispondenza con il piano dei conti della master.
Dunque in fase di consolidamento il movimento contabile della società controllata verrà ribaltato sul conto indicato relativo alla società master.
Il dato che viene gestito in questa elaborazione, in ogni caso, è quello gestito nel modulo controlling e già elaborato dai cost driver relativi, non il dato di contabilità generale.
Solo la parte di dato di natura contabile verrà transcodificato, mentre il movimento di centro di costo (centro aziendale) sarà riportato senza modifiche ed il prerequisito per il riporto è, infatti, quello che il codice del centro aziendale sia uguale sia nella società master sia nella società controllata.


---

Nella parte bassa della finestra troviamo tre sezioni espandibili con ulteriori dati inseribili, in questo caso si tratta di dati di tipo opzionale che possono anche non essere presenti, quantomeno in fase iniziale:

All’interno della sezione **EDI** (Electronic Data Interchange) si possono indicare alcuni valori societari utilizzati in questi file telematici

Nella sezione **Spese bollo**, invece, si indica il valore delle spese bollo ed il valore che fa scattare l’obbligo della sua applicazione in fattura, il numero di autorizzazione al bollo virtuale e la provincia dell’intendenza di finanza. Ricordo che nella tabella società si inserisce il valore minimo delle operazioni esenti IVA che fanno scattare l’aggiunta del bollo in fattura, ma questa spesa bollo deve essere codificata anche nella tabella Tipi spese e deve essere inserita nell’anagrafica del cliente. Solo in questo modo, se l’importo in fattura è esente IVA, la spesa bollo verrà aggiunta.

**Expander Ri.Ba.** : trovano posto i dati identificativi della società per il sistema telematico bancario: il codice SIA (5 caratteri alfanumerici) e il codice CUC (8 caratteri) per il Sepa.

---

### Griglia delle divisioni, Banca d'appoggio di default e Logo
Nella colonna di destra della maschera abbiamo tre griglie.

Nella prima sono visibili le divisioni definite per la società. E’ bene ricordarsi sempre che per ogni società deve esistere all’interno del software almeno una divisione, anche se questa, come avviene in molti casi, corrisponde all’unica sede. Infatti viene spesso rinominata in divisione 1 o, ancora meglio, semplicemente sede. Su ogni divisione è possibile definire se il controllo di gestione avviene con cadenza settimanale o mensile.

Nella seconda possiamo indicare le 

L’ ultima parte riguarda il logo aziendale, per il quale quello di default (impostato attraverso il pulsante ***Cambia logo di default*** della ribbon bar) viene utilizzato automaticamente all’ interno dei documenti del ciclo attivo/passivo.

Occorre previamente importare una o più immagini da utilizzare come logo tramite il bottone ***Importazione immagini***.

---

### PULSANTE IMPOSTAZIONI GENERALI (PER IL LANCIO DELLA PROCEDURA DI FAST START)

questo pulsante crea, in un database appena installato, oppure in una azienda aggiunta alla base dati tutta una serie di dati di base di default; ad esempio, un piano dei conti ed impostazioni di base di registri iva, causali contabili, tipi documenti quali ordini, bolle e fatture  ecc.

Si tratta di una funzionalità molto utile in fase di definizione della strategia per l’ avvio di una nuova società e per la relativa impostazione del software, inquanto, in certi casi, potrebbe essere più conveniente, al fine di rendere il software completamente operativo in tempi contenuti, partire da una situazione di default, facendo poi delle modifiche per adattare ad esempio il piano dei conti, le causali contabili e le altre tabelle di default alla situazione concreta, piuttosto che partire da zero creando queste tabelle ed impostazioni. 

:::tip[Più Info]
per maggiori informazioni di dettaglio vedere [**qui**guide/fast-start)
:::

### DATI NECESSARI PER LA FATTURAZIONE ELETTRONICA

:::tip ATTENZIONE

Si consiglia di compilare in maniera compiuta tutti i dati gestiti dall’ anagrafica societaria, cogliamo tuttavia l’ occasione per evidenziare i campi che sono necessari per la creazione della fatturazione elettronica. 

-	Primo fra tutti la partita IVA e il codice fiscale 
-	Il codice destinatario e la PEC invece sono campi non obbligatori utili unicamente per memorizzare i propri dati
-	Per quanto riguarda il telefono e fax, se si desidera compilarli, si consiglia di non usare la barra per separare il prefisso per evitare possibili problemi nei controlli formali del sistema di interscambio, a fronte di caratteri non riconosciuti.
-	I campi relativi all’ ufficio REA, il primo accoglie la sigla della provincia ed il secondo il numero
-	Necessario pure il campo Soci e lo Stato, se in liquidazione o meno
-	Si dovrà anche, a tale scopo, completare con il capitale sottoscritto e versato, avendo cura di non mettere il puntino delle migliaia e di separare i due decimali con il punto anziché la virgola, sempre per via dei controlli formali dello SdI, 
-	la natura giuridica ed il regime fiscale.
:::


### IMPOSTAZIONE PER SOCIETA' APPARTENENTI AD UN GRUPPO IVA

:::tip Info: il gruppo iva
Con l’introduzione di tale norma, è stata prevista la possibilità, per le imprese collegate da interessi finanziari, economici ed organizzativi, di creare un gruppo unico, considerato come un solo contribuente (ai soli fini Iva) nei confronti del fisco. Esso sarà, pertanto, dotato di un unico numero di Partita Iva. Le imprese che fanno parte del gruppo fattureranno le operazioni verso terzi con una partita Iva comune, la partita Iva di gruppo. Invece le cessioni di beni e le prestazioni di servizi scambiati tra le aziende interne al gruppo non rileveranno ai fini dell’imponibile Iva. In conseguenza di ciò, tutte le operazioni effettuate da uno dei soggetti del gruppo sono considerate come effettuate dall’intero gruppo. La fattura e gli altri documenti sono emessi dal rappresentante del Gruppo o dai partecipanti indicando sugli stessi oltre al numero di partita Iva del Gruppo anche il codice fiscale del soggetto partecipante che ha realizzato l’operazione.
:::

Nel caso in cui una o più società esistenti nella base dati siano parte di un gruppo IVA all’interno della presente tabella è necessario  valorizzare i campi **PARTITA IVA** (con la PI del gruppo) e il **CODICE FISCALE** (specifico per la società facente parte del gruppo)
È importante andare ad impostare anche la **NATURA GIURIDICA** che dovrà essere ’61- Gruppo iva’ 


### **NUOVO TAB IVA DI GRUPPO**

In questo tab vengono inserite le configurazioni del gruppo iva costituito da una o più delle società presenti nel db.

Periodo / Anno inizio e Periodo / Anno Fine: per definire la validità dell'impostazione e sussistenza dello stato di gruppo iva

E' società capogruppo: da attivare se la società in uso è la capogruppo ovvero quella che impone la sua partita iva alle altre.

Combo box soc. Capogruppo: serve per agganciare la società in uso alla società capogruppo già presente all'interno dello stesso db.

Anagrafica Capogruppo: serve per selezionare una capogruppo esterna, dunque non presente all'interno dello stesso db come società (ad esempio perchè gestita con altro software e pertanto occorre inserirla come semplice anagrafica di contatto dalla quale leggere i dati quali la partita iva ecc.).


**NOTA: All'interno dell'elaborazione della LiPe (comunicazione trimestrale liquidazioni iva) è prese te un flag per abilitare la modalità gruppo iva per il dichiarativo stesso.**

---

### VIDEO TUTORIALS

:::important Vedi Anche
[**VIDEO TUTORIALS SULLE TABELLE GENERALI**/finance/intro.md)
:::