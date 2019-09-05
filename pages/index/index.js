Page({
  data: {
    name: 'coderwhy',
    class: 'hloo',
    students: [
      { id: 110, name: "zhangsan", age: 30 },
      { id: 110, name: "zhangsan", age: 30 },
      { id: 120, name: "lisi", age: 31 },
      { id: 130, name: "wangwu", age: 32 },
      { id: 132, name: "wangwu1", age: 32 }
    ],
    counter: 0
  },
  handleBtnClick() {
    console.log("按钮发生点击")
    //this.data.counter += 1
    console.log(this.data.counter)
    this.setData(
      {
        counter: this.data.counter + 1
      }
    )
  },
  handleBtnSubtraction() {

    this.setData(
      {
        counter: this.data.counter - 1
      }
    )
  }
})