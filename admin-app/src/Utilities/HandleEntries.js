
export default function HandleEntries(entries, category) {
    console.log(entries);
    console.log(category);
    
    let query = [];
    if (entries == null || entries.length == 0) return query;

    query = sortByDate(entries);
    console.log(query);

    const response = query.filter((a) => {
        if(category == "ALL"){
            return true;
        } else 
        return a[1].category !== undefined && a[1].category == category;
    });

    console.log(response); 

    return response;
}

function sortByDate(data) {
    return [...data].sort(function compareFn(a, b) {
        let timeStamp = a[1].time;
        let date_a = new Date(timeStamp);
        timeStamp = b[1].time;
        let date_b = new Date(timeStamp);
        return date_b.getTime() - date_a.getTime();
    })
}