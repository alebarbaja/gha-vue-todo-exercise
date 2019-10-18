new Vue({
    el: '#app',
    data() {
        return {
            taskList: [
                'Buy bread',
                'Walk dog',
                'Buy shirt',
                'Clean clothes'
            ],
            taskItem: '',
            // isEditing: false
        }
    },
    methods: {
        addItem: function () {
            if (this.taskItem === '') {
                return
            } else {
                this.taskList.push(this.taskItem);
                this.taskItem = '';
            }
        },
        removeItem: function (index) {
            this.taskList.splice(index, 1)
        },
        // finishEditTask: function (event, index) {
        //     this.task = event.target.value;
        //     this.isEditing = false;
        // }
    }
});