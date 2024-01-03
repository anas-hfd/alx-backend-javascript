const response = new getResponseFromAPI((resolve, reject) =>{
const success = true;

if (success) {
    resolve('200 OK')
} else {
    reject('Error!')
}
})