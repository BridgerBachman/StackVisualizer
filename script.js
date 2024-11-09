class Stack {
    constructor(){
        this.items = [];//this can maybe be static so i dont have to say this each time? i could just say stack.pop and not declare an object of type stack
    }

    push(value){
        this.items.push(value);//should i write my own push method?
    }

    pop(){//should i write my own pop method
        return this.items.pop();//may need to add a line to save the previous value in ht emain function
    }

    peek(){
        //return this.items[this.items.length-1];
        return this.isEmpty() == true ? "Undefined (The stack is empty it has no values inside.)" : this.items[this.items.length-1];
    }

    isEmpty(){
        return this.items.length == 0 ? true : false;
    }

    size(){
        return this.items.length;//TODO logic may be wrong
    }
}

const myStack = new Stack();

document.getElementById('pushButton').addEventListener('click', function() {
    const value = document.getElementById('pushValue').value;
    if (value) {
        const stackItems = document.getElementById('stackItems');
        
        // Create a new stack item
        const newItem = document.createElement('div');
        newItem.className = 'stack-item';
        newItem.textContent = value; // Set the item value as text
        //stackItems.appendChild(newItem); // Add it to the stack
        stackItems.insertBefore(newItem, stackItems.firstChild); // Prepend the new item to ui
        myStack.push(value)//Add the item to the actual data structure.
        console.log(myStack);
        console.log(`function ran val is ${value}`)
        document.getElementById('pushValue').value = "";
    }
});

document.getElementById('popButton').addEventListener('click', function() {
    if (myStack.size()> 0) {

        const poppedValue = myStack.pop();
        // Remove the top item from the UI
        const stackItems = document.getElementById('stackItems');
        if (stackItems.firstChild) {
            stackItems.removeChild(stackItems.firstChild);
        }
        document.getElementById('popVal').innerText = poppedValue;
        setTimeout(() => {
            document.getElementById('popVal').innerText = ''; // Clear the text
        }, 2000);
    }
    else {
        console.log('Stack is empty');
    }
});


document.getElementById('peekButton').addEventListener('click', function(){
    //myStack.peek();//hers my value
    document.getElementById('peekVal').innerText = myStack.peek();
    setTimeout(() => {
        document.getElementById('peekVal').innerText = ''; // Clear the text
    }, 2000);
    
});


document.getElementById('isEmptyButton').addEventListener('click', function(){
    document.getElementById('isEmptyVal').innerText = myStack.isEmpty().toString().charAt(0).toUpperCase()+myStack.isEmpty().toString().slice(1);
    setTimeout(() => {
        document.getElementById('isEmptyVal').innerText = ''; // Clear the text
    }, 2000);
});

document.getElementById('sizeButton').addEventListener('click', function(){
    document.getElementById('sizeVal').innerText = myStack.size();
    setTimeout(() => {
        document.getElementById('sizeVal').innerText = ''; // Clear the text
    }, 2000);
})

document.getElementById('tutorialButton').addEventListener('click', function(){

    let tutVal = document.getElementById('tutVal');

    function wait(ms){
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    function waitForButtonClick(buttonId){
        return new Promise(resolve => {
            buttonId.addEventListener('click', () => {
                resolve();
            })
        });
    }




    async function run(){
    
    tutVal.innerText = 'A stack data structure is identical to the plates at a buffet';

    await wait(3000);
    tutVal.innerText = 'Lets populate the stack with three elements.';
    await wait(3000);

    document.getElementById('pushValue').value = 13;
    document.getElementById('pushButton').click();
    tutVal.innerText = '13';
    await wait(1500);

    document.getElementById('pushValue').value = 28;
    document.getElementById('pushButton').click();
    tutVal.innerText = '28';
    await wait(1500);

    document.getElementById('pushValue').value = 7;
    document.getElementById('pushButton').click();
    tutVal.innerText = '7';
    await wait(1500);

    tutVal.innerText = 'We have three elements in the stack';
    await wait(3000);

    tutVal.innerText = 'Size will return how many elements are in the stack. Click the .size() button';
    
    await waitForButtonClick(sizeButton);
    tutVal.innerText = 'As you can see the size = 3';

    await wait(3000);
    tutVal.innerText = 'Click the isEmpty() button.'
    await waitForButtonClick(isEmptyButton);
    tutVal.innerText = 'Is empty returns false since the stack is NOT empty.';
    
    await wait(3000);
    tutVal.innerText = 'Click the .peek() button, this button will show you the element that was last added to the stack'
    await waitForButtonClick(peekButton);
    tutVal.innerText = 'In this case peek returns 7 since it is the last item we added to the stack';
    

    await wait(3000);
    tutVal.innerText = 'click the .pop() button, this will remove and return the top most (recently added) element from the stack.';
    await waitForButtonClick(popButton);
    tutVal.innerText = 'Notice the topmost element 7 was removed from the stack and returned.';

    await wait(3000);
    tutVal.innerText = 'Click the .pop() button again';
    await waitForButtonClick(popButton);
    tutVal.innerText = 'Notice the topmost element 28 was removed from the stack and returned.';

    await wait(3000);
    tutVal.innerText = 'Click the .pop() button one more time';
    await waitForButtonClick(popButton);
    tutVal.innerText = 'Notice the topmost element 13 was removed from the stack and returned.';

    await wait(3000);
    tutVal.innerText = 'Click the isEmpty() button again.'
    await waitForButtonClick(isEmptyButton);
    tutVal.innerText = 'Is empty returns TRUE since the stack is empty.';







    }
    run();

});

//TODO Visuals
//ceneter the number on the stack element
//style the input value box
//have the key value pairs fade

//Expansions add a tutorial button
//add a visualization thing that pushes the value
//add a pop outlined box that outlines the topmost element
//do the same for peek
//add some sort of isempty method checker that looks at the entire stack visuzlly
//add an arrow that traverses the stack and sends the size
//instead of visual overlays maybe I could hightlight the element im working with in a yellow collor to help user understand this is the current element im looking at.