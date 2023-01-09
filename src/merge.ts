export function merge(collection_1: number[], collection_2: number[]): number[] { 
    
    let resultArray: (number | undefined)[] = [];
    let i1 = 0; 
    let i2 = 0;

    for(let _ = 0 ; _ < (collection_1.length + collection_2.length); _++) {
        let e1 = collection_1[i1];
        let e2 = collection_2[i2];
        
        if (e1 < e2) {
            resultArray.push(e1);
            i1++;
        } else {
            resultArray.push(e2);
            i2++;
        }
    }
    resultArray = resultArray.filter((e) => e != undefined);
    console.log(resultArray);
    return <number[]>resultArray;
}