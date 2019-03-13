document.addEventListener('DOMContentLoaded',()=>{

const fileBtn = document.getElementById('openFile');
const inputFile = document.getElementById('fileElem');
const inputFileName = document.getElementById('fileName');
fileBtn.addEventListener('click', ()=>{
    console.log(inputFile)
    inputFileName.value !== "" 
    ? inputFile.click()
    : alert('le champ image doit être rempli')
})
})