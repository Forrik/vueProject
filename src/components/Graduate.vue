<template>
    <div class="cont">
        <div class="card">
    
            <div class="card-body">
                <table class="table table-bordered" >
                    <thead>
                        <tr>
                            <th class="table-item">№</th>
                            <th class="table-item">Выпуск</th>
                            <th class="table-item">Год</th>
                            <th class="table-item">Тип выпуска</th>
                            <th class="table-item">Действие</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr >
                            <td class="table-item">1</td>
                            <td class="table-item">Выпуск</td>
                            <td class="table-item">Год</td>
                            <td class="table-item">Тип выпуска</td>
                           
                            <td class="table-item">
                              <button class="table-btn">Редактировать</button>
                              <button class="table-btn">Удалить</button>
                            </td>
                        </tr>
                        <tr >
                            <td class="table-item">2</td>
                            <td class="table-item">Выпуск</td>
                            <td class="table-item">Год</td>
                            <td class="table-item">Тип выпуска</td>
                           
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
    name: 'graduate',
    setup () {
        

        return {}
    }
}
</script>

<style scoped>

.graduate {
    position: absolute;
    top: 25%;
    left: 50%;
}

</style>