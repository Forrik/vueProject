
<template>

  <div class="cont">
    <div class="card">

        <div class="card-body">
            <table class="table table-bordered" >
                <thead>
                    <tr>
                        <th class="table-item">№</th>
                        <th class="table-item">Код</th>
                        <th class="table-item">Наименование</th>
                        <th class="table-item">Аббревиатура</th>
                        <th class="table-item">Уровень образования</th>
                        <th class="table-item">Действие</th>
                    </tr>
                </thead>
                <tbody>
                    <tr >
                        <td class="table-item">1</td>
                        <td class="table-item">0001</td>
                        <td class="table-item">Наименование</td>
                        <td class="table-item">Аббревиатура</td>
                        <td class="table-item">Уровень образования</td>
                        <td class="table-item">
                          <button class="table-btn">Редактировать</button>
                          <button class="table-btn">Удалить</button>
                        </td>
                    </tr>
                    <tr >
                        <td class="table-item">2</td>
                        <td class="table-item">0002</td>
                        <td class="table-item">Наименование</td>
                        <td class="table-item">Аббревиатура</td>
                        <td class="table-item">Уровень образования</td>
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
        name: 'specialties',
        
        data() {
        
        },
        methods: {
            
    
        },
        mounted() {

        }
    
        }
    
    </script>
    
    <style>
   

    .card {
      width: 1450px;
      margin: 0 auto;
    }

    .table-item {
      text-align: center;
    }

  .specialties {
   
    position: absolute;
    top: 25%;
    left: 50%;
  }

  .cont {
    position: absolute;
    top: 15%;
    left: 20%;
}

.table-btn {
  background-color: #2a2185;
  color: #fff;
  border: 2px solid #2a2185;
  border-radius: 20px;
  padding: 0px 10px;
}

.table-btn:first-child {
  margin-right: 10px;
}

.table-btn:hover {
  background-color: #fff;
  color: #2a2185;
  transition: all 0.5s ease;
}

.table-btn-delete {
  float: right;
  margin-right: 50px;

}
  </style>