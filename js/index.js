new Vue({
  el: "#ggrks",

  data: {
    search1: "",
    search2: "",
    search3: "",
    // not: "-" + "",
    // att: '"' + "" + '"',
    not: "",
    att: "",
    insite: "",
    result: "",

  },

});


$('#clear').click(function() {
  location.reload();
});
