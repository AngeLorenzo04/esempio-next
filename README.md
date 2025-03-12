# Clonare una Repository Git

Questo documento fornisce istruzioni su come clonare una repository Git.

## Prerequisiti

- Avere **Git** installato sul proprio sistema. Se non lo hai, puoi scaricarlo da [git-scm.com](https://git-scm.com/)
- Avere l'URL della repository che si desidera clonare (es. GitHub, GitLab, Bitbucket, ecc.)
- Facoltativo: Avere le credenziali di accesso se la repository è privata

## Clonare una Repository

### 1. Aprire il Terminale o il Prompt dei Comandi

Su Windows puoi aprire **Git Bash**, su macOS e Linux puoi usare il **Terminale**.

### 2. Spostarsi nella cartella in cui si vuole clonare la repository

Eseguire il comando:

```sh
cd /percorso/della/cartella
```

Ad esempio, per clonare la repository nella cartella `Documenti/Progetti`:

```sh
cd ~/Documenti/Progetti
```

### 3. Eseguire il comando di clonazione

Utilizzare il comando seguente sostituendo `https://github.com/AngeLorenzo04/esempio-next.git` con l'URL effettivo:

```sh
git clone https://github.com/AngeLorenzo04/esempio-next.git
```
Ora hai la repository clonata localmente e puoi iniziare a lavorarci.

## Verifica dello Stato della Repository

Per verificare che la repository sia stata clonata correttamente e vedere lo stato del repository locale:

```sh
git status
```

## Conclusione

Ora hai la tua repository clonata e pronta per l'uso. Puoi iniziare a lavorare sui file, creare branch, effettuare commit e pushare le modifiche! 🚀


# Avviare un Progetto Next.js

## 1. Installare le dipendenze

Dopo essere entrato nella cartella del progetto, eseguire il comando:

```sh
npm install
```

oppure, se usi **yarn**:

```sh
yarn install
```

## 2. Avviare il server di sviluppo

Una volta installate le dipendenze, eseguire:

```sh
npm run dev
```

oppure con **yarn**:

```sh
yarn dev
```

## 3. Accedere all'applicazione

Dopo aver avviato il server, l'app sarà accessibile all'indirizzo:

```
http://localhost:3000
```

Apri il browser e visita quell'URL per vedere il progetto in esecuzione.




