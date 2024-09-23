function getInputFieldValueById(id){

	return parseFloat(document.getElementById(id).value);
}

function getTextFieldValueById(id){

	return parseFloat(document.getElementById(id).innerText);
}

const historyTab = document.getElementById('history-tab');
const donationTab = document.getElementById('donation-tab');

historyTab.addEventListener('click', function(){

	historyTab.classList.add('bg-[#B4F461]');
	donationTab.classList.remove('bg-[#B4F461]');

	document.getElementById('donation-container').classList.add('hidden');
	document.getElementById('history-section').classList.remove('hidden');
});

donationTab.addEventListener('click', function(){

	donationTab.classList.add('bg-[#B4F461]');
	historyTab.classList.remove('bg-[#B4F461]');

	document.getElementById('donation-container').classList.remove('hidden');
	document.getElementById('history-section').classList.add('hidden');
});

document.getElementById('btn-donate-now-noakhali')
	.addEventListener('click', function(){

		const noakhaliInput = getInputFieldValueById('input-noakhali');
		const noakhaliBalance = getTextFieldValueById('noakhali-balance');
		const navbarBalance = getTextFieldValueById('navbar-balance');

		if(noakhaliInput <= 0 || isNaN(noakhaliInput)){
			return alert('Invalid Donation amount') ;
		}

		const newBalance = noakhaliBalance + noakhaliInput;
		const navbarNewBalance = navbarBalance - noakhaliInput;

		const noakhaliBalanceElement = document.getElementById('noakhali-balance');
		noakhaliBalanceElement.innerText = newBalance;

		const navbarNewBalanceElement = document.getElementById('navbar-balance');
		navbarNewBalanceElement.innerText = navbarNewBalance;

		const historyItemDiv = document.createElement('div');
		historyItemDiv.innerHTML = `
			<div class='rounded-lg border-2  p-6 space-y-2 mb-4  shadow-sm'>
			<h2 class="text-lg font-semibold">${noakhaliInput} Taka is Donated for Flood at Noakhali, Bangladesh</h2>
			<p class='bg-slate-100 p-4 rounded-lg'>Date: ${new Date().toString()}</p>
			</div>
		`;

		document.getElementById('history-list').appendChild(historyItemDiv);
		document.getElementById('my-modal').showModal();
	});


	document.getElementById('btn-donate-now-feni')
	.addEventListener('click', function(){

		const feniInput = getInputFieldValueById('input-feni');
		const feniBalance = getTextFieldValueById('feni-balance');
		const navbarBalance = getTextFieldValueById('navbar-balance');

		if(feniInput <= 0 || isNaN(feniInput)){
			return alert('Invalid Donation amount') ;
			
		}
		const newBalance = feniBalance + feniInput;
		const navbarNewBalance = navbarBalance - feniInput;

		const feniBalanceElement = document.getElementById('feni-balance');
		feniBalanceElement.innerText = newBalance;

		const navbarNewBalanceElement = document.getElementById('navbar-balance');
		navbarNewBalanceElement.innerText = navbarNewBalance;

		const historyItemDiv = document.createElement('div');
		historyItemDiv.innerHTML = `
			<div class='rounded-lg border-2  p-6 space-y-2 mb-4'>
			<h2 class="text-lg font-semibold">${feniInput} Taka is Donated for Flood Relief in Feni,Bangladesh</h2>
			<p class='bg-slate-100 p-4 rounded-lg'>Date: ${new Date().toString()}</p>
			</div>
		`;

		document.getElementById('history-list').appendChild(historyItemDiv);
		document.getElementById('my-modal').showModal();
	});

	document.getElementById('btn-donate-now-quota')
	.addEventListener('click', function(){

		const quotaInput = getInputFieldValueById('input-quota');
		const quotaBalance = getTextFieldValueById('quota-balance');
		const navbarBalance = getTextFieldValueById('navbar-balance');

		if(quotaInput <= 0 || isNaN(quotaInput)){
			return alert('Invalid Donation amount') ;
			
		}
		const newBalance = quotaBalance + quotaInput;
		const navbarNewBalance = navbarBalance - quotaInput;

		const quotaBalanceElement = document.getElementById('quota-balance');
		quotaBalanceElement.innerText = newBalance;

		const navbarNewBalanceElement = document.getElementById('navbar-balance');
		navbarNewBalanceElement.innerText = navbarNewBalance;

		const historyItemDiv = document.createElement('div');
		historyItemDiv.innerHTML = `
			<div class='rounded-lg border-2  p-6 space-y-2 mb-4'>
			<h2 class="text-lg font-semibold">${quotaInput} Taka is Donated for Aid Injured in the Quota Movement</h2>
			<p class='bg-slate-100 p-4 rounded-lg'>Date: ${new Date().toString()}</p>
			</div>
		`;

		document.getElementById('history-list').appendChild(historyItemDiv);
		document.getElementById('my-modal').showModal();
	});




