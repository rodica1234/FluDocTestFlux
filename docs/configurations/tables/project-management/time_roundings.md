---
title: Arrotondamenti temporali
sidebar_position: 24
---

La tabella è collocata in Configurazione > tabelle > Gestione progetti > Arrotondamenti temporali

in questa tabella sono configurati gli arrotondamenti da applicare nel piano di fatturazione alle ore di servizio dichiarate negli interventi

**Minuti** indica lo scaglione da cui parte l'arrotondamento, utilizzato per trovare l'arrotondamento da applicare in base alle ore di servizio dell'intervento svolto. 
**Arrotondamento** numero di minuti a cui arrotondare 
**Tolleranza** minuti di tolleranza prima di far scattare l'arrotondamento o l'eventuale scaglione successivo


La tabella ragiona in “scaglioni”.


Se ad es. si vuole arrotondare tutti gli interventi di 2 ore in 2 ore, è sufficiente configurare: 


>> minuti 0 > arrotondamento in minuti 120 > tolleranza 0


>> questo indica che da 0 all’infinito le ore verranno sempre arrotondate di 2 in 2. Tolleranza indica il gap di tempo oltre al quale scatta lo scaglione successivo. 


>> Es. 
- intervento A: 1 h e 30 minuti > fatturato 2 ore
- Intervento B: 2h e 10 minuti > fatturato 4 ore
- Intervento C: 8h e 30 minuti > fatturato 10 ore


Aggiungendo la tolleranza ad es. 15 minuti, l’intervento B verrà fatturato a 2 ore. 
Aggiungendo un altro scaglione possiamo ad es. regolare l’arrotondamento per le ore successive alle 8 ad Es. 

>> minuti 0 > arrotondamento in minuti 120 > tolleranza 0


>> minuti 480 > arrotondamento in minuti 30 > tolleranza 0

Per cui nell’esempio precedente l’intervento C verrà fatturato 8h e 30 minuti Se l’intervento C fosse stato 8h e 15 minuti, sarebbero stati fatturati comunque 8h e 30 minuti, essendo previsto l’arrotondamento alla mezz’ora. 

Se si desidera fatturare ad es. o 4 o 8 ore , si può configurare 


>> Minuti 0 > arrotondamento 240 minuti > tolleranza 0


>> Minuti 240 > arrotondamento 240 minuti > tolleranza 0


>> Minuti 480 > arrotondamento 1 minuti > tolleranza 0 in modo che oltre alle 8 ore non effettui arrotondamenti
