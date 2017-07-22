new Vue({
        el: '#exercise',
        data: {
            value: ''
        },
        methods: {
          showAlert: function() {
            alert('show alert');
          },
          getValue: function(event) {
            this.value = event.target.value;
          }
        }
    });
