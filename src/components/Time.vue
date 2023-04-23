<template>
        
    <div class="cont">
        <div class="card">
    
            <div class="card-body">
                <table class="table table-bordered" >
                    <thead>
                        <tr>
                            <th class="table-item">№</th>
                            <th class="table-item">Специальность</th>
                            <th class="table-item">Уровень образования</th>
                            <th class="table-item">Вид консультации</th>
                            <th class="table-item">Количество часов</th>
                            <th class="table-item">Действие</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr >
                            <td class="table-item">1</td>
                            <td class="table-item">0001</td>
                            <td class="table-item">Уровень образования</td>
                            <td class="table-item">Вид консультации</td>
                            <td class="table-item">Количество часов</td>
                            <td class="table-item">
                              <button class="table-btn">Редактировать</button>
                              <button class="table-btn">Удалить</button>
                            </td>
                        </tr>
                        <tr >
                            <td class="table-item">2</td>
                            <td class="table-item">0002</td>
                            <td class="table-item">Уровень образования</td>
                            <td class="table-item">Вид консультации</td>
                            <td class="table-item">Количество часов</td>
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
    export default {
        name: 'time',
        data() {
       
        },
        methods: {
            
    
        },
    
        }
    
    </script>
    
    <style>
    .time {
        position: absolute;
        top: 25%;
        left: 50%;
    }
    </style>