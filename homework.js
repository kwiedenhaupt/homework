// #1 print even numbers
for (let num=0; num<=10; num++) {
  if (num%2===0) {
console.log(num);
  }
};

//* #2 multiplication tables
    for (let i=0; i<=10; i++) {
        for (let j=0; j<10; j++) {
    let tables=i*j;
    console.log(tables)
    }
};

//* #3 length converter
function toMiles(kilometers) {
    return (kilometers*0.621371);
  }

console.log(toMiles(32));

//* #4 sum of numbers in an array
let sum=0
let array=[5.2,3,2]
for (i=0; i<array.length; i++) {
    sum +=array[i]
}
console.log(sum);

//*other #4
let numbers=[5.2,3,2]
let summation = numbers.reduce(
    (summer, currentV) => summer + currentV
  );
  console.log(summation);

//* summing table rows/columns from internet
//* I understand the reduce method, but not the inputting the table...
const nodes = document.querySelectorAll('td:last-child')
const arr = Array.from(nodes);

const res = arr.reduce((acc, curr) => {
  return acc += Number(curr.textContent)
}, 0)

console.log(res);


//* #5 function reversing numbers in an array

function reverseArray(array) {
    let newRev=[]
    for (let i=array.length-1;i>=0; i--) {
        newRev.push(array[i])
    }    
    return newRev
}
oldArray=[1,2,3]

console.log(reverseArray(oldArray))

//* #6 bubble sort
function bubbleSort(array) {
    for(let i=0; i<array.length; i++) {
        for (let j=0; j<array.length-i-1; j++) {
            if (array[j]>array[j+1]) {
                let swapped = array[j]
                array[j]=array[j+1]
                array[j+1]=swapped
            }
        }
    }
    return array;
}
console.log(bubbleSort([5,2,62,1]))

//* #7 with splice -- removing negative numbers
function negative(array) {
    for (let i=0; i<array.length; i++) {
        if (array[i]<0) {
            array.splice(i, 1);
            i--;
        }
    }
    return array
}
let testArray=[5,-1,2,-4,2]
console.log(negative(testArray))

//* 7 alternate with filter (removing negative numbers)

testedArray=[5,-1,2,-4,2]
let filtered = testedArray.filter(function(number) {
    return number>0;
});

console.log(filtered);

//*8 replace all -- removing spaces in a string

let string='stri ing';
let newString = string.replaceAll(' ', '')
console.log(newString);

let string1='stri ing';
let newString1 = string1.replace(/ /g, '')
console.log(newString1);

//*9 -- return a boolean if a number is divisible by 10
function boolean(number) {
    if (number%10===0) {
        return true
    } else {
        return false
    }
};

console.log(boolean(50));

//*10 count the number of vowels in a string/number of characters
function vowelsIn(string2) {
    let counter=0
    string2= string2.toUpperCase()
    let vowels = 'AEIOU'
    for (let i=0; i<string2.length; i++) {
        if (vowels.indexOf(string2[i]) !== -1) {
            counter +=1
        }
    }
    return counter
}
console.log(vowelsIn('doggie'));

//* 10 alternate
function charactersIn(string3) {
    let counter1=0
    for (let i=0; i<string3.length; i++) {
            counter1 +=1
        }
    return counter1
}
console.log(charactersIn('doggie'));

//* react homework

//* My Button
function MyButton() {
  return (
    <button>I'm a button</button>
  );
}
export default function App() {
  return (
  <div> 
    <h1> Welcome to my app </h1>
    <MyButton />
  </div>
  );
}

//* Hedy Lamarr


const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

export default function Profile () {
  return (
    <>
      <h1> {user.name} </h1>
      <img 
        className= "avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize,
        }}
      />
    </>
  );
}

//* react syntax for if/else

let content;
if (isLoggedIn) {
  content = <AdminPanel />;
} else {
  content = <LoginForm />;
}
return (
  <div>
  {content}
  </div>
);

//* conditional ? operator
<div>'
  {isLoggedIn ? (
  <AdminPanel />
  ) : (
  <LoginForm />
 
  )}
</div>

//* using &&
<div> {<isLoggedIn /> && <AdminPanel />}
</div>

//* lists
const products = [
  {title: 'Cabbage', isFruit: false, id: 1 },
  {title: 'Garlic', isFruit: false, id: 2 },
  {title: 'Apple', isFruit: true, id: 3 },
  ];
   
export default function ShoppingList {
  const listItems = products.map(product =>
    <li
    key = {product.id}
    style = {{
            color: product.isFruit ? 'magenta' : 'dark green'
           }}
     />
        {product.title}
    </li>
   );

  return (
    <ul>{list.items)</ul>
   );
}
