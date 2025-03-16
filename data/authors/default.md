---
name: Bartosz Golebiowski
avatar: /static/avatar.png
occupation: Prompt engineering trainer
company: Bartosz golebiowski bargol usługi it
email: contact@bgolebiowski.com
twitter: https://twitter.com/BartoszEbiowski
linkedin: https://www.linkedin.com/in/bartosz-go%C5%82%C4%99biowski-12723a159/
github: https://github.com/bartoszgolebiowski
---

Rozwiązuję trudne problemy.

—

Jestem architektem rozwiązań dla kilku powiązanych produktów programistycznych. Pracuję w branży IT od ponad 7 lat.

**Portfolio:**

![Translation service workflow](/blog/portfolio/translation-service.png)  
**Tytuł**: Dynamiczna usługa zarządzania tłumaczeniami  
**Moja rola**: Zaprojektowałem ogólną architekturę i rozwiązanie techniczne.  
**Opis projektu**: Dynamiczna usługa tłumaczeń  
**Cel**: Umożliwia użytkownikom dynamiczną aktualizację lub import tłumaczeń.  
**Kluczowe funkcje**:

- Użytkownicy mogą aktualizować tłumaczenia za pomocą interfejsu, udostępniając zmiany wszystkim użytkownikom dla konkretnego języka.
- Wspiera importowanie kompletnych plików CSV dla płynnego wdrożenia tłumaczeń.

**Stos technologiczny**:

- Frontend: Zbudowany w React.
- Magazyn: Zasoby tłumaczeń przechowywane w Amazon S3.
- Pamięć podręczna: Zasoby są przechowywane w cache za pomocą CloudFront dla zoptymalizowanej dostawy.
- Integracja:
  - AWS Cognito i AWS Amplify są wykorzystywane do integracji z S3 z poziomu interfejsu.

**Umiejętności i wyniki**:

- React
- Amazon S3
- AWS CloudFront
- AWS Amplify
- CSV

---

![Pipelines](/blog/portfolio/pipelines.png)  
**Tytuł**: Rozwój oparty na trunku z CI/CD przy użyciu Jenkinsa  
**Moja rola**: Architekt i wykonawca projektu  
**Opis projektu**: Rozwój oparty na trunku z CI/CD przy użyciu Jenkinsa  
**Przebieg pracy**:

- Rozwój oparty na trunku z gałęziowaniem, zasadami commitów oraz flagami funkcjonalności.

**Potoki CI/CD**:

- CI: Automatyczne testy, tworzenie artefaktów, integracja z GitHub, publikacja artefaktów, tagowanie i przesyłanie do zdalnego repozytorium.
- CD: Dedykowany potok do wdrażania wersji wydanych.

**Artefakty**:

- Tworzone raz i wykorzystywane w wszystkich środowiskach.

**Konfiguracja**:

- Zarządzane przy użyciu plików konfiguracyjnych i zmiennych środowiskowych.

**Umiejętności i wyniki**:

- Jenkins
- Git
- GitHub
- Docker

---

![Step function](/blog/portfolio/step-functions.png)  
**Tytuł**: Asynchroniczna integracja z Kubernetes przy użyciu AWS Step Function przez SQS  
**Moja rola**: Odpowiedzialny za projektowanie i wdrażanie funkcjonalności zgodnie z wymaganiami biznesowymi  
**Opis projektu**: Złożona funkcjonalność importu.

**Aplikacja Kubernetes**:

- Publikuje zdarzenie inicjujące funkcjonalność importu danych.

**Szyna zdarzeń**:

- Odbiera zdarzenie, umożliwiając skalowalne dodawanie konsumentów.

**Nasłuchiwacz SQS**:

- Nasłuchuje emisji zdarzeń ze szyny zdarzeń i uruchamia funkcję krokową (Step Function).

**Przebieg pracy funkcji krokowej (Step Function)**:

- Cel: Proces długotrwały składający się z około 15-20 bloków:
  - S3: Odczytuje dane.
  - DynamoDB: Śledzi status przepływu i udostępnia aktualizacje procesu.
  - SQS z tokenami zadań: Umożliwia synchroniczną komunikację z Kubernetes.
  - Lambdas: Obsługuje logikę niestandardową dla konkretnych zadań.

**Umiejętności i wyniki**:

- AWS Lambda
- Amazon DynamoDB
- Kubernetes
- Amazon S3
