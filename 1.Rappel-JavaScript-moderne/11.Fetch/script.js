fetch('https://jsonplaceholder.typicode.com/users')
    // .then(response => response.json())
    // .then(json => console.log(json))
    .then(data => {
        console.log(data)
        return data.json()
    })
    .then(data => {
        console.log(data)
    })
    .catch(error => {
        console.log(error)
    })

    /* This code is written in JavaScript and it's used to calculate the average of a list of numbers.

    Here's a step-by-step breakdown:
    
    We define an array of numbers called marks that contains seven integers.
    We initialize a variable called moy to zero. This variable will be used to store the sum of the numbers in the marks array.
    We use the reduce method to iterate over each element in the marks array and add it to the moy variable. The reduce method takes a function as an argument, which in this case is (acc, mark) => acc + mark. This function takes two arguments: acc, which represents the accumulated value so far, and mark, which represents the current element being processed. The function returns the sum of acc and mark, which is then used as the new value of acc in the next iteration.
    Finally, we log the value of moy to the console. Since moy contains the sum of all the numbers in the marks array, this will give us the total sum of the numbers.
    To calculate the average, we would need to divide this sum by the number of elements in the marks array, which is seven. However, this step is not included in the provided code.
    
    
    
    
    Explain this code
    
    
    Sure, I'd be happy to explain this code for you!
    
    This code is written in JavaScript and it's used to fetch data from a JSON API endpoint.
    
    Here's a step-by-step breakdown:
    
    We use the fetch function to make a GET request to the URL https://jsonplaceholder.typicode.com/users. This URL returns a JSON array of user objects.
    We use the then method to handle the response from the API. The then method takes a function as an argument, which in this case is response => response.json(). This function takes the response object as an argument and converts it to JSON format using the json method.
    We use another then method to handle the JSON data. The then method takes a function as an argument, which in this case is data => { console.log(data); return data.json(); }. This function takes the JSON data as an argument and logs it to the console. It also returns the JSON data using the json method.
    We use a final then method to handle the JSON data again. The then method takes a function as an argument, which in this case is data => { console.log(data); }. This function takes the JSON data as an argument and logs it to the console.
    */