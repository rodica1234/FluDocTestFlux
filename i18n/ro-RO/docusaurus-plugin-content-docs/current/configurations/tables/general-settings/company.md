---
title: Societate
sidebar_position: 3
---


Form-ul se află pe calea **Configurare > Tabele > Setări generale > Societate** și permite codificarea companiilor din baza de date.  
După introducerea/crearea unei noi companii, va fi necesară gestionarea drepturilor de vizibilitate pentru utilizatori utilizând aplicația ARM.

:::note Notă
În mod normal, procedura de instalare a aplicației Fluentis creează o companie implicită și, prin urmare, baza de date nu este niciodată complet goală.
:::

Pentru fiecare companie este necesară codificarea <u>**cel puțin a unei diviziuni**</u> (de exemplu, se poate numi "*Sediu*" sau alte nume similare dacă nu există o cerință specifică de a defini diferite diviziuni). 

:::tip Info
Conceptul de diviziune poate fi înțeles ca departament sau ca sucursală a companiei.  
Contabilitatea, desi unica la nivelul societatii care intocmeste un unic bilanț, poate fi usor filtrată pe diviziuni pentru a produce un bilant divizat. 
:::

### Societăți

În acest form de căutare sunt prezente toate societățile din baza de date.  

Pentru a crea o nouă companie utilizați butonul **Nou**.


### Date generale

**Societate**: reprezintă codul companiei care trebuie să coincidă cu cel definit în ARM.  
**Descriere:**: numele oficial al companiei.  
**Țara**: pe baza acestui câmp Fluentis recunoaște locația și setările fiscale care trebuie să existe în mod implicit în sistem.  
**Moneda**: reprezintă moneda societății.  

:::note Notă
Țara și moneda societății sunt deja populate în momentul instalării aplicației Fluentis. Acestea sunt date fundamentale care pun în aplicare o serie întreagă de setări administrative și fiscale. 
:::

**Limba**: câmp neobligatoriu, reprezintă limba oficială a companiei. Este folosită ca limbă implicită în rapoarte.  
**Registru asociat**: este un câmp opțional. Are două tipuri de utilizări:  
- cazul în care societatea este PF, permite asocierea la registrul care permite preluarea datelor persoanei fizice pentru declarațiile fiscale.  
- cazul a două societăți care aparțin unui grup care au relații și, prin urmare documente  intercompany, este utilizată pentru transferul de date de la o societate la alta. De exemplu, pentru ca factura de vânzare a primei companii să devină automat factură de achiziții pentru a doua companie. Pentru a face acest lucru, a doua companie trebuie să știe în ce registru să caute furnizorul căruia îi va atribui documentul. 


### Setări administrativ

**Cod activitate**: reprezintă codul Ateco al activității principale a companiei (pentru Italia).  
**Domiciliu fiscal**: reprezintă adresa sediului legal.  
**Oficiu TVA**: reprezintă orașul în care se află biroul de referință pentru TVA-ul companiei.  
**Oficiu REA/Număr înscriere REA**: reprezintă codul provinciei și numărul registrului comerțului (necesar pentru facturarea electronică).   
**Capital subscris/capital vărsat**: reprezintă situația capitalului societății (necesare pentru facturarea electronică).  
**Natura juridică**: reprezintă codul care identifică tipul de companie. Tabelul este fix și predefinit.  
**Regim fiscal**: reprezintă regimul fiscal în care operează. Tabelul este fix și predefinit.  
**Ri.Ba.** : reprezintă datele de identificare ale companiei pentru sistemul bancar electronic.

### Alte setări

**Număr de zecimale pentru câmpurile cantități**: reprezintă numărul de zecimale care vor fi afișate în rapoarte pentru  câmpurile cantitate.   
**Afişare simbol deviză**: dacă este activ, afișează simbolul monedei (și câmpurile egale cu zero) în form-urile în care sunt vizualizate înregistrările contabile.  
**Gestionare controlling**: dacă este activ, abilitează procedurile "avansate" (set complet de funcții) din aria controlling pentru companie.  

**Societate-mamă**: este un câmp gestionat în procedura *Consolidare master* din modulul Controlling.  
**EDI** (Electronic Data Interchange): secțiunea permite inserarea informațiilor companiei utilizate în aceste fișiere telematice.  
**Cheltuieli timbru**: secțiunea permite inserarea cheltuielilor de timbru și valoarea care declanșează obligația aplicării acesteia în factură, numărul autorizației pentru timbru virtual și provincia administrației financiare.  
**Bănci**: în acest tabel se pot insera băncile principale ale societății dintre care se poate prelua banca implicită în diverse rapoarte.

### Logo

Permite inserarea logo-ului companiei. Cel implicit este utilizat automat în documentele din achiziții și vânzări.

**Import imagini**: butonul permite importarea unei sau mai multor imagini pentru a fi utilizate ca logo.

*Buton specific*

**Setări generale**: creează, într-o bază de date nou instalată, o serie de tabele de bază implicite (de exemplu, țări, limbi, valute), precum și un plan de conturi și setări de bază ale registrelor de TVA, șabloanelor contabile etc.  
Aceasta este util atunci când se definește strategia pentru înființarea unei noi companii și pentru configurarea aplicației.  
În cazul în care există deja o altă companie înființată și creați o companie suplimentară, (grup corporativ), acest buton creează setările specifice noii companie pe care o creăm, de exemplu planul de conturi, șabloanele contabile etc., dar nu va crea tabelele comune de bază (de exemplu monede) care există deja, așa cum au fost create la momentul primei companii. 