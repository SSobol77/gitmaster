# Interaktywny Poradnik Git - Specyfikacja Interakcji

## Główne Funkcje Interaktywne

### 1. Symulator Terminala Git
- **Lokalizacja**: Centrum strony głównej
- **Funkcja**: Symulacja pracy z terminalem Git
- **Interakcja**: Użytkownik wpisuje komendy, system pokazuje prawdziwe wyniki
- **Komendy do obsługi**: git init, git add, git commit, git push, git pull, git status, git log
- **Walidacja**: Sprawdzanie poprawności składni komend
- **Feedback**: Kolorowe komunikaty sukcesu/błędów

### 2. Quiz Wiedzy o Git
- **Lokalizacja**: Dolna część strony głównej
- **Funkcja**: Testowanie wiedzy o podstawowych komendach Git
- **Interakcja**: Wybór odpowiedzi z wielu opcji
- **Pytania**: 15 pytań o podstawy Git, przepływ pracy, rozwiązywanie konfliktów
- **Nagrody**: System punktów i odznak
- **Postęp**: Pasek postępu i statystyki

### 3. Przewodnik Krok po Kroku
- **Lokalizacja**: Strona "Tutorial"
- **Funkcja**: Interaktywny przewodnik po podstawowych operacjach
- **Interakcja**: Klikalne kroki z animacjami
- **Scenariusze**: 
  - Inicjalizacja repozytorium
  - Pierwszy commit
  - Praca z branchami
  - Rozwiązywanie konfliktów
- **Nawigacja**: Przyciski "Poprzedni"/"Następny" krok

### 4. Kreator Komend Git
- **Lokalizacja**: Strona "Generator"
- **Funkcja**: Interaktywny kreator komend Git
- **Interakcja**: Wybór opcji z rozwijanych list
- **Parametry**: 
  - Typ operacji (commit, push, pull, branch, merge)
  - Opcje dodatkowe (force, all, specific files)
  - Parametry połączenia (remote, branch)
- **Wynik**: Wygenerowana komenda gotowa do użycia

### 5. Śledzenie Postępu Nauki
- **Lokalizacja**: Panel boczny na każdej stronie
- **Funkcja**: Personalizowany system śledzenia postępu
- **Interakcja**: Zapisywanie postępu w localStorage
- **Elementy**: 
  - Odznaki za ukończone moduły
  - Statystyki quizów
  - Historia komend
  - Osiągnięcia

## Przepływ Interakcji Użytkownika

1. **Wejście**: Użytkownik trafia na stronę główną
2. **Eksploracja**: Przegląda symulator terminala i próbuje komend
3. **Nauka**: Przechodzi przez interaktywny tutorial
4. **Testowanie**: Rozwiązuje quizy sprawdzające wiedzę
5. **Praktyka**: Używa generatora komend do tworzenia własnych
6. **Postęp**: Śledzi swoje osiągnięcia i postęp nauki

## Wymagania Techniczne

- **Responsywność**: Działanie na wszystkich urządzeniach
- **Dostępność**: Wsparcie dla klawiatury i czytników ekranu
- **Wydajność**: Szybkie ładowanie i płynne animacje
- **Bezpieczeństwo**: Brak wykonywania prawdziwych komend systemowych