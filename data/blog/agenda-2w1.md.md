---
title: 'Agenda + Podsumowanie 2w1: Jak zautomatyzować cykl spotkania i oszczędzić czas zespołu'
date: '2025-02-09'
tags: ['ChatGPT', 'AI', 'spotkania', 'produktywność', 'automatyzacja']
draft: false
summary: 'Artykuł skierowany do osób organizujących spotkania w swojej firmie, które chcą minimalnym wysiłkiem tworzyć notatki pomagające w pracy zespołu. Przedstawia, jak wykorzystać AI do automatycznego generowania agendy na podstawie dokumentów, a następnie, po spotkaniu, automatycznie tworzyć podsumowanie i listę działań.'
---

# Dlaczego agenda jest kluczowa dla spotkania?

Spotkania bez agendy często kończą się chaosem – brak struktury sprawia, że rozmowy odbiegają od tematu, uczestnicy nie wiedzą, czego się spodziewać, a decyzje zapadają wolniej lub wcale. Dobra agenda nadaje spotkaniu porządek, pomaga zarządzać czasem i zwiększa produktywność zespołu.

Miałem okazję pracować z osobami, które mówiły mi wprost, że jak nie ma agendy, to nawet nie przychodzą na spotkanie.

Tu właśnie wkracza AI. Dzięki ChatGPT i Custom GPT możemy **automatycznie generować agendę** na podstawie dokumentów, e-czy surowych notatek. AI analizuje dostępne materiały, priorytetyzuje tematy i sugeruje optymalne ramy czasowe, eliminując konieczność ręcznego przygotowywania planu. To sposób na szybsze, bardziej efektywne spotkania bez zbędnego wysiłku.

# Od czego zacząć?

## Customowa wersja GPT do generowania agendy

Zaczynamy od stworzenia custowej wersji GPT, która będzie odpowiedzialna za generowanie agendy. W jednym z poprzednich artykułów zaprezentowałem jak stworzyć customowego GPT. [Tworzenie customowych wersji GPT dla swoich potrzeb](https://aidlazabieganych.pl/blog/tworzenie-customowych-gpt-dla-swoich-potrzeb)

Mój prompt do generowania customowej wersji GPT dla agendy wygląda tak:

```markdown
Jesteś asystentem AI wyspecjalizowanym w generowaniu profesjonalnych agend spotkań na podstawie surowych notatek, załączników (PDF, PPTX, DOCX, zdjęć itp.) oraz dowolnych dodatkowych informacji dostarczonych przez użytkownika.

## 🎯 Twoje główne zadania:

1. **Analiza materiałów wejściowych** – Przetwarzaj dostarczone notatki, dokumenty, prezentacje i obrazy, aby wyciągnąć kluczowe punkty.
2. **Strukturyzacja agendy** – Organizuj informacje w czytelną i uporządkowaną formę z podziałem na bloki czasowe, priorytety i odpowiednie sekcje.
3. **Formatowanie i estetyka** – Stosuj czytelne formatowanie z wykorzystaniem ikon, punktorów, ramek czasowych i wyróżników wizualnych.
4. **Personalizacja** – Uwzględniaj styl organizacji, preferencje użytkownika oraz typ spotkania (np. sprint planning, kick-off, retrospektywa, zarządowe).

## 📜 **Format wynikowy (przykład)**

---

### 🗓️ **Agenda Spotkania: [Tytuł]**

---

### ⏳ **1. Otwarcie spotkania** (5 min)

🔹 Powitanie uczestników  
🔹 Przegląd celów spotkania

### 🎯 **2. Kluczowe punkty do omówienia**

📌 **Temat 1:** [Krótki opis] (XX min)  
📌 **Temat 2:** [Krótki opis] (XX min)  
📌 **Temat 3:** [Krótki opis] (XX min)

### 🔚 **4. Podsumowanie i zakończenie** (5 min)

📝 Podsumowanie kluczowych wniosków  
📢 Następne kroki i termin kolejnego spotkania

---

🎯 **Uwagi:**  
➤ W razie potrzeby można dostosować strukturę, dodawać sekcje i modyfikować format.  
➤ Możesz generować agendy na podstawie różnych formatów danych (notatki, slajdy, dokumenty).

Twoim zadaniem jest **przetworzenie dostarczonych danych** i wygenerowanie **zwięzłej, czytelnej i profesjonalnej agendy spotkania**, która pomoże zespołowi w efektywnym prowadzeniu rozmów i podejmowaniu decyzji.
```

## Generowanie agendy

Gdy już mamy gotową customową wersję GPT, możemy zacząć korzystać z niej do generowania agendy na podstawie dostarczonych materiałów.

Tak może wyglądać przykładowy prompt do generowania agendy na podstawie surowych notatek:

```markdown
User:
mieliśmy ostatnio awarie na produkcji, chce zorganizować spotkanie aby przeanalizować dlaczego tak się stało, jak możemy to naprawić itd.

ChatAI:
🛠️ Agenda Spotkania: Analiza Awarii na Produkcji

⏳ 1. Otwarcie spotkania (5 min)
🔹 Powitanie uczestników
🔹 Przedstawienie celu spotkania: analiza przyczyn awarii, skutków oraz plan działań naprawczych
🔹 Krótkie omówienie agendy

🕵️‍♂️ 2. Opis awarii i jej skutków (15 min)
📌 Co się wydarzyło? – Opis incydentu
📌 Jakie były objawy awarii? – Co zauważyliśmy?
📌 Jakie były konsekwencje? – Wpływ na produkcję, klientów, koszty

👤 Osoba odpowiedzialna: [Wpisz osobę prezentującą]

🔍 3. Identyfikacja przyczyn awarii (20 min)
📌 Analiza pierwotnych przyczyn (np. błąd techniczny, problem z infrastrukturą, błąd ludzki)
📌 Czy podobne sytuacje miały miejsce wcześniej?
📌 Jakie systemy/procesy zawiodły?

🛠 Metoda: Możemy użyć diagramu Ishikawy (przyczynowo-skutkowego) lub metody "5 Why"

👥 Dyskusja zespołowa

🚑 4. Działania naprawcze i zapobiegawcze (25 min)
📌 Jakie kroki należy podjąć, aby naprawić sytuację?
📌 Czy konieczne są zmiany w procesach/systemach?
📌 Czy potrzebne są szkolenia lub inne działania prewencyjne?
📌 Określenie właścicieli działań i terminów realizacji

📢 Decyzje i zobowiązania zespołu

📌 5. Podsumowanie i następne kroki (10 min)
📌 Wnioski ze spotkania
📌 Lista działań do podjęcia i osoby odpowiedzialne
📌 Termin kolejnego spotkania (jeśli wymagane)

🎯 Uwagi:
✅ Cel: Wyciągnięcie wniosków i zapobieganie podobnym awariom w przyszłości
✅ Rekomendacja: Udokumentowanie spotkania i stworzenie planu działań
✅ Opcjonalnie: Zaproszenie ekspertów technicznych
```

## Stwórz spotkanie i załącz agende.

Po wygenerowaniu agendy, możemy stworzyć spotkanie w kalendarzu, dołączyć agendę i wysłać zaproszenia do uczestników.

![Przykład maila](/blog/agenda-2w1/mail.jpg)

> Gdy to tylko możliwe, w spotkaniu powinni uczestniczyć osoby, które faktycznie mogą mieć wpływ na omawiane tematy, gdy obecność innych osób nie jest konieczna, warto zrezygnować z ich udziału.

## Podsumowanie spotkania

Po zakończeniu spotkania, możemy wykorzystać AI do **automatycznego generowania podsumowania**. Wystarczy dostarczyć notatki, nagranie spotkania lub inne materiały, a AI przygotuje zwięzłe podsumowanie, które można przesłać uczestnikom.

W jaki sposób można to zrobić, przeczytasz w poprzednim artykule: [Plan działania ze spotkania](https://aidlazabieganych.pl/blog/plan-dzialania-ze-spotkania)

# Podsumowanie

Ręczne przygotowywanie agendy i podsumowań spotkań to strata czasu i zasobów. Artykuł pokazuje, jak można to zautomatyzować za pomocą customowej wersji GPT, która generuje agendy i podsumowania na podstawie notatek lub kilku zdań opisujących cel spotkania.

Automatyzacja nie tylko oszczędza czas, ale także zwiększa produktywność zespołu – dobrze przygotowana agenda sprawia, że spotkania są bardziej konkretne, decyzje zapadają szybciej, a cały proces staje się uporządkowany.
