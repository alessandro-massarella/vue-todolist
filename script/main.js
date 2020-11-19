const myToDo = new Vue ({
  el: '#root',
  data: {
    daFareArray: [],
    message: '',
    // array per lo stato del li:
    areActive: []
  },
  methods: {
    addToArray: function(){
      this.daFareArray.push(this.message);
      this.areActive.push(false);
      this.message = "";
    },
    removeMessage: function(index){
      // SPLICE: cosa cancellare e a partire da lui quanti?:
      this.daFareArray.splice(index, 1);
      this.areActive.splice(index, 1);
    },
    // resetWrite: function(){
    //   this.message = "";
    // },
    toggleClass(index){
      // caveats:
      Vue.set(this.areActive, index,
        // per invertire il valore:
        !this.areActive[index]);
    }

  }
})
