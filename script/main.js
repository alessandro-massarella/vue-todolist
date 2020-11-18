const myToDo = new Vue ({
  el: '#root',
  data: {
    daFareArray: [],
    message: '',
  },
  methods: {
    addToArray: function(){
      this.daFareArray.push(this.message)
    },
    removeMessage: function(delIndex){
      this.daFareArray.splice(delIndex, 1);
    }

  }
})
