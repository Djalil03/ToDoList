const addBtn = document.querySelector('#add')
const footer = document.querySelector('#footer')
const input = document.querySelector('#input')

const model = [
    
]


const task = (text) => {
    return `
    <div class="task">
        <p>${text}</p>
        <input type="checkbox" class="check" data-btn="complite">
        <button data-btn="delete">Delete</button>
    </div>   
    `
}

function render() {
    footer.innerHTML = ''
    const content = model.map(item => task(item.text)).join()
    footer.insertAdjacentHTML('afterend', content)
}
render()

addBtn.addEventListener('click', addHandler)

function addHandler() {
    if (input.value.length !== 0) {
    model.splice(0, 100)
    model.push({text: input.value})
    render()
    }
    input.value = ''
}

document.addEventListener('click', delHandler)

function delHandler(event) {  // беру какоето событие в документе, если показыть в консоле target eventа, то при каждом клике будет выводить html код этой области 
    const ev = event.target    // выбираю event.target с датаатрибутом btn , если выводить его в консоли , то при клике на область у которой нету датаатрибута btn будет выводиться undefined 
    const del = event.target.dataset.btn  // если же кликну по области где есть data-btn и выведу в консоль, то покажется значение этого data атрибута btn , вместо undefined
    //console.log(ev);                      // таким образом нахожу нужную мне область для клика , и так как слушатель вешается на document я могу получить доступ до любого элементы через event.target(выведет html кликнутой области)
     if ( del === 'delete') {            // с помощью проверки что это нужный мне data атрибут btn (проверяю его значение, то ли что нужно мне, для того если имеются еще data-btn)
         console.log(ev.closest('.task'))  // если проходит проверку то выполнится код при условии 
         ev.closest('.task').remove()         // если это data-btn равен delete, то ищу блок с помощью event.target и с помощью метода closest() который возвращает ближайшего родителя с заданным названием класса(через точку .) или айди (через решетку #)
     }                                        // могу вывести в консоль, если это он , то могу уже не выводить в консоль этот элемент, а удалить его, например с помощью метода remove() 
     if (del === 'complite') {
        // console.log(del)
        if (ev.closest('.task').classList.contains('complite')) {
            ev.closest('.task').classList.remove('complite')
        } else {
            ev.closest('.task').classList.add('complite')
        }
     }
}