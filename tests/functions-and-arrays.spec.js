describe('Candy Chandler',function(){
        /**************************************challenge-1*************************************** */
        describe('MORE! MORE! MORE!',function()
        {
            it('Testcase-1',function()
            {
                var chocolates = [
                    "green", "green", "green", "silver", "blue", "crimson", "purple", "red", "crimson", "purple",
                    "purple", "green", "pink", "blue", "red", "silver", "crimson", "purple", "silver", "silver",
                    "red", "green", "red", "silver", "pink", "crimson", "purple", "green", "red", "silver",
                    "crimson", "pink", "silver", "blue", "pink", "crimson", "crimson", "crimson", "red", "purple",
                    "purple", "green", "pink", "blue", "red", "crimson", "silver", "purple", "purple", "purple",
                    "red", "purple", "red", "blue", "silver", "green", "crimson", "silver", "blue", "crimson",
                    "purple", "green", "pink", "green", "red", "silver", "crimson", "blue", "green", "red",
                    "red", "pink", "blue", "silver", "pink", "crimson", "purple", "green", "red", "blue",
                    "red", "purple", "silver", "blue", "pink", "silver", "crimson", "silver", "blue", "purple",
                    "purple", "green", "blue", "blue", "red", "red", "silver", "purple", "silver", "crimson"
                ];
                var color='red';
                var count=5;
                expect(addChocolates(chocolates,color,count)).toEqual([
                'red',     'red',     'red',     'red',     'red',     'green',
                'green',   'green',   'silver',  'blue',    'crimson', 'purple',
                'red',     'crimson', 'purple',  'purple',  'green',   'pink',
                'blue',    'red',     'silver',  'crimson', 'purple',  'silver',
                'silver',  'red',     'green',   'red',     'silver',  'pink',
                'crimson', 'purple',  'green',   'red',     'silver',  'crimson',
                'pink',    'silver',  'blue',    'pink',    'crimson', 'crimson',
                'crimson', 'red',     'purple',  'purple',  'green',   'pink',
                'blue',    'red',     'crimson', 'silver',  'purple',  'purple',
                'purple',  'red',     'purple',  'red',     'blue',    'silver',
                'green',   'crimson', 'silver',  'blue',    'crimson', 'purple',
                'green',   'pink',    'green',   'red',     'silver',  'crimson',
                'blue',    'green',   'red',     'red',     'pink',    'blue',
                'silver',  'pink',    'crimson', 'purple',  'green',   'red',
                'blue',    'red',     'purple',  'silver',  'blue',    'pink',
                'silver',  'crimson', 'silver',  'blue',    'purple',  'purple',
                'green',   'blue',    'blue',    'red', 'red', 'silver', 'purple', 
                'silver', 'crimson']);
            })
        }),
        /***********************************challenge-2*********************************************** */
        describe('LESS! LESS! LESS!',function()
        {
            it('Testcase-1',function()
            {
                var chocolates = [
                    "green", "green", "green", "silver", "blue", "crimson", "purple", "red", "crimson", "purple",
                    "purple", "green", "pink", "blue", "red", "silver", "crimson", "purple", "silver", "silver",
                    "red", "green", "red", "silver", "pink", "crimson", "purple", "green", "red", "silver",
                    "crimson", "pink", "silver", "blue", "pink", "crimson", "crimson", "crimson", "red", "purple",
                    "purple", "green", "pink", "blue", "red", "crimson", "silver", "purple", "purple", "purple",
                    "red", "purple", "red", "blue", "silver", "green", "crimson", "silver", "blue", "crimson",
                    "purple", "green", "pink", "green", "red", "silver", "crimson", "blue", "green", "red",
                    "red", "pink", "blue", "silver", "pink", "crimson", "purple", "green", "red", "blue",
                    "red", "purple", "silver", "blue", "pink", "silver", "crimson", "silver", "blue", "purple",
                    "purple", "green", "blue", "blue", "red", "red", "silver", "purple", "silver", "crimson"
                ];
                var color='red';
                var count=5;
                var number=3;

                expect(addChocolates(chocolates,color,count)).toEqual([
                'red',     'red',     'red',     'red',     'red',     'green',
                'green',   'green',   'silver',  'blue',    'crimson', 'purple',
                'red',     'crimson', 'purple',  'purple',  'green',   'pink',
                'blue',    'red',     'silver',  'crimson', 'purple',  'silver',
                'silver',  'red',     'green',   'red',     'silver',  'pink',
                'crimson', 'purple',  'green',   'red',     'silver',  'crimson',
                'pink',    'silver',  'blue',    'pink',    'crimson', 'crimson',
                'crimson', 'red',     'purple',  'purple',  'green',   'pink',
                'blue',    'red',     'crimson', 'silver',  'purple',  'purple',
                'purple',  'red',     'purple',  'red',     'blue',    'silver',
                'green',   'crimson', 'silver',  'blue',    'crimson', 'purple',
                'green',   'pink',    'green',   'red',     'silver',  'crimson',
                'blue',    'green',   'red',     'red',     'pink',    'blue',
                'silver',  'pink',    'crimson', 'purple',  'green',   'red',
                'blue',    'red',     'purple',  'silver',  'blue',    'pink',
                'silver',  'crimson', 'silver',  'blue',    'purple',  'purple',
                'green',   'blue',    'blue',    'red', 'red', 'silver', 'purple',
                'silver', 'crimson' 
              ]);
                expect(removeChocolates(chocolates,number)).toEqual(['red',     'red',     'green',
                'green',   'green',   'silver',  'blue',    'crimson', 'purple',
                'red',     'crimson', 'purple',  'purple',  'green',   'pink',
                'blue',    'red',     'silver',  'crimson', 'purple',  'silver',
                'silver',  'red',     'green',   'red',     'silver',  'pink',
                'crimson', 'purple',  'green',   'red',     'silver',  'crimson',
                'pink',    'silver',  'blue',    'pink',    'crimson', 'crimson',
                'crimson', 'red',     'purple',  'purple',  'green',   'pink',
                'blue',    'red',     'crimson', 'silver',  'purple',  'purple',
                'purple',  'red',     'purple',  'red',     'blue',    'silver',
                'green',   'crimson', 'silver',  'blue',    'crimson', 'purple',
                'green',   'pink',    'green',   'red',     'silver',  'crimson',
                'blue',    'green',   'red',     'red',     'pink',    'blue',
                'silver',  'pink',    'crimson', 'purple',  'green',   'red',
                'blue',    'red',     'purple',  'silver',  'blue',    'pink',
                'silver',  'crimson', 'silver',  'blue',    'purple',  'purple',
                'green',   'blue',    'blue',    'red', 'red', 'silver', 'purple', 
                'silver', 'crimson']);
            });
        }),
        /***********************************challenge-3*********************************************** */
        describe('One is not enough!',function()
        {
            it('Testcase-1',function()
            {
                var chocolates = [
                    "green", "green", "green", "silver", "blue", "crimson", "purple", "red", "crimson", "purple",
                    "purple", "green", "pink", "blue", "red", "silver", "crimson", "purple", "silver", "silver",
                    "red", "green", "red", "silver", "pink", "crimson", "purple", "green", "red", "silver",
                    "crimson", "pink", "silver", "blue", "pink", "crimson", "crimson", "crimson", "red", "purple",
                    "purple", "green", "pink", "blue", "red", "crimson", "silver", "purple", "purple", "purple",
                    "red", "purple", "red", "blue", "silver", "green", "crimson", "silver", "blue", "crimson",
                    "purple", "green", "pink", "green", "red", "silver", "crimson", "blue", "green", "red",
                    "red", "pink", "blue", "silver", "pink", "crimson", "purple", "green", "red", "blue",
                    "red", "purple", "silver", "blue", "pink", "silver", "crimson", "silver", "blue", "purple",
                    "purple", "green", "blue", "blue", "red", "red", "silver", "purple", "silver", "crimson"
                ];
                let numbers=3;
                expect(dispenseChocolates(numbers, chocolates)).toEqual(["purple", "silver", "crimson"]);
            })
        }),
        /***********************************challenge-4*********************************************** */
        describe('My favourite color is...',function()
        {
            it('Testcase-1',function()
            {
                var chocolates = [
                    "green", "green", "green", "silver", "blue", "crimson", "purple", "red", "crimson", "purple",
                    "purple", "green", "pink", "blue", "red", "silver", "crimson", "purple", "silver", "silver",
                    "red", "green", "red", "silver", "pink", "crimson", "purple", "green", "red", "silver",
                    "crimson", "pink", "silver", "blue", "pink", "crimson", "crimson", "crimson", "red", "purple",
                    "purple", "green", "pink", "blue", "red", "crimson", "silver", "purple", "purple", "purple",
                    "red", "purple", "red", "blue", "silver", "green", "crimson", "silver", "blue", "crimson",
                    "purple", "green", "pink", "green", "red", "silver", "crimson", "blue", "green", "red",
                    "red", "pink", "blue", "silver", "pink", "crimson", "purple", "green", "red", "blue",
                    "red", "purple", "silver", "blue", "pink", "silver", "crimson", "silver", "blue", "purple",
                    "purple", "green", "blue", "blue", "red", "red", "silver", "purple", "silver", "crimson"
                ];
                let number=3;
                let color="green";
                expect(dispenseChocolatesOfColor(chocolates, number, color)).toEqual(["green", "green", "green", "silver",
                "blue", "crimson", "purple", "red", "crimson", "purple", "purple", "green", "pink", "blue", "red", "silver", 
                "crimson", "purple", "silver", "silver", "red", "green", "red", "silver", "pink", "crimson", "purple", "green", 
                "red", "silver", "crimson", "pink", "silver", "blue", "pink", "crimson", "crimson", "crimson", "red", "purple", 
                "purple", "green", "pink", "blue", "red", "crimson", "silver", "purple", "purple", "purple", "red", "purple", 
                "red", "blue", "silver", "green", "crimson", "silver", "blue", "crimson", "purple", "green", "pink", "green", 
                "red", "silver", "crimson", "blue", "red", "red", "pink", "blue", "silver", "pink", "crimson", "purple", "red", 
                "blue", "red", "purple", "silver", "blue", "pink", "silver", "crimson", "silver", "blue", "purple", "purple", "blue", 
                "blue", "red", "red", "silver", "purple", "silver", "crimson"]);
            })
        }),
        /**********************************challenge-5*********************************** */
        describe('LED my chocos!',function()
        {
            it('Testcase-1',function()
            {
                var chocolates = [
                    "green", "green", "green", "silver", "blue", "crimson", "purple", "red", "crimson", "purple",
                    "purple", "green", "pink", "blue", "red", "silver", "crimson", "purple", "silver", "silver",
                    "red", "green", "red", "silver", "pink", "crimson", "purple", "green", "red", "silver",
                    "crimson", "pink", "silver", "blue", "pink", "crimson", "crimson", "crimson", "red", "purple",
                    "purple", "green", "pink", "blue", "red", "crimson", "silver", "purple", "purple", "purple",
                    "red", "purple", "red", "blue", "silver", "green", "crimson", "silver", "blue", "crimson",
                    "purple", "green", "pink", "green", "red", "silver", "crimson", "blue", "green", "red",
                    "red", "pink", "blue", "silver", "pink", "crimson", "purple", "green", "red", "blue",
                    "red", "purple", "silver", "blue", "pink", "silver", "crimson", "silver", "blue", "purple",
                    "purple", "green", "blue", "blue", "red", "red", "silver", "purple", "silver", "crimson"
                ];

                expect(noOfChocolates(chocolates)).toEqual([13, 17, 13, 15, 17, 16,  9]);
            })
        }),
        /***************************************challenge-6******************************************* */
        describe("Let's stack 'em up!",function()
        {
            it('Testcase-1',function()
            {
                var chocolates = [
                    "green", "green", "green", "silver", "blue", "crimson", "purple", "red", "crimson", "purple",
                    "purple", "green", "pink", "blue", "red", "silver", "crimson", "purple", "silver", "silver",
                    "red", "green", "red", "silver", "pink", "crimson", "purple", "green", "red", "silver",
                    "crimson", "pink", "silver", "blue", "pink", "crimson", "crimson", "crimson", "red", "purple",
                    "purple", "green", "pink", "blue", "red", "crimson", "silver", "purple", "purple", "purple",
                    "red", "purple", "red", "blue", "silver", "green", "crimson", "silver", "blue", "crimson",
                    "purple", "green", "pink", "green", "red", "silver", "crimson", "blue", "green", "red",
                    "red", "pink", "blue", "silver", "pink", "crimson", "purple", "green", "red", "blue",
                    "red", "purple", "silver", "blue", "pink", "silver", "crimson", "silver", "blue", "purple",
                    "purple", "green", "blue", "blue", "red", "red", "silver", "purple", "silver", "crimson"
                ];
                expect(sortChocolateBasedOnCount(chocolates)).toEqual(["silver", "silver", "silver", "silver", "silver", 
                "silver", "silver", "silver", "silver", "silver", "silver", "silver", "silver", "silver", "silver", "silver", 
                "silver", "purple", "purple", "purple", "purple", "purple", "purple", "purple", "purple", "purple", "purple", 
                "purple", "purple", "purple", "purple", "purple", "purple", "purple", "red", "red", "red", "red", "red", "red", 
                "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "crimson", "crimson", "crimson", "crimson", 
                "crimson", "crimson", "crimson", "crimson", "crimson", "crimson", "crimson", "crimson", "crimson", "crimson", 
                "crimson", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", 
                "green", "green", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", 
                "blue", "pink", "pink", "pink", "pink", "pink", "pink", "pink", "pink", "pink"]);
            });
        })
        /***************************************challenge-7******************************************* */
        describe("They taste the same!",function()
        {
            it('Testcase-1',function()
            {
                var chocolates = [
                    "green", "green", "green", "silver", "blue", "crimson", "purple", "red", "crimson", "purple",
                    "purple", "green", "pink", "blue", "red", "silver", "crimson", "purple", "silver", "silver",
                    "red", "green", "red", "silver", "pink", "crimson", "purple", "green", "red", "silver",
                    "crimson", "pink", "silver", "blue", "pink", "crimson", "crimson", "crimson", "red", "purple",
                    "purple", "green", "pink", "blue", "red", "crimson", "silver", "purple", "purple", "purple",
                    "red", "purple", "red", "blue", "silver", "green", "crimson", "silver", "blue", "crimson",
                    "purple", "green", "pink", "green", "red", "silver", "crimson", "blue", "green", "red",
                    "red", "pink", "blue", "silver", "pink", "crimson", "purple", "green", "red", "blue",
                    "red", "purple", "silver", "blue", "pink", "silver", "crimson", "silver", "blue", "purple",
                    "purple", "green", "blue", "blue", "red", "red", "silver", "purple", "silver", "crimson"
                ];
                let n=5;
                let color="red";
                let finalColor="green";
                expect(changeChocolateColor(chocolates,n,color,finalColor)).toEqual(["green", "green", "green", "silver", 
                "blue", "crimson", "purple", "green", "crimson", "purple", "purple", "green", "pink", "blue", "green", "silver", 
                "crimson", "purple", "silver", "silver", "green", "green", "green", "silver", "pink", "crimson", "purple", "green", 
                "green", "silver", "crimson", "pink", "silver", "blue", "pink", "crimson", "crimson", "crimson", "red", "purple", 
                "purple", "green", "pink", "blue", "red", "crimson", "silver", "purple", "purple", "purple", "red", "purple", "red", 
                "blue", "silver", "green", "crimson", "silver", "blue", "crimson", "purple", "green", "pink", "green", "red", "silver", 
                "crimson", "blue", "green", "red", "red", "pink", "blue", "silver", "pink", "crimson", "purple", "green", "red", "blue", 
                "red", "purple", "silver", "blue", "pink", "silver", "crimson", "silver", "blue", "purple", "purple", "green", "blue", 
                "blue", "red", "red", "silver", "purple", "silver", "crimson"]);
            });
        });
        /***************************************challenge-8******************************************* */
        describe("Convert these heretics!",function()
        {
            it('Testcase-1',function()
            {
                var chocolates = [
                    "green", "green", "green", "silver", "blue", "crimson", "purple", "red", "crimson", "purple",
                    "purple", "green", "pink", "blue", "red", "silver", "crimson", "purple", "silver", "silver",
                    "red", "green", "red", "silver", "pink", "crimson", "purple", "green", "red", "silver",
                    "crimson", "pink", "silver", "blue", "pink", "crimson", "crimson", "crimson", "red", "purple",
                    "purple", "green", "pink", "blue", "red", "crimson", "silver", "purple", "purple", "purple",
                    "red", "purple", "red", "blue", "silver", "green", "crimson", "silver", "blue", "crimson",
                    "purple", "green", "pink", "green", "red", "silver", "crimson", "blue", "green", "red",
                    "red", "pink", "blue", "silver", "pink", "crimson", "purple", "green", "red", "blue",
                    "red", "purple", "silver", "blue", "pink", "silver", "crimson", "silver", "blue", "purple",
                    "purple", "green", "blue", "blue", "red", "red", "silver", "purple", "silver", "crimson"
                ];
                var color="green"
                var finalColor="orange";
                expect(changeChocolateColorAllofxCount(chocolates,finalColor,color)).toEqual([13,["orange", "orange", "orange", 
                "silver", "blue", "crimson", "purple", "red", "crimson", "purple", "purple", "orange", "pink", "blue", "red", 
                "silver", "crimson", "purple", "silver", "silver", "red", "orange", "red", "silver", "pink", "crimson", "purple", 
                "orange", "red", "silver", "crimson", "pink", "silver", "blue", "pink", "crimson", "crimson", "crimson", "red", 
                "purple", "purple", "orange", "pink", "blue", "red", "crimson", "silver", "purple", "purple", "purple", "red", 
                "purple", "red", "blue", "silver", "orange", "crimson", "silver", "blue", "crimson", "purple", "orange", "pink", 
                "orange", "red", "silver", "crimson", "blue", "orange", "red", "red", "pink", "blue", "silver", "pink", "crimson", 
                "purple", "orange", "red", "blue", "red", "purple", "silver", "blue", "pink", "silver", "crimson", "silver", "blue", 
                "purple", "purple", "orange", "blue", "blue", "red", "red", "silver", "purple", "silver", "crimson"]]);
            });
        })

})