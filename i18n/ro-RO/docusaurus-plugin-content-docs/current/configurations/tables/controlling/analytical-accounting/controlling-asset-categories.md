---
title: Categorie mijloace fixe pentru control
sidebar_position: 2
---

Fereastra se află pe calea **Configurare > Tabele > Controlling > Contabilitate analitică > Categorie mijloace fixe pentru control**


Acest tabel permite definirea unei serii de proceduri standard pentru gestionarea mijloacelor fixe, îndeosebi a conturilor de cost și de fond specifice controlului de gestiune.

Procedurile controlului de gestiune, referitoare la mijloacele fixe, diferă de cele contabile pentru a utiliza logici legate, de exemplu, la cantitățile produse de o anumită mașină.  
Procedând astfel, sunt evitate distorsiunile legate, de exemplu, de criteriile contabile de amortizare care sunt puternic influențate de logica fiscală.

Deci datele contabile și înregistrările conturilor analitice pentru amortizări vor fi regularizate cu calculele efectuate în modulul controlling.

*Câmpuri specifice*

**Cont sintetic/analitic/Descriere cost**: cont care se referă la cota de amortizare calculată în mod specific pentru controlling față de cota obișnuită calculată pentru contabilitate.  

**Cont sintetic/analitic/Descriere fond**: reflectă majorarea fondului de amortizare calculat în mod specific pentru controlling față de contabilitatea generală.  

**Bază de calcul**: valoare pentru care va fi calculată amortizarea pentru controlling.  
> *Valoare patrimonială*: valoare din bilanț care va fi baza de impozitare pentru amortizare;  
> *Valoare obiectivă*: informație extra-contabilă a mijlocului fix;  
> *Valoare reachiziție*: informație specifică din controlling bazată pe costul pentru reachiziția bunului.  

**Tip de calcul**: metodă de calcul care va fi utilizată la calcularea amortizării pentru controlling.  
> *Procent*: sempre un residuo fino a fine vita utile;  
> *Procent perpetuu*: pentru amortizarea mijlocului fix pe durata folosirii lui;  
> *Cantitate*: cantitatea totală pe care mijlocul fix o poate produce pe durata folosirii lui;  
> *Cantitate perpetuă*: daca se continuă înregistrarea cantităților produse de acel centru/mijloc fix, se va continua și amortizarea sa și atribuirea costurilor față de cantitățile produse.  

**Procent**: procent pentru calculul cotei de amortizare (specific pentru controlling);

**Utilizează actualizare procent**: parametru, preluat și în tab *Amortizare pentru controlling* din fișa mijlocului fix, determină ca valoarea mijlocului fix să fie majorat în fiecare an pe baza valorii setate în câmp *Factor de actualizare* în [*Parametri contabilitate* configurations/parameters/finance/accounting-parameters). Această setare este utilă doar amortizării calculate în mod specific în modulul Controlling.

**Recreează valori control**: dacă este activ, permite recalcularea istoricului datelor din controlling în urma schimbării vreunei proceduri. (de exemplu, dacă s-a schimbat vreun procent sau caracteristică a categoriei). 

:::tip Nota
Categoriile inserate în acest tabel, cu setările relative, vor fi preluate în [**Fișe mijloc fix**/fixed-assets/fixed-assets-management) în tab *Amortizare pentru controlling*, pentru a asocia fiecare mijloc fix la categorie.
:::