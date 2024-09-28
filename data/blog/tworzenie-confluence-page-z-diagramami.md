---
title: 'Tworzenie dokumentów Confluence i Notion z diagramami mermaid'
date: '2024-09-29'
tags: ['Dokumentacja', 'Confluence', 'Notion',  'Mermaid', 'Markdown', 'Draw.io', 'AI', "ChatGPT"]
draft: false
summary: 'Artykuł opisuje proces tworzenia dokumentacji biznesowej z wykorzystaniem narzędzi takich jak Confluence, Notion oraz AI. Przedstawiono kroki od surowych notatek po profesjonalną dokumentację, w tym integrację diagramów za pomocą Mermaid. Notion lepiej radzi sobie z markdown i diagramami, podczas gdy Confluence wymaga więcej pracy, ale osiąga podobne rezultaty.'
---

# Wprowadzenie

Ostatnio coraz częściej tworzę dokumenty w [Confluence](https://www.atlassian.com/software/confluence/resources/guides/get-started/overview#key-terms). Jest to narzędzie do tworzenia dokumentacji. W tym artykule chciałbym podzielić się z wami jak tworzę takie dokumenty z wykorzystaniem AI. Podczas opisywania procesów biznesowych często wspieram się [Mermaid](https://mermaid.js.org/intro/). Jest to narzędzie do tworzenia diagramów i wykresów. Do wizualizacji korzystam z [Draw.io](https://www.drawio.com/).

Dla osób które gardzą rozwiązaniem Confluence, przygotowałem również wizualizacje, jak tworzyć identyczne dokumenty w [Notion](https://www.notion.so/).

# Od czego zacząć?

Załóżmy, że chcesz stworzyć dokumentację procesu biznesowego. Dla przykładu będziemy tworzyć dokumentację procesu [OAuth 2.0](https://oauth.net/2/).
Pierwszym krokiem będzie zgromadzenie albo stworzenie surowych notatek, które to będą podstawą do stworzenia dokumentu. Zapraszam do zapoznania się z artykułem [Tworzenie schludnych dokumentów z surowych materiałów](https://aidlazabieganych.pl/blog/tworzenie-dokumentu-z-surowych-notatek), gdzie przedstawiam proces tworzenia dokumentu z surowych notatek. 

A tutaj jest prosta wizaliazacja tego procesu:

![Proces tworzenia dokumentu](/blog/tworzenie-confluence-page-z-diagramami/surowe-notki.jpg?style=centerme)

Podczas tworzenia confluence page przydzą nam się zarówno notatki w postaci markdkown jak i dokument w formacie docx.

# Confluence

## Mam piękne notatki, co dalej?

Teraz wystarczy zaimportować notatki.  
Markdown jest świetnym formatem dla dokumentów, ale Confluence radzi sobie z nim słabo.

![Markdown to Confluence](/blog/tworzenie-confluence-page-z-diagramami/markdown-to-confluence.jpg?style=centerme)

Zdecydowanie lepiej sprawdza się plik w formacie docx.

![Word to Confluence](/blog/tworzenie-confluence-page-z-diagramami/word-na-confluence.gif)

## Diagramy

Natomiast do generowania diagramów mermaid, notatki w formacie markdown są idealne! W tym celu stworzyłem [customową wersję GPT](https://chatgpt.com/g/g-ttYhjLnw0-markdown-to-mermaid-converter), która to zamienia notatki w formacie markdown na diagramy mermaid. 

![Mermaid](/blog/tworzenie-confluence-page-z-diagramami/markdown-na-mermaid.gif?style=centerme)

Czasami AI ma problemy z rozpoznaniem diagramów, ale w większości przypadków radzi sobie dobrze. Gdyby jednak wasz diagram wyglądał niekorzystnie, zawsze możecie przejrzeć dokumentację [Mermaid](https://mermaid.js.org/syntax/flowchart.html), oraz zasugerować AI jaki typ diagramu chcecie uzyskać.

W celu szybkiej wizualizacji diagramów korzystam z [mermaid.live](https://mermaid.live/edit#pako:eNp1U7tuwzAM_BVBc_oDHgKkSYcCGYI8OhReCJmxhdqSq0fTNMi_l7b8jB1PJnnHO1LSjQudII-4xW-PSuBGQmqgiBWjrwTjpJAlKMdOFs00-2r0ZbawziUqN82vvMsOaH7QMLB1pI38Aye1YiE_5ezRam8E9rw201ECqfL4slw2piL2phzhT_ttKDd5QgR3EdFVQs1odNt4DZVhkz0m0qBwzOmB-4B-7NvXo7bteMZA6GHEOdUqO4OWhNlWp1KxHaQ4GmnYOEy1NpgQQUJuGdAUrQzGcyLdNO_WenzY-5quwLMNddNfpMue8rqtjXz-igxUOqfGztqwlRBoLTvqL1SzplsPjecRfKQ6viD96jfgoDE-IY85A7UPyGUCDgO43m19TapmD7rh6DbSljlcW1VsoXzBCzQFyITe162ixtxlWGDMI_pN8Aw-dzGP1Z2g4J0-XJXgkTMeF9yXlYnmObZJeg6fWlN4pmOn2GifZk10_wf0Z1Mj). Możecie tam na bieżąco edytować diagramy mermaid. 

Po dokonaniu zmian w diagramie, wystarczy tylko zaimportować go do confluence. Można zrobić zrzut ekranu, albo skorzystać z [draw.io](https://www.drawio.com/). 

![Mermaid to Draw.io](/blog/tworzenie-confluence-page-z-diagramami/mermaid-na-confluence.gif)

Korzystam również z [Expand Macro](https://confluence.atlassian.com/doc/expand-macro-223222352.html) w confluence, które pozwala na zwinięcie długich diagramów.

A tak wygląda gotowa dokumentacja:

![Dokumentacja](/blog/tworzenie-confluence-page-z-diagramami/rezultat.gif?style=centerme)

# Notion

Dla rozwiązania Notion, proces jest prostszy, ponieważ Notion radzi sobie z markdown jak i diagramami mermaid wyśmienicie.

Kroki są bardzo podobne jak w przypadku Confluence.
1. Stworzenie notatek w formacie markdown, format docx jest tutaj zbędny.
2. Zaimportowanie notatek do Notion.
3. Stworzenie diagramów w mermaid na podstawie notatek markdown z wykorzystaniem [customowej wersji GPT](https://chatgpt.com/g/g-ttYhjLnw0-markdown-to-mermaid-converter).
4. Zaimportowanie diagramów do Notion.

![Markdown to Notion](/blog/tworzenie-confluence-page-z-diagramami/notion.gif?style=centerme)


# Podsumowanie

![Podsumowanie](/blog/tworzenie-confluence-page-z-diagramami/podsumowanie.jpg?style=centerme)

Takie podejście ułatwia mi tworzenie wartościowej dokumentacji. Dodatkowo wizualizacja procesów biznesowych za pomocą diagramów Mermaid pozwala na szybsze zrozumienie procesów przez innych, najczęściej tych którzy nie mają czasu na czytanie długich dokumentów. Aktualizacja takich diagramów jest również prosta. Wystarczy stworzyć prompt, który to będzie zawierał informacje o zmianach w procesie, jako załącznik dołączyć zdjęcie diagramu lub surową postać markdown, a AI wygeneruje nowy diagram.

Rozwiązanie Notion lepiej radzi sobie z importowaniem markdown, jak i z diagramami mermaid. Brawo Notion! Confluence wymaga więcej pracy, aby uzyskać podobne rezultaty, ale również daje radę.

Ciekawym pomysłem jest wykorzystanie wbudowanych narzędzi systemowych speach-to-text dla [Windows](https://support.microsoft.com/en-us/windows/use-voice-typing-to-talk-instead-of-type-on-your-pc-fec94565-c4bd-329d-e59a-af033fa5689f) czy [Mac](https://support.apple.com/guide/mac-help/use-dictation-mh40584/mac), a następnie przekształcenie takich surowych notatek przez AI, aby uzyskać ustrukturyzowane notatki w formacie markdown. 