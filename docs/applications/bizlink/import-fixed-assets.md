---
title: Importazione Cespiti
sidebar_position: 2
---


Il foglio excel (template) per l'importazione dei cespiti nel modulo Amministrazione permette di popolare le schede cespite sulla base delle categorie cespiti che devono essere già presenti nel db.

**Codice Categoria:** deve essere già presente nel db e sarà usato nella scheda cespite importata

**Precodice:** facoltativo, da gestire solo se attiva la gestione del precodice indicando il precodice da utilizzare nella numerazione

**Numero cespite:** utilizzare un numero libero

**Centro di costo:** facoltativo, serve per assegnare un centro di costo nella scheda cespite per la successiva movimentazione in fase di ammortamento

**Data Acquisto:** Obbligatorio, è la data di carico del costo storico

**Numero Documento / Data Fatt Acquisto:** facoltativi, utili per indicare il riferimento alla fattura d'acquisto

**Fornitore  Acquisto:** Facoltativo, serve per popolare il campo del fornitore del bene nella scheda cespite, compilare con il nomignolo dell'anagrafica fornitore

**Tot Valore Patrimoniale:** è il costo storico del cespite caricato con la data della colonna Data Acquisto

**Tot Fondo Ammortamento:** è il totale fondo ammortamento accumulato al momento del caricamento / importazione della scheda cespite. Attenzione, questo valore sarà caricato come previsto per il carico di un cespite pregresso (compilando almeno una riga di ammortamento) e pertanto viene utilizzato il dato presente nella successiva colonna **Anno**.

**Perc. Ammortamento da Utilizzare:** Facoltativo, serve nel caso si desideri caricare nella scheda cespite una percentuale di ammortamento particolare per il cespite in questione, se non valorizzato non sarà scritto nulla nel campo corrispondente e i successivi ammortamenti saranno eseguiti secondo la percentuale della categoria di appartenenza.