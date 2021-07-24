/** processForm: get data from form and make AJAX call to our API. */

const BASE_NUM_API = 'http://numbersapi.com/';

async function processForm(evt) {
    evt.preventDefault();
    
    const name = $('#name').val();
    const email = $('#email').val();
    const year = $('#year').val();
    const color = $('#color').val();

    let form = {
		name,
		email,
		year,
		color
    };
    const response = await axios.post('/api/get-lucky-num', form);

	console.log(response.data.user);
	handleResponse(response.data.user);

}

/** handleResponse: deal with response from our lucky-num API. */

async function handleResponse(response) {
    const $luckyResults = $('#lucky-results');

	let randomNumber = Math.floor(Math.random() * 100) + 1;
	const numFact = await axios.get(`http://numbersapi.com/${randomNumber}/trivia`);
	const yearFact = await axios.get(`http://numbersapi.com/${response.year}/year`);

	let $item = $(
		`<p>Your lucky number is ${randomNumber}. ${numFact.data}.</p>
        <p>Your birth year ${response.year} fact is : ${yearFact.data}</p>`
	);

	$luckyResults.append($item);
}


$("#lucky-form").on("submit", processForm);
