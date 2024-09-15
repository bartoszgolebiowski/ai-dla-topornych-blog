---
title: 'Raporty dla managmentu - jak przygotować i zwizualizować raporty za pomocą SQL i promptów'
date: '2024-09-15'
tags: ['Raporty', 'SQL', 'ChatGPT', 'Github Copilot', 'Wizualizacja Danych', 'BI', 'Analityka', 'AI', 'Bezpieczeństwo Danych']
draft: false
summary: 'W artykule omówiono, jak przygotować raporty dla managmentu za pomocą SQL i promptów. Przedstawiono kroki przez generowanie zapytań SQL za pomocą narzędzi AI, aż po wizualizację danych. Podkreślono również kwestie bezpieczeństwa danych i zalecenia dotyczące korzystania z narzędzi zaakceptowanych przez dział bezpieczeństwa.'
---

# Wprowadzenie

Zbliża się koniec miesiąca lub kwartału i czas na przygotowanie raportów dla managmentu. Dobrze byłoby zawrzeć w nich informacje o sprzedaży, kosztach, zyskach, itd. W większych firmach takie raporty są przygotowywane przez zespół analityków, którzy korzystają z narzędzi BI, takich jak Power BI. Jednakże, w mniejszych firmach, gdzie nie ma zespołu analityków, przygotowanie takiego raportu może być wyzwaniem. W tym artykule przedstawię, jak można przygotować raporty za pomocą SQL i promptów. 

> Jako autor tego artykułu chciałbym podkreślić, że posiadam podstawową wiedzę z SQL i zerowe umiejętności wizualizacji danych za pomocą narzędzi BI.

# Wymagania wstępne

Załóżmy, że mamy relacyjną bazę danych, w której przechowujemy informacje o sprzedaży. 

Pierwszym elementem jest zdobycie dostępu do tej bazy danych. Dostęp na poziomie samego odczytu jest wystarczający. Jest on potrzebny do wykonywania zapytania SQL, które wyciągną dane z bazy danych. Drugim elementem jest zdobycie informacji na temat schematu bazy danych. Ten schemat jest niezbędny do zrozumienia, jakie tabele są ze sobą powiązane. Jest to ważny element, dzięki któremu będziemy w stanie wygenerować odpowiednie zapytania SQL za pomocą opisu co chcemy wydobyć z bazy danych.

Schema bazy danych dla naszego przykładu wygląda następująco:

![ERDiagram](/blog/raporty-dla-managmentu/erdiagram.jpg)

Plik ze schematem bazy danych dla naszego przykładu można znaleźć [tutaj](/blog/raporty-dla-managmentu/SampleClassicmodels-schema.sql).

# Przygotowanie zapytań SQL 
Najważniejszym elementem potrzebnym do przygotowania zapytania SQL za pomocą AI jest schemat bazy danych. Dzięki schematowi AI jest w stanie zrozumieć, jakie tabele są ze sobą powiązane. Dlatego należy dostarczyć do promptu schemat bazy danych, a następnie opisać, co chcemy uzyskać.

## Opis scenariusza
Scenariusz który chcemy zrealizować to przygotowanie raportu dla managmentu, który zawiera informacje o sprzedaży.
W raporcie chcemy zawrzeć informacje o:
- Nazwie produktu oraz ile sztuk zostało sprzedanych i wygenerowany przychód.
- Produkty powinny być posortowane według przychodu.
- Raport powinien być wygenerowany dla zakresu dat od 2023-10-01 do 2023-10-30.

## Generowanie zapytań SQL
Do wygenerowania SQL za pomocą AI przewidziałem 3 możliwości:

1. Skorzystanie z narzędzia [ChatGPT](https://chatgpt.com/) i załączenie schematu bazy danych za pomocą pliku.
2. Skorzystanie z narzędzia [ChatGPT](https://chatgpt.com/) i załączenie schematu bazy danych w prompcie.
3. Skorzystanie z narzędzia [Github Copilot](https://github.com/features/copilot) i wygenerowanie zapytań SQL za pomocą chatu w Visual Studio Code.

### Chat GPT i załączenie schematu bazy danych za pomocą pliku

Rozwiązanie jest trywialne, wystarczy załączyć schemat bazy danych w formacie SQL, oraz opisać co chcemy uzyskać. [Przykład chatu](https://chatgpt.com/share/66e6cab9-9848-8010-9bf9-55b2828c2430).

### Chat GPT i załączenie schematu bazy danych w prompcie

Bardzo podobne do poprzedniego rozwiązania, z tą różnicą, że schemat bazy danych jest załączony w prompcie. [Przykład chatu](https://chatgpt.com/share/66e6cb38-b704-8010-bdcd-d798d4baa1bf).

### Github Copilot

W większości nowoczesnych IDE można skorzystać z narzędzia Github Copilot, które generuje kod za pomocą AI. W tym przypadku, wystarczy opisać co chcemy uzyskać, a Github Copilot wygeneruje kod za nas. 

![Github Copilot](/blog/raporty-dla-managmentu/github-copilot.jpg)

Wszystkie rezultaty były podobne:
```sql
SELECT 
    p.productCode,
    p.productName,
    SUM(od.quantityOrdered) AS totalQuantitySold,
    SUM(od.quantityOrdered * od.priceEach) AS totalRevenue
FROM 
    products p
JOIN 
    orderdetails od ON p.productCode = od.productCode
JOIN 
    orders o ON od.orderNumber = o.orderNumber
WHERE 
    o.orderDate BETWEEN '2023-10-01' AND '2023-10-30'
GROUP BY 
    p.productCode, p.productName
ORDER BY 
    totalRevenue DESC;
```

# Wizualizacja danych
Po wygenerowaniu zapytania SQL, możemy je wykonać w naszej bazie danych. Rezultat zapytania możemy zapisać do pliku CSV lub pliku tekstowego. 

## Wizualizacja rezultatów
Do wizualizacji rezultatów skorzystałem z narzędzia [ChatGPT](https://chatgpt.com/). Rezultaty zapytania SQL można zaimportować do narzędzia, a następnie wygenerować wizualizację. [Przykład chatu](https://chatgpt.com/share/66e6d251-9e54-8010-8547-4e1feb5c0be3).

Najciekawsze wizualizacje:

![Pie chart](/blog/raporty-dla-managmentu/pie-chart.jpg)

![Bar chart](/blog/raporty-dla-managmentu/bar-chart.jpg)

Ciekawą opcją jest to, że możemy iterować nasze rozwiązanie! Gdy jakiś z elementów jest nieczytelny, możemy zapytać AI o wygenerowanie wizualizacji z innymi parametrami, np. zmiana typu wykresu, kolorów itp.

# Wnioski

Generowanie SQL za pomocą opisu słownego przy załączeniu schematu bazy danych do prompta może być bardzo pomocne w sytuacjach, gdy potrzebujemy wyciągnąć dane z bazy danych, ale nie mamy umiejętności w pisaniu zapytań SQL. Nawet modele typu **GPT-4mini** są w stanie wygenerować zapytanie SQL, które spełnia nasze oczekiwania. Jest to bardzo optymistyczny znak, że AI może pomóc w pracy analityka, który nie ma umiejętności w SQL.

Kwestia bezpieczeństwa jest problematyczna. Udostępnianie schematu bazy danych wraz z opisem co chcemy uzyskać może być ryzykowne, jednak to nie oznacza, że nie można tego zrobić.  

**Opcja numer 2** została specjalnie przygotowana, aby pokazać, że można załączyć schemat bazy danych w treści promptu, a nie jako załącznik. Wystarczy tylko podmienić narzędzie jakim jest ChatGPT na wewnętrzne narzędzie AI zatwierdzone przez dział bezpieczeństwa w firmie i można zacząć korzystać z tego rozwiązania.  
**Opcja numer 3** czyli wykorzystanie Github Copilot została tutaj przedstawiona, ponieważ coraz więcej firm korzysta z tego narzędzia na licencjach firmowych, co powinno gwarantować bezpieczeństwo danych.  

Wizualizacja danych z **ChatGPT** jest bardzo prosta i intuicyjna. Wystarczy zaimportować dane, a następnie wybrać odpowiedni typ wykresu. Warto zauważyć, że wizualizacja danych jest iterowalna, co oznacza, że możemy poprawić wygenerowany wykres, jeśli nie spełnia on naszych oczekiwań.  

Natomiast największym rozczarowaniem jest rozwiązanie [Microsoft Copilot for Microsoft 365](https://www.microsoft.com/pl-pl/microsoft-365/enterprise/copilot-for-microsoft-365). Jakość rezultatów była niska i zrezygnowałem z zamieszczania ich w tym artykule. Po zaimportowaniu danych do Excela, nie był w stanie wygenerować wizualizacji na porównywalnym poziomie jak w ChatGPT. Warto zauważyć, że Microsoft Copilot for Microsoft 365 jest w fazie beta, więc można spodziewać się poprawek w przyszłości.