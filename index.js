function myEach(collection, callback){
    //console.log(collection.constructor.name);
    if(collection.constructor.name === 'Array'){
        for(let item of collection){
            callback(item);
        }
    }
    else{
        for(let item in collection){
            //console.log(collection[item]);
            callback(collection[item]);
        }
    }
    
    return collection;
}

function myMap(collection, callback){

    let newArr = [];
    if(collection.constructor.name === 'Array'){
        for(let item of collection){
            newArr.push(callback(item));

        }
        return newArr;
    }
    else{
        for(let item in collection){
            newArr.push(callback(collection[item]));
        }
        return newArr;
    }
}


//test callback = (acc + (val * 3))
function myReduce(collection, callback, acc){
    let accVal = 0;
    //console.log(acc);

    if(collection.constructor.name === 'Array'){
        if(acc === undefined){
            accVal = collection[0];
            for(let i = 1; i < collection.length; i++){
            accVal = callback(accVal, collection[i], collection);
            }
        }
        else{
            accVal = acc;
            for(let item of collection){
                
                accVal = callback(accVal, item, collection);
                //console.log(accVal);
            }
        }
        return accVal;
    }
    else{
        if(acc === undefined){
            accVal = collection['one'];
            for(let item in collection){
                if(item === 'one'){
                    continue;
                }
                accVal = callback(accVal, collection[item], collection);
            }
        }
        else{
            accVal = acc;
            for(let item in collection){
                accVal = callback(accVal, collection[item], collection);
            }
        }
        return accVal;
    }
}


function myFind(collection, predicate){

    if(collection.constructor.name === 'Array'){
        for(let elem of collection){
            if(predicate(elem)){
                return elem;
            }
        }
        return undefined;
    }
    else{
        for(let item in collection){
            if(predicate(collection[item])){
                return collection[item];
            }
            return undefined;
        }
    }
}

function myFilter(collection, predicate){
    let resultArr = [];

    if(collection.constructor.name === 'Array'){
        for(let elem of collection){
            if(predicate(elem)){
                resultArr.push(elem);
            }
        }
    }
    else{
        for(let item in collection){
            if(predicate(collection[item])){
                resultArr.push(collection[item]);
            }
        }
    }

    return resultArr;
}


function mySize(collection){
    let counter = 0;
    
    if(collection.constructor.name === 'Array'){
        for(let elem of collection){
            counter++;
        }
        return counter;
    }
    else{
        for(let item in collection){
            counter++;
        }
        return counter;
    }
}

//--------------------------------------------------

function myFirst(array, n){
    if(n === undefined){
        return array[0];
    }
    else{
        let result = [];
        for(let i = 0; i < array.length; i++){
            if(i <= n - 1){
                result.push(array[i]);
            }
        }
        //console.log(result);
        return result;
    }

}


function myLast(array, n){
    if(n === undefined){
        return array[array.length - 1];
    }
    else{
        let result = [];
        for(let i = 0; i < array.length; i++){
            if(i >= n - 2){
                result.push(array[i]);
            }
        }
        //console.log(result);
        return result;
    }
   
}

//------------------------------------------------------

function myKeys(object){
    let keyArr = [];
    for(let key in object){
        keyArr.push(key);
    }
    //console.log(keyArr);
    return keyArr;
}


function myValues(object){
    let valArr = [];
    for(let key in object){
        valArr.push(object[key]);
    }
    //console.log(keyArr);
    return valArr;
}


