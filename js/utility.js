const totalprice = document.getElementById('total-price');
const grandTotalammount = document.getElementById('grand-total-ammount');
const seatinput = document.getElementById('seatCount');
const ticketcontainer = document.getElementById('ticket-container');
const availableSeat = document.getElementById('availableSeat');
const NextBtn = document.getElementById('btn-next');
const phoneNumber = document.getElementById('phoneNumber');
const screenBlack = document.getElementById('screenBlack');
const popUp = document.getElementById('popUp');
const closePopUpBtn = document.getElementById('closePopUpBtn');
const couponApplyBtn = document.getElementById('couponApplyBtn');
const couponSuccessPara = document.getElementById('coupon-success-para');
const couponBox = document.getElementById('coupon-box');
const couponContainer = document.getElementById('coupon-container');
const discountcontainer = document.getElementById('discount-msg-container');
const seatbutton = document.querySelectorAll('#seat-btn-container button'); 

let ticketCount = 0;
let phone;

for(const btn of seatbutton) {
    btn.addEventListener('click', function(e) {
        if(!e.target.classList.contains('bg-[#1DD100]')) {
            
            ticketCount += 1;
            if(ticketCount <= 4) {
                e.target.classList.remove('bg-[#F7F8F8]');
                e.target.classList.add('bg-[#1DD100]');
                availableSeat.innerText = parseInt(availableSeat.innerText) - 1;
                seatinput.innerText = ticketCount;
                const div = document.createElement('div');
                div.classList.add('flex', 'justify-between');
                const p1 = document.createElement('p');
                p1.innerText = e.target.innerText;
                div.appendChild(p1);
                const p2 = document.createElement('p');
                p2.innerText = 'Economoy';
                div.appendChild(p2);
                const p3 = document.createElement('p');
                p3.innerText = 550;
                div.appendChild(p3);
                ticketcontainer.appendChild(div);
                totalprice.innerText = (550 * ticketCount);
                grandTotalammount.innerText = (550 * ticketCount);
                checkNextBtnValidation2();

                if(ticketCount === 4) {
                    couponApplyBtn.removeAttribute('disabled', true);
                }
                
            }
            else {
                alert(`You can't buy ticket now!!!`);
            }
        }
        
    });
}
let number;

phoneNumber.addEventListener('input', function(e) {
    number = e.target.value;
    checkNextBtnValidation1(number.trim());
});

function checkNextBtnValidation2() {
    let num = phoneNumber.value.trim();
    if(num !== '') {
        NextBtn.removeAttribute('disabled', true);
    }
    else {
        NextBtn.setAttribute('disabled', true); 
    }
}

function checkNextBtnValidation1(n) {
    if(n !== '' && ticketCount > 0) {
        NextBtn.removeAttribute('disabled', true);
    }
    else {
        NextBtn.setAttribute('disabled', true); 
    }
}

NextBtn.addEventListener('click', function() {
    screenBlack.classList.remove('hidden');
    popUp.classList.remove('hidden');
});


closePopUpBtn.addEventListener('click', function() {
    screenBlack.classList.add('hidden');
    popUp.classList.add('hidden');
});


couponApplyBtn.addEventListener('click', function() {
    const div = document.createElement('div');
    div.classList.add('flex', 'justify-between');
    const p1 = document.createElement('p');
    p1.innerText = 'Total Discount';
    div.appendChild(p1);
    const p2 = document.createElement('p');
    

    const couponText = couponBox.value.trim();
    if(couponText === 'NEW15') {
        p2.innerText =  'BDT ' + (parseInt(totalprice.innerText) * 15) / 100;
        div.appendChild(p2);
        discountcontainer.appendChild(div);
        grandTotalammount.innerText =parseInt(totalprice.innerText) - (parseInt(totalprice.innerText) * 15) / 100;
        couponContainer.classList.add('hidden');
    }
    else if(couponText === 'Couple 20') {
        p2.innerText = 'BDT ' + (parseInt(totalprice.innerText) * 20) / 100 ;
        div.appendChild(p2);
        discountcontainer.appendChild(div);
        grandTotalammount.innerText =parseInt(totalprice.innerText) - (parseInt(totalprice.innerText) * 20) / 100;
        couponContainer.classList.add('hidden');
    }
    else {
        grandTotalammount.innerText = parseInt(totalprice.innerText);
        couponBox.value = '';
        alert('Enter a valid coupon code.');
    }
});





