---
title: 'Skuteczne metody nauki z wykorzystaniem AI'
date: '2024-08-15'
tags: ['nauka', 'technologie', 'ChatGPT', 'Notion', 'nauka języków obcych', 'notatki', 'efektywna nauka']
draft: false
summary: 'W artykule przedstawiam praktyczne metody wykorzystania sztucznej inteligencji, w tym ChatGPT, do nauki. Opisuję, jak AI może wspierać tworzenie notatek z kursów online, ułatwiać naukę języków obcych oraz pomagać w zrozumieniu skomplikowanych koncepcji. Dzięki tym narzędziom możliwe jest efektywne przyswajanie wiedzy i budowanie solidnej bazy informacji.'
---

# Wprowadzenie
W tym artykule chciałbym podzielić sie z wami moimi sposobami i narzędziami, które pomogą wam w nauce trudnych tematów. Jednym z takich narzędzi jest sztuczna inteligencja, a dokładniej chat GPT. W poniższym artykule opiszę jak można wykorzystać AI do nauki trudnych tematów.

## Generowanie notatek z kursów online
Gdy przygotowywałem się do certyfikacji AWS, zauważyłem, że pod koniec kursu online zapominam o rzeczach, które były na początku. Jest to szczególnie widoczne w przypadku kursów, które trwają kilka tygodni takich jak [ten kurs](https://www.udemy.com/course/aws-certified-solutions-architect-associate-saa-c03). Dlatego postanowiłem wykorzystać AI do generowania notatek. 

Każdy materiał video posiadał transkrypcję którą można było wykorzystać. Z pomocą narzędzi takich jak modele [GPT-4o](https://platform.openai.com/docs/models/gpt-4o), czy też nawet [GPT-4o mini](https://platform.openai.com/docs/models/gpt-4o-mini), można wygenerować notatki z kursu. Pierwszym krokiem jest było pozyskanie takiej transkrypcji. W przypadku kursów na Udemy wyglądało to tak:

![Udemy transkrypcja](/blog/skuteczne-metody-nauki-z-ai/transkrypcja.jpg?style=centerme)

Następnie można było wykorzystać narzędzia takie jak [ChatGPT](https://chatgpt.com/) lub dowolny inny chat AI do wygenerowania notatek. Wystarczyło wkleić transkrypcję do narzędzia, a następnie wygenerować notatki. Do wklejonych transkrypcji nie dodawałem żadnego dodatkowego prompta. [Przykład chatu](https://chatgpt.com/share/2d7af9f8-76c2-4ede-8a1f-206b5f7d6055). Po wygenerowaniu notatek, warto je przeczytać i uzupełnić o własne uwagi. Tworzyłem takie notatki zaraz po zakończeniu danego rozdziału kursu. 

Teraz tylko pytanie co dalej zrobić z naszymi "notatkami". Ja wykorzystałem narzędzie [Notion](https://www.notion.so/) do ich zapisywania notatek. W ten sposób miałem dostęp do nich z każdego miejsca, a także powoli zaczynałem budować swoją bazę wiedzy. Tutaj mamy przykład notatek z kursu: [AWS Certified SysOps Administrator Associate 2024](https://shadowed-health-fce.notion.site/AWS-Certified-SysOps-Administrator-Associate-2024-905050c84f37417aaefcb56ea1e533f2)

Dodatkowy plus takiego podejścia jest taki, że mamy dostęp do notatek z kursu w formie tekstowej, a nie tylko w formie video. Dzięki temu możemy szybko wyszukać interesujące nas informacje. Dodatkowo, Notion posiada funkcję wyszukiwania w notatkach. Ciekawym pomysłem jest również utylizacja [Notion AI](https://www.notion.so/product/ai), która potrafi wykonać semantyczne wyszukiwanie w naszych notatkach.

## Nauka języków obcych
Moim problem w nauce języka obcego jest to, że podczas kowersacji z lektorem pojawiają się nowe słowa. Nawet gdy lektor wyjaśni mi znaczenie, to i tak nie jestem pewny czy dobrze zrozumiałem, ponieważ nie zapisałem sobie tych słów. Jest to szczególnie uciążliwe gdy jakieś słowo pojawia się kilka razy w rozmowie a ja ciągle zapominam o jego znaczeniu. Po zakończeniu rozmowy, zazwyczaj zapominam o tych słowach.

Dlatego postanowiłem wykorzystać AI. W tym celu wykorzystałem zapisywałem rozmowy z lektorem, a następnie wygenerowałem transkrypcję. Skorzystam z płatnych rozwiązań, mianowicie serwisu [Amazon Transcribe](https://aws.amazon.com/transcribe/).  Gdy już posiadałem trakskrypt wykorzystałem narzędzia takie jak [ChatGPT](https://chatgpt.com/) do wygenerowania tabelek ze słówkami. [Przykład czatu](https://chatgpt.com/c/89c8450f-771f-4f76-98b6-027d380fcddc). W ten sposób miałem dostęp do słówek, które pojawiły się w rozmowie. 

Drugim krokiem była walidacja moich prac domowych. Traciłem około 5-10 minut każdej lekcji na sprawdzanie moich prac domowych. Wolałbym ten czas poświęcić na naukę niż na sprawdzanie. No i znowu AI do akcji. Wystarczyło wkleić zdjęcie mojej pracy domowej do chatu AI i poprosić o sprawdzenie. 

![Praca domowa](/blog/skuteczne-metody-nauki-z-ai/praca-domowa.jpg?style=centerme)

W ten sposób miałem więcej czasu na naukę, a także miałem pewność, że moje prace domowe są poprawne. Gdy miałem jakieś wątpliwości co do poprawności mojej pracy domowej, konsultowałem wyniki z lektorem, a gdy byłem pewny, że wyniki są poprawne, przechodziliśmy prosto do kolejnej lekcji. Wklejam odpowiedź chatu AI do mojej pracy domowej. Udostępnianie chatów z załącznikami nie jest aktualnie wspierane.

```markdown
Let's go through each exercise step by step to check for mistakes and calculate your points.

1. Ordnen Sie zu. (Assign the places)
a: Hotel - Correct
b: Post - Correct
c: Bahnhof - Correct
d: Stadtmitte - Correct
e: Bank - Correct
f: Stadtplan - Correct
Points: 5/5

2. Beschreiben Sie den Weg. Ergänzen Sie. (Describe the way. Complete.)
a: geradeaus - Correct
b: biegen - Correct
c: links - Correct
d: kilometer - Correct
e: rechts - Correct
f: brücke - Correct
g: ampel - Correct
Points: 6/6

3. Was ist richtig? Kreuzen Sie an und ergänzen Sie. (What is correct? Check and complete.)
a: Die Post ist zwischen dem Hotel. - Correct
b: Das Café ist neben der Bank. - Correct
c: Die Polizei ist vor dem Bahnhof. - Incorrect (You marked "hinter" as correct. The text says "vor dem Bahnhof," so this is incorrect.)
d: Der Dom ist in der Stadtmitte. - Correct
e: Der Bahnhof ist hinter der Polizei. - Correct
f: Das Hotel ist über der Post. - Incorrect (The correct phrase would be "über der Post," but it seems to have a small mistake in completion; the article "der" is not completed.)
Points: 4/6 (For each correct answer, you get one point. There were 6 questions, and 4 were correct.)

4. Was sagen die Personen? Ergänzen Sie. (What do the people say? Complete.)
1:

a: kommen - Correct
b: helfen - Correct
c: suchen - Correct
d: sehen - Correct
e: Sehr nett! - Correct
2:

a: fragen - Correct
b: tut mir leid - Correct
c: Trotzdem - Correct
Points: 9/9

Total Points:
Exercise 1: 5/5
Exercise 2: 6/6
Exercise 3: 4/6
Exercise 4: 9/9
Total Points Collected: 24/26
```

Można oczywiście mnożyć przykłady pozyskiwania słownictwa, można wrzucać zdjęcia z podręczników jak i również z ćwiczeniówek i poprosić o wygenerowania słownictwa w postaci tabelek, CSV, czy też innych formatów. Następnie te słownictwo można umieścić do narzędzi takich jak [Anki](https://apps.ankiweb.net/), czy też inne. 

## Nauka nowych rzeczy

Branża IT jest bardzo dynamiczna. Zdałem sobię sprawę, że nie jestem w stanie na bieżąco śledzić wszystkich nowości. Chciałbym chociaż dobrze zrozumieć koncepty, które są niezmienne i które są podstawą dla nowości. Dlatego postanowiłem wykorzystać AI do nauki tych koneptów.

W wolnych chwilach zaczytuję się [Whitepapers](https://aws.amazon.com/whitepapers/), gdzie poruszane są podstawowe koncepty. Ostatnim z nich był [Implementing Microservices on AWS](https://docs.aws.amazon.com/whitepapers/latest/microservices-on-aws/microservices-on-aws.html). Jednak pewne sekcje tego dokumentu były dla mnie zbyt trudne do zrozumienia, albo nie rozumiałem ich w całości. Jest to poważny problem, ponieważ nie chciałbym iść dalej, nie rozumiejąc o co chodzi. W takim przypadku wykorzystałem AI do wyjaśnienia mi tych trudnych sekcji. Wystarczyło wkleić trudną sekcję do narzędzia takiego jak [ChatGPT](https://chatgpt.com/) i poprosić o wyjaśnienie. Dzięki temu mogłem dopytać o konkretne fragmenty, które były dla mnie niezrozumiałe i uzyskać odpowiedzi. Gdy już nawet te odpowiedzi były dla mnie zbyt trudne, prosiłem aby wyjaśniono mi to w bardziej przystępny sposób, tak jakbym miał 10 lat. [Przykład chatu](https://chatgpt.com/share/dbc7e872-24a4-4659-ad50-77dae9bc85fd)

Czasami konwersacje z chatem AI były długie, ponieważ dopytywałem o kolejne kewstie. Chat doskonale sobie radzi w objaśnianiu konceptów, ale nie zawsze jest w stanie odpowiedzieć na konkretne pytania. W takim przypadku warto skonsultować się z ekspertem w danej dziedzinie.

## Podsumowanie

Podsumowując, wykorzystanie sztucznej inteligencji, takiej jak [ChatGPT](https://chatgpt.com/), może  usprawnić proces nauki. AI pomaga w generowaniu notatek z kursów online, ułatwia naukę języków obcych poprzez transkrypcję rozmów, automatyczne sprawdzanie prac domowych, a także wspiera rozumienie nowej wiedzy. Dzięki temu możemy skupić się na kluczowych aspektach nauki, maksymalizując efektywność i przyspieszając nasz rozwój.

Jeżeli jesteś zainteresowany rozszerzeniem swojej wiedzy, albo wiedzy swoim pracowników z zakresu prompt engineeringu, zapraszam do zapoznania się z moim [kursem](https://aidlazabieganych.pl/training). 
