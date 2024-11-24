---
title: 'Integracje z API za pomocą GPT Actions'
date: '2024-11-24'
tags: ['GPT Actions', 'Integracja API', 'ChatGPT', 'automatyzacja', 'OpenAPI', 'Agenty AI']
draft: false
summary: 'GPT Actions to funkcja ChatGPT umożliwiająca integrację z zewnętrznymi API, co pozwala na automatyzację zadań i tworzenie zaawansowanych interakcji. W artykule zademonstrowano jej zastosowanie, obliczając odległości użytkowników z API jsonplaceholder od zadanego punktu i wizualizując wyniki na mapie oraz wykresach.'
---

# Wprowadzenie

Ostatnio temat agentów AI zaczął mnie coraz bardziej interesować. Coraz więcej informacji pojawia się na ten temat. Postanowiłem zebrać informacje na ten temat w kontekście ChatGPT. Podczas przeglądania różnych artykułów, natknąłem się na informacje o [GPT Actions](https://platform.openai.com/docs/actions/introduction). Postanowiłem dowiedzieć się więcej na temat tej funkcji.

# Co to jest GPT Actions?

GPT Actions to funkcja, która pozwala na integrację zewnętrznych serwisów z ChatGPT. Dzięki temu można tworzyć bardziej zaawansowane interakcje z ChatGPT. Można to wykorzystać do automatyzacji zadań, takich jak wysyłanie wiadomości w Microsoft Teams, tworzenie obiektów w systemie Jira czy Notion, albo do pozyskiwania danych z API oraz zaprezentowanie ich w interesujący sposób, np za pomocą wykresów czy tabel.

# Jak działa GPT Actions?

Poniżej przedstawiam diagram sekwencyjny, który obrazuje jak działa GPT Actions:

![Diagram sekwencyjny](/blog/integracje-z-api-za-pomoca-gpt-actions/diagram-sekwencyjny-gpt-actions.jpg?style=centerme)

Wyjaśnienie kroków:
1. Użytkownik wysyła zapytanie w języku naturalnym.
2. GPT analizuje zapytanie i określa odpowiednie działanie API.
   1. Nie każde zapytanie wymaga wywołania API. W przypadku zapytań, które nie wymagają wywołania API, GPT samodzielnie generuje odpowiedź.
3. GPT generuje schemat JSON wymagany dla wywołania API.
   1. Ten schemat jest zgodny z dokumentacją API, a dokładniej standardem OpenAPI.
   2. W przypadku braku schematu można wykorzystać [dedykowaną customową wersje GPT](https://chatgpt.com/g/g-gQ0FMGHmb-openapi-gpt) do jego wygenerowania.
4. GPT uwierzytelnia się i wykonuje wywołanie API do API Zewnętrznego.
   1. W przypadku danych firmowych **uwierzytelnienie musi wymagać dodatkowych kroków**, takich jak generowanie tokena JWT, albo klucza API.
5. API Zewnętrzne zwraca odpowiedź do GPT.
6. GPT przetwarza i formatuje odpowiedź w przystępnej formie.

# Przykłady zastosowań GPT Actions

Zaprezentuję przykład utylizacji GPT Actions w praktyce. Wykorzystam [jsonplaceholder](https://jsonplaceholder.typicode.com/users), które oferuje darmowe API do testowania. 

Przykład użycia to obliczenie odległości każdego użytkownika od zadanego punktu, oraz zwizualizowanie tego na mapie.

# Przykład użycia GPT Actions

## Krok 1: Utworzenie customowej wersji GPT.

W tym kroku tworzymy customową wersję GPT w której zawieramy informacje o tym, jakie zadanie chcemy wykonać. W naszym przypadku chcemy obliczyć odległość każdego użytkownika od zadanego punktu. Tutaj można wpaść w pułapkę, ponieważ naszym zadaniem nie jest pobranie danych z API, a obliczenie odległości.

Zapraszam do zapoznania się z artykułem [Tworzenie customowych wersji GPT dla swoich potrzeb](https://aidlazabieganych.pl/blog/tworzenie-customowych-gpt-dla-swoich-potrzeb) w którym opisuję jak stworzyć customową wersję GPT.

## Krok 2: Dodanie GPT Actions do customowej wersji GPT.

Ten krok jest kluczowy, ponieważ dodajemy do naszej customowej wersji GPT możliwość wywołania API. W tym przypadku wywołamy API, które zwróci nam listę użytkowników.
W pierwszej kolejności musimy wygenerować [schemat OpenAPI](https://swagger.io/specification/) dla wywołania API. Możemy to zrobić ręcznie, ale polecam skorzystanie z [OpenAPI GPT](https://chatgpt.com/g/g-gQ0FMGHmb-openapi-gpt), który wygeneruje schemat na podstawie obiektu JSON, lub skorzystanie z [OpenAPI Designer](https://editor.swagger.io/), który pozwala na stworzenie schematu wizualnie.

![OpenAPI Schema](/blog/integracje-z-api-za-pomoca-gpt-actions/json-to-openapi-schema.jpg?style=centerme)

Po wygenerowaniu schematu, dodajemy go do naszej customowej wersji GPT. 

W panelu tworzenia customowej wersji GPT, znajduję się opcja "Actions". Klikamy na nią.

![Otwieranie okna GPT action](/blog/integracje-z-api-za-pomoca-gpt-actions/gpt-action-1.jpg?style=centerme)

Następnie dodajemy schemat OpenAPI do naszej akcji.

![Dodawnie OpenAPI schema do GPT action](/blog/integracje-z-api-za-pomoca-gpt-actions/gpt-action-2.jpg?style=centerme)

## Krok 3: Wywołanie API

Teraz możemy skupić się na zrealizowaniu naszego zadania. W tym przypadku chcemy obliczyć odległość każdego użytkownika od zadanego punktu. 

Najpiękniejsze w tym wszystkim jest to, że nie musimy zawierać w promptach informacji o wywołaniu API. GPT sam zrozumie, że musi wywołać API, ponieważ schemat OpenAPI jest dodany do akcji.

Mój prompt wygląda następująco:
```
Calculate the location from point 52.230347, 20.984000 for all users
```

GPT zrozumie, że musi wywołać API, a następnie obliczyć odległość każdego użytkownika od zadanego punktu.

Odpowiedź:
| id  | name                     | distance_km        |
| --- | ------------------------ | ------------------ |
| 7   | Kurtis Weissnat          | 3040.8891131646697 |
| 5   | Chelsey Dietrich         | 10180.774839543426 |
| 10  | Clementina DuBuque       | 10653.683920961876 |
| 4   | Patricia Lebsack         | 10917.261942854237 |
| 9   | Glenna Reichert          | 11412.913258496767 |
| 1   | Leanne Graham            | 11531.04761955838  |
| 2   | Ervin Howell             | 11938.886699883235 |
| 6   | Mrs. Dennis Schulist     | 14315.634339653436 |
| 3   | Clementine Bauch         | 14536.805037188149 |
| 8   | Nicholas Runolfsdottir V | 14620.856754078086 |

To nie są losowe dane, te dane pochodzą z API [jsonplaceholder](https://jsonplaceholder.typicode.com/users).

## Krok 4: Przetworzenie odpowiedzi

Ostatni krok to przetworzenie odpowiedzi. Wygenerujmy wykres, który przedstawia odległość każdego użytkownika od zadanego punktu, oraz zwizualizujmy to na mapie.

Mój prompt wygląda następująco:
```
Visualize it
```

Odpowiedź:
![Dodawnie OpenAPI schema do GPT action](/blog/integracje-z-api-za-pomoca-gpt-actions/wykres.jpg?style=centerme)

Kolejny prompt:
```
Show distance data on a map.
```

Odpowiedź:
![Mapa z punktami](/blog/integracje-z-api-za-pomoca-gpt-actions/map-1.jpg?style=centerme)

Kolejny prompt:
```
Draw a lines from users to point
```

Odpowiedź:
![Mapa z liniami](/blog/integracje-z-api-za-pomoca-gpt-actions/map-2.jpg?style=centerme)

# Podsumowanie

Zademonstrowałem jak można wykorzystać GPT Actions do integracji z API. GPT Actions pozwala na tworzenie bardziej zaawansowanych interakcji z ChatGPT. Można to wykorzystać do automatyzacji zadań, takich jak wysyłanie wiadomości w Microsoft Teams, tworzenie obiektów w systemie Jira czy Notion, albo do pozyskiwania danych z API oraz zaprezentowanie ich w interesujący sposób, a następnie zwizualizowanie ich w interesujący sposób.

Proszę sobie wyobraźć jakie możliwości daje GPT Actions dla wszystkich tych, którzy chcą zautomatyzować swoje zadania:

- Manager przygotowujący raporty. Może zautomatyzować proces zbierania danych z różnych źródeł, a następnie przedstawić je w interesujący sposób.
- Product owner tworzący zadania w systemie Jira. Może zautomatyzować proces tworzenia zadań z surowych notatek i przypisywania ich do odpowiednich osób.

W mojej opinii GPT Actions jest obiecującą funkcją, która doskonale wpisuje się w trend automatyzacji zadań i agentów AI. Warto zainteresować się tą funkcją i zacząć ją wykorzystywać w praktyce.