class Product {
    constructor(name, price, quantity, description) {
      this.name = name;
      this.price = price;
      this.quantity = quantity;
      this.description = description;
    }
}

let arrProducts =[
  new Product('Folf_fd_switch', 2, 10, '111abc'),
  new Product('fduse_switch', 2, 6, '111abc'),
  new Product('use_switchfd', 6, 8, '111'),
  new Product('fduse_switch', 2, 5, '111abc'),
  new Product('use_switch', 2, 5, '111abc'),

];
let request = "name-starts-fd&quantity-=5";

suitObj =suitableObjects(arrProducts, request)

console.log(suitObj);

function suitableObjects(arrProducts, request){
  let suitableArr = [];
  for (let i= 0; i < arrProducts.length; i++){
    if (proverka(arrProducts[i], getline(request))){
      suitableArr.push(arrProducts[i]);
    }
  }
  return suitableArr;
}


function getline(str){
  let masProperties = str.split("&");
  return masProperties;
}


function proverka(obj, masProperties){
  for (let i = 0; i< masProperties.length; i++){
    let propertySettings = masProperties[i].split('-');
    let skip = true;
    switch (propertySettings[0]){
      case "name":
        skip = (proverkaStringPart(propertySettings[1], propertySettings[2], obj.name));
        break;
      case "price":
        skip =(proverkaNumPart(propertySettings[1], obj.price));
        break;
      case "quantity":
        skip = (proverkaNumPart(propertySettings[1], obj.quantity));
        break;
      case "description":
        skip = (proverkaStringPart(propertySettings[1], propertySettings[2], obj.description));
        break;
    }
    if (!skip){
      return false;
    }
  }
  return true;
}


function proverkaStringPart(propertySettings2, propertySettings3, objProperty){
  objProperty = objProperty.toLowerCase();
  switch (propertySettings2){
    case "contains":
      return objProperty.includes(propertySettings3);
    case "starts":
      return objProperty.startsWith(propertySettings3);
    case "ends":
      return objProperty.endsWith(propertySettings3);
  }
}

function proverkaNumPart(propertySettings2, objProperty){
  if (propertySettings2.startsWith('<=') || propertySettings2.startsWith('>=')){
    let comparasionSign = propertySettings2.slice(0,2);
    let num = +propertySettings2.slice(2);
    switch (comparasionSign){
      case "<=":
      return +objProperty <= num;
      case ">=":
      return +objProperty >= num;
    }
  }
  else{
    let comparasionSign = propertySettings2.slice(0,1);
    let num = +propertySettings2.slice(1);
    switch (comparasionSign){
      case "<":
      return +objProperty < num;
      case ">":
      return +objProperty > num;
      case "=":
      return +objProperty == num;
    }
  }
}

