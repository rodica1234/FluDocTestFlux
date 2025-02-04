---
title: Business Areas - Administrativ
sidebar_position: 1
---

**Creare file Intraweb sau Entratel**: permite setarea direct din interfață a tipului de format de export al modelelor intrastat, pentru a-l face compatibil fie cu aplicația Intraweb a agenției vamale, fie cu Entratel a agenției fiscale (două canale alternative pentru trimiterea modelelor). Diferența, din punct de vedere tehnic, constă în special în track record-ul de început al fișierului necesar pentru trimiterea Entratel.
Parametrul este, de obicei, deja setat și poate fi gestionat în coloana VALOARE, unde, așa cum este menționat în notă, flag-ul în condiția FALSE (0 - dezactivat) = Intraweb, în timp ce TRUE (1 - activat) = Entratel. În cazul creaării manuale (probleme tehnice), setați *Boolean* în coloana *Tip*, *Data de început a valabilității* și câmpul *Valoare*. Câmpul *Cod* în tabelul principal este FS-FI-Intrastat-ItalianFileType.

**Utilizează greutatea documentului în Intrastat achiziții/vânzări**: Activând (în câmpul *Valore*) parametrul de tip boolean pentru cei doi parametri, procedura automată de creare intrastat din facturi detectează greutățile articolelor din câmpul ‘NetWeight’ din liniile documentului de achiziție/vânzări, în locul greutăților teoretice din registrul articolului (care este setarea implicită).
Contabilizarea facturii de vânzare, dacă șablonul contabil prevede gestionarea intrastat, la rândul său aduce în contabilitate greutățile documentului: în acest fel, procedura de achiziție din înregistrările contabile va avea greutatea documentului.

Acești parametri pot fi asociați cu un alt parametru (**vizibil doar în baza de date**) cu care Fluentis aduce în secțiunea Bis/Ter valorile greutăților așa cum sunt prezente în crearea automată, fără a face rotunjiri de linie. Rotunjirile vor fi gestionate în faza următoare cu butonul de grupare prezent în secțiunea Bis/Ter.

Query-ul de executat este:

        update fluentis.SH_CompanyParameters set shcp_value = cast(0 as smallint)
        
        --update fluentis.SH_CompanyParameters set shcp_value = cast(1 as smallint)
        	
        from fluentis.SH_CompanyParameters
        		
        join fluentis.SH_LocalizationParameters on SHLP_Id = SHCP_Parameter_SHLP_Id
        	
        where SHLP_Code like 'IN-IntrastatRoundByOperation'
