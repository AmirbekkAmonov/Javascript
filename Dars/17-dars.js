const URL = "https://jsonplaceholder.typicode.com/posts/1"

const gerData = async () => {
    const res = await fetch(URL)
    console.log(res.ok);
    const json = await res.json()
    console.log(json);
    return json
}
gerData()












const url = "https://api.github.com/users/amirbek"

const user = async () => {
    const res = await fetch(url)
    const json = await res.json()
    console.log(json);
}
user()













const url1 = "https://jsonplaceholder.typicode.com/users"

const Email = async (url1) => {
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

Email(url1).then(data => {
    console.log(data);
})