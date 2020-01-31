// Esercizio 1
// Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà.
// Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
// Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
// Usate prima i console.log se funziona tutto stampate a schermo con jQuery,
// fatto questo provate ad usare Handlebars



$(document).ready(function() {
// Array con oggetti
  var student = {
    'nome' : 'antonio',
    'cognome' : 'coppola',
    'eta' : 40
  };

  for (var key in student) {
    console.log('Proprietà studente: ' + student[key]);
  }

// Array bidimensionali
  var allStudents = [
    {
      'nome' : 'antonio',
      'cognome' : 'coppola',
      'eta' : 40
    },
    {
      'nome' : 'bruno',
      'cognome' : 'barbieri',
      'eta' : 50
    },
    {
      'nome' : 'giorgio',
      'cognome' : 'locatelli',
      'eta' : 60
    },
    {
      'nome' : 'joe',
      'cognome' : 'bastianich',
      'eta' : 35
    },
    {
      'nome' : 'iginio',
      'cognome' : 'massari',
      'eta' : 60
    },
    {
      'nome' : 'gualtiero',
      'cognome' : 'marchesi',
      'eta' : 70
    }
  ];

// ciclo for per determinare la lunghezza degli oggetti all'interno dell'array bidimensionale
  for (var i = 0; i < allStudents.length; i++) {
    var singleStudent = allStudents[i];
    console.log('Proprietà degli studenti: ' + singleStudent.nome + ' ' + singleStudent.cognome);
  }

// array con oggetti scelti da utente attraverso prompt
  var newStudent = [
    {
      'nome': prompt('Inserisci il tuo nome'),
      'cognome': prompt('Inserisci il tuo cognome'),
      'eta' : prompt('Inserisci i tuo anni')
    }
  ];
  console.log(newStudent);
});
