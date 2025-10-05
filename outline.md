# Interaktywny Poradnik Git - Plan Treści

## Struktura Stron

### 1. Strona Główna (index.html)
**Cel**: Przyciągający wzrok landing page z interaktywnymi elementami

#### Sekcje:
- **Hero Section**
  - Animowany terminal z efektem typewritera
  - Komenda "git push origin main" z animacją
  - Krótki opis błędu i jego rozwiązania
  - CTA przyciski do różnych sekcji

- **Symulator Terminala**
  - Interaktywny terminal do testowania komend
  - Real-time walidacja komend
  - Kolorowe wyjście jak w prawdziwym terminalu
  - Przyciski z popularnymi komendami

- **Quiz Szybki Start**
  - 5 pytań sprawdzających podstawową wiedzę
  - Natychmiastowa informacja zwrotna
  - System punktów i odznak
  - Przejście do pełnego tutoriala

- **Statystyki i Osiągnięcia**
  - Liczba użytkowników
  - Ukończone tutoriale
  - Popularne komendy
  - Najczęstsze błędy

### 2. Strona Tutorial (tutorial.html)
**Cel**: Kompletny przewodnik krok po kroku

#### Moduły:
- **Moduł 1: Podstawy Git**
  - Co to jest Git?
  - Instalacja i konfiguracja
  - Podstawowe komendy
  - Konfiguracja użytkownika

- **Moduł 2: Pierwsze Kroki**
  - Inicjalizacja repozytorium
  - Dodawanie plików
  - Tworzenie commitów
  - Przeglądanie historii

- **Moduł 3: Praca z Remote**
  - Dodawanie zdalnych repozytoriów
  - Push i pull
  - Klonowanie repozytoriów
  - Praca z GitHub/GitLab

- **Moduł 4: Gałęzie (Branches)**
  - Tworzenie i przełączanie branchy
  - Merge vs rebase
  - Rozwiązywanie konfliktów
  - Praca zespołowa

#### Interaktywne Elementy:
- **Kreator Konfiguracji**: Interaktywny formularz do ustawienia Git
- **Symulacja Konfliktów**: Praktyczne ćwiczenia rozwiązywania problemów
- **Progress Tracker**: Śledzenie postępu w nauce
- **Code Playground**: Bezpieczne środowisko do testowania

### 3. Strona Generator Komend (generator.html)
**Cel**: Praktyczne narzędzie do generowania komend Git

#### Funkcje:
- **Generator Podstawowych Komend**
  - Wybór operacji z listy
  - Opcje dodatkowe (force, all, itp.)
  - Podgląd wygenerowanej komendy
  - Kopiowanie do schowka

- **Generator Zaawansowanych Komend**
  - Komendy z wieloma parametrami
  - Filtry i opcje zaawansowane
  - Szablony dla popularnych scenariuszy
  - Historia wygenerowanych komend

- **Kreator Aliasów**
  - Tworzenie skrótów do często używanych komend
  - Gotowe zestawy aliasów
  - Import/eksport konfiguracji
  - Udostępnianie aliasów

- **Scenariusze Użycia**
  - Gotowe przepływy pracy
  - Rozwiązywanie konkretnych problemów
  - Najlepsze praktyki
  - Cheat sheet z komendami

### 4. Strona Quiz i Testy (quiz.html)
**Cel**: Interaktywne testy wiedzy i zabawne wyzwania

#### Rodzaje Quizów:
- **Quiz Podstawowy (15 pytań)**
  - Podstawowe komendy
  - Konfiguracja
  - Pierwsze kroki
  - Certyfikat ukończenia

- **Quiz Zaawansowany (20 pytań)**
  - Branche i merge
  - Konflikty
  - Remote workflow
  - Zaawansowane techniki

- **Wyzwania Praktyczne**
  - Symulacja rzeczywistych problemów
  - Rozwiązywanie konfliktów
  - Odtwarzanie historii
  - Debugowanie błędów

- **Daily Challenges**
  - Codzienne zadania Git
  - Ranking użytkowników
  - Nagrody i odznaki
  - Społeczność

#### System Gamifikacji:
- **Poziomy Zaawansowania**: Junior, Mid, Senior, Expert
- **Odznaki**: Za ukończenie modułów, perfekcyjne quizy, pomoc innym
- **Leaderboard**: Ranking najlepszych użytkowników
- **Streak**: Codzienna aktywność

### 5. Strona Błędy i Rozwiązania (errors.html)
**Cel**: Baza wiedzy o najczęstszych problemach

#### Kategorie Błędów:
- **Błędy Połączenia**
  - "fatal: origin does not appear to be a git repository"
  - "Could not resolve hostname"
  - "Permission denied (publickey)"

- **Błędy Konfliktów**
  - "CONFLICT (content): Merge conflict in..."
  - "Your local changes would be overwritten"
  - "Automatic merge failed"

- **Błędy Konfiguracji**
  - "Please tell me who you are"
  - "fatal: not a git repository"
  - "No such remote 'origin'"

- **Błędy Push/Pull**
  - "rejected - non-fast-forward"
  - "failed to push some refs"
  - "Your branch is ahead of 'origin/main' by X commits"

#### Format Rozwiązań:
- **Opis Błędu**: Co się stało i dlaczego
- **Rozwiązanie Krok po Kroku**: Szczegółowa instrukcja
- **Komendy**: Gotowe komendy do wklejenia
- **Prewencja**: Jak unikać tego błędu w przyszłości
- **Alternatywne Rozwiązania**: Inne sposoby naprawy

## Interaktywne Elementy Wspólne

### 1. Terminal Emulator
- **Funkcje**: Pełna emulacja terminala
- **Komendy**: git, ls, cd, cat, echo
- **Kolory**: Syntax highlighting
- **History**: Zapamiętywanie komend

### 2. Code Playground
- **Edytor**: Monaco Editor (VS Code)
- **Języki**: Markdown, JSON, YAML
- **Podgląd**: Live preview zmian
- **Zapis**: Eksport konfiguracji

### 3. Progress System
- **LocalStorage**: Zapisywanie postępu
- **Achievements**: System odznak
- **Statistics**: Statystyki nauki
- **Sharing**: Udostępnianie postępu

### 4. Interactive Diagrams
- **Git Flow**: Animowane diagramy
- **Branch Visualization**: Drzewo commitów
- **Merge Scenarios**: Symulacje merge
- **Conflict Resolution**: Wizualizacje konfliktów

## Treść Edukacyjna

### Podstawowe Komendy do Wyjaśnienia:
1. **git init** - inicjalizacja repozytorium
2. **git add** - dodawanie plików do stage
3. **git commit** - zapisywanie zmian
4. **git status** - sprawdzanie statusu
5. **git log** - przeglądanie historii
6. **git push** - wysyłanie zmian
7. **git pull** - pobieranie zmian
8. **git clone** - klonowanie repozytorium
9. **git branch** - zarządzanie branchami
10. **git merge** - łączenie branchy

### Zaawansowane Tematy:
- **Rebase vs Merge**: Różnice i zastosowania
- **Cherry-pick**: Wybieranie konkretnych commitów
- **Stash**: Tymczasowe zapisywanie zmian
- **Submodules**: Praca z submodułami
- **Hooks**: Automatyzacja zadań
- **Bisect**: Szukanie błędów binarnie
- **Reflog**: Przywracanie utraconych commitów
- **Git Flow**: Organizacja pracy zespołowej

### Najczęstsze Problemy:
1. **Zły push**: Jak cofnąć push
2. **Konflikty merge**: Krok po kroku
3. **Zapomniany .gitignore**: Jak usunąć śledzone pliki
4. **Duże pliki**: Problem z LFS
5. **Hasło za każdym razem**: SSH keys
6. **Zły author commita**: Zmiana autora
7. **Usunięty branch**: Przywracanie brancha
8. **Dirty working directory**: Czyszczenie repo