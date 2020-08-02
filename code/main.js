
var app = new Vue({

    el:"#NotebookApp",
    data:{


        notebookContent:[]
    },

    created:function(){

        let localData = JSON.parse(localStorage.getItem('notebookContent'))
        if (localData){this.notebookContent=localData}else{this.notebookContent=[{"content":"Welcome to Notebook!"}]}
    },



    methods:{


        AddContent:function(){
            app.notebookContent.push({"content":""})
            app.SaveNotes()
        },

        DeleteContent: function (index){

            app.notebookContent.splice(index,1)
            app.SaveNotes()
        
        },

        SaveNotes: function (){

            localStorage.setItem("notebookContent",JSON.stringify(app.notebookContent))
        }
    },









})