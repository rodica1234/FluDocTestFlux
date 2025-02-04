---
title: Parametri facturi de vânzare
sidebar_position: 5
---

Parametrii Facturilor de vânzare permit setarea de bază pentru gestionarea corectă şi în funcţie de specificul cerut de fiecare societate.

*Buton specific*

**Restaureaza parametrii**:  permite restaurarea parametrilor la valorile inițiale.  

### Generale

**Propune comision pentru toate articolele**: această procedură nu mai este utilizată.  
**Inserează comisioane în tipurile de linie 6 și 7(avans/storno)**: dacă este activ, permite inserarea și gestionarea comisioanelor și pentru tipurile de linii 6 și 7 ale facturilor. Detalii în [Inserare facturiinvoicing/invoicing-intro).   
**Gestionare unitate de măsură dublă**: dacă este activ, permite sistemului să gestioneze unitatea de măsură alternativă în factura de vânzare. Dacă nu este activ, în factură va fi raportată doar unitatea de măsură gestionară a articolului.  
**Propune automat U.M. alternativă**: acest check se activează doar dacă *Gestionare unitate de măsură dublă*  este activ. când este inserat un articol care conţine în registrul său, în tab UM alternativă o UM alternativa implicită, această UM este automat propusă ca UM alternativa pentru articol şi este calculată şi cantitatea alternativă folosind factorul de conversie al acesteia.  
**Recuperare din ziua curentă**: când este activ, recuperarea golurilor de numerotare se realizează automat doar pentru ziua curentă.  
**Recuperare automată**: dacă este activ, în recuperare va fi propus automat primul număr disponibil. Acest parametru se poate activa doar dacă cel anterior a fost activat. Dacă nu este activ, aplicația va permite recuperarea automată, dar numărul va trebui să fie inserat manual.  
**Control disponibilitate**: dacă este activ, va fi verificată disponibilitatea articolului.  
**Disponibilitate obligatorie**: dacă este activ, disponibilitatea articolului facturii va fi obligatorie, şi anume cantitatea nu va putea fi superioară disponibilităţii.  
**Preţuri negative în credit note**: dacă este activ, va fi notificată prezenţa preţurilor pozitive în facturile cu tipul credit note.  
**Exclude ordine clienţi**: dacă este activ, rezervarea ordinelor clienţi nu va fi considerată la calcularea disponibilităţii articolului avizului.  
**Vizualizează dispononibilitatea**: dacă este activ, inserând cantitatea în linie va fi afişată disponibilitatea articolului.  
**Consideră disponibilitate din**:  
> **Sistem lohn**: dacă este activ, documentele din sistem lohn vor fi considerate la calcularea disponibilităţii articolului avizului.  
> **Achiziții**: dacă este activ, documentele de achiziţie vor fi considerate la calcularea disponibilităţii articolului avizului.  
> **Vânzări**: dacă este activ, documentele de vânzare  vor fi considerate la calcularea disponibilităţii articolului avizului.  
> **Prod. planificată**: dacă este activ, documentele din necesar materiale şi comanda de producţie vor fi considerate la calcularea disponibilităţii articolului avizului.  
> **Prod. lansată**: dacă este activ, ordinele de producţie vor fi considerate la calcularea disponibilităţii articolului avizului.  
> **Gestiune**: dacă este activ, înregistrările de gestiune vor fi considerate la calcularea disponibilităţii articolului avizului.  
  
**Control intra-cee**: semnalează faptul că se verifică dacă tipul facturii şi clientul au acelaşi tip Intra CEE.  
**Utilizare barcod**: semnalează faptul că este gestionată coloana barcod din grid articole.  
**Gest. talie şi culoare**: semnalează faptul că sunt gestionate coloanele lot din gridul variantelor.  
**Vizualizează dimensiuni**: dacă este activ, sunt gestionate coloanele dimensiuni (Înălţime, Lăţime, Adâncime) din grid articole.  
**Permite discounturi pentru articole promo**: semnalează faptul că articolele promo gestionează discounturile.  
**Control integritate**: semnalează faptul că este verificată integritatea datelor facturii.  
**Recalculare transport**: semnalează faptul că transportul facturii este calculat automat.  
**Fără cheltuieli inc. în credit note**: semnalează faptul că cheltuielile inc. nu vor fi inserate în scadențele facturilor cu tipul credit note.  
**Blocare document în sărbători legale**: semnalează faptul că documentul nu poate fi inserat cu data corespunzătoare sărbătorilor legale.  
**Verifică vânzări preţ loturi**: semnalează faptul că va fi realizată o verificare pentru preţul unitar al liniei facturii.  
**Cod operator obligatoriu**: semnalează faptul că este obligatorie inserarea operatorului în antetul facturii.  
**Ref. externe ordine**: semnalează faptul că sunt gestionate referinţele externe ale ordinului client asociat la linia articol factură.  
**N. maxim linii**: Reprezintă numărul maxim permis în grid articole.  

### Executare

**Plăţi**: specifică valoarea utilizată pentru plata facturii în cazul executării multiple a ordinelor: primul ordin, registru sau selecţie manuală.  
**Destinatar**: specifică valoarea utilizată pentru destinatarul facturii în cazul executării multiple a ordinelor: primul ordin, registru sau selecţie manuală.  
**Recalculează CDC/CDP:** în cazul în care a fost aleasă generarea avizului pornind din ordinul client cu procedura corespunzătoare, activând acest parametru, sistemul va recalcula centrele de cost și profit, fără a lua în considerare cele stabilite în ordin. Dacă nu este activat, sistemul nu va recalcula aceste date, ci le va păstra pe cele introduse în ordinul clientului.

### Descărcare

**Creează înregistrarea cu data documentului**: când este setat, înregistrarea de gestiune este creată cu data egală cu data facturii, şi nu va fi necesară specificarea datei înregistrării în fereastra de descărcare.  
**Prioritate gestiune şi şabloane de descărcare**: când acest parametru este setat, gestiunea şi şablonul de descărcare sunt citite din liniile facturii, iar dacă nu a fost setat sunt utilizate gestiunea şi şablonul inserate în acest  form de parametri.  
**Încărcare/Descărcare automată**: dacă este activ, descărcarea facturii va fi efectuată automat la activarea flagului Listat. Dacă nu este activ, descărcarea se poate face cu butonul (vezi [Inserare facturi de vânzareinvoicing/header)) sau cu procedura relativă.  
**Gestiune**: Specifică gestiunea care va fi utilizată pentru descărcarea facturii când parametrul Prioritate gestiune şi şablon de descărcare din liniile articol ale documentelor nu este activ.  
**Şablon**: Specifică şablonul care va fi utilizat pentru descărcarea avizului când parametrul Prioritate gestiune şi şablon de descărcare din liniile articol ale documentelor nu este activ.  
**Aviz articole fictive**: dacă este setat, în timpul descărcării facturii, programul controlează dacă în factură sunt prezente articole fictive; dacă acestea există, este lansat un mesaj pentru confirmarea descărcării facturii.  

### Analitic

Aceşti parametri indică prioritatea de căutare a centrelor de cost sau de profit pentru a le atribui articolelor documentului.

Modificarea priorităților se poate face utilizând butoanele:  

> **Mută sus** ![](/img/neutral/common/move-up.png) și  
> **Mută jos**![](/img/neutral/common/delete-cc.png).

*Valori implicite*: CDC sau CDP este preluat din Tipul facturării, dacă există. Pentru informații suplimentare, consultați tabelul [Tip facturareconfigurations/tables/sales/sales-turnover).

Dacă nu este prezent în tipul facturării, sistemul îl va căuta în registrul clientului. Dacă nu este prezent nici aici, acesta va fi căutat în registrul articolului și ulterior în gestiune.

După inserarea parametrilor aceștia trebuie salvați cu ajutorul butonului **Salvează**.