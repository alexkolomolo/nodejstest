# NodeJS Candidate Test

## Basic knowledge questions

- What are Promises in Node.js?
    - Promise to objekt który sygnalizuje nam o stanie zakonczenia jakiej kolwiek asynchronicznej operacji. Przyjmuje on jeden callback z zmienymi resolve (stan dobrego ukonczenia operacji), reject (jak operacja się nie udała).

- What is callback hell?
    - Jak piszemy zagniężdzone fukcje z callbackami to po ukonczeniu całej operacji muśimy doprowazić callbacki z innych podfunkcji do głównego callbacku. Aby nie miec takiego problemu używamy Promise'y zamiast funkcji z zagniężdzonymi callbackami.

- What tools can be used to assure consistent style?
    - Można używać formaterów kodu, aby po ukonczeniu pisania kod miał lepszą reprezentacje (łatwiej się czytało).

- What is REPL? What purpose it is used for?
    - Znaczy to jest środowisko konsolowe (interpreter). Jak wprowadzisz w konsoli 'node' + Enter to wejdziemy w środowisko REPL. Także można urochamiac kod z dodatkowymu argumentami (np. jak w C++).

- What is the difference between Asynchronous and Non-blocking?
    - Różnica jest taka, że asynchroniczne funkcje lub programy używają nie-blokujące wyłowania. I włąśnie non-blocking robi funkcje asynchronicznymi.

- List types of Http requests supported by Node.js?
    - GET, POST, PUT, DELETE.

- Is Node.js entirely based on a single-thread?
    - Nie, jest możliwość tworzenia dodatkowych wątków.

- What is your favourite HTTP framework and why?
    - Express. Bo jest pierwszym frameworkem z którym zacząłem pracować. Jest dosyć prostym i potężnym narzędziem do pisania web aplikacji.

- What is difference between JavaScript and Node.js?
    - JS był oryginalnie stworzony na potrzeby sterowaniem aplikacji na front-endzie. Node jest przyznaczony dla pisania części back-end'owej na języku JS.

- What is TypeScript? Do you use it? Why / why not?
    - TypeScript to jest nadzbior JavaScriptu (jak C++ i C). Nie używam na razie, ale myśle jak umiesz JS i ogarniasz typowane języki to nie będziesz miał dużego problemu. Nie miałem potrzeby na używanie TypeScripta, bo JS spełnia moję wymogi.

## Problem solving

You get an error report from testing crew - User API doesn't return "Test User" data for ID: 1.
Code is in this repository.

**Find out why, fix it and write report on why did it happen.**

-       Raport nr.1    21.01.2021

    Problem: User API doesn't return "Test User" data for ID: 1
    
    Opis rozwiązania: Po inspekcji kodu w plikach 'models/users.js' i 'routes/users.js' zauważyłem kilka problemów. W pliku 'models/users.js', który reprezentuje lokalną bazę danych, nie istnieje wiersza z kluczem '1'. Był jedyny wpis z kluczem '0'. Moim zdaniem, zamiast '0' miało być '1', bo w bazie danych przyjęto zaczynać numerowanie od '1'. W pliku 'routes/users.js' była funkcja warunkowa sprawdzająca czy id użytkownika była równa 0 i tylko w przypadku '0' użytkownik otrzymywał informacją zwrotną w postaci objektu z info klienta. Także, żle był dołączony plik 'models/users.js' przez funkcje 'require', poprawilem to. Zmieniłem kolejność przypisania objektu z models do zmiennej, postawiłem ją przed funkcją warunkową i teraz ona sprawdza czy zmienna 'user' nie równa się NULL.

    *KONIEC RAPORTU*


## Create something

Use Vue.js and create simple To-Do app with backend (save to file, UI / UX not important).  TypeScript preferred but not necessary.
