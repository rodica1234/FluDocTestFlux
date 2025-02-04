---
title: Plăți
sidebar_position: 4
---

În acest form se pot insera băncile principale ale contactului. Dintre acestea, cea setată ca ‘implicită' poate fi utilizată ca bancă beneficiară pentru viramente în modulul *Plăți furnizori*.

Inserarea unei bănci se poate realiza cu ajutorul helpului din câmpurile abi/cab, din care o puteți selecta pe cea dorită, completând datele contului curent, cin, iban, swift. Se poate insera și numele beneficiarului în cazul în care plățile sunt atribuite unei terțe persoane.

*Buton specific*  
> **Calculare discount**: buton pentru atribuirea, în registrul partenerului, a unei configurări discounturi (definite în modulul Oferte de vânzări, în aria Vânzări). Acest buton este activ doar în registrul unui client. 

### Tipuri de plăți

Secțiunea fundamentală a tabului **Plăți**, este gridul **Tipuri de plăți**, unde se inserează logica de calcul a scadențelor: se selectează tipul plății și soluția de plată (ambele se găsesc în tabelele din *Tabele > Setări generale*), valoarea sau procentul de plată și banca de referință pentru angajamente.

**Valoare(suma)**: permite calcularea scadenței prin impunerea sumei inserate.Diferența trebuie să fie gestionată cu ajutorul altor linii pentru care va trebui să completați câmpul Procent. În cazul în care Totalul documentului este inferior valorii din câmpul Valoare (chiar dacă există linii cu câmpul Procent completat) aplicația va lansa un mesaj de eroare, în faza creării scadențelor în document, pentru corectarea setărilor.

**ATENȚIE**: acest câmp este rar aplicat în practică. În plus, în documente, la calcularea scadențelor, este utilizat și completat prin procedurile automate după cum urmează:

Când, de exemplu, din mai multe avize se dorește crearea unei facturi, poate apare situația în care în avize există condiții de plată diferite. Drept urmare, în factură vor fi create un număr de linii de plată egal cu numărul de tipuri de condiții de plată  (care totalizează avizele cu aceeași condiție) și inserând acestă valoare în câmpul Valoare se creează o altă linie ‘reziduală' unde, folosind câmpul Procent , este gestionat 100% din valoarea ‘reziduală' (dacă există) cu condiția de plată determinată de registru.

Această valoare ‘reziduală' include de obicei eventuale sume ulterioare, inserate direct în factură (și, prin urmare, inexistente în avize), cum ar fi cheltuielile de încasare, cheltuielile de transport, taxele de timbru etc.

Această procedură de inserare a mai multor linii (cel puțin două, una pentru scadența avizului și una ‘reziduală') va fi efectuată chiar dacă se valorizează un singur aviz.

Această gestionare este impusă de parametrul Păstrează-le pe cel din avize (din procedura Creare din avize de vânzare, tab Parametri, sectiune Tratare plăţi în factură). Dacă insă alegeți ‘Restaurează plățile din registru', scadențele vor fi compactate într-o singura condiție, și anume cea prezentă în registru.

Evidențiem faptul că la tipărirea facturii vor fi listate toate scadențele calculate așa cum se prezintă pe ecran. Însă, dacă doriți, puteți să personalizați raportul astfel încât să afișeze doar linia utilizată efectiv (adică nu va afișa linia ‘suplimentară' dacă nu are nicio scadență).

**Procent**: permite inserarea cotei (în procente) din valoarea totală a plății (sau încasării) care trebuie gestionată cu condiția de plată (combinație între tip de plată și soluție de plată) setată pe rând.

În cazul unui procent mai mic de 100, trebuie să creați mai multe rânduri cu procente care însumate să ajungă la 100%.

*Exemplu*:

- 50% numerar la emiterea facturii și 50% transfer bancar în termen de 30 de zile.

- 50% numerar la emiterea facturii; 25% transfer bancar în termen de 30 de zile; 25% transfer bancar în termen de 60 de zile.

**ATENȚIE**: dacă soluția de plată include mai mult de o scadență se va completa astfel: de exemplu 50% numerar la emitere și 50% transfer bancar în termen de 30 - 60 de zile.

**Banca (principală)**: reprezintă banca de referință pentru angajamente:

- Pentru registru client: dacă *Tipul plății* este transfer bancar, trebuie inserată banca societății curente (pentru ca documentele tipărite să conțină referințele plății pentru client).

- Pentru registru furnizor: dacă *Tipul plății* este transfer bancar, trebuie inserată banca furnizorului;

Câmpul se poate completa selectând banca din combo box (inserată anterior în tabelul Bănci principale).

În acest tabel se pot insera atât băncile societății cât și băncile partenerului (client/furnizor). De asemenea, puteți să inserați codurile IBAN și/sau cod SWIFT (recomandat pentru băncile companiei), cât și coduri ABI și CAB (recomandat pentru băncile clientului/furnizorului pentru care IBAN și SWIFT pot fi inserate în gridul din registru).

Dacă rândul din tabelul Bănci principale este complet cu IBAN și/sau SWIFT, precum și cu ABI și CAB, prin selectarea acestui rând din combobox, datele vor fi preluate în gridul registrului. În caz contrar, vor fi preluate doar ABI și CAB, dar veți putea adăuga datele lipsă direct în grid. Acest lucru este recomandabil pentru băncile partenerului pentru a evita codificarea, în tabelul Bănci principale, a prea multor rânduri utilizate doar pentru un unic client sau furnizor. Este de preferat să indicați doar detaliile sucursalei bancare (ABI și CAB) unde clienții sau furnizorii au contul curent.

**Descriere bancă**: câmp asociat la cel precedent.

**Cod bancă**: se referă la un cod bancar alternativ față de sistemul ABI/CAB.

### Bănci principale

Gridul conține băncile partenerului.

Dintre acestea, cea setată ca „implicită” (flag **Def**. activ) poate fi utilizată ca bancă beneficiară pentru viramentele către furnizor din modulul ‘Plăți furnizor‘.

În acest caz, banca implicită va fi impusă în virament, înlocuind banca din înregistrarea contabilă - inserată manual sau automat (apelând datele introduse în registru, în gridul Tipuri de plăți)- și asociată la angajamentul deschis.

*ATENȚIE*: pentru a activa înlocuirea băncii principale este necesar să activați flag-ul Impune banca principală din registrul furnizorului în  [Parametri plăți furnizoriconfigurations/parameters/treasury/vendor-payments-parameters).

Dacă flag-ul este activ în **Parametrii plăți furnizori**, dar nu sunt bănci cu flag-ul implicit activat în registru, va fi păstrată banca indicată în înregistrarea contabilă. În acest fel, puteți să inserați bănci principale alternative (tot ale partenerului).

Un alt exemplu poate fi cel al unui client care plătește prin transfer bancar (și, prin urmare, în gridul Tipuri de plăți se inserează banca societății noastre) pentru care doriți să inserați banca sa principală în cazul plății credit note.

**Beneficiar**: flag-ul activează citirea următorului câmp.

**Nume societate beneficiară**: util în cazul în care plățile trebuie efectuate către o parte terță.

### Luni excluse de la calculul scadențelor

Oferă posibilitatea de a seta o procedură automată care amână la o zi prestabilită toate scadențele referitoare la una sau mai multe luni (prin inserarea mai multor linii).

**Luna exclusă**: lună pe care doriți să o ignore scadențele

**Ziua**: ziua scadențelor amânate

**Luna**: lună scadențelor amânate

*Exemplu*: completând ca în imagine, toate termenele pentru luna august vor fi amânate la 5 septembrie.

### Secțiunea inferioară

Tipul de calcul al angajamentului vă permite să stabiliți dacă baza pentru calcularea angajamentelor este doar baza de impozitare a documentului (de exemplu pentru furnizorii intracomunitari sau gestionați în regim reverse charge) sau bază de impozitare+TVA (care este logica implicită chiar dacă nu este indicat nimic în acest câmp).

**Utilizare angajamente deschise**: flag-ul este propus implicit și este obligatoriu pentru gestionarea automată a angajamentelor deschise. În parametrii pentru configurarea șabloanelor contabile este posibilă definirea unui control pentru a garanta corespondența dintre soldul contabil și cel al angajamentelor.

**Tip calcul**: permite să alegeți între: bază de impozitare+TVA sau doar bază de impozitare. Modalitatea doar bază de impozitare este recomandată, de exemplu, pentru furnizorii intracomunitari și în regim reverse charge sau pentru clientii din sistemul split payment.

**Grupează angajamente** **:**momentan dezactivat; permite gruparea angajamentelor care, în aceeași înregistrare, au aceeași dată pentru scadență (de exemplu pentru cazul lunilor excluse);

**Grupare scadențe în efecte**: se pot grupa mai multe angajamente/scadențe într-un efect unic din modulului Portofoliu efecte (vor fi grupate în cazul în care data scadenței este egală și au aceeași bancă principală);

**Grupare note credit în efecte**: permite stornarea, la crearea efectelor, și a notelor de credit care au tipul plății de gestionat în efecte. Dacă flag-ul nu este activ, angajamentele relative la credit note nu vor mai fi afișate în form-ul de căutare al angajamentelor pentru procedura [Creare efecte din angajamentetreasury/bills-holding/procedures/bills-acquisition-from-maturity-values/bills-acquisition-from-maturity-values-intro). Acest parametru trebuie să fie combinat cu flag-ul **Grupează credit note după data scadenţei** din [Parametri portofoliu efecteconfigurations/parameters/treasury/bills-portfolio-parameters)

Dacă se activează flagul pentru grupare după data scadenței, angajamentul (sau angajamentele) relative la credit note cu tipul plății adecvat emiterii efectelor va fi grupat (stornând angajamentele active) doar dacă are scadența egală cu cea a angajamentelor selectate pentru emiterea efectului. Dacă flag-ul este inactiv, credit note-ul va fi grupat prin stornarea angajamentului care expiră la data cea mai apropiată (cu condiția ca flag-ul Grupează credit note în efecte să fie activ).

**Control expunere**: dacă este activ, acest partener va fi vizibil în form-urile din [Expunere cliențitreasury/customer-risk/procedures/customer-statement);

**Zile întârziere**: este o informație statistică care se calculează în Risc clienți (procedura [Control remiteritreasury/customer-risk/procedures/remittances-management)) și este utilizat în cash flow.  Reprezintă o medie a zilelor de întârziere a plăților de către clienți nu doar pentru angajamentele curente expirate, ci și pentru istoricul lor. Calculul implică o medie ponderată pe valoarea angajamentului. În ribbon bar-ul form-ul **Control remiteri** există comanda **Actualizeză zile de întârziere** care inserează rezultatul calculului în câmpul Zile întârziere din registrul clietului.

**Sumă credit acordat**: reprezintă suma creditului acordat clientului, pe baza setărilor calculului definite pentru Risc client. Pentru gestionarea corectă a acestei funcționalități, trebuie să gestionați și flag-ul Credit prezent în tabelele tipurilor de documente din ciclul de vânzări (Tipuri facturi/avize/ordine client) care va include sau nu tipul documentului în controlul depășirii creditului acordat.

**Tip ctrl. credit**: se poate preciza dacă clientul este supus unui singur ‘monitor credit' (și anume, va fi lansat doar un mesaj pentru a aviza ca s-a atins limita creditului) sau pentru *Bloc. doc. și monitor credit* cu care documentul care atinge limita creditului va fi blocat și va fi necesară autorizarea lui în modulul Risc client (procedura [Lock managertreasury/customer-risk/procedures/lock-manager/documents-authorization)), sau, într-o bază de date multi societate, este posibilă setarea unui ‘monitor de grup' sau ‘bloc. de grup' evaluându-se astfel situația completă a partenerului față de toate societățile gestionate în baza de date(recomandăm setarea sumei creditului egală și activă în toate societățile). Blocare/Monitor grup client verifică pe grupul companiilor și deci, verificând câmpul Cont principal grup totalizează valorile tuturor companiilor grupului pe creditul acordat contului principal al grupului. Ignoră valoarea creditului inserat în registrele filialelor.

În modulul *Risc client* există o procedură de [Gestionare creditetreasury/customer-risk/credit-management) care permite afișarea listei cu setările creditului inserate pentru toate codurile client, fără a fi necesar să intrați în fiecare registru;

**Credit asigurat**: este un simplu câmp pentru suma acoperită de asigurare; nu influențează calculele riscului;

**Note credit**: note comerciale pentru creditul acordat;

**Dată revizuire credit**: se referă la data revizuirii acordului comercial cu clientul în ce privește creditul acordat.

**Tip solicitare**: reprezintă tipul de solicitare al plății către client care va fi creat în procedura Crearea automată solicitări (Home>Tabele>Administrativă); registrul clientului curent va fi asociat unui tip de solicitare.

*Exemplu*: pot fi create un tip de solicitare standard și unul particular, pentru clienții vechi sau importanți.

**Dată acord**: reprezintă data acordului privind calcularea dobânzii la restanțe pentru întârzierea efectuării plății.

**Tip rată dobândă**: reprezintă tipul ratei dobânzii care va fi aplicat clientului, pe baza acordului stabilit. Acest combo box este asociat tabelului Tipuri rată (Home>Tabele>Administrativă);

**Spread**: creșterea ratei comparativ cu standardul tipului său.