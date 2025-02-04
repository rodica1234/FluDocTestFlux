---
title: Tip avize vânzare
sidebar_position: 13
---

Tabelul se află pe calea **Configurare > Tabele > Vânzări > Tip avize vânzare**.  

Permite inserarea datelor noi sau căutarea celor existente pentru a le vizualiza, modifica sau șterge.

Conține o zonă de filtrare și una de rezultate. După ce ați setat toate filtrele dorite, efectuați clic pe butonul **Caută** pentru a vizualiza datele în tabelul de rezultate.

Pentru a insera datele, efectuați clic pe primul rând gol din tabel sau apăsați butonul **Nou**.

*Câmpuri specifice*

**Tip** și **Descriere**: reprezintă codul și descrierea tipului avizului de vânzare.   
**Numerotare**: consultați [Numerotări Fluentisconfigurations/tables/fluentis-numerations). 
**Natură aviz de vânzare**: reprezintă natura avizului de vânzare: livrare, restituire, pentru vizionare, restituit după vizionare.  
**Ordin**: dacă este activ, avizul de vânzare poate fi creat executând un ordin client.  
**Valori**: dacă este activ, în raportul avizului de vânzare sunt afișate valorile liniilor articol din document.  
**Tip factură/Descriere**: reprezintă Tipul facturii utilizat pentru crearea facturilor din avize de vânzare cu ajutorul [proceduriiprocedures/create-invoices-from-delivery-notes). Factura poate fi creată din avizul de vânzare doar dacă acest câmp este valorizat cu tipul facturii.  
**Șablon transport**: permite alegerea șablonului de transport care va fi apoi propus în aviz.  
**Control client**: dacă este activ, în momentul inserării contului analitic titular al ordinului, aplicația verifică dacă tipul contului este obligatoriu client. Dacă nu este activ, aplicația avizează utilizatorul prin lansarea unui mesaj. Recomandăm activarea sa pentru toate tipurile de avize de vânzare.  
**Blochează doc. listat**: dacă este activ, nu permite modificarea unui aviz de vânzare deja listat (are activat parametrul *Listat* în antetul său). 
**Credit**: dacă este activ, avizul de vânzare cu acest tip este considerat la calcularea creditului.  
**Exclude blocare**: dacă este activ, înseamnă că dacă depășește creditul și documentul este blocat, permite oricum inserarea și listarea lui.  
**Cash flow**: dacă este activ, tipul avizului de vânzare este considerat la calcularea [cash flow-uluitreasury/cash-flow/cash-flow/search-cash-flow).  
**Gestiune/Descriere**: reprezintă gestiunea de sosire a mărfii din avizul de vânzare. Această valoare va fi utilizată implicit de aplicație.   
**Șablon/Descriere**: reprezintă șablonul pentru înregistrarea mărfurilor din avizele de vânzare de acest tip.  
**Nu aduna cantitățile**: dacă este activ, în executarea ordinelor de acest tip, cantitățile executate sunt preluate în documentul de executare pentru fiecare linie din executare.  
**Executare cantitate articol netotalizată**: dacă este activ, în momentul în care se execută acest tip de avize, permite preluarea cantităților executate ale documentului, subdivizate pe linia articolului, fără însumarea cantității.  
**Agr. vânz. TVA**: dacă este activ, în momentul creării avizului, aplicația va verifica, dacă pentru articolul utilizat, este prezent un cod TVA agricol. Dacă nu este prezent, este utilizat codul TVA prezent în registrul articolului.  
**Control dispoziție de livrare descărcată**: dacă este activ, când se creează un aviz dintr-o dispoziție de livrare descărcată, se activează automat parametrul *descărcat* pentru aviz. Recomandăm activarea acestui parametru atunci când se utilizează gestionarea dispoziției de livrare. 
**Blochează cantitate dispoziție de livrare**: dacă este activ, blochează cantitatea și cantitatea alternativă în avizul creat din lista UdI. Recomandăm activarea acestui parametru atunci când se utilizează gestionarea dispoziției de livrare și UdI.  
**Permite descărcare loturi nedisponibile**: dacă este activ, permite și descărcarea loturilor nedisponibile.  
**Gestionare EDI**: dacă este activ, pentru avizul de vânzare de acest tip se poate crea fișierul EDI.  
**Preț cu TVA**: dacă este activ, aplicația prea prețul de vânzare din ofertele de prețuri sau din registrul articolului și îl inserează cu tot cu TVA. Dacă nu găsește oferta de preț (pentru că este expirată sau nu este compatibilă) preia costurile sau prețurile din registrul articolului și le inserează cu tot cu TVA. 
**Verifică loturi**: dacă este activ, controlează dacă loturile sunt adecvate articolelor.  
**Gestionare matrici Extra Data**: dacă este activ, în cazul gestionării articolelor cu matrice, permite afișarea unui tab suplimentar pentru atribuirea valorilor cantității în fiecare celulă a matricei. 