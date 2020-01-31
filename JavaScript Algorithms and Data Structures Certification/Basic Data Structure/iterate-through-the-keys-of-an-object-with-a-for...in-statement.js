let users = {
  Alan: {
    
    online: false
  },
  Jeff: {
    
    online: true
  },
  Sarah: {
    
    online: false
  },
  Ryan: {
    
    online: true
  }
};
function countOnline(userobj) {
  // change code below this line
  let result = 0;
  for (let user in userobj) {
    if (userobj[user].online === true) {
      result++;
    }
  }
  return result;
  // change code above this line
}
console.log(countOnline(users));