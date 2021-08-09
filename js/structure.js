
var value = 120;
var arr = [];
arr[0] = [1,2,3,4,5,6,7,8,9];
arr[1] = ['william','jang','standfod'];
arr.push('mario');
console.log(arr[2]);
arr.pop();
console.log(arr.length);

// 여러 개의 데이터들
var csv = ',,,,,,';
var qry = 'name=value&parm=11&loc=kr';
var json = '{name:value, parm:11, loc:[kr,en]}';
var obj = {
    name = 'jang',
    method : function(){
    },


};
obj.name;
obj.method();

// 역할
// Event, DOM controll
// 요소를 선택 기준 : tag -> list, class -> list, id -> one

// 이벤트 핸들러 등록
addEventListener('click', function(){
    
});