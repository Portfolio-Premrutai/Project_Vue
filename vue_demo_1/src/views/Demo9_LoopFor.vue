<template>
  <div id="demo9">
    <h1>Demo 9 : Loop v-For</h1>
    <ul>
      <li v-for="(item,index) in ['angular','Vue', 'React']" :key="index">{{item}}</li>
    </ul>
    <hr />
    <ul>
      <li v-for="(item) in ['ios','Android','Flutter']" :key="item">{{item}}</li>
    </ul>
    <hr />
    <!-- Array -->
    <ul>
      <li v-for="item in Food" :key="item.message">{{ item.message }}</li>
    </ul>
    <hr>
    <!-- Object -->
      <ul>
      <li v-for="item in ObjFruits" :key="item.title">{{ item.title}} Price {{item.Price }}</li>
    </ul>
    <!-- dynamic -->
    <hr>

<input type="text" placeholder="Title" v-model="food.title"><br>
<input type="number" placeholder="Price" v-model="food.price"><br>
<button @click="addFood">Submit</button>

    <ul>
      <li v-for="(food,index) in dynamicFood" :key="index">{{ food.title}} Price {{food.price }}<button @click="removeFood(index)">X</button></li>
    </ul>


  </div>
</template>

<script>
export default {
  name: "Demo9",
  methods: {
  addFood(){
      this.dynamicFood.push(this.food)
      this.food = {title:"",price:0}
    },
    removeFood(index){
      // remove
      this.dynamicFood.splice(index,1)
    }
  },
  data() {
    return {
      Food: [
        { message: "Cookie" },
        { message: "Fried Rice" },
        { message: "Tom Yam Kung" },
      ],
      ObjFruits:[
        {title:"Mango",Price:30},
        {title:"Strawberry",Price:50},
        {title:"Grape",Price:40},
        {title:"Orange",Price:20},
      ],
      food:{title:"",price:0},
      dynamicFood:[],
    };
  },
};
</script>

<style scoped>
li {
  color: red;
}
</style>