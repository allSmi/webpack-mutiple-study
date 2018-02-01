function classStudy() {
    console.log('class');

    class Add {
        constructor() {
            this.x = 1;
            this.y = 2;
        }
        getAdd() {
            return this.x + this.y;
        }
    }
    let add = new Add();
    console.log(add.getAdd());
}
export default classStudy;
