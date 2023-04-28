<template>
    <div class="cont">
        <div class="card">
    
            <div class="card-body">
                <table class="table table-bordered" >
                    <thead>
                        <tr>
                            <th class="table-item">№</th>
                            <th class="table-item">Фамилия</th>
                            <th class="table-item">Имя</th>
                            <th class="table-item">Отчество</th>
                            <th class="table-item">Должность</th>
                            <th class="table-item">Ученое звание</th>
                            <th class="table-item">Ученая степень</th>
                            <th class="table-item">Логин</th>
                            <th class="table-item">Пароль</th>
                            <th class="table-item">Действие</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(users, index) in this.users" :key="index">
                            <td class="table-item"> {{users.id}} </td>
                            <td class="table-item">Фамилия</td>
                            <td class="table-item">{{users.name}}</td>
                            <td class="table-item">Отчество</td>
                            <td class="table-item">Должность</td>
                            <td class="table-item">Ученое звание</td>
                            <td class="table-item">Ученая степень</td>
                            <td class="table-item">Логин</td>
                            <td class="table-item">Пароль</td>
                            <td class="table-item">
                              <button class="table-btn">Редактировать</button>
                              <button class="table-btn">Удалить</button>
                            </td>
                        </tr>
                    </tbody>
                 
                </table>
                <button class="table-btn table-btn-delete">Добавить</button>
            </div>
        </div>
     </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'teacher',
    
    data () {
        

        return {
            users: []
            
        }
    },
    mounted() {
            
            this.getUsers();

        },

        methods: {
          getUsers() {

    

            axios.get('http://localhost:3000/user').then(res => {
                this.users = res.data
                console.log(res)

            });

          },
        //   deleteCard(cardId) {
        //    if(confirm('Вы уверены, что хотите удалитькарту этого сотрудника?')) {
        //     axios.delete(`https://63e79c82ac3920ad5be0b369.mockapi.io/project/${cardId}`).then(res => {
        //         alert('Карта сотрудника удалена');
        //         this.getCards();
        //     })
        //    }
        //   }  
        },
}
</script>

<style scoped>

.teacher {
    position: absolute;
    top: 25%;
    left: 50%;
}


</style>