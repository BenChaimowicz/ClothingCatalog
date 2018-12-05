const priceError: string = 'Invalid price for this product!';
const emptyError: string = 'This field must be filled!';
const colorError: string = 'Invalid color for this item!';
const lengthError: string = 'Length entered is out of boundary!';
const sizeError: string = 'Size entered is not allowed!';
const fabricError: string = 'No such fabric for this item!';
const pocketError: string = 'Invalid number of pockets!';
const perimiterError: string = 'Invalid perimiter entered!';
const thicknessError: string = 'Invalid thickness value!';
const heightError: string = 'Height entered is invalid!';
const countryError: string = 'This country does not manufacture these shoes!';
const materialError: string = 'This material is not valid.';
const dateError: string = 'Date is invalid!';
const heelError: string = 'No such type of heel!';
const distanceError: string = 'Invalid distance!';

const lB: string = '<br>';
 
const clearButton: HTMLButtonElement = document.querySelector('#clearBtn');
const genButton: HTMLButtonElement = document.querySelector('#genBtn');
const genRndSpecButton: HTMLButtonElement = document.querySelector('#genSpecificRndBtn');
const indexInput: HTMLInputElement = document.querySelector('#itemIndexInput');
const itemDisplayer: HTMLDivElement = document.querySelector('#itemDisplay');