---
title: Parametri Piani di Carico
sidebar_position: 5
---

I Parametri dei Piani di carico si compongono di un solo tab, Generale.
I flag che permettono la parametrizzazione sono i seguenti.        

**Controlla disponibilità**: questo flag permette di inserire una colonna per visualizzare la disponibilità degli articoli;      
**Verifica disponibilità**: questo flag permette di verificare l'eventuale disponibilità;       
**Disponibilità obbligatoria**: questo flag impedisce l'evasione di una riga articolo senza disponibilità; si attiva una volta impostato il flag Controlla disponibilità;                  
**Visualizza disponibilità negativa**: questo flag permette di visualizzare eventuali disponibilità negative; si attiva una volta impostato il flag Controlla disponibilità;     
**Considera le disponibilità provenienti da:**: è possibile selezionare questi flag se il flag **Controlla disponibilità** è attivo; permette di considerare la disponibilità proveniente dai diversi moduli;      
**Crea in automatico lista di prelievo dal piani di carico**: campo obsoleto;          
**Non usare dimensioni**: questo flag non controlla le dimensioni di articoli e UDC per la comparazione con l'[Automezzomotorvehicles/motorvehicle), evitando blocchi nella spedizione. Senza questo flag, se il volume degli articoli è maggiore del volume dell'automezzo il programma ci farà utilizzare più Automezzi.            
**Visualizza righe articcoli presenti in piani di carico aperti**: questo flag permette di visualizzare (con un colore impostato nel campo 
**Colore riga in altro piano di carico aperto**) le righe prese in carico da un altro collega nei piani di carico aperti salvati e non;      
**Proposta ricerca data consegna**: questo campo imposta, nel filtro di ricerca dei piani di carico, le date di consegna da controllare dando la possibilità di sceglire tra: la settimana in corso, da oggi in avanti, oppure nessuna data proposta;         
**Colore riga disponibile**: in questo campo è possibile inserire il colore con cui visualizzare le righe articolo che hanno disponibilità;       
**Colore riga non disponibile**: in questo campo è possibile inserire il colore con cui visualizzare le righe articolo che non hanno disponibilità;      
**Colore riga in altro piano carico**: questo flag colora le righe inserite già in un altro piano di carico salvato;      
**Colore riga in altro piano carico aperto**: questo flag colora le righe inserite in un altro piano di carico non salvato, quindi magari in uso da un collega.