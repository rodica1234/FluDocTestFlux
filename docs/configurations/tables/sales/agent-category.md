---
title: Categorie agenti
sidebar_position: 2
---

La tabella si apre tramite il percorso **Tabelle > Vendite > Categorie agenti**.

Consente di inserire nuovi record o di ricercare quelli già esistenti per visualizzarli, modificarli oppure cancellarli.

La form si compone di un'area di filtro e da una di risultato. Una volta impostati tutti i filtri desiderati, basterà cliccare sul pulsante **Ricerca** per visualizzare i risultati all'interno della griglia di risultato.

Per poter inserire nuovi record è necessario cliccare nella griglia sulla prima riga vuota oppure premere il pulsante **Nuovo**. 

La tabella **Categorie agenti**, unica per le società presenti nel database, è la tabella di base per i calcoli enasarco/firr degli agenti.

### Categorie agente

La griglia contiene le categorie per la specifica dell'Enasarco, quali:

**Codice/Descrizione**: codice e descrizione che indica il codice di riferimento agente. Il codice deve essere univoco;

**Min Enasarco**: valore in base trimestrale. È l'importo minimo del contributo enasarco (esempio 250,50 per monomandatario);

**Max Enasarco:** valore in base annuale. È l'importo massimo dell'imponibile provvigionale ai fini del contributo enasarco (massimale) e una volta raggiunto, non è più possibile fare versamenti previdenziali in favore dell'agente (esempio 44.727,00 per monomandatario);

**Tipo ritenuta**: è il tipo di ritenuta da applicare all'agente. Per ulteriori approfondimenti fare riferimento alla sezione della parte amministrativa [Tipi Ritenutaconfigurations/tables/finance/withholding-tax-types). Si consiglia di impostare questo codice in anagrafica agente.

**Perc Enasarco**: percentuale dell'Enasarco a carico dell'agente;

**Perc Enasarco Ditta:** percentuale dell'Enasarco a carico della ditta;

**Imp Enasarco**: la percentuale (100%) di applicazione delle percentuali Enasarco sul totale provvigionale;

**Monomandatario:** Flag che identifica le categoria monomandatarie;

**Plurimandatario:** Flag che identifica le categoria plurimandatarie;

**Generico:** Flag che identifica le categorie generiche;

### Firr

La griglia viene utilizzata per il calcolo del FIRR (Fondo indennità risoluzione rapporto):

![](/img/it-it/configurations/tables/sales/agent-category/image03.png)

**Riga**: identifica il numero di riga. Deve essere univoco su tutti le categorie agenti;

**Percentuale**: percentuale del tributo;

**DA provvigioni/A provvigioni**: limite inferiore e limite superiore di questo tributo;

Questa griglia dovrà essere popolata seguendo le indicazioni previste per questo trattamento

Aliquote per agenti monomandatari

![](/img/it-it/configurations/tables/sales/agent-category/image04.png) 

Aliquote per agenti plurimandatari

 ![](/img/it-it/configurations/tables/sales/agent-category/image05.png)

Per tutto quanto non dettagliato in questo documento sul funzionamento comune delle form fare riferimento al seguente link [Funzionalità, pulsanti e campi comuniguide/common).

