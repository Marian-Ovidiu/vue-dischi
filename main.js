var app = new Vue({
  el : '#app',
  data: {
    dischi : [],
    index : 0,
  },
  methods: {

  },
  mounted(){
    const self = this;
      axios.get('https://flynn.boolean.careers/exercises/api/array/music').
        then(function(resp){
          self.dischi = resp.data.response;
        })
    console.log(self.dischi);
  }
})

Vue.config.devtools = true
