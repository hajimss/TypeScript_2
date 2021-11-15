let appId = 'abc';
const button = document.querySelector('button')!;

function add(n1:number, n2: number){
    if (n1 + n2 > 0){
        return n1 + n2;
    }
    return;
}

function clickHandler(this: typeof person, message: string){
    console.log(this.userName)
    console.log('Clicked! ' + message)
}

const person : {
    userName: string;
} = {
    userName: "Hajimss"
}

if (button){
    button.addEventListener('click', clickHandler.bind(person, "Good job!"));
}