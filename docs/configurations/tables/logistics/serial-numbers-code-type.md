---
title: Tipo codice serial number
sidebar_position: 27
---

La tabella si trova sul percorso **Tabelle > Logistica > Tipo codice serial number**.

In questa tabella è possibile codificare i *Tipi di codici serial number* da gestire poi nel database.

**Ricerca Tipi codice serial number**

La form si compone di un'area di filtro e da una di risultato. Una volta impostati i filtri desiderati, basterà cliccare sul pulsante **Ricerca** per visualizzare i risultati nell'aria di risultato.

**Inserimento Tipi codice serial number**

Per poter inserire nuove codifiche è necessario cliccare nella griglia sulla prima riga vuota oppure premere il pulsante **Nuovo**. Inserire il **Codice** e la **Descrizione** del tipo codice serial number, salvare la riga e decidere quali parametri si vogliono utilizzare per la composizione del tipo codice serial number appena creato.

Per ogni parametro utilizzato si può decidere da quanti caratteri deve essere formato ed eventualmente anche il carattere di riempimento da utilizzare. Per esempio, con il parametro “Numero progressivo” impostando come carattere di riempimento lo “0” e come Lunghezza 5 verranno creati lotti con come primo numero lo 00000, poi lo 00001, poi lo 00002 e così via. 

Il **Tipo codice serial number** deve poi essere agganciato all'*Anagrafica articolo* nel campo omonimo situato nel tab [Lotti e serial numbererp-home/registers/items/create-new-items/item-registry/lots-and-serial-number), in modo che nelle procedure che creano automaticamente il codice serial number per l'articolo in questione il SN stesso venga generato secondo le regole impostate qui.

**Dettagli tipo codice serial number**

> *Classe*: riporta la classe dell'articolo;    
> *Matricola*: riporta il codice articolo;     
> *Caratteristica*: riporta la caratteristica dell'anagrafica articolo;     
> *Cat. Merceologica*: riporta la categoria merceologica dell'anagrafica articolo;    
> *Tipo Articolo*: riporta il tipo articolo dell'anagrafica articolo;    
> *Variante*: riporta la variante dell'articolo;     
> *Caratteri alfabetici*:  permette di inserire dei caratteri alfabetici.        

Per tutto quanto non dettagliato in questo documento sul funzionamento comune delle form fare riferimento al seguente link [Funzionalità, pulsanti e campi comuniguide/common).