new Vue({
        el: '#exercise',
        data: {
            value: 0
        },
        computed: {
          result: function() {
            return this.value === 17 ? 'yep' : 'not done yet, try to get 17'
          }
        },
        watch: {
          result: function() {
            var vm = this;
            setTimeout(function(){
              vm.value = 0;
            }, 5000);
          }
        }
    });
