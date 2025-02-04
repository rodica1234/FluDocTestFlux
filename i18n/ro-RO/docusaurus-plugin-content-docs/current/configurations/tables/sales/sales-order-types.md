---
title: Tipuri ordine client
sidebar_position: 19
---

Tabelul se află pe calea **Configurare > Tabele > Vânzări > Tipuri ordine client**.  

Permite inserarea datelor noi sau căutarea celor existente pentru a le vizualiza, modifica sau șterge.

Conține o zonă de filtrare și una de rezultate. După ce ați setat toate filtrele dorite, efectuați clic pe butonul **Caută** pentru a vizualiza datele în tabelul de rezultate.

Pentru a insera datele, efectuați clic pe butonul **Nou**.

*Câmpuri specifice*

**Tip** și **Descriere**: reprezintă tipul și descrierea documentului.   

**Numerotare**: consultați [Numerotări Fluentisconfigurations/tables/fluentis-numerations).   

**Creare automată proiecte**: dacă este setat, în momentul inserării ordinului clinet, aplicația va crea antetul comenzii de vânzare cu același număr al ordinului client și îl va asocia în antetul aceluiași ordin. Dacă nu este setat, aplicația nu va crea antetul comenzii.  

**Confirmă ordin automat**: dacă este setat, ordinul poate fi executat din docmentele: aviz, dispoziție de livrare, facturi de vânzare cu condiția ca ordinul să fie listat și confirmat. În plus, permite și inserarea automată a datei confirmării, completând-o cu data inserării ordinului;

**Exclude blocare**: dacă este activ, aplicația nu va considera blocarea documentului datorită depășirii creditului acordat, permițând astfel utilizatorului să insereze și să listeze documentul;

**Executare tip aviz**: reprezintă tipul de aviz care va fi generat cu ajutorul procedurii automate *Creare aviz din ordine clienți*;

**Executare tip factură**:  reprezintă tipul de factură care va fi generat cu ajutorul procedurii automate *Creare facturi din ordine clienți*;

**Executare tip dispoziție livrare**:  reprezintă tipul de dispoziție de livrare care va fi generat cu ajutorul procedurii automate *Creare dispoziție din ordine disponibile sau din planuri de încărcare*;

**Blocare document listat**: dacă este activ, nu permite modificarea ordinului client care are parametrul *Listat* activ în antet;

**Credit acordat**: dacă este activ, ordinul de acest tip va suporta controlul creditului acordat;

**Cash flow**: dacă este activ, ordinul de acest tip va suporta calculul [cash flow-uluitreasury/cash-flow/cash-flow/search-cash-flow);

**Gestiune** și **Descriere gestiune**: reprezintă [gestiuneaconfigurations/tables/logistics/warehouses) articolelor prezente în acest tip de ordin; 

**Șablon** și **Descriere șablon gestiune**: reprezintă *șablonul pentru înregistrarea* articolelor utilizate în acest tip de ordin;

**Executare cantitate articol netotalizată**: dacă este activ, în momentul executării ordinului, cantitățile în executare sunt preluate în documentul de destinație pentru fiecare linie de articol (de exemplu, când cantitatea este împărțită pe mai multe linii) fără însumarea cantităților;

**Control disponibilitate**: dacă este activ, tipul ordinului va fi considerat la [calcularea disponibilitățiierp-home/registers/items/calculate-availability);

**Agr. vânz. TVA**: dacă este activ, în momentul creării ordinului, aplicația va verifica, dacă pentru articolul utilizat, este prezent un cod TVA agricol. Dacă nu este prezent, este utilizat codul TVA prezent în [registrul articoluluierp-home/registers/items/create-new-items/item-registry/generality);

**Tip comandă producție**: reprezintă tipul comenzii de producție care va fi generată din acest tip de ordin client în *Definire MPS*;

**Preț cu TVA**: dacă este activ, aplicația preia prețul de vânzare din ofertele de prețuri sau din registrul articolului și îl inserează cu tot cu TVA. Dacă nu găsește oferta de preț (pentru că este expirată sau nu este compatibilă) preia costurile sau prețurile din registrul articolului și le inserează cu tot cu TVA.

**Tip ordine furnizori fornitori** și **Descrizione tipo OF**: reprezintă codul și descrierea tipului ordinului furnizor care va fi generat, dacă se alege procedura de generare a ordinului furnizor pornind din ordinul client;

**Control client**: dacă este setat, în momentul inserării contului analitic titular al documentului, aplicația verifică dacă tipul contului este obligatoriu client. Dacă nu este activ, aplicația va lansa un mesaj de eroare;

**Gestionare matrici extradata**: dacă este activ, în cazul articolelor cu matrice, permite afișarea unui tab suplimentar pentru inserarea valorilor cantității pentru fiecare celulă a matricii;

**Configurare**: permite inserarea codului pentru setarea Extradata în ordinul client.