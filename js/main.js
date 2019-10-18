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
      // isEditing: false
    };
  },
  methods: {
    addItem: function(e) {
      value = e.target.value;

      if (value === "") {
        return false;
      }

      if (this.itemExist(value) === true) {
        this.isError = true;
        return false;
      }

      this.isError = false;
      e.target.value = "";
      this.items.push({
        title: value,
        edit: false
      });
    },
    removeItem: function(index) {
      this.items.splice(index, 1);
    },
    enableEdit: function(index) {
      this.items[index].edit = true;
    },
    disableEdit: function(index) {
      this.items[index].edit = false;
    },
    itemExist: function(value) {
      for (var i = 0; i < this.items.length; i++) {
        if (this.items[i].title === value) {
          return true;
        }
      }

      return false;
    }
  }
});
