<template>
    
    <div class="cont">
        <div id="example-1">
           
            <button class="table-btn" v-on:click="counter = 1">Группы</button>
            <button class="table-btn" v-on:click="counter = 2">Норма времени</button>
            <button class="table-btn" v-on:click="counter = 3">три</button>
            <div v-if="counter === 1">
                <div class="card-body">
                    <table class="table table-bordered" >
                        <thead>
                            <tr>
                                <th class="table-item">№</th>
                                <th class="table-item">Группа *КнопкаФильтр></th>
                                <th class="table-item">Специальность</th>
                                <th class="table-item">Уровень образования</th>
                                <th class="table-item">Курс</th>
                                <th class="table-item">Номер</th>
                                <th class="table-item">Форма обучения</th>
                                <th class="table-item"></th>
                                <th class="table-item"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="table-item">1</td>
                                <td class="table-item">АббревиатураСпециальность</td>
                                <td class="table-item">ВыпадающийСписокСпециальность</td>
                                <td class="table-item">Уровень образования</td>
                                <td class="table-item">Курс</td>
                                <td class="table-item">Номер</td>
                                <td class="table-item">ВыпадающийСписокФормаОбучения</td>
                                <td class="table-item">КнопкаРедактировать/КнопкаСохранить</td>
                                <td class="table-item">КнопкаУдалить</td>
                                
                            </tr>
                        </tbody>
                     
                    </table>
                    <button class="table-btn table-btn-delete">Добавить</button>
                </div>
              </div>
              <div v-else-if="counter === 2">
                <div class="card-body">
                    <table class="table table-bordered" >
                        <thead>
                            <tr>
                                <th class="table-item">№</th>
                                <th class="table-item">Специальность</th>
                                <th class="table-item">Уровень образования</th>
                                <th class="table-item">Вид консультации</th>
                                <th class="table-item">Количество часов</th>
                                <th class="table-item"></th>
                                <th class="table-item"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr     >
                                <td class="table-item">1</td>
                                <td class="table-item">*ВыпадающийСписокСпециальность*</td>
                                <td class="table-item">*УровеньОбразования*</td>
                                <td class="table-item">ВыпадающийСписокВидКонсультации</td>
                                <td class="table-item">Количество часов</td>
                                <td class="table-item"><button class="table-btn">Редактировать</button></td>
                                <td class="table-item"><button class="table-btn">Удалить</button></td>
                             
                            </tr>
                        </tbody>
                     
                    </table>
                    <button class="table-btn table-btn-delete">Добавить</button>
                </div>
              </div>
              <div v-else-if="counter === 3">
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
                            <tr     >
                                <td class="table-item">1</td>
                                <td class="table-item">Фамилия</td>
                                <td class="table-item">Имя</td>
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
     </div>
</template>

<script>
export default {
    name: 'graduate',

    data () {
        

        return {
            counter: 0
        }
    }
}
</script>

<style scoped>

.graduate {
    position: absolute;
    top: 25%;
    left: 50%;
}

.wrapper-button {
    display: flex;
    justify-content: space-around;
    border-bottom: 3px;
    margin-bottom: 15px;
}


</style>