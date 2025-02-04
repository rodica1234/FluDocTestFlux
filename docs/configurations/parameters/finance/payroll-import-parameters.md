---
title: Parametri importazione paghe
sidebar_position: 3
---

### Campi della tabella

I presenti parametri sono necessari per gestire la funzionalità di importazione registrazioni contabili relative alle buste paga dipendenti attraverso file .csv (formato Zucchetti) acquisite tramite servizio bizlink.

Qui si imposta per ogni società il **giorno**, la **causale** contabile e l'**utente** da utilizzare per creare la registrazioni.

**Permetti ricerca in tabella**: (impostare sempre) fa ricercare i mapping (transcodifica) dei conti nella apposita tabella di transcodifica di cui sotto;
 
**Raggruppa per centro di costo / Raggruppa per Dipendente**: indica a Fluentis che tipo di file aspettarsi (da Zucchetti si può creare un file raggruppato per cdc o per dipendente (differiscono per numero e posizione delle colonne da leggere).

Nota: Gli ultimi due campi non sono legati a questo import paghe, ma all’import per il controlling che al momento si esegue tramite importazione da foglio excel e quindi non sono in realtà utilizzati.

### Generalità Importazione paghe Bizlink

La funzionalità prevede la creazione di una cartella monitorata dal servizio Bizlink dove depositare i file da importare ottenendo l'elaborazione ed importazione in automatico. 

Nonostante il fatto che sia possibile creare la cartella che viene monitorata dal connettore bizlink per l’import direttamente sul server, per ragioni di sicurezza si preferisce evitare di far accedere utenti al server ed impostare la cartella di importazione su un pc client.

### Configurazione del servizio Bizlink locale e degli altri parametri necessari

1. Creare un utente bizLink in Arm (form Utenti Bizlink) che verrà utilizzato sul pc interessato per l’importazione.
Esempio: Nome: PC-Paghe Password: xxxxx Griglia Connessioni: Spuntare E' attivo sulla connessione di produzione effettivamente utilizzata

2. Installare bizLink su pc manualmente
    Tramite il comando eseguito da cmd come amministratore.

net_dir>\InstallUtil "< fluentis_dir>\Tools\Service \Fluentis.BizLink.Tools.Service.exe"'

Ove net_dir è la cartella di installazione del framework .net e si trova in %WINDIR%\Microsoft.NET\Framework64\versione framework, mentre fluentis_dir è la cartella di installazione di Fluentis.

![](/img/it-it/configurations/parameters/finance/payroll1.png)

3. Copiare file cartella bin di bizLink da server a client (ogni aggiornamento di versione sarà da fare) tranne il file di log (evidenziato nell’immagine sotto)

![](/img/it-it/configurations/parameters/finance/payroll2.png)

Il percorso standard è questo: C:\Program Files (x86)\Fluentis\Fluentis\Bin\Tools\Service

4. Modificare connettore chiamato: Zucchetti_PaymentData in questo modo (in particolare aggiungendo l'utente bizlink - PC-Paghe - appena creato nel campo Identificativo)

![](/img/it-it/configurations/parameters/finance/payroll5.png)

I percorsi dei file (esempio C:\Temp\Bizlink\Incoming ; C:\Temp\Bizlink\Processed ; C:\Temp\Bizlink\Failed) devono essere presenti sul pc dell’utente e la pool Fluentis deve poter leggere da quella cartella. Se non dovesse funzionare provare a dare come permessi everyone full control.
Impostare anche un identificativo da riportare successivamente sul file di config di bizLink.



5. Sistemare il file config di bizLink con user, pwd, server e identifier. Il file si chiama Fluentis.BizLink.Tools.Service.exe.config. 
Modificarlo come da immagine sotto.

![](/img/it-it/configurations/parameters/finance/payroll4.png)
 
In questo modo il servizio di bizLink installato sul pc, lavorerà solo con quel connettore.

6. Avviare bizLink


### Gestione del file da importare



![](/img/it-it/configurations/parameters/finance/payroll7.png)

Prestare attenzione al fatto che attualmente in Fluentis è richiesto di formattare mese/anno mentre solitamente il file viene esportato da Zucchetti come data intera, occorre cambiare in excel finchè non sarà rivisto.

![](/img/it-it/configurations/parameters/finance/payroll8.png)

Occorre poi gestire le transcodifiche della società e del piano dei conti.

![](/img/it-it/configurations/parameters/finance/payroll9.png)

Ed eventualmente dei centri di costo.

Bisogna infine gestire I PARAMETRI IMPORTAZIONE PAGHE come sopra specificato.