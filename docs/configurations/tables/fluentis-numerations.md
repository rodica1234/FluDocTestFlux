---
title: Numerazioni Fluentis
sidebar_position: 13
last_update:
  date: 03/30/2023
---

In fase di inserimento di un nuovo documento, uno dei primi dati richiesti è quello del numero del documento in oggetto. Tale dato viene proposto automaticamente grazie alle tabelle dei numeratori.

In Fluentis la gestione dei numeratori è suddivisa per tipologia di documento, come possiamo vedere dalle voci di menu presenti tra le tabelle di ogni modulo.

La logica che sta alla base di tutti questi numeratori è la medesima, andremo quindi a visionarne una, in particolare la Numerazione compensazioni, dalla quale sarà possibile partire come base teorica per la definizione dei numeratori delle altre tipologie di documenti.

Nella form **Numerazione compensazioni** è presente una griglia che mostra l'elenco dei numeratori presenti per le compensazioni. Ciò sta a significare che è possibile gestire più numeratori per la stessa tipologia di documento. Premendo sul pulsante **Nuovo** accediamo alla form **Numerazione**.


![](/img/it-it/configurations/tables/fluentis-numerations/image01.png)

### Sezione superiore

**Codice**: è il codice del numeratore;

**Descrizione**: la descrizione del numeratore;

**Formula numero**: in questo campo si può impostare una valorizzazione di una stringa alfanumerica, che sarà memorizzata nella proprietà alfanumerica predefinita ‘FormattedNumber' dell'oggetto (mentre il campo numerico viene memorizzato nella proprietà ‘Number'). La definizione della *Formula* per la formattazione del numero del documento può essere definita a livello di tipo numerazione, al livello di periodo di validità del tipo numerazione oppure a livello definizione dei range di validità. La priorità di applicazione è bottom-up, si verifica se è definita nei range di validità, se null si verifica se è definita nei periodi di validità se nulla si verifica se è definita nel tipo numerazione.

Nell'immagine qui sopra (preso dai numeratori delle compensazioni) è stato inserito “Year.ToString() + "-" + Number.ToString("D5") + "-" + SalesInvoiceType.Code”, che creerà una stringa del tipo “2015-00001-TestCode”.

Altro esempio, inserire nel numero un valore preso dall'utente di inserimento: “Number.ToString("D5") + "-" + "-" + (CreationUser != null ? CreationUser.Description.Substring(0,3) : "")”

In questo caso è anche necessario intervenire a livello di Arm per abilitare, nel setter del numero formattato, che questo vede la proprietà utente: dentro Patterns, si edita questo setter

![](/img/it-it/configurations/tables/fluentis-numerations/image02.png)

E si mette il flag su **Used**:

![](/img/it-it/configurations/tables/fluentis-numerations/image03.png)

Si salva, in IIS si riavvia il pool di Fluentis e si ha il dato operativo.

*Ulteriore esempio*: impostare il numero fattura (o DDT) con il barrato (esempio 1/A, 2/A.... 1/B, 2/B):

number.ToString()+"/B"

da mettere nel numeratore (in testata)

Poi nel report si deve sostituire il campo standard (es. Number) con un campo calcolato (es. CalcNumber) dove all'interno ci sia questa expression:

Iif(IsNullOrEmpty([FormattedNumber]),  [Number], [FormattedNumber])

*ATTENZIONE*: funziona solo nel report, nelle form si continuerà a visualizzare il numero normale senza il barrato.

**Disabilitato**: per disabilitare il contatore.

### Politiche de gestione (prima griglia)

In questa sezione si inseriscono le politiche di gestione del numeratore.

**Ordine**: codice del record della riga;

**Valido da data**: campo obbligatorio ed indica la data iniziale del range di validità della numerazione;

**Valido a data**: data di fine validità del range. Il campo può essere vuoto (vedi campo successivo);

**Periodo**: periodicità del range. Le opzioni sono *Nessuno* (cioè il range è valido solo nel range definito; se non c'è data fine sarà un contatore perenne), *Annuale* (il numeratore si resetterà automaticamente al numero iniziale anno per anno, fino alla data fine validità), *Mensile* (il numeratore si resetterà automaticamente al numero iniziale di mese in mese, fino alla data fine validità), *Giornaliero* (il numeratore si resetterà automaticamente al numero iniziale ogni giorno, fino alla data fine validità);

**Mesi di spostamento**: mesi da aggiungere alla data di inizio validità per ottenere il mese nel quale il contatore si resetta;

**Giorni di spostamento**: giorni da aggiungere alla data di inizio validità per ottenere il giorno nel quale il contatore si resetta;

**Progressione data numero**: serve, se attivo, per fare in modo che la numerazione sia progressiva per data, bloccando la possibilità inserire un documento con numero superiore all'ultimo inserito ma con data antecedente a quest'ultimo;

**Recupero numeri**: permette di recuperare in automatico buchi di numerazione. Se il flag **Progressione data numero** è attivo, il recupero del numero potrà avvenire solo se coerente con le logiche spiegate poco fa per tale campo;

**Disabilitato**: per disabilitare la politica di numerazione;


### Range numerici (seconda griglia)

Questa griglia è collegata alla politica selezionata nella griglia sopra.

**Ordine**: codice del range numerico;

**Numero inizio**: è obbligatorio e indica il numero di partenza del range;

**Numero inizio ricerca**: può essere inserito se si vuole limitare la ricerca del numero a partire da un certo range;

**Numero fine**: numero massimo del range, può essere vuoto;

**Numerazione esterna**: deve essere spuntato nel caso in cui la numerazione non venga attribuita da Fluentis ma venga assegnata da sistemi esterni;

**Formula numero**: in questo campo è possibile associare una formula da utilizzare per il range di date selezionato nella prima griglia;

**Disabilitato**: per disabilitare l'utilizzo del range in oggetto.
