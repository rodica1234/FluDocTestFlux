---
title: Definizione di matrice
sidebar_position: 3
---

Aprendo questa tabella si accede alla maschera di ricerca delle definizioni di matrice precedentemente codificate e punto di partenza per crearne di nuove.        
Aprendo una definizione sono presenti i dati di testata e due tab sottostanti.          

## Testata

I dati di testata sono i seguenti:
- **Tipo**: campo non attivo in questa 
- **Codice/Descrizione**: identificativi univoci della definizione.
- **Oggetto Business**: contiene l'oggetto business per cui è valida questa definizione.    

## Tab Dimensione matrice

In questa sezione vengono selezionati gli [Extra Dataconfigurations/utility/extra-data/extradata/search-extradata) da utilizzare per creare la matrice, come ad esempio *Taglia* e *Colore*. Per costruire una matrice, è possibile utilizzare Extra Data di tipo tabellare che forniscono i valori necessari a popolare la matrice. Nel tab, all'interno della griglia a destra, denominata *Valori dei risultati*, sono elencati tutti gli Extra Data validi per l'oggetto business specificato in testata. Da questo elenco, è possibile scegliere gli Extra Data che andranno a popolare la matrice e trascinarli nella griglia a sinistra. In questo modo, si specifica che, ad esempio, *Taglia* e *Colore* comporranno la matrice. Quali valori di taglia e colore saranno validi lo andremo a specificare nella tabella [Matrici di istanzaconfigurations/tables/CPQ/instance-matrices).         
In questa griglia è possibile associare anche la posizione negli assi X e Y dei dati. 

## Tab Definizione matrice supporto

Quando è necessario utilizzare più di due Extra Data per comporre la matrice, si deve ricorrere a una matrice di supporto. Questa è suddivisa in due griglie.         
La griglia di sinistra, chiamata *Matrici*, contiene le colonne **Codice** e **Descrizione**, che identificano le diverse matrici di supporto. È consigliabile assegnare un codice e una descrizione appropriati per distinguere chiaramente gli Extra Data utilizzati e facilitare l’identificazione della combinazione di riferimento.      
Nella griglia di destra, denominata *Matrix dettaglio*, vengono inseriti gli Extra Data validi per la matrice di supporto selezionata nella griglia di sinistra. È possibile scegliere solo gli Extra Data validi per questa definizione, già inseriti nel tab precedente.