---
title: Nuovo ExtraData Semplice
sidebar_position: 2
---

Gli extradata è che si dividono in due categorie: 

 - **Semplici**: sono delle proprietà agganciate agli oggetti

 - **Oggetti**: sono dei veri e propri oggetti a sé stanti

Ognuno dei due ha una procedura, partiamo analizzando gli extradata semplici.


### Creazione Extradata

Andare in **Home > Utilità > ExtraData > ExtraData** e cliccare sul pulsante **Nuovo** extradata.

Nelle immagini sottostanti si vede la prima parte della creazione.

![](/img/it-it/configurations/utility/extradata/new-extradata-simple/image01.png)        

1. selezionare il radio button corrispondente a **Semplice**.

2. inserire il **Codice** che identificherà l'extradata.

3. inserire il **Nome** geo localizzato dell'extradata (deve essere quindi una parola presente nel dizionario altrimenti dovremmo aggiungerla).

4. selezionare il **Tipo di dati** tramite il menu a tendina. 

5. inserire una **Descrizione** che spesso corrisponde al **Nome**.

6. se ha una scadenza inserire **Data inizio/fine validità** altrimenti non serve inserirli.

7. se necessario, inserire i **Diritti di modifica e visualizzazione**.

8. selezionare lo **Stereotipo** del valore (la modalità di visualizzazione della colonna Valore in tutte le gestioni dei documenti).

Lo stereotipo è attivabile per il *Tipo di dati*: Date (DateTime e Time); Decimal (Currency e Numeric); Double, Float e Long (Numeric); Int (Color, Numeric e Year); Short (Numeric e Year); String (MultiLine).

Lo stereotipo è attivabile per tutti gli oggetti attivati e per singolo oggetto. 

Negli ExtraData, presenti in tutte le gestioni dei documenti, per le colonne: Descrizione (per gli ExtraData di tipo Semplice) e Note è stata implementata la proprietà Multi-linea (attivabile premendo la combinazione dei tasti MAIUSCOLO+INVIO).

Nella griglia **Attivazioni**, si vede l'elenco degli oggetti nei quali l'extradata sarà possibile vederlo e valorizzarlo.

Per aggiungerne uno **Nuovo** basta andare a scrivere nell'ultima riga presente nella tabella.

I flag **Obbligatorio** e **Da stampare** identificano se rispetto all'oggetto in cui è visibile l'extradata, è obbligatorio l'inserimento e può essere stampato.

L'**Ordinamento** serve semplicemente per la visualizzazione, quando aggiungiamo l'extradata; l'ordine con cui poi ci appariranno gli extradata all'interno dell'oggetto è deciso da questo campo.

![](/img/it-it/configurations/utility/extradata/new-extradata-simple/image02.png) 

9. Aggiungere extradata nella form Fluentis

Per poter aggiungere l'extradata direttamente da uno di questi oggetti, nell'apposita maschera di Fluentis premere tasto dx sulla riga blu (con  ![](/img/neutral/common/filter.png)) e cliccare su **Aggiungi extradata di primo livello**. Questo procedimento va eseguito per ogni extradata che vogliamo aggiungere. Una volta aggiunto uno, potremmo anche **Aggiungere degli extradata figli**.

![](/img/it-it/configurations/utility/extradata/new-extradata-simple/image04.png) 

Nel menu a tendina come in figura selezionare l'extradata desiderato. È possibile quindi valorizzare l'extradata.

![](/img/it-it/configurations/utility/extradata/new-extradata-simple/image05.png) 

10. Infine si può inserire la **Propagazione**.

![](/img/it-it/configurations/utility/extradata/new-extradata-simple/image06.png) 

Nella propagazione va inserita la proprietà esatta in cui se valorizzato lì l'extradata verrà riportato automaticamente nell'oggetto selezionato in **Attivazioni**. C'è la possibilità di inserire più propagazioni.

### Esempio

Prendiamo l'immagine con la propagazione sopra, ossia se nel conto viene valorizzata la profondità (“Propagazione”), inserendo tale conto nella creazione di una nuova fattura, la profondità verrà importata in modo automatico all'interno della sezione extradata della testata della fattura (“Attivazioni”).

![](/img/it-it/configurations/utility/extradata/new-extradata-simple/image07.png) 

Nell'immagine sopra si vede come nella sezione Extradata si stia impostando il valore di profondità. Salvare il tutto una volta terminate le modifiche.

Ora creare una nuova fattura e come cliente/fornitore inserire lo stesso dell'immagine vista in precedenza e si nota che in automatico viene importata la profondità.

 ![](/img/it-it/configurations/utility/extradata/new-extradata-simple/image08.png)

Vedi anche [Inserimento Extradata Semplice in Xtrareportconfigurations/utility/extra-data/extradata/insert-extradata-simple-in-xtrareport).

Vedi anche [Nuovo ExtraData Oggettoconfigurations/utility/extra-data/extradata/new-extradata-object).