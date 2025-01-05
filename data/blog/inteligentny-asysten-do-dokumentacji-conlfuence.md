---
title: 'Inteligentny asystent do dokumentacji'
date: '2025-01-05'
tags:
  [
    'ChatGPT',
    'Confluence',
    'Dokumentacja',
    'AI',
    'Automatyzacja',
    'Custom GPT',
    'Knowledge Base',
    'Produktywność',
  ]
draft: false
summary: 'Artykuł demonstruje proces tworzenia inteligentnego asystenta opartego na Custom GPT, który wykorzystuje funkcję knowledge base do interakcji z dokumentacją Confluence. Opisuje proces importu i indeksowania dokumentów, sposób zadawania pytań oraz otrzymywania odpowiedzi.'
---

# Inteligentny asystent do przeszukiwania wyeksportowanej dokumentacji Confluence

W dzisiejszych czasach zarządzanie wiedzą w firmie jest kluczowym elementem sukcesu. Wiele firm korzysta z platform takich jak Confluence, aby przechowywać i udostępniać dokumentację. Jednak przeglądanie wielu stron w poszukiwaniu odpowiedzi na konkretne pytania może być czasochłonne i frustrujące. W takich sytuacjach pomocny może okazać się inteligentny asystent, który umożliwia szybkie wyszukiwanie informacji w bazie dokumentów.

## Praktyczne zastosowanie

Inteligentny asystent do dokumentacji może być wykorzystany w różnych obszarach działalności firmy, takich jak:

- **Onboarding nowych pracowników**: Nowi pracownicy mogą szybko uzyskać odpowiedzi na pytania dotyczące firmowych procedur i zasad, bez konieczności przeglądania wielu dokumentów.

- **Rozwiązywanie problemów technicznych**: Dział IT może skorzystać z inteligentnego asystenta do szybkiego znalezienia rozwiązań problemów technicznych, zamiast przeszukiwania długich instrukcji.

- **Analiza ofert**: Dział sprzedaży może korzystać z asystenta do szybkiego dostępu do informacji o produktach i usługach, ułatwiając przygotowanie ofert dla klientów.

- **Analiza post mortem**: Dział QA może korzystać z asystenta do analizy post mortem, aby szybko znaleźć informacje o błędach i ich przyczynach.

## Jak połączyć ChatGPT z Confluence?

Aby wyeksportować całą przestrzeń w Confluence, skorzystaj z opcji eksportu w ustawieniach przestrzeni – szczegółową instrukcję znajdziesz [tutaj](https://confluence.atlassian.com/doc/export-content-to-word-pdf-html-and-xml-139475.html). Z takiego eksportu można stworzyć knowledge base, który będzie przechowywał wszystkie dokumenty z Confluence. Następnie, zaimportuj te dokumenty do customowego GPT, aby umożliwić asystentowi przeszukiwanie dokumentacji i udzielanie odpowiedzi na pytania.

## Custom GPT jako inteligentny asystent

Custom GPT to zaawansowana funkcja ChatGPT, która umożliwia tworzenie i szkolenie własnych modeli językowych. Dzięki tej funkcji można stworzyć customowego asystenta, który będzie w stanie przeszukiwać wyeksportowaną dokumentację Confluence i udzielać odpowiedzi na zadane pytania. W jednym z poprzednich artykułów zaprezentowałem jak stworzyć customowego GPT. [Tworzenie customowych wersji GPT dla swoich potrzeb](https://aidlazabieganych.pl/blog/tworzenie-customowych-gpt-dla-swoich-potrzeb). Tym razem wzbogacimy go o funkcję knowledge base, aby umożliwić semantyczne wyszukiwanie informacji.

![Dodawanie knowladge base](/blog/inteligentny-asysten-do-dokumentacji-conlfuence/custom-gpt-knowladge-base.jpg)

Limit plików w knowledge base to około 20. W przypadku większej ilości dokumentów, warto rozważyć połączenie ich i załączenie ich w maksymalnie 20 plikach. Każdy plik może mieć maksymalnie 2mln tokenów, czyli około 1.5mln słów, czyli około 8Mb czystego tesktu,
Jest to mocne przybliżenie, ponieważ zależy to od długości słów, ilości znaków specjalnych, itp.
Informacje pochodzą z [File uploads FAQ](https://help.openai.com/en/articles/8555545-file-uploads-faq)

Zdjęcia nie są obsługiwane w knowledge base.

## Knowledge base w customowym GPT

Knowledge base to funkcja, która pozwala na przechowywanie i efektywne przeszukiwanie dużych ilości tekstów. Dzięki tej funkcji customowy GPT będzie mógł szybko odnaleźć odpowiedzi na pytania w bazie dokumentów, eliminując konieczność ręcznego przeglądania stron. W przypadku dokumentacji Confluence, knowledge base pozwala na efektywne zarządzanie wiedzą w firmie i usprawnia dostęp do informacji.

> Na ten moment custom GPT nie posiada funkcjonalności listowania cytowanych źródeł, które zostały użyte do wygenerowania odpowiedzi. W związku z tym, informacje zawarte w odpowiedziach mogą być oparte na wiedzy zgromadzonej w bazie dokumentów, ale niekoniecznie będą miały odniesienie do konkretnych źródeł.

Dobry format danych dla funkcjonalności knowledge base to:

- Markdown
- HTML
- Plain text

## Przykładowa interakcja z inteligentnym asystentem

Załóżmy, że jesteś szkoleniowcem w firmie i potrzebujesz stworzyć nowe szkolenie dla pracowników na dowolny temat. Do knowladge base dodajesz wszystkie dokumenty, z informacjami na temat dostępnych szkoleń w organizacji, wraz z ich opisami, wymaganiami itd.

![Zadawanie pytania do knowladge base](/blog/inteligentny-asysten-do-dokumentacji-conlfuence/przeszukiwanie-knowladge-base.jpg)

Następnie, korzystając z customowego GPT, zadajesz pytanie: "Skomponuj mi szkolenie dla Programistów Java". Asystent przeszukuje bazę dokumentów i generuje odpowiedź, która zawiera propozycję tematów, wymagań i innych szczegółów dotyczących szkolenia.

![Analiza odpowiedzi z knowladge base](/blog/inteligentny-asysten-do-dokumentacji-conlfuence/rezultaty-przeszukiwania-knowladge-base.jpg)

# Podsumowanie

Dzięki inteligentnemu asystentowi możesz szybko uzyskać potrzebne informacje, bez konieczności ręcznego przeszukiwania dokumentów. Jest to wygodne i efektywne rozwiązanie, które usprawnia zarządzanie wiedzą w firmie.

Pierwszym minisem tego rozwiązania jest brak cytowania źródeł, co może być problemem w przypadku dokumentacji, gdzie ważne jest odwoływanie się do konkretnych dokumentów.

Drugim minisem jest limit ilości dokumentów, które można załadować do knowladge base. Przeważnie export z Confluence jest bardzo duży, więc trzeba go odpowiednio przygotować, aby zmieścił się w limicie. Można tego dokonać poprzez podzielenie dokumentów na mniejsze części, ale jest to dodatkowy krok, który wymaga dodatkowego czasu i pracy.

> Ten problem można rozwiązać poprzez stworzenie odpowiednich skryptów, które połączą wszystkie dokumenty w maksymalnie 20 plikach, oraz przekonwertują je do odpowiedniego formatu, np markdown

Trzecim minusem jest synchronizacja dokumentów. Jeżeli dokumentacja w Confluence jest często aktualizowana, to trzeba pamiętać o regularnym eksportowaniu i aktualizowaniu dokumentów w knowladge base.

> Ten problem można rozwiązać poprzez stworzenie automatyacji za pomocą [Cypress Recorder](https://chromewebstore.google.com/detail/cypress-recorder/glcapdcacdfkokcmicllhcjigeodacab), albo [Selenium IDE](https://chromewebstore.google.com/detail/selenium-ide/mooikfkahbdckldjjndioackbalphokd). Taki skrypt można załączać na początku każdego dnia pracy, aby zaktualizować dokumenty w knowladge base.
