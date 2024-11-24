---
title: 'Od słów do wykresów z Actions GPT'
date: '2024-11-24'
tags: [ChatGPT, API, raporty, wizualizacja danych, OpenAPI, integracje, automatyzacja]
draft: false
summary: 'Artykuł opisuje proces tworzenia raportów sprzedażowych z wykorzystaniem ChatGPT i integracji z API, umożliwiający generowanie danych bez znajomości programowania czy SQL. ChatGPT automatycznie przekształca pytania użytkownika na zapytania do API, pobiera dane i prezentuje je w przystępnej formie, np. tabel czy wykresów. Tworzenie takich integracji wymaga wiedzy technicznej, ale końcowy rezultat jest prosty w obsłudze dla osób nietechnicznych.'

---

# Wprowadzenie

W tym artykule zademonstruję, jak może wyglądać nowoczesne tworzenie raportów z wykorzystaniem ChatGPT oraz integracji z API, z którego pobierane są dane. Kluczowym elementem tego procesu jest to, że osoba generująca raport nie musi posiadać wiedzy z zakresu programowania, SQL ani innych technologii. Wystarczy, że zdefiniuje pytanie i przekaże je do ChatGPT. Model automatycznie przekształci wymagania na odpowiednie zapytanie do API, pobierze dane i zwróci je w odpowiedniej formie. Następnie, za pomocą kilku dodatkowych promptów, można przekształcić te dane w wykresy, tabele lub inne formy wizualizacji.

> W tym artykule posługuję się pewnymi uproszczeniami, proszę potraktuwać to jako wstęp do tematu, a nie jako gotowe rozwiązanie do zastosowania na produkcji.

## Opis scenariusza
Posłużymy się identycznym przykładem jak w artykule [Raporty dla managmentu](https://aidlazabieganych.pl/blog/raporty-dla-managmentu). Z tą różnicą, że rezultatem będą faktyczne dane, a nie zapytanie SQL.

Scenariusz, który chcemy zrealizować, zakłada przygotowanie raportu dla menedżmentu zawierającego informacje o sprzedaży.
W raporcie powinny znaleźć się informacje o:
- Nazwie produktu oraz ile sztuk zostało sprzedanych i wygenerowany przychód.
- Produkty powinny zostać posortowane według przychodu.
- Raport powinien być wygenerowany dla zakresu dat od 2023-10-01 do 2023-10-30.

## Stwórzmy customowy model GPT

W pierwszej kolejności musimy stworzyć customowy model GPT, który będzie wiedział jak zapytać API o dane. Skorzystałem ze standarowej metody tworzenia customowych modeli GPT, którą opisałem w artykule [Tworzenie customowych wersji GPT dla swoich potrzeb](https://aidlazabieganych.pl/blog/tworzenie-customowych-gpt-dla-swoich-potrzeb).

## Dodanie GPT Actions do customowej wersji GPT.

Musimy stworzyć specjalny endpoint, który umożliwi połączenie z miejscem przechowywania danych, w tym przypadku z bazą danych o sprzedaży. Taki endpoint umożliwia przesyłanie żądań HTTP, aby pobierać potrzebne informacje. Następnie udostępniamy schemat OpenAPI, opisujący sposób działania tego punktu dostępu – jakie dane można do niego wysyłać i jakie informacje można z niego otrzymywać.

> Tutaj wymagana jest wiedza techniczna, albo pomoc osoby, która zna się na integracjach z API.

Po dodaniu schematu OpenAPI do customowej wersji GPT, możemy zacząć korzystać z GPT Actions.

## Wywołanie API

Teraz możemy skoncentrować się na realizacji naszego zadania. W tym przypadku chcemy pobrać dane o sprzedaży z API.

Prompt wygląda następująco:
![integracja z api](/blog/od-slow-do-wykresow-z-actions-gpt/intergracja-api.gif)

W ten sposób, za pomocą ChatGPT, pozyskaliśmy dane z zewnętrznego API, które mogą posłużyć do stworzenia raportu. Użytkownik nie musi znać SQL, języka programowania, czy innych technologii, aby uzyskać potrzebne dane. 

Cała złożoność związana z integracją z API, pobieraniem danych i ich przetwarzaniem jest ukryta dla użytkownika i sprowadza się do interakcji z ChatGPT.

Diagram sekwencyjny prezentuje się następująco:  
![Sekwencyjny Diagram](/blog/od-slow-do-wykresow-z-actions-gpt/sekwencyjny-diagram.jpg)

## Generowanie raportu
Teraz wystarczy przetworzyć dane i wygenerować raport. 

Przykładowy prompt, który generuje wykres kołowy z danymi o sprzedaży:

```text
draw me a pie chart
```

Odpowiedź:
![Pie Chart](/blog/od-slow-do-wykresow-z-actions-gpt/pie-chart.jpg)

# Podsumowanie

W tym artykule pokazałem jak można wykorzystać ChatGPT do generowania raportów z wykorzystaniem zewnętrznego API. Dzięki temu, osoba generująca raport nie musi znać języka programowania, SQL czy innych technologii. Wystarczy, że zdefiniuje pytanie i przekaże je do ChatGPT. Model automatycznie przekształci wymagania na odpowiednie zapytanie do API, pobierze dane i zwróci je w odpowiedniej formie. 

Tworzenie takich integracji wymaga wiedzy technicznej, jednak rezultatem jest narzędzie, które może być wykorzystane przez osoby, które nie znają się na technologii.

Warto zaznaczyć, że ChatGPT nie posiada wiedzy o kontekście danych, dlatego odpowiedzialność za ich poprawność spoczywa na osobie tworzącej customowy model GPT oraz osobie formułującej zapytania do API.

W artykule zawarto wiele uproszczeń – jest to wstęp do tematu, a nie gotowe rozwiązanie do wdrożenia na produkcję.

