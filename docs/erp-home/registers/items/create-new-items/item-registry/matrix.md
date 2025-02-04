---
title: Matrici
sidebar_position: 18
---

Questo tab si attiva solo se è stata impostata una [Configurazioneconfigurations/tables/CPQ/principal-configurations) nella testata dell'Articolo.           
Viene gestito nel caso in cui sia necessario gestire le matrici per la combinazione degli attributi di un articolo e permette di definire le combinazioni possibili per l'articolo.        
Come prima cosa è necessario assegnare **Codice** univoco identificativo e **[Definizione di matriceconfigurations/tables/CPQ/matrices-definition)** (che contiene il set di attributi che comporrà la matrice); in base alla definizione selezionata, nei tab sottostanti sarà possibile selezionare solo gli [Extra Dataconfigurations/utility/extra-data/extradata/search-extradata) validi per questa matrice. 

Spostandosi nella sezione *Valori dimensione consentiti*, il passo successivo è selezionare, uno ad uno, gli Extra Data dal combo box **Attributo**. Una volta selezionato l'attributo, nella griglia *Risultati disponibili* vengono visualizzati i valori dell'Extra Data (per esempio, se selezioniamo l'attributo Taglia, in questa griglia saranno visualizzati i valori dell Extra Data: XS, S, M, L, XL, ecc.). Una volta selezionati i valori dell'attributo che vogliamo rendere validi per questa matrice, è necessario trascinarli nella griglia *Valori ammessi* per indicare che quei valori saranno validi per le combinazioni della matrice.        
Una volta scelti i valori validi per ogni attributo, automaticamente compariranno dei nuovi tab, uno per ogni matrice di supporto e un tab per la matrice completa, che unirà le varie matrici di supporto per averne una unica con tutte le combinazioni possibili.        
Spostandosi nei tab generati dalle matrici di supporto, è necessario flaggare le combinazioni di valori valide. Per ogni combinazione, quindi, è necessario inserire il flag solo se valida.        
Nel tab della *Matrice completa*, invece, viene generata una matrice unica con tutte le combinazioni valide, impostate nel tab precedente.      
La matrice ora può essere utilizzata negli oggetti per i quali è stata configurata.   