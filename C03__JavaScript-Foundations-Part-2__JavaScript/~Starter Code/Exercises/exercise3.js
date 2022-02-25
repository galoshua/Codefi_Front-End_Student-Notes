const seperateThis = (obj) =>{
    let a = Object.keys(obj);
    let b = Object.values(obj);
    let c = [a, b];
    return c;
}
console.log(seperateThis({ a: 'Apple', b:'Microsoft', c:'Google'}));

const unordered = {
    d: 'AoT',
    b: 'GoT',
    a: 'HIMYM',
    c: 'WoT',
}

const ordered = Object.keys(unordered).sort().reduce(
    (obj, key) => { 
      obj[key] = unordered[key]; 
      return obj;
    },  
    {}
    );
    console.log(ordered)

    ///how would i make this work for any array 
    //without having to replace pieces of my function?