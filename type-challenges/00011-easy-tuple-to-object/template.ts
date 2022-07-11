type TupleToObject<T extends readonly any[]> = {
  [ K in T[number] ]: K;
};


function testTuple ( arr: any[] ) {

  arr.forEach( item => {

    return { [ item ]: item }

  } );

}