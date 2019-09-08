<template>
    <div class="display-customers">
        <h1>List Customers -- To do -- </h1>
        <ul v-for="cust in listCustomers" :key="cust">
            <li>{{cust}}</li>
        </ul>
    </div>
</template>
<script>
export default {
    name:"display-customers",
    props:['listCustomers']
}
</script>
<style lang="scss">
ul{
    li{
        list-style: none;
    }
}
</style>