const {isValid,genertMultiApply,printMultipaly} = require('../main');

it ('should  numbers be valid', () => {
    //given
    const firstNumber = 2;
    const secondNumber = 3;
    //when
    var  result = isValid(firstNumber,secondNumber);
   

    //then
    //expect(result).toBe("2*2 =4");
    expect(result).toBe(true);
} )  
    it ('should  generated array with table items', () => {
        //given
        const firstNumber = 2;
        const secondNumber = 3;
        //when
        var  generatedArray = genertMultiApply(firstNumber,secondNumber);
        //then
        expect(generatedArray[0]).toBe('2*2=4');
        expect(generatedArray[1]).toBe('2*3=6');
        expect(generatedArray[2]).toBe('3*3=9');
       
   
})
it ('should  print array with table items', () => {
    //given
    const firstNumber = 2;
    const secondNumber = 3;
    var multipaly =genertMultiApply(firstNumber,secondNumber);
    //when
    var  printArray = printMultipaly(multipaly);

    //then
    //expect(generatedArray[0]).toBe('2*2=4\n2*3=6 3*3=9'); 
    expect(printArray).toBe('2*2=4\n2*3=6 3*3=9'); 
                                                                
})
;