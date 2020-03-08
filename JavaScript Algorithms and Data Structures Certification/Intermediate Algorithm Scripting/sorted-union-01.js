function uniteUnique(...arr){
      return [...arr].flat().reduce((accumulator, currentValue) => {
        if (accumulator.indexOf(currentValue) === -1) {
          accumulator.push(currentValue)
        }
        return accumulator
      }, []);
    }
    console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]))

