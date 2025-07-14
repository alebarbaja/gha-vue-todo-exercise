new Vue({
    el: "#app",
    data() {
        return {
            items: [
                {
                    title: "HTML5",
                    edit: false
                },
                {
                    title: "CSS3",
                    edit: false
                },
                {
                    title: "JavaScript",
                    edit: false
                }
            ],
            taskItem: "",
            isError: false
        };
    },
    methods: {
        addItem: function (e) {
            let value = e.target.value;

            if (value === "") {
                return false;
            }

            if (this.itemExist(value) === true) {
                let repeated = [].filter.call( document.getElementsByTagName("span"), function( span ) {
                    return span.textContent.toLowerCase() === value.toLowerCase();
                });
                this.isError = true;
                if (repeated.length > 0) {
                    repeated[0].classList.add('bg-orange-300');
                }
                return false;
            }

            this.isError = false;
            e.target.value = "";
            this.items.push({
                title: value,
                edit: false
            });
            
            let repeatedClasses = document.querySelectorAll('.bg-orange-300');
            for ( let repeatedClass of repeatedClasses ) {
                repeatedClass.classList.remove('bg-orange-300');
            }
        },
        removeItem: function (index) {
            this.items.splice(index, 1);
            this.$refs.addtask.focus();
        },
        enableEdit: function (index) {
            this.items[index].edit = true;
            this.$nextTick(() => {
                let input = this.$refs.task[0];
                input.focus();
            })
        },
        disableEdit: function (index) {
            this.items[index].edit = false;
        },
        itemExist: function (value) {
            let lowerValue = value.toLowerCase();
            for (var i = 0; i < this.items.length; i++) {
                if (this.items[i].title.toLowerCase() === lowerValue) {
                    return true;
                }
            }
            return false;
        }
    }
});
