// document.querySelector('button').addEventListener('click',flipCoin)

// function flipCoin(){
//     const prediction = document.querySelector('#headsTails').value
//     console.log(prediction)

//   fetch(`/api?chosenCoinFlip=${prediction}`)
//     .then(response => response.json())
//     .then((data) => {
//       console.log(data);
//       document.querySelector("#personName").textContent = data.name
//     });
// }

document.querySelector('button').addEventListener('click', palindromeChecker)

function palindromeChecker(){
    const palindrome = document.querySelector('input').value
    console.log(palindrome)

    fetch(`/api?checkedPalindrome=${palindrome}`)
    // fetch url from server 
    .then(res => res.json())
    .then((data) => {
        console.log(data)
        document.querySelector('h4').innerText = data.result
        
    }) 
    .catch (err => {
        console.log(`Error ${err}`)
    })
} 