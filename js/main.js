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
            value = e.target.value;

            if (value === "") {
                return false;
            }

            if (this.itemExist(value) === true) {
                let repeated = [].filter.call( document.getElementsByTagName("span"), function( span ) {
                    return span.textContent === value;
                });
                this.isError = true;
                repeated[0].classList.add('bg-orange-300');
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
            for (var i = 0; i < this.items.length; i++) {
                if (this.items[i].title === value) {
                    return true;
                }
            }

            return false;
        }
    }
});
