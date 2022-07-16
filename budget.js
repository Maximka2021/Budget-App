var x = 0;
var y = 0;

var budgetInput = document.getElementById('budget-input');
var budgetSubmit = document.getElementById('budget-submit');
var budget = document.getElementById('budget');
var balance = document.getElementById('balance');
var expenses = document.getElementById('expenses');

budgetSubmit.addEventListener('click', function(){
    if(budgetInput.value === ''){
        alert('error');
    }else{
        budget.textContent = `$ ${budgetInput.value}`;
        balance.textContent = `$ ${budgetInput.value}`;
        y = parseInt(budgetInput.value);
        console.log(y)
        budgetInput.value = '';
    }
})

var expensesName = document.querySelector('.expenses-name');
var expensesAmount = document.querySelector('.expenses-amount');
var expensesSubmit = document.getElementById('expenses-submit');
var expensesTitle = document.getElementById('expenses-title');
var expensesValue = document.getElementById('expenses-value');
var buttons = document.getElementById('buttons');

expensesSubmit.addEventListener('click', function(){
    if(expensesName.value === '' || expensesAmount.value === ''){
        alert('One of the fields is empty');
    }else{
        var titleText = document.createElement('h3');
        titleText.style.paddingBottom = '5%';
        expensesTitle.append(titleText);
        titleText.textContent = expensesName.value;
        expensesName.value = '';
    
        var valueText = document.createElement('h3');
        valueText.style.paddingBottom = '5%';
        expensesValue.append(valueText);
        valueText.textContent = expensesAmount.value;
        x += parseInt(expensesAmount.value);
        console.log(x)
        expenses.textContent = `$ ${x}`;
        expensesAmount.value = '';

        var removeBtn = document.createElement('button');
        removeBtn.style.marginBottom = '5%';
        buttons.append(removeBtn);
        removeBtn.textContent = 'Delete';

        y = y - parseInt(valueText.textContent);
        balance.textContent = `$ ${y}`;
        console.log(`${parseInt(y)} new`);
        
        removeBtn.addEventListener('click', function(){
            titleText.remove();
            x = x - parseInt(valueText.textContent);
            console.log(`${parseInt(x)} removed`);
            y = y + parseInt(valueText.textContent);
            console.log(`${y} final`);
            balance.textContent = `$ ${y}`;
            valueText.remove();
            removeBtn.remove();
            expenses.textContent = `$ ${x}`;
        })
    }
})

