---
title: 'Złożone integracje z systematmi zewnętrznymiza pomocą ChatGPT i Actions GPT'
date: '2024-12-07'
tags: ['ChatGPT', 'GPT', 'API', 'integracje', 'Actions GPT', 'automatyzacja']
draft: false
summary: 'Artykuł zwraca uwagę na zdolność modelu GPT do selektywnego korzystania z różnych dostępnych integracji API. GPT dobiera tylko te integracje, które są kluczowe do realizacji konkretnego zadania, ustala kolejność wywołań API oraz wykorzystuje wyniki jednych zapytań jako dane wejściowe dla kolejnych.'
---

# Wstęp

W poprzednich artykułach [Integracje z API za pomocą GPT Actions](https://aidlazabieganych.pl/blog/integracje-z-api-za-pomoca-gpt-actions) oraz [Od słów do wykresów z Actions GPT](https://aidlazabieganych.pl/blog/od-slow-do-wykresow-z-actions-gpt) zaprezentowałem, jak można wykorzystać ChatGPT do integracji z zewnętrznymi systemami. Były to trywialne przykłady, w których ChatGPT wykonywał tylko jedno zapytanie do API. W tym artykule pokażemy jak można połączyć kilka zapytań API, aby realizować bardziej złożone zadania.

# Wywoływanie zapytań API

Współczesne duże modele językowe są na tyle zaawansowane, że mogą domyślać się kontekstu i wykonywać łańcuchy zapytań API, aby spełnić oczekiwania użytkownika chatu. Musimy tylko odpowiednio zdefiniować integracje z zewnętrznymi systemami z poziomu ChatGPT.

Załózmy, że Customowy GPT posiada 5 różnych integracji do 5 różnych systemów zewnętrznych. Każde zapytanie API zwraca dane, ale nie zawsze wszystkie integracje są wymagane. W zależności od kontekstu, użytkownik może chcieć zobaczyć dane z jednego systemu, z dwóch, z trzech, itd. Może również się zdarzyć sytuacja, że dane z jednego systemu są potrzebne do zapytania do drugiego systemu.
Np. aby pobrać dane sprzedażowe produktu, najpierw musimy uzyskać jego identyfikator, a następnie zapytać o dane sprzedażowe.

# Przykład

## Zapytanie

Załózmy przykład pobierania danych sprzedażowych dla zadanego produktu dla zadanego zakresu dat.

```markdown
Jaka była sprzedaż produktu "smart watch" w marcu 2023
```

![Zapytanie](/blog/zlozone-integracje-z-systematmi-zewnetrznymi/zapytanie.jpg?style=centerme)

## Analiza zapytania

W pierwszej kolejności ChatGPT próbuje zrozumieć zapytanie. Zastanawia się, czy spośród zdefiniowanych integracji, znajdują się takie, które mogą pomóc w odpowiedzi na zadane pytanie. Jeżeli tak, to następnym krokiem jest wytypowanie tych integracji, które są potrzebne do uzyskania odpowiedzi.

![Wybieranie integracji](/blog/zlozone-integracje-z-systematmi-zewnetrznymi/wybiernaie-integracji.jpg?style=centerme)

Kolorem zielonym zaznaczone są integracje, które są potrzebne do uzyskania odpowiedzi na zadane pytanie. Kolor czerwony oznacza integracje, które są zbędne. Gdy już zostały wybrane integracje, ChatGPT zastanawia się, w jakiej kolejności powinny być wywoływane zapytania API.

## Kolejnosc wywoływania zapytań

![Kolejnosc wywoływania zapytań](/blog/zlozone-integracje-z-systematmi-zewnetrznymi/kolejnosc-wywoływania-zapytań.jpg?style=centerme)

Ciekawostką jest to, że ChatGPT potrafi rozpoznać, że dane z jednego systemu są potrzebne do zapytania do drugiego systemu. Nie możemy wywołać zapytania **Pobierz dane sprzedażowe produktu dla zadanego zakresu dat** bez wcześniejszego pobrania **identyfikatora produktu**. Dlatego ChatGPT zaczyna od zapytania **Pobierz identyfikator produktu**, a następnie **Pobierz dane sprzdażowe produktu dla zadanego zakresu dat**.

# Wnioski

Modele GPT, takie jak ChatGPT, są na tyle zaawansowane, że potrafią zrozumieć kontekst i realizować bardziej złożone zadania dzięki kompozycji zapytań API. Co więcej, ChatGPT jest w stanie rozpoznać, które integracje są niezbędne do udzielenia odpowiedzi na zadane pytanie.

Takie podejście umożliwia przekształcenie tradycyjnych, skomplikowanych interfejsów użytkownika, wypełnionych wieloma polami formularzy, w proste i intuicyjne interakcje w języku naturalnym. Zamiast wymagać od użytkowników wypełniania formularza, można pozwolić im poprosić asystenta o pomoc w naturalny sposób.

# Ekstra materiały

Tak wygląda zapytanie do ChatGPT:

![Przykład chatu.](/blog/zlozone-integracje-z-systematmi-zewnetrznymi/rezultat.jpg?style=centerme)

Jak to możliwe? Oto diagram sekwencji:

![Diagram sekwencji.](/blog/zlozone-integracje-z-systematmi-zewnetrznymi/diagram-sekwencji.jpg?style=centerme)

Wizualizacja interakcji z Chatem GPT:

![Wizualizacja interakcji z Chatem GPT.](/blog/zlozone-integracje-z-systematmi-zewnetrznymi/shorter-demo.gif?style=centerme)
