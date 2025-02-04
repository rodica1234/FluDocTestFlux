---
title: Riferimenti
sidebar_position: 1
---

L'anagrafica banca presenta nel tab **Riferimenti** i dati fondamentali relativi al conto corrente da indicare:

**ISO**: indicare i primi 4 caratteri dell' IBAN, quindi 2 caratteri per il codice nazione (es. IT) + 2 per il codice istituto;

I codici **ABI**, **CAB**, il numero di **C/C** (per le banche italiane si devono indicare 5 caratteri per abi e cab - quindi anche lo zero iniziale - e tutti i 12 caratteri del conto corrente italiano), il codice internazionale **Swift**, il **CIN**;

**Divisa**: specificare la divisa con il quale è espresso il conto bancario;

E' possibile inserire alcuni dati utili per l'interazione con **DocFinance®** (programma di tesoreria esterno al sistema):

**R.B.N.**: rappresenta la tipologia di rapporto (es Conto corrente, conto valutario...)

**Banca Doc Finance**: il nome della banca da utilizzare per l'analisi flussi per banca ed altre funzioni permesse da DocFinance

**Codice banca**: un eventuale codice banca libero;

**SIA** codice per l'invio dei file telematici italiani, es. per le Ricevute bancarie, (se non indicato viene utilizzato quello di default inserito nella tabella Società, Home>Tabelle>Generali).

**Banca d'appoggio** consente di collegare l'anagrafica banca al relativo codice di [**banca d'appoggio**configurations/tables/general-settings/reference-bank.md) generica. Questo può servire per canalizzare automaticamente i movimenti finanziari dei partitari e valutarli nelle analisi di cash flow.

La sezione legata alla *Fatturazione elettronica* non è attualmente in uso.