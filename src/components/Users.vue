<template>
  <div class="cont">
  
        <table class="table" >
          <thead>
            <tr>
              <td>№ п/п</td>
              <td>Фамилия, имя, отчество</td>
              <td>Должность</td>
              <td>Контактные телефоны</td>
              <td>Адреса электронной почты</td>
            </tr>
          </thead>
          <tbody>
            
            <tr>
                <td>1</td>
                <td>Сергеев Сергей Сергеевич</td>
                <td>Должность</td>
                <td>+7-347-265-65-65</td>
                <td>email@mail.ru</td>
            </tr>     
          </tbody>
        </table>
 
  </div>
</template>

<script>
export default {
    name: 'users',
    data() {
   
    },
    methods: {
        

    },

    }

</script>

<style scoped>
.table {
  min-width: 100%;
}
</style>