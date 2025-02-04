---
title: Importazione Anagrafiche Contatti
sidebar_position: 1
---



In questo articolo verrà spiegato come **Importare le anagrafiche contatti** (clienti o fornitori) all'interno di **Fluentis** tramite l'utilizzo di un **foglio elettronico**.

Questa importazione è possibile, grazie all'utilizzo dei **BizLink Parameters** in quanto ogni qualvolta verrà processata una riga, essi saranno richiamati.


### Come aprire l'importazione tramite foglio elettronico

Cliccare su **Strumenti** (di solito è situata nel lato destro di Fluentis).

Cliccare sulla sezione **BizLink**

Cliccare su **Importazione On Demand > Anagrafiche > Importazione Clienti/Fornitori** come in figura sotto.

![](/img/it-it/applications/bizlink/import-contacts-registry/image03.png) 


### Sezione Data

In questa sezione andremo a inserire i dati che verranno poi resi permanenti tramite salvataggio nella base di dati di **Fluentis**.

Ora a video viene visualizzato il foglio elettronico per l'importazione.

![](/img/it-it/applications/bizlink/import-contacts-registry/image04.png) 

Da questo punto si possono prendere varie strade:

 1. Importare il foglio elettronico già compilato, **File > Open**.
 2. Aggiungere le varie colonne facendo copia e incolla dal listino salvato nel nostro pc.
 3. Salvare questo file (**File > Salva**) nel nostro pc, per poi andare ad aggiungerci i vari dati e reimportarlo successivamente in **Fluentis** (vedi punto 1). Questo potrebbe essere molto utile per passare il template, del foglio elettronico per l'importazione, da compilare per i futuri listini che ci invieranno i fornitori. 
 4. Aggiungere manualmente i campi.

**ATTENZIONE**: se abbiamo un foglio elettronico salvato sul nostro pc, esso deve seguire lo schema del foglio in figura sopra. Ossia lo stesso ordine di colonne, tipo di dato ecc. Quest'ultimi sono spiegati nel dettaglio al paragrafo successivo.


### Inserimento campi

Quando viene inserito un campo vanno tenute in considerazione molte cose tra cui tipo, lunghezza massima, richiesto ecc…

Indicazioni generali:

-        Se il campo è scritto in rosso è un campo obbligatorio

-        Se il nome della cella è evidenziato in verde è una **sezione**

-        Se il nome della cella è evidenziato in giallo è un **campo**

-        Campo: indica se è obbligatorio o meno l'inserimento

-        Tipo: indica il tipo del campo

-        Formattazione Excel: indica la formattazione Excel consigliata per evitare inserimenti sbagliati, vedi alla fine Consigli e avvertenze utili

-        Lunghezza: indica se il campo ha un limite di caratteri da rispettare

-        Descrizione: breve descrizione del campo

*Esempio*: esempio reale di cosa poter scrivere in quel campo

-        Mapping table/colonna: se presente indica del rispettivo campo la mappatura nel database, per approfondire alla fine Consigli e avvertenze utili

 ![](/img/it-it/applications/bizlink/import-contacts-registry/image05.png)

 

**Dati generali**:

Codice:

-        Campo: obbligatorio

-        Tipo: stringa

-        Formattazione Excel: testo

-        Lunghezza massima: 6 caratteri

-        Descrizione: codice di riferimento del cliente/fornitore

*Esempio*: TEGOL

-        Mapping table/colonna: select MBAN_Nomignolo from MB_Anagr

Ragione Sociale:

-        Campo: obbligatorio

-        Tipo: stringa

-        Formattazione Excel: testo

-        Lunghezza massima: /

-        Descrizione: ragione sociale del cliente/fornitore

*Esempio*: TEGOLA CANADESE spa

-        Mapping table/colonna: select MBAN_RagSoc from MB_Anagr

Cliente/Fornitore:

-        Campo: obbligatorio

-        Tipo: stringa

-        Formattazione Excel: testo

-        Lunghezza massima: 1 carattere

-        Descrizione: Indica se stiamo inserendo un cliente o un fornitore. Le due lettere che rappresentano cliente e fornitore sono specificate nei parametri.

*Esempio*: “C” corrisponde a fornitore, ”F” corrisponde a fornitore

**Attenzione**: l'unico modo per inserire un contatto, il quale è sia cliente che fornitore, è inserirlo prima come cliente e poi come fornitore.

Conto:

-        Campo: non obbligatorio

-        Tipo: string

-        Descrizione: conto del fornitore, mastro del fornitore

*Esempio*: “15200” corrisponde a Clienti Italia

-        Mapping table/colonna: select MBPC_Conto from MB_PiaCon

Sottoconto:

-        Campo: non obbligatorio

-        Tipo: string

-        Descrizione: sottoconto del fornitore, mastrino del fornitore

*Esempio*: se vengono passati i conti con sistema vuoto si può usare una codifica tipo 01; 02; 03 oppure 001; 002; 003

-        Mapping table/colonna: select BPC_SottoConto from MB_PiaCon

Partite (true/false):

-        Campo: obbligatorio

-        Tipo: stringa

-        Formattazione Excel: testo

-        Lunghezza massima: 200 caratteri

-        Descrizione: flag partite aperte

*Esempio*: basta semplicemente scrivere “true” e appena si cambia cella automaticamente scriverà “TRUE” in centro della cella o “FALSE” a seconda dei casi

Indirizzo:

-        Campo: non obbligatorio

-        Tipo: stringa

-        Formattazione Excel: testo

-        Lunghezza massima: /

-        Descrizione: indirizzo sede cliente/fornitore

*Esempio*: via le dita dalla tastiera 7

-        Mapping table/colonna: select MBAN_Indirizzo from MB_Anagr

Comune:

-        Campo: non obbligatorio

-        Tipo: stringa

-        Formattazione Excel: testo

-        Lunghezza massima: /

-        Descrizione: comune sede cliente/fornitore

*Esempio*: Cordignano

-        Mapping table/colonna: select MBAN_Comune from MB_Anagr

CAP:

-        Campo: non obbligatorio

-        Tipo: stringa

-        Formattazione Excel: testo

-        Lunghezza massima: 5 caratteri

-        Descrizione: codice di avviamento postale della sede cliente/fornitore

*Esempio*: 31016

-        Mapping table/colonna: select MBAN_CAP from MB_Anagr

Provincia:

-        Campo: non obbligatorio

-        Tipo: stringa

-        Formattazione Excel: testo

-        Lunghezza massima: 200 caratteri

-        Descrizione: provincia sede cliente/fornitore

*Esempio*: “TV” corrisponde a Treviso

-        Mapping table/colonna: select MBAN_Provincia from MB_Anagr

Nazione:

-        Campo: non obbligatorio

-        Tipo: stringa

-        Formattazione Excel: testo

-        Lunghezza massima: 200 caratteri

-        Descrizione: nazione sede cliente/fornitore

*Esempio*: “IT” corrisponde a Italia

-        Mapping table/colonna: select MBNZ_CodIso from MB_Nazioni

Lingua:

-        Campo: non obbligatorio

-        Tipo: stringa

-        Formattazione Excel: testo

-        Lunghezza massima: 200 caratteri

-        Descrizione: lingua utilizzata dal cliente/fornitore

*Esempio*: “IT” corrisponde a italiano

-        Mapping table/colonna: select MBAN_RagSoc from MB_Anagr

Telefono:

-        Campo: non obbligatorio

-        Tipo: stringa

-        Formattazione Excel: testo

-        Lunghezza massima: 200 caratteri

-        Descrizione: telefono del cliente/fornitore

*Esempio*: 0438-123456

-        Mapping table/colonna: select MBAN_Telefono from MB_Anagr

Email:

-        Campo: non obbligatorio

-        Tipo: stringa

-        Formattazione Excel: testo

-        Lunghezza massima: 200 caratteri

-        Descrizione: e-mail principale del cliente/fornitore

*Esempio*: info@mycompany.com

-        Mapping table/colonna: select MBAN_Email from MB_Anagr

Nota:

-        Campo: non obbligatorio

-        Tipo: stringa

-        Formattazione Excel: testo

-        Lunghezza massima: 200 caratteri

-        Descrizione: note aggiuntive

*Esempio*:

-        Mapping table/colonna: select MBAN_Note from MB_Anagr

![](/img/it-it/applications/bizlink/import-contacts-registry/image06.png) 

**Dati fiscali**:

Cod. fiscale:

-        Campo: non obbligatorio

-        Tipo: stringa

-        Formattazione Excel: testo

-        Lunghezza massima: /

-        Descrizione: Codice Fiscale del cliente/fornitore

*Esempio*: IT01720550936

-        Mapping table/colonna: select MBAN_CodFiscale from MB_Anagr

Cod. ISO:

-        Campo: non obbligatorio

-        Tipo: stringa

-        Formattazione Excel: testo

-        Lunghezza massima: 50 caratteri

-        Descrizione:

*Esempio*: “IT” corrisponde ad Italia

-        Mapping table/colonna: select MBAN_CodIso from MB_Anagr

P. Iva:

-        Campo: non obbligatorio

-        Tipo: stringa

-        Formattazione Excel: testo

-        Lunghezza massima: 200 caratteri

-        Descrizione: partita iva del cliente/fornitore

*Esempio*: 28207227700

-        Mapping table/colonna: select MBAN_PartitaIva from MB_Anagr

![](/img/it-it/applications/bizlink/import-contacts-registry/image07.png) 

**Pagamenti**:

Tipo pagamento:

-        Campo: obbligatorio

-        Tipo: stringa

-        Formattazione Excel: testo

-        Lunghezza massima: /

-        Descrizione: tipo di pagamento che viene utilizzato dal cliente/fornitore

*Esempio*: “04” corrisponde a bonifico bancario

-        Mapping table/colonna: select MBTP_Pagamento from MB_TipoPag

Soluzioni di Pagamento:

-        Campo: obbligatorio

-        Tipo: stringa

-        Formattazione Excel: testo

-        Lunghezza massima: /

-        Descrizione: tempistiche di pagamento del cliente/fornitore

*Esempio*: “60 GG DF” corrisponde a entro 60 giorni rispetto alla data della fattura, “In consegna” pagamento nel momento della consegna della merce

-        Mapping table/colonna: select * from MB_SolPag

ABI:

-        Campo: non obbligatorio

-        Tipo: stringa

-        Formattazione Excel: testo

-        Lunghezza massima: 5

-        Descrizione: identifica la banca a cui appartiene il conto corrente del cliente/fornitore. È una parte dell'IBAN

*Esempio*: 01234

CAB:

-        Campo: non obbligatorio

-        Tipo: stringa

-        Formattazione testo

-        Lunghezza massima: 5

-        Descrizione: indica la filiale della rispettiva banca (ABI) del cliente/fornitore. È una parte dell'IBAN

*Esempio*: 12345

IBAN:

-        Campo: non obbligatorio

-        Tipo: stringa

-        Formattazione Excel: testo

-        Lunghezza massima: 27 caratteri

-        Descrizione: è un codice utilizzato nelle transazioni fra conti correnti diversi e che all'interno contiene l'identificazione del paese, della banca e del numero di conto corrente.

*Esempio*: IT66C010050338 2000000218020     

SWIFT:

-        Campo: non obbligatorio

-        Tipo: stringa

-        Formattazione Excel: testo

-        Lunghezza massima: 11 caratteri

-        Descrizione: cifre identificative che permettono ai sistemi di capire all'istante qual è la banca ricevente e quale quella mittente, il loro nome e luogo da cui operano. È necessario per i pagamenti a livello internazionale. È composto da 8 caratteri + 3 opzionali.

*Esempio*: “UNCRITMM” corrisponde allo SWIFT di UniCredit

Zona:

-        Campo: non obbligatorio

-        Tipo: string

-        Formattazione Excel: testo

-        Lunghezza massima: /

-        Descrizione: Zona definita all'inizio dell'IBAN

*Esempio*: “IT” Corrisponde ad Italia

 ![](/img/it-it/applications/bizlink/import-contacts-registry/image08.png)

**Agenti**:

Agente:

-        Campo: non obbligatorio

-        Tipo: stringa

-        Formattazione Excel: testo

-        Lunghezza massima: /

-        Descrizione: Se c'è un agente (presente nell'anagrafica agenti) può essere collegato al cliente

*Esempio*:

-        Mapping table/colonna: select * from MB_Agenti

Provvigioni:

-        Campo: non obbligatorio

-        Tipo: stringa

-        Formattazione Excel: testo

-        Lunghezza massima: /

-        Descrizione: Provvigione dell'agente, se diversa rispetto a quella inserita nell'anagrafica agente c'è una maschera in cui si può decidere quale ha più priorità rispetto all'altra

*Esempio*:

-        Mapping table/colonna: select * from MB_AgentiZone

![](/img/it-it/applications/bizlink/import-contacts-registry/image09.png) 

**Listini**:

Listino:

-        Campo: non obbligatorio

-        Tipo: string

-        Formattazione Excel: testo

-        Lunghezza massima: /

-        Descrizione:

*Esempio*:

Sconto 1:

-        Campo: non obbligatorio

-        Tipo: decimale

-        Formattazione Excel: numero, posizione decimali = 2

-        Lunghezza massima: /

-        Descrizione: valore dello sconto

*Esempio*: 550

Sconto 2:

-        Campo: non obbligatorio

-        Tipo: decimale

-        Formattazione Excel: numero, posizione decimali = 2

-        Lunghezza massima: /

-        Descrizione: valore dello sconto

*Esempio*: 5%

 
### BizLink Parameters

Questi parametri serviranno per processare le righe inserite nella sezione Data. Come si può notare dall'immagine, alcuni campi sono già precompilati ma nulla ci vieta di modificarli.

![](/img/it-it/applications/bizlink/import-contacts-registry/image10.png) 

 BizLink Spreadsheet:

-        Campo: da non inserire

Lingua:

-        Campo: obbligatorio

-        Tipo: string

-        Descrizione: codice Iso code relativo alla lingua

*Esempio*: “it-IT” rappresenta la lingua italiana, “en-US” rappresenta la lingua inglese in America.

 Società:

-        Campo: obbligatorio

-        Tipo: string

-        Descrizione: è un campo precompilato in quanto prende i valori già all'interno di Fluentis, si possono vedere nell'angolo in alto a sinistra.

*Esempio*: “1” corrisponde alla società demo

-        Mapping table/colonna: Select MBSC_Code from MB_Soc

Divisione:

-        Campo: obbligatorio

-        Tipo: string

-        Descrizione: come per la società viene precompilato

*Esempio*: “1” corrisponde alla sede legale, “2” alla sede operativa di Milano

-        Mapping table/colonna: select MBDP_Code from MB_Dep

Identificativo cliente:

-        Campo: obbligatorio

-        Tipo: string

-        Descrizione: Una qualsiasi lettera che inseriamo nei parametri che andrà poi a corrispondere al campo cliente/fornitore. Per semplicità è consigliato “C”

*Esempio*: “C” corrisponde a clienti

Identificativo fornitore:

-        Campo: obbligatorio

-        Tipo: string

-        Descrizione: Una qualsiasi lettera che inseriamo nei parametri che andrà poi a corrispondere al campo cliente/fornitore. Per semplicità è consigliato “F”

*Esempio*: “F” corrisponde a fornitori

Codice tipo conto clienti:

-        Campo: obbligatorio

-        Tipo: string

-        Descrizione: conto mastro rispetto ai clienti. Per poterlo vedere anche da Fluentis basta andare in Home**  > ** Parametri ** > ** Amministrazione**  > ** Parametri di contabilità. Fare doppio click sull'anno corrente e sulla destra si dovrebbe vedere il “Tipo conto”

*Esempio*: “FIT” corrisponde a clienti Italia

Codice tipo conto fornitori:

-        Campo: obbligatorio

-        Tipo: string

-        Descrizione: conto mastro rispetto ai fornitori. Per poterlo vedere anche da Fluentis basta andare in Home ** > ** Parametri ** > ** Amministrazione ** > ** Parametri di contabilità. Fare doppio click sull'anno corrente e sulla destra si dovrebbe vedere il “Tipo conto”

*Esempio*: “CIT” corrisponde a fornitori Italia

Gruppo clienti:

-        Campo: obbligatorio

-        Tipo: string

-        Descrizione: è possibile vedere i codici presenti da Home ** > ** Contabili ** > ** Piano dei conti, nella prima maschera di visualizzazione c'è un codice del gruppo.

*Esempio*: “1520” corrisponde a Clienti Italia

-        Mapping table/colonna: select MBGR_Gruppo from MB_GRUPP

Gruppo fornitori:

-        Campo: obbligatorio

-        Tipo: string

-        Descrizione: è possibile vedere i codici presenti da Home ** > ** Contabili ** > ** Piano dei conti, nella prima maschera di visualizzazione c'è un codice del gruppo.

*Esempio*: “2506” corrisponde a Fornitori Italia

-        Mapping table/colonna: select MBGR_Gruppo from MB_GRUPPI

Codice Tipo sconto 1:

-        Campo: obbligatorio solo se inserito lo sconto 1

-        Tipo: string

-        Descrizione: Rappresenta la categoria di sconto applicata al listino

*Esempio*: “C1” corrisponde a sconto a cascata

-        Mapping table/colonna: select MBST_TipSco from MB_Sconti

Codice Tipo sconto 2:

-        Campo: obbligatorio solo se inserito lo sconto 2

-        Tipo: string

-        Descrizione: Rappresenta la categoria di sconto applicata al listino

*Esempio*: “3” corrisponde a sconto commerciale

-        Mapping table/colonna: select MBST_TipSco from MB_Sconti



### Avviare importazione

Una volta inseriti i dati, per avviare l'importazione, cliccare sul pulsante presente nel menu importazione, in alto a sinistra, chiamato anch'esso “Importazione” come in figura sotto.

![](/img/it-it/applications/bizlink/import-contacts-registry/image11.png)



### Conclusioni – Inserimento avvenuto

Se tutto va a buon fine non comparirà nessun messaggio di errore. Per un ulteriore verifica di buon riuscita, andare a controllare nell'anagrafica articoli (**Home > Articoli**) se sono presenti quelli importati dal fornitore.  Altrimenti ci apparirà a video una schermata di errore la quale ci indicherà quali parametri e/o campi non sono corretti. Per interpretare il tipo di errore vedi Consigli e avvertenze utili nell'ultimo paragrafo. 





### Consigli e avvertenze utili

**Formattazione Excel consigliata**:

-        Per una corretta importazione, è vivamente consigliato di formattare le colonne secondo il tipo indicato alla voce “Formattazione Excel” di ogni campo. Per esempio se il tipo del campo è decimal e in quel campo andrà inserito una valuta, formattare il campo appunto come valuta. Questo perché per esempio se non viene formattata la cella, Excel elimina le cifre non significative. Per inserire la formattazione seguire i seguenti passaggi:

Per prima cosa selezionare la colonna desiderata come in fig. sotto:

![](/img/it-it/applications/bizlink/import-contacts-registry/image12.png) 

Poi, dopo essersi posizionati con il puntatore del mouse all'interno della colonna, premere il tasto destro del mouse.

![](/img/it-it/applications/bizlink/import-contacts-registry/image13.png) 

Selezionare premendo il tasto sinistro ** > ** **Formato celle**…

![](/img/it-it/applications/bizlink/import-contacts-registry/image14.png) 

In questa schermata si potrà quindi formattare la colonna selezionata. In base alle indicazioni fornite nell' “Inserimento campi” selezionare l'opportuna categoria, con le relative specifiche (es. valuta, simbolo nessuno). La stessa identica cosa è possibile farla dal foglio elettronico presente all'interno di Fluentis.

**Attenzione: **Il caso classico riguarda codici contenenti zeri, apparentemente, non significativi es. “001”. Se il campo è formattato generico o numero gli zeri sarebbero scartati, se formatta come stringa vengono invece mantenuti.

**Mapping table/colonna**:

-        Se nell' “Inserimento campi” vi è presente la voce mapping table/colonna, significa che il valore inserito all'interno del campo per l'importazione, può essere già presente nel database. È stato inserito anche nei campi i quali verranno inseriti da zero per poter vedere magari un esempio, se presente, nel database. Per visualizzare i relativi dati presenti nella base di dati basterà seguire i seguenti passaggi, in cui verrà utilizzato come esempio la classe articoli e il relativo mapping: 

select MBDC_Classe from MB_Classi (**\<-** questo è il mapping). Eseguiamo la query in “Microsoft SQL server management studio” e otteniamo il seguente risultato:

![](/img/it-it/applications/bizlink/import-contacts-registry/image15.png) 

Visto così non comunica nulla, per capirne il significato sostituire dopo la clausola di select, il simbolo “*” al campo per comporre la nuova query. In questo caso avremmo quindi select * from MB_Class, che serve per selezionare l'intero contenuto della tabella, eseguiamo ora.

 ![](/img/it-it/applications/bizlink/import-contacts-registry/image16.png)

Questo è utile in quanto, come mostrato dalla figura, tramite la descrizione (MBDC_Descr) è possibile capire il campo cosa rappresenta e verificare se quello che si inserirà è presente o meno nella base di dati.

Questa procedura appena descritta è universale, ossia vale per ogni campo.

La stessa rappresentazione è possibile vederla in Fluentis:

Dalla home di Fluentis selezionare **Articoli > Articoli fornitori** (vedi fig. sotto).

 ![](/img/it-it/applications/bizlink/import-contacts-registry/image17.png)

Poi nella maschera di ricerca che appare cliccare con il pulsante sinistro del mouse sul triangolino affianco ad articoli, il quale apre una tendina dove è possibile visualizzare la classe degli articoli con relativa descrizione come in figura.

![](/img/it-it/applications/bizlink/import-contacts-registry/image18.png) 

Questo per la classe articoli. Per gli altri campi si potrà eseguire la stessa procedura solamente in punti diversi.

Noi dovremmo quindi inserire uno dei valori presenti altrimenti l'importazione non andrà a buon fine e ci comunicherà un errore. Questo per ogni campo di cui è presente il mapping table/colonna. 

Se vogliamo invece aggiungere un campo con mapping non presente nel database andrà inserito o tramite query o da Fluentis, in questo caso la query di inserimento è sconsigliata in quanto più complicata da comporre rispetto alla visualizzazione vista in precedenza. La procedura consigliata è quindi l'inserimento da Fluentis. Sempre nel caso della classe articoli, da articoli fornitore (figura sopra) premere tasto destro all'interno del filtro di ricerca della classe articolo e selezionare “apri form”.

 ![](/img/it-it/applications/bizlink/import-contacts-registry/image19.png)

Nella form che si aprirà premere il pulsante ricerca per visualizzare le classi articolo presenti.

 ![](/img/neutral/common/search.png)

Sotto l'ultima riga presente c'è una riga vuota. È quella usata per l'inserimento di nuovi valori.

![](/img/it-it/applications/bizlink/import-contacts-registry/image21.png) 

Lì vanno scritti i nuovi valori da inserire e una volta fatto, basterà premere invio. 

 Questa procedura è analoga per gli altri campi, l'unica cosa che cambia è il dove si trovano i filtri di ricerca nei quali premere il tasto sinistro per aprire la form.

**Errori:** 

-        In caso di importazione fallita, come detto in precedenza, apparirà a video una schermata di errore.

 Se l'errore è stato commesso nella parte Data è possibile risalire alla riga che contiene l'errore in quanto ci sarà per esempio scritto “System.ArgumentException: Error importing row 4”. In questo caso (vedi figura sotto), l'errore si troverà nella riga 4, la quale però non è l'effettiva riga contente l'errore. Per capire esattamente quale riga contenga l'errore, utilizzando i numeri nella colonna di sinistra, gli va sommato 1. Quindi: 

 Riga reale contente errore = Error importing rownum + 1

![](/img/it-it/applications/bizlink/import-contacts-registry/image22.png)

   

Per interpretare l'errore, nel messaggio dello stesso, seguire i seguenti passaggi: nella stessa riga contenente il numero di riga visto in precedenza, c'è scritto **l'oggetto** a cui è riferito, poi **l'errore** vero e proprio e infine la **proprietà** relativa ad esso in cui è stato riscontrato l'errore. Sempre nell'esempio sopra riportato “Failed to create, update or delete the object of type Fluentis.FluentisErp.Core.Scm.PurchasePriceLists.FSPurchasePriceListItem, Fluentis.FluentisErp.Core.Scm.**PurchasePriceLists**not-null property references a null or transient value Fluentis.FluentisErp.Core.Scm.PurchasePriceLists.ReadWrite.FSWPurchasePriceListItem.MeasurementUnit”. In questo caso come si può notare dall'immagine sopra, l'unità di misura relativa al prezzo di acquisto listino ha generato l'errore in quanto essa è nulla. Infatti il suo inserimento è obbligatorio. 

 Se l'errore è stato commesso nella parte dei parametri il messaggio sarà analogo, il metodo di risoluzione rimane sempre il precedente quindi, in base alla proprietà verificare il corretto inserimento della stessa.

**Attenzione**: Se viene trovata una riga completamente vuota, non verrà comunicato nessuno errore ma l'importazione terminerà lì. Per esempio se la prima riga (riga n.4) è vuota per qualche motivo e sotto (da riga n.5 compresa) si trovano le righe popolate, non sarà importato nulla.

**Attenzione**: Se viene inserito un'anagrafica di 10 righe per esempio e alla riga n. 7 si verifica un errore, le prime 6 righe non avendo causato problemi sono state inserite! Se non viene cambiato nessun valore nelle prime 6 righe (e se ovviamente l'errore è stato corretto), riavviando l'importazione non ci saranno problemi, neanche di duplicazione in quanto viene prima cercato se il contatto è già presente. Se viene cambiato anche solo un valore, tale contatto verrà inserito in quanto visto come un nuovo contatto.

Infine un altro messaggio di errore che potrà capitare è il seguente.

 ![](/img/it-it/applications/bizlink/import-contacts-registry/image23.png)

Come si può notare dall'immagine sopra riportata, questa tipologia di messaggi sono più facili da interpretare in quanto viene messo il riferimento esatto della cella con relativo errore. In questo caso nella cella F:4 non è presente nessun valore. 
