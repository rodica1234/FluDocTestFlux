---
title: Codici Paghe
sidebar_position: 4
---

**Codice** / **Descrizione** : codice e descrizione per identificare il codice paga

**Intervento** : flag utilizzato in qualche tracciato file esportato dall'elaborazione paghe per gestioni esterne a Fluentis.

**Esterno** : se abilitato, verifica la configurazione del tipo intervento collegato alla dichiarazione attività, verificando se nel tipo intervento il flag esterno è abilitato, per impostarlo di conseguenza nel cedolino paga.

**Codice unità di misura** : unità di misura utilizzata nel tracciato del file esportato dall'elaborazione paghe per gestioni esterne a Fluentis.

**Ordinario**: se abilitato, utilizzato come codice di default per le ore ordinarie di lavoro, in caso di mancanza di configurazioni più specifiche.  

**Valori Finali**: se abilitato, il valore associato a questo codice paga verrà inserito nel riquadro "Valori" del Riepilogo per cedolini e verrà escluso dai movimenti

**Rimborso Viaggio**: se abilitato le ore di viaggio identificate con questo codice verranno sommate alle ore ordinarie. Se la somma risulta maggiore di 8 ore, verrà inserita una riga con quantità 1 nei movimenti come identificativo di 1 trasferta indipendentemente dalle ore di viaggio di dichiarate. Se disabilitato, le ore viaggio verranno inserite separatamente per le ore effettivamente dichiarate.

verrà utilizzato per identificare le giornate di trasferta nel riquadro "Movimenti" del Riepilogo per cedolini. Con flag abilitato, se le ore ordinarie sommate alle ore di viaggio

**Festività**: se abilitato verrà utilizzato per identificare le giornate di festività nel riquadro "Movimenti" del Riepilogo per cedolini - configurate nel Calendario giorni festivi

**Straordinario**: se abilitato verrà utilizzato per identificare le ore di straordinario nel riquadro "Movimenti" del Riepilogo per cedolini - calcolate in base agli orari stabiliti per la risorsa 

**Straordinari festivi**: se abilitato verrà utilizzato per identificare le ore di straordinario effettuate di sabato/domenica nel riquadro "Movimenti" del Riepilogo per cedolini - calcolate in base agli orari stabiliti per la risorsa 

**Ferie**: se abilitato verrà utilizzato per identificare le giornate di ferie nel riquadro "Movimenti" del Riepilogo per cedolini - in base alla categoria attività inserita nella dichiarazione attività 

**Permessi**: se abilitato verrà utilizzato per identificare le ore di permessi nel riquadro "Movimenti" del Riepilogo per cedolini - in base alla categoria attività inserita nella dichiarazione attività 

**ROL**: se abilitato verrà utilizzato per identificare le ore di ROL nel riquadro "Movimenti" del Riepilogo per cedolini - in base alla categoria attività inserita nella dichiarazione attività 

**Smart Working**: se abilitato verrà utilizzato per identificare le giornate di smartworking nel riquadro "Movimenti" del Riepilogo per cedolini - identificate in base alle dichiarazioni attività con flag "Smartworking" abilitato, sostituirà il codice paga associato alla categoria di attività

**Non viene esportato**: blocca l'esportazione nel tracciato file per gestioni esterne a Fluentis

**Codice Esportato**: codice utilizzato nel tracciato file per gestioni esterne a fluentis 

