/*
Rifare l'esercizio della to do list. Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
text, una stringa che indica il testo del todo
done, un booleano (true/false) che indica se il todo è stato fatto oppure no

MILESTONE 1
Stampare all'interno di una lista HTML un item per ogni todo. Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.

MILESTONE 2
Visualizzare a fianco ad ogni item una "x": cliccando su di essa, il todo viene rimosso dalla lista.

MILESTONE 3
Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.

Bonus:
Oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista

Cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)
*/

const { createApp } = Vue
  
  createApp({
    data() {
      return {
        showWarning: false,
        errorMessage: "Devi inserire almeno 3 caratteri",
        newTask: "",
        tasks: [
          {
            text: "Fare colazione",
            done: false,
          },
          {
            text: "Igiene quotidiana",
            done: false,
          },
          {
            text: "Fare lezione su Zoom",
            done: false,
          },
          {
            text: "Pranzare",
            done: false,
          },
          {
            text: "Fare esercizio pomeridiano",
            done: false,
          },
          {
            text: "Cenare",
            done: false,
          },
          {
            text: "Guardare Netflix / YouTube",
            done: false,
          },
        ],
      }
    },
    methods: {
      removeFromList(index) {
        this.tasks.splice(index, 1);
      },
      addToList() {
        if(this.newTask.length >= 3) {
          this.tasks.push({text: this.newTask, done: false});
          this.newTask = "";
          this.showWarning = false;
        } else {
          this.showWarning = true;
        }
      },
      markAsDone(index) {
        this.tasks[index].done = !this.tasks[index].done;
      }
    },
  }).mount('#app')