import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
    // 定义状态
    state: {
      author: 'Wise Wrong',
      user:{
        userName:"",
        password:"",
      }
    },
    mutations :{
        newAuthor (state,msg){
            state.author = msg;
        }
    },
    actions:{
        // 封装ajax方法
        login(context){
            axios({
                method:'post',
                url:"/user",
                data:context.state.user
            }).then((response)=>{
    
            }).catch((response)=>{
                console.log(response);
            })
        }

    }
  })
  
export default store