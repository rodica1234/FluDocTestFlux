---
title: Duplicare articole
sidebar_position: 4
---

În această fereastră puteți crea articole noi pornind de la articolele existente cu ajutorul procedurii de duplicare. Astfel va fi posibilă duplicarea informațiilor comune celor două articole.

### Filtre

În zona de filtrare, puteți seta o serie de filtre care vă permit să căutați, în baza de date, articolul sau articolele care au anumite caracteristici pentru a identifica mai ușor un articol care este cel mai apropiat de articolul sau articolele pe care doriți să le creați și care va fi punctul de plecare pentru procedura de duplicare.

Cu ajutorul acestor filtre puteți vizualiza: un singur articol (de exemplu, prin căutarea cu codul articolului) sau mai multe articole aparținând aceleiași clase prin introducerea clasei de articole; articole cu aceleași caracteristici sau cu aceeași categorie de produse (de exemplu, prin căutarea cu caracteristici și categorii de produse); articole cu același nomenclator; toate articolele cu același furnizor preferat, aceeași configurare sau versiune; în cazul materialelor achiziționate, este posibil să căutați articolul folosind codul articolului furnizorului; în cele din urmă, este posibil să căutați articole folosind codul de bare al acestora.

Deschizând combinațiile de **Căutare avansată** și **Loturi/Numere de serie**, puteți decide, de asemenea, să filtrați în funcție de starea articolului (fictiv, arhivat/nearhivat, în epuizare/care nu se epuizează) sau pe baza gestionării articolului (dacă este administrat în loturi, cu număr de serie, gestionat RFID sau RFID unic).

După inserarea filtrelor, efectuați click pe butonul **Caută** din bara de meniu. Aplicația va identifica articolul sau seria de articole care corespund filtrelor selectate și le va raporta în grila de rezultate. Selectați articolul dorit pentru a continua cu duplicarea.

*Butoane specifice*

> **Generează prototipuri articol**: butonul va fi activat atunci când este selectat articolul părinte și va fi codificat articolul fiu în primul tab al ferestrei numit *Articol de duplicat*; în acest fel va fi generat prototipul articolului fiu care va fi ulterior definit și confirmat;  
> **Selectează tot / Deselectează tot**: permit selectarea sau deselectarea tuturor articolelor rezultate după filtrare;  
> **Șterge prototip articol**: permite ștergerea prototipului articolului care a fost generat înainte de a fi creat oficial cu procedura *Confirmă generare prototip*;  
> **Confirmă generare prototip**: permite confirmarea prototipului creat anterior, generând oficial articolul fiu în baza de date.  

În continuare, vor fi detaliați pașii care permit duplicarea articolului.


### Articol de duplicat

Acest tab include tabelul cu rezultate în care este afișat articolul și/sau lista articolelor corespunzătoare criteriilor de filtrare stabilite anterior pentru identificarea articolului inițial.

După ce ați identificat articolul părinte de la care să începeți duplicarea, în secțiunea inferioară vor fi completate automat câteva date:  **Companie**, **Divizie**,  **Clasă articol**  și  **Număr prototipuri**. 

Aceste date pot fi modificate manual cu ajutorul combo-urilor sau prin introducerea unui număr diferit  de prototipuri în câmpul **Număr de prototipuri**.

În schimb, **Codul articolului** va fi creat pe baza compunerii codului articolui ales și a clasei definite în din tabelul **Clase de articole**.

Selectând în tabelul din stânga clasa articolului, în tabelul din dreapta sunt afișate informațiile care indică modul în care s-a stabilit crearea codurilor articolelor aparținând acelei clase de articole.  
De exemplu, codul este compus în ordine, dintr-o extra dată, și anume țara (acronimul) care va alcătui atât codul, cât și descrierea; de o a doua extra dată care va fi culoarea și aceasta va compune, de asemenea, atât codul, cât și descrierea; o altă extra dată care pote fi din nou țara și apoi dintr-un cod progresiv cu lungimea de x cifre și care va fi calculat pornind de la valoarea 1 și, în final, dintr-o valoare fixă care poate fi o litera.

Acest tabel este, de asemenea, rezumat în tab-ul însuși, **Articole de duplicat**, unde vor fi completate informațiile referitoare la valorile de mai sus (deci va fi inserată țara, culoarea etc. în funcție de tipul de extra dată aleasă).

După inserarea datelor, câmpurile **Cod**  și  **Descriere** vor fi completate automat cu datele noului articol.

Ulterior se pot seta parametrii pentru a continua crearea **Prototipului articolului**, făcând clic pe butonul omonim din ribbon bar-ul formului.

Prototipul generat va fi afișat în următorul tab,  următoare **Prototipuri articol**.

### Parametri

Permite selectarea parametrilor care trebuie să reglementeze duplicarea articolului.

Informațiile care pot fi duplicate sunt: costuri, greutăți și dimensiuni, loturi și S/N, achiziții, variante, furnizori preferențiali (în cazul articolelor de achiziție), clienți (în cazul articolelor de vânzare), U.M. alternativ, imagini, note, coduri de bare, informațiile conținute în fila Administrare, data suplimentară, ambalarea etc. Acestea sunt toate informațiile conținute în filele care alcătuiesc articolul și care au fost detaliate în articolele relevante (consultați [Creare articolerp-home/registers/items/create-new-items/create-new-item) și documentele asociate).

Se poate duplica și [Lista componentelorerp-home/registers/production/bill-of-materials/search-and-insert-assemblies) pentru producerea articolului, [Ciclul de lucruerp-home/registers/production/routes/new-route) și [Parametri MRPconfigurations/parameters/production/mrp-parameters/search-mrp-parameters) ai articolului.

Tot în acest tab, există o altă secțiune în care se poate defini o culoarea de umplere a celulei și culoarea textului pentru a-l putea identifica când sunt generate prototipurile: rândurile care conțin date lipsă (de exemplu, dacă una dintre informațiile pe care doriți să le duplicați este goală în articolul părinte, în articolul fiu va fi afișată linia corespunzătoare acelui element evidențiat în culoarea aleasă) și articolele care au fost deja codificate anterior (în cazul în care continuați cu crearea unui articol perfect identic unui articol deja existent în baza de date).

După setarea parametrilor puteți continua duplicarea articolului.

Pentru orice element care nu este detaliat în acest document privind funcționarea comună a formularelor, consultați următorul link [Caracteristici comune, butoane și câmpuriguide/common).