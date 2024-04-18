

const url1 = "https://jsonplaceholder.typicode.com/users"

const Email = async(url1) =>{
    const nameList = []
    const res = await fetch(url1)
    if (res.ok) {
        const json = await res.json()
        json.forEach(element => {
            nameList.push(element.email)
        })

    }
    return nameList
};

Email(url1).then(data =>{
    console.log(data);
})