---
title: Gestionare structuri
sidebar_position: 2
---

Din fereastra [Ansambleerp-home/registers/production/bill-of-materials/search-and-insert-assemblies), selectând lista componentelor dorită și facând dublu clic, se pot vizualiza detaliile acesteia.

Lista componentelor este o structură multi nivel, în care sunt relații de tip părinte-fiul. [Fiul-intro#a) poate fi părinte, la rândul său pentru nivele nelimitate până la ultimul nivel, unde se află materialele.

Form-ul este împărțit în două părți: la stânga se află arborele listei componentelor iar la dreapta detaliile aferente diverselor componente.


## Structura listei componentelor

Pentru a vizualiza întregul arbore, efectuați clic pe semnul **+** de lângă codul articolului sau clic pe butonul **Extinde**.  
In acest fel, diferitele niveluri ale listei de materiale se vor deschide în cascada și fiecare nivel va fi reprezentat de pictograme care vor identifica categoria de apartenență a fiecărui articol sau mai bine zis tipul de achizitie al articolului:  

![](/img/it-it/erp-home/registers/production/bill-of-materials/assemblies/structure-management/image02.png) - articolele din producție;  

![](/img/it-it/erp-home/registers/production/bill-of-materials/assemblies/structure-management/image03.png) - articolele din achiziție;  

![](/img/it-it/erp-home/registers/production/bill-of-materials/assemblies/structure-management/image04.png) - articolele din sistem lohn.  

După extinderea meniului, pentru articolul selectat se poate:

> **Inserează component**: inserează un nou subnivel de listă;  
> **Șterge/Copie/Decupează componente**: șterge, copie și mută componentul selectat;  
> **Actualizează structura**: actualizează lista componentelor (de exemplu, dacă a fost modificată descrierea unui articol din listă, această procedură va afișa descrierea actualizată a articolului);  
> **[Parametri MRPconfigurations/parameters/production/mrp-parameters/search-mrp-parameters)** și **[Ciclu de lucruerp-home/registers/production/routes/new-route)**: permit gestionarea acestor informații pentru componentul selectat. 

## Informații părinte/component din listă

Pentru fiecare component din lista selectat, în partea dreaptă a formului sunt afișate datele relative la nivelul superior al componentului selectat (în partea superioară) și al componentului însuși (în partea inferioară).

**Ansamblu**: sunt afișate versiunea listei, clasa, codul, descrierea și varianta nivelului superior, cantitatea nivelului superior celui la care se referă cantitatea componentului.  
Cantitatea poate fi fixă sau variabilă (în cazul în care se schimbă de la o producție la alta).  
**Ansamblu fictiv**: dacă este activ, ansamblul este considerat la elaborarea planificării sau MRP.  
**Notă**: reprezintă eventuala notă aferentă părintelui.  
**Component**: sunt afișate clasa, codul, descrierea și varianta componentului selectat în arbore, prioritatea ordonării cu care trebuie să fie afișat componentul în arbore etc. 
În cazul unui articol *fictiv* sau de *nivel fictiv*, procedurile de *Planificare generală* și *MRP* vor ignora acest component, citind necesarul eventualelor sale componente.

Referitor la component sunt următoarele tab-uri:

### Date generale   

**Cantitate**: reprezintă cantitatea de component prevăzută pentru obținerea cantității de referință a nivelului său superior;   
**Unitate de măsură de utilizat**: poate fi diferită de UM gestională. Cantitatea poate fi *fixă* (și anume, pentru a produce nivelul superior se utilizează întodeauna aceeași cantitate de component) sau *variabilă* (de exemplu, la modificarea cantității părintelui se va putea modifica și cantitatea utilizată de component-fiu);  
**Procent de variație negativ și pozitiv tolerat**: se referă la cantitatea de component în plus sau în minus de utilizat față de cantitatea inserată pentru a respecta toleranța stabilită;  
**Data început/sfârșit valabilitate**: se referă la valabilitatea componentului;  
**Pot fi înregistrate**: dacă este activ, componentul suportă mișcările de gestiune (incărcare/descărcare) cu ordinul de producție care îl utilizează în lista materialelor;  
**Nivel fictiv**: dacă este activ, procedurile de *Planificare generală* și *MRP* vor ignora acest component în timpul expandării necesarului;  
**Critic**: dacă este activ, componentul este critic (acum este o simplă informație).

### Alternative

În acest tab pot fi inserate alternativele componentului în baza priorității, în cazul în care componentul nu este disponibil în momentul producerii acelei liste.

*Planificare generală* și *MRP* vor considera alternativele în funcție de parametrii setați. Pentru *Parametri MRP* trebuie activat flag-ul *Consideră și alternativele materialelor* în [Parametri MRPconfigurations/parameters/production/mrp-parameters/search-mrp-parameters), iar pentru *Planificare generală* același flag, dar în tab-ul *Parametri* al procedurii.

### Faze de descărcare

În acest tab poate fi inserată faza în timpul căreia trebuie să fie descărcat componentul.

Tipurile de descărcare **Automat**, **Cu listă** și **Manual** se setează în Parametri MRP.

În cazul descărcării *manuale*, **Fluentis** consideră automat că descărcarea materialului se face, dacă sunt mai multe faze pentru acel produs, la sfârșitul ultimei faze. Dacă este inserată în acest tab și nu este prezentă în ciclu, procedura inserează faza în ciclul de lucru de nivel superior.

### Ciclu

Afișează lista fazelor care compun [ciclul de lucruerp-home/registers/production/routes/new-route) pentru articolul selectat.

### Componente

Afișează eventualele componente ale articolul selectat, precum și inserarea și modificarea celor existente.

### Referință schemă

În acest tab se poate atașa și vizualiza documentul asociat componentului selectat.

### Note

În acest tab se pot insera eventualele note care vor fi considerate în faza de producție.

### Data extra - Componente

În acest tab pot fi vizualizare și modificate atributele prezente în registrul articolului.

Pentru detalii despre utilizarea comună a form-urilor vezi [Funcționlități, butoane și câmpuri comuneguide/common).