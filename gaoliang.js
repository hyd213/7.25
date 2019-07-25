new Vue({
    el:"#demo",
    data:{
        search:"",
        html:"你好123456你好123456"
    },
    computed:{
        computedhtml:function(){
            var arr = this.html.split(this.search)
            var str = arr.join("<span style='color:red'>"+this.search+"</span>")
            return str
        }
    }
})