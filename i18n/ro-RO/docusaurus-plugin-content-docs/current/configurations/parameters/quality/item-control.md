---
title: Parametri control articole
sidebar_position: 1
---

Parametrii se găsesc pe calea **Parametri > Calitate > Parametri control articole**.

Datele din acest form sunt utilizate pentru a propune informații în: **Fișe tehnice**, **Planuri de control**, **Control articole**, **Certificate de analiză**.

### General 

În acest tab se pot insera unele date care pot fi propuse în mod implicit în documentele modulul *Control articole*.

### Tipuri de teste

Permite inserarea datelor care vor fi propuse în *Tipuri de teste*.   
**Tip valoare**: tip propus la introducerea unui *Tip de test*.   
**Tip limită**: tip propus la introducerea unui *Tip de test*.   

### Fișe tehnice

În acest expander se pot insera datele care vor fi propuse în *Fișe tehnice*.   
**Tip fișă tehnică**: tipul propus la introducerea unei *Fișe tehnice*.   
**Responsabil**: angajatul propus ca responsabil la introducerea unei *Fișe tehnice*.   
**Tip declarație în Articole**: tipul propus la introducerea unui *Articol asociat* al unei *Fișe tehnice*.   
**Tip declarație în raport**: tipul propus în *Tip declarație de tipărit în cazul în care articolul nu dispune de aceasta* în raport *Fișă tehnică*.   

### Planuri de control

În acest expander se pot insera datele care vor fi propuse în *Planuri de control*.   
**Tip plan de control**: tipul propus la introducerea unui *Plan de control*.   
**Responsabil**: angajatul propus ca responsabil la introducerea unui *Plan de control*.   

### Certificate de analiză

În acest expander se pot insera datele care vor fi propuse în *Certificate de analiză*.   
**Tip certificat**: tipul propus la introducerea unui *Certificat de analiză*.   
**Responsabil**: angajatul propus ca responsabil la introducerea unui *Certificat de analiză*.   

## Control articole

În acest tab se pot insera datele:
> - pentru a fi propuse implicit în *Control articole*;   
> - pentru a defini culorile stării *Controlului*;   
> - pentru a seta parametri de gestionare;   
> - pentru căutarea și asocierea automată a *Planurilor de control* la *Control articol*.   

**Activare detectare multiplă valori**: permite activarea posibilității de a detecta mai multe valori pentru fiecare test, în toate tipurile de documente.   
**Aprobare automată valori detectate**: indică *Aprobarea* automată a *Testului* la detectarea *Valorilor* și atribuirea automată a *Rezultatelor*.   
**Propune rezultat negativ**: este o listă de valori predefinite de sistem care indică modul de atribuire a neconformității unui *Test*.   
Metodologia este luată în considerare doar pentru detectarea *Testelor* de tip *Numeric* în *Detectarea multiplă a valorilor*.  
Valori predefinite sunt:   
> - *la prima valoare detectată neconformă*;   
> - *la media aritmetică a valorilor detectate (doar valori numerice)*.   
**Tip de rezultat negativ**: tipul în cazul *Testelor* neconforme.   
**Tip de rezultat pozitiv**: tipul în cazul *Testelor* conforme.   

### Tipuri de documente pentru import

Acest expander permite inserarea datelor care vor fi utilizate în timpul *Importării articolelor de controlat* și de propus în *Control articole*.   
Tabelul conține tipurile de documente gestionate de *Control articole*.   
Sunt tipuri predefinite de sistem și nu este posibil să se introducă sau să se elimine altele noi. Valorile predefinite sunt:
> - *Recepție mărfuri*;   
> - *Aviz de achiziție*;   
> - *Factură de achiziție*;   
> - *Declarație de producție*;   
> - *Fază ordine de producție*;   
> - *Reintrare sistem lohn*;   
> - *Înregistrare* de încărcare*.   

În listă, pentru fiecare tip de document, se poate insera:   
**Implicit**: indică tipul de document propus în filtrele de căutare; poate fi selectat un singur tip sau niciunul.   
**Detaliu articol**: conține o listă de valori predefinite de sistem care identifică tipul de detaliu de controlat al *Articolului* pentru tipul de document inserat. Valorile predefinite sunt:   
>- *Niciunul* - linia *Articol* nu va lua în considerare niciun detaliu;   
>- *Lot* - linia *Articol* va considera ca detaliu *Lotul*;   
>- *S.N.* - linia *Articol* va considera ca detaliu *Numărul de serie*;   
>- *UdI* - linia *Articol* va considera ca detaliu *Unitatea de încărcare*;   
>
**Mult.**: permite activarea *Detectării multiple a valorilor* în *Control articole* pentru tipul documentului.   
> Pentru a fi luat în considerare trebuie să fie activat parametrul general *Activează detectarea multiplă a valorilor*.   
**Tip control**: informație de propus la introducerea unui *Control articole* pentru tipul de document specific.   
**Tip plan de control**: în timpul *Importării articolelor de controlat*, excluzând tipurile de documente de producție (*Declarație de producție* și *Fază ordin de producție*), este *Tipul de plan de control* care are prioritate mai mare pentru căutarea *Planului de control* de asociat la *Control articol*.

### Culori rânduri Control articole

Permite inserarea diverselor culori pentru a recunoaște diferitele stări ale unui *Control articol*.   
Aceste culori sunt aplicate în filtrul *Control articole*.  
**Tip**: este starea *Controlului articol* la care se asociază culorile.   
Tabelul conține valori predefinite de sistem și nu se pot insera, elimina sau modifica.  
**Fond**: este culoarea aplicată fundalului rândului *Controlului articol* pentru starea specifică.   
**Text**: este culoarea aplicată textului rândului *Controlului articol* pentru starea specifică.   

### Personalizare date pe tip de document

Permite inserarea *Proprietății* pentru tipul de document sursă în lista datelor din *Control articole*.   
Tabelul conține aceleași tipuri de documente raportate în **Tipuri de documente pentru import**.   
Sunt tipuri predefinite de sistem și nu pot fi eliminate sau inserate altele noi.    
Cu dublu clic pe celulă este posibil să selectați *Proprietatea* dorită a documentului.  

:::tip *Exemplu:*   
Pentru tipul de document *Factură de achiziție* se poate adăuga valoarea *Proprietății* de antet *Referinţa voastră*.   
Cu dublu clic pe coloana *Text 01*, aplicația deschide help-ul proprietăților liniei documentului *Factură de achiziție*.   
Deschideți referința *Invoice (Factură)*, selectați proprietatea *Your reference (Referinţa voastră)* și apăsați butonul *Selectează*.   
În casuța în care a fost efectuată selecția va apare proiprietatea *YourReference*.
:::

### Personalizări antet coloane pe tip de document

Permite inserarea *Titlului de proprietate* care corespunde *Proprietăților* selectate în lista *Personalizări antet coloane pe tip de document* și care vor fi afișate în lista de date din *Control articole*.   
Tabelul conține aceleași tipuri de documente raportate în **Tipuri de documente pentru import**.   
Sunt tipuri predefinite de sistem și nu pot fi eliminate sau inserate altele noi.    
Cu dublu clic pe celulă este posibil să selectați *Proprietatea* dorită a documentului.   

:::tip *Exemplu:*   
Pentru tipul de document *Factură de achiziție* se poate adăuga antetul corespondent exemplului făcut anterior pentru valoarea *Proprietății* de antet *Referinţa voastră*.   
Cu dublu clic pe coloana *Text 01* sau tastând manual *Element din dicţionar* inserați *Referinţa voastră*.