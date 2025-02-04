---
title: Exemplu
sidebar_position: 6
---

Creare extra data *culoare* activat în **Registrul articol** și **Registrul furnizor**, dar nu și în celelalte documente.

*Creare Extra Data*

- inserați în *Antet*:       

**Cod**: identificativ;            
**Tip conținut**: la alegere între [Obiectconfigurations/utility/extra-data/extradata/new-extradata-object), [Simpluconfigurations/utility/extra-data/extradata/new-extradata-simple) sau Data source;       
**Tip Widget**: se poate alege între un widget cu combo box sau cu cod/descriere cu completare automată;        
**Nume**: inserați *culoare deschisă*, prezentă în dicționar;            
**Descriere**: inserați *culoare deschisă*;                        
**Obiect business**: inserați  FSColor pentru că de aici sunt preluate diversele culori.         
Se pot specifica **Drepturile** pentru vizualizare și/sau modificare și **Datele de valabilitate**.       

![](/img/it-it/configurations/utility/extradata/example/header.png) 

- inserați în tabelul *Activări*:   

**Obiectul părinte**: dorim ca ExtraData să se activeze în FSPurchaseOrderItem și în  FSItem;           
**Proprietate**: ExtraData.        

![](/img/it-it/configurations/utility/extradata/example/active.png) 

- inserați în tabelul **Propagare**, selectând obiectul părinte FSPurchaseOrderItem:  

**Cale proprietate**: Item, deoarece ordinul furnizor preia ExtraData din articol;      
**Proprietate colecție**: ExtraData.

![](/img/it-it/configurations/utility/extradata/example/prop.png) 

- salvați și închideți Extra Data.

*Utilizare Extra Data*

- în **Registrul articol** alegeți extradata în tab **Extra Data**.  
Pentru a adăuga ExtraData poziționați-vă în tabel > efectuați *click dreapta* > alegeți *Adaugă Extra Data*.

![](/img/it-it/configurations/utility/extradata/example/item.png) 

- creați o *Cereri de achiziție* în care inserați articolul.     
- deschideți procedura **Creare automată ordin**, selectați CDA și creați din aceasta un *Ordin furnizor*.  
- deschideți ordinul furnizor creat și în tab **Articole** > **Extra Data** , veți găsi afișat ExtraData creat.   

![](/img/it-it/configurations/utility/extradata/example/order.png) 

