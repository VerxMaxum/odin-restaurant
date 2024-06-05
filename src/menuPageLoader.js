import './styles.css';
import Food1 from '../assets/salmon.jpg';
import Food2 from '../assets/fries.jpg';
import Food3 from '../assets/pizza.jpg';
import Food4 from '../assets/cupcake.jpg'

export function loadMenu() {
    const divContent = document.getElementById('content');
    divContent.replaceChildren();
    const menuCont = document.createElement('div');
    menuCont.classList.add('menu-container');

    // food 1
    const foodWrap1 = document.createElement('div');
    foodWrap1.classList.add('food-wrapper');

    const foodCont1 = document.createElement('div');
    foodCont1.classList.add('food-container');

    const food1 = new Image();
    food1.src = Food1;
    food1.alt = 'salmon';

    const foodInfo1 = document.createElement('div');
    foodInfo1.classList.add('food-info');
    const foodName1 = document.createElement('p');
    foodName1.classList.add('food-name');
    foodName1.textContent = "Honey Salmon";
    const foodPrice1 = document.createElement('p');
    foodPrice1.classList.add('price');
    foodPrice1.textContent = "$5.99";

    foodInfo1.appendChild(foodName1);
    foodInfo1.appendChild(foodPrice1);

    foodCont1.appendChild(food1);
    foodCont1.appendChild(foodInfo1);

    foodWrap1.appendChild(foodCont1);

    // food 2
    const foodWrap2 = document.createElement('div');
    foodWrap2.classList.add('food-wrapper');

    const foodCont2 = document.createElement('div');
    foodCont2.classList.add('food-container');

    const food2 = new Image();
    food2.src = Food2;
    food2.alt = 'fries';

    const foodInfo2 = document.createElement('div');
    foodInfo2.classList.add('food-info');
    const foodName2 = document.createElement('p');
    foodName2.classList.add('food-name');
    foodName2.textContent = "French Fries";
    const foodPrice2 = document.createElement('p');
    foodPrice2.classList.add('price');
    foodPrice2.textContent = "$2.99";

    foodInfo2.appendChild(foodName2);
    foodInfo2.appendChild(foodPrice2);

    foodCont2.appendChild(food2);
    foodCont2.appendChild(foodInfo2);

    foodWrap2.appendChild(foodCont2);

    // food 3
    const foodWrap3 = document.createElement('div');
    foodWrap3.classList.add('food-wrapper');

    const foodCont3 = document.createElement('div');
    foodCont3.classList.add('food-container');

    const food3 = new Image();
    food3.src = Food3;
    food3.alt = 'pizza';

    const foodInfo3 = document.createElement('div');
    foodInfo3.classList.add('food-info');
    const foodName3 = document.createElement('p');
    foodName3.classList.add('food-name');
    foodName3.textContent = "Star Pizza";
    const foodPrice3 = document.createElement('p');
    foodPrice3.classList.add('price');
    foodPrice3.textContent = "$7.99";

    foodInfo3.appendChild(foodName3);
    foodInfo3.appendChild(foodPrice3);

    foodCont3.appendChild(food3);
    foodCont3.appendChild(foodInfo3);

    foodWrap3.appendChild(foodCont3);

    // food 4
    const foodWrap4 = document.createElement('div');
    foodWrap4.classList.add('food-wrapper');

    const foodCont4 = document.createElement('div');
    foodCont4.classList.add('food-container');

    const food4 = new Image();
    food4.src = Food4;
    food4.alt = 'cupcake';

    const foodInfo4 = document.createElement('div');
    foodInfo4.classList.add('food-info');
    const foodName4 = document.createElement('p');
    foodName4.classList.add('food-name');
    foodName4.textContent = "House Cupcake";
    const foodPrice4 = document.createElement('p');
    foodPrice4.classList.add('price');
    foodPrice4.textContent = "$4.99";

    foodInfo4.appendChild(foodName4);
    foodInfo4.appendChild(foodPrice4);

    foodCont4.appendChild(food4);
    foodCont4.appendChild(foodInfo4);

    foodWrap4.appendChild(foodCont4);

    menuCont.appendChild(foodWrap1);
    menuCont.appendChild(foodWrap2);
    menuCont.appendChild(foodWrap3);
    menuCont.appendChild(foodWrap4);

    divContent.appendChild(menuCont);
}