---
title: Importazione Listini Fornitore
sidebar_position: 3
---


In questo documento verrà spiegato come **Importare i listini fornitori** all'interno di **Fluentis** tramite l'utilizzo di un **foglio elettronico**.

Questa importazione è possibile, grazie all'utilizzo dei **BizLink Parameters** in quanto ogni qualvolta verrà processata una riga, essi saranno richiamati.


### Come aprire l'importazione tramite foglio elettronico

Cliccare su **Strumenti** (di solito è situata nel lato destro di Fluentis).

Cliccare sulla sezione **BizLink**

Cliccare su **Importazione On Demand  >  Documenti di acquisto  >  Importazione Listini Fornitori** come in figura sotto.

![](/img/it-it/applications/bizlink/import-purchase-price-lists/image03.png) 



### Sezione Data

In questa sezione andremo a inserire i dati che verranno poi resi permanenti tramite salvataggio nella base di dati di Fluentis.

Ora a video viene visualizzato il foglio elettronico per l'importazione.

![](/img/it-it/applications/bizlink/import-purchase-price-lists/image04.png) 

Da questo punto si possono prendere varie strade:

 1. Importare il foglio elettronico già compilato, **File > Open**.
 2. Aggiungere le varie colonne facendo copia e incolla dal listino salvato nel nostro pc.
 3. Salvare questo file (**File  > Salva**) nel nostro pc, per poi andare ad aggiungerci i vari dati e reimportarlo successivamente in Fluentis (vedi punto 1). Questo potrebbe essere molto utile per passare il template, del foglio elettronico per l'importazione, da compilare per i futuri listini che ci invieranno i fornitori. 
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

-        Formattazione Excel: indica la formattazione Excel consigliata per evitare inserimenti sbagliati, vedi ultima sezione Consigli e avvertenze utili

-        Lunghezza: indica se il campo ha un limite di caratteri da rispettare

-        Descrizione: breve descrizione del campo

*Esempio*: esempio reale di cosa poter scrivere in quel campo

-        Mapping table/colonna: se presente indica del rispettivo campo la mappatura nel database, per approfondire vedi ultima sezione  Consigli e avvertenze utili.

![](/img/it-it/applications/bizlink/import-purchase-price-lists/image05.png) 



**Dati articolo fornitore**:

Codice:

-        Campo: obbligatorio

-        Tipo: stringa

-        Formattazione Excel: testo

-        Lunghezza massima: 50 caratteri

-        Descrizione: codice di riferimento all'articolo usato dal fornitore

*Esempio*: 02030508

Descrizione:

-        Campo: obbligatorio

-        Tipo: stringa

-        Formattazione Excel: testo

-        Lunghezza massima: 200 caratteri

-        Descrizione: descrizione data dal fornitore all'articolo

*Esempio*: pallina da tennis sensibile alla rotazione, può corrispondere al codice articolo

![](/img/it-it/applications/bizlink/import-purchase-price-lists/image06.png) 


**Dati articolo**:

Classe:

-        Campo: non obbligatorio

-        Tipo: stringa

-        Formattazione Excel: testo

-        Lunghezza massima: /

-        Descrizione: codice riferito alla classe dell'articolo

*Esempio*: “1” corrisponde a semilavorati, “IMB” corrisponde a imballi

-        Mapping table/colonna: select MBDC_Classe from MB_Classi

Codice interno:

-        Campo: non obbligatorio

-        Tipo: stringa

-        Formattazione Excel: testo

-        Lunghezza massima: 50 caratteri

-        Descrizione: se non viene assegnato viene preso quello del fornitore. Esso identificherà l'articolo, quindi se dato un articolo ne modifico il codice interno di conseguenza Sarà aggiunto il nuovo articolo. Altrimenti se dato un articolo lascio invariato il codice articolo e ne modifico per esempio la descrizione, verrà eseguito un update dell'articolo con quel codice articolo. (Non fare l'update dell'unità di misura)

*Esempio*: 7710ct7tb

Descrizione interna:

-        Campo: non obbligatorio

-        Tipo: stringa

-        Formattazione Excel: testo

-        Lunghezza massima: 200 caratteri

-        Descrizione: se non viene assegnato viene preso quello del fornitore

*Esempio*: pallina da tennis sensibile alla rotazione

Unità di misura:

-        Campo: obbligatorio

-        Tipo: stringa

-        Formattazione Excel: testo

-        Lunghezza massima: 3 caratteri

-        Descrizione: codice riferito alla misura utilizzata per l'articolo in questione

*Esempio*: “cm” corrisponde a centimetri, “UDC” corrisponde a bancale

-        Mapping table/colonna: select MBUM_Codice from MB_UnitaMisura

IVA:

-        Campo: non obbligatorio

-        Tipo: stringa

-        Formattazione Excel: testo

-        Lunghezza massima: 3 caratteri

-        Descrizione: codice riferito alla misura utilizzata per l'articolo in questione

*Esempio*: “22” corrisponde al 22% di iva, “944” Esente art. 40 c. 4 bis DL 331

-        Mapping table/colonna: select MBIV_Code from MB_iva

Cat Merc:

-        Campo: non obbligatorio

-        Tipo: stringa

-        Formattazione Excel: testo

-        Lunghezza massima: 3 caratteri

-        Descrizione: codice riferito alla categoria merce dell'articolo in questione

*Esempio*: “206” corrisponde a collanti, “211” corrisponde a materie prime

-        Mapping table/colonna: select MBCM_Codice from MB_CatMerceologica

Fatt acq:

-        Campo: non obbligatorio

-        Tipo: stringa

-        Formattazione Excel: testo

-        Lunghezza massima: 10 caratteri

-        Descrizione: codice riferito al tipo di fattura emessa dell'articolo in questione

*Esempio*: “4” corrisponde ad acquisto semilavorati, “1” corrisponde a materie prime

-        Mapping table/colonna: select MBFA_TipoFatt from mb_TipoFattAcq

Barcode:

-        Campo: non obbligatorio

-        Tipo: stringa

-        Formattazione Excel: testo

-        Lunghezza massima: /

-        Descrizione: codice a barre dell'articolo in questione

*Esempio*: ABC-1234

Tipo lotto:

-        Campo: non obbligatorio

-        Tipo: stringa

-        Formattazione Excel: testo

-        Lunghezza massima: 2 caratteri

-        Descrizione: tipo lotto di cui fa parte l'articolo

*Esempio*: “4” corrisponde ad acquisto semilavorati, “1” corrisponde a materie prime

Nomenclatura:

-        Campo: non obbligatorio

-        Tipo: stringa

-        Formattazione Excel: testo

-        Lunghezza massima: 50 caratteri

-        Descrizione: nomenclatura, classificazione articolo

*Esempio*: “32049000” corrisponde a coloranti

-        Mapping table/colonna: select INCN_CodNomencl from IN_CodNomenc

Codice produttore:

-        Campo: non obbligatorio

-        Tipo: stringa

-        Formattazione Excel: testo

-        Lunghezza massima: 100 caratteri

-        Descrizione: codice del produttore dell'articolo

*Esempio*: art0102032019

Codice commerciale:

-        Campo: non obbligatorio

-        Tipo: stringa

-        Formattazione Excel: testo

-        Lunghezza massima: 100 caratteri

-        Descrizione: codice della categoria commerciale

*Esempio*: “P” corrisponde a privato

![](/img/it-it/applications/bizlink/import-purchase-price-lists/image07.png) 


**Dati listino**:

Prezzo:

-        Campo: obbligatorio

-        Tipo: decimale

-        Formattazione Excel: valuta, simbolo nessuno

-        Lunghezza massima: /

-        Descrizione: prezzo a listino dell'articolo

*Esempio*: 10.99, 123.45

UMPrezzo:

-        Campo: obbligatorio

-        Tipo: stringa

-        Formattazione Excel: testo

-        Lunghezza massima: /

-        Descrizione: serve per definire il prezzo rispetto alla quantità (es. prezzo al kilo, prezzo al metro quadro)

*Esempio*: “kg” corrisponde a kilogrammi

-        Mapping table/colonna: select MBUM_Codice from MB_UnitaMisura


**Quantità**:

-        Campo: non obbligatorio

-        Tipo: decimale

-        Formattazione Excel: numero, posizione decimali = 2

-        Lunghezza massima: /

-        Descrizione: quantità dell'articolo a cui è riferito il prezzo precedente

*Esempio*: 500


**Valore aggiunto**:

-        Campo: non obbligatorio

-        Tipo: decimale

-        Formattazione Excel: numero, posizione decimali = 2

-        Lunghezza massima: /

-        Descrizione: valore aggiuntivo da poter utilizzare in creazione listini di vendita da listini acquisto. Per esempio se ci sono delle spese di trasposto (che dobbiamo pagare al fornitore), vengono qui riportate per poi essere utilizzate nel calcolo del prezzo di vendita di tale articolo.

*Esempio*: 123.45


**% Aggiuntiva**:

-        Campo: non obbligatorio

-        Tipo: decimale

-        Formattazione Excel: numero, posizione decimali = 2

-        Lunghezza massima: /

-        Descrizione: percentuale aggiuntiva da poter utilizzare in creazione listini di vendita da listini acquisto

*Esempio*: 10        

  ![](/img/it-it/applications/bizlink/import-purchase-price-lists/image08.png)


**Sconti**:

Sconto1:

-        Campo: non obbligatorio

-        Tipo: decimale

-        Formattazione Excel: numero, posizione decimali = 2

-        Lunghezza massima: /

-        Descrizione: sconti possibili applicabili

*Esempio*: “50+10” sul totale della riga viene effettuato un primo sconto del 50% e sul nuovo totale un ulteriore sconto del 10%

Stessa identica cosa per gli altri due sconti, cambia solo il valore dello sconto.

![](/img/it-it/applications/bizlink/import-purchase-price-lists/image09.png) 


**Sconti a qtà**:

Sconto1:

-        Campo: non obbligatorio

-        Tipo: decimale

-        Formattazione Excel: numero, posizione decimali = 2

-        Lunghezza massima: /

-        Descrizione: sconto applicato se viene acquistata un data quantità dell'articolo in questione

*Esempio*: 10

Quantità1:

-        Campo: non obbligatorio

-        Tipo: decimale

-        Formattazione Excel: numero, posizione decimali = 2

-        Lunghezza massima: /

-        Descrizione: quantità minima necessaria per avere il rispettivo sconto

*Esempio*: 550

Stessa identica cosa per gli altri due sconti a quantità, cambia solo il corrispettivo valore.

![](/img/it-it/applications/bizlink/import-purchase-price-lists/image10.png) 


**Sconti a valore**:

Sconto1:

-        Campo: non obbligatorio

-        Tipo: decimale

-        Formattazione Excel: numero, posizione decimali = 2

-        Lunghezza massima: /

-        Descrizione: sconto applicato se supera determinato imponibile di riga

*Esempio*: 20

Valore1:

-        Campo: non obbligatorio

-        Tipo: decimale

-        Formattazione Excel: numero, posizione decimali = 2

-        Lunghezza massima: /

-        Descrizione: imponibile minimo necessario per avere il rispettivo sconto

*Esempio*: 950

Stessa identica cosa per gli altri due sconti e valori.

![](/img/it-it/applications/bizlink/import-purchase-price-lists/image11.png) 


**Prezzo per quantità**:

Prezzo1:

-        Campo: non obbligatorio

-        Tipo: decimale

-        Formattazione Excel: numero, posizione decimali = 2

-        Lunghezza massima: /

-        Descrizione: prezzo unitario applicato se superata una determinata quantità

*Esempio*: 3.99

Quantità1:

-        Campo: non obbligatorio

-        Tipo: decimale

-        Formattazione Excel: numero, posizione decimali = 2

-        Lunghezza massima: /

-        Descrizione: quantità minima necessaria per avere il rispettivo prezzo unitario

*Esempio*: 250

Stessa identica cosa per gli altri due prezzi e relative quantità, cambia solo il rispettivo valore.

![](/img/it-it/applications/bizlink/import-purchase-price-lists/image12.png) 


**Altri dati**:

Note:

-        Campo: non obbligatorio

-        Tipo: stringa

-        Formattazione Excel: testo

-        Lunghezza massima: /

-        Descrizione: note aggiuntive

*Esempio*: non esporre ai raggi solari

-        Mapping table/colonna: select MBNC_Codice from MB_NoteCodificat



### BizLink Parameters

Questi parametri serviranno per processare le righe inserite nella sezione Data. Come si può notare dall'immagine, alcuni campi sono già precompilati ma nulla ci vieta di modificarli.

 ![](/img/it-it/applications/bizlink/import-purchase-price-lists/image13.png)

1      BizLink Spreadsheet:

-        Campo: da non inserire

2      Lingua:

-        Campo: obbligatorio

-        Tipo: string

-        Descrizione: codice Iso code relativo alla lingua

*Esempio*: “it-IT” rappresenta la lingua italiana, “en-US” rappresenta la lingua inglese in America.

3      Società:

-        Campo: obbligatorio

-        Tipo: string

-        Descrizione: è un campo precompilato in quanto prende i valori già all'interno di Fluentis, si possono vedere nell'angolo in alto a sinistra.

*Esempio*: “1” corrisponde alla società demo

-        Mapping table/colonna: Select MBSC_Code from MB_Soc

4      Divisione:

-        Campo: obbligatorio

-        Tipo: string

-        Descrizione: come per la società viene precompilato

*Esempio*: “1” corrisponde alla sede legale, “2” alla sede operativa di Milano

-        Mapping table/colonna: select MBDP_Code from MB_Dep

5      Nazione:

-        Campo: obbligatorio

-        Tipo: string

-        Descrizione: nazione in cui si trova la divisione per cui è stato importato il listino

*Esempio*: “GB” corrisponde a Gran Bretagna, “USA” corrisponde agli Stati Uniti

-        Mapping table/colonna: select MBNZ_Codice from MB_Nazioni

6      Barcode:

-        Campo: obbligatorio solo se nella sezione data si ha inserito il barcode di almeno un articolo

-        Tipo: string

-        Descrizione: serve per indicare il tipo di barcode utilizzato

*Esempio*: “39” corrisponde al COD39

-        Mapping table/colonna: select MBBC_Codice from MB_BarCode

7      Conto:

-        Campo: obbligatorio

-        Tipo: string

-        Descrizione: conto del fornitore, mastro del fornitore

*Esempio*: “1701” il quale ha 3 sottoconti (vedi sotto)

-        Mapping table/colonna: select MBPC_Conto from MB_PiaCon

8      Sottoconto:

-        Campo: obbligatorio

-        Tipo: string

-        Descrizione: sottoconto del fornitore, mastrino del fornitore

*Esempio*: per il conto 1701 visto in precedenza, ci sono 3 sottoconti: “001” che corrisponde a conti, “002” che corrisponde a valori DDTti e “” (nessun sottoconto specificato) che corrisponde a disponibilità liquide.

-        Mapping table/colonna: select BPC_SottoConto from MB_PiaCon

9      Divisa:

-        Campo: obbligatorio

-        Tipo: string

-        Descrizione: divisa con cui interpretare i valori inseriti nella sezione data

*Esempio*: “EUR” corrisponde a Euro, “USD” corrisponde a Dollaro

-        Mapping table/colonna: select MBDI_Divisa from MB_Divise

10  Inizio validità:

-        Campo: obbligatorio

-        Tipo: datetime

-        Descrizione: indica l'inizio di validità del listino inserito (gg/mm/aaaa)

*Esempio*: 1/10/2018

11  Fine validità:

-        Campo: non obbligatorio

-        Tipo: datetime

-        Descrizione: se presente indica la fine di validità del listino inserito (gg/mm/aaaa)

*Esempio*: 31/12/2027

12  Tipo sconto listino:

-        Campo: non obbligatorio

-        Tipo: string

-        Descrizione: se presente indica il tipo di sconto effettuato, ci saranno tre diverse tipologie ognuna per il relativo sconto alla sezione Sconti

*Esempio*: “4” corrisponde a sconto finale su vendita

-        Mapping table/colonna: select MBST_Code from MB_Sconti

15 Tipo sconto quantità:

-        Campo: non obbligatorio

-        Tipo: string

-        Descrizione: se presente indica il tipo di sconto effettuato

*Esempio*: “4” corrisponde a sconto finale su vendita

-        Mapping table/colonna: select MBST_Code from MB_Sconti

16 Tipo sconto valore:

-        Campo: non obbligatorio

-        Tipo: string

-        Descrizione: se presente indica il tipo di sconto effettuato

*Esempio*: “4” corrisponde a sconto finale su vendita

-        Mapping table/colonna: select MBST_Code from MB_Sconti

17 Per terzista:

-        Campo: obbligatorio

-        Tipo: boolean

-        Descrizione: indica se tale listino (di conto lavoro) sarà o meno per un terzista

*Esempio*: “1” corrisponde a true, “0” corrisponde a false

18 Inserimento articolo:

-        Campo: obbligatorio

-        Tipo: boolean

-        Descrizione: se impostato a 1 inserisce l'articolo nella tabella dell'anagrafica articoli MG_AnaArt

*Esempio*: “1” corrisponde a true, “0” corrisponde a false

19  Inserimento articolo per fornitore:

-        Campo: obbligatorio

-        Tipo: boolean

-        Descrizione: se impostato a 1 inserisce l'articolo nella tabella articoli per fornitore MB_ArticoliFornitore, MG_FornPreferenziali

*Esempio*: “1” corrisponde a true, “0” corrisponde a false

### Avviare importazione

Una volta inseriti i dati, per avviare l'importazione, cliccare sul pulsante presente nel menu importazione, in alto a sinistra, chiamato anch'esso “Importazione” come in figura sotto.

 ![](/img/it-it/applications/bizlink/import-purchase-price-lists/image14.png)

 

### Conclusioni – Inserimento avvenuto

Se tutto va a buon fine non comparirà nessun messaggio di errore. Per un ulteriore verifica di buon riuscita, andare a controllare nell'anagrafica articoli (**Home > Articoli**) se sono presenti quelli importati dal fornitore.  Altrimenti ci apparirà a video una schermata di errore la quale ci indicherà quali parametri e/o campi non sono corretti. Per interpretare il tipo di errore vedi Consigli e avvertenze utili nell'ultimo paragrafo. 

### Consigli e avvertenze utili

**Formattazione Excel consigliata**:

-        Per una corretta importazione, è vivamente consigliato di formattare le colonne secondo il tipo indicato alla voce “Formattazione Excel” di ogni campo. Per esempio se il tipo del campo è decimal e in quel campo andrà inserito una valuta, formattare il campo appunto come valuta. Questo perché per esempio se non viene formattata la cella, Excel elimina le cifre non significative. Per inserire la formattazione seguire i seguenti passaggi:

Per prima cosa selezionare la colonna desiderata come in fig. sotto:

 ![](/img/it-it/applications/bizlink/import-purchase-price-lists/image15.png)


Poi, dopo essersi posizionati con il puntatore del mouse all'interno della colonna, premere il tasto destro del mouse.

 ![](/img/it-it/applications/bizlink/import-purchase-price-lists/image16.png)


Selezionare premendo il tasto sinistro ** > Formato celle…**

![](/img/it-it/applications/bizlink/import-purchase-price-lists/image17.png) 

In questa schermata si potrà quindi formattare la colonna selezionata. In base alle indicazioni fornite nell' Inserimento campi selezionare l'opportuna categoria, con le relative specifiche (es. valuta, simbolo nessuno). La stessa identica cosa è possibile farla dal foglio elettronico presente all'interno di Fluentis.

**Attenzione**: il caso classico riguarda codici contenenti zeri, apparentemente, non significativi es. “001”. Se il campo è formattato generico o numero gli zeri sarebbero scartati, se formatta come stringa vengono invece mantenuti.

**Mapping table/colonna**:

-        Se nell' Inserimento campi vi è presente la voce mapping table/colonna, significa che il valore inserito all'interno del campo per l'importazione, deve essere già presente nel database. Per visualizzare i relativi dati presenti nella base di dati basterà seguire i seguenti passaggi, in cui verrà utilizzato come esempio la classe articoli e il relativo mapping: 

select MBDC_Classe from MB_Classi (**\<-** questo è il mapping). Eseguiamo la query in “Microsoft SQL server management studio” e otteniamo il seguente risultato:

![](/img/it-it/applications/bizlink/import-purchase-price-lists/image18.png) 

Visto così non comunica nulla, per capirne il significato sostituire dopo la clausola di select, il simbolo “*” al campo per comporre la nuova query. In questo caso avremmo quindi select * from MB_Class, che serve per selezionare l'intero contenuto della tabella, eseguiamo ora.

 ![](/img/it-it/applications/bizlink/import-purchase-price-lists/image19.png)

Questo è utile in quanto, come mostrato dalla figura, tramite la descrizione (MBDC_Descr) è possibile capire il campo cosa rappresenta e verificare se quello che si inserirà è presente o meno nella base di dati.

Questa procedura appena descritta è universale, ossia vale per ogni campo.

La stessa rappresentazione è possibile vederla in Fluentis:

Dalla Home di Fluentis selezionare **Articoli > Articoli fornitori** (vedi fig. sotto).

![](/img/it-it/applications/bizlink/import-purchase-price-lists/image20.png) 

Poi nella maschera di ricerca che appare cliccare con il pulsante sinistro del mouse sul triangolino affianco ad articoli, il quale apre una tendina dove è possibile visualizzare la classe degli articoli con relativa descrizione come in figura.

![](/img/it-it/applications/bizlink/import-purchase-price-lists/image21.png) 

Questo per la classe articoli. Per gli altri campi si potrà eseguire la stessa procedura solamente in punti diversi.

Noi dovremmo quindi inserire uno dei valori presenti altrimenti l'importazione non andrà a buon fine e ci comunicherà un errore. Questo per ogni campo di cui è presente il mapping table/colonna. 

Se vogliamo invece aggiungere un campo con mapping non presente nel database andrà inserito o tramite query o da Fluentis, in questo caso la query di inserimento è sconsigliata in quanto più complicata da comporre rispetto alla visualizzazione vista in precedenza. La procedura consigliata è quindi l'inserimento da Fluentis. Sempre nel caso della classe articoli, da articoli fornitore (figura sopra) premere tasto destro all'interno del filtro di ricerca della classe articolo e selezionare **Apri form**.

![](/img/it-it/applications/bizlink/import-purchase-price-lists/image22.png) 

Nella form che si aprirà premere il pulsante **Ricerca** per visualizzare le classi articolo presenti.

![](/img/neutral/common/search.png) 

Sotto l'ultima riga presente c'è una riga vuota. È quella usata per l'inserimento di nuovi valori.

 ![](/img/it-it/applications/bizlink/import-purchase-price-lists/image24.png)

Lì vanno scritti i nuovi valori da inserire e una volta fatto, basterà premere invio. 

 Questa procedura è analoga per gli altri campi, l'unica cosa che cambia è il dove si trovano i filtri di ricerca nei quali premere il tasto sinistro per aprire la form.

**Errori**: 

-        In caso di importazione fallita, come detto in precedenza, apparirà a video una schermata di errore.

 Se l'errore è stato commesso nella parte Data è possibile risalire alla riga che contiene l'errore in quanto ci sarà per esempio scritto “System.ArgumentException: Error importing row 4”.

In questo caso (vedi figura sotto), l'errore si troverà nella riga 4, la quale però non è l'effettiva riga contente l'errore. Per capire esattamente quale riga contenga l'errore, utilizzando i numeri nella colonna di sinistra, gli va sommato 1. Quindi: 

 Riga reale contente errore = Error importing rownum + 1

![](/img/it-it/applications/bizlink/import-purchase-price-lists/image25.png)

Per interpretare l'errore, nel messaggio dello stesso, seguire i seguenti passaggi: nella stessa riga contenente il numero di riga visto in precedenza, c'è scritto l'oggetto a cui è riferito, poi l'errore vero e proprio e infine la proprietà relativa ad esso in cui è stato riscontrato l'errore. Sempre nell'esempio sopra riportato “Failed to create, update or delete the object of type Fluentis.FluentisErp.Core.Scm.PurchasePriceLists.FSPurchasePriceListItem, Fluentis.FluentisErp.Core.Scm.PurchasePriceListsnot-null property references a null or transient value Fluentis.FluentisErp.Core.Scm.PurchasePriceLists.ReadWrite.FSWPurchasePriceListItem.MeasurementUnit”. In questo caso come si può notare dall'immagine sopra, l'unità di misura relativa al prezzo di acquisto listino ha generato l'errore in quanto essa è nulla. Infatti il suo inserimento è obbligatorio. 

 Se l'errore è stato commesso nella parte dei parametri il messaggio sarà analogo, il metodo di risoluzione rimane sempre il precedente quindi, in base alla proprietà verificare il corretto inserimento della stessa.

**Attenzione**: Se viene trovata una riga completamente vuota, non verrà comunicato nessuno errore ma l'importazione terminerà lì. Per esempio se la prima riga (riga n.4) è vuota per qualche motivo e sotto (da riga n.5 compresa) si trovano le righe popolate, non sarà importato nulla.

**Attenzione**: Se viene inserito un listino di 10 righe per esempio e alla riga n. 7 si verifica un errore, le prime 6 righe non avendo causato problemi sono state inserite! Se non viene cambiato nessun valore nelle prime 6 righe (e se ovviamente l'errore è stato corretto), riavviando l'importazione non ci saranno problemi, neanche di duplicazione in quanto viene prima cercato se l'articolo è già presente. Se viene cambiato anche solo un valore, tale articolo verrà inserito in quanto visto come un nuovo articolo.

Infine un altro messaggio di errore che potrà capitare è il seguente.

![](/img/it-it/applications/bizlink/import-purchase-price-lists/image26.png) 

Come si può notare dall'immagine sopra riportata, questa tipologia di messaggi sono più facili da interpretare in quanto viene messo il riferimento esatto della cella con relativo errore. In questo caso nella cella F:4 non è presente nessun valore.
